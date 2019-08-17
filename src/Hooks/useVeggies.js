import { useState } from 'react';

export const useVeggies = defaultVeggie => {
  const [veggies, setVeggies] = useState(defaultVeggie || getDefaultVeggies());

  const checkVeggie = index => {
    const newVeggies = [...veggies];
    newVeggies[index].checked = !newVeggies[index].checked;
    setVeggies(newVeggies);
  };

  return {
    checkVeggie,
    veggies
  };
};

const veggiesList = [
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
];

const getDefaultVeggies = () => {
  return veggiesList.map(veggie => ({
    name: veggie,
    checked: false
  }));
};
