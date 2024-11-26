// import "./App.css";

// function App() {
//   let score1 = 0;
//   return (
//     <div className="App">
//       <button
//         onClick={() => {
//           let a = 148 + 46 + 50 + 123;
//           console.log(a);
//           alert(a);
//         }}
//       >
//         Arithmetic Operators
//       </button>
//       <button
//         onClick={() => {
//           let score2 = 0;
//           score1++;
//           score2++;
//           console.log(score2);
//           console.log(score1);
//         }}
//       >
//         Increment
//       </button>
//       <button
//         onClick={() => {
//           score1--;
//           console.log(score1);
//         }}
//       >
//         Decrement
//       </button>
//       <button
//         onClick={() => {
//           let a = 10 % 4;
//           let b = 15 % 3;
//           let c = 10 / 4;
//           console.log(a);
//           console.log(b);
//           console.log(c);
//         }}
//       >
//         Modulus
//       </button>
//       <button
//         onClick={() => {
//           let a = 2 + 4 * 10;
//           let b = (2 + 4) * 10;
//           console.log(a);
//           console.log(b);
//         }}
//       >
//         Operator Precedence (BODMAS)
//       </button>
//       <button
//         onClick={() => {
//           let a = 10;
//           console.log(a);
//           a += 2;
//           console.log(a);
//           a -= 2;
//           console.log(a);
//           a /= 5;
//           console.log(a);
//           a *= 3;
//           console.log(a);
//           a %= 5;
//           console.log(a);
//         }}
//       >
//         Assignment Operators
//       </button>
//       <button
//         onClick={() => {
//           let engMarks = 62;
//           console.log(engMarks >= 35);
//           console.log(engMarks <= 35);
//           console.log(engMarks == 61);
//           console.log(engMarks != 100);
//           console.log(engMarks > 41);
//           console.log(engMarks < 63);
//         }}
//       >
//         Comparision Operators
//       </button>
//       <button
//         onClick={() => {
//           let engMarks = 99;
//           engMarks = 0;
//           if (engMarks <= 35) {
//             console.log("Student Failed in English");
//           } else {
//             console.log("Student Passed in English");
//           }
//         }}
//       >
//         if else
//       </button>
//     </div>
//   );
// }

// export default App;

import "./App.css";

function App() {
  let score1 = 0;

  return (
    <div className="App">
      <header className="header">
        <h1>Stock Market Simulator</h1>
        <p>Learn JavaScript concepts with a financial twist!</p>
      </header>
      <main className="content">
        {/* Arithmetic Section */}
        <section className="section">
          <h2 className="subHead">Arithmetic Operations</h2>
          <button
            className="btn btn-blue button"
            onClick={() => {
              let a = 148 + 46 + 50 + 123;
              console.log(`Total: ${a}`);
              alert(`Total: ${a}`);
            }}
          >
            Calculate Total (Arithmetic)
          </button>
        </section>

        {/* Increment/Decrement Section */}
        <section className="section">
          <h2 className="subHead">Score Tracker</h2>
          <button
            className="btn btn-green button"
            onClick={() => {
              let score2 = 0;
              score1++;
              score2++;
              console.log(`Score1: ${score1}, Score2: ${score2}`);
            }}
          >
            Increment Score
          </button>
          <button
            className="btn btn-red button"
            onClick={() => {
              score1--;
              console.log(`Score1: ${score1}`);
            }}
          >
            Decrement Score
          </button>
        </section>

        {/* Modulus and BODMAS Section */}
        <section className="section">
          <h2 className="subHead">Mathematical Operations</h2>
          <button
            className="btn btn-blue button"
            onClick={() => {
              let a = 10 % 4;
              let b = 15 % 3;
              let c = 10 / 4;
              console.log(`Modulus Results: ${a}, ${b}, ${c}`);
            }}
          >
            Modulus
          </button>
          <button
            className="btn btn-blue button"
            onClick={() => {
              let a = 2 + 4 * 10;
              let b = (2 + 4) * 10;
              console.log(`Without brackets: ${a}, With brackets: ${b}`);
            }}
          >
            Operator Precedence (BODMAS)
          </button>
        </section>

        {/* Assignment Operators */}
        <section className="section">
          <h2 className="subHead">Assignment Operations</h2>
          <button
            className="btn btn-blue button"
            onClick={() => {
              let a = 10;
              console.log(`Initial Value: ${a}`);
              a += 2;
              console.log(`After +=2: ${a}`);
              a -= 2;
              console.log(`After -=2: ${a}`);
              a /= 5;
              console.log(`After /=5: ${a}`);
              a *= 3;
              console.log(`After *=3: ${a}`);
              a %= 5;
              console.log(`After %=5: ${a}`);
            }}
          >
            Assignment Operators
          </button>
        </section>

        {/* Comparison Section */}
        <section className="section">
          <h2 className="subHead">Comparison Operators</h2>
          <button
            className="btn btn-blue button"
            onClick={() => {
              let engMarks = 62;
              console.log(`Marks >= 35: ${engMarks >= 35}`);
              console.log(`Marks <= 35: ${engMarks <= 35}`);
              console.log(`Marks == 61: ${engMarks == 61}`);
              console.log(`Marks != 100: ${engMarks != 100}`);
              console.log(`Marks > 41: ${engMarks > 41}`);
              console.log(`Marks < 63: ${engMarks < 63}`);
            }}
          >
            Compare Marks
          </button>
        </section>

        {/* If-Else Section */}
        <section className="section">
          <h2 className="subHead">Pass/Fail Checker</h2>
          <button
            className="btn btn-blue button"
            onClick={() => {
              let engMarks = 99;
              engMarks = 0;
              if (engMarks <= 35) {
                console.log("Student Failed in English");
              } else {
                console.log("Student Passed in English");
              }
            }}
          >
            Check Pass/Fail
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
