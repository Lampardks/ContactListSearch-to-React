import React, { Component } from 'react';

class ContactItem extends Component {
  static defaultProps = {
      image: 'http://marketline.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'
  }

  render() {
    const { name,phone,image } = this.props;
    return (
        <div className='itemContainer'>
            <img alt='' src={image} className='avatar' />
            <div>
                <p className='text'>{name}</p>
                <p className='text'>{phone}</p>
            </div>
        </div>
    );
  }
}

export default ContactItem;
