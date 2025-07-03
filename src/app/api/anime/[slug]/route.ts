// File: src/app/api/anime/[slug]/route.ts
import { NextRequest, NextResponse } from "next/server";
import anime from "@/utils/anime";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }  // <-- structural pattern: destructuring here
) {
  try {
    const slug = params.slug;
    const data = await anime(slug);

    if (!data) {
      return NextResponse.json({ error: "Anime not found" }, { status: 404 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Error fetching anime:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
