import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from 'layout/SharedLayout';
import { PrivateRoutes } from 'components/PrivateRoutes';
import { PublicRoutes } from 'components/PublicRoutes';
import { lazy } from 'react';

const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(contactsOperations.fetchContacts());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="/contacts" />} />
        <Route element={<PublicRoutes />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

///Formik
//Material UI
//Authnav folder etc
//SharedComponent//done
