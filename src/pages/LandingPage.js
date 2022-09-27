import React, { Component } from 'react'
import Header from '../layouts/Header'

export class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
      </>
    )
  }
}

export default LandingPage
