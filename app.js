/* open the first answer */
const answer = document.querySelector(".answer");
const paragraph = answer.querySelector("p");
const height = paragraph.getBoundingClientRect().height;

answer.style.height = `${height}px`;
answer.style.marginTop = "1.4rem";

/* logic */
const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    // set question button state plus/minus
    const mark = e.currentTarget.querySelector(".mark");
    mark.setAttribute(
      "src",
      mark.getAttribute("src") === "./assets/images/icon-minus.svg"
        ? "./assets/images/icon-plus.svg"
        : "./assets/images/icon-minus.svg"
    );

    // set answer height
    const answer = e.currentTarget.parentElement.querySelector(".answer");
    const paragraph = answer.querySelector("p");
    const height = paragraph.getBoundingClientRect().height;

    if (answer.getBoundingClientRect().height === 0) {
      answer.style.height = `${height}px`;
      answer.style.marginTop = "1.4rem";
    } else {
      answer.style.height = "0px";
      answer.style.marginTop = "0px";
    }

    /* only one block question/answer should be open */

    // set question button state to default
    const marks = document.querySelectorAll(".mark");
    marks.forEach((element) => {
      if (mark !== element) {
        element.setAttribute("src", "./assets/images/icon-plus.svg");
      }
    });

    // set answer state to default
    const answers = document.querySelectorAll(".answer");
    answers.forEach((element) => {
      if (answer !== element) {
        element.style.height = "0px";
        element.style.marginTop = "0px";
      }
    });
  });
});
