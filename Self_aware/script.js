const music = [
  { text: "Just don't hang your hopes on me", time: 3000 },
  { text: "i wanna feel something", time: 3000 },
  { text: "God, you look so pretty", time: 2000 },
  { text: "when you tell me that you love me", time: 4000 },
  { text: "i wish that i could lie", time: 2800 },
  { text: "but my mind gets in the way", time: 3000 },
  { text: "i know you think that i'm ", time: 3000 },
  { text: "always way too self-aware ", time: 3000 },
  { text: "oh, we could never be together", time: 3000 },
  { text: "but it's nice to play pretend", time: 3000 },
  { text: "i wish that i could lie", time: 3000 },
  { text: "but i'm way too self-aware ", time: 3000 },
  
];

const textInHTML = document.getElementById("text");
const btnStart = document.getElementById("start");

let index = 0;

function showPhrase() {
  textInHTML.textContent = music[index].text;

  setTimeout(() => {
    index++;

    if (index < music.length) {
      showPhrase();
    }
  }, music[index].time);
}

btnStart.addEventListener("click", () => {
  index = 0;
  showPhrase();
});