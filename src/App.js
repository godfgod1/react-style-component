import styled, {keyframes} from "styled-components"

export const Father = styled.div`
  display:flex;
`;

const Box = styled.div`
  background-color:${(props) => props.bgColor};
  width:100px;
  height:100px;
`;

const Text = styled.h1`
  color:white;
`;

const Circle = styled(Box)`
  border-radius:50px
`

const Btn = styled.button`
color:white;
background-color:tomato;
border:0;
border-radius:15px;
`

const Input = styled.input.attrs({required:true, minLength:10})`
  background-color:tomator;
`;

const Wrapper =styled.div`
  display:flex;
  height:100vh;
  width:100vw;
  justify-content:center;
  align-items:center;
` 
const rotationAni = keyframes`
  0%{
    transform:rotate(0deg);
    border-radius:0px;
  } 
  50%{
    transform:rotate(360deg);
    border-radius:100px;
  }
  100%{
    transform:rotate(0deg);
    border-radius:0px;
  }
`
const Emoji = styled.span`
font-size:36px;
`


// const BoxAni = styled.div`
//   height:200px;
//   width:200px;
//   background-color:tomato;
//   display:flex;
//   justify-content:center;
//   align-items:center;
//   animation:${rotationAni} 10s linear infinite;
//   span {
//     &:hover{
//      font-size:100px; 
//     }
    
//   }
// `;
const BoxAni = styled.div`
  height:200px;
  width:200px;
  background-color:tomato;
  display:flex;
  justify-content:center;
  align-items:center;
  animation:${rotationAni} 10s linear infinite;
  ${Emoji} {
    &:hover{
     font-size:100px; 
    }
    
  }
  &:hover{
    background-color:blue;
  }
`;






function App() {
  return (
    <Father as='header'>
      <BoxAni>
        <Emoji as='p'>😁</Emoji>  
      </BoxAni>
      <Emoji as='p'>💕</Emoji>  
      {/* <Box as='a'>a</Box> */}
    </Father>
    
  )
}

export default App;

