google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawVisualization);

async function drawVisualization() {
    const res = await fetch('allData.json')
    const all = await res.json();
    arithematicMean = 0;
    sumX = 0;
    let greaterA3 = 0;
    let greaterA17 = 0;
    let greaterA31 = 0;
    let greaterA45 = 0;
    let greaterA59 = 0;
    let greaterA73 = 0;
    let greaterA87 = 0;

    for (let i = 0; i < all.Assignments.length; i++) {
        sumX += all.Assignment[i]
        let Assignment = all.Assignments[i] / 10 * 100
        if (Assignment >= 87) {
            greaterA87 += 1;

        }
        else if (Assignment >= 73) {
            greaterA73 += 1;

        }
        else if (Assignment >= 59) {
            greaterA59 += 1;

        }
        else if (Assignment >= 45) {
            greaterA45 += 1;

        }

        else if (Assignment >= 31) {
            greaterA31 += 1;

        }
        else if (Assignment >= 17) {
            greaterA17 += 1;

        }
        else if (Assignment >= 3) {
            greaterA3 += 1;
        }
    }

    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        ['ClassLimits', "Assignment"],
        ['3-16', greaterA3],
        ['17-32', greaterA17],
        ['33-44', greaterA31],
        ['45-59', greaterA45],
        ['59-73', greaterA59],
        ['73-87', greaterA73],
        ['87-100', greaterA87]
    ]);
    arithematicMean = sumX / all.Assignment.length
    document.getElementById('assignment1').innerHTML = "Arithematic Mean of Assignment is approximately : " + Math.round(arithematicMean/10*100)
    console.log("first Mean is : "+arithematicMean)
    var options = {
        title: 'Assignment Bar Chart',
        vAxis: { title: 'Frequency' },
        hAxis: { title: 'Marks' },
        seriesType: 'bars',
        series: { 7: { type: 'line' } }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_divAssignment'));
    chart.draw(data, options);
}