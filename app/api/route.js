import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/confing/db";
import TodoModel from "@/lib/models/TodoModels";
const loaddb = async () => {
  await ConnectDB();
};
loaddb();
export async function GET() {
  return NextResponse.json({ msg: "Get Method Hit" });
}
export async function POST(request) {
  const { titile, description } = await request.join();
  await TodoModel.create({
    titile,
    description,
  });
  return NextResponse.json({ msg: "Get Method Hit" });
}
