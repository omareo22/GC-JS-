const submissions = [
    {name: 'Jane', score: 95, date:'2020-01-24', passed: true},
    {name: 'Joe', score: 77, date:'2018-05-14', passed: true},
    {name: 'Jack', score: 59, date:'2019-07-05', passed: false},
    {name: 'Jill', score: 88, date:'2020-04-22', passed: false},
];

function findSubmissionByName (array,name){
    for (let item of array){
        if (item.name ===name){
            return item;
        }
    }
    return 'Item not Found';
}

// add a submission to the array
function addSubmission (array,newName,newScore,newDate){
    let addObject ={};
    addObject.name = newName;
    addObject.score = newScore;
    addObject.date = newDate;
    addObject.passed = (newScore >= 60) ? true : false;
    array.push (addObject);
}

//delete a submission
function deleteSubmissionByIndex (array,index){
    array.splice (index,1);
}

//delete by name
function deleteSubmissionByName(array, name) {
    const findName = array.findIndex(name);
    if (findName === name) {
        array.splice()
    }
}

function findSubmissionByName(array, name) {
    return array.find((item) => item.name === name)
}

//lowest score
let lowest = [submissions[0]];
function findLowestScore (array){
    for (let i=1; i <=submissions.length; i++){
        if (submissions[i]< lowest) {
            lowest = submissions [i];
        }   
    }
    return lowest
}


//avg score
function findAverageScore (array) {    
    let totalScore = 0;
    let totalStudents = 0;
    for (const iterator of array) {
        totalScore = totalScore + iterator.score;
        totalStudents = totalStudents + 1;
    }

    return (totalScore / totalStudents);
}

function findLowestScore(){
    for (let i = 0; i <= submissions.length; i++)
        if(submissions.score === Math.min)
        return score;
}


console.log (findLowestScore(submissions))


