$("#Resilient").ready(function () {
    var ctx = document.getElementById('Resilient').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
            datasets: [{
                label: "Compounded annual return in local currency (Rial) is 30%",
                backgroundColor: 'rgba(255,99,71, 0)',
                borderColor: "rgba(255,153,0, 1)",
                data: [100,130,188,232,329,711,885,670,658,636,565,732,1232,1594,2473,5712,4505,4029,5148],
            }, {
                label: "Compounded annual return in US$ is 16%",
                backgroundColor: 'rgba(126, 138, 163, 0)',
                borderColor: 'rgba(126, 138, 163, 1)',
                data: [100.0,97,149,189,266,552,687,495,470,439,369,471,738,662,486,1228,832,707,927]

            }]
        },

        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    display: true,
                    type: 'logarithmic',
                    ticks: {
                        suggestedMin: 90,
                        suggestedMax: 9000
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
});