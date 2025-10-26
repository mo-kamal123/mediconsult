import logo from '../../../app/assets/mediconsult_logo.png';
import AuthForm from '../components/auth-form';
import Input from '../../../shared/UI/input';
import { Link } from 'react-router-dom';
import Btn from '../../../shared/UI/Btn';
import { useDispatch } from 'react-redux';
import { loggedin } from '../store/auth-slice';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../validation/auth-validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLogin } from '../hooks/useLogin';

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
      phoneNumber: '',
      password: '',
      // rememberMe: false,
    },
  }); // form validation

  // handle form submit
  const onSubmit = (data) => {
    login(data);
  };

  // login mutation success callback
  const onSuccess = () => {
    dispatch(loggedin());
  };
  const { mutate: login, isPending } = useLogin(onSuccess); // login mutation hook
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
          label={'Phone'}
          {...register('phoneNumber')}
          error={errors.phoneNumber?.message}
        />
        <Input
          type={'password'}
          label={'Password'}
          {...register('password')}
          error={errors.password?.message}
        />
        <div className="flex justify-between">
          <div className="flex gap-1">
            <input
              id="rememberCheck"
              type="checkbox"
              // {...register('rememberMe', { valueAsBoolean: true })}
            />
            <label htmlFor="rememberCheck">Remember me</label>
          </div>
          <Link to={'forget-password'} className="text-[#2F80ED]">
            Forget Password?
          </Link>
        </div>
        <Btn
          disabled={isPending}
          className={`flex items-center justify-center gap-2 w-full px-7 py-3 
    ${isPending ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1F4ED6] hover:bg-blue-800'}`}
        >
          {isPending ? 'Loading...' : 'Submit'}
        </Btn>
      </AuthForm>
    </div>
  );
};

export default Login;

// 01012438070
// Basma@123

// 01272696568
// Medi@2020
