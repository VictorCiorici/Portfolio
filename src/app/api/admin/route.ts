import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Security check: Only allow in development
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json({ error: "Admin actions only allowed in development" }, { status: 403 });
    }

    const filePath = path.join(process.cwd(), "src/data/portfolio.json");
    
    // Write the file with pretty printing
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");

    return NextResponse.json({ success: true, message: "Portfolio data updated successfully" });
  } catch (error) {
    console.error("Failed to update portfolio data:", error);
    return NextResponse.json({ error: "Failed to update portfolio data" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "src/data/portfolio.json");
    const fileContent = await fs.readFile(filePath, "utf-8");
    return NextResponse.json(JSON.parse(fileContent));
  } catch (error) {
    return NextResponse.json({ error: "Failed to read portfolio data" }, { status: 500 });
  }
}
