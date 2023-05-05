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

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
