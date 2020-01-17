import React, { Component } from 'react';

export default class BookList extends Component {
  render() {
    return (
      <div className='book-list'>
        <ul>
          <li>The Way of Kings</li>
          <li>The Name of the Wind</li>
          <li>The Final Empire</li>
        </ul>
      </div>
    )
  }
}
