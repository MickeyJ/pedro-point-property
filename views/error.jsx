import React, { Component } from 'react'
import DefaultLayout from './layout/default'

export default class Error extends Component{
  render(){
    if(this.props.error.status){
      return(
        <DefaultLayout>
          <section className="content-box content-row">

            <article className="box3">
              <h1>{this.props.message}</h1>
              <h2>{this.props.error.status}</h2>
              <pre>{this.props.error.stack}</pre>
            </article>

          </section>
        </DefaultLayout>
      )
    } else {
      return(
        <DefaultLayout>
          <section className="content-box content-row">

            <h1>{this.props.message}</h1>

          </section>
        </DefaultLayout>
      )
    }
  }
}

