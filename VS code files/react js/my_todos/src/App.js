import Box from './com/Box.js';

 import './com/index_1.css';

function App() {
  return (
    <div className="container">
      <h1>My todos</h1>
      <Box title="Learn React" />
      <Box title="learn CSS" />
      <Box title="learn rest API" />
    </div>
  );
}

export default App;
