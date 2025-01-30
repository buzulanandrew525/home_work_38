import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div>
      <Input placeholder="Введіть текст..." onChange={(e) => setInputValue(e.target.value)} />
      <Button text="Натисни мене" onClick={() => alert(`Введений текст: ${inputValue}`)} />
    </div>
  );
};

export default App;