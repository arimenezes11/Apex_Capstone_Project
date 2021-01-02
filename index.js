function createData(startval) {    // returns array of x y coords in format [[x1,y1], [x2, y2], [x3, y3] ... ] starting at x=0
  var mydataset = []
  var i = 0
  while (i < 31) {
      var amt = Math.round(startval*Math.pow(1.136,i))
      mydataset[i] = [i, amt]
      i++
  }
  return mydataset
}

function makeChart(dataset) { // only used in the inital creation of global chart myChart with a blank dataset. Cannot be called again while myChart exists
  var options = {
      chart: {
          type:'line',
          toolbar : {
              show: false
          }
      },
      tooltip: {
          enabled : false,
          shared : false
      },
      series: [{
          name : 'Estimated Returns',
          data : dataset
      }],
      xaxis: {
          type : 'numeric',
          title : {
              text : 'Years Later',
              style: {
                  fontSize:  '14px',
                  fontWeight:  'bold',
                  fontFamily:  'Calibri',
                  color:  '#263238'
                  }
          }
      },
      yaxis: {
          title : {
              text : 'Estimated Returns (in $)',
              style: {
                  fontSize:  '14px',
                  fontWeight:  'bold',
                  fontFamily:  'Calibri',
                  color:  '#263238'
              }
          }
      }
    }
  var chart = new ApexCharts(document.querySelector("#chart"), options) // no clue how this works btw but it links to the chart div
  chart.render();
  return chart
} 

function userGivenChart() { // takes in the user input from customAmt textbox, runs createData to generate the xy points, updates the myChart dataset
  var newamt = document.getElementById("customAmt").value;
  var newdataset = createData(newamt)
  myChart.updateSeries([{
  name : 'Estimated Returns',
  data : newdataset
  }])
}

function histTenYearReturn() {
  var newamt = document.getElementById("customAmt").value;
  var histdataset = [[2011, newamt], [2021, (newamt * 2.94)]]
  var options = {
    chart: {
        type:'line',
        toolbar : {
            show: false
        }
    },
    tooltip: {
        enabled : false,
        shared : false
    },
    series: [{
        name : 'Historical Returns',
        data : dataset
    }],
    xaxis: {
        type : 'category',
        title : {
            text : 'Year',
            style: {
                fontSize:  '14px',
                fontWeight:  'bold',
                fontFamily:  'Calibri',
                color:  '#263238'
            }
        }
    },
    yaxis: {
        title : {
            text : 'Returns (in $)',
            style: {
                fontSize:  '14px',
                fontWeight:  'bold',
                fontFamily:  'Calibri',
                color:  '#263238'
            }
        }
    }
  }
  myChart.updateOptions(options)
}

var myChart = makeChart([]) // initializes a blank chart "myChart", global variable