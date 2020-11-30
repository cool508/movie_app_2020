import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    console.log('hello');
  }
  state = {
    count : 0,
  };
  add = () => {
    this.setState( 
      current => ({
        count: current.count +1,
      })
    );
  };
  minus = () => {
    this.setState( 
      current => ({
        count: current.count -1,
      })
    );
  };
  ComponentDidMount(){
    console.log('component rendered');
  }
  ComponentDidUpdate(){
    console.log('I just updated');
  }
  ComponentWilUnmount(){
    console.log('Goodbye, cruel world');
  }
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The Number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button> &nbsp;&nbsp;
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
