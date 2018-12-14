var mongoose=require('mongoose');

var  mathchema=new mongoose.Schema({
    username:String,
    mathformula:String
});

mongoose.model('MathPepole',mathchema);