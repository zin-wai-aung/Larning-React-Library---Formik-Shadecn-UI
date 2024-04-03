import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const App = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid Email Format"),
    password: yup
      .string()
      .required("Password is required")
      .min(8,"must be at least 8 characters long")
    .matches(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      'Password must contain at least 1 uppercase letter, 1 special character, 1 number, and be at least 8 characters long'
    ),
  });

  const handleSubmit = (value) => {
    console.log(value);
  };

  return (
    <div className=" w-full h-screen mx-auto flex justify-center items-center">
      <Formik validationSchema={validationSchema} validateOnChange={false} validateOnBlur={false} initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <>
            <Form className=" flex flex-col w-[40%] space-y-4">
              <label htmlFor="email" className=" text-xl">
                Email
              </label>
              <Field
                className=" border-2  rounded py-2 px-5 "
                type="email"
                name="email"
                id="email"
              />
              <ErrorMessage
                className=" text-red-700"
                name="email"
                component="div"
              />

              <label htmlFor="password" className=" text-xl">
                {" "}
                Password{" "}
              </label>

              <Field
                className=" border-2  rounded py-2 px-5"
                type="password"
                name="password"
                id="password"
              />
              <ErrorMessage
                className=" text-red-700"
                name="password"
                component="div"
              />
              <button 
                type="submit"
                className=" bg-blue-500 text-white rounded py-2 px-5"
              >
                Submit
              </button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default App;
