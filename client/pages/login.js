import {
  Form,
  Input,
  FormOr,
  ForgetPassword,
  StyledLink,
} from "../components/Form";
import { H1 } from "../components/typo";
import { Button, SocialButton } from "../components/Button";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Router from "next/router";
import { CURRENT_USER } from "../components/User.js";
import ErrorMessage from "../components/Error.js";
import LoadingPage from "../components/LoadingPage.js";

const SIGN_IN = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;
const LoginForm = () => {
  const [signin, { data, error, loading }] = useMutation(SIGN_IN, {
    refetchQueries: [{ query: CURRENT_USER }],
  });

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = ({ email, password }) => {
    signin({ variables: { email, password } });
  };
  const checkErrors = (type) => {
    if (type === "email" && errors && errors.email) {
      if (errors.email.type === "required") {
        return "Email is required";
      }
      if (errors.email.type === "pattern") {
        return "Invalid Email";
      }
    }
    if (type === "password" && errors && errors.password) {
      if (errors.password.type === "required") {
        return "Password is required";
      }
      if (errors.password.type === "minLength") {
        return "Password is too short, password must be at least 6 characters";
      }
      if (errors.password.type === "maxLength") {
        return "Password is too long, password must be at max 32 characters";
      }
    }
    return null;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ErrorMessage error={error} />
      <LoadingPage loading={loading} />
      <Input
        label="Email"
        name={"email"}
        register={register({
          required: true,
          pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        })}
        placeholder="Enter your email"
        error={checkErrors("email")}
      />
      <Input
        label="Password"
        name={"password"}
        register={register({ required: true, minLength: 6, maxLength: 32 })}
        type="password"
        error={checkErrors("password")}
      />
      <Button loading={loading} className="contained block mt-2" type="primary">
        Login
      </Button>
    </form>
  );
};

const Login = () => {
  const { data, error, loading } = useQuery(CURRENT_USER);
  if (data.user) {
    Router.replace("/");
  } else if ((!data || !data.user) && !loading)
    return (
      <div className="mt-2">
        <H1 className="m-0 text-center">Login</H1>
        <Form>
          <div className="container">
            <ForgetPassword>
              <StyledLink href="/forgot-password">Forget Password?</StyledLink>
            </ForgetPassword>
            <LoginForm />
            <FormOr />
            <div className="flex-center">
              <SocialButton fill="#1877f2" className="mr-2">
                <svg viewBox="126.445 2.281 589 589">
                  <circle cx={420.945} cy={296.781} r={294.5} fill="#1877f2" />
                  <path
                    d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"
                    fill="#fff"
                  />
                </svg>
              </SocialButton>
              <SocialButton fill="#fff">
                <svg viewBox="0 0 256 262" preserveAspectRatio="xMidYMid">
                  <path
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    fill="#4285F4"
                  />
                  <path
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    fill="#34A853"
                  />
                  <path
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    fill="#FBBC05"
                  />
                  <path
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    fill="#EB4335"
                  />
                </svg>
              </SocialButton>
            </div>
          </div>
        </Form>
        <div className="flex-center py-1">
          <p className="mr-1">New to taskido?</p>
          <StyledLink href="/signup">Sign up</StyledLink>
        </div>
      </div>
    );
  return null;
};
export default Login;
