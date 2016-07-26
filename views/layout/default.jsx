import React, { Component } from 'react'

import Head from '../common/Head'
import Nav from '../common/Nav'
import Banner from '../common/Banner'
import Footer from '../common/Footer'

const siteName = 'Property Site';

export default class DefaultLayout extends Component{
  render(){
    return(
      <html lang="en">
      <Head
        siteName={siteName}
        title={this.props.title}
        description={this.props.description}
      />
      <body>
      <div id="all-wrap">

        <div id="top-wrap">

          <Nav />

          <Banner />

        </div>

        

        <main id="main-wrap">
          {this.props.children}
        </main>

        <Footer siteName={siteName}/>

      </div>
      </body>
      </html>
    )
  }
}