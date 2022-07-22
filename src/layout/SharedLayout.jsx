import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from 'components/Container';
import { AppBar } from 'components/AppBar';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />

      <Container>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
