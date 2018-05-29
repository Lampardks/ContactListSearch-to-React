import React, { Component } from 'react';

class SearchInput extends Component {
  render() {
      const { onChange } = this.props;

    return (
      <div>
        <input
            placeholder="Search contact"
            className='searchInput'
            onChange={onChange}
        />
      </div>
    );
  }
}

export default SearchInput;
