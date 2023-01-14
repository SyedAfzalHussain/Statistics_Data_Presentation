
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

async function drawChart() {
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
    var data = google.visualization.arrayToDataTable([

        ['ClassLimits', 'Male'],
        ['M-3-16', greaterM3],
        ['M-17-32', greaterM17],
        ['M-33-44', greaterM31],
        ['M-45-59', greaterM45],
        ['M-59-73', greaterM59],
        ['M-73-87', greaterM73],
        ['M-87-100', greaterM87],
        ['F-3-16', greaterF3],
        ['F-17-32', greaterF17],
        ['F-33-44', greaterF17],
        ['F-45-59', greaterF45],
        ['F-59-73', greaterM59],
        ['F-73-87', greaterF73],
        ['F-87-100', greaterF87]

    ]);

    var options = {
        title: 'Male and Female Comparison PIE CHART Note(There are 24 Male and 11 Female Students)'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);

}
