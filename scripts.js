const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get("id"); // example: ?id=1

fetch("recipes.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("recipe-container");
    const recipe = data.find((r) => r.id == recipeId);

    if (recipe) {
      const card = document.createElement("div");
      card.classList.add("recipe-card");

      card.innerHTML = `
 <div class="custom-recipe-wrapper">
    <div class="recipe-card custom-recipe-card">
      <div class="dish-photo">
        <img src="${recipe.image}" alt="${
        recipe.title
      }" style="width: 100%; border-radius: 15px; margin-bottom: 20px;">
      </div>

      <div class="card-header">
        <h2>🍓 ${recipe.title}</h2>
      </div>

   

      <div class="info-grid">
        <div class="info-field">
          <label>PREP TIME:</label>
          <input type="text" value="${recipe.prepTime}" readonly>
        </div>
        <div class="info-field">
          <label>COOK TIME:</label>
          <input type="text" value="${recipe.cookTime}" readonly>
        </div>
        <div class="info-field">
          <label>SERVES:</label>
          <input type="text" value="${recipe.serves}" readonly>
        </div>
        <div class="info-field">
          <label>OVEN TEMPERATURE:</label>
          <input type="text" value="${recipe.ovenTemp}" readonly>
        </div>
      </div>

      <div class="ingredients-directions">
        <div class="section">
          <label>INGREDIENTS:</label>
          <div class="lines">
            ${recipe.ingredients.map((ing) => `<p>${ing}</p>`).join("")}
          </div>
        </div>
        <div class="section">
          <label>DIRECTIONS:</label>
          <div class="lines">
            ${recipe.instructions.map((step) => `<p>${step}</p>`).join("")}
          </div>
        </div>
      </div>
    </div>
  </div>
`;

      container.appendChild(card);
    } else {
      container.innerHTML = `<p>Recipe not found! 🍓</p>`;
    }
  })
  .catch((error) => {
    console.error("Error loading recipe:", error);
  });

fetch("custom-recipe-card.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("custom-recipe-card").innerHTML = data;
  });
