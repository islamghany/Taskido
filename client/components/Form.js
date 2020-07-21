import styled from "styled-components";
import Link from "next/link";
import DB from "react-datepicker";
import Select from "react-select";

const StyledForm = styled.div`
  padding: 4rem 0 0 0;
  width: 100%;
  display: flex;
  justify-content: center;
  .container {
    padding: 2rem 3rem;
    border-radius: 1.5rem;
    background: #fff;
    width: 51.2rem;
    @media (max-width: 600px) {
      width: 90vw;
    }
    border-top: 1px solid rgb(229, 227, 221);
    border-bottom: 1px solid rgb(229, 227, 221);
    border-left: 1px solid rgb(229, 227, 221);
    border-right: 1px solid rgb(229, 227, 221);
    border-radius: 4px;
  }
  .heading {
  }
  form {
    width: 100%;
  }
`;
const StyledFormSuccess = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid #14af64;
  p {
    margin: 0;
    font-weight: 400;
  }
  strong {
    margin-right: 1rem;
  }
`;
const StyledUnit = styled.div`
  margin: 1rem 0;
  .error {
    color: #c4183c;
    text-transform: capitalize;
    font-size: 14px;
  }
  .label {
    cursor: text;
    pointer-events: none;
    color: rgb(112, 108, 100);
    position: relative;
    font-size: 1.4rem !important;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
  }
  .input {
    resize: none;
    min-width: 0px;
    width: 100%;
    font-weight: normal;
    appearance: none;
    box-shadow: none;
    box-sizing: border-box;
    color: ${(props) => props.theme.color};
    height: 4.2rem;
    font-size: 1.6rem !important;
    background: ${(props) => props.theme.bg2};
    border-width: 1px;
    border-style: solid;
    border-color: rgb(229, 227, 221);
    border-image: initial;
    outline: none;
    padding: 1.2rem 1.6rem;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    border-radius: 4px;

    &.error:not(:focus) {
      background-color: rgb(250, 233, 234);
      border-color: rgb(204, 50, 63);
    }
  }
  .select {
    .css-yk16xz-control {
      font-size: 1.6rem !important;
      background: ${(props) => props.theme.bg2};
      border-color: rgb(229, 227, 221);
      color: ${(props) => props.theme.color};
    }
  }
  .textarea {
    height: 12rem;
    min-height: 12rem;
    max-height: 12rem;
    width: 100%;
    font-weight: normal;
    appearance: none;
    box-shadow: none;
    box-sizing: border-box;
    font-size: 1.6rem !important;
    background: ${(props) => props.theme.bg2};
    border-width: 1px;
    border-style: solid;
    border-color: rgb(229, 227, 221);
    color: ${(props) => props.theme.color};
    padding: 1.2rem 1.6rem;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    border-radius: 4px;
    resize: none;
    &.error:not(:focus) {
      background-color: rgb(250, 233, 234);
      border-color: rgb(204, 50, 63);
    }
  }
  .react-datepicker {
    font-size: 1.28rem !important;
    .react-datepicker__header {
      border-top-left-radius: 0.42rem;
      border-top-right-radius: 0.42rem;
    }
    .react-datepicker__current-month {
      font-size: 1.6rem;
    }
    .react-datepicker__day-name {
      width: 2.7199999999999998rem;
      line-height: 2.7199999999999998rem;
      text-align: center;
      margin: 0.2656rem;
    }
    0.64 .react-datepicker__month {
      margin: 0.64rem;
    }
    .react-datepicker__day {
      width: 2.7199999999999998rem;
      line-height: 2.7199999999999998rem;
      margin: 0.2656rem;
    }
    .react-datepicker-time__header {
      font-size: 1.5rem;
    }
  }
