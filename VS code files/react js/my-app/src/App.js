import './App.css';
import Post from './post';

const styles={color:"green"};

const App = () => {
  return (
    <div className="App">
      <h1 style={styles}>my second react app</h1>
      <Post/>
    </div>
  );
};

export default App;
