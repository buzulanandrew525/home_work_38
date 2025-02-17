import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import ClickCounter from './components/ClickCounter';
import ControlledForm from './components/ControlledForm';
import UncontrolledComponent from './components/UncontrolledComponent';
import Widget from './components/Widget';
import DataFetcher from './components/DataFetcher';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  
  return (
    <>
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
      <h2>Дз №40</h2>
      <ControlledForm />
      <UncontrolledComponent />
      <Widget />

      <h2>Дз №41</h2>
      <DataFetcher />
    </>
  );
};

export default App;