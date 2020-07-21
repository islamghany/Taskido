import styled from "styled-components";

const Wrapper = styled.div`
  background: ${(props) => props.theme.bg};
  min-height: 100vh;
  margin-left: 30rem;
  padding: 2.5rem 5rem 5rem 5rem;
  background-repeat: repeat-x;
  background-position-x: center;
`;
export default ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
