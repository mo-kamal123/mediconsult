import logo from '../../../app/assets/mediconsult_logo.png';
import AuthForm from '../components/auth-form';
import Input from '../../../shared/UI/input';
import { Link } from 'react-router-dom';
import Btn from '../../../shared/UI/Btn';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/auth-slice';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../validation/auth-validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

const Login = () => {
  const dispatch = useDispatch();

  // react hook form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phone: '',
      password: '',
      rememberMe: false,
    },
  }); // form validation

  // handle form submit
  // handle form submit
  const onSubmit = (data) => {
    console.log('Form data:', data);

    // dispatch redux login
    dispatch(login(data));

    // ✅ success toast
    toast.success('Login successful!', {
      description: 'Welcome back 👋',
    });
  };
  return (
    <div className="flex flex-col items-center justify-between gap-20">
      <img src={logo} alt="logo-img" className="w-80" />
      <AuthForm
        type={'Login'}
        onSubmit={handleSubmit(onSubmit)}
        description={'Enter your credential to access your account.'}
      >
        <Input
          type={'text'}
          {...register('phone')}
          error={errors.phone?.message}
        />
        <Input
          type={'password'}
          {...register('password')}
          error={errors.password?.message}
        />
        <div className="flex justify-between">
          <div className="flex gap-1">
            <input
              type="checkbox"
              {...register('rememberMe', { valueAsBoolean: true })}
            />
            <p>Remember me</p>
          </div>
          <Link to={'forget-password'} className="text-[#2F80ED]">
            Forget Password?
          </Link>
        </div>
        <Btn>Submit</Btn>
      </AuthForm>
    </div>
  );
};

export default Login;
