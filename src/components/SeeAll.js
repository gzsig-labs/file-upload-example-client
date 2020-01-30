import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import service from '../api/service';

class SeeAll extends Component {
  constructor(props) {
    super(props)
    this.state = {
      things: [1, 2, 3]
    }
  }
  componentDidMount() {
    service.listAllThings()
      .then(res => {
        this.setState(
          { things: res }
        )
      })
  }
  render() {
    return (
      <div>
        {this.state.things.map((thing, i) => {
          return (
            <div key={i}>
              <p>{thing.name}</p> <p>{thing.description}</p> <img src={thing.imageUrl} />
            </div>
          )
        })}
        <Link to='/new-thing'>
          newthing
        </Link>
      </div>
    )
  }
}

export default SeeAll;