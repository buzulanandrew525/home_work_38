const Input = ({ text, onClick, placeholder, onChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
      <button onClick={onClick} >
        {text}
      </button>
    </div>
  );
};

export default Input;
