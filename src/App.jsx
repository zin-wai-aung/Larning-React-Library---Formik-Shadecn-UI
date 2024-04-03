import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const App = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (value) => {
    console.log(value);
  };
  return (
    <div className=" w-full h-screen mx-auto flex justify-center items-center">
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }

          return errors;
        }}
        onSubmit={handleSubmit}
      >
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
