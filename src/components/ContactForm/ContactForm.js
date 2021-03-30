import { Component } from 'react';
import { v4 as genId } from 'uuid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  onChange = event => {
    event.preventDefault();
    console.dir(event.currentTarget);
    const {value, name} = event.currentTarget;
    const currentState = this.state;
    const upadateState = {[name]: value};
    this.setState({...currentState, ...upadateState})
  };

  render() {
    const nameId = genId();
    const telId = genId()
    return (
      <form>
        <label htmlFor={nameId}>
          Name
          <input type="text" name="name" id={nameId} value={this.state.name} onChange={this.onChange} />
        </label>

        <label htmlFor={telId}>
          Tel
          <input type="tel" name="number" id={telId} value={this.state.number} pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})" onChange={this.onChange} />
        </label>
      </form>
    );
  }
}

export default ContactForm;
