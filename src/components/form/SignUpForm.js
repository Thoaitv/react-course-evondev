import React from 'react';
import {useFormik} from "formik";
import * as yup from 'yup';

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 10) {
//     errors.firstName = "Phải < 10 ký tự";
//   }
//
//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 10) {
//     errors.lastName = "Phải < 10 ký tự";
//   }
//   return errors;
// }


const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    validationSchema: yup.object({
      firstName: yup.string()
          .max(10, "Must <10")
          .required("Required"),
      lastName: yup.string()
          .max(10, "> 10")
          .required("Required")
    }),
    
    onSubmit: values => {
      console.log("values", values)
    }
  })
  console.log("formik", formik)
  return (
      <form
          onSubmit={formik.handleSubmit}
          className="p-10 w-full max-w-[500px] mx-auto"
          autoComplete="off"
      >
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">Firstname</label>
          <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              className="p-4 rounded-md border border-gray-100"
              value={formik.values.firstName}
              onChange={formik.handleChange}
          />
          {formik.errors.firstName ? <div>
            <div className="text-sm text-red-500">
              {formik.errors.firstName}
            </div>
          </div> : null}
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="lastName">lastName</label>
          <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your first name"
              className="p-4 rounded-md border border-gray-100"
              value={formik.values.lastName}
              onChange={formik.handleChange}
          />
          {formik.errors.lastName ? <div>
            <div className="text-sm text-red-500">
              {formik.errors.lastName}
            </div>
          </div> : null}
        </div>

        <div>
          <button
              type="submit"
              className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
  );
};

export default SignUpForm;