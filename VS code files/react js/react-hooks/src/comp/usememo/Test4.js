import { useEffect, useMemo, useState } from 'react';
import ShowUsage from '../ShowUsage';

const Test4 = () => {
  const USAGE_DATA = [
    'when using slow functions',
    'referencial equality problem',
  ];
  const para = `The React useMemo Hook returns a memoized value.

  Think of memoization as caching a value so that it does not need to be recalculated.
  
  The useMemo Hook only runs when one of its dependencies update.
  
  This can improve performance.
  
  The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. You can learn more about useCallback in the useCallback chapter.
  `;
  const [number, setNumber] = useState(0);
  const [dark, isDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunc(number);
  }, [number]);

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    };
  }, [dark]);

  //above example to demonstrate that even though we don't change theme style while changing the number it will course themestyle to reUpdate its value.this is due to even though when checking with use effect its checking  Themestyle first one and theme style updated address which are different.so it will course  console.log('>>>Theme changed'); to print.
  //this is mainly due to in javascript objects and arrays are not real but references..primitives are only map to real values
  //this problem is called referential equality

  useEffect(() => {
    console.log('>>>Theme changed');
  }, [themeStyle]);

  function slowFunc() {
    for (let i = 0; i < 1000000300; i++) {}
    return number * 2;
  }

  return (
    <div className="container">
      <h4>use Memo</h4>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />

      <button
        onClick={() => {
          isDark((preDark) => !preDark);
        }}
      >
        change theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>

      <ShowUsage usages={USAGE_DATA} para={para} />
    </div>
  );
};

export default Test4;
