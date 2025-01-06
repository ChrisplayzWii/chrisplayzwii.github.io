

function initloading() {
    document.getElementById("loadicon").style.display="block";
    setTimeout(stoploading,4300); // if page dont load past this point loader stops xD
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

function globetransform() {
    var glb = new Audio("/sound/globeopen.wav");
    glb.play();
    document.getElementById("mainpg").style.backgroundColor="black";
    document.getElementById("mainpg").style.Color="white";
    document.getElementById("info").style.display="none";
    document.getElementById("globetrans").style.display="block";
    setTimeout(globeopen,900);
}
function globeopen() {
    window.location.href="forecast.html";
}
function globesound() {
    var globegrab = new Audio("/sound/forecast_grab_globe.wav");
    globegrab.play();
}