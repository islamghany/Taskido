import styled from 'styled-components';

const StyledH1 =styled.h1`
    margin-bottom:3rem;
    font-weight:600;
    font-size:4.8832rem;
    letter-spacing: -.1rem;
    line-height: 4.8rem;
    color:${props => props.color ? props.color : props.theme.color }
`

export const H1= ({color,children,className})=>{
  return <StyledH1 className={className}>
  {children}
  </StyledH1>
} 