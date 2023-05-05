const bookmark = document.querySelector('[data-js="bookmark-button"]');
bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark--active");
});

const answerButton = document.querySelector('[data-js="answer-button"]');

const toggleAnswerButton = document.querySelector(
  '[data-js="card__answer--toggle"]'
);

answerButton.addEventListener("click", () => {
  toggleAnswerButton.classList.toggle("card__answer--active");
});

const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  event.target.reset();
  console.log("hello");
});
