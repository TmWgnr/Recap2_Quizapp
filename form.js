const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  addItems(data);
});

function addItems(usedData) {
  const qAndA = document.querySelector('[data-js="Q&A"]');
  const card = document.createElement("li");
  const questionItem = document.createElement("h2");
  const answerItem = document.createElement("article");
  const tag = document.createElement("article");
  const formData = usedData;

  questionItem.textContent = `${formData.question}`;
  answerItem.textContent = `${formData.answer}`;
  tag.textContent = `${formData.tag}`;

  qAndA.append(card);
  card.append(questionItem, answerItem, tag);
}

const inputField = document.querySelector('[data-js="form"]');
inputField.addEventListener("input", (event) => {
  console.log(event.target.value);
});
