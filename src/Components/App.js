import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(){
    super();

    this.state = {
      text: '',

    }
  }

  render() {
    return (
      <div>
        <h2>Note to self</h2>
        <Form inline> 
            <FormControl onChange={e =>this.setState({ text: e.target.value})} />
            {' '}
            <Button onClick={() => console.log(this.state)}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App;

//FormControl = Input