import React, { Component } from 'react';
// import ;


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Hello!' };
  }
  // WARNING: this syntax is experimental!
  // Using an arrow here binds the method:
  handleClick = () => {
    alert(this.state.message);
  }

  render() {
    return (
      // <div className='container' style={{ margin: '0px', border: '0px', padding: '0px' ,weidth:'100px' }}>
      <div className='header'>
        <a href="" class="logo">Lavender Look</a>
        <div className="header-right">
          {/* <a className="active" href="#home">About Us</a> */}
          <a href="#about">Current Sale News</a>
          <a href="#about">Upcoming Collection</a>
          <a href="#about">Offer</a>
        </div>
      </div>
      // </div>
    );
  }
}
export default Header;
