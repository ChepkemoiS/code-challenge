let studentMarks = 71;

function mymarks(studentMarks) {
  if (studentMarks >= 70 && studentMarks <= 100) {
    console.log('You got A'); // If student marks are between 70 and 100 (inclusive), output 'You got A'
  }
  else if (studentMarks >= 60 && studentMarks <= 69) {
    console.log('You got B'); // If student marks are between 60 and 69 (inclusive), output 'You got B'
  }
  else if (studentMarks >= 50 && studentMarks <= 59) {
    console.log('You got C'); // If student marks are between 50 and 59 (inclusive), output 'You got C'
  }
  else if (studentMarks >= 40 && studentMarks <= 49) {
    console.log('You got D'); // If student marks are between 40 and 49 (inclusive), output 'You got D'
  }
  else if (studentMarks >= 0 && studentMarks <= 39) {
    console.log('You got E'); // If student marks are between 0 and 39 (inclusive), output 'You got E'
  }
  else {
    console.log('OUT OF RANGE'); // If student marks are outside the range 0-100, output 'OUT OF RANGE'
  }
}

mymarks(studentMarks); // Call the function with the value of studentMarks