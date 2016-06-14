import React, { Component } from 'react'

export default class Book extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="amazon">
          <div className="row">
            <div className="image-wrapper">
              <a href="http://www.amazon.com/Ego-Enemy-Ryan-Holiday/dp/1591847818/?tag=ryanholnet-20">
                <img src="./img/ego.jpg" alt="" />
              </a>
            </div>
          </div>
        <div className="row">
          <div className="buy-it">
            <a href="http://www.amazon.com/Ego-Enemy-Ryan-Holiday/dp/1591847818/?tag=ryanholnet-20">
              Buy
            </a> the book
          </div>
        </div>
      </div>
    )
  }
}
