
// Calculate the student's result
function showResult(e) {
    e.preventDefault();

    var name = document.getElementById("name").value.trim();

    // Get marks as text first
    var englishText = document.getElementById("english").value;
    var urduText = document.getElementById("urdu").value;
    var mathText = document.getElementById("math").value;

    // Check empty fields
    if (name === "" || englishText === "" ||
        urduText === "" || mathText === "") {
        alert("Please fill all fields!");
        return;
    }

    // Convert marks into numbers
    var english = Number(englishText);
    var urdu = Number(urduText);
    var math = Number(mathText);

    // Check marks between 0 and 100
    var marks = [english, urdu, math];

    for (var i = 0; i < marks.length; i++) {
        if (marks[i] < 0 || marks[i] > 100 ||
            !Number.isInteger(marks[i])) {
            alert("Enter whole marks between 0 and 100!");
            return;
        }
    }

    // Calculate total and percentage
    var total = 300;
    var obtained = english + urdu + math;
    var percentage = (obtained / total) * 100;
    var grade;

    // Calculate grade
    if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Check pass or fail
    var status = "Pass";

    if (english < 40 || urdu < 40 || math < 40) {
        status = "Fail";
    }

    // Display the result
    document.getElementById("result").innerHTML = `
        <h2>Result Card</h2>
        <h3>${name}</h3>
        <p>Total Marks: ${total}</p>
        <p>Obtained Marks: ${obtained}</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
        <p>Grade: ${grade}</p>
        <p>Status: ${status}</p>
    `;
}
