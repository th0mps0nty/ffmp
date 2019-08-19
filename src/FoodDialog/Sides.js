import styled from 'styled-components';
import React from 'react';

const SideGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const SideCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
`;

export function Sides({ sides, checkSide }) {
  return (
    <SideGrid>
      {sides.map((side, i) => (
        <CheckboxLabel>
          <SideCheckbox
            type="radio"
            checked={side.checked}
            name="side"
            value={side.name}
            onClick={() => {
              checkSide(i);
            }}
          />
          {side.name}
        </CheckboxLabel>
      ))}
    </SideGrid>
  );
}
