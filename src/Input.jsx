import './Input.scss';

const Input = ({
  changeName,
  type,
  placeholder,
  name,
  value
}) => {
  const fieldHandler = (event) => {
    changeName(event.target.value);
  };

  return (
    <div className="inputWrap">
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={fieldHandler}
      />
    </div>
  );
};

export default Input;
