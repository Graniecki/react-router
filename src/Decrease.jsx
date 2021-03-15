import { CountContext } from './Counter';

const Decrease = () => {
  const style = {
    border: 'none',
    padding: '10px',
    backgroundColor: 'tomato',
    margin: '10px',
    borderRadius: '1.5em',
    color: 'white',
    outline: 'none'
  };

  return (
    <CountContext.Consumer>
      {({count, countDecrease}) => (
        <button style={style} onClick={countDecrease}>
          Increase {count}
        </button>
      )}
    </CountContext.Consumer>
  )
};

export default Decrease;
