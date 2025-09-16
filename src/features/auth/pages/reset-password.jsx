import auth_img from '../imgs/health-insurance-reuse 1.png';
import logo from '../../../app/assets/mediconsult_logo.png';
import khusm from '../../../app/assets/Khusm.png';
import AuthForm from '../components/auth-form';
import Input from '../../../shared/UI/input';
import Btn from '../../../shared/UI/Btn';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/auth-slice';

const ResetPassword = () => {
  const [password, setPassword] = useState({
    password: '',
    passwordConfirmation: '',
  });
  const dispatch = useDispatch();
  const handleChange = (name, value) => {
    setPassword((password) => ({ ...password, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password.password || !password.passwordConfirmation) {
      alert('Please enter your phone number');
      return;
    } else if (password.password !== password.passwordConfirmation) {
      alert('Password do not match');
    } else {
      dispatch(login());
    }
  };
  return (
    <div className="flex flex-col items-center justify-between gap-20">
      <img src={logo} alt="logo-img" className="w-80" />
      <AuthForm
        onSubmit={handleSubmit}
        type={'Reset Password'}
        description={'Enter your new password.'}
      >
        <Input
          type={'password'}
          name={'Password'}
          onChange={(e) => handleChange('password', e.target.value)}
        />
        <Input
          type={'password'}
          name={'Password confirmation'}
          onChange={(e) => handleChange('passwordConfirmation', e.target.value)}
        />
        <Btn>Submit</Btn>
      </AuthForm>
    </div>
  );
};

export default ResetPassword;
