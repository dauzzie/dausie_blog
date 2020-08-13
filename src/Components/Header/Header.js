import React from 'react'
import icon from '../../images/dausicon.png'
// import icondrk from '../../images/dausicon-dark.png'
import buttonStyle from '../../homestyle.css'
import {
    HeaderContainer,
    HeaderWrapper,
    HeaderTitle,
    HeaderSubtitle,
    HomeButton,
    GithubLogin
} from './'
import { config } from "../../config"
import { homeButton } from './HomeButton'

// function handleIcon(props) {
//     var isLight = props.theme.mode;
//     if(isLight === "light") {
//         return <LightIcon  />
//     }

//     return <DarkIcon />
// }

// function LightIcon(props) {
//     return <img src={icon} style={{position:"absolute", display:"flex", height:"50px", maxHeight:"70px"}}></img>
// }

// function DarkIcon(props) {
//     return <img src={icondrk} style={{position:"absolute", display:"flex", height:"100px", maxHeight:"70px"}}></img>
// }

export const Header = () => {

    return (
        <HeaderContainer>
            <div className="tooltip">
            <a href="https://dauzzie.github.io/">
                
                    <img className="homeImage" src={icon} style={buttonStyle} alt="scaly home bg"></img>
                    <span class="tooltiptext">Go Back</span>
            </a>
            </div>
            {/* <GithubLogin isAbsolute={true} /> */}
            <HeaderWrapper>
                <HeaderTitle>{config.title}</HeaderTitle>
                <HeaderSubtitle>{config.subtitle}</HeaderSubtitle>
            </HeaderWrapper>
        </HeaderContainer>
    )
}
