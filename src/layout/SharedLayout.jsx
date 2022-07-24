import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header } from 'components/Header/Header';
import { Container } from '@mui/material';

const SharedLayout = () => {
  return (
    <>
      <Header />

      <Container sx={{ mt: '80px' }}>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
