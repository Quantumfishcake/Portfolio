import React, { Component } from 'react';
import './main.css';
import background from './images/blue3.jpg'
import background2 from './images/mini1.jpg'
import background3 from './images/blue7.jpg'
import Projects from './projects.js'
import Projects2 from './projects2.js'
import Header from './header.js'
import Social from './social.js'
import { Icon } from 'react-icons-kit'

import {mail4} from 'react-icons-kit/icomoon/mail4'
import {github} from 'react-icons-kit/icomoon/github'
import {linkedin} from 'react-icons-kit/icomoon/linkedin'
import {twitter} from 'react-icons-kit/icomoon/twitter'
import {phone} from 'react-icons-kit/icomoon/phone'



class App extends Component {
  constructor () {
    super ()
    this.state = {
      home: true,
      projects: false,
      name: true
    }
  }

  displayName = () => {
    this.setState({
      name: true
    })
  }
  hideName = () => {
    this.setState({
      name: false
    })
  }


  render() {
    return (
      <div className="App">
      <Header displayName={this.displayName} hideName={this.hideName}/>

        <div className="content" style={{display: this.state.name ? 'block' : 'none'}}>Tom Quant</div>
        <Projects visible={this.state.projects}/>
        <div className='infoText'>I'm Tom and i'm a Sydney based Web Developer, I design and build pleasingly simple websites, and I couldnt think of anything i'd rather be doing. </div>

        <div className="gridcontainer">
        <div className='innerGrid'>
          <section id='one' className="one" style={{backgroundImage: `url(${background2})`}}>
            <div className="wrapper"></div>
          </section>
          <section id='onehalf' className="onehalf" style={{backgroundColor: '#003E5F'}}>
            <div className="wrapper"></div>
          </section>
          </div>

          <section id='two' className="two" style={{backgroundImage: `url(${background3})`}}>
          <Projects2 />
          </section>
          <section2 id='three' className="three" style={{backgroundColor: `white`}}>
          <div className='contact'>
          <h2>Get in touch!</h2>
          <p>I’m always open to discussing product design work or partnership opportunities</p>
          <div className='mailPhone'>
          <div id='mail2'>
          <Icon icon={mail4} id='mail' size={50} />
          <div>tomquant123@gmail.com</div>
          </div>
          <div id='phone2'>
          <Icon icon={phone} id='phone' size={50} />
          <div>0421970149</div>
            </div>
          </div>
          <div className='contactContainer'>
          <div className='contactIcon'>
          <Icon icon={twitter} size={50} />
            </div>
            <div className='contactIcon'>
            <Icon icon={github} size={50} />
            </div>
            <div className='contactIcon'>
            <Icon icon={linkedin} size={50} />
            </div>
          </div>
          </div>
          </section2>

          <Social />
        </div>
      </div >
    );
  }
}

export default App;
