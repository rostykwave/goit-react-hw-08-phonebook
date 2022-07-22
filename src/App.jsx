// import { contactsOperations } from 'redux/contacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
import { ContactsPage } from 'pages/ContactsPage';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { Routes, Route } from 'react-router-dom';
// import { AppBar } from 'components/AppBar/AppBar';
import { SharedLayout } from 'layout';
import { PrivateRoutes } from 'components/PrivateRoutes';
import { PublicRoutes } from 'components/PublicRoutes';

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
        <Route index element={<HomePage />} />
        <Route element={<PublicRoutes />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        {/* <PrivateRoute path="/contacts" element={<ContactsPage />} /> */}
      </Route>
    </Routes>
    // <Container>
    //   <h1>PhoneBook</h1>
    //   <ContactForm />
    //   <h1>Contacts</h1>
    //   <Filter />
    //   <ContactList />
    // </Container>
  );
};

///Formik
//Material UI
//Authnav folder etc
//SharedComponent//done
