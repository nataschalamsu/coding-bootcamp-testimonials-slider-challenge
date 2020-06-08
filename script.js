'use strict'

const studentsTestimony = [
  {
    name: 'Tanya Sinclair',
    profession: 'UX Engineer',
    testimony: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`,
    image: '/images/image-tanya.jpg',
  },
  {
    name: 'John Tarkpor',
    profession: 'Junior Front-end Developer',
    testimony: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`,
    image: '/images/image-john.jpg',
  },
  {
    name: 'Jung Wheein',
    profession: 'Singer',
    testimony: `“ I'm a singer but I like to draw.
    I never tried digital drawing before and I was really curios about it.
    So, I try this challenge and hey, it's fun! ”`,
    image: 'https://pbs.twimg.com/media/EYnto2BUwAAXGdm?format=jpg&name=medium',
  },
];

let studentTestimony = document.getElementsByClassName('testimony');
let studentName = document.getElementsByClassName('student__identity');
let studentProfession = document.getElementById('profession');
let studentImg = document.getElementsByClassName('student__picture');
let currentIndex = 0;
const lastIndex = studentsTestimony.length - 1;

function currentSlide(index = 0) {
  studentTestimony[0].innerHTML = studentsTestimony[index].testimony;
  studentName[0].innerHTML = studentsTestimony[index].name;
  studentProfession.innerHTML = studentsTestimony[index].profession;
  studentImg[0].src = studentsTestimony[index].image;
  currentIndex = index;
};

function handlePrevButton() {
  if (currentIndex === 0) {
    currentSlide(lastIndex);
    return;
  }

  if (currentIndex > 0) {
    currentSlide(currentIndex - 1);
    return;
  } 
};

function handleNextButton() {
  if (currentIndex === lastIndex) {
    currentSlide(0);
    return;
  }

  if (currentIndex < lastIndex) {
    currentSlide(currentIndex + 1);
    return;
  }
};

currentSlide();