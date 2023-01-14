
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

async function drawChart() {
    const res = await fetch('allData.json')
    const all = await res.json();

    let greaterQ3 = 0;
    let greaterQ17 = 0;
    let greaterQ31 = 0;
    let greaterQ45 = 0;
    let greaterQ59 = 0;
    let greaterQ73 = 0;
    let greaterQ87 = 0;

    let greaterA3 = 0;
    let greaterA17 = 0;
    let greaterA31 = 0;
    let greaterA45 = 0;
    let greaterA59 = 0;
    let greaterA73 = 0;
    let greaterA87 = 0;

    let greaterMid3 = 0;
    let greaterMid17 = 0;
    let greaterMid31 = 0;
    let greaterMid45 = 0;
    let greaterMid59 = 0;
    let greaterMid73 = 0;
    let greaterMid87 = 0;
//This is for Quiz Chart ...
    for (let i = 0; i < all.Quiz.length; i++) {
        let Quiz = all.Quiz[i]/15*100
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
//This is for assignments chart ...
    for (let i = 0; i < all.Assignments.length; i++) {
        let Assignment = all.Assignments[i]/10*100
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
//This data is for Mids ...
for (let i = 0; i < all.Mids.length; i++) {
    let Mids = all.Mids[i]/25*100
    if (Mids >= 87) {
        greaterMid87 += 1;
        
    }
    else if (Mids >= 73) {
        greaterMid73 += 1;
        
    }
    else if (Mids >= 59) {
        greaterMid59 += 1;
        
    }
    else if (Mids >= 45) {
        greaterMid45 += 1;
        
    }

    else if (Mids >= 31) {
        greaterMid31 += 1;
        
    }
    else if (Mids >= 17) {
        greaterMid17 += 1;
        
    }
    else if (Mids >= 3) {
        greaterMid3 += 1;
    }
}
//This data is for Finals ...
    for (let i = 0; i < all.Final.length; i++) {
        Final = all.Final[i]/100*100
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
    var data = google.visualization.arrayToDataTable([
        ['ClassLimits', 'Quiz', "Assignment" , "Mids" , "Final"],
        ['3-16', greaterQ3 , greaterA3, greaterMid3, greaterQFinal3],
        ['17-32', greaterQ17 , greaterA17, greaterMid17, greaterQFinal17],
        ['33-44', greaterQ31 , greaterA31, greaterMid31, greaterQFinal31],
        ['45-59', greaterQ45 , greaterA45, greaterMid45, greaterQFinal45],
        ['59-73', greaterQ59, greaterA59, greaterMid59, greaterQFinal59],
        ['73-87', greaterQ73 , greaterA73, greaterMid73, greaterQFinal73],
        ['87-100', greaterQ87 , greaterA87 , greaterMid87 , greaterQFinal87]

    ]);

    var options = {
        title: 'The Frequency curve of the whole class',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chartSingleForAll'));

    chart.draw(data, options);
}

