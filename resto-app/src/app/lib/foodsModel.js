const { default: mongoose } = require("mongoose");

const foodModel = new mongoose.Schema({
    name:String,
    price:Number,
    path:String,
    description:String,
    resto_id:mongoose.Schema.Types.ObjectId
});
export const foodScehma = mongoose.models.foods || mongoose.model("foods",foodModel);