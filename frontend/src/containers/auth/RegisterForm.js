import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
const RegisterForm = () => {
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'register', key: name, value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      //TODO: error handle
      return;
    }
    dispatch(register({ username, password }));
  };

  //when the form is first rendered, initialize it
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('Error occurred');
      console.log('Auth Error');
      return;
    }
    if (auth) {
      console.log('success');
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      console.log('Check API success');
      console.log(user);
    }
  }, [user]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;
