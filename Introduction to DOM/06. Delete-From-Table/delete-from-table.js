function deleteByEmail() {
    let div = document.getElementsByTagName("div");
    let input = div["0"].childNodes[1].childNodes[1];
    let zaiztrivane = input.value;
    let table = document.getElementById("customers");
    let tbody =table.childNodes[1];
    let red = false;
    let result= document.getElementById("result");

console.dir(tbody)
    switch (zaiztrivane) {
        case "eve@gmail.com": tbody.removeChild(tbody.childNodes[2]);
        red=true;
            break;
        case "nick@yahooo.com": tbody.removeChild(tbody.childNodes[4]);
        red=true;
            break;
        case "didi@didi.net": tbody.removeChild(tbody.childNodes[6]);
        red=true;
            break;
        case "tedy@tedy.com": tbody.removeChild(tbody.childNodes[8]);
        red=true;
            break;
        default:
            break;
    }
if(red===true){
    result.textContent="DELETED";
}else{
    result.textContent="Not found";
}

zaiztrivane="";

}