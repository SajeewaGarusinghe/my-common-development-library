import react, { Component } from 'react';

class Component1 extends Component {
  state = {
    counter: 0,
  };
  submit = () => {
    this.setState({ counter: this.state.counter + 1 })
  }
  
  render() {
      return (
          <div >
        <h2>This is component 1</h2>
        
        {this.state.counter}
        <input type="button" value={'submit'} onClick={'this.submit'}></input>
      </div>
    );
}
}

export default Component1;



