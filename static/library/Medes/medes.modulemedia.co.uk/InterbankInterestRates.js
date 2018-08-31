$("#Interbank").ready(function () {
    var ctx = document.getElementById('Interbank').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["Apr-15", "", "Jun-15", "", "Aug-15", "", "Oct-15", "", "Dec-15", "", "Feb-16", "", "Apr-16", "", "Jun-16", "", "Aug-16", "", "Oct-16", "", "Dec-16"],
            datasets: [{
                label: "Interbank Interest Rates",
                backgroundColor: 'rgba(255,99,71, 0)',
                borderColor: 'rgba(126, 138, 163, 1)',
                data: [28,27,27,27,27,27,27,25,23,20.5,19.8,20.3,18,17,16,15,15,15,16,17,17]
            }]
        },

        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        suggestedMin: 10,
                        suggestedMax: 30
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Interest Rate (%)"
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