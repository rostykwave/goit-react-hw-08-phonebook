import {
  IconButton,
  Divider,
  List,
  ListItem,
  Typography,
  Box,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { EditContactModal } from 'components/EditContactModal';

export const ContactList = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [editPerson, setEditPerson] = useState({
    id: '',
    name: '',
    number: '',
  });
  const handleCloseEdit = () => setIsEdit(false);

  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));
  const onEditContact = person => {
    console.log('edit');
    setIsEdit(true);
    setEditPerson(person);
  };

  return (
    <List>
      <Divider />
      {contacts.length > 0 ? (
        contacts.map(({ id, name, number }) => (
          <ListItem
            key={id}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Typography variant="h5">
              {name}: {number}
            </Typography>
            <Box>
              <IconButton onClick={() => onEditContact({ id, name, number })}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => onDeleteContact(id)}>
                <PersonRemoveIcon />
              </IconButton>
            </Box>
          </ListItem>
        ))
      ) : (
        <Typography variant="h5">PhoneBook is empty</Typography>
      )}
      <EditContactModal
        open={isEdit}
        onClose={handleCloseEdit}
        editPerson={editPerson}
      />
    </List>
  );
};
