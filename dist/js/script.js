// Predefined options
const links = ['Home', 'Contact', 'About', 'Services', 'Blog', 'FAQ', 'Support']

// Dropdown elements
const searchInput = document.getElementById('search-input')
const dropdownMenu = document.getElementById('dropdown-menu')

// Function to populate the dropdown with all links or filtered results
function populateDropdown(query = '') {
  // Clear previous results (but keep the header)
  dropdownMenu.innerHTML = `<li class="dropdown-header fs-20 fw-semibold">Quick Search Links</li><li><hr class="dropdown-divider"></li>`

  // If there's a query, filter matching options, otherwise show all links
  const filteredOptions = query
    ? links.filter((option) => option.toLowerCase().includes(query))
    : links

  // If there are matches (or all links), display them
  if (filteredOptions.length > 0) {
    filteredOptions.forEach((option) => {
      const li = document.createElement('li')
      li.innerHTML = `<a class="dropdown-item my-2 Qlink" href="#">${option}</a>`
      dropdownMenu.appendChild(li)
    })
  } else {
    // If no matches, display "No results" option
    const li = document.createElement('li')
    li.innerHTML = `<a class="dropdown-item text-center" href="#">No results found</a>`
    dropdownMenu.appendChild(li)
  }

  // Show the dropdown menu
  dropdownMenu.classList.add('show')
}

// Event listener for input field
searchInput.addEventListener('input', function () {
  const query = searchInput.value.toLowerCase().trim()
  populateDropdown(query)
})

// Show all links when the input field is focused (clicked into)
searchInput.addEventListener('focus', function () {
  populateDropdown() // Show all links when the field is focused
})

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
  if (
    !searchInput.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.remove('show')
  }
})

// --------------------------------------------
// Language flag change
// --------------------------------------------
// Select all buttons inside the dropdown
document.querySelectorAll('.dropdown-menu button').forEach((button) => {
  button.addEventListener('click', function () {
    // Get the flag image source
    const flagSrc = this.querySelector('img').src

    // Update the flag at the top of the dropdown
    document.getElementById('selected-flag').src = flagSrc
    document.getElementById('sselected-flag').src = flagSrc //this for small screen
  })
})
// --------------------------------------------
// Language flag change end
// --------------------------------------------

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
document.getElementById('sortDropdown').addEventListener('change', function () {
  const sortValue = this.value
  const tableBody = document.getElementById('employeeTable')
  const rows = Array.from(tableBody.querySelectorAll('tr'))

  rows.sort((a, b) => {
    if (sortValue.includes('priority')) {
      const priorityOrder = { high: 3, medium: 2, low: 1 }
      return sortValue === 'priority-high'
        ? priorityOrder[b.dataset.priority] - priorityOrder[a.dataset.priority]
        : priorityOrder[a.dataset.priority] - priorityOrder[b.dataset.priority]
    } else if (sortValue.includes('amount')) {
      const amountA = parseInt(a.dataset.amount)
      const amountB = parseInt(b.dataset.amount)
      return sortValue === 'amount-high' ? amountB - amountA : amountA - amountB
    }
    return 0
  })

  rows.forEach((row) => tableBody.appendChild(row))
})

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

var revchart

// Initialize the chart with default data for November
var revoptions = {
  chart: {
    type: 'bar',
    height: 300,
    stacked: true,
    toolbar: { show: false },
  },
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
  grid: {
    show: true,
    borderColor: '#e0e0e0',
    strokeDashArray: 0, // Solid grid lines
    xaxis: {
      lines: { show: true }, // Enable grid lines on x-axis
    },
    yaxis: {
      lines: { show: true }, // Enable grid lines on y-axis
    },
  },
  plotOptions: {
    bar: { horizontal: false, borderRadius: 6, columnWidth: '30%' },
  },
  dataLabels: { enabled: false },
  xaxis: {
    categories: [
      '1 Nov',
      '2 Nov',
      '3 Nov',
      '4 Nov',
      '5 Nov',
      '6 Nov',
      '7 Nov',
      '8 Nov',
      '9 Nov',
      '10 Nov',
    ],
    labels: { style: { colors: '#aaa', fontSize: '12px' } },
  },
  yaxis: {
    min: -3000,
    max: 3000,
    tickAmount: 4,
    labels: {
      formatter: function (value) {
        return `${(value / 1000).toFixed(1)}k`
      },
      style: { colors: '#aaa', fontSize: '12px' },
    },
  },
  tooltip: {
    y: {
      formatter: function (value) {
        return `$${(value / 1000).toFixed(1)}k`
      },
    },
    theme: 'dark',
  },
  colors: ['#3b82f6', '#0EA5E9'],
  legend: { show: false },
}

// Initialize the chart with default data for November
revchart = new ApexCharts(document.querySelector('#revenueChart'), revoptions)
revchart.render()

