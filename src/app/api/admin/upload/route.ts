import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const type = formData.get("type") as string; // 'resume' or 'avatar'

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Security check: Only allow in development
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json({ error: "Admin actions only allowed in development" }, { status: 403 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    let fileName = "";
    if (type === "resume") {
      fileName = "resume.pdf";
    } else if (type === "avatar") {
      const ext = file.name.split(".").pop();
      fileName = `avatar.${ext}`;
    } else {
      return NextResponse.json({ error: "Invalid upload type" }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), "public", fileName);
    await fs.writeFile(filePath, buffer);

    return NextResponse.json({ 
      success: true, 
      message: `${type} uploaded successfully`,
      path: `/${fileName}`
    });
  } catch (error) {
    console.error("Upload failed:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
