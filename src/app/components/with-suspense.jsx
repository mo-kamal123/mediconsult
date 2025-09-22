import { Suspense } from 'react';
import Spinner from '../../shared/layout/spinner';

const withSuspense = (LazyComponent) => (
  <Suspense fallback={<Spinner />}>
    <LazyComponent />
  </Suspense>
);

export default withSuspense;
