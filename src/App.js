import './index.scss';
import questions from './questions';
import Game from './Game';

function App() {
  return (
    <div className="App">

      <Game questions={questions} />
    </div>
  );
}

export default App;
