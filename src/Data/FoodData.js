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
  {
    price: null,
    name: 'Flavors',
    section: 'Flavor',
    choices: [
      'Plain',
      'Garlic',
      'Extra Spicy',
      'Garlic & Pepper',
      'Southwest Chipotle',
      'Tomato Basil Garlic',
      'Lemon Pepper'
    ]
  },
  {
    price: null,
    name: 'Veggies',
    section: 'Veggies',
    choices: [
      'Broccoli',
      'Asparagus',
      'Spinach',
      'Carrots',
      'Kale',
      'Brussel Sprouts',
      'Cauliflower',
      'Collard Greens',
      'Bell Peppers',
      'Green Beans',
      'Zucchini / Squash'
    ]
  },
  {
    price: null,
    name: 'Sides',
    section: 'Side',
    choices: [
      'Brown Rice',
      'Quinoa',
      'Jasmine Rice',
      'Fresh Fruit',
      'Sweet Potatoes',
      'Black Beans & Tomatoes',
      'Chickpeas & Kidney',
      'Roasted Corn'
    ]
  }
];

// export const flavors = foodItems.reduce((res, flavor) => {
//   if (!res[flavor.section]) {
//     res[flavor.section] = [];
//   }
//   res[flavor.section].push(flavor);
// }, {});

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
