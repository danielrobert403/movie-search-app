document.addEventListener("DOMContentLoaded", function () {
    // Sample movie data, replace with your own data
    const movies = [
        { title: "Fast and Furious", genre: "Action", downloadLink: "http://netnaija.com/Fast and Furious" },
        { title: "Jumanji", genre: "Adventure", downloadLink: "http://Nkiri.com/Jumanji" },
        { title: "Pele", genre: "Documentary", downloadLink: "http://Nkiri.com/Pele" },
        { title: "A tribe called Judah", genre: "Family", downloadLink: "http://Nkiri.com/A tribe called judah" },
        { title: "After Earth", genre: "Sci-Fi", downloadLink: "http://netnaija.com/After Earth" },
        // Add more movie entries as needed
    ];

    const tbody = document.querySelector("#movieTable tbody");

    // Populate the table with movie data
    movies.forEach(movie => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td><a href="${movie.downloadLink}" target="_blank">Download</a></td>
        `;
        tbody.appendChild(row);
    });
});
