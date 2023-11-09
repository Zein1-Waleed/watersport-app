






let jetski = document.getElementById("jet");
let banana = document.getElementById("banana");
let donut = document.getElementById("donut");
let kayak = document.getElementById("kayak");
let boat = document.getElementById("miniboat")
let landing = document.getElementById("landing");
let ilst = document.querySelectorAll(".ilst");
let images = ["./images/jetski.webp", "./images/banana.webp", "./images/donut.webp", "./images/kayak.webp","./images/boat.jpeg"];


let counter = 0;
let autoToggleInterval;

function toggleImage() {
    landing.style.backgroundImage = `url('${images[counter]}')`;
    ilst.forEach((ils) => {
        ils.classList.remove("active");
    });
    ilst[counter].classList.add("active");
    counter++;

    if (counter === images.length) {
        counter = 0;
    }
}


function startAutoToggle() {
    autoToggleInterval = setInterval(toggleImage, 3000);
}

// Start the automatic image toggling
startAutoToggle();

jetski.onclick = () => {
    ilst.forEach((ils) => {
        ils.classList.remove("active");
    });
    counter = 0
    landing.style.backgroundImage = `url('${images[counter]}')`;
    ilst[counter].classList.add("active");
    
    // Reset the automatic image toggling after 3 seconds
    clearInterval(autoToggleInterval);
    setTimeout(startAutoToggle, 0);
};
donut.onclick = () => {
    ilst.forEach((ils) => {
        ils.classList.remove("active");
    });

    counter = 2
    landing.style.backgroundImage = `url('${images[counter]}')`;
    ilst[counter].classList.add("active");
    
    // Reset the automatic image toggling after 3 seconds
    clearInterval(autoToggleInterval);
    setTimeout(startAutoToggle, 0);
};
banana.onclick = () => {
    ilst.forEach((ils) => {
        ils.classList.remove("active");
    });

    counter = 1
    landing.style.backgroundImage = `url('${images[counter]}')`;
ilst[counter].classList.add("active");
    // Reset the automatic image toggling after 3 seconds
    
    clearInterval(autoToggleInterval);
    setTimeout(startAutoToggle, 3000);
};
kayak.onclick = () => {

    ilst.forEach((ils) => {
        ils.classList.remove("active");
    });
    counter = 3
    landing.style.backgroundImage = `url('${images[counter]}')`;
    ilst[counter].classList.add("active");
    
    // Reset the automatic image toggling after 3 seconds
    clearInterval(autoToggleInterval);
    setTimeout(startAutoToggle, 3000);
};

boat.onclick =()=>{
    ilst.forEach((ils) => {
        ils.classList.remove("active");
    });
    counter = 4
    landing.style.backgroundImage = `url('${images[counter]}')`;
    ilst[counter].classList.add("active");
    
    // Reset the automatic image toggling after 3 seconds
    clearInterval(autoToggleInterval);
    setTimeout(startAutoToggle, 3000);
}


const acc_btns = document.querySelectorAll(".accordion-header");
const acc_contents = document.querySelectorAll(".accordion-body");
const accr = document.querySelector(".accordition")

acc_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // acc_contents.forEach((acc) => {
    //   if (
    //     e.target.nextElementSibling !== acc &&
    //     acc.classList.contains("active")
    //   ) {
    //     acc.classList.remove("active");
    //     acc_btns.forEach((btn) => btn.classList.remove("active"));
    //   }
    // });

    const panel = btn.nextElementSibling;
    panel.classList.toggle("active");
    btn.classList.toggle("active");
  });
});

window.onclick = (e) => {
  if (!e.target.matches(".accordion-header")) {
    acc_btns.forEach((btn) => btn.classList.remove("active"));
    acc_contents.forEach((acc) => acc.classList.remove("active"));
  }
};



let slide = document.getElementById("slide")
let explore = document.getElementsByClassName("explore")

let kayakbtn = document.getElementById("kayakbtn");

