const cards = [
  { title: "Start", text: "Store tiny fixtures and expected outputs." },
  { title: "Next", text: "Add one small improvement and keep the project readable." },
  { title: "Review", text: "Check the README and make the first screen useful." }
];

const cardRoot = document.querySelector("#cards");

function render() {
  cardRoot.innerHTML = "";
  cards.forEach((card) => {
    const item = document.createElement("article");
    item.className = "card";
    item.innerHTML = "<strong>" + card.title + "</strong><span>" + card.text + "</span>";
    cardRoot.append(item);
  });
}

document.querySelector("#add").addEventListener("click", () => {
  cards.push({
    title: "Idea " + cards.length,
    text: "Write a small task and make the next step obvious."
  });
  render();
});

document.querySelector("#clear").addEventListener("click", () => {
  cards.splice(3);
  render();
});

render();
