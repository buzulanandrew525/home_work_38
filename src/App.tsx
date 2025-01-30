import Input from './components/Input';

function App() {
  return (
    <div className="p-4">
      <Input placeholder="Enter text..." text="Submit" onClick={() => alert("Button clicked!")} onChange={(e) => console.log(e.target.value)} />
    </div>
  );
};

export default App
