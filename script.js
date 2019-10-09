var subject = ["HTML", 11, "JavaScript", 2, "CSS", 23, 12];
var subject1 = subject.push("-5");
subject.unshift("1000");
var subject1 = subject.push("Last array element");
var subject2 = subject.splice(3, 1);
function filter(subject) {
  return typeof subject === "number";
}

console.log(subject.length);
console.log(subject);
