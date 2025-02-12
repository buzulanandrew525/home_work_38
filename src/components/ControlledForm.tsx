import React, { useState } from "react";

const ControlledForm = () => {
  const [value, setValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Ви відправили: ' + value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ведіть ім'я:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
};

export default ControlledForm;