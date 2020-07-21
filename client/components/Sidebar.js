import styled from "styled-components";
import {
  Add,
  Menu,
  MenuVert,
  Today,
  Rocket,
  Apps,
  StartOutline,
  Close,
} from "../assets/icon.js";
import Link from "next/link";
import Signeout from "./Signout";
const StyledSidebar = styled.aside`
  height: 100vh;
  width: 30rem;
  background: #fff;
  background-image: linear-gradient(to bottom left, #fff, #fff, #fff);
  background-size: 210% 210%;
  background-position: 100% 0;
  background-color: #fff;
  transition: all 0.15s ease;
  box-shadow: rgba(17, 31, 93, 0.08) 3px 0px 30px,
    rgba(27, 27, 43, 0.09) 2px 0px 5px;
  position: fixed;
  float: left;
  z-index: 1;
  overflow-y: auto;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid;
  background: ${(props) => props.theme.primary};
  border-color: ${(props) => props.theme.color2};
  .pic {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 2.5rem;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #222;
  }
  .name {
    color: #fff;
    margin-left: 1rem;
    span {
      font-weight: 500;
      font-size: 1.4rem;
    }
  }
`;
const StyledList = styled.ul`
  padding: 1rem 0;
`;
const StyledItem = styled.li`
  display: flex;
  align-items: center;
  .sidetab {
    width: 0.7rem;
    height: 4.8rem;
    background: ${(props) =>
      props.match ? props.theme.primary : "transparent"};
  }
  a {
    flex: 1;
    margin: 1rem 1rem 1rem 0;
    color: #212529;
    display: block;
    border: 1px solid transparent;
    height: 4.8rem;
    .item-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      .info {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1rem;
        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
        }
      }
      .details {
        display: flex;
        align-items: center;
        justify-content: center;
        .num {
          margin-right: 1rem;
        }
        .menu {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          width: 26px;
          height: 46px;
          transition: background-color 83ms linear;
          &:hover {
            background-color: #e1dfdd;
          }
        }
      }
    }
    &:hover {
      background-color: #ffffff;
      border-color: #f4f4f4 !important;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
      transition: border-color 0.167s linear, box-shadow 0.167s linear;
    }
  }
`;
// <Signeout />
import { withRouter } from "next/router";

const TaskItem = withRouter(({ title, Icon, match, to, router }) => {
  return (
    <StyledItem>
      <Link href={to}>
        <a>
          <div className="item-wrapper">
            <div className="info">
              <div className="icon">{Icon()}</div>
              <div className="title">
                <span>{title}</span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </StyledItem>
  );
});
const TaskList = () => {
  return (
    <StyledList>
      <TaskItem
        title="Tasks"
        to="/"
        match={true}
        Icon={() => <Rocket color="#212529" />}
      />
      <TaskItem
        title="Favorite"
        to="/?fav=TRUE"
        Icon={() => <StartOutline color="#212529" />}
      />
      <TaskItem
        title="Compeleted"
        to="/?status=COMPELETED"
        Icon={() => <Apps color="#212529" />}
      />
      <TaskItem
        title="Cancelled"
        to="/?status=CANCELLED"
        Icon={() => <Close color="#212529" />}
      />
    </StyledList>
  );
};
export default () => {
  return (
    <StyledSidebar>
      <User>
        <div className="pic">Im</div>
        <div className="name">
          <span>Islam Mostafa</span>
        </div>
      </User>
      <TaskList />
    </StyledSidebar>
  );
};
