import { useState, useEffect } from 'react';
import ShowUsage from '../ShowUsage';
import Button from '@mui/material/Button';
const Test3 = () => {
  const USAGE_DATA = [
    'The useEffect Hook allows you to perform side effects in your components.',
    'Some examples of side effects are: fetching data, directly updating the DOM, and timers.',
    'useEffect accepts two arguments. The second argument is optional.',
  ];
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };
  console.log('inside func');
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      // window.removeEventListener('resize', setwindowWidth)
      console.log('return in use effects');
    };
  }, []);
  return (
    <div className="container">
      <h4>useEffect 2</h4>
      {windowWidth}

      <p>
        <a href="https://blog.webdevsimplified.com/2020-04/use-effect/">
          visit to learn more on......
        </a>
        <br /> Cleaning Up Side Effects
      </p>
      <ShowUsage usages={USAGE_DATA} />
    </div>
  );
};

export default Test3;
