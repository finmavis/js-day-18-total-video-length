const timesNode = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timesNode
  .map(node => node.dataset.time)
  .map(times => {
    const [mins, secs] = times.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
  .reduce((total, vidSecond) => total + vidSecond);

let secondsLeft = seconds;

// Turn to hours
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

// Turn to minutes
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(`Your total video is ${hours} hours ${minutes} minutes and ${secondsLeft} seconds`);