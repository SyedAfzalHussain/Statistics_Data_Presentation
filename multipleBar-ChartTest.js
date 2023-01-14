google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawVisualization);

async function drawVisualization() {
    const res = await fetch('allData.json')
    const all = await res.json();
  
let greaterM3 = 0;
    let greaterM17 = 0;
    let greaterM31 = 0;
    let greaterM45 = 0;
    let greaterM59 = 0;
    let greaterM73 = 0;
    let greaterM87 = 0;
    let greaterF3 = 0;
    let greaterF17 = 0;
    let greaterF31 = 0;
    let greaterF45 = 0;
    let greaterF59 = 0;
    let greaterF73 = 0;
    let greaterF87 = 0;
for (let i = 0; i < all.Gender.length; i++) {

  if (all.Final[i] >= 87) {
        if (all.Gender[i] == 'M') {
            greaterM87 = greaterM87 + 1
        }
        else if (all.Gender[i] == 'F') {
            greaterF87 = greaterF87 + 1
        }
    }
    else if (all.Final[i] >= 73) {
        if (all.Gender[i] == 'M') {
            greaterM73 = greaterM73 + 1
        }
        else if (all.Gender[i] == 'F') {
            greaterF73 = greaterF73 + 1
        }
    }
    else if (all.Final[i] >= 59) {
        if (all.Gender[i] == 'M') {
            greaterM59 = greaterM59 + 1
        }
        else if (all.Gender[i] == 'F') {
            greaterF59 = greaterF59 + 1
        }
    }
    else if (all.Final[i] >= 45) {
        if (all.Gender[i] == 'M') {
            greaterM45 = greaterM45 + 1
        }
        else if (all.Gender[i] == 'F') {
            greaterF45 = greaterF45 + 1
        }
    }

    else if (all.Final[i] >= 31) {
        if (all.Gender[i] == 'M') {
            greaterM31 = greaterM31 + 1
        }
        else if (all.Gender[i] == 'F') {
            greaterF31 = greaterF31 + 1
        }
    }
    else if (all.Final[i] >= 17) {
        if (all.Gender[i] == 'M') {
            greaterM17 = greaterM17 + 1
        }
        else if (all.Gender[i] == 'F') {
            greaterF17 = greaterF17 + 1
        }
    }
    else if (all.Final[i] >= 3) {
        if (all.Gender[i] == 'M') {
            greaterM3 = greaterM3 + 1
        }
        else if (all.Gender[i] == 'F') {
            greaterF3 = greaterF3 + 1
        }
    }
}
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ['ClassLimits', 'Male','Female'],
        ['3-16', greaterM3,greaterF3],
        ['17-32', greaterM17,greaterF17],
        ['33-44', greaterM31,greaterF17],
        ['45-59', greaterM45,greaterF45],
        ['59-73', greaterM59,greaterM59],
        ['73-87', greaterM73,greaterF73],
        ['87-100', greaterM87,greaterF87]    

  ]);

  var options = {
    title: 'Comparison between Boys and Girls Marks',
    vAxis: { title: 'Frequency' },
    hAxis: { title: 'Marks' },
    seriesType: 'bars',
    series: { 7: { type: 'line' } }
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div3'));
  chart.draw(data, options);
}