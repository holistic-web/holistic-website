$("#DebtToGDP").ready(function () {
    var ctx = document.getElementById("DebtToGDP");
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["Iran", "Poland", "Korea", "Turkey", "Mexico", "South Africa", "Vietnam", "Egypt", "Spain"],
            datasets: [{
                label: '',
                data: [20.2, 24.8, 25.6, 26.5, 38.7, 40.3, 47.0, 68.7, 91.9],
                backgroundColor: [
                    "rgba(255,153,0, 0.2)",
                    'rgba(126, 138, 163, 0.2)',
                    'rgba(126, 138, 163, 0.2)',
                    'rgba(126, 138, 163, 0.2)',
                 'rgba(126, 138, 163, 0.2)',
                   'rgba(126, 138, 163, 0.2)',
                    'rgba(126, 138, 163, 0.2)',
                    'rgba(126, 138, 163, 0.2)',
                   'rgba(126, 138, 163, 0.2)',

                ],
                borderColor: [
                    'rgba(255, 153, 0, 1)',
                    'rgba(126, 138, 163, 1)',
                    'rgba(126, 138, 163, 1)',
                    'rgba(126, 138, 163, 1)',
                   'rgba(126, 138, 163, 1)',
                    'rgba(126, 138, 163, 1)',
                    'rgba(126, 138, 163, 1)',
                    'rgba(126, 138, 163, 1)',
                    'rgba(126,138,163, 1)',
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
                        display: false,
                        labelString: ""
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Percentage (%)"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }
                ]},
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            return tooltipItem.xLabel + '%';
                        }
                    }
                },
                legend: {
                    display: false
                },
            },


        
    });
})