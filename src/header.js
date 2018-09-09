import React, { Component } from 'react';
import './header.css';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            isTop: true,
            isMid: false,
            isBot: false
        }
    }

    _handleClick = () => {
        this.props.displayName()
    }
    _handleClick2 = () => {
        this.props.hideName()
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
         
            const isMid = (window.scrollY > 800 && window.scrollY < 1400);
            const isBot = window.scrollY > 1400;
            if (isBot) {
                console.log(this.state)
                this.setState({ isBot: true, isTop: false, isMid: false })
            } else if(isMid){
                console.log(this.state)
                this.setState({ isBot: false, isTop: false, isMid: true })
            }
            else {
                console.log(this.state)
                this.setState({ isBot: false, isTop: true, isMid: false })
            }
        });

    }

    render() {
        return (
            <div>
                <div className='navBar'>
                    <ul className='navList'>
                        <li><Link to="App" smooth={true} offset={0} duration={500} className={this.state.isBot ? 'bottom1' : this.state.isMid ? 'middle1' : 'top1'}>Home</Link></li>
                        <li><Link to="two" smooth={true} offset={0} duration={500} className={this.state.isBot ? 'bottom2' : this.state.isMid ? 'middle2' : 'top2'}>Projects</Link></li>
                        <li><Link to="three" smooth={true} offset={0} duration={500} className={this.state.isBot ? 'bottom3' : this.state.isMid ? 'middle3' : 'top3'}>Contact</Link></li>
                    </ul>
                   
                </div>
            </div>
        )
    }
}

export default Header

