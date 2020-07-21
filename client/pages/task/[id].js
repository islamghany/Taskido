import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import CheckAuth from "../../components/CheckAuth";
import LoadingPage from "../../components/LoadingPage";
import ErrorMessage from "../../components/Error";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Trash, Edit } from "../../assets/icon.js";
import { AddButton } from "../../components/Nav";
import Modal from "../../components/Modal";
import { useState } from "react";
import { Input, Textarea, DatePicker, DataSelect } from "../../components/Form";
import { useForm } from "react-hook-form";
import Router from "next/router";
import cogoToast from "cogo-toast";
import { GET_TASKS } from "../index.js";
import { H1 } from "../../components/typo.js";

const GET_TASK = gql`
  query getTask($id: ID!) {
    task(where: { id: $id }) {
      title
      description
      status
      favorites
      date
      subject
    }
  }
`;
const DELETE_TASK = gql`
  mutation deleteTask($id: ID!) {
    deleteTask(id: $id) {
      title
    }
  }
`;

const StyledItem = styled.div`
  background: #fff;
  box-shadow: 21px 21px 200px 0 rgba(0, 0, 0, 0.06);
  padding: 1rem 1rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
  .name {
    color: ${(props) => props.theme.primary};
    font-size: 3rem !important;
    padding: 1rem;
    text-transform: capitalize;
    margin-right: 1rem;
    .optional {
      font-size: 1.4rem;
      color: ${(props) => props.theme.danger};
    }
  }
`;

export const TaskForm = ({ task, type, onSendSubmit, defaultValue }) => {
  const [startDate, setStartDate] = useState(
    type === "add" ? new Date() : new Date(task.date)
  );
  const [status, setStatus] = useState({
    value: "NOT_STARTED",
    label: "Not Started",
  });
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    //console.log(d,new Date(startDate).toISOString(),status);
    if (type === "add") {
      onSendSubmit({
        ...data,
        date: startDate.toISOString(),
      });
    } else {
      onSendSubmit({
        ...data,
        date: startDate.toISOString(),
        status: status.value,
      });
    }
  };
  const checkErrors = (type) => {
    if (type === "title" && errors && errors.title) {
      if (
        errors.title.type === "required" ||
        errors.title.type === "validate"
      ) {
        return "Title is required";
      }
      if (errors.title.type === "maxLength") {
        return "Title is too long, Title must be at max 50 characters";
      }
    }
    if (type === "description" && errors && errors.description) {
      if (errors.description.type === "minLength") {
        return "description is too short, description must be at least 6 characters";
      }
      if (errors.description.type === "maxLength") {
        return "description is too long, description must be at max 244 characters";
      }
    }
    if (type === "subject" && errors && errors.subject) {
      if (errors.subject.subject === "maxLength") {
        return "subject is too long, subject must be at max 50 characters";
      }
    }
    return null;
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {type === "add" && <H1>Add Task</H1>}
        <StyledItem>
          <div className="name">title</div>
          <Input
            name="title"
            register={register({
              required: true,
              maxLength: 50,
              validate: (value) => value.trim().length > 0,
            })}
            defaultValue={type === "add" ? null : task.title}
            error={checkErrors("title")}
          />
        </StyledItem>
        <StyledItem>
          <div className="name">Task date</div>
          <DatePicker
            onChange={(time) => setStartDate(time)}
            defaultValue={startDate}
          />
        </StyledItem>
        {type !== "add" && (
          <StyledItem>
            <div className="name">status</div>
            <DataSelect
              value={
                task.status === "NOT_STARTED"
                  ? 0
                  : task.status === "COMPELETED"
                  ? 1
                  : 2
              }
              onChange={(chane) => setStatus(chane)}
            />
          </StyledItem>
        )}
        <StyledItem>
          <div className="name">
            Subject <span className="optional">(Optional)</span>
          </div>
          <Input
            name="subject"
            register={register({
              maxLength: 50,
            })}
            error={checkErrors("subject")}
            defaultValue={type === "add" ? null : task.subject}
          />
        </StyledItem>
        <StyledItem>
          <div className="name">
            description <span className="optional">(Optional)</span>
          </div>
          <Textarea
            name="description"
            register={register({
              minLength: 6,
              maxLength: 244,
            })}
            error={checkErrors("description")}
            defaultValue={type === "add" ? null : task.description}
          />
        </StyledItem>
        <Button className="contained block my-2" type="primary">
          Save
        </Button>
      </form>
    </div>
  );
};
const RemoveTask = ({ id }) => {
  const [deleteTask, { data, error, loading }] = useMutation(DELETE_TASK, {
    refetchQueries: [{ query: GET_TASKS }],
  });
  const onConfirm = (closeModal) => {
    deleteTask({ variables: { id } });
    closeModal();
  };
  if (data && data.deleteTask && data.deleteTask.title) {
    // make toaster;
    cogoToast.success("Task removed Successfuly");
    Router.replace("/");
  }

  return (
    <div className="flex-end">
      <LoadingPage loading={loading} />
      <Modal type="bolar" onConfirm={onConfirm}>
        <Button className="contained mb-2" type="danger">
          <Trash color={"#fff"} />
          <span>Delete</span>
        </Button>
      </Modal>
    </div>
  );
};

const UPDATE_TASK = gql`
  mutation updateTask(
    $id: ID!
    $title: String!
    $description: String!
    $status: String
    $date: String!
    $subject: String
  ) {
    updateTask(
      id: $id
      title: $title
      date: $date
      status: $status
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
const ShowTask = ({ query }) => {
  const { data, error, loading } = useQuery(GET_TASK, {
    variables: { id: query.id },
  });
  const [
    updateTask,
    { data: queryData, error: queryError, loading: queryLoading },
  ] = useMutation(UPDATE_TASK, { refetchQueries: [{ query: GET_TASKS }] });
  const onSubmit = (data) => {
    updateTask({ variables: { ...data, id: query.id } });
  };
  if (queryData && queryData.updateTask && queryData.updateTask.title) {
    cogoToast.success("Task Updated Successfuly");
    Router.replace("/");
  }
  return (
    <CheckAuth to="login">
      <LoadingPage loading={loading || queryLoading} />
      <ErrorMessage error={error || queryError} />
      {data && data.task && (
        <div>
          <RemoveTask id={query.id} />
          <div>
            <TaskForm task={data.task} type="update" onSendSubmit={onSubmit} />
          </div>
        </div>
      )}
    </CheckAuth>
  );
};
export default ShowTask;
