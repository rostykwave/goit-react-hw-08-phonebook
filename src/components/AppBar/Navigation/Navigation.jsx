import { StyledLink } from 'components/AppBar/AppBar.styled';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>{isLoggedIn && <StyledLink to="/contacts">Phonebook</StyledLink>}</nav>
  );
};
