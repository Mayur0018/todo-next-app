import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/confing/db";

const loaddb = async () => {
  await ConnectDB();
};
loaddb();
export async function GET() {
  return NextResponse.json({ msg: "Get Method Hit" });
}
