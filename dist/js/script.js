// revenueChart

var options = {
  series: [
    {
      name: 'Earnings',
      data: [1500, 1200, 1300, 1400, 1600, 1700, 1800, 1500, 1600, 1700],
    },
    {
      name: 'Expenses',
      data: [-1000, -1100, -900, -950, -1200, -1000, -950, -1100, -1050, -980],
    },
  ],
  chart: {
    type: 'bar',
    height: 300,
    stacked: true, // Enables stacking
    toolbar: {
      show: false,
    },
  },
  grid: {
    show: true, // Enable the grid
    borderColor: '#e0e0e0', // Color of the grid lines
    strokeDashArray: 4, // Dashed grid lines (use 0 for solid lines)
    xaxis: {
      lines: {
        show: true, // Show vertical grid lines
      },
    },
    yaxis: {
      lines: {
        show: true, // Show horizontal grid lines
      },
    },
  },
  plotOptions: {
    bar: {
      horizontal: false, // Vertical bars
      borderRadius: 4,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false, // Disable the digits on bars
  },
  xaxis: {
    categories: [
      '1 Oct',
      '2 Oct',
      '3 Oct',
      '4 Oct',
      '5 Oct',
      '6 Oct',
      '7 Oct',
      '8 Oct',
      '9 Oct',
      '10 Oct',
    ],
    labels: {
      style: {
        colors: '#aaa', // Set your desired x-axis label color here
        fontSize: '12px', // Optional: Set font size
      },
    },
  },
  yaxis: {
    min: -3000, // Set minimum value
    max: 3000, // Set maximum value
    tickAmount: 4, // Control the number of ticks (4 ticks = 5 values)
    labels: {
      formatter: function (value) {
        // Custom formatter to display values as -3.0k, -1.5k, 0, 1.5k, 3.0k
        return `${(value / 1000).toFixed(1)}k`
      },
      style: {
        colors: '#aaa', // Customize label color
        fontSize: '12px',
      },
    },
  },
  tooltip: {
    y: {
      formatter: function (value) {
        return `$${(value / 1000).toFixed(1)}k` // Tooltip formatting
      },
    },
  },
  colors: ['#3b82f6', '#0EA5E9'], // Custom colors for Earnings and Expenses
  legend: {
    // position: 'top'
    show: false,
  },
}

var chart = new ApexCharts(document.querySelector('#revenueChart'), options)
chart.render()

// YearlyBackupChart

document.addEventListener('DOMContentLoaded', function () {
  const options = {
    series: [45, 55], // Data for current year (55%) and previous year (45%)
    chart: {
      height: 280,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '65%', // Adjust the hollow size to center the text
          background: 'transparent',
        },
        dataLabels: {
          show: true,
          name: {
            show: true, // Hide default label
          },
          value: {
            show: true, // Hide default percentage values
            color: '#22C55E',
          },
          total: {
            show: true,
            label: '$36,358', // Main text in the center
            fontSize: '20px', // Ensure proper size for the text
            color: '#aaa', // Center text color
            formatter: function () {
              return '+9% than last year ↑' // Secondary text below the main label
            },
          },
        },
      },
    },
    colors: ['#3b82f6', '#0EA5E9'], // Colors for the segments
  }

  const chart = new ApexCharts(
    document.querySelector('#YearlyBackupChart'),
    options
  )
  chart.render()
})

// salary chart

var options = {
  chart: {
    type: 'bar',
    height: 200,
    toolbar: {
      show: false, // Hide toolbar
    },
  },
  series: [
    {
      name: 'Salary',
      data: [30, 50, 45, 60, 75, 55, 65], // Salary values
    },
    {
      name: 'Expense',
      data: [20, 40, 35, 50, 65, 45, 55], // Expense values
    },
  ],
  plotOptions: {
    bar: {
      columnWidth: '60%', // Adjust width of bars
      borderRadius: 4, // Rounded edges
      dataLabels: {
        position: 'top', // Position labels on top of the bars
      },
    },
  },
  colors: ['#3b82f6', '#e2e8f0'], // Colors for Salary and Expense
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Months or labels for x-axis
    labels: {
      show: true, // Show x-axis labels
    },
    axisBorder: {
      show: false, // Hide x-axis border
    },
    axisTicks: {
      show: false, // Hide x-axis ticks
    },
    labels: {
      style: {
        colors: '#aaa', // Set your desired x-axis label color here
        fontSize: '12px', // Optional: Set font size
      },
    },
  },
  yaxis: {
    show: false, // Show y-axis
  },
  grid: {
    show: false, // Show grid for better readability
  },
  dataLabels: {
    enabled: false, // Disable value labels directly on bars
  },
  tooltip: {
    enabled: true, // Enable tooltips for interaction
  },
  legend: {
    show: false, // Hide the legend that displays Salary and Expense labels
  },
}

var chart = new ApexCharts(document.querySelector('#salary'), options)
chart.render()

