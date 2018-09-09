import React from 'react'
import { Icon } from 'react-icons-kit'
import './social.css'
import {linkedin} from 'react-icons-kit/icomoon/linkedin'
import {github} from 'react-icons-kit/icomoon/github'
import {twitter} from 'react-icons-kit/icomoon/twitter'

class Social extends React.Component {

    render() {
        return(
            <div id="socialMedia">
                        <ul>
                        <li><a href='https://google.com'><Icon icon={linkedin} size={50}/></a></li>
                        <li><a href='https://google.com'><Icon icon={github} size={50}/></a></li>
                        <li><a href='https://google.com'><Icon icon={twitter} size={50}/></a></li>
                        </ul>
                    </div>
        )
    }
}
export default Social