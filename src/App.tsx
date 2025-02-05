import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import ClickCounter from './components/ClickCounter';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  
  return (
    <div>
      <h2>Home work 38</h2>
      <Input placeholder="Введіть текст..." onChange={(e) => setInputValue(e.target.value)} />
      <Button text="Натисни мене" onClick={() => alert(`Введений текст: ${inputValue}`)} />

        <h2>Home work 39</h2>
        <div>
          <h3>Це stateful </h3>
          <Counter />
          <h3>Це stateless</h3>
          <Greeting name="John"/>

          <h3>Завдання з зірочкою</h3>
          <ClickCounter />
        </div>
    </div>
  );
};

export default App;