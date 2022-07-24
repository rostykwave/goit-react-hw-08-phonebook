import { AppBar, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';

export const HeaderContainer = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, mr: '10px' }}>
          PhoneBook
        </Typography>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};
