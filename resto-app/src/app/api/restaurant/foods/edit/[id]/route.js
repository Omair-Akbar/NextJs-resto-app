import { connectionStr } from "@/app/lib/db";
import { foodScehma } from "@/app/lib/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req,res){
    const id = res.params.id
  
    let success = false;
    await mongoose.connect(connectionStr,{useNewUrlParser:true}); 
    const result = await foodScehma.findOne({_id:id});


     return NextResponse.json({result,success})
}