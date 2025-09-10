import auth_img from '../imgs/health-insurance-reuse 1.png';
import logo from '../../../app/assets/mediconsult_logo.png';
import khusm from '../../../app/assets/Khusm.png';
import AuthForm from '../components/auth-form';
import Input from '../../../shared/UI/input';
import { Link } from 'react-router-dom';
import Btn from '../../../shared/UI/Btn';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-20">
      <img src={logo} alt="logo-img" className="w-80" />
      <AuthForm
        type={'Login'}
        description={'Enter your credential to access your account.'}
      >
        <Input type={'text'} name={'Phone'} />
        <Input type={'password'} name={'Password'} />
        <div className="flex justify-between">
          <div className="flex gap-1">
            <input type="checkbox" name="remember me" />
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
