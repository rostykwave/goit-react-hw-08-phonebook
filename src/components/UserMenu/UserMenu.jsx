import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Box sx={{ display: 'flex' }}>
      <Typography variant="h6">Greetings, {name}!</Typography>
      <Button
        variant="contained"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
      {/* <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button> */}
    </Box>
  );
};
