// import { DeleteBtn, Item, List } from './ContactList.styled';
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

export const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));
  const onEditContact = id => {
    console.log('edit');
    // dispatch(contactsOperations.deleteContact(id))
  };

  return (
    <List>
      <Divider />
      {contacts.map(({ id, name, number }) => (
        <ListItem
          key={id}
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Typography variant="h5">
            {name}: {number}
          </Typography>
          <Box>
            <IconButton onClick={() => onEditContact(id)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => onDeleteContact(id)}>
              <PersonRemoveIcon />
            </IconButton>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};
