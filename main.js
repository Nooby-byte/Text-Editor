function colorChange(){
    document.getElementById("allThetext").style.color = document.getElementById("textColor").value;
}
function bgChange(){
    document.getElementById("allThetext").style.backgroundColor = document.getElementById("bgColor").value;
}
function fontChange(){
    document.getElementById("allThetext").style.fontSize = document.getElementById("fontSize").value;
}
function fontnChange(){
    document.getElementById("allThetext").style.fontFamily = document.getElementById("fontnSize").value;
}
function bolds(){
    if (document.getElementById("bold").checked == true){
        document.getElementById("allThetext").style.fontWeight = "bolder";   
    }else{
        document.getElementById("allThetext").style.fontWeight = "100";   
    }
}
function alignChange(){
    document.getElementById("allThetext").style.textAlign = document.getElementById("fontA").value;
}