import { css } from '@emotion/css'
import logo from './logo.svg';
import './App.css';
import Link from './Link';
import Title from './Title';
import { Row } from './Row';

function App() {
  return (
    <div className="App">
      <Row direction='vertical'>
        <div className={css`
        color: red;
        margin-left: 20px;
        `}>Test</div>
        <Title text='Cool Text!' />
      </Row>
      <Link
        url='https://www.ferzkopp.net/Personal/FunStuff/Pictures/any.jpg'
        label='any key'
      />
    </div >
  );
}

export default App;
