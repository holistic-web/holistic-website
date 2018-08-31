$("#Tehran").ready(function () {
    var ctx = document.getElementById('Tehran').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',

        // The data for our dataset
        data: {
            labels: ["Financials", "Holding", "Materials", "Telecommunication Services", "Energy", "Consumer Staples", "Industrials", "Utilities", "Healthcare", "Information Technology"],
            datasets: [{
                label: "Tehran Stock Exchange",
                backgroundColor: ["#c5b49a", "#bcbec0", "#7e8aa3", "#3F7CAC", "#E2F89C", "#CAE7B9#", "#84B59F", "#69A297", "53917E",    "#FCD0A1"],
                data: [17.9,12.8,13.5,7.8,31,1,8.8,2.7,2.9,1.5]
            }]
        },

        // Configuration options go here
        options: {
            title: {
                display: true,
                text: "Tehran Stock Exchange"
            }
        }
    });
});