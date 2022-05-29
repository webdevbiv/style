import logo from './logo.svg';
import './App.css';
import Link from './Link';
import Title from './Title';

function App() {
  return (
    <div className="App">
      <Title text='Cool Text!' />
      <Link
        url='https://www.ferzkopp.net/Personal/FunStuff/Pictures/any.jpg'
        label='any key'
      />
    </div>
  );
}

export default App;
