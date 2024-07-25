document.addEventListener("DOMContentLoaded", function() {
    fetchScores();

    const quizButton = document.getElementById("quizButton");
    quizButton.addEventListener("click", function() {
        window.location.href = "http://127.0.0.1:5500/web/quiz.html";
    });
});

function fetchScores() {
    fetch('http://localhost:8000/scores')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector("#scoreTable tbody");
            tableBody.innerHTML = "";

            data.forEach((user, index) => {
                const row = document.createElement("tr");

                const rankCell = document.createElement("td");
                rankCell.textContent = index + 1;
                row.appendChild(rankCell);

                const usernameCell = document.createElement("td");
                usernameCell.textContent = user.username;
                row.appendChild(usernameCell);

                const scoreCell = document.createElement("td");
                scoreCell.textContent = user.score;
                row.appendChild(scoreCell);

                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching scores:', error));
}