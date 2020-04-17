import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import routeMap from '../data/routeMap';

class Hamburger extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <React.Fragment>
        <button
          className='hamburger-container'
          id={this.state.open === true ? 'hamburger-open' : 'hamburger-closed'}
          onClick={this.handleClick}
        >
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </button>
        <div
          className='menu-overlay'
          id={this.state.open === true ? 'menu-open' : 'menu-closed'}
        >
          <ul className='hamburger-navbar'>
            {routeMap.map((page) => (
              <NavLink
                key={page.id}
                onClick={this.handleClick}
                className='hamburger-tab'
                exact
                to={page.path}
              >
                {page.label}
              </NavLink>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Hamburger;
