import { CountContext } from './Counter';

const Title = () => {
  return (
    <CountContext.Consumer>
      {value => <h1>Current count: {value}</h1>}
    </CountContext.Consumer>
  );
};

export default Title;
