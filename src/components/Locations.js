import React, { Component } from 'react'
import { Link } from 'react-router'
import data from '../data.json'

class Locations extends Component {

  render () {
    // const locations =

    return <div>
      <h2>Our Location</h2>
      {data.locations.map((location, i) => {
        return <section key={i}>
          <h3><Link to={`/locations/${location.slug}`}>{location.name}</Link></h3>
          <p>{location.address}</p>
        </section>
      })}
    </div>
  }
}

export default Locations
