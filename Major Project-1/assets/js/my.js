let btn=document.getElementById('delete');
  function deletethetask(todos){
    console.log(todos);
    let str="";
    todos.forEach((val,index)=>{
        if(index==0){
            str+=val.value;
        }
        else{
            str+="|"+val.value;
        }
    })
    console.log(str);
    let delurl="/deletetask?ids=";
    delurl+=str;
    alertbox();
    setTimeout(() => {
        window.location.assign(delurl);
    },3000);
}
btn.addEventListener('click',function(){
    let alltask=document.querySelectorAll(".taskdelete");
    if(alltask.length>0){
    let lenght=alltask.length;
    let  todos=[];
    for(let i of alltask){
        let obj={};
           obj.value=i.value;
           obj.checked=i.checked;
           todos.push(obj);
    }
    todos=todos.filter((doc)=>{
        if(doc.checked==true){
            return 1;
        }
    })
    if(todos.length>0){
    deletethetask(todos);
   }
 } 
})
 function alertbox(){
    console.log(Swal);
    Swal.fire(
        'Good job!',
        'Task deleted!',
        'success'
    )      
}