let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}
document.getElementById('myButton').addEventListener('click', function() {
    var audio = document.getElementById('myAudio');

    if (audio.paused) {
        audio.play();
        document.getElementById('myButton').textContent = 'stop ';
    } else {
        audio.pause();
        audio.currentTime = 0;
        document.getElementById('myButton').textContent = 'Appreciate yourself for choosing the best distance education site';
    }
});
