google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawVisualization);

async function drawVisualization() {
    const res = await fetch('allData.json')
    const all = await res.json();
    arithematicMean=0;
    let greaterMid3 = 0;
    let greaterMid17 = 0;
    let greaterMid31 = 0;
    let greaterMid45 = 0;
    let greaterMid59 = 0;
    let greaterMid73 = 0;
    let greaterMid87 = 0;
    let sumX=0;
    for (let i = 0; i < all.Mids.length; i++) {
        sumX+= all.Mids[i]
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
    arithematicMean = sumX/all.Mids.length
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ['ClassLimits', 'Mids'],
        ['3-16', greaterMid3],
        ['17-32', greaterMid17],
        ['33-44', greaterMid31],
        ['45-59', greaterMid45],
        ['59-73', greaterMid59],
        ['73-87', greaterMid73],
        ['87-100', greaterMid87]    

  ]);
  document.getElementById('mids').innerHTML="Arithematic Mean of Mids is approximately : "+Math.round(arithematicMean/25*100)
  var options = {
    title: 'Simple Bar Chart',
    vAxis: { title: 'Frequency' },
    hAxis: { title: 'Marks' },
    seriesType: 'bars',
    series: { 7: { type: 'line' } }
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_divMids'));
  chart.draw(data, options);
}
