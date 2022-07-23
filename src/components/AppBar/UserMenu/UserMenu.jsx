import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { Box } from 'styleConfig/Box';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Box display="flex">
      <div>Greetings, {name}!</div>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </Box>
  );
};
