fetch("recipes.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("recipe-container");

    data.forEach((recipe) => {
      const card = document.createElement("div");
      card.classList.add("recipe-card");

      card.innerHTML = `
        <h2>${recipe.title}</h2>
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>Ingredients</h3>
        <ul>${recipe.ingredients.map((ing) => `<li>${ing}</li>`).join("")}</ul>
        <h3>Instructions</h3>
        <ol>${recipe.instructions
          .map((step) => `<li>${step}</li>`)
          .join("")}</ol>
      `;

      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error loading recipes:", error);
  });
