import React from 'react';

import { CountContext } from './Counter';

class Increase extends React.Component {
  render() {
    const styleIncrease = {
      border: 'none',
      padding: '10px',
      backgroundColor: 'blue',
      margin: '10px',
      borderRadius: '1.5em',
      color: 'white',
      outline: 'none'
    };

    return (
      <CountContext.Consumer>
        {(value) => (
          <button style={styleIncrease} onClick={() => console.log('clicked')}>
            Increase {value}
          </button>
        )}
      </CountContext.Consumer>
    )
  }
};

export default Increase;
