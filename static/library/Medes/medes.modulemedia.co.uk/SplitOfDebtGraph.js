window.onload = function(){
    var ctx = document.getElementById("SplitOfDebtOutstanding");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["2010/11", "2011/12", "2012/13", "2013/14", "2014/15", "2015/16"],
            datasets: [{
                label: 'Banks',
                data: [98, 95, 93, 87, 79, 61],
                backgroundColor: [
                   'rgba(255, 153, 0, 0.2)',
                    'rgba(255, 153, 0, 0.2)',
                    'rgba(255, 153, 0, 0.2)',
                    'rgba(255, 153, 0, 0.2)',
                     'rgba(255, 153, 0, 0.2)',
                    'rgba(255, 153, 0, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 153, 0, 1)',
                    'rgba(255, 153, 0, 1)',
                    'rgba(255, 153, 0, 1)',
                    'rgba(255, 153, 0, 1)',
                     'rgba(255, 153, 0, 1)',
                    'rgba(255, 153, 0, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Listed Bonds',
                data: [2, 5, 7, 13, 21, 39],
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
                        labelString: "Percentage (%)"
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Year"
                    }
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
};  