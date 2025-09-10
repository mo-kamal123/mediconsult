import auth_img from '../imgs/health-insurance-reuse 1.png';
import logo from '../../../app/assets/mediconsult_logo.png';
import khusm from '../../../app/assets/Khusm.png';
import AuthForm from '../components/auth-form';
import Input from '../../../shared/UI/input';
import Btn from '../../../shared/UI/Btn';
import { Link } from 'react-router-dom';
const Verify = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-20">
      <img src={logo} alt="logo-img" className="w-80" />
      <AuthForm
        type={'OTP'}
        description={'Enter we send OTP to your phone number check your SMS.'}
      >
        <Input type={'text'} name={'Code'} />
        <Link to={'/auth/reset-password'}>
          <Btn>Submit</Btn>
        </Link>
      </AuthForm>
    </div>
  );
};

export default Verify;
