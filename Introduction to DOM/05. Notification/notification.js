function notify(message) {

let notifyDiv= document.getElementById("notification");
notifyDiv.innerText=message;
notifyDiv.style.display="block";
setTimeout(function(){
   notifyDiv.style.display="none";
}, 2000)

}