// Customer chart
var options = {
  chart: {
    type: 'bar',
    // height: 120,
    width: 160,
    toolbar: {
      show: false, // Hide toolbar
    },
  },
  series: [
    {
      data: [40, 70, 60, 30, 50, 80], // Example values for the bars
    },
  ],
  plotOptions: {
    bar: {
      columnWidth: '30%',
      borderRadius: 4,
    },
  },
  colors: ['#4285F4'], // Blue color for the bars
  xaxis: {
    categories: ['A', 'B', 'C', 'D', 'E', 'F'], // Example categories
    labels: {
      show: false, // Hides the labels for a clean look
    },
    axisBorder: {
      show: false, // Hides the x-axis line
    },
    axisTicks: {
      show: false, // Hides ticks on the x-axis
    },
  },
  yaxis: {
    show: false, // Hides the y-axis
  },
  grid: {
    show: false, // Removes grid lines
  },
  tooltip: {
    enabled: true, // Disables tooltips
  },
  dataLabels: {
    enabled: false, // Hides the numbers on top of the bars
  },
}

var chart = new ApexCharts(document.querySelector('#customer'), options)
chart.render()

//
// project chart
var options = {
  chart: {
    type: 'bar',
    // height: 120,
    width: 160,
    toolbar: {
      show: false, // Hide toolbar
    },
  },
  series: [
    {
      data: [40, 70, 60, 30, 50, 80], // Example values for the bars
    },
  ],
  plotOptions: {
    bar: {
      columnWidth: '30%',
      borderRadius: 4,
    },
  },
  colors: ['#0EA5E9'], // Blue color for the bars
  xaxis: {
    categories: ['A', 'B', 'C', 'D', 'E', 'F'], // Example categories
    labels: {
      show: false, // Hides the labels for a clean look
    },
    axisBorder: {
      show: false, // Hides the x-axis line
    },
    axisTicks: {
      show: false, // Hides ticks on the x-axis
    },
  },
  yaxis: {
    show: false, // Hides the y-axis
  },
  grid: {
    show: false, // Removes grid lines
  },
  tooltip: {
    enabled: true, // Disables tooltips
  },
  dataLabels: {
    enabled: false, // Hides the numbers on top of the bars
  },
}

var chart = new ApexCharts(document.querySelector('#project'), options)
chart.render()

// Monthly earning
var options = {
  chart: {
    type: 'area',
    height: 240,
    toolbar: {
      show: false, // Hides the toolbar for a cleaner look
    },
  },
  series: [
    {
      name: 'Data',
      data: [60, 30, 60, 30, 60, 25, 55], // Example data points
    },
  ],
  xaxis: {
    categories: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'], // Days of the week
    labels: {
      style: {
        colors: '#aaa',
        fontSize: '12px',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    min: 0, // Ensures the y-axis starts from 0
    max: 100,
    show: false, // Hides the y-axis labels
  },
  grid: {
    show: true,
    borderColor: '#eaeaea', // Faint grid line color
    strokeDashArray: 0,
    xaxis: {
      lines: {
        show: true, // Shows grid lines for the x-axis
      },
    },
    yaxis: {
      lines: {
        show: false, // Hides grid lines for the y-axis
      },
    },
  },
  colors: ['#00c853'], // Green color for the line
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.3,
      gradientToColors: ['#a5d6a7'], // Light green gradient fill
      opacityFrom: 0.6,
      opacityTo: 0.2,
    },
  },
  markers: {
    size: 5, // Marker size
    colors: ['#00c853'], // Marker color
    strokeWidth: 2,
    hover: {
      size: 7,
    },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  tooltip: {
    enabled: true,
    theme: 'light',
  },
  dataLabels: {
    enabled: false,
  },
}

var chart = new ApexCharts(document.querySelector('#mearning'), options)
chart.render()

// --------------------------------------------
// RTL logic
// dist/js/main.js

// Get the button and the link to the CSS file
const toggleButton = document.getElementById('toggleDirection')
const themeLink = document.getElementById('theme-style')

// Check if there's already a saved theme preference in localStorage
let isRtl = localStorage.getItem('rtl') === 'true'

// Set the initial direction based on the stored preference
if (isRtl) {
  document.documentElement.setAttribute('dir', 'rtl')
  themeLink.href = 'dist/css/style-rtl.css'
  toggleButton.textContent = 'Switch to LTR'
} else {
  document.documentElement.setAttribute('dir', 'ltr')
  themeLink.href = 'dist/css/style-ltr.css'
  toggleButton.textContent = 'Switch to RTL'
}

// Toggle the direction and save the preference in localStorage
toggleButton.addEventListener('click', function () {
  isRtl = !isRtl // Toggle RTL/LTR
  if (isRtl) {
    document.documentElement.setAttribute('dir', 'rtl')
    themeLink.href = 'dist/css/style-rtl.css'
    toggleButton.textContent = 'Switch to LTR'
  } else {
    document.documentElement.setAttribute('dir', 'ltr')
    themeLink.href = 'dist/css/style-ltr.css'
    toggleButton.textContent = 'Switch to RTL'
  }

  // Save the user preference in localStorage
  localStorage.setItem('rtl', isRtl)
})

//
// dark
//
const toggleButton2 = document.getElementById('themeToggle')
const themeIcon = document.getElementById('themeIcon')
const bodyElement = document.body

toggleButton2.addEventListener('click', () => {
  const currentTheme = bodyElement.getAttribute('data-bs-theme')
  const newTheme = currentTheme === 'light' ? 'dark' : 'light'
  bodyElement.setAttribute('data-bs-theme', newTheme)

  // Update icon
  themeIcon.className =
    newTheme === 'light' ? 'bi bi-moon-fill' : 'bi bi-sun-fill'
})