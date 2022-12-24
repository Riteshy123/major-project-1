const enteredtask=require('../config/model/contact');
module.exports.home=function(req,res){
    enteredtask.find({},function(err,tasks){
        if(err){
            console.log("error occured");
            return;
        }
        return res.render('practice',{
               title:"TODO LIST",
               tasks:tasks
            });
    })
}
module.exports.deleteTodo=async function(req,res){
    let ids=req.query.ids;
    ids=ids.split("|");
    console.log(ids);
    await Promise.all(
        ids.map(async(id)=>{
           await enteredtask.findByIdAndDelete(id)
        })
    )
    return res.redirect('back');
  }
  module.exports.createTodo=function(req,res){
    enteredtask.create({
        name:req.body.name,
        date:req.body.date,
        category:req.body.category,
     },function(err,newtask){
           if(err){
            console.log(err);
            return;
           }
           console.log('****',newtask);
           return res.redirect('back');
     })
}
