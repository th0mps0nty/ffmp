import { useState } from 'react';

export const useSides = defaultSide => {
  const [sides, setSides] = useState(defaultSide || getDefaultSides());

  const checkSide = index => {
    const newSides = [...sides];
    newSides[index].checked = !newSides[index].checked;
    setSides(newSides);
  };

  return {
    checkSide,
    sides
  };
};

const sidesList = [
  'Brown Rice',
  'Quinoa',
  'Jasmine Rice',
  'Fresh Fruit',
  'Sweet Potatoes',
  'Black Beans & Tomatoes',
  'Chickpeas & Kidney',
  'Roasted Corn'
];

const getDefaultSides = () => {
  return sidesList.map(side => ({
    name: side,
    checked: false
  }));
};
