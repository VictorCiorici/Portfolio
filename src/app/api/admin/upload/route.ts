import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

/**
 * @file api/admin/upload/route.ts
 * @description API endpoint for uploading assets (Avatar, Resume, Project Images).
 * Files are saved directly to the /public directory.
 */

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const type = formData.get("type") as string; // 'resume', 'avatar', or 'project'

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // SECURITY: Only allow filesystem writes in a local development environment.
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json({ error: "Admin actions only allowed in development" }, { status: 403 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    let fileName = "";
    
    // Determine the target filename based on the upload type
    if (type === "resume") {
      fileName = "resume.pdf";
    } else if (type === "avatar") {
      const ext = file.name.split(".").pop();
      fileName = `avatar.${ext}`;
    } else if (type === "project") {
      // For projects, we preserve the original name (sanitized) to avoid collisions
      const ext = file.name.split(".").pop();
      const sanitizedName = file.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      fileName = `project_${Date.now()}_${sanitizedName}.${ext}`;
    } else {
      return NextResponse.json({ error: "Invalid upload type" }, { status: 400 });
    }

    // Ensure the filename is safe for the file system
    const safeFileName = fileName.replace(/\.{2,}/g, '.'); 
    const filePath = path.join(process.cwd(), "public", safeFileName);
    
    await fs.writeFile(filePath, buffer);

    return NextResponse.json({ 
      success: true, 
      message: `${type} uploaded successfully`,
      path: `/${safeFileName}`
    });
  } catch (error) {
    console.error("Upload failed:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
