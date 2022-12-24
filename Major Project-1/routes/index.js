const express = require('express');
console.log("router called");
const router=express.Router();
const homeController=require('../controller/homecontroller');
router.get('/',homeController.home);
router.post('/enteredtask',homeController.createTodo); //controller for creating todo list
router.get('/deletetask',homeController.deleteTodo);  //controller for deleting list
module.exports=router;