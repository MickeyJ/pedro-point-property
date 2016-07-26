import React, { Component } from 'react'
import SecondaryLayout from './layout/secondary'

function makeSlide(count, array){
  for (var i = 0; i < count; i++) {
    array[i] = `img${i+1}`
  }
  return array
}

export default class Location extends Component{
  render(){
    return(
      <SecondaryLayout
        title={this.props.title}
        description={this.props.description}>
        
        <section className="video-container">
          <h1>Location</h1>

          <div id="slide-wrap">
            <div className="rslides_container">
              <ul className="rslides" id="slider1">
                {makeSlide(25, []).map((x,i) =>(
                  <li className="slide">
                    <img src={`images/${x}.jpg`} alt="" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </section>
        <script src="js/responsiveslides.js"></script>
        <script src="js/slider.js"></script>
      </SecondaryLayout>
    )
  }
}
