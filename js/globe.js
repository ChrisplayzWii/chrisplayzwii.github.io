
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


function zoomOut() {
    var zooms21 = new Audio("/sound/globe/zoomout.wav")
zooms21.play();
document.getElementById("globe").src="/images/globe/globee.PNG";
document.getElementById("globe").style.width="577px";
document.getElementById("globe").style.height="45%";
document.getElementById("globe").style.transform="scale(1)";
document.getElementById("tokyoselector").style.display="none";
}

function zoomIn() {
    var zooms12 = new Audio("/sound/globe/zoom.wav")
    zooms12.play();
    document.getElementById("globe").style.width="579px";
    document.getElementById("globe").style.height="40%";
    document.getElementById("globe").style.transform="scale(1.7)";
    document.getElementById("tokyoselector").style.display="block";
}

let currentRotation = 0;

function warp(rotation) {
    var warpfir = new Audio("/sound/globe/changeperspective2.wav");
    warpfir.play();
    document.getElementById("globe").style.transform = `rotate3d(1, 2, 3, ${rotation}deg)`;
}

function warpback(rotation) {
    var warpfir = new Audio("/sound/globe/changeperspective.wav");
    warpfir.play();
    document.getElementById("globe").style.transform = `rotate3d(1, 2, 3, ${rotation}deg)`;
}

function warpforbtn() {
    currentRotation += 150; 
    warp(currentRotation);

    var warrrp = document.getElementById("warp1btn");
    warrrp.classList.add("active");
    setTimeout(() => warrrp.classList.remove("active"), 100);
}

function warpbtnback() {

        currentRotation -= 150; 
        warp(currentRotation);

        var warrrpreverse = document.getElementById("warpbackbtn");
        warrrpreverse.classList.add("active");
        setTimeout(() => warrrpreverse.classList.remove("active"), 100);
}

function showcontrols() {
    var warpfir = new Audio("/sound/globe/WTR_SE_TENKI2.wav")
    warpfir.play();
    document.getElementById("controlsmenu").style.opacity="100%";
    document.getElementById("controlsmenu").style.backgroundSize="680px";
    document.getElementById("controlsmenu").style.visibility="visible";
}
function hidecontrols() {
    var warpfir = new Audio("/sound/globe/WTR_SE_TENKI2_RET.wav")
    warpfir.play();
    document.getElementById("controlsmenu").style.opacity="0%";
    document.getElementById("controlsmenu").style.backgroundSize="150px";
    document.getElementById("controlsmenu").style.visibility="hidden";
}

// KEYS

// zoom in
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
    zoomIn();
    
    var inzoom = document.getElementById("zoominbtn");
    inzoom.classList.add("active");
    setTimeout(revertzoomin,100);
    }
    });


    
    // zoom out 
    document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
    zoomOut();
    
    var outzoom = document.getElementById("zoomoutbtn");
    outzoom.classList.add("active");
    setTimeout(revertzoomout,100);
    
    }
    });

    

// warp 1
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        currentRotation += 150; 
        warp(currentRotation);

        var warrrp = document.getElementById("warp1btn");
        warrrp.classList.add("active");
        setTimeout(() => warrrp.classList.remove("active"), 100);
    }
});


    // warp 2
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            currentRotation -= 150; 
            warp(currentRotation);
    
            var warrrpreverse = document.getElementById("warpbackbtn");
            warrrpreverse.classList.add("active");
            setTimeout(() => warrrpreverse.classList.remove("active"), 100);
        }
    });

// Controls
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') { 
         showcontrols();
    }
});


    // revert after keys pressed
    function revertzoomout() {
        var element = document.getElementById("zoomoutbtn");
    element.classList.remove("active");
    }
    function revertzoomin() {
        var element = document.getElementById("zoominbtn");
    element.classList.remove("active");
    }

    function revertwarp1() {
        var element = document.getElementById("warp1btn");
    element.classList.remove("active");
    }
    function revertwarp2() {
        var element = document.getElementById("warpbackbtn");
    element.classList.remove("active");
    }
    function revertrestore() {
        var element = document.getElementById("restorebtn");
    element.classList.remove("active");
    }


function restore() {
    var restores = new Audio("/sound/globe/restore.wav")
restores.play();
currentRotation = 0;
document.getElementById("globe").src="/images/globe/globee.PNG";
document.getElementById("globe").style.transform="revert";
document.getElementById("globe").style.filter="revert";
}


function changetemp() {
    var tempz = new Audio("/sound/globe/change.wav")
    tempz.play();
    document.getElementById("globe").style.filter="brightness(1.75)";


}
