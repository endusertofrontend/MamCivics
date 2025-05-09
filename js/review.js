const questionOne = document.querySelector(".askedOne");
const questionTwo = document.querySelector(".askedTwo");

const answerOne = document.querySelector(".answerOne");
const answerTwo = document.querySelector(".answerTwo"); 

questionOne.addEventListener('click', () => {
    answerOne.style.display = (answerOne.style.display === 'flex') ? 'none' : 'flex'; 
})

questionTwo.addEventListener('click', () => {
  answerTwo.style.display = (answerTwo.style.display === 'flex') ? 'none' : 'flex'; 
});

