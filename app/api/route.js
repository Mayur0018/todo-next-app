import { NextResponse } from "next/server";
export async function GET(){
   return NextResponse.json({msg: "Get Method Hit"});
}   