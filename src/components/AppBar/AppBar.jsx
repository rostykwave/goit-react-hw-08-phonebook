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
import { Header, StyledLink } from './AppBar.styled';
import { UserMenu } from 'components/UserMenu';

export const AppBar = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    // <header style={styles.header}>
    //   <Navigation />
    //   {isLoggedIn ? <UserMenu /> : <AuthNav />}
    // </header>
    <Box boxShadow="header">
      <Container>
        <Header>
          <nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/contacts">Phonebook</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
          </nav>
          <UserMenu />
        </Header>
      </Container>
    </Box>
  );
};
