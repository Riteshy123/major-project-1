const mongoose=require('mongoose');
const enteredtaskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
});
const enteredtask=mongoose.model('enteredtask',enteredtaskSchema);
module.exports=enteredtask;