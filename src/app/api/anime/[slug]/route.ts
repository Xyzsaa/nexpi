import { NextResponse, NextRequest } from "next/server";
import anime from "@/utils/anime";

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const data = await anime(params.slug);
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Error fetching anime:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
