
function hovr() {
    var hoverfore = new Audio("/sound/globe/hoverfore.wav");
    hoverfore.play();
}
function backtohome() {
    var hoverfore = new Audio("/sound/globe/backsound.wav");
    hoverfore.play();
    setTimeout(redirect,420);
    document.getElementById("details").style.opacity="0%";
}
function redirect() {
 window.location.href="index.html";
}


document.addEventListener('keydown', (event) => {
if (event.key === 'i') {
var zooms = new Audio("/sound/globe/zoom.wav")
zooms.play();
document.getElementById("globe").src="/images/globe/zoomedinglobee.PNG";
document.getElementById("globe").style.width="579px";
document.getElementById("globe").style.height="40%";
document.getElementById("globe").style.transform="scale(1.7)";
document.getElementById("globe").onClick="javascript:zoomout();";

}
});
document.addEventListener('keydown', (event) => {
if (event.key === 'o') {
var zooms2 = new Audio("/sound/globe/zoomout.wav")
zooms2.play();
document.getElementById("globe").src="/images/globe/globee.PNG";
document.getElementById("globe").style.width="577px";
document.getElementById("globe").style.height="45%";
document.getElementById("globe").style.transform="scale(1)";
document.getElementById("globe").onClick="javascript:showtokyo();";

}
});

function zoomOut() {
    var zooms21 = new Audio("/sound/globe/zoomout.wav")
zooms21.play();
document.getElementById("globe").src="/images/globe/globee.PNG";
document.getElementById("globe").style.width="577px";
document.getElementById("globe").style.height="45%";
document.getElementById("globe").style.transform="scale(1)";
document.getElementById("globe").onClick="javascript:showtokyo();";
}

function zoomIn() {
    var zooms12 = new Audio("/sound/globe/zoom.wav")
    zooms12.play();
    document.getElementById("globe").src="/images/globe/zoomedinglobee.PNG";
    document.getElementById("globe").style.width="579px";
    document.getElementById("globe").style.height="40%";
    document.getElementById("globe").style.transform="scale(1.7)";
    
}

function warp() {
    var warpfir = new Audio("/sound/globe/changeperspective2.wav")
warpfir.play();
document.getElementById("globe").style.transform="skew(20deg)";
}

function warpback() {
    var warpfir = new Audio("/sound/globe/changeperspective.wav")
warpfir.play();
document.getElementById("globe").style.transform="skew(-20deg)";
}

function restore() {
    var restores = new Audio("/sound/globe/restore.wav")
restores.play();
document.getElementById("globe").src="/images/globe/globee.PNG";
document.getElementById("globe").style.transform="revert";
document.getElementById("globe").style.filter="revert";
}


function changetemp() {
    var tempz = new Audio("/sound/globe/change.wav")
    tempz.play();
    document.getElementById("globe").style.filter="brightness(1.75)";
}
