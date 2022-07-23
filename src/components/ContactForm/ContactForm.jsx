import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
// import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import * as yup from 'yup';
import { Container } from '@mui/system';

const validationSchema = yup.object({
  name: yup
    .string('Enter your name')

    .required('Name is required'),
  number: yup
    .string('Enter your number')
    .min(6, 'Number should be of minimum 8 characters length')
    .required('Number is required'),
});

export const ContactForm = ({ onAddContact }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(contactsOperations.addContact(values));
      resetForm();
      onAddContact();
    },
  });

  return (
    <Container sx={{ mt: '1em' }}>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <TextField
          variant="standard"
          sx={{ mb: '1.5em' }}
          fullWidth
          id="name"
          name="name"
          label="Name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          variant="standard"
          sx={{ mb: '1.5em' }}
          fullWidth
          id="number"
          name="number"
          label="Number"
          type="text"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Add contact
        </Button>
      </form>
    </Container>
  );
};
// import { Formik, ErrorMessage } from 'formik';
// import {
//   ErrorText,
//   StyledInput,
//   StyledForm,
//   FormField,
//   FormLabel,
//   SubmitBtn,
// } from './ContactForm.styled';
// import * as yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { contactsOperations } from 'redux/contacts';

// const FormError = ({ name }) => {
//   return (
//     <ErrorMessage
//       name={name}
//       render={message => <ErrorText>{message}</ErrorText>}
//     />
//   );
// };

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   number: yup.string().min(6).max(13).required(),
// });

// const initialValues = {
//   name: '',
//   number: '',
// };

// //main form
// export const ContactForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = (values, { resetForm }) => {
//     dispatch(contactsOperations.addContact(values));
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={schema}
//       onSubmit={handleSubmit}
//     >
//       <StyledForm autoComplete="off">
//         <FormField>
//           <FormLabel>Name</FormLabel>
//           <StyledInput
//             type="text"
//             name="name"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           />
//           <FormError name="name" />
//         </FormField>

//         <FormField>
//           <FormLabel>Phone number</FormLabel>
//           <StyledInput
//             type="tel"
//             name="number"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           />
//           <FormError name="number" />
//         </FormField>
//         <SubmitBtn type="submit">Add contact</SubmitBtn>
//       </StyledForm>
//     </Formik>
//   );
// };
