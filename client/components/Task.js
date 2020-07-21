import styled from "styled-components";
import { StartOutline, RightArrow } from "../assets/icon.js";
import { Button } from "./Button";
import Link from "next/link";
const StyledTask = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 21px 21px 200px 0 rgba(0, 0, 0, 0.06);
  display: flex;
  margin-bottom: 1.5rem;
  justify-content: space-between;
  align-items: center;

  p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex: 0 1 calc((100% / 4) - 1.6rem);
    margin: 0 0.8rem;
    text-transform: capitalize;
  }
  .COMPELETED {
    color: ${(props) => props.theme.success};
  }
  .CANCELLED {
    color: ${(props) => props.theme.danger};
  }
`;
const Task = ({ id, title, subject, status }) => {
  return (
    <StyledTask>
      <p>{title}</p>
      <p className={status}>
        {status === "NOT_STARTED" ? "Not Started" : status}
      </p>
      <p>
        <Button className="link svg" type="primary">
          <StartOutline color="#201A43" />
        </Button>
      </p>
      <p>
        <Link href={`/task/[id]`} as={`/task/${id}`}>
          <a>
            <Button className="link mx-1 svg" type="primary">
              <RightArrow color="#201A43" />
            </Button>
          </a>
        </Link>
      </p>
    </StyledTask>
  );
};

export default Task;
