const instruc = document.querySelector(".instruc");
const back = document.querySelector(".back h1");
document.querySelector("#inss").addEventListener("click", inst)
back.addEventListener("click", inst);
back.addEventListener("click", inst);
function inst(){
    instruc.classList.toggle("none");
}


////////game devv

const game = document.querySelector(".container2")
const gun = document.querySelector(".gunn");
const pointer = document.querySelector(".pointerr");
const boom = document.querySelector(".boom");
const targets = [...document.querySelectorAll(".target")];
const targetdiv = document.querySelector('.divtarget');




var gunP = 1;

gun.style.backgroundImage = `url("Sprites/gun${gunP}.png")`

targets.map((target, index) => {
    target.style.backgroundImage = `url("Sprites/target${gunP}.png")`
});



/////////////EVENTTTTT

game.addEventListener("mousemove", (e) => { Movee(e) });
game.addEventListener("mousedown", (e) => { Boom(e) });
game.addEventListener("mouseup", () => { boom.style.display = 'none' });
document.addEventListener("keydown",(e) => { keyy(e) });




/////////FUNGSII

function Movee(e){
    const rect = game.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const margin = 40;
    const minx = margin;
    
    
    let xGun = mouseX ;
    const maxGun = game.clientWidth - gun.offsetWidth;
    xGun = Math.max(minx, (Math.min(xGun, maxGun)));
    
    let xPoin = mouseX - pointer.offsetWidth / 2;
    let yPoin = mouseY - pointer.offsetHeight / 2;
    const maxPoinx = game.clientWidth - pointer.offsetWidth;
    const maxPoiny = game.clientHeight - pointer.offsetHeight;
    xPoin = Math.max(margin, (Math.min(xPoin, maxPoinx - margin)));
    yPoin = Math.max(margin,(Math.min(yPoin, maxPoiny)));
    
    gun.style.left = `${xGun}px`
    pointer.style.top = `${yPoin}px`
    pointer.style.left = `${xPoin}px`
        
}



function Boom(e){
    const rect = game.getBoundingClientRect();
const mouseX = e.clientX - rect.left;
const mouseY = e.clientY - rect.top;
const margin = 40;

let xBoom = mouseX - boom.offsetWidth / 2;
let yBoom = mouseY - boom.offsetHeight / 2;
const maxBoomx = game.clientWidth - boom.offsetWidth;
const maxBoomy = game.clientHeight - boom.offsetHeight;

xBoom = Math.max(margin,(Math.min(xBoom, maxBoomx)));
yBoom = Math.max(margin,(Math.min(yBoom, maxBoomy)));


boom.style.left = `${xBoom}px`;
boom.style.top = `${yBoom}px`;
boom.style.display = 'block';
boom.style.transform = 'translate(-50%, -50%)';




// const clickedElement = document.elementFromPoint(e.clientX, e.clientY);
// if (clickedElement && clickedElement.classList.contains('target')) {
//     clickedElement.style.display = 'none';
// }





// // ✅ Cek apakah semua target sudah hilang
// const allHidden = targets.every(t => t.style.display === "none");
// if (allHidden) {
//     setTimeout(() => {
//         targets.forEach(t => t.style.display = "block");
//         targetPos();
//     }, 500);
// }

}


function keyy(e){
    e.preventDefault();
    if (e.key === " "){
        changeWeaphone();
    }
}

function changeWeaphone(){
    if(gunP == 1){
        gunP = 2;
    }else{
        gunP = 1;
    }

    gun.style.backgroundImage = `url("Sprites/gun${gunP}.png")`
}

function targetPos(){
    let xpos = targetdiv.clientWidth / 3;
    targets.map((target, ind) => {
     
    let maxposx = xpos * (ind + 1);
    let minposx = xpos * ind;
    let makk = maxposx - target.offsetWidth / 2;
    let mikk = minposx + target.offsetWidth / 2;
    let makb = targetdiv.clientHeight - target.offsetHeight;
    let mikb = target.offsetHeight;


    // let posxx = maxposx - (xpos / 2 ) - (target.offsetWidth / 2);
    let randomx = Math.random() * (makk - mikk) + mikk;
    let randomy = Math.random() * (makb - mikb) + mikb;
    let posxx = randomx - (target.offsetWidth / 2);
    let posyy = randomy - (target.offsetHeight / 2);
        target.style.left = `${posxx}px`;
        target.style.top = `${posyy}px`;


    
        
    });

}
targetPos();





let score = 0;
targets.forEach(target => {
    target.addEventListener("click", () => {
        target.style.display = "none";
        sscore();
        // Cek apakah semua target sudah hilang
        const allHidden = targets.every(t => t.style.display === "none");

        if (allHidden) {
            setTimeout(() => {
                // Munculkan lagi semua target
                targets.forEach(t => t.style.display = "block");
                targetPos(); // Reposisi target secara acak
            }, 100); // Delay sedikit biar terasa natural
        }
    });
});



function sscore(){
    score++;
document.querySelector('.scoree').innerHTML = `${score}`;
}


///game devvv