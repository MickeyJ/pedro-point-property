import React, { Component } from 'react'
import SecondaryLayout from './layout/secondary'


export default class Video extends Component{
  render(){
    return(
      <SecondaryLayout
        title={this.props.title}
        description={this.props.description}>
        <section className="video-container row-center">

          <div>
            <h1>Video</h1>
            <video id="video" controls autoPlay>
              <source src="media/pano-video.mp4" type="video/mp4"/>
            </video>
          </div>


        </section>
      </SecondaryLayout>
    )
  }
}
