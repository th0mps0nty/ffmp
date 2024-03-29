import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';
import { mainRed } from '../Styles/colors';
import { Title } from '../Styles/title.js';
import { formatPrice } from '../Data/FoodData';
import { QuantityInput } from './QuantityInput';
import { useQuantity } from '../Hooks/useQuantity';
import { useFlavors } from '../Hooks/useFlavors';
import { Flavors } from './Flavors';
import { Sides } from './Sides';
import { Veggies } from './Veggies';
import { useToppings } from '../Hooks/useToppings';
import { useChoice } from '../Hooks/useChoice';
import { Choices } from './Choices';
import { useSides } from '../Hooks/useSides';
import { useVeggies } from '../Hooks/useVeggies';

export const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 11;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0px 40px;
  padding-bottom: 40px;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${mainRed};
  ${({ disabled }) =>
    disabled &&
    `
    opactity: .5; 
    background-color: grey; 
    pointer-events: none; 
  `}
`;

export const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 11;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => (img ? `background-image: url(${img});` : `min-height: 75px;`)}
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
  font-size: 30px;
  padding: 5px 40px;
  top: ${({ img }) => (img ? `100px` : `20px`)};
`;

const pricePerTopping = 0.5;

export const getPrice = order => {
  return (
    order.quantity *
    (order.intPrice +
      order.toppings.filter(t => t.checked).length * pricePerTopping)
  );
};

const isProtein = food => {
  return food.section === 'Protein';
};

function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders }) {
  const quantity = useQuantity(openFood && openFood.quantity);
  const toppings = useToppings(openFood.toppings);
  const flavors = useFlavors(openFood.flavors);
  const veggies = useVeggies(openFood.veggies);
  const sides = useSides(openFood.sides);
  const choiceRadio = useChoice(openFood.choice);
  const isEditing = openFood.index > -1;

  function close() {
    setOpenFood();
  }

  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: toppings.toppings,
    flavors: flavors.flavors,
    veggies: veggies.veggies,
    sides: sides.sides,
    choice: choiceRadio.value
  };

  function editOrder() {
    const newOrders = [...orders];
    newOrders[openFood.index] = order;
    setOrders(newOrders);
    close();
  }

  function addToOrder() {
    setOrders([...orders, order]);
    close();
  }

  return (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName> {openFood.name} </DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <QuantityInput quantity={quantity} />
          {isProtein(openFood) && (
            <>
              <h3> Choose Your Flavor! </h3>
              <Flavors {...flavors} />
              <hr />
              <h3> Choose Your Veggies! </h3>
              <Veggies {...veggies} />
              <hr />
              <h3> Choose Your Side! </h3>
              <Sides {...sides} />
            </>
          )}
          {openFood.choices && (
            <Choices openFood={openFood} choiceRadio={choiceRadio} />
          )}
        </DialogContent>
        <DialogFooter>
          <ConfirmButton
            onClick={isEditing ? editOrder : addToOrder}
            disabled={openFood.choices && !choiceRadio.value}
          >
            {isEditing ? `Update Order: ` : `Add to Order: `}
            {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function FoodDialog(props) {
  if (!props.openFood) return null;
  return <FoodDialogContainer {...props} />;
}
