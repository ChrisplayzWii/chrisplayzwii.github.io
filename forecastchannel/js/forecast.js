function homepage() {
    var glb = new Audio("/forecastchannel/sound/forecast_back.wav");
    glb.play();
    document.getElementById("mainpg").style.backgroundColor="black";
    document.getElementById("mainpg").style.opacity="0%";
    document.getElementById("mainpg").style.overflow="hidden";
    setTimeout(redirhome,900);
}
function redirhome() {
    window.location.href="https://chrisplayzyt.github.io";
}

function globetransform() {
    var glb = new Audio("/forecastchannel/sound/globeopen.wav");
    glb.play();
    document.getElementById("mainpg").style.backgroundColor="black";
    document.getElementById("mainpg").style.Color="white";
    document.getElementById("details").style.display="none";
    document.getElementById("mainpg").style.overflow="hidden";
    document.getElementById("globetrans").style.display="block";
    setTimeout(globeopen,900);
}
function globeopen() {
    window.location.href="globe.html";
}

function showcontrols() {
    document.getElementById("controlsmenu").style.opacity="100%";
    document.getElementById("controlsmenu").style.backgroundSize="680px";
    document.getElementById("controlsmenu").style.visibility="visible";
}
function hidecontrols() {
    document.getElementById("controlsmenu").style.opacity="0%";
    document.getElementById("controlsmenu").style.backgroundSize="150px";
    document.getElementById("controlsmenu").style.visibility="hidden";
}

function hovr() {
    var hoverfore = new Audio("/forecastchannel/sound/forecast_hover.wav");
    hoverfore.play();
}


function clik() {
    var clk = new Audio("/forecastchannel/sound/WTR_SE_TENKI.wav");
    clk.play();
}