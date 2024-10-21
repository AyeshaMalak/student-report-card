function generateReportCard() {
    const studentName = document.getElementById('studentName').value;
    const englishGrade = parseInt(document.getElementById('englishGrade').value);
    const urduGrade = parseInt(document.getElementById('urduGrade').value);
    const physicsGrade = parseInt(document.getElementById('physicsGrade').value);
    const computerGrade = parseInt(document.getElementById('computerGrade').value);
    const mathGrade = parseInt(document.getElementById('mathGrade').value);

    // Create a student object
    const student = {
        name: studentName,
        subjects: {
            English: englishGrade,
            Urdu: urduGrade,
            Physics: physicsGrade,
            Computer: computerGrade,
            Math: mathGrade,
        },
        calculateAverage: function() {
            const total = this.subjects.English + this.subjects.Urdu + this.subjects.Physics + this.subjects.Computer + this.subjects.Math;
            return (total / 5).toFixed(2);
        },
        getGrade: function() {
            const average = this.calculateAverage();
            if (average >= 90) return 'A+';
            else if (average >= 80) return 'A';
            else if (average >= 70) return 'B';
            else if (average >= 60) return 'C';
            else if (average >= 50) return 'D';
            else return 'F';
        },
    };

    // Display report card
    const reportCard = document.getElementById('reportCard');
    reportCard.innerHTML = `
        <h2>Report Card for ${student.name}</h2>
        <p>English: ${student.subjects.English}</p>
        <p>Urdu: ${student.subjects.Urdu}</p>
        <p>Physics: ${student.subjects.Physics}</p>
        <p>Computer: ${student.subjects.Computer}</p>
        <p>Math: ${student.subjects.Math}</p>
        <p>Average: ${student.calculateAverage()}</p>
        <p>Grade: ${student.getGrade()}</p>
    `;
    reportCard.style.display = 'block';
}
