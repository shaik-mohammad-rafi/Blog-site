const foodItems = [
  // ✅ South Indian Foods
  {
    title: "Masala Dosa",
    category: "South Indian",
    img: "http://1.bp.blogspot.com/-uoVDv32Mxd8/VBKzjO2CAQI/AAAAAAAAAHc/HBvjaa3jH54/s1600/Masala-Dosa-.jpg",
    desc: "Crispy dosa stuffed with spiced potatoes served with chutneys.",
    ingredients: ["Rice", "Urad Dal", "Potatoes", "Onion", "Spices"],
    steps: [
      "Soak rice and urad dal overnight, grind into batter.",
      "Ferment the batter overnight.",
      "Prepare potato masala with onion and spices.",
      "Spread batter on tawa, add filling, and fold dosa."
    ]
  },
  {
    title: "Idli Sambar",
    category: "South Indian",
    img: "https://tse1.mm.bing.net/th/id/OIP.WnIelZNXcOQbQ8EyfHgdwwHaE8?pid=Api&P=0&h=180",
    desc: "Soft idlis served with aromatic sambar and coconut chutney.",
    ingredients: ["Rice", "Urad Dal", "Tamarind", "Sambar Powder", "Coconut"],
    steps: [
      "Prepare batter and ferment overnight.",
      "Steam batter in idli molds.",
      "Cook sambar with tamarind and spices.",
      "Serve hot with coconut chutney."
    ]
  },
  {
    title: "Pongal",
    category: "South Indian",
    img: "https://www.spiceindiaonline.com/wp-content/uploads/2014/01/Ven-Pongal-2.jpg",
    desc: "Savory South Indian dish made with rice, moong dal, and spices.",
    ingredients: ["Rice", "Moong Dal", "Ghee", "Pepper", "Cashew Nuts"],
    steps: [
      "Cook rice and moong dal together.",
      "Temper with ghee, pepper, and cashews.",
      "Mix well and serve hot."
    ]
  },
  {
    title: "Medu Vada",
    category: "South Indian",
    img: "https://images.slurrp.com/prod/recipe_images/transcribe/breakfast/Medu-Vada.webp",
    desc: "Crispy lentil fritters served with chutney and sambar.",
    ingredients: ["Urad Dal", "Green Chili", "Ginger", "Salt", "Oil"],
    steps: [
      "Soak urad dal and grind into a smooth batter.",
      "Shape into donuts and deep fry.",
      "Serve with chutney and sambar."
    ]
  },

  // ✅ North Indian Foods
  {
    title: "Butter Chicken",
    category: "North Indian",
    img: "https://www.madformadelskere.dk/wp-content/uploads/2022/02/Butter-chicken-3-1024x683.jpg",
    desc: "Rich creamy chicken curry with authentic North Indian flavors.",
    ingredients: ["Chicken", "Tomatoes", "Cream", "Butter", "Spices"],
    steps: [
      "Marinate chicken in spices and yogurt.",
      "Cook chicken in tandoor or pan.",
      "Prepare creamy tomato gravy.",
      "Add chicken and simmer in gravy."
    ]
  },
  {
    title: "Paneer Butter Masala",
    category: "North Indian",
    img: "https://spiceniceportadelaide.com.au/wp-content/uploads/2024/03/Paneer-Butter-Masala.png",
    desc: "Paneer cubes in a creamy tomato gravy with spices.",
    ingredients: ["Paneer", "Tomatoes", "Butter", "Cream", "Spices"],
    steps: [
      "Cook tomatoes with spices and blend into gravy.",
      "Add butter, cream, and paneer cubes.",
      "Simmer until paneer absorbs flavors."
    ]
  },
  {
    title: "Chole Bhature",
    category: "North Indian",
    img: "https://www.happy-tummy.co.in/wp-content/uploads/2020/07/Chole-Bhature-scaled.jpg",
    desc: "Spicy chickpeas served with fluffy deep-fried bread.",
    ingredients: ["Chickpeas", "Onion", "Tomato", "Flour", "Spices"],
    steps: [
      "Cook chickpeas with onion, tomato, and spices.",
      "Prepare dough for bhature and roll it.",
      "Deep fry bhature and serve with chole."
    ]
  },
  {
    title: "Aloo Paratha",
    category: "North Indian",
    img: "https://i.ytimg.com/vi/ohrbhGYQ-1o/maxresdefault.jpg",
    desc: "Stuffed flatbread with seasoned mashed potatoes, served with butter.",
    ingredients: ["Wheat Flour", "Potatoes", "Green Chili", "Spices", "Ghee"],
    steps: [
      "Prepare dough with wheat flour.",
      "Make potato stuffing with spices.",
      "Stuff and roll parathas, then cook with ghee."
    ]
  },

  // ✅ Desserts
  {
    title: "Gulab Jamun",
    category: "Dessert",
    img: "https://tse3.mm.bing.net/th/id/OIP.FYe6oOBtUAmIUzO5Fi3eHwHaEK?pid=Api&P=0&h=180",
    desc: "Soft, deep-fried dough balls soaked in sugar syrup.",
    ingredients: ["Milk Powder", "Maida", "Sugar", "Ghee", "Cardamom"],
    steps: [
      "Make dough with milk powder and maida.",
      "Shape into balls and deep fry.",
      "Soak in warm sugar syrup."
    ]
  },
  {
    title: "Jalebi",
    category: "Dessert",
    img: "https://tse2.mm.bing.net/th/id/OIP.OuTppTyTRnpS9pExT89pyQHaE8?pid=Api&P=0&h=180",
    desc: "Crispy spiral-shaped sweet soaked in syrup.",
    ingredients: ["Maida", "Curd", "Sugar", "Ghee", "Cardamom"],
    steps: [
      "Prepare fermented batter.",
      "Pipe spirals in hot oil and fry.",
      "Dip in sugar syrup and serve."
    ]
  },
  {
    title: "Rasgulla",
    category: "Dessert",
    img: "https://tse4.mm.bing.net/th/id/OIP.XKA2Z_a61XKnJDZv7-hnhwHaE8?pid=Api&P=0&h=180",
    desc: "Spongy cottage cheese balls soaked in sugar syrup.",
    ingredients: ["Milk", "Sugar", "Lemon Juice", "Cardamom"],
    steps: [
      "Curdle milk to make chenna.",
      "Shape into balls and boil in sugar syrup.",
      "Cool and serve soaked in syrup."
    ]
  }
];

// ✅ Display the food cards dynamically
const container = document.getElementById("foodContainer");

function displayFoods(foods) {
  container.innerHTML = "";
  foods.forEach((food, index) => {
    const card = `
      <div class="col-md-4">
        <div class="card shadow-lg h-100" style="cursor:pointer;" onclick="showRecipe(${index})">
          <img src="${food.img}" class="card-img-top" alt="${food.title}">
          <div class="card-body">
            <h5 class="card-title">${food.title}</h5>
            <p class="card-text">${food.desc}</p>
            <span class="badge bg-info">${food.category}</span>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

// ✅ Show recipe in modal
function showRecipe(index) {
  const food = foodItems[index];
  document.getElementById("recipeImg").src = food.img;
  document.getElementById("recipeTitle").innerText = food.title;
  document.getElementById("recipeDesc").innerText = food.desc;

  // Ingredients
  const ingredientsList = document.getElementById("recipeIngredients");
  ingredientsList.innerHTML = "";
  food.ingredients.forEach(ing => {
    const li = document.createElement("li");
    li.innerText = ing;
    ingredientsList.appendChild(li);
  });

  // Steps
  const stepsList = document.getElementById("recipeSteps");
  stepsList.innerHTML = "";
  food.steps.forEach(step => {
    const li = document.createElement("li");
    li.innerText = step;
    stepsList.appendChild(li);
  });

  const recipeModal = new bootstrap.Modal(document.getElementById('recipeModal'));
  recipeModal.show();
}

// ✅ Initial load
displayFoods(foodItems);

// ✅ Search functionality
document.getElementById("searchBar").addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();
  const filteredFoods = foodItems.filter(food =>
    food.title.toLowerCase().includes(searchValue) ||
    food.category.toLowerCase().includes(searchValue)
  );
  displayFoods(filteredFoods);
});

