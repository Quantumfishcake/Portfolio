import React, { Component } from 'react';
import './main.css';
import background from './images/stars.jpeg'
import background2 from './images/beach1.jpeg'
import background3 from './images/city.jpeg'
import { Icon } from 'react-icons-kit'
import { chevronRight } from 'react-icons-kit/fa/chevronRight'
import { chevronLeft } from 'react-icons-kit/fa/chevronLeft'

const listImages = [background, background2, background3]
var i = 0

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: listImages[i],
      visible: props.visible
    }
  }

  _left = () => {
    if (i > 0) {

      this.setState({ image: listImages[i - 1] })
      i = i - 1
    } else {
      i = listImages.length - 1
      this.setState({ image: listImages[i] })
    }
  }
  _right = () => {
    if (i < listImages.length - 1) {
      this.setState({ image: listImages[i + 1] })
      i = i + 1
    } else {
      i = 0
      this.setState({ image: listImages[i] })
    }
  }

  render() {
      if (!this.state.visible) {
        return null
      } 
    return (
      <div>
        <div className="leftbox" style={{ backgroundImage: `url(${this.state.image}` }}>
        <div style={{ color: 'white' }}>
          <Icon icon={chevronLeft} size={50} className='leftbutton' onClick={this._left}/>
          </div>
          <div style={{ color: 'white' }}>
          <Icon icon={chevronRight}  size={50} className='rightbutton' onClick={this._right}/>
          </div>
        </div>
      </div>
    )
  }
} export default Projects