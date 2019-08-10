import { useState } from 'react';

export function useQuantity(defaultQuantity) {
  const [value, setValue] = useState(defaultQuantity || 1);

  const onChange = e => {
    if (!(+e.target.value >= 1)) {
      setValue(1);
      return;
    }
    setValue(+e.target.value);
  };

  return {
    value,
    setValue,
    onChange
  };
}
