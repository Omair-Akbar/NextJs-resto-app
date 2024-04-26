const { default: mongoose } = require("mongoose");

const restaurantModel = new mongoose.Schema({
    email:String,
    city:String,
    street:String,
    phone_n:String,
    password:String

});

export const restaurantSchema = mongoose.models.restaurants
 || mongoose.model("restaurants",restaurantModel);