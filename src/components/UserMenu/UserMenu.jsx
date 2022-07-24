import { Box, IconButton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: '180px',
      }}
    >
      <Typography variant="body1">
        Greetings, <Typography variant="user"> {name}</Typography>!
      </Typography>

      <IconButton
        onClick={() => dispatch(authOperations.logOut())}
        sx={{ color: 'inherit' }}
      >
        <LogoutIcon />
      </IconButton>
    </Box>
  );
};
