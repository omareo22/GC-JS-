const submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];

// add a submission to the array
function addSubmission(array, name, score, date) {
  array.push({
    name,
    score,
    date,
    passed: newScore >= 60,
  });
}

//delete a submission
function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}

//delete by name
function deleteSubmissionByName(array, name) {
  const index = array.findIndex((submission) => submission.name === name);
  array.splice(index, 1);
}

function findSubmissionByName(array, name) {
  return array.find((submission) => submission.name === name);
}

function editSubmission(array, index, score) {
  array[index].score = score;
  array[index].passed = score >= 60;
}

function findLowestScore(array) {
  let lowest = array[0];
  array.forEach((submission) => {
    if (submission.score < lowest.score) {
      lowest = submission;
    }
  });
  return lowest;
}

function findAverageScore (array){
    let total = 0;
    for (let submission of array){
       total = total + submission.score
    }
    return total / array.length
}

function filterPassing (array){
    return array.filter (submission => submission.passed === true)
}

function filter90AndAbove (array){
    return array.filter (submission => submission.score >=90)
}


