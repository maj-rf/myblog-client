import { ChangeEvent, useState, useRef } from 'react';

export const useField = (type: string) => {
  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const passRef = useRef<HTMLInputElement>(null);

  if (type === 'password')
    return { type, value, ref: passRef, onChange, setValue };

  return {
    type,
    value,
    onChange,
    setValue,
  };
};
