google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawVisualization);

async function drawVisualization() {
    const res = await fetch('allData.json')
    const all = await res.json();
    arithematicMean=0;
    sumX=0;
    let greaterQ3 = 0;
    let greaterQ17 = 0;
    let greaterQ31 = 0;
    let greaterQ45 = 0;
    let greaterQ59 = 0;
    let greaterQ73 = 0;
    let greaterQ87 = 0;
    for (let i = 0; i < all.Quiz.length; i++) {
        sumX += all.Quiz[i]
        let Quiz = all.Quiz[i] / 15 * 100
        if (Quiz >= 87) {
            greaterQ87 += 1;

        }
        else if (Quiz >= 73) {
            greaterQ73 += 1;

        }
        else if (Quiz >= 59) {
            greaterQ59 += 1;

        }
        else if (Quiz >= 45) {
            greaterQ45 += 1;

        }

        else if (Quiz >= 31) {
            greaterQ31 += 1;

        }
        else if (Quiz >= 17) {
            greaterQ17 += 1;

        }
        else if (Quiz >= 3) {
            greaterQ3 += 1;
        }
    }
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        ['ClassLimits', "Quiz"],
        ['3-16', greaterQ3],
        ['17-32', greaterQ17],
        ['33-44', greaterQ31],
        ['45-59', greaterQ45],
        ['59-73', greaterQ59],
        ['73-87', greaterQ73],
        ['87-100', greaterQ87]

    ]);
    arithematicMean = sumX/all.Final.length
    document.getElementById('quiz').innerHTML = "Arithematic Mean of Quiz is approximately : " + Math.round(arithematicMean/15*100)

    var options = {
        title: 'Simple Bar Chart',
        vAxis: { title: 'Frequency' },
        hAxis: { title: 'Marks' },
        seriesType: 'bars',
        series: { 7: { type: 'line' } }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_divQuiz'));
    chart.draw(data, options);
}