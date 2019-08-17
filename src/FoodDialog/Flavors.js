import styled from 'styled-components';
import React from 'react';

const FlavorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const FlavorCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
`;

export function Flavors({ flavors, checkFlavor }) {
  return (
    <FlavorGrid>
      {flavors.map((flavor, i) => (
        <CheckboxLabel>
          <FlavorCheckbox
            type="checkbox"
            checked={flavor.checked}
            onClick={() => {
              checkFlavor(i);
            }}
          />
          {flavor.name}
        </CheckboxLabel>
      ))}
    </FlavorGrid>
  );
}
