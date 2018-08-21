function create(sentences) {
    let divGlaven=document.getElementById("content")
    
    

for (sentences of sentences) {
    
    let div= document.createElement("div");
    let paragraf= document.createElement("p");
    paragraf.textContent=sentences;
    paragraf.style.display="none";
    div.addEventListener("click",function(){
        div.childNodes["0"].style.display="block";

    })
    div.appendChild(paragraf);  
    divGlaven.appendChild(div);

   

    
}


}