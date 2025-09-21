import auth_img from '../imgs/health-insurance-reuse 1.png';
import logo from '../../../app/assets/mediconsult_logo.png';
import khusm from '../../../app/assets/Khusm.png';
import AuthForm from '../components/auth-form';
import Input from '../../../shared/UI/input';
import Btn from '../../../shared/UI/Btn';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ForgetPassword = () => {
  const [phone, setPhone] = useState(''); // phone number to send OTP
  const navigate = useNavigate();

  // handle input change
  const handleChange = (value) => {
    setPhone(value);
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // simple validation
    if (!phone) {
      alert('Please enter your phone number');
      return;
    } else {
      navigate('/auth/verify');
    }
  };
  return (
    <div className="flex flex-col items-center justify-between gap-20">
      <img src={logo} alt="logo-img" className="w-80" />
      <AuthForm
        onSubmit={handleSubmit}
        type={'Forget Password'}
        description={'Enter your phone to send OTP.'}
      >
        <Input
          type={'text'}
          name={'Phone'}
          onChange={(e) => handleChange(e.target.value)}
        />
        <Btn>Submit</Btn>
      </AuthForm>
    </div>
  );
};

export default ForgetPassword;
