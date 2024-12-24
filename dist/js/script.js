// --------------------------------------------
// RTL logic
// --------------------------------------------

// Get the button and the link to the CSS file
const toggleButton = document.getElementById('toggleDirection')
const themeLink = document.getElementById('theme-style')
const themeIcon2 = document.getElementById('themeIcon2')

// Check if there's already a saved theme preference in localStorage
let isRtl = localStorage.getItem('rtl') === 'true'

// Set the initial direction and icon based on the stored preference
if (isRtl) {
  document.documentElement.setAttribute('dir', 'rtl')
  themeLink.href = 'dist/css/style-rtl.css'
  themeIcon2.classList.replace('bi-arrow-bar-left', 'bi-arrow-bar-right')
} else {
  document.documentElement.setAttribute('dir', 'ltr')
  themeLink.href = 'dist/css/style-ltr.css'
  themeIcon2.classList.replace('bi-arrow-bar-right', 'bi-arrow-bar-left')
}

// Toggle the direction and save the preference in localStorage
toggleButton.addEventListener('click', function () {
  isRtl = !isRtl // Toggle RTL/LTR

  if (isRtl) {
    document.documentElement.setAttribute('dir', 'rtl')
    themeLink.href = 'dist/css/style-rtl.css'
    themeIcon2.classList.replace('bi-arrow-bar-left', 'bi-arrow-bar-right')
  } else {
    document.documentElement.setAttribute('dir', 'ltr')
    themeLink.href = 'dist/css/style-ltr.css'
    themeIcon2.classList.replace('bi-arrow-bar-right', 'bi-arrow-bar-left')
  }

  // Save the user preference in localStorage
  localStorage.setItem('rtl', isRtl)
})

// --------------------------------------------
// RTL logic end
// --------------------------------------------

// --------------------------------------------
// dark logic
// --------------------------------------------
const toggleButton2 = document.getElementById('themeToggle')
const toggleButton3 = document.getElementById('SthemeToggle')
const themeIcon = document.getElementById('themeIcon')
const themeIcon3 = document.getElementById('SthemeIcon')
const htmlElement = document.documentElement // Target the <html> tag instead of <body>

// Function to apply the theme
const applyTheme = (theme) => {
  htmlElement.setAttribute('data-bs-theme', theme) // Apply theme to <html> instead of <body>

  // Update icon
  themeIcon.className =
    theme === 'light'
      ? 'bi bi-moon link-blue text-black fs-20'
      : 'bi bi-sun link-blue text-gray fs-20'
  // Update icon
  themeIcon3.className =
    theme === 'light'
      ? 'bi bi-moon link-blue text-black fs-20'
      : 'bi bi-sun link-blue text-gray fs-20'
}

// Check localStorage for the saved theme
const savedTheme = localStorage.getItem('theme')
if (savedTheme) {
  applyTheme(savedTheme) // Apply the saved theme
} else {
  // Default to 'light' theme if no preference is saved
  applyTheme('light')
}

// Add event listener to the toggle button
toggleButton2.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-bs-theme') // Get theme from <html> tag
  const newTheme = currentTheme === 'light' ? 'dark' : 'light'

  // Apply the new theme
  applyTheme(newTheme)

  // Save the user's choice in localStorage
  localStorage.setItem('theme', newTheme)
})
//
// Add event listener to the toggle button
toggleButton3.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-bs-theme') // Get theme from <html> tag
  const newTheme = currentTheme === 'light' ? 'dark' : 'light'

  // Apply the new theme
  applyTheme(newTheme)

  // Save the user's choice in localStorage
  localStorage.setItem('theme', newTheme)
})
// --------------------------------------------
// dark logic end
// --------------------------------------------

// --------------------------------------------
// shadow add after scroll (topbar)
// --------------------------------------------
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.topbar')
  const navbar2 = document.querySelector('.snav')

  if (window.scrollY > 50) {
    // Change 50 to any number you want for scroll threshold
    navbar.classList.add('scrolled')
    navbar2.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
    navbar2.classList.remove('scrolled')
  }
})
// --------------------------------------------
// shadow add after scroll (topbar) end
// --------------------------------------------

// --------------------------------------------
// sidebar collapse
// --------------------------------------------
document.querySelector('.btn-toggle-sidebar').addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar')
  const topbar = document.getElementById('topbar')
  const main = document.getElementById('main')
  sidebar.classList.toggle('collapsed')
  topbar.classList.toggle('expand')
  main.classList.toggle('expanded')
})

// --------------------------------------------
// sidebar collapse end
// --------------------------------------------

// --------------------------------------------
// tabel data sort logic
// --------------------------------------------
document.getElementById("sortDropdown").addEventListener("change", function () {
  const sortValue = this.value;
  const tableBody = document.getElementById("employeeTable");
  const rows = Array.from(tableBody.querySelectorAll("tr"));

  rows.sort((a, b) => {
    if (sortValue.includes("priority")) {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return sortValue === "priority-high"
        ? priorityOrder[b.dataset.priority] - priorityOrder[a.dataset.priority]
        : priorityOrder[a.dataset.priority] - priorityOrder[b.dataset.priority];
    } else if (sortValue.includes("amount")) {
      const amountA = parseInt(a.dataset.amount);
      const amountB = parseInt(b.dataset.amount);
      return sortValue === "amount-high" ? amountB - amountA : amountA - amountB;
    }
    return 0;
  });

  rows.forEach(row => tableBody.appendChild(row));
});

