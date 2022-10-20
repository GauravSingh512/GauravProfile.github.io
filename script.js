function myfunctionAdd(){
    console.log("data");
//...............Form data......................//
let fname = document.getElementById('fname').value;
let lname =  document.getElementById('lname').value;
let email = document.getElementById('email').value;
let phone = document.getElementById('phone').value;
let Message = document.getElementById('Message').value;
var myHeaders = new Headers();
myHeaders.append("Cookie", "1a99390653=fa937bf8820a337da6a65156d344d3c2; JSESSIONID=25880C39F48F44BDF177F7273CD5A88B; _zcsr_tmp=ebfd9a9f-f830-4988-a896-c209f4b3cbb1; crmcsr=ebfd9a9f-f830-4988-a896-c209f4b3cbb1");

var formdata = new FormData();


var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://www.zohoapis.com/crm/v2/functions/getformdata/actions/execute?auth_type=apikey&zapikey=1003.05ea2a5c8d3fc26a700e6693582dda56.3e6654b5ab590ee87219d8611c85bb26&fname="+fname+"&lname="+lname+"&email="+email+"&phone="+phone+"&Message="+Message, { mode: 'no-cors'}, requestOptions)
  .then(response =>console.log(response))
  .then(result => console.log(result) + alert("The form was submitted"))
  .catch(error => console.log('error', error));



 document.getElementById('fname').value = "";
  document.getElementById('lname').value = "";
 document.getElementById('email').value = "";
 document.getElementById('phone').value= "";
 document.getElementById('Message').value = "";

}
  var buttonbtn = document.getElementById("submit");
  buttonbtn.addEventListener("click", myfunctionAdd);