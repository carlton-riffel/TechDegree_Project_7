
var ctx = document.getElementById("lineChart").getContext('2d');
var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: '1st & 2nd Quarter Monthly Visitors',
            data: [1600, 2100, 1400, 1600, 2300, 2000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      layout: {

      },
      legend: {
    	display: false
    },
      responsive:true,
      maintainAspectRatio: false,
      elements: {
        line: {
            tension: 0
        }
    },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


//////////////////Bar chart
var ctx = document.getElementById("barChart").getContext('2d');
var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F","S"],
        datasets: [{
            label: 'Daily Traffic',
            data: [300, 120, 150, 115, 100, 250,180],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      layout: {

      },
      legend: {
    	display: false
    },
      responsive:true,
      maintainAspectRatio: false,
      elements: {
        line: {
            tension: 0
        }
    },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
///////////// donut chart
var ctx = document.getElementById("doghnutChart").getContext('2d');
var doghnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [25, 40, 75],
            backgroundColor: ["tomato", "pink", "lightblue"],
            borderWidth: 0
        }],
        labels: ["Phones", "Tablets", "Desktop"],
    },
    options: {
        legend:{position:"right",
        display: true,
        labels: {
                padding:30,
            }
      },
      maintainAspectRatio: false,
      responsive: true,
        }
    });
