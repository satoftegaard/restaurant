import React, { Component } from 'react'
import { Link } from 'react-router'

class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  render () {
    return <div className='layout'>
      <Link to='/'><h1>URBAN Creamery</h1></Link>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/menu'>Menu</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li>
            <Link to='/locations'>Locations</Link>
          </li>
        </ul>
      </nav>
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
