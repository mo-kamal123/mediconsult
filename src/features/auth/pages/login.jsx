import auth_img from '../imgs/health-insurance-reuse 1.png';
import logo from '../../../app/assets/mediconsult_logo.png';
import khusm from '../../../app/assets/Khusm.png';
import AuthForm from '../components/auth-form';
import Input from '../../../shared/UI/input';
import { Link } from 'react-router-dom';
import Btn from '../../../shared/UI/Btn';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/auth-slice';

const Login = () => {
  const [credential, setCredential] = useState({ phone: '', password: '' });
  const dispatch = useDispatch()
  const handleChange = (name, value) => {
    setCredential({ ...credential, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!credential.phone || !credential.password) {
      alert('Please fill in all fields');
      return;
    }
    // Dispatch login action here
    dispatch(login())
  }

  return (
    <div className="flex flex-col items-center justify-between gap-20">
      <img src={logo} alt="logo-img" className="w-80" />
      <AuthForm
        type={'Login'}
        onSubmit={handleSubmit}
        description={'Enter your credential to access your account.'}
      >
        <Input type={'text'} name={'Phone'} onChange={(e) => handleChange('phone', e.target.value)}/>
        <Input type={'password'} name={'Password'} onChange={(e) => handleChange('password', e.target.value)}/>
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
