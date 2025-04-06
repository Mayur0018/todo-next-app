import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/confing/db";
import TodoModel from "@/lib/models/TodoModels";
const loaddb = async () => {
  await ConnectDB();
};
loaddb();
export async function GET() {
  const Todos = await TodoModel.find({});
  return NextResponse.json({ todos: Todos});
}
export async function POST(request) {
  const { title, description } = await request.json();
  await TodoModel.create({
    title,
    description,
  });
  return NextResponse.json({ msg: "Todo Created" });
}
export async function DELETE(request) {
const  mongoId = await request.nextUrl.searchParams.get("mongoId")
await TodoModel.findByIdAndDelete(mongoId)
return NextResponse.json({msg: "Todo Deleted"}) 
}
export async function PUT(request) {
  const  mongoId = await request.nextUrl.searchParams.get("mongoId")
  await TodoModel.findByIdAndDelete(mongoId)
  return NextResponse.json({msg: "Todo Deleted"}) 
  }