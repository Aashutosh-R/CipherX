var options = {
    series: [
        {
            name: 'Earnings',
            data: [1500, 1200, 1300, 1400, 1600, 1700, 1800, 1500, 1600, 1700]
        },
        {
            name: 'Expenses',
            data: [-1000, -1100, -900, -950, -1200, -1000, -950, -1100, -1050, -980]
        }
    ],
    chart: {
        type: 'bar',
        height: 300,
        stacked: true, // Enables stacking
        toolbar: {
            show: false
        }
    },
    grid: {
        show: true, // Enable the grid
        borderColor: '#e0e0e0', // Color of the grid lines
        strokeDashArray: 4, // Dashed grid lines (use 0 for solid lines)
        xaxis: {
            lines: {
                show: true // Show vertical grid lines
            }
        },
        yaxis: {
            lines: {
                show: true // Show horizontal grid lines
            }
        }
    },
    plotOptions: {
        bar: {
            horizontal: false, // Vertical bars
            borderRadius: 4,
            columnWidth: '40%',
        }
    },
    dataLabels: {
        enabled: false // Disable the digits on bars
    },
    xaxis: {
        categories: ['1 Oct', '2 Oct', '3 Oct', '4 Oct', '5 Oct', '6 Oct', '7 Oct', '8 Oct', '9 Oct', '10 Oct']
    },
    yaxis: {
        min: -3000, // Set minimum value
        max: 3000,  // Set maximum value
        tickAmount: 4, // Control the number of ticks (4 ticks = 5 values)
        labels: {
            formatter: function (value) {
                // Custom formatter to display values as -3.0k, -1.5k, 0, 1.5k, 3.0k
                return `${(value / 1000).toFixed(1)}k`;
            },
            style: {
                colors: '#333', // Customize label color
                fontSize: '12px'
            }
        }
    },
    tooltip: {
        y: {
            formatter: function (value) {
                return `$${(value / 1000).toFixed(1)}k`; // Tooltip formatting
            }
        }
    },
    colors: ['#3b82f6', '#0EA5E9'], // Custom colors for Earnings and Expenses
    legend: {
        // position: 'top'
        show : false
    }
};

var chart = new ApexCharts(document.querySelector("#revenueChart"), options);
chart.render();