import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTestValue } from 'store/selectors/test';
import { changeValue } from 'store/slices/test';

function App() {

  const dispatch = useDispatch();
  const value = useSelector(selectTestValue);

  const onChangeValueClick = () => {
    dispatch(changeValue( 'World'))
  }

  return (
    <div >
      <header>
        SDAEM
        {value}
        <button onClick={onChangeValueClick}>World </button>
      </header>
    </div>
  );
}

export default App;
