import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../components/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
