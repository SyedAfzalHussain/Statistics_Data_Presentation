google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawVisualization);

async function drawVisualization() {
    const res = await fetch('allData.json')
    const all = await res.json();
    arithematicMean = 0;
    let sumX = 0;
    let greaterQFinal3 = 0;
    let greaterQFinal17 = 0;
    let greaterQFinal31 = 0;
    let greaterQFinal45 = 0;
    let greaterQFinal59 = 0;
    let greaterQFinal73 = 0;
    let greaterQFinal87 = 0;

    for (let i = 0; i < all.Final.length; i++) {
        sumX += all.Final[i]
        Final = all.Final[i]
        if (Final >= 87) {
            greaterQFinal87 += 1;

        }
        else if (Final >= 73) {
            greaterQFinal73 += 1;

        }
        else if (Final >= 59) {
            greaterQFinal59 += 1;

        }
        else if (Final >= 45) {
            greaterQFinal45 += 1;

        }

        else if (Final >= 31) {
            greaterQFinal31 += 1;

        }
        else if (Final >= 17) {
            greaterQFinal17 += 1;

        }
        else if (Final >= 3) {
            greaterQFinal3 += 1;
        }
    }
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        ['ClassLimits', "Final"],
        ['3-16', greaterQFinal3],
        ['17-32', greaterQFinal17],
        ['33-44', greaterQFinal31],
        ['45-59', greaterQFinal45],
        ['59-73', greaterQFinal59],
        ['73-87', greaterQFinal73],
        ['87-100', greaterQFinal87]


    ]);
    arithematicMean = sumX/all.Final.length
    document.getElementById('final').innerHTML = "Arithematic Mean of Final is approximately : " + Math.round(arithematicMean)

    var options = {
        title: 'Final Marks Bar Chart',
        vAxis: { title: 'Frequency' },
        hAxis: { title: 'Marks' },
        seriesType: 'bars',
        series: { 7: { type: 'line' } }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_divFinal'));
    chart.draw(data, options);
}