// --------------------------------------------
// tabel data sort logic end
// --------------------------------------------

// --------------------------------------------
// Best selling product image toggle
// --------------------------------------------
document.getElementById('themeToggle').addEventListener('click', function () {
  // Get the body element and toggle the theme
  const body = document.body
  const logo = document.querySelector('.theme-img')

  // Toggle between dark and light theme
  if (body.getAttribute('data-bs-theme') === 'dark') {
    body.setAttribute('data-bs-theme', 'light')
    logo.src = './dist/images/BestSellingProduct/black-logo.svg' // Light theme logo
  } else {
    body.setAttribute('data-bs-theme', 'dark')
    logo.src = './dist/images/BestSellingProduct/white-logo.svg' // Dark theme logo
  }
})
//
document.getElementById('SthemeToggle').addEventListener('click', function () {
  // Get the body element and toggle the theme
  const body = document.body
  const logo = document.querySelector('.theme-img')

  // Toggle between dark and light theme
  if (body.getAttribute('data-bs-theme') === 'dark') {
    body.setAttribute('data-bs-theme', 'light')
    logo.src = './dist/images/BestSellingProduct/black-logo.svg' // Light theme logo
  } else {
    body.setAttribute('data-bs-theme', 'dark')
    logo.src = './dist/images/BestSellingProduct/white-logo.svg' // Dark theme logo
  }
})
// --------------------------------------------
// Best selling product image toggle end
// --------------------------------------------

// --------------------------------------------
// revenueChart
// --------------------------------------------
var options = {
  series: [
    {
      name: 'Earnings',
      data: [1500, 2200, 1300, 2000, 2600, 1700, 2000, 1500, 2000, 1700],
    },
    {
      name: 'Expenses',
      data: [-1000, -1100, -1400, -950, -1200, -1000, -950, -1100, -1050, -980],
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
    strokeDashArray: 0, // Dashed grid lines (use 0 for solid lines)
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
      borderRadius: 6,
      columnWidth: '30%',
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
    theme: 'dark', // Set the tooltip theme to dark
    style: {
      fontSize: '12px', // Optional: Set font size for tooltip text
      fontFamily: 'Arial, sans-serif', // Optional: Set font family
      color: '#fff', // Text color (white)
      background: '#333', // Background color (dark)
      borderRadius: '4px', // Optional: Add rounded corners
      padding: '8px', // Optional: Adjust padding inside the tooltip
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

// --------------------------------------------
// revenueChart end
// --------------------------------------------

// --------------------------------------------
// YearlyBackupChart
// --------------------------------------------

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
    stroke: { width: 1, lineCap: 'round' },
    colors: ['#3b82f6', '#0EA5E9'], // Colors for the segments
  }

  const chart = new ApexCharts(
    document.querySelector('#YearlyBackupChart'),
    options
  )
  chart.render()
})

// --------------------------------------------
// YearlyBackupChart end
// --------------------------------------------

// --------------------------------------------
// salary chart
// --------------------------------------------

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
      columnWidth: '50%', // Adjust width of bars
      borderRadius: 6, // Rounded edges
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
    theme: 'dark', // Set the tooltip theme to dark
    style: {
      fontSize: '12px', // Optional: Set font size for tooltip text
      fontFamily: 'Arial, sans-serif', // Optional: Set font family
      color: '#fff', // Text color (white)
      background: '#333', // Background color (dark)
      borderRadius: '4px', // Optional: Add rounded corners
      padding: '8px', // Optional: Adjust padding inside the tooltip
    },
  },
  legend: {
    show: false, // Hide the legend that displays Salary and Expense labels
  },
}

var chart = new ApexCharts(document.querySelector('#salary'), options)
chart.render()

// resonpsive copy of chart
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
      columnWidth: '50%', // Adjust width of bars
      borderRadius: 6, // Rounded edges
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
    theme: 'dark', // Set the tooltip theme to dark
    style: {
      fontSize: '12px', // Optional: Set font size for tooltip text
      fontFamily: 'Arial, sans-serif', // Optional: Set font family
      color: '#fff', // Text color (white)
      background: '#333', // Background color (dark)
      borderRadius: '4px', // Optional: Add rounded corners
      padding: '8px', // Optional: Adjust padding inside the tooltip
    },
  },
  legend: {
    show: false, // Hide the legend that displays Salary and Expense labels
  },
}

var chart = new ApexCharts(document.querySelector('#salary2'), options)
chart.render()
// resonpsive copy of chart end

// --------------------------------------------
// salary chart end
// --------------------------------------------

