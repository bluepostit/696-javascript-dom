console.log("Hello from src/index.js!");

let list = document.querySelector('#players');
list = document.getElementById('players');
list.style.backgroundColor = '#eee';


// Red class

// document.querySelector('.red').style.color = 'red';
const redElement = list.querySelector('.red');
redElement.style.color = 'red';
console.log(`The red element's text is: ${redElement.innerText}`)


// Winners

const winners = document.querySelectorAll('#fifa-wins li');
console.log(winners);

winners.forEach((winner) => {
  console.log(winner.innerText);
});


// Form input

const input = document.querySelector('#email');
console.log(`Your email address is: ${input.value}`);


// Inner text/html

const link = document.querySelector('#home');
console.log(link.innerText);
console.log(link.innerHTML);

link.innerHTML = 'Batch 696 <strong>rocks!</strong>';

// Datasets
const user = document.getElementById('user');
const uid = user.dataset.uid;
const nickname = user.dataset.githubNickname;
console.log(`Your UID is ${uid}; your nickname is ${nickname}`);

// Events

// const romain = document.querySelector('#romain');
// romain.addEventListener('click', (event) => {
//   console.log(event);
//   console.log(event.currentTarget);
//   console.log('Clicked!');
//   const target = event.currentTarget;
//   target.classList.toggle('rounded');
// });


const images = document.querySelectorAll('img');
// Add an event listener to EACH element in the NodeList:
images.forEach((image) => {
  image.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.currentTarget);
    console.log('Clicked!');
    const target = event.currentTarget;
    target.classList.toggle('rounded');
  });
});
