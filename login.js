var c = document;
c.getElementById('colect2').style.display = "none";
var create_ac = c.getElementById('create_ac_btn1');
create_ac.addEventListener('click', function(){
       var c = document;
      c.getElementById('colect1').style.display = "none"; 
      c.getElementById('colect2').style.display = "block";
      c.getElementById('barmsg').innerHTML = "Create New Account";   
});
//form validation
var create_ac2 = c.getElementById('create_ac_btn2');
create_ac2.addEventListener('click', function(){
   firstname  = c.getElementById('create_firstname').value; 

   secondname = c.getElementById('create_secondname').value;
   email      = c.getElementById('create_email').value;
    
   pass       = c.getElementById('inp6').value;
   password     = c.getElementById('inp7').value;
if(firstname ==="" && secondname ==="" && email ==="" && pass =="" && password ===""){
   alert("Fill all fields before you submit");
} 
     if(pass!=="" && pass.length < 10){
           alert("Password too weak(Should be atleast 15 characters)");
     }    
else   if (password !== pass){
         alert("Passwords don't match.Please check properly");
   }
else if(pass==="" && password !==""){
     alert("First fill the password");
}
      else if(firstname !==''&& secondname !=='' && email !== ''){
         c.getElementById('barmsg').innerHTML = firstname +   secondname  + ",Account succcesfully created";
      }     
});
   login = c.getElementById('loginbtn');
   login.addEventListener('click', function(){
   firstname = c.getElementById('create_firstname').value;
   username  = c.getElementById('inp1').value;   
});


// the google mail effect on forms
var inp1 = c.getElementById('inp1');
inp1.addEventListener('click', function(){
   var lab1 = c.getElementById('label1');
         lab1.style.paddingTop = "4px";
         lab1.style.color = "deepskyblue";
         lab1.style.fontSize = "11px";
         lab1.style.width = "fill";
         lab1.style.backgroundColor = "black";
         lab1.style.paddingLeft = "3px";
         lab1.style.paddingRight = "3px";
         lab1.style.marginLeft = "60px";
   });
var inp2 = c.getElementById('inp2');
inp2.addEventListener('focus', function(){
   var lab2 = c.getElementById('label2');
         lab2.style.paddingTop = "4px";
         lab2.style.color = "deepskyblue";
         lab2.style.fontSize = "11px";
         lab2.style.width = "fill";
         lab2.style.backgroundColor = "black";
         lab2.style.paddingLeft = "3px";
         lab2.style.paddingRight = "3px";
         lab2.style.marginLeft = "60px";
   });

 var inp3 = c.getElementById('create_firstname');
inp3.addEventListener('click', function(){
   var lab3 = c.getElementById('label3');
         lab3.style.paddingTop = "4px";
         lab3.style.color = "deepskyblue";
         lab3.style.fontSize = "11px";
         lab3.style.width = "fill";
         lab3.style.backgroundColor = "black";
         lab3.style.paddingLeft = "3px";
         lab3.style.paddingRight = "3px";
         lab3.style.marginLeft = "60px";
   });
var inp4 = c.getElementById('create_secondname');
inp4.addEventListener('focus', function(){
   var lab4 = c.getElementById('label4');
         lab4.style.paddingTop = "4px";
         lab4.style.color = "deepskyblue";
         lab4.style.fontSize = "11px";
         lab4.style.width = "fill";
         lab4.style.backgroundColor = "black";
         lab4.style.paddingLeft = "3px";
         lab4.style.paddingRight = "3px";
         lab4.style.marginLeft = "60px";
   });

  var inp5 = c.getElementById('create_email');
inp5.addEventListener('click', function(){
   var lab5 = c.getElementById('label5');
         lab5.style.paddingTop = "4px";
         lab5.style.color = "deepskyblue";
         lab5.style.fontSize = "11px";
         lab5.style.width = "fill";
         lab5.style.backgroundColor = "black";
         lab5.style.paddingLeft = "3px";
         lab5.style.paddingRight = "3px";
         lab5.style.marginLeft = "60px";
   });
var inp6 = c.getElementById('inp6');
inp6.addEventListener('focus', function(){
   var lab6 = c.getElementById('label6');
         lab6.style.paddingTop = "4px";
         lab6.style.color = "deepskyblue";
         lab6.style.fontSize = "11px";
         lab6.style.width = "fill";
         lab6.style.backgroundColor = "black";
         lab6.style.paddingLeft = "3px";
         lab6.style.paddingRight = "3px";
         lab6.style.marginLeft = "60px";
   });


   var inp7 = c.getElementById('inp7');
inp7.addEventListener('focus', function(){
   var lab7 = c.getElementById('label7');
         lab7.style.paddingTop = "4px";
         lab7.style.color = "deepskyblue";
         lab7.style.fontSize = "11px";
         lab7.style.width = "fill";
         lab7.style.backgroundColor = "black";
         lab7.style.paddingLeft = "3px";
         lab7.style.paddingRight = "3px";
         lab7.style.marginLeft = "60px";
   });
