import { Suspense } from 'react';
import Spinner from '../../shared/layout/spinner';

/**
 * Higher-Order Component (HOC) for lazy-loaded components
 * Wraps lazy-loaded components with Suspense boundary
 * Shows loading spinner while component is being loaded
 *
 * @param {React.Component} LazyComponent - Lazy-loaded component to wrap
 * @returns {JSX.Element} Component wrapped with Suspense and fallback spinner
 */
const withSuspense = (LazyComponent) => (
  <Suspense fallback={<Spinner />}>
    <LazyComponent />
  </Suspense>
);

export default withSuspense;
