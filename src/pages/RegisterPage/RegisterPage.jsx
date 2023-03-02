import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'redux/user/operations';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { selectIsLoading } from 'redux/user/selectors';
import { Loader } from 'components/Loader/Loader';

const RegisterPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleRegister = formData => {
    console.log(formData);
    dispatch(registerUser(formData));
  };

  return (
    <div>
      {isLoading && <Loader />}
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;
