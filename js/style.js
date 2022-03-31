var a=doument.getElementBuId("btn1");
var b=doument.getElementBuId("btn2");
var c=doument.getElementBuId("btn3");
var d=doument.getElementBuId("btn4");
var e=doument.getElementBuId("btn5");

var aa=doument.getElementBuId("first");
var bb=doument.getElementBuId("second");
var cc=doument.getElementBuId("third");
var dd=doument.getElementBuId("forth");
// document.getElementsByClassName("#btn").addEventListener("click",
//     function(event){
//         event.preventDefault()
//     });


a.addEventLinstener("click",function(e){
    e.preventDefault();
})
 function f2(){
     document.getElementById('bb').style.display="block";
     document.getElementById('aa').style.display="none";
     document.getElementById('cc').style.display="none";
     document.getElementById('dd').style.display="none";
 }
// a.addEventListener('click',function(){
//  bb.classList.add('active');  
//  aa.classList.remove('active'); 
//  cc.classList.remove('active');   
//  dd.classList.remove('active');   

// //  bb.classList.remove("hide");  
// //  aa.classList.add("active"); 
// //  cc.classList.add("active");   
// //  dd.classList.add("active");   
// //  ee.classList.add("active"); 
    
// })
// b.addEventLinstener("click",function(){
//     cc.classList.add("active");  
//     aa.classList.remove("active"); 
//     bb.classList.remove("active");   
//     dd.classList.remove("active");   
   
      
//     cc.classList.remove("hide");  
//     aa.classList.add("active"); 
//     bb.classList.add("active");   
//     dd.classList.add("active");   
//     ee.classList.add("active"); 
       
       
//    })
   
