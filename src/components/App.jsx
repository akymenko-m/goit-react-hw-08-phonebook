import { Navigate, Route, Routes } from 'react-router-dom';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { Navigation } from 'components/Navigation/Navigation';
import LogInPage from 'pages/LogInPage/LogInPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/user/operations';
import { PublicRoute } from './PublicRout';
import { PrivateRoute } from './PrivetRoute';
import { selectIsRefreshing } from 'redux/user/selectors';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" component={<LogInPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
