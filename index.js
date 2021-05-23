const beeSound = document.getElementById("bgm");
const [body] = document.getElementsByTagName("body");

function play() {
    if (!beeSound instanceof HTMLAudioElement) return;
    if (beeSound.paused) { beeSound.play(); } else { body.removeEventListener("click", play); }
    console.log(beeSound.paused);
}
body.addEventListener("click", play);