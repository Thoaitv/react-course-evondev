import React, { useEffect } from 'react';
import { Controller, useController, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
// using react-hook-form

const schemaValidation = Yup.object({
  firstName: Yup.string()
    .required('Please enter your first name')
    .max(10, 'Must be 10 characters or less'),
});

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
    watch,
    reset,
    resetField,
    setFocus,
    setValue,
    control,
  } = useForm({
    resolver: yupResolver(schemaValidation),
    // mode: 'onChange',
  });
  // console.log('SignUpFormHook ~ isValid', isValid);

  const watchShowAge = watch('age', false);

  const onSubmit = async (values) => {
    // const response = await axios.get(
    //   'https://hn.algolia.com/api/v1/search?query=demo'
    // );
    // console.log('onSubmit ~ response', response);
    // return response.data;
    console.log('as');
    if (isValid) {
      console.log('send data to backend');

      reset({
        firstName: '',
        lastName: '',
        email: '',
      });
    }
  };

  const handleSetDemoData = () => {
    setValue('firstName', 'TV');
    setValue('lastName', 'Thoai');
    setValue('email', 'thoai@gmail');
  };

  useEffect(() => {
    setFocus('firstName');
  }, [setFocus]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off">
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100"
          {...register('firstName')}
        />
        {errors?.firstName && (
          <div className="text-red-500 text-sm">
            {errors.firstName?.message}
          </div>
        )}
        {/* {errors?.firstName?.type === "maxLength" && (
          <div className="text-red-500 text-sm">
            Must be 10 characters or less
          </div>
        )} */}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
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
      <div className="gap-2 mb-5">
        <input type="checkbox" name="" id="" {...register('age')} />
        {watchShowAge && <input type="number" placeholder="Enter age" />}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg">
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            'Submit'
          )}
        </button>
      </div>
      <div>
        <button
          type="button"
          className="p-3 bg-green-400 text-white"
          onClick={handleSetDemoData}>
          Demo data
        </button>
      </div>
    </form>
  );
};

export default SignUpFormHook;

// bai 142
