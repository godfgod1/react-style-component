import styled, {keyframes} from "styled-components"
import {Father} from './App';


const Title = styled.h1`
  color:${props => props.theme.textColor}
`

const Wrapper = styled.div`
  display:flex;
  height:100vh;
  width:100vw;
  justify-content:center;
  align-items:center;
  background-color:${props => props.theme.backgroundColor}
`



function Theme() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  )
}

export default Theme;