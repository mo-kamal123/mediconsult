import { Suspense } from 'react';
import Spinner from '../../shared/layout/spinner';

// HOC for lazy-loaded components - wraps with Suspense and shows spinner while loading
const withSuspense = (LazyComponent) => (
  <Suspense fallback={<Spinner />}>
    <LazyComponent />
  </Suspense>
);

export default withSuspense;
