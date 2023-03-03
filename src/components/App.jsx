import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { refreshUser } from 'redux/user/operations';
import { PublicRoute } from './PublicRout';
import { PrivateRoute } from './PrivetRoute';
import { selectIsRefreshing } from 'redux/user/selectors';
import { Loader } from './Loader/Loader';

const LogInPage = lazy(() => import('pages/LogInPage/LogInPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
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
      </Suspense>
    </div>
  );
};
