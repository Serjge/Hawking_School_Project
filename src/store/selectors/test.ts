import { createSelector } from '@reduxjs/toolkit';

import { selectState } from 'store/index';

export const selectTestValue = createSelector(selectState, state => state.test.value);
