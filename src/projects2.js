import React from 'react'
import './projects2.css';
import map2 from './images/map2.png'
import tictactoe2 from './images/tictactoe2.png'
import book2 from './images/book2.png'
import lets2 from './images/lets2.png'
import headphones from './images/headphones.png'


class Projects2 extends React.Component {
    render() {
        return (
            <div className='projects2Container'>
                <div className='projects2Main'>
                    <div className='project'>
                        <img src={lets2} className='projectimage' />
                        <div className='projectText'>
                            <h1>Lets</h1>
                            <p>Meetup clone utilising Ruby on Rails and React</p>
                            <a className='btn' href='https://google.com'>Visit Website</a>
                        </div>

                    </div>
                    <div className='project'>
                        <img src={map2} className='projectimage' />
                        <div className='projectText'>
                            <h1>MapGraph</h1>

                            <p>Interactive map allows the user to compare and contrast a range of differing statistics between countries. Made in React with D3 and Vx</p>
                            <a className='btn' href='https://google.com'>Visit Website</a>
                        </div>


                    </div>
                    <div className='project'>
                        <img src={tictactoe2} className='projectimage' />
                        <div className='projectText'>
                            <h1>TicTac</h1>
                            <p>Scaleable tictactoe game with multiple levels of AI difficulty</p>
                            <a className='btn' href='https://google.com'>Visit Website</a>
                        </div>
                    </div>
                    <div className='project'>
                        <img src={book2} className='projectimage' />
                        <div className='projectText'>
                            <h1>Bookies</h1>
                            <p>Book cataloguing website utilising the google book and NYtimes Apis</p>
                            <a className='btn' href='https://google.com'>Visit Website</a>
                        </div>
                    </div>
                    <div className='project'>
                        <img src={headphones} className='projectimage' />
                        <div className='projectText'>
                            <h1>Quality Sounds</h1>
                            <p>Headpone comparison website using sinatra</p>
                            <a className='btn' href='https://google.com'>Visit Website</a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Projects2