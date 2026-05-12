import fs from "fs";
import path from "path";

/**
 * @file server-data.ts
 * @description Secure, server-side data fetching module.
 * This module is designed to be used exclusively in Server Components and API routes.
 * It bypasses the Webpack/Turbopack bundling of portfolio.json to allow reading fresh data 
 * from the filesystem during development and SSR.
 */

/**
 * Reads the latest portfolio data directly from the filesystem.
 * @template T - The return type after processing.
 * @param fallbackData - The static bundled data to use if file reading fails.
 * @param processor - A function to normalize and process the raw JSON (typically processData from portfolio.ts).
 * @returns The processed portfolio data.
 */
export function getFreshPortfolioData<T>(fallbackData: any, processor: (data: any) => T): T {
  try {
    // Construct absolute path to the data store
    const filePath = path.join(process.cwd(), "src/data/portfolio.json");
    
    // Check if file exists to prevent throwing on missing file
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      
      // Parse and process the fresh content
      return processor(JSON.parse(fileContent));
    }
  } catch (error) {
    // Fail gracefully: log the error and use the bundled fallback data
    console.warn("Failed to read portfolio.json from disk. Falling back to bundled version.", error);
  }
  
  return processor(fallbackData);
}
