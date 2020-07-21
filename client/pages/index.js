// import styled from 'styled-components';
// const Button = styled.button`
//       padding:2rem;
//       background:lightgreen;
// `
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { CURRENT_USER } from "../components/User";
import Router from "next/router";
import LoadingPage from "../components/LoadingPage.js";
import Nav from "../components/Nav";
import Task from "../components/Task";
import Tasks from "../components/Tasks";
import ErrorMessage from "../components/Error.js";

export const GET_TASKS = gql`
  query getTasks($title: String, $status: STATUS, $favorites: Boolean) {
    tasks(
      orderBy: date_ASC
      where: { title_contains: $title, status: $status, favorites: $favorites }
    ) {
      title
      description
      status
      date
      id
      createdAt
    }
  }
`;
const RenderTasks = ({ keyword, status, fav }) => {
  let q = {};
  if (keyword) q.title = keyword;
  if (status && (status === "COMPELETED" || status === "CANCELLED"))
    q.status = status;
  if (fav) q.favorites = true;
  const { data, error, loading } = useQuery(GET_TASKS, {
    variables: { ...q, date: new Date().toISOString() },
  });
  if (error) return <ErrorMessage error={error} />;
  if (loading || !data || !data.tasks) return <h3>Loading</h3>;
  return <Tasks tasks={data.tasks} />;
};

const Home = ({ query }) => {
  console.log(query);
  const { data, error, loading } = useQuery(CURRENT_USER);
  if (!data || !data.user) {
    Router.replace("/login");
  }
  if (loading) return <LoadingPage loading={true} />;
  return (
    <div>
      <Nav />
      <RenderTasks
        status={query.status}
        keyword={query.keyword}
        fav={query.fav}
      />
    </div>
  );
};

export default Home;
