import { NextRequest, NextResponse } from "next/server";
import anime from "@/utils/anime";

type Context = {
  params: { slug: string };
};

export async function GET(request: NextRequest, context: Context) {
  try {
    const { slug } = context.params;
    const data = await anime(slug);
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
