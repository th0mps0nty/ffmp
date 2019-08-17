import React from 'react';
import styled from 'styled-components';
import { foods } from '../Data/FoodData';
import { Food, FoodGrid, FoodLabel } from './FoodGrid';
// import { formatPrice } from '../Data/FoodData';

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
`;

export function Menu({ setOpenFood }) {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, foods]) =>
        sectionName === 'Protein' ? (
          <>
            <h1> {sectionName} </h1>
            <FoodGrid>
              {foods.map(food => (
                <Food
                  img={food.img}
                  onClick={() => {
                    setOpenFood(food);
                  }}
                >
                  <FoodLabel>
                    <div>{food.name}</div>
                    <div>{food.price}</div>
                    {/* <div>{formatPrice(food.intPrice)}</div> */}
                  </FoodLabel>
                </Food>
              ))}
            </FoodGrid>
          </>
        ) : null
      )}
      <img src="/img/logo.png" alt="Logo" height="200" width="200" />
    </MenuStyled>
  );
}
