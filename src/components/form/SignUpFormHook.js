import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ yupResolver: yupResolver(schema) });
  // errors = formState.errors
  const onSubmit = (values) => {
    console.log(values);
  };
  console.log('formState', errors);

  const schema = yupResolver.object({
    firstName: yup.string().required().maxLength(10),
  });

  return (
    <form
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100"
          {...register('firstName', {
            required: true,
            maxLength: 10,
          })}
        />
        {errors?.firstName?.type === 'required' && (
          <div className="text-red-500">required</div>
        )}
        {errors?.firstName?.type === 'maxLength' && (
          <div className="text-red-500">maxLength</div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100"
          {...register('lastName')}
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">Email address</label>
        <input
          type="text"
          id="email"
          placeholder="Enter your email"
          className="p-4 rounded-md border border-gray-100"
          {...register('email')}
        />
      </div>
      <div className="flex flex-col gap-2 mb-5"></div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpFormHook;
