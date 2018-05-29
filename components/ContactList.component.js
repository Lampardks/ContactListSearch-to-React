import React, { Component } from 'react';
import ContactItem from './ContactItem.component';


// const ContactList = ({ contacts }) => (
//     <div>
//         {contacts.map((contact, index) =>
//             <ContactItem
//                 {...contact}
//                 key={index}
//             />
//         )}
//     </div>
// );

class ContactList extends Component {
  render() {

    const { contacts } = this.props;

    return (
      <div>
        {contacts.map((contact, index) =>
            <ContactItem
                {...contact}
                key={index}
            />
        )}
      </div>
    );
  }
}

export default ContactList;
