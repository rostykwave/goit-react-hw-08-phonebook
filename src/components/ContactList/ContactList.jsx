// import { DeleteBtn, Item, List } from './ContactList.styled';
import { IconButton, Divider, List, ListItem, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

export const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

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
          <IconButton onClick={() => onDeleteContact(id)}>
            <PersonRemoveIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};
