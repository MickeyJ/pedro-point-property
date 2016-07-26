import React, { Component } from 'react'
import DefaultLayout from './layout/default'

export default class Index extends Component{
  render(){
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>
        <section>


          <section className="img-container row-center">
            <h2 className="site-phrase center-txt-lat">
              Awesome 180° View Lot at Pedro Point, Overlooking Shelter Cove,
              with a Panoramic view up the Coast to San Francisco Bay.
            </h2>

            <div className="img-box">
              <div className="inner-text">
                <span>Location</span>
              </div>
              <a href="/location" >
                <img className="map-link" src="images/link-map.png" alt="map" />
              </a>
            </div>

            <div className="img-box">
              <div className="inner-text">
                <span>Gallery</span>
              </div>
              <a href="/gallery" >
                <img className="view-link" src="images/link-view.jpg" alt="view" />
              </a>
            </div>
            
          </section>

        </section>
      </DefaultLayout>
    )
  }
}