// --------------------------------------------
// Customer chart
// --------------------------------------------
var options = {
  chart: {
    type: 'bar',
    height: 100,
    width: 150,
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
    theme: 'dark', // Set the tooltip theme to dark
    style: {
      fontSize: '12px', // Optional: Set font size for tooltip text
      fontFamily: 'Arial, sans-serif', // Optional: Set font family
      color: '#fff', // Text color (white)
      background: '#333', // Background color (dark)
      borderRadius: '4px', // Optional: Add rounded corners
      padding: '8px', // Optional: Adjust padding inside the tooltip
    },
  },
  dataLabels: {
    enabled: false, // Hides the numbers on top of the bars
  },
  responsive: [
    {
      breakpoint: 1369,
      options: {
        chart: {
          height: 100, // Set smaller height for tablets
          width: 120,
        },
      },
    },
    {
      breakpoint: 1290,
      options: {
        chart: {
          height: 100, // Set smaller height for tablets
          width: 90,
        },
      },
    },
    {
      breakpoint: 1025,
      options: {
        chart: {
          height: 100, // Set smaller height for tablets
          width: 250,
        },
      },
    },
    {
      breakpoint: 914,
      options: {
        chart: {
          height: 100, // Set smaller height for tablets
          width: 200,
        },
      },
    },
    {
      breakpoint: 825,
      options: {
        chart: {
          height: 100, // Set smaller height for tablets
          width: 120,
        },
      },
    },
    {
      breakpoint: 780,
      options: {
        chart: {
          height: 100, // Set smaller height for tablets
          width: 100,
        },
      },
    },
    {
      breakpoint: 550,
      options: {
        chart: {
          height: 120, // Set smaller height for tablets
          width: 350,
        },
      },
    },
    {
      breakpoint: 440,
      options: {
        chart: {
          height: 120, // Set smaller height for tablets
          width: 300,
        },
      },
    },
    {
      breakpoint: 380,
      options: {
        chart: {
          height: 120, // Set smaller height for tablets
          width: 230,
        },
      },
    },
  ],
}

var chart = new ApexCharts(document.querySelector('#customer'), options)
chart.render()

// --------------------------------------------
// Customer chart end
// --------------------------------------------

// --------------------------------------------
// project chart
// --------------------------------------------
var options = {
  chart: {
    type: 'bar',
    height: 100,
    width: 150,
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
    theme: 'dark', // Set the tooltip theme to dark
    style: {
      fontSize: '12px', // Optional: Set font size for tooltip text
      fontFamily: 'Arial, sans-serif', // Optional: Set font family
      color: '#fff', // Text color (white)
      background: '#333', // Background color (dark)
      borderRadius: '4px', // Optional: Add rounded corners
      padding: '8px', // Optional: Adjust padding inside the tooltip
    },
  },
  dataLabels: {
    enabled: false, // Hides the numbers on top of the bars
  },
  responsive: [
    {
      breakpoint: 1369,
      options: {
        chart: {
          height: 100, // Set smaller height for tablets
          width: 120,
        },
      },
    },
    {
      breakpoint: 1290,
      options: {
        chart: {
          height: 100, // Set smaller height for tablets
          width: 95,
        },
      },
    },
    {
      breakpoint: 1025,
      options: {
        chart: {
          height: 100, // Set smaller height for tablets
          width: 250,
        },
      },
    },
    {
      breakpoint: 914,
      options: {
        chart: {
          height: 100, // Set smaller height for tablets
          width: 200,
        },
      },
    },
    {
      breakpoint: 825,
      options: {
        chart: {
          height: 100, // Set smaller height for tablets
          width: 120,
        },
      },
    },
    {
      breakpoint: 780,
      options: {
        chart: {
          height: 100, // Set smaller height for tablets
          width: 100,
        },
      },
    },
    {
      breakpoint: 550,
      options: {
        chart: {
          height: 120, // Set smaller height for tablets
          width: 350,
        },
      },
    },
    {
      breakpoint: 440,
      options: {
        chart: {
          height: 120, // Set smaller height for tablets
          width: 300,
        },
      },
    },
    {
      breakpoint: 380,
      options: {
        chart: {
          height: 120, // Set smaller height for tablets
          width: 230,
        },
      },
    },
  ],
}

var chart = new ApexCharts(document.querySelector('#project'), options)
chart.render()

// --------------------------------------------
// project chart end
// --------------------------------------------

// --------------------------------------------
// Monthly earning
// --------------------------------------------
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
    theme: 'dark', // Set the tooltip theme to dark
    style: {
      fontSize: '12px', // Optional: Set font size for tooltip text
      fontFamily: 'Arial, sans-serif', // Optional: Set font family
      color: '#fff', // Text color (white)
      background: '#333', // Background color (dark)
      borderRadius: '4px', // Optional: Add rounded corners
      padding: '8px', // Optional: Adjust padding inside the tooltip
    },
  },
  dataLabels: {
    enabled: false,
  },
}

var chart = new ApexCharts(document.querySelector('#mearning'), options)
chart.render()

// --------------------------------------------
// Monthly earning end
// --------------------------------------------
