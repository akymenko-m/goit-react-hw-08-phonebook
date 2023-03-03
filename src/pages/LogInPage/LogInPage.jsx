import { useDispatch, useSelector } from 'react-redux';
import { logInUser } from 'redux/user/operations';
import { LogInForm } from 'components/LogInForm/LogInForm';
import { Loader } from 'components/Loader/Loader';
import { selectIsLoading } from 'redux/user/selectors';

const LogInPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleRegister = formData => {
    dispatch(logInUser(formData));
  };

  return (
    <div>
      {isLoading && <Loader />}
      <LogInForm onSubmit={handleRegister} />
    </div>
  );
};

export default LogInPage;
