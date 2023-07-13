/**
 *
 * WithLoadable
 *
 */

import React, { lazy } from 'react';
import { LazyLoadFailure } from './LazyLoadFailure';

function withLoadable<Props = object>(
  factory: Parameters<typeof lazy>[0]
): React.LazyExoticComponent<React.ComponentType<Props>> {
  return lazy(async () => {
    try {
      return await factory();
    } catch (e) {
      console.error('Failed to fetch loadable component. See error below');
      console.error(e);
      return {
        default: LazyLoadFailure,
      };
    }
  });
}

export default withLoadable;
