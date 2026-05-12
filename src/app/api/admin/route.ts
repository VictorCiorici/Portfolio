import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

/**
 * @file api/admin/route.ts
 * @description API endpoint for persistent data management.
 * This route handles reading and writing the central portfolio.json file.
 */

/**
 * Persists updated portfolio data to the local filesystem.
 * This is restricted to 'development' mode to prevent unauthorized writes in production.
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // SECURITY: Only allow filesystem writes in a local development environment.
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json({ error: "Admin actions only allowed in development" }, { status: 403 });
    }

    const filePath = path.join(process.cwd(), "src/data/portfolio.json");
    
    // Write the file with pretty printing (2-space indent) for human readability.
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");

    // PURGE CACHE: Trigger On-Demand Revalidation for all static/dynamic routes 
    // to ensure the UI immediately reflects the new disk state.
    revalidatePath("/");
    revalidatePath("/evolution");
    revalidatePath("/projects");
    revalidatePath("/contact");
    revalidatePath("/manifesto");
    revalidatePath("/tech-stack");

    return NextResponse.json({ success: true, message: "Portfolio data updated successfully" });
  } catch (error) {
    console.error("Failed to update portfolio data:", error);
    return NextResponse.json({ error: "Failed to update portfolio data" }, { status: 500 });
  }
}

/**
 * Retrieves the raw portfolio JSON directly from the disk.
 */
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "src/data/portfolio.json");
    const fileContent = await fs.readFile(filePath, "utf-8");
    return NextResponse.json(JSON.parse(fileContent));
  } catch (error) {
    console.error("API Read Error:", error);
    return NextResponse.json({ error: "Failed to read portfolio data" }, { status: 500 });
  }
}
