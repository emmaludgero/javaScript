const steps = ["one", "two", "three"];

const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join();

const letters = ['B', 'A', 'A'];
function gpaPoints(grade){
    if (grade === "A"){
        gpa = 4
    };
    if (grade === "B"){
        gpa = 3
    };
    return gpa
}
const lettersHtml = letters.map(function (letter){
    result = gpaPoints(letter);
    return `<li>${result}</li>`;
});

document.getElementById("myGrades").innerHTML = lettersHtml.join();