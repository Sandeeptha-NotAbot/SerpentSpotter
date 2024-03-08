// Author: Bella Singh
// Email: bellas23@iastate.edu
// Date: 3/2/2024

fetch("./data.json")
    .then(response => response.json())
    .then(mySnakes => loadSnakes(mySnakes));

function loadSnakes(mySnakes) {
    var mainContainer = document.getElementById("name");
    console.log(mySnakes)

    for (let i = 0; i < mySnakes.snakes.length; i++) {
        let name = mySnakes.snakes[i].name;
        let summary = mySnakes.snakes[i].summary;
        let url = mySnakes.snakes[i].url;
        let features = mySnakes.snakes[i].features;
        
        //console.log(name);

        // Construct the HTML document
        let division = document.createElement("div");

        let featuresHTML = "<h4>Features:</h4><ul>";

        // Iterate through each feature
        for (const [feature, values] of Object.entries(features)) {
            featuresHTML += `<li><strong>${feature}:</strong><ul>`;

            // Check if values is an array
            if (Array.isArray(values)) {
                // Iterate through each element of the feature if it's an array
                for (let j = 0; j < values.length; j++) {
                    let value = values[j];
                    featuresHTML += `<li><input type="checkbox" id="${feature}_${value}_${i}_${j}" class="feature-checkbox" checked>
                        <label for="${feature}_${value}_${i}_${j}">${value}</label></li>`;
                }
            } else {
                // Handle the case where values is a string
                featuresHTML += `<li><input type="checkbox" id="${feature}_${values}_${i}" class="feature-checkbox" checked>
                    <label for="${feature}_${values}_${i}">${values}</label></li>`;
            }

            featuresHTML += `</ul></li>`;
        }

        featuresHTML += "</ul>";

        division.innerHTML = `
        <h3>${name}</h3>
        ${summary}<br>
        ${featuresHTML}
        <img src = ${url} class="square-image" <br> <br>
        `;
        mainContainer.appendChild(division);
    }
}