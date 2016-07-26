import React, { Component } from 'react'
import DefaultLayout from './layout/default'

export default class Gallery extends Component{
  render(){
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>
        <section>

          <h1>Gallery</h1>

        </section>
      </DefaultLayout>
    )
  }
}
