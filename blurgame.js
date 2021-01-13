const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
mouseEvent.addEventListener('mousemove',(event)=>{
    horizontal.innerHTML =event.x;
    vertical.innerHTML=event.y;
   console.log(screen.width);
})

window.onload =function () {

    var canvas = document.getElementById('jeu');
    var ctx = canvas.getContext('2d');
    const mouse = document.querySelector('.fenetre');
    xRandom = Math.random()* 600;
    xRandomEntier = Math.round(xRandom);
    yRandom = Math.random() * 600;
    yRandomEntier = Math.round(yRandom);
    console.log(xRandomEntier)
    console.log(yRandomEntier)
    console.log("ok"+screen.width);
    ctx.fillStyle = 'black';
    ctx.fillRect(xRandomEntier, yRandomEntier, 3, 3);
    ctx.strokeStyle = 'red';
    ctx.strokeRect(xRandomEntier - 4, yRandomEntier - 4, 11, 11);

    mouse.addEventListener('mousemove', (event) => {
        posX = event.x;
        posY = event.y;
        console.log(posX);
        console.log(xRandomEntier +"xrandom");
        console.log("ok"+screen.width);
    })


}

