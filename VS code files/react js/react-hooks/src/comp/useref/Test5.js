import { useRef, useState } from 'react';
import ShowUsage from '../ShowUsage';

const Test5 = () => {
  const USAGE_DATA = [
    'The useRef Hook allows you to persist values between renders.',
    ' It can be used to store a mutable value that does not cause a re-render when updated.',
    'It can be used to access a DOM element directly.',
  ];
  const [name, setName] = useState('');
  const renderCount = useRef(0);

  return (
    <div className="container">
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h3>my name is {name}</h3>
      <ShowUsage usages={USAGE_DATA} />
    </div>
  );
};

export default Test5;
