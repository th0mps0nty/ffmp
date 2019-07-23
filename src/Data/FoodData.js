export const foodItems = [
  // Proteins
  {
    name: 'Cod',
    img: '/img/slide_two.jpg',
    section: 'Protein'
  },
  {
    name: 'Salmon',
    img: '/img/slide_three.jpg',
    section: 'Protein'
  },
  {
    name: 'Steak',
    img: '/img/slide_three.jpg',
    section: 'Protein'
  },
  {
    name: 'Chicken Breast',
    img: '/img/slide_three.jpg',
    section: 'Protein'
  },
  {
    name: 'Chicken Sausage',
    img: '/img/slide_three.jpg',
    section: 'Protein'
  },
  {
    name: 'Turkey Breast',
    img: '/img/slide_three.jpg',
    section: 'Protein'
  },
  {
    name: 'Turkey Patty',
    img: '/img/slide_three.jpg',
    section: 'Protein'
  },
  {
    name: 'Turkey Tenderloin',
    img: '/img/slide_three.jpg',
    section: 'Protein'
  },
  {
    name: 'Turkey Sausage',
    img: '/img/slide_three.jpg',
    section: 'Protein'
  },
  // Flavors
  {
    name: 'Plain',
    img: '/img/slide_three.jpg',
    section: 'Flavor'
  },
  {
    name: 'Garlic',
    img: '/img/slide_three.jpg',
    section: 'Flavor'
  },
  {
    name: 'Extra Spicy',
    img: '/img/slide_three.jpg',
    section: 'Flavor'
  },
  {
    name: 'Garlic & Pepper',
    img: '/img/slide_three.jpg',
    section: 'Flavor'
  },
  {
    name: 'Southwest Chipotle',
    img: '/img/slide_three.jpg',
    section: 'Flavor'
  },
  {
    name: 'Tomato Basil Garlic',
    img: '/img/slide_three.jpg',
    section: 'Flavor'
  },
  {
    name: 'Lemon Pepper',
    img: '/img/slide_three.jpg',
    section: 'Flavor'
  },
  // Veggies
  {
    name: 'Broccoli',
    img: '/img/slide_three.jpg',
    section: 'Vegetable'
  },
  {
    name: 'Asparagus',
    img: '/img/slide_three.jpg',
    section: 'Vegetable'
  },
  {
    name: 'Spinach',
    img: '/img/slide_three.jpg',
    section: 'Vegetable'
  },
  {
    name: 'Carrots',
    img: '/img/slide_three.jpg',
    section: 'Vegetable'
  },
  {
    name: 'Kale',
    img: '/img/slide_three.jpg',
    section: 'Vegetable'
  },
  {
    name: 'Brussel Sprouts',
    img: '/img/slide_three.jpg',
    section: 'Vegetable'
  },
  {
    name: 'Cauliflower',
    img: '/img/slide_three.jpg',
    section: 'Vegetable'
  },
  {
    name: 'Collard Greens',
    img: '/img/slide_three.jpg',
    section: 'Vegetable'
  },
  {
    name: 'Bell Peppers',
    img: '/img/slide_three.jpg',
    section: 'Vegetable'
  },
  {
    name: 'Green Beans',
    img: '/img/slide_three.jpg',
    section: 'Vegetable'
  },
  {
    name: 'Zucchini / Squash',
    img: '/img/slide_three.jpg',
    section: 'Vegetable'
  },
  // Sides
  {
    name: 'Brown Rice',
    img: '/img/slide_three.jpg',
    section: 'Sides'
  },
  {
    name: 'Quinoa',
    img: '/img/slide_three.jpg',
    section: 'Sides'
  },
  {
    name: 'Jasmine Rice',
    img: '/img/slide_three.jpg',
    section: 'Sides'
  },
  {
    name: 'Fresh Fruit',
    img: '/img/slide_three.jpg',
    section: 'Sides'
  },
  {
    name: 'Sweet Potatoes',
    img: '/img/slide_three.jpg',
    section: 'Sides'
  },
  {
    name: 'Black Beans & Tomatoes',
    img: '/img/slide_three.jpg',
    section: 'Sides'
  },
  {
    name: 'Chickpeas & Kidney',
    img: '/img/slide_three.jpg',
    section: 'Sides'
  },
  {
    name: 'Beans',
    img: '/img/slide_three.jpg',
    section: 'Sides'
  },
  {
    name: 'Roasted Corn',
    img: '/img/slide_three.jpg',
    section: 'Sides'
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
// ToDO: List all individual
// ingredients and d/l images for each
