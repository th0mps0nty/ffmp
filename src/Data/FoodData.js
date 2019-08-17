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
    img: '/img/cod1.jpg',
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
    name: 'Flavors',
    section: 'Flavors Pictures',
    choices: [{
        name: 'Plain',
        img: '/img/plain.jpg'
      },
      {
        name: 'Garlic',
        img: '/img/garlic.jpg'
      },
      {
        name: 'Extra Spicy',
        img: '/img/extra-spicy.jpg'
      },
      {
        name: 'Garlic & Pepper',
        img: '/img/garlic-and-pepper.jpg'
      },
      {
        name: 'Southwest Chipotle',
        img: '/img/southwest-chipotle.jpg'
      },
      {
        name: 'Tomato Basil Garlic',
        img: '/img/tomato-basil-garlic.jpg'
      },
      {
        name: 'Lemon Pepper',
        img: '/img/lemon-pepper.jpg'
      },
    ]
  },
  {
    price: null,
    name: 'Flavors',
    section: 'Flavors List',
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
  // Veggies
  {
    name: 'Veggies',
    section: 'Veggies Pictures',
    choices: [{
        name: 'Broccoli',
        img: '/img/broccoli.jpg'
      },
      {
        name: 'Asparagus',
        img: '/img/asparagus.jpg'
      },
      {
        name: 'Spinach',
        img: '/img/spinach.jpg'
      },
      {
        name: 'Carrots',
        img: '/img/carrots.jpg'
      },
      {
        name: 'Kale',
        img: '/img/kale.jpg'
      },
      {
        name: 'Brussel Sprouts',
        img: '/img/brussel-sprouts.jpg'
      },
      {
        name: 'Cauliflower',
        img: '/img/cauliflower.jpg'
      },
      {
        name: 'Collard Greens',
        img: '/img/collard-greens.jpg'
      },
      {
        name: 'Bell Peppers',
        img: '/img/bell-peppers.jpg'
      },
      {
        name: 'Green Beans',
        img: '/img/green-beans.jpg'
      },
      {
        name: 'Zucchini / Squash',
        img: '/img/zucchini.jpg'
      },
    ]
  },
  {
    price: null,
    name: 'Veggies',
    section: 'Veggies List',
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
  // Sides
  {
    name: 'Sides',
    section: 'Side Pictures',
    choices: [{
        name: 'Brown Rice',
        img: '/img/brown-rice.jpg'
      },
      {
        name: 'Quinoa',
        img: '/img/quinoa.jpg'
      },
      {
        name: 'Jamine Rice',
        img: '/img/jasmine-rice.jpg'
      },
      {
        name: 'Fresh Fruit',
        img: '/img/fresh-fruit.jpg'
      },
      {
        name: 'Sweet Potatoes',
        img: '/img/sweet-potatoes.jpg'
      },
      {
        name: 'Black Beans & Tomatoes',
        img: '/img/black-beans-tomatoes.jpg'
      },
      {
        name: 'Chickpeas & Kidney',
        img: '/img/chickpeas-kidney.jpg'
      },
      {
        name: 'Roasted Corn',
        img: '/img/roasted-corn.jpg'
      },
    ]
  },
  {
    price: null,
    name: 'Sides',
    section: 'Side List',
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

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});