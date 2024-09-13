const recipes = [
    { title: 'Bolo de Cenoura', description: ' 1 xicara de oleo, 4 ovos, 3 cenouras médias raladas, 2 xicaras de açucar, 2 xicaras de farinha de trigo, 1 colher de fermento em pó.' },
    { title: 'Frango à Parmegiana', description: 'Peito de frango empanado coberto com molho de tomate e queijo derretido.' },
    { title: 'Tacos de Carne', description: 'Tacos recheados com carne moída temperada e acompanhados de guacamole e salsa.' },
    { title: 'Lasagna', description: 'Camadas de massa intercaladas com molho de carne, queijo e molho bechamel.' },
    { title: 'Sopa de Abóbora', description: 'Sopa cremosa de abóbora com especiarias e um toque de creme de leite.' }
];

function generateRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const recipe = recipes[randomIndex];

    document.getElementById('recipe-title').textContent = recipe.title;
    document.getElementById('recipe-description').textContent = recipe.description;
}

// Gerar uma receita aleatória ao carregar a página
window.onload = generateRecipe;