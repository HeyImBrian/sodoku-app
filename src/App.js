import logo from './logo.svg';
import './App.css';

// TODO: Add highscore leaderboard based on time to solve. 

function App() {
  var sodokuMatrixRows = [[], [], [], [], [], [], [], [], []];

  function getRandNum(min, max) {
    let randNum = Math.floor(Math.random() * (max + 1 - min)) + min;


    return randNum;
  }




    // Each row
    for(let j = 0; j < 9; j++){
      let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];


      // Each index
      for(let k = 1; k < 10; k++){

        let randNum = getRandNum(0, k);
        
        sodokuMatrixRows[j].splice(randNum, 0, k);

        console.log("ROW :   " + j);
        console.log("Numlist =   " + numList);
        console.log(sodokuMatrixRows[j]);
        console.log("")
      }
    }

  console.log(sodokuMatrixRows);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {sodokuMatrixRows[0]}<br/>
          {sodokuMatrixRows[1]}<br/>
          {sodokuMatrixRows[2]}<br/>
          {sodokuMatrixRows[3]}<br/>
          {sodokuMatrixRows[4]}<br/>
          {sodokuMatrixRows[5]}<br/>
          {sodokuMatrixRows[6]}<br/>
          {sodokuMatrixRows[7]}<br/>
          {sodokuMatrixRows[8]}<br/>

        </p>
      </header>
    </div>
  );
}

export default App;
