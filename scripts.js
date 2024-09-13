async function fetchRecipes() {
    try {
        // Substitua esta URL pela URL da sua API
        const response = await fetch('https://api.example.com/recipes');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const recipes = await response.json();
        return recipes;
    } catch (error) {
        console.error('Failed to fetch recipes:', error);
        return [];
    }
}

async function generateRecipe() {
    const recipes = await fetchRecipes();

    if (recipes.length === 0) {
        document.getElementById('recipe-title').textContent = 'Nenhuma receita disponível';
        document.getElementById('recipe-description').textContent = '';
        return;
    }

    const randomIndex = Math.floor(Math.random() * recipes.length);
    const recipe = recipes[randomIndex];

    document.getElementById('recipe-title').textContent = recipe.title;
    document.getElementById('recipe-description').textContent = recipe.description;
}

// Gerar uma receita aleatória ao carregar a página
window.onload = generateRecipe;
