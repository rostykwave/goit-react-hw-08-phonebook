// import { useSelector } from 'react-redux';
// import Navigation from 'components/AppBar/Navigation/Navigation';
// import UserMenu from 'components/AppBar/UserMenu/UserMenu';
// import AuthNav from 'components/AppBar/AuthNav/AuthNav';
// import { authSelectors } from 'redux/auth';

// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottom: '1px solid #2A363B',
//   },
// };

// export const AppBar = () => {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   return (
//     <header style={styles.header}>
//       <Navigation />
//       {isLoggedIn ? <UserMenu /> : <AuthNav />}
//     </header>
//   );
// };
import { Box } from 'styleConfig/Box';
import { Container } from 'components/Container';
import { Header } from './AppBar.styled';
import { UserMenu } from 'components/AppBar/UserMenu';
import { Navigation } from './Navigation';
import { AuthNav } from './AuthNav';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Box boxShadow="header">
      <Container>
        <Header>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
      </Container>
    </Box>
  );
};