// Update chart based on selected month
document
  .getElementById('month-selector')
  .addEventListener('change', function (e) {
    const selectedMonth = e.target.value

    let newEarningsData = []
    let newExpensesData = []
    let newCategories = []

    switch (selectedMonth) {
      case 'november':
        newEarningsData = [
          1600, 2300, 1400, 2100, 2700, 1800, 2100, 1600, 2100, 1800,
        ]
        newExpensesData = [
          -1100, -1200, -1500, -1050, -1300, -1100, -1050, -1200, -1150, -1080,
        ]
        newCategories = [
          '1 Nov',
          '2 Nov',
          '3 Nov',
          '4 Nov',
          '5 Nov',
          '6 Nov',
          '7 Nov',
          '8 Nov',
          '9 Nov',
          '10 Nov',
        ]
        break
      case 'october':
        newEarningsData = [
          1500, 2200, 1300, 2000, 2600, 1700, 2000, 1500, 2000, 1700,
        ]
        newExpensesData = [
          -1000, -1100, -1400, -950, -1200, -1000, -950, -1100, -1050, -980,
        ]
        newCategories = [
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
        ]
        break
      case 'september':
        newEarningsData = [
          1400, 2100, 1200, 1900, 2500, 1600, 1900, 1400, 1900, 1600,
        ]
        newExpensesData = [
          -900, -1000, -1300, -850, -1100, -900, -850, -1000, -950, -880,
        ]
        newCategories = [
          '1 Sep',
          '2 Sep',
          '3 Sep',
          '4 Sep',
          '5 Sep',
          '6 Sep',
          '7 Sep',
          '8 Sep',
          '9 Sep',
          '10 Sep',
        ]
        break
      case 'august':
        newEarningsData = [
          1300, 2000, 1100, 1800, 2400, 1500, 1800, 1300, 1800, 1500,
        ]
        newExpensesData = [
          -800, -900, -1200, -750, -1000, -800, -750, -900, -850, -780,
        ]
        newCategories = [
          '1 Aug',
          '2 Aug',
          '3 Aug',
          '4 Aug',
          '5 Aug',
          '6 Aug',
          '7 Aug',
          '8 Aug',
          '9 Aug',
          '10 Aug',
        ]
        break
      default:
        // Default data for November if no specific month is selected
        newEarningsData = [
          1500, 2200, 1300, 2000, 2600, 1700, 2000, 1500, 2000, 1700,
        ]
        newExpensesData = [
          -1000, -1100, -1400, -950, -1200, -1000, -950, -1100, -1050, -980,
        ]
        newCategories = [
          '1 Nov',
          '2 Nov',
          '3 Nov',
          '4 Nov',
          '5 Nov',
          '6 Nov',
          '7 Nov',
          '8 Nov',
          '9 Nov',
          '10 Nov',
        ]
        break
    }

    // Update the chart with new data and categories without re-rendering
    revchart.updateSeries([
      { name: 'Earnings', data: newEarningsData },
      { name: 'Expenses', data: newExpensesData },
    ])

    revchart.updateOptions({
      xaxis: { categories: newCategories },
    })
  })
//

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

var salaryoptions = {
  chart: {
    type: 'bar',
    height: 200,
    toolbar: { show: false },
  },
  series: [
    { name: 'Salary', data: [30, 50, 45, 60, 75, 55, 65] }, // Initial salary values
    { name: 'Expense', data: [20, 40, 35, 50, 65, 45, 55] }, // Initial expense values
  ],
  plotOptions: {
    bar: {
      columnWidth: '50%',
      borderRadius: 6,
      dataLabels: { position: 'top' },
    },
  },
  colors: ['#3b82f6', '#e2e8f0'],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: {
      style: { colors: '#aaa', fontSize: '12px' },
    },
  },
  yaxis: { show: false },
  grid: { show: false },
  dataLabels: { enabled: false },
  tooltip: {
    enabled: true,
    theme: 'dark',
    style: {
      fontSize: '12px',
      fontFamily: 'Arial, sans-serif',
      color: '#fff',
      background: '#333',
      borderRadius: '4px',
      padding: '8px',
    },
  },
  legend: { show: false },
}

var salarychart = new ApexCharts(
  document.querySelector('#salary'),
  salaryoptions
)
salarychart.render()

// Event listener for year selection
document
  .getElementById('year-selector-salary')
  .addEventListener('change', function (e) {
    const selectedYear = e.target.value
    updateChartData(selectedYear)
  })

