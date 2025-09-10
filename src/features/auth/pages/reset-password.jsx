import auth_img from '../imgs/health-insurance-reuse 1.png';
import logo from '../../../app/assets/mediconsult_logo.png';
import khusm from '../../../app/assets/Khusm.png';
import AuthForm from '../components/auth-form';
import Input from '../../../shared/UI/input';
import Btn from '../../../shared/UI/Btn';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-20">
      <img src={logo} alt="logo-img" className="w-80" />
      <AuthForm
        type={'Reset Password'}
        description={'Enter your new password.'}
      >
        <Input type={'password'} name={'Password'} />
        <Link to={'/'}>
          <Btn>Submit</Btn>
        </Link>
      </AuthForm>
    </div>
  );
};

export default ResetPassword;
