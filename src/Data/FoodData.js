export function formatPrice(intPrice) {
  return intPrice.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
}

export const foodItems = [
  // Proteins
  {
    name: 'Cod',
    img: '/img/cod.jpeg',
    section: 'Protein',
    price: '$12.00',
    intPrice: 12
  },
  {
    name: 'Salmon',
    img: '/img/salmon.jpg',
    section: 'Protein',
    price: '$12.00',
    intPrice: 12
  },
  {
    name: 'Steak',
    img: '/img/steak.jpg',
    section: 'Protein',
    price: '$12.00',
    intPrice: 12
  },
  {
    name: 'Chicken Breast',
    img: '/img/chicken-breast.jpg',
    section: 'Protein',
    price: '$10.00',
    intPrice: 10
  },
  {
    name: 'Chicken Sausage',
    img: '/img/chicken-sausage.jpg',
    section: 'Protein',
    price: '$10.00',
    intPrice: 10
  },
  {
    name: 'Turkey Breast',
    img: '/img/turkey-breast.jpg',
    section: 'Protein',
    price: '$10.00',
    intPrice: 10
  },
  {
    name: 'Turkey Patty',
    img: '/img/turkey-patty.jpg',
    section: 'Protein',
    price: '$10.00',
    intPrice: 10
  },
  {
    name: 'Turkey Tenderloin',
    img: '/img/turkey-tenderloin.jpg',
    section: 'Protein',
    price: '$10.00',
    intPrice: 10
  },
  {
    name: 'Turkey Sausage',
    img: '/img/turkey-sausage.jpg',
    section: 'Protein',
    price: '$10.00',
    intPrice: 10
  },
  // Flavors
  {
    name: 'Plain',
    img: '/img/plain.jpg',
    section: 'Flavor'
  },
  {
    name: 'Garlic',
    img: '/img/garlic.jpg',
    section: 'Flavor'
  },
  {
    name: 'Extra Spicy',
    img: '/img/extra-spicy.jpg',
    section: 'Flavor'
  },
  {
    name: 'Garlic & Pepper',
    img: '/img/garlic-and-pepper.jpg',
    section: 'Flavor'
  },
  {
    name: 'Southwest Chipotle',
    img: '/img/southwest-chipotle.jpg',
    section: 'Flavor'
  },
  {
    name: 'Tomato Basil Garlic',
    img: '/img/tomato-basil-garlic.jpg',
    section: 'Flavor'
  },
  {
    name: 'Lemon Pepper',
    img: '/img/lemon-pepper.jpg',
    section: 'Flavor'
  },
  // Veggies
  {
    name: 'Broccoli',
    img: '/img/broccoli.jpg',
    section: 'Vegetable'
  },
  {
    name: 'Asparagus',
    img: '/img/asparagus.jpg',
    section: 'Vegetable'
  },
  {
    name: 'Spinach',
    img: '/img/spinach.jpg',
    section: 'Vegetable'
  },
  {
    name: 'Carrots',
    img: '/img/carrots.jpg',
    section: 'Vegetable'
  },
  {
    name: 'Kale',
    img: '/img/kale.jpg',
    section: 'Vegetable'
  },
  {
    name: 'Brussel Sprouts',
    img: '/img/brussel-sprouts.jpg',
    section: 'Vegetable'
  },
  {
    name: 'Cauliflower',
    img: '/img/cauliflower.jpg',
    section: 'Vegetable'
  },
  {
    name: 'Collard Greens',
    img: '/img/collard-greens.jpg',
    section: 'Vegetable'
  },
  {
    name: 'Bell Peppers',
    img: '/img/bell-peppers.jpg',
    section: 'Vegetable'
  },
  {
    name: 'Green Beans',
    img: '/img/green-beans.jpg',
    section: 'Vegetable'
  },
  {
    name: 'Zucchini / Squash',
    img: '/img/zucchini.jpg',
    section: 'Vegetable'
  },
  // Sides
  {
    name: 'Brown Rice',
    img: '/img/brown-rice.jpg',
    section: 'Side'
  },
  {
    name: 'Quinoa',
    img: '/img/quinoa.jpg',
    section: 'Side'
  },
  {
    name: 'Jasmine Rice',
    img: '/img/jasmine-rice.jpg',
    section: 'Side'
  },
  {
    name: 'Fresh Fruit',
    img: '/img/fresh-fruit.jpg',
    section: 'Side'
  },
  {
    name: 'Sweet Potatoes',
    img: '/img/sweet-potatoes.jpg',
    section: 'Side'
  },
  {
    name: 'Black Beans & Tomatoes',
    img: '/img/black-beans-tomatoes.jpg',
    section: 'Side'
  },
  {
    name: 'Chickpeas & Kidney',
    img: '/img/chickpeas-kidney.jpg',
    section: 'Side'
  },
  {
    name: 'Roasted Corn',
    img: '/img/roasted-corn.jpg',
    section: 'Side'
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
