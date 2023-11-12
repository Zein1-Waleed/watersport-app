
let heroImage = document.querySelector(".hero-image");
let showMenu = false;
let del = 3;
let i = 1;

let tl = gsap.timeline({
  repeat: -1,
  yoyo: true,
  ease: "expo.out"
});



gsap.set(["#hero-1 h2, #hero-1 h1, #hero-1 h3"], {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
});

gsap.set(
  [
    `#hero-2 h2, #hero-3 h2, #hero-4 h2, #hero-5 h2,#hero-6 h2,
     #hero-2 h1, #hero-3 h1, #hero-4 h1, #hero-5 h1 #hero-6 h1,
     #hero-2 h3, #hero-3 h3, #hero-4 h3, #hero-5 h3,#hero-6 h3`
  ],
  {
    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
  }
);

while (i < 6) {
  tl.to(`#hero-${i} h2`, 0.9, {
    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    delay: del
  })
    .to(
      `#hero-${i} h1`,
      0.9,
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
      },
      "-=0.3"
    )
    .to(
      `#hero-${i} h3`,
      0.9,
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
      },
      "-=0.3"
    )
    .to(
      `#hero-${i} .hi-${i}`,
      0.7,
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
      },
      "-=1"
    )
    .to(`#hero-${i + 1} h2`, 0.9, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    })
    .to(
      `#hero-${i + 1} h1`,
      0.9,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      "-=0.3"
    )
    .to(
      `#hero-${i + 1} h3`,
      0.9,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      "-=0.3"
    );

  i++;
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
    slide.style.backgroundImage = `url(${kayakbtn.parentElement.parentElement.parentElement.querySelector("img").src})`
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

let boatbtn = document.getElementById("boatbtn")

boatbtn.onclick = ()=>{
  slide.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${boatbtn.parentElement.parentElement.parentElement.querySelector("img").src})`
    slide.classList.add("active")
    slide.innerHTML = `
            <div class = "slide-text">
                <div class = "activity-name spec-name">
                    <h3>${boatbtn.parentElement.parentElement.parentElement.getElementsByTagName("h3")[0].textContent} </h3>
                    <div class = "info"><h4>for 1 hour - 700 aed for 2 hours - 1000 aed</h4></div>
                </div>
                <div class = "activity-desc">
                    <p>mini yacht takes for 8 person and there is in toilet and it passes through the tourism places in Al marjan island ras al khaimah and ready for any events</p>
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
    if(e.target.parentElement != document.querySelector(".menu")){
      document.querySelector("header .nav-list").classList.remove("active")
      document.querySelector(".menu").classList.remove("opened")
      console.log(true)
    }
    console.log(e.target.parentElement)
    // if(e.target !=  donutBtn){
    //     slide.classList.remove("active")
    // }
    // if(e.target !=  miniboatbtn){
    //     slide.classList.remove("active")
    // }
}