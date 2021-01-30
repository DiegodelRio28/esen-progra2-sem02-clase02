//agregar el close button y agregarlo a los items de la lista
var myNodelist = document.getElementsByTagName("LI");
for(var i=0; i<myNodelist.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

//dar click en close y ocultar el elemento presionado
var close = document.getElementsByClassName("close");
for(var i=0; i<close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display="none";
    };
}
