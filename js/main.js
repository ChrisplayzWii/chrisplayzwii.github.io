

function initloading() {
    document.getElementById("loadicon").style.display="block";
    setTimeout(stoploading,4500); // if page dont load past this point loader stops xD
    document.getElementById("loadingsound").play();
    document.getElementById("loadingsound").currentTime = 0;
}

function stoploading() {
    document.getElementById("loadicon").style.display="none";
    document.getElementById("loadingsound").pause();
}

function wiihover() {
    var hoverwii = new Audio("/sound/wiishopsounds/2.wav");
    hoverwii.play();
}
