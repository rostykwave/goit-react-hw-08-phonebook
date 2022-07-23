import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <Button>
        <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>
          Register
        </Link>
      </Button>
      <Button>
        <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
          Login
        </Link>
      </Button>
    </div>
  );
};
