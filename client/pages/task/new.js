import styled from "styled-components";
import { TaskForm } from "./[id].js";
import CheckAuth from "../../components/CheckAuth";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import Router from "next/router";
import cogoToast from "cogo-toast";
import LoadingPage from "../../components/LoadingPage";
import ErrorMessage from "../../components/Error";
import { GET_TASKS } from "../index.js";

const CREATE_TASK = gql`
  mutation createTask(
    $title: String!
    $description: String!
    $date: String!
    $subject: String
  ) {
    createTask(
      title: $title
      date: $date
      subject: $subject
      description: $description
    ) {
      title
      id
      description
      date
    }
  }
`;
const NewTask = () => {
  const [createTask, { data, error, loading }] = useMutation(CREATE_TASK, {
    refetchQueries: [{ query: GET_TASKS }],
  });
  const onSubmit = (data) => {
    //console.log({...data});
    createTask({ variables: { ...data } });
  };
  if (data && data.createTask && data.createTask.title) {
    cogoToast.success("Task created Successfuly");
    Router.replace("/");
  }
  return (
    <CheckAuth to="login">
      <LoadingPage loading={loading} />
      <ErrorMessage error={error} />
      <div>
        <TaskForm type="add" onSendSubmit={onSubmit} />
      </div>
    </CheckAuth>
  );
};
export default NewTask;
