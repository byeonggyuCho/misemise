import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <>
        <div className = "container">
          <div className = "menu">
            헤더 내용333
          </div>
          <div className = "icon">
            아이콘
          </div>
        </div>
      </>
    );
  }
}

export default Header;