`;
const StyledOr = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  vertical-align: middle;
  padding-top: 0.8rem;
  padding-right: 0rem;
  padding-bottom: 0rem;
  padding-left: 0rem;
  margin-top: 0rem;
  margin-right: 0rem;
  margin-bottom: 0rem;
  margin-left: 0rem;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
  .up {
    box-sizing: border-box;
    flex-grow: 1;
    padding-top: 0rem;
    padding-right: 0rem;
    padding-bottom: 0rem;
    padding-left: 0rem;
    margin-top: 0rem;
    margin-right: 0rem;
    margin-bottom: 0rem;
    margin-left: 0rem;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    border-bottom: 1px solid rgb(229, 227, 221);
  }
  .body {
    box-sizing: border-box;
    padding-top: 0rem;
    padding-right: 0.8rem;
    padding-bottom: 0rem;
    padding-left: 0.8rem;
    margin-top: 0rem;
    margin-right: 0rem;
    margin-bottom: 0rem;
    margin-left: 0rem;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    p {
      color: ${(props) => props.theme.dark};
      position: relative;
      text-align: center;
      font-weight: 400 !important;
      font-size: 1.6rem !important;
      line-height: 1.5 !important;
      transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
      margin: 0.8rem 0rem !important;
    }
  }
  .bottom {
    box-sizing: border-box;
    flex-grow: 1;
    padding-top: 0rem;
    padding-right: 0rem;
    padding-bottom: 0rem;
    padding-left: 0rem;
    margin-top: 0rem;
    margin-right: 0rem;
    margin-bottom: 0rem;
    margin-left: 0rem;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    border-bottom: 1px solid rgb(229, 227, 221);
  }
`;
const StyledForgetPassword = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  p {
    font-size: 1.7rem;
    font-weight: 300;
  }
  a {
  }
`;

const StyledA = styled.a`
  display: inline-block;
  color: ${(props) => (props.color ? props.color : props.theme.primary)};
  font-weight: 400;
  max-width: 100%;
  text-overflow: ellipsis;
  vertical-align: bottom;
  font-size: 1.6rem !important;
  line-height: 1.5 !important;
  border-radius: 4px;
  overflow: hidden;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
  text-decoration: underline !important;
  cursor: pointer;
`;
export const Input = ({
  label,
  name,
  type = "text",
  register,
  error,
  defaultValue,
}) => {
  return (
    <StyledUnit>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        defaultValue={defaultValue}
        ref={register}
        className={`input ${error ? "error" : null}`}
        type={type}
        name={name}
        id={name}
      />
      {error && <span className="error">{error}</span>}
    </StyledUnit>
  );
};
export const Textarea = ({ label, name, register, error, defaultValue }) => {
  return (
    <StyledUnit>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        defaultValue={defaultValue}
        ref={register}
        className={`textarea ${error ? "error" : null}`}
        name={name}
        id={name}
      ></textarea>
      {error && <span className="error">{error}</span>}
    </StyledUnit>
  );
};
export const DatePicker = ({
  label,
  name,
  register,
  error,
  defaultValue,
  onChange,
}) => {
  return (
    <StyledUnit>
      <DB
        selected={defaultValue}
        minDate={new Date()}
        onChange={onChange}
        className={`input date ${error ? "error" : null}`}
        dateFormat="MM-dd-yyyy"
      />
    </StyledUnit>
  );
};
const options = [
  { value: "NOT_STARTED", label: "Not Started" },
  { value: "COMPELETED", label: "Compeleted" },
  { value: "CANCELLED", label: "Cancelled" },
];
export const DataSelect = ({
  label,
  name,
  register,
  error,
  value,
  onChange,
}) => {
  return (
    <StyledUnit>
      <Select
        defaultValue={options[value]}
        options={options}
        onChange={onChange}
        className={`select ${error ? "error" : null}`}
      />
    </StyledUnit>
  );
};
export const Form = ({ onSubmit, children }) => {
  return <StyledForm>{children}</StyledForm>;
};
export const FormOr = ({}) => {
  return (
    <StyledOr>
      <div className="up"></div>
      <div className="body">
        <p>or</p>
      </div>
      <div className="bottom"></div>
    </StyledOr>
  );
};
export const StyledLink = ({ children, href, as: like }) => {
  return (
    <Link href={href} as={like}>
      <StyledA>{children}</StyledA>
    </Link>
  );
};
export const ForgetPassword = ({ children }) => {
  return <StyledForgetPassword>{children}</StyledForgetPassword>;
};
export const FormSuccess = ({ children }) => {
  return (
    <StyledFormSuccess>
      <p>
        <strong>Yaa!</strong>
        {children}
      </p>
    </StyledFormSuccess>
  );
};
