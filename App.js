import './App.css';
import React, { Component } from 'react';
import ContactList from './components/ContactList.component';
import SearchInput from './components/SearchInput.component';
import NotFoundSearch from './components/NotFoundSearch.component';
// import { CONTACTS } from './config';
import axios from '../node_modules/axios';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          isLoading: false,
          contacts: null,
          filteredContacts: []
      }

      // Not recommended
      //this.onSearchInputChange = this.onSearchInputChange.bind(this);
  }

  // Arrow function is recommended way
  onSearchInputChange = ({ target: { value }}) => {
      const { contacts } = this.state;

      const filteredContacts = contacts.filter(
          ({ name }) => {
              return name.toLowerCase().includes(value.toLowerCase());
          });

      // DON'T DO THIS
      // this.filteredContacts = filteredContacts;

      //How you should this
      this.setState({ filteredContacts });
  }

  // componentWillMount() {
  //     console.log('app will mount!');
  // }

  componentDidMount() {
      this.setState({ isLoading: true });

      axios.get('https://gist.githubusercontent.com/Lampardks/b8dd9c28e9974b0c0719a59b1c6995bd/raw/d31438ff16443fba93e68b7bdfd40593f2a18e55/contacts.json')
        .then(response => {
            const { data: { contacts } } = response;

            this.setState({
                contacts,
                filteredContacts: contacts,
                isLoading: false
            })
        })
  }

  render() {
    const { filteredContacts, isLoading } = this.state;

    return (
      <div className="App">
        <SearchInput onChange={this.onSearchInputChange} />
        {isLoading
            ? <p>Loading...</p>
            : filteredContacts.length === 0
                ? <NotFoundSearch />
                : <ContactList contacts={filteredContacts} />
        }
      </div>
    );
  }
}

export default App;

// <ContactList contacts={filteredContacts} />
