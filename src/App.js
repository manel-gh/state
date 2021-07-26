
import { Component } from 'react';
import './App.css';
import Profile from './component/Profile';
import {Button} from 'react-bootstrap';

class App extends Component {
  state={
    show:true
  }

  render () {
  return (
    <div className="App">
     <Button variant="secondary" onClick={()=>this.setState({show:!this.state.show})} >show</Button>
     {
       this.state.show &&   <Profile />
     }
     
    </div>
  );
}
}
export default App;
