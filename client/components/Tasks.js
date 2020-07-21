import styled from "styled-components";
import Task from "./Task.js";
import moment from "moment";

// moment.locale('yourlang', {
//     calendar: {
//         lastDay: function () {
//             return '[last]';
//         },
//         sameDay: function () {
//             return '[Today]';
//         }
//     }
// });
const StyledTask = styled.div`
  background: #fff;
  border-radius: 0.8rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 21px 21px 200px 0 rgba(0, 0, 0, 0.06);
`;
const CalanderStyled = styled.h2`
  background: ${(props) => props.theme.primary};
  border-radius: 0.8rem;
  padding: 1rem;
  color: #fff;
  display: inline-block;
  box-shadow: 21px 21px 200px 0 rgba(0, 0, 0, 0.06);
  font-size: 2rem;
  font-weight: 300;
  margin: 1rem 0;
`;
const calendar = (date) => {
  return moment(new Date(date)).calendar(null, {
    lastDay: "[Yesterday]",
    sameDay: "[Today]",
    nextDay: "[Tomorrow]",
    lastWeek: "[last] dddd",
    nextWeek: "dddd",
    sameElse: "L",
  });
};
const Tasks = ({ tasks }) => {
  let today;

  return (
    <div>
      {tasks.map((task) => {
        const newDate = calendar(new Date(task.date));
        let flag = false;
        if (today !== newDate) {
          today = newDate;
          flag = true;
        }
        return (
          <div>
            {flag && <CalanderStyled>{today}</CalanderStyled>}
            <Task
              key={task.id}
              title={task.title}
              status={task.status}
              id={task.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
