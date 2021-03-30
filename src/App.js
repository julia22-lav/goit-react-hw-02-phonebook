import './App.css';
import {Component} from 'react';
import ContactForm from "./components/ContactForm";

class App extends Component {
  state = {
    contacts: [],
    }
  
  render(){
    return(<><ContactForm/></>)
  }
}

export default App;
