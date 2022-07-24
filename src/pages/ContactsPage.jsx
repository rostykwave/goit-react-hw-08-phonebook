import { ContactListContainer } from 'components/ContactListContainer';
import { Filter } from 'components/Filter';
import { useEffect } from 'react';
import { contactsOperations } from 'redux/contacts';
import { useDispatch } from 'react-redux';
import { Container } from '@mui/system';
import { AddContact } from 'components/AddContact';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container maxWidth="sm">
      <Filter />
      <ContactListContainer />
      <AddContact />
    </Container>
  );
};

export default ContactsPage;
