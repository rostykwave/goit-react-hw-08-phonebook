import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(authOperations.logIn(values));
  };

  return (
    <div>
      <h1>Login Page!</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>
              <span>Email</span>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </label>
            <label>
              <span>Password</span>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </label>
            <button type="submit" disabled={isSubmitting}>
              Log in
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../redux/auth';

// const styles = {
//   form: {
//     width: 320,
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginBottom: 15,
//   },
// };

// const LoginPage = () => {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'email':
//         return setEmail(value);
//       case 'password':
//         return setPassword(value);
//       default:
//         return;
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     dispatch(authOperations.logIn({ email, password }));
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <div>
//       <h1>Login Page</h1>

//       <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
//         <label style={styles.label}>
//           Mail
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//           />
//         </label>

//         <label style={styles.label}>
//           Password
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={handleChange}
//           />
//         </label>

//         <button type="submit">Log in</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
