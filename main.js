var config = {
  apiKey: "AIzaSyAnGpyMcVmq2rnrawxlAC_7NJYC32DT5kA",
  authDomain: "contact-form-2a645.firebaseapp.com",
  databaseURL: "https://contact-form-2a645.firebaseio.com",
  projectId: "contact-form-2a645",
  storageBucket: "contact-form-2a645.appspot.com",
  messagingSenderId: "14699017266"
};
firebase.initializeApp(config);
var messagesRef=firebase.database().ref('messages');
document.getElementById('contactForm').addEventListener('submit',submitForm);
function submitForm(e){
e.preventDefault();
var name = getInputVal('name');
var company = getInputVal('company');
var email = getInputVal('email');
var phone = getInputVal('phone');
var message = getInputVal('message'); 
saveMessages(name,email,company,phone,message);
document.querySelector('.alert').style.display='block';
setTimeout(function(){
  document.querySelector('.alert').style.display='none';
},3000);
document.getElementById('contactForm').reset();
}
function getInputVal(id){
  return document.getElementById(id).value;
}
function saveMessages(name,email,company,phone,message){
var newMessageRef=messagesRef.push();
newMessageRef.set({
  name:name,
  email:email,
  company:company,
  phone:phone,
  message:message
});
}