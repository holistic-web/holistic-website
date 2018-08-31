$('#IranEquity').ready(function () {
    var ctx = document.getElementById("IranEquity");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Iran", "MSCI Em Frontier", "MSCI Emerging", "MSCI World", "S&P 500"],
            datasets: [{
                label: 'Banks',
                data: [7.4, 16, 15.7, 21.5, 21.1],
                backgroundColor: [
                   "rgba(255,153,0, 0.2)",
                  "rgba(255,153,0, 0.2)",
                     "rgba(255,153,0, 0.2)",
                     "rgba(255,153,0, 0.2)",
                     "rgba(255,153,0, 0.2)",
                     "rgba(255,153,0, 0.2)"
                ],
                borderColor: [
                    "rgba(255,153,0, 1)",
                     "rgba(255,153,0, 1)",
                    "rgba(255,153,0, 1)", 
                     "rgba(255,153,0, 1)",
                   "rgba(255,153,0, 1)",
                   "rgba(255,153,0, 1)"
                ],
                borderWidth: 1
            },
            {
                label: 'Listed Bonds',
                data: [7, 13.3, 13, 17.4, 18.3],
                backgroundColor: [
               'rgba(126, 138, 163, 0.2)',
                'rgba(126, 138, 163, 0.2)',
             'rgba(126, 138, 163, 0.2)',
                'rgba(126, 138, 163, 0.2)',
                    'rgba(126, 138, 163, 0.2)',
                   'rgba(126, 138, 163, 0.2)'
                ],
                borderColor: [
                    'rgba(126, 138, 163, 1)',
                    'rgba(126, 138, 163, 1)',
                    'rgba(126, 138, 163, 1)',
                   'rgba(126, 138, 163, 1)',
                'rgba(126, 138, 163, 1)',
                'rgba(126, 138, 163, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true

                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Price Earnings Ratios"
                    }
                }],
                xAxes: [{

                }]
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        return tooltipItem.yLabel + '%';
                    }
                }
            }
        }
    });
});