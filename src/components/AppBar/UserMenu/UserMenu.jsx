import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <>
      <div>Greetings, {name}!</div>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </>
  );
};
