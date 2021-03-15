import React from 'react';

import Title from './Title';
import ButtonPanel from './ButtonPanel';

export const CountContext = React.createContext(0);

class Counter extends React.Component {
  // constructor() {
  //   super();

  //   this.countIncrease = () => {
  //     this.setState((prevState) => {
  //       return {
  //         count: prevState.count + 1
  //       }
  //     });
  //   }
  // }

  state = {
    count: 0,
    // countPlus: this.countIncrease,
  };

  // countIncrease = () => {
  //   this.setState((prevState) => {
  //     return {
  //       count: prevState.count + 1
  //     }
  //   });
  // }

  // countDecrease = () => {
  //   this.setState(prevState => {
  //     return {
  //       count: prevState.count - 1
  //     }
  //   });
  // }

  render() {
    return (
      <CountContext.Provider value={55}>
        <div style={{textAlign: 'center'}}>
          <Title />
          <ButtonPanel />
        </div>
      </CountContext.Provider>
    )
  }
}

export default Counter;
