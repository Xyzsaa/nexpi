import { NextRequest, NextResponse } from "next/server";
import anime from "@/utils/anime";

export async function GET(request: NextRequest, context: { params: { slug: string } }) {
  try {
    const slug = context.params.slug;
    const data = await anime(slug);

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Error fetching anime:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
