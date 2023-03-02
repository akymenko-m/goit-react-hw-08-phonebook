import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/user/selectors';

/** - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  //   console.log('isLoggedIn', isLoggedIn);
  //   console.log('isRefreshing', isRefreshing);
  //   console.log('shouldRedirect', shouldRedirect);

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
