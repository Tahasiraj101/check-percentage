function Calculatepercent() {
    const mathTotal = parseFloat(document.getElementById('mathTotal').value);
    const mathObtained = parseFloat(document.getElementById('mathObtained').value);
    const physicsTotal = parseFloat(document.getElementById('physicsTotal').value);
    const physicsObtained = parseFloat(document.getElementById('physicsObtained').value);
    const chemistryTotal = parseFloat(document.getElementById('chemistryTotal').value);
    const chemistryObtained = parseFloat(document.getElementById('chemistryObtained').value);

    if (mathObtained > mathTotal || physicsObtained > physicsTotal || chemistryObtained > chemistryTotal) {
        alert("Obtained marks cannot be greater than total marks.");
        return;
    }

    const totalMarks = mathTotal + physicsTotal + chemistryTotal;
    const obtainedMarks = mathObtained + physicsObtained + chemistryObtained;

    const percentage = (obtainedMarks / totalMarks) * 100;
    let grade = '';

    if (percentage < 35) {
        grade = 'Fail';
    } else if (percentage < 40) {
        grade = 'E';
    } else if (percentage < 50) {
        grade = 'D';
    } else if (percentage < 60) {
        grade = 'C';
    } else if (percentage < 70) {
        grade = 'B';
    } else if (percentage < 80) {
        grade = 'A';
    } else if (percentage <= 100) {
        grade = 'A+';
    }

    document.getElementById('result').innerHTML = `Percentage: ${percentage.toFixed(2)}%<br>Grade: ${grade}`;
}
