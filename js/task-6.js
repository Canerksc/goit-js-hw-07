    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }

    function createBoxes(amount) {
      const boxesContainer = document.getElementById("boxes");
      boxesContainer.innerHTML = ""; 

      const baseSize = 30;
      const fragment = document.createDocumentFragment();

      for (let i = 0; i < amount; i++) {
        const size = baseSize + i * 10;
        const box = document.createElement("div");
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        fragment.appendChild(box);
      }

      boxesContainer.appendChild(fragment);
    }

    function destroyBoxes() {
      document.getElementById("boxes").innerHTML = "";
    }

    const input = document.querySelector("#controls input");
    const createBtn = document.querySelector("[data-create]");
    const destroyBtn = document.querySelector("[data-destroy]");

    createBtn.addEventListener("click", () => {
      const amount = Number(input.value);

      if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = "";
      } else {
        alert("Lütfen 1 ile 100 arasında bir sayı girin.");
      }
    });

    destroyBtn.addEventListener("click", destroyBoxes);