import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1.2rem 1.6rem;
  height: 4.2rem;
  cursor: pointer;
  outline: none;
  border-radius: 0.6856rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  span {
    display: inline-block;
    margin-left: 0.8rem;
  }
  font-weight: 400;
  border: none;
  background: ${(props) => props.theme[props.type]};
  color: ${(props) => (props.type === "default" ? props.theme.dark : "#fff")};
  text-align: center;
  font-size: 1.6rem;
  line-height: 2.1rem;
  box-shadow: 0 2px 2px 0 ${(props) => props.theme[props.type]}24,
    0 3px 1px -2px ${(props) => props.theme[props.type]}33,
    0 1px 5px 0 ${(props) => props.theme[props.type]}1f;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),
    transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 0 14px 26px -12px ${(props) => props.theme[props.type]}6b,
      0 4px 23px 0px #0000001f,
      0 8px 10px -5px ${(props) => props.theme[props.type]}33;
    background: darken(${(props) => props.theme[props.type]}, 10%);
  }
  &.svg:hover {
    svg {
      path {
        stroke: ${(props) => props.theme.primary} !important;
      }
    }
  }
  &.rounded {
    border-width: 0.1rem;
    border-color: transparent;
    border-radius: 3rem;
  }
  &.outline {
    background: transparent;
    color: ${(props) => props.theme[props.type]};
    border: 1px solid ${(props) => props.theme[props.type]};
  }
  &.link {
    background: transparent;
    color: ${(props) => props.theme[props.type]};
    box-shadow: none;
  }
  &.block {
    display: block;
    width: 100%;
  }
  &:active {
    transform: translateY(-2px);
  }
  &:disabled {
    background: ${(props) => `${props.theme[props.type]}6b`};
    box-shadow: none;
    box-shadow: none;
    cursor: not-allowed;
  }
`;

const SocialButtonStyled = styled.button`
  width: 8rem;
  height: 8rem;
  border-radius: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(245, 244, 242);
  border: 1px solid rgb(229, 227, 221);
  font-size: 3rem;
  cursor: pointer;
  transition: all 0.3s easy;
  svg {
    height: 3rem;
    width: 3rem;
  }
  &:hover {
    background: ${(props) => props.fill};
  }
`;
export const SocialButton = ({ children, fill, className }) => {
  return (
    <SocialButtonStyled fill={fill} className={className}>
      {children}
    </SocialButtonStyled>
  );
};
export const Button = ({
  disabled,
  loading,
  onClick,
  children,
  className,
  rounded,
  block,
  type,
}) => {
  return (
    <StyledButton
      rounded={rounded}
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? "Loading..." : children}
    </StyledButton>
  );
};
