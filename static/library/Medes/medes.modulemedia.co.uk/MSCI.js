$("#MSCI").ready(function () {
    var ctx = document.getElementById('MSCI').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',

        // The data for our dataset
        data: {
            labels: ["Financials", "Holding", "Materials", "Telecommunication Services", "Energy", "Consumer Staples", "Industrials", "Utilities", "Healthcare"],
            datasets: [{
                label: "MSCI Frontier Market Index",
                backgroundColor: ["#c5b49a", "#bcbec0", "#7e8aa3", "#3F7CAC", "#E2F89C", "#CAE7B9#", "#84B59F", "#69A297", "53917E"],
                data: [44.6, 0, 10.8, 15.4, 16.3, 7.1, 1.7, 2.3, 1.4]
            }]
        },

        // Configuration options go here
        options: {
            title: {
                display: true,
                text: "MSCI Frontier Market Index"
            }
        }
    });
});