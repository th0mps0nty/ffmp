import { useState } from 'react';

export const useFlavors = defaultFlavor => {
  const [flavors, setFlavors] = useState(defaultFlavor || getDefaultFlavors());

  const checkFlavor = index => {
    const newFlavors = [...flavors];
    newFlavors[index].checked = !newFlavors[index].checked;
    setFlavors(newFlavors);
  };

  return {
    checkFlavor,
    flavors
  };
};

const flavorsList = [
  'Plain',
  'Garlic',
  'Extra Spicy',
  'Garlic & Pepper',
  'Southwest Chipotle',
  'Tomato Basil Garlic',
  'Lemon Pepper'
];

const getDefaultFlavors = () => {
  return flavorsList.map(flavor => ({
    name: flavor,
    checked: false
  }));
};
