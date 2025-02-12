import React, { useRef } from 'react';

const UncontrolledComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputRef.current) {
      alert("Введене Прізвище: " + inputRef.current.value);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ведіть прізвище:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledComponent;