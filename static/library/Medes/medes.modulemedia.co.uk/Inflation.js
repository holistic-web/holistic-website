$("#Inflation").ready(function () {
    var ctx = document.getElementById('Inflation').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["2011", "", "", "", "", "", "", "", "", "", "", "", "2012", "", "", "", "", "", "", "", "", "", "", "", "2013", "", "", "", "", "", "", "", "", "", "", "", "2014", "", "", "", "", "", "", "", "", "", "", "", "2015", "", "", "", "", "", "", "", "", "", "", "", "2016", "", "", "", "", "", "", "", "", "", "", ""],
            datasets: [{
                label: "Inflation",
                backgroundColor: 'rgba(255,99,71, 0)',
                borderColor: 'rgba(255, 153, 0, 1)',
                data: [11.2, 12.6, 13.9, 15.1, 16.4, 17.9, 19.5, 21.0, 22.5, 23.8, 25.0, 26.1, 26.5, 26.4, 26.5, 26.5, 26.3, 25.8, 25.5, 25.1, 24.7, 24.8, 25.1, 25.6, 26.3, 27.4, 28.6, 29.8, 31.0, 32.6, 33.9, 35.1, 36.0, 36.2, 35.9, 35.5, 35.0, 33.7, 32.1, 30.2, 28.4, 26.2, 24.2, 22.3, 20.6, 19.1, 17.8, 16.8, 15.8, 15.2, 14.8, 14.5, 14.3, 14.2, 14.1, 13.8, 13.6, 13.3, 13.1, 12.6, 12.2, 11.8, 11.3, 10.8, 10.2, 9.5, 9.0, 8.7, 8.3, 7.9, 7.5]
            }
            ]
        },

        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 40
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Inflation (%)"
                    }
                }],
                xAxes: [{
                    display: true,
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
});