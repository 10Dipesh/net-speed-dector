let startTime, endTime;
let imageSize = "";
let image = new Image();
let bitOutput = document.querySelector('#bits');
let kbOutput = document.querySelector('#kbps');
let mbOutput = document.querySelector('#mbps');

let imageLink = "https://source.unsplash.com/random?topics=nature";

image.onload = async function(){
    endTime = new Date().getTime();

    await fetch(imageLink).then((response) =>{
        imageSize = response.headers.get("content-length");
        calculateSpeed();
    });
};

const init = async () =>{
    startTime = new Date().getTime();
    image.src = imageLink;
}
window.onload=() =>init();

let calculateSpeed=()=>{
let timeDuration = (endTime - startTime) / 1000;

let loadBits = imageSize* 8;
let speedInBps = (loadBits/timeDuration).toFixed(2);
let speedInKbps = (speedInBps /1024).toFixed(2);
let speedInMbps = (speedInKbps / 1024).toFixed(2);


bitOutput.innerHTML+=`${speedInBps}`;
kbOutput.innerHTML+=`${speedInKbps}`;
mbOutput.innerHTML+=`${speedInMbps}`;
}
