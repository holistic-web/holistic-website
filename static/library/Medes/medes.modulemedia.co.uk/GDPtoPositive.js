window.onload = function() {
    var ctx = document.getElementById('GDPtoPositive').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["2003", "", "2005", "", "2007", "", "2009", "", "2011", "", "2013", "", "2015", "", "2017", "", "", "2020"],
            datasets: [{
                label: "Real GDP (cumulative)",
                backgroundColor: "rgba(	126, 138, 163, 0)",
                borderColor: 'rgba(126, 138, 163, 1)',
                data: [100, 104.3366884, 108.7279069, 114.9300242, 125.4072445, 126.5656289, 129.4952179, 138.0125874, 143.187733, 133.7248244, 131.1687036, 136.4778995, 134.2785648, 143.0661449, 147.7666747, , ],
            }, {
                label: "IMF Estimates",
                backgroundColor: "rgba(	126, 138, 163, 0)",
                borderColor: "rgba(255,153,0, 1)",
                data: [,,,,,,,,,,,,,, 147.7666747, 154.0704671, 160.9328792, 168.1185155]

            }]
        },

        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        suggestedMin: 80,
                        suggestedMax: 180
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "GDP"
                    }
                }],
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: "Year"
                    }
                }]
            }
        }
    });
}