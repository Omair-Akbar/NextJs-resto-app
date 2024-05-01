import { connectionStr } from "@/app/lib/db";
import { foodScehma } from "@/app/lib/foodsModel";
import { restaurantSchema } from "@/app/lib/restaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req,res){
    let id = res.params.id;
    let success = false;
    await mongoose.connect(connectionStr,{useNewUrlParser:true})
    const detail = await restaurantSchema.findOne({_id:id})
    const foodItems = await foodScehma.find({resto_id:id})
    if(detail || foodItems){
        success = true;   
}
 return NextResponse.json({detail,foodItems,success})
}