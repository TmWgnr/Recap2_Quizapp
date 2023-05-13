const form = document.querySelector('[data-js="form"]');
const newCardList = document.querySelector('[data-js="new-questions-list"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const question = data["textarea-question"];
  const answer = data["textarea-answer"];
  const tag = data["tag-input"];

  console.log(event.target);

  const newCardListItem = document.createElement("li");
  const newCard = document.createElement("article");
  const newCardListItemQuestion = document.createElement("h2");
  const newCardListAnswerButton = document.createElement("button");
  const newCardListAnswer = document.createElement("p");
  const newCardListSvg = document.createElement("svg");
  const newCardListPath = document.createElement("path");
  const newCardListBookmark = document.createElement("div");
  const newCardTagList = document.createElement("ul");
  const newCardTagListItem = document.createElement("li");
  const newCardListBookmarkButton = document.createElement("button");

  newCardListItem.classList.add("card-list__item");
  newCard.classList.add("card");
  newCardListItemQuestion.classList.add("card__question");
  newCardListAnswerButton.classList.add("card__button-answer");
  newCardListAnswer.classList.add("card__answer");
  newCardListSvg.classList.add("bookmark__icon");
  newCardListBookmark.classList.add("card__button-bookmark");
  newCardTagList.classList.add("card__tag-list");
  newCardTagListItem.classList.add("card__tag-list-item");
  newCardListBookmarkButton.classList.add("bookmark");

  newCardListItemQuestion.textContent = question;
  newCardListAnswer.textContent = answer;
  newCardTagListItem.textContent = tag;
  newCardListAnswerButton.textContent = "Show Answer";
  newCardListBookmarkButton.innerHTML = `   <svg
                                            class="bookmark__icon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewbox="0 0 24 24"
                                            >
                                            <path
                                                d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
                                             />
                                               </svg>`;

  newCardListBookmarkButton.setAttribute("aria-label", "bookmark");
  newCardListSvg.setAttribute("viewbox", "0 0 24 24");
  newCardListSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  newCardList.append(newCardListItem);
  newCardListItem.append(newCard);
  newCard.append(newCardListItemQuestion);
  newCard.append(newCardListAnswerButton);
  newCard.append(newCardListAnswer);
  newCard.append(newCardListBookmark);
  newCardListBookmark.append(newCardListBookmarkButton);
  newCardListBookmarkButton.append(newCardListSvg);
  newCardListBookmarkButton.append(newCardListPath);
  newCard.append(newCardTagList);
  newCardTagList.append(newCardTagListItem);
});

// Characterscount
const containerElement = document.querySelector(
  '[data-js="container-element"]'
);
const amountLeft = document.querySelector('[data-js="amountLeft"]');
const maxLength = containerElement.getAttribute("maxlength");

const updateAmountLeft = (value) => {
  amountLeft.innerText = value;
};

updateAmountLeft(maxLength);

containerElement.addEventListener("input", () => {
  updateAmountLeft(maxLength - containerElement.value.length);
});