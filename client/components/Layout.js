import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import GlobalStyle from "./GlobalStyle.js";
import Sidebar from "./Sidebar";
import Wrapper from "./Wrapper.js";
import User from "./User";
import LoadingPage from "./LoadingPage.js";

const theme = {
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0,0,0,.09)",
  primary: "#0B1083",
  dark: "#212529",
  white: "#ffffff",
  bg: "#f9fafc",
  bg2: "#f0f3f8",
  secondary: "#C2603F",
  color: "#201A43",
  color2: "#C1BDC4",
  danger: "#c4183c",
  success: "#4CAE51",
};

const Button = styled.button`
  padding: 2rem;
  background: lightgreen;
`;
/*<Sidebar />
		 <Wrapper>
		 <Button>
		 sdlfgfk
		 </Button>
		 		 </Wrapper>
*/
const Page = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <User>
        {(data) => {
          const { user } = data;
          if (user === undefined) return <LoadingPage loading={true} />;
          if (user === null) {
            return <div>{props.children}</div>;
          } else {
            return (
              <div>
                <Sidebar />
                <Wrapper>
                  <div>{props.children}</div>
                </Wrapper>
              </div>
            );
          }
        }}
      </User>
      <div></div>
    </ThemeProvider>
  );
};

export default Page;
