import React, { Component } from 'react'
import { Link } from 'react-router'
import data from '../data.json'

class Menu extends Component {

  componentDidMount () {
    if (!this.props.params.slug) {
      this.props.router.push('/menu/' + data.menu[0].slug)
    }
  }

  render () {
    const categories = data.menu.map((category, i) => {
      return <li key={i}>
        <Link to={`/menu/${category.slug}`} activeClassName='active'>
          {category.name}
        </Link>
      </li>
    })

    return <div>
      <h2>Our Menu</h2>

      <section className='categories'>
        <ul>
          {categories}
        </ul>
      </section>

      {this.props.children}
    </div>
  }
}

export default Menu
