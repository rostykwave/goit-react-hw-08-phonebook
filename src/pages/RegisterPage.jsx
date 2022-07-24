import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import * as yup from 'yup';
import { Container } from '@mui/system';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const RegisterPage = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      dispatch(authOperations.register(values));
    },
  });

  return (
    <Container
      sx={{
        mt: '1em',
        // maxWidth: '300px',
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          variant="standard"
          sx={{ mb: '1.5em' }}
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          variant="standard"
          sx={{ mb: '1.5em' }}
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          variant="standard"
          sx={{ mb: '1.5em' }}
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Log in
        </Button>
      </form>
    </Container>
  );
};
export default RegisterPage;

// const RegisterPage = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = (values, { setSubmitting }) => {
//     dispatch(authOperations.register(values));
//   };

//   return (
//     <div>
//       <h1>Login Page!</h1>
//       <Formik
//         initialValues={{ name: '', email: '', password: '' }}
//         validate={values => {
//           const errors = {};
//           if (!values.email) {
//             errors.email = 'Required';
//           } else if (
//             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//           ) {
//             errors.email = 'Invalid email address';
//           }
//           return errors;
//         }}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <label>
//               <span>Name</span>
//               <Field type="name" name="name" />
//               <ErrorMessage name="name" component="div" />
//             </label>
//             <label>
//               <span>Email</span>
//               <Field type="email" name="email" />
//               <ErrorMessage name="email" component="div" />
//             </label>
//             <label>
//               <span>Password</span>
//               <Field type="password" name="password" />
//               <ErrorMessage name="password" component="div" />
//             </label>
//             <button type="submit" disabled={isSubmitting}>
//               Log in
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default RegisterPage;
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

// const RegisterPage = () => {
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'name':
//         return setName(value);
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
//     dispatch(authOperations.register({ name, email, password }));
//     setName('');
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <div>
//       <h1>Registration Page</h1>

//       <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
//         <label style={styles.label}>
//           Name
//           <input type="text" name="name" value={name} onChange={handleChange} />
//         </label>

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

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default RegisterPage;