kayakbtn.onclick = ()=>{
    slide.style.backgroundImage = `url("./images/kayak.webp")`
    //slide.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${kayakbtn.parentElement.parentElement.parentElement.querySelector("img").src})`
    slide.classList.add("active")
    slide.innerHTML = `
            <div class = "slide-text">
                <div class = "activity-name">
                    <h3>${kayakbtn.parentElement.parentElement.parentElement.getElementsByTagName("h3")[0].textContent} </h3>
                    <div class = "info"><h4>1 person for 60 min - 50 aed </h4></div>
                </div>
                <div class = "activity-desc">
                    <p>peaceful paddling, nature connection, solo serenity, fitness-friendly, and waterway exploration. 🚣‍♂️</p>
                </div>
            </div>
    `
}




let donutBtn = document.getElementById("donutbtn")


donutBtn.onclick = () =>{
    slide.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${donutBtn.parentElement.parentElement.parentElement.querySelector("img").src})`
    slide.classList.add("active")
    slide.innerHTML = `
            <div class = "slide-text">
                <div class = "activity-name">
                    <h3>${donutBtn.parentElement.parentElement.parentElement.getElementsByTagName("h3")[0].textContent} </h3>
                    <div class = "info"><h4>for 30 min - 300 aed </h4></div>
                </div>
                <div class = "activity-desc">
                    <p>Donut boat's a blast! Chill with buds, spin around, and soak up the good vibes on the water. 🍩🚤✨</p>
                </div>
            </div>
    `
}






let bananaBtn = document.getElementById("bananabtn")


bananaBtn.onclick = ()=>{
    slide.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${bananaBtn.parentElement.parentElement.parentElement.querySelector("img").src})`
    slide.classList.add("active")
    slide.innerHTML = `
            <div class = "slide-text">
                <div class = "activity-name">
                    <h3>${bananaBtn.parentElement.parentElement.parentElement.getElementsByTagName("h3")[0].textContent} </h3>
                    <div class = "info"><h4>for 30 min - 300 aed </h4></div>
                </div>
                <div class = "activity-desc">
                    <p>Banana boat vibes with the squad—laughter, waves, and all-around good times at sea! 🌊</p>
                </div>
            </div>
    `
}




let miniboatbtn = document.getElementById("miniboatbtn");

miniboatbtn.onclick  =()=>{
    slide.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${miniboatbtn.parentElement.parentElement.parentElement.querySelector("img").src})`
    slide.classList.add("active")
    slide.innerHTML = `
            <div class = "slide-text">
                <div class = "activity-name">
                    <h3>${miniboatbtn.parentElement.parentElement.parentElement.getElementsByTagName("h3")[0].textContent} </h3>
                    <div class = "info"><h4>for 30 min - 300 aed </h4></div>
                </div>
                <div class = "activity-desc">
                    <p>Mini boat, big fun! Zip around, feel the wind, and make waves in style. 🚤</p>
                </div>
            </div>
    `
}






















let jetskibtn = document.getElementById("jetskibtn");



jetskibtn.onclick = ()=>{
    slide.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${jetskibtn.parentElement.parentElement.parentElement.querySelector("img").src})`
    slide.classList.add("active")
    slide.innerHTML = `
            <div class = "slide-text">
                <div class = "activity-name">
                    <h3>${jetskibtn.parentElement.parentElement.parentElement.getElementsByTagName("h3")[0].textContent} </h3>
                    <div class = "info"><h4>for 30 min - 150 aed </h4></div>
                </div>
                <div class = "activity-desc">
                    <p> high-speed thrills, water adventures, quick maneuvers, adrenaline kicks, and aquatic excitement. 🌊🚀</p>
                </div>
            </div>
    `
}




document.body.onclick = (e) =>{
    
    if(e.target.parentElement ==  slide){
        slide.classList.remove("active")
        
    }
    if(e.target.parentElement.parentElement == slide){
        slide.classList.remove("active")
    }
    if(e.target.parentElement.parentElement.parentElement == slide){
        slide.classList.remove("active")
    }
    if(e.target.parentElement.parentElement.parentElement.parentElement == slide){
        slide.classList.remove("active")
    }
    if(e.target.parentElement.parentElement.parentElement == slide){
        slide.classList.remove("active")
    }
    // if(e.target !=  donutBtn){
    //     slide.classList.remove("active")
    // }
    // if(e.target !=  miniboatbtn){
    //     slide.classList.remove("active")
    // }
}
