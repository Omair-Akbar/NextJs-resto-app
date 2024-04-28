import { connectionStr } from "@/app/lib/db";
import { foodScehma } from "@/app/lib/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req,res){

    const id = res.params.id
    let success = false;

    await mongoose.connect(connectionStr,{useNewUrlParser:true}); 
    const result = await foodScehma.findOne({_id:id});

    if(result){
        success = true;
    }

     return NextResponse.json({result,success})
}


export async function PUT(req,res){
    const id = res.params.id;
    const payload = await req.json();
    let success = false;
    await mongoose.connect(connectionStr,{useNewUrlParser:true})
    const result = await foodScehma.findOneAndUpdate({_id:id},payload)
    if(result){
        success = true;
    }
    return NextResponse.json({result,success})
}