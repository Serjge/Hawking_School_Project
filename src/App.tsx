import React, { ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { selectTestValue } from 'store/selectors/test';
import { changeValue } from 'store/slices/test';

const App = (): ReactElement => {
  const dispatch = useDispatch();
  const value = useSelector(selectTestValue);

  const onChangeValueClick = (): void => {
    dispatch(changeValue('World'));
  };

  return (
    <div>
      <header>
        SDAEM
        {value}
        <button type="button" onClick={onChangeValueClick}>
          World{' '}
        </button>
      </header>
    </div>
  );
};

export default App;
