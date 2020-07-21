import styled from "styled-components";
import { Search, Calendar, Logout, Add } from "../assets/icon.js";
import moment from "moment";
import { Button } from "./Button";
import { H1 } from "./typo";
import Signeout from "./Signout";
import Link from "next/link";
import { useState } from "react";
import Router from "next/router";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav__left {
    flex: 1;
  }
  .nav__body {
    padding: 0 1rem 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      margin-right: 0.8rem;
    }
  }
  .nav__right {
    padding: 0 0rem 0 1rem;
  }
`;
const SearchInputStyled = styled.div`
  position: relative;
  overflow: hidden;
  .icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 4rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      path {
        transition: stroke 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
        stroke: ${(props) => props.theme.color2};
      }
    }
  }
  input {
    resize: none;
    min-width: 0px;
    width: 100%;
    font-weight: normal;
    appearance: none;
    box-shadow: none;
    box-sizing: border-box;
    color: ${(props) => props.theme.primary};
    height: 4.2rem;
    font-size: 1.6rem !important;
    background: ${(props) => props.theme.bg2};
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.color2};
    border-image: initial;
    outline: none;
    padding: 1.2rem 1.6rem;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    border-radius: 2.6rem;
    padding-left: 4rem;
    &:focus {
      background: transparent;
      border-color: ${(props) => props.theme.primary};
    }
    &:focus + .icon {
      svg {
        path {
          stroke: ${(props) => props.theme.primary};
        }
      }
    }
  }
`;
const SearchInput = () => {
  const [keyword, setKeyword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim().length) {
      Router.push(`/?keyword=${keyword}`);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <SearchInputStyled>
        <input
          placeholder="Search"
          name="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <div className="icon">
          <Search />
        </div>
      </SearchInputStyled>
    </form>
  );
};
const StyledAddButton = styled.button`
  height: 4rem;
  background: ${(props) => props.theme.bg2};
  border: none;
  padding: 0 2rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
  svg {
    path {
      transition: stroke 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    }
  }
  span {
    transition: color 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
  }
  &:hover {
    background: ${(props) => props.theme.primary};
    span {
      color: #fff;
    }
    svg {
      path {
        stroke: #fff !important;
      }
    }
  }
`;
export const AddButton = ({ onClick, icon }) => {
  return (
    <StyledAddButton onClick={onClick}>
      {icon()}
      <span>Add Task</span>
    </StyledAddButton>
  );
};
const Nav = () => {
  return (
    <div>
      <StyledNav className="nav">
        <div className="nav__left">
          <SearchInput />
        </div>
        <div className="nav__body">
          <div className="icon">
            <Calendar color={"#201A43"} />
          </div>
          <p>{moment().format("LL")}</p>
        </div>
        <div className="nav__right">
          <Signeout>
            <Button className="link" type="primary">
              <Logout color={"#201A43"} />
              <span>Logout</span>
            </Button>
          </Signeout>
        </div>
      </StyledNav>
      <div className="flex-between py-2">
        <H1 className="m-0">Tasks</H1>
        <Link href="/task/new" as="/task/new">
          <a>
            <AddButton icon={() => <Add color={"#201A43"} />} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