// Function to update chart data based on selected year
function updateChartData(year) {
  let newSalaryData = []
  let newExpenseData = []
  let newCategories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] // Static categories for all months

  if (year === '2024') {
    newSalaryData = [30, 50, 45, 60, 75, 55, 65] // Data for 2024
    newExpenseData = [20, 40, 35, 50, 65, 45, 55] // Data for 2024
  } else if (year === '2023') {
    newSalaryData = [15, 25, 20, 25, 40, 20, 30] // Data for 2023
    newExpenseData = [8, 18, 23, 28, 33, 23, 23] // Data for 2023
  }

  // Update the salary chart with the new data
  salarychart.updateSeries([
    { name: 'Salary', data: newSalaryData },
    { name: 'Expense', data: newExpenseData },
  ])

  // Update the categories (months) in the x-axis
  salarychart.updateOptions({
    xaxis: { categories: newCategories },
  })
}
// -----------------small screen----------------------------
var ssalaryoptions = {
  chart: {
    type: 'bar',
    height: 200,
    toolbar: { show: false },
  },
  series: [
    { name: 'Salary', data: [30, 50, 45, 60, 75, 55, 65] }, // Initial salary values
    { name: 'Expense', data: [20, 40, 35, 50, 65, 45, 55] }, // Initial expense values
  ],
  plotOptions: {
    bar: {
      columnWidth: '50%',
      borderRadius: 6,
      dataLabels: { position: 'top' },
    },
  },
  colors: ['#3b82f6', '#e2e8f0'],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: {
      style: { colors: '#aaa', fontSize: '12px' },
    },
  },
  yaxis: { show: false },
  grid: { show: false },
  dataLabels: { enabled: false },
  tooltip: {
    enabled: true,
    theme: 'dark',
    style: {
      fontSize: '12px',
      fontFamily: 'Arial, sans-serif',
      color: '#fff',
      background: '#333',
      borderRadius: '4px',
      padding: '8px',
    },
  },
  legend: { show: false },
}

var ssalarychart = new ApexCharts(
  document.querySelector('#salary2'),
  ssalaryoptions
)
ssalarychart.render()

// Event listener for year selection
document
  .getElementById('syear-selector-salary')
  .addEventListener('change', function (e) {
    const sselectedYear = e.target.value
    supdateChartData(sselectedYear)
  })

// Function to update chart data based on selected year
function supdateChartData(year) {
  let newSalaryData = []
  let newExpenseData = []
  let newCategories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] // Static categories for all months

  if (year === '2024') {
    newSalaryData = [30, 50, 45, 60, 75, 55, 65] // Data for 2024
    newExpenseData = [20, 40, 35, 50, 65, 45, 55] // Data for 2024
  } else if (year === '2023') {
    newSalaryData = [15, 25, 20, 25, 40, 20, 30] // Data for 2023
    newExpenseData = [8, 18, 23, 28, 33, 23, 23] // Data for 2023
  }

  // Update the salary chart with the new data
  ssalarychart.updateSeries([
    { name: 'Salary', data: newSalaryData },
    { name: 'Expense', data: newExpenseData },
  ])

  // Update the categories (months) in the x-axis
  ssalarychart.updateOptions({
    xaxis: { categories: newCategories },
  })
}
// -----------------small screen end------------------------

// --------------------------------------------
// salary chart end
// --------------------------------------------

// --------------------------------------------
// Customer chart
// --------------------------------------------
var customeroptions = {
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

var customerchart = new ApexCharts(
  document.querySelector('#customer'),
  customeroptions
)
customerchart.render()


// Event listener for the dropdown
document.getElementById('time-range-selector').addEventListener('change', function (e) {
  const selectedRange = e.target.value;

  // Map for values based on the dropdown selection
  const CustvalueMap = {
    week: "$36,358",  // Value for "This Week"
    month: "$78,358", // Value for "This Month"
  };

  const newCustValue = CustvalueMap[selectedRange]; // Get the corresponding value from the map
  let newCustData = [];

  if (selectedRange === 'week') {
    // Data for "This Week"
    newCustData = [40, 70, 60, 30, 50, 80];
  } else if (selectedRange === 'month') {
    // Data for "This Month"
    newCustData = [100, 120, 150, 130, 110, 140];
  }

  // Update chart data and categories
  customerchart.updateSeries([{ data: newCustData }]);

   // Update the paragraph with the new value
   document.getElementById("dynamic-Custvalue").textContent = newCustValue;
});

// --------------------------------------------
// Customer chart end
// --------------------------------------------

// --------------------------------------------
// project chart
// --------------------------------------------
var projectoptions = {
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

var projectchart = new ApexCharts(
  document.querySelector('#project'),
  projectoptions
)
projectchart.render()

// Event listener for the dropdown
document.getElementById('time-range-selector').addEventListener('change', function (e) {
  const selectedRange = e.target.value;

  // Map for values based on the dropdown selection
  const ProjvalueMap = {
    week: "28,358",  // Value for "This Week"
    month: "68,358", // Value for "This Month"
  };

  const newProjValue = ProjvalueMap[selectedRange]; // Get the corresponding value from the map

  let newProjData = [];

  if (selectedRange === 'week') {
    // Data for "This Week"
    newProjData = [40, 70, 60, 30, 50, 80];
  } else if (selectedRange === 'month') {
    // Data for "This Month"
    newProjData = [120, 100, 150, 180, 140, 110];
  }

  // Update chart data and categories
  projectchart.updateSeries([{ data: newProjData }]);

  // Update the paragraph with the new value
  document.getElementById("dynamic-Projvalue").textContent = newProjValue;
});

// --------------------------------------------
// project chart end
// --------------------------------------------

// --------------------------------------------
// Monthly earning
// --------------------------------------------
var Monthlyoptions = {
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

var Monthlychart = new ApexCharts(
  document.querySelector('#mearning'),
  Monthlyoptions
)
Monthlychart.render()

// --------------------------------------------
// Monthly earning end
// --------------------------------------------
