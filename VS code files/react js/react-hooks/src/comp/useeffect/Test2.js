import { useState, useEffect } from 'react';

const Test2 = () => {
  const [type, setType] = useState('posts');
  const [items, setItems] = useState([]);
  console.log('render');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
    console.log('resourse type changed'); //every time type state rerender the application this will execute
  }, [type]);

  return (
    <div className="container">
      <h3>use effect</h3>
      <button className="btn" onClick={() => setType('posts')}>
        posts
      </button>
      <button className="btn" onClick={() => setType('users')}>
        users
      </button>
      <button className="btn" onClick={() => setType('comments')}>
        comments
      </button>

      <h1>{type}</h1>
      <div>
        {items.map((item) => {
          return <pre>{JSON.stringify(item)}</pre>;
        })}
      </div>

    </div>
  );
};

export default Test2;
