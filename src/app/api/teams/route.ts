import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: teams, error } = await supabase
      .from("Teams")
      .select()
      .order("team_id", { ascending: true });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ teams }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err: "Internal Server Error" }, { status: 500 });
  }
}