import styled from 'styled-components';
import React from 'react';

const VeggieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const VeggieCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
`;

export function Veggies({ veggies, checkVeggie }) {
  return (
    <VeggieGrid>
      {veggies.map((veggie, i) => (
        <CheckboxLabel>
          <VeggieCheckbox
            type="radio"
            checked={veggie.checked}
            name="veggie"
            value={veggie.name}
            onClick={() => {
              checkVeggie(i);
            }}
          />
          {veggie.name}
        </CheckboxLabel>
      ))}
    </VeggieGrid>
  );
}
