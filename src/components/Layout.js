import React, { Component } from 'react'
import { Link } from 'react-router'

class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  layoutClassName () {
    if (this.props.location.pathname === '/') {
      return 'home'
    } else {
      return this.props.location.pathname.split('/').join(' ')
    }
  }

  render () {
    return <div className={`layout ${this.layoutClassName()}`}>
      <header>
        <nav>
          <ul className='logo'>
            <li><Link to='/'><h1>URBAN Creamery</h1></Link></li>
          </ul>
          {/* <li>
            <Link to='/'>Home</Link>
          </li> */}
          <ul className='nav'>
            <li>
              <Link to='/menu'>MENU</Link>
            </li>
            <li>
              <Link to='/contact'>CONTACT US</Link>
            </li>
            <li>
              <Link to='/locations'>LOCATIONS</Link>
            </li>
            <li>
              <Link to='/orders'>ORDERS</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {this.props.children}
      </main>
      <footer>
        <p>&copy; 2017 URBAN Creamery.<br /> Built with &hearts; at The Iron Yard, in St. Pete, FL.</p>
      </footer>
    </div>
  }
}

export default Layout
