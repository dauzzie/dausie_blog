import styled from 'styled-components'
import headerbg from '../../images/headerbg.jpg'
import headerbgdark from '../../images/headerbgdark.png'
import { config } from '../../config'
const { backgroundColor, backgroundColorDark } = config.header;
const {backgroundImg, backgroundImgDark} = config.header;

export const HeaderContainer = styled.div`
  position: relative;
  padding: 5em;
  text-align: center;
  background-image: url(${(props) => props.theme.mode === "light" ? headerbg : headerbgdark});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @media only screen and (max-width: 768px) {
    padding: 3em;
  }
`