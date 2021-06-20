function main() {
  const myFormEl = document.querySelector(".my-form");
  myFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    value.temas = data.getAll("temas");
    console.log({ value });
  });
}

main();
