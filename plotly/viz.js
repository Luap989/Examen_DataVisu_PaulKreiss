fetch('data.json') // visualiser des données sur un serveur local en utilisant http-server
    .then((response) => response.json())
    .then((data) => visualizePopulationData(data))

function visualizePopulationData(data) {
    sortCountriesByPopulation(data);

    let top30Countries = data.slice(0, 30);
    top30Countries = top30Countries.reverse();

    const countryNames = top30Countries.map(item => item.country);
    const countryPopulations = top30Countries.map(item => item.population);

    const trace = {
        x: countryNames,
        y: countryPopulations,
        type: 'bar',
        marker: {
            color: 'rgba(55, 128, 191, 0.7)',
            line: {
                color: 'rgba(55, 128, 191, 1.0)',
                width: 2
            }
        }
    };

    const layout = {
        title: 'Data distribution of countries population',
        xaxis: {
            title: 'Country',
            tickangle: -45,
            automargin: true
        },
        yaxis: {
            title: 'Population',
            automargin: true
        },
        margin: {
            l: 50,
            r: 50,
            t: 50,
            b: 150
        }
    };

    Plotly.newPlot('data-viz', [trace], layout);
}

function sortCountriesByPopulation(data) {
    data.sort((a, b) => b.population - a.population);
}
