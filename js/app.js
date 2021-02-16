let $autoRefresh = document.getElementById('autoRefresh')
let autoRefresh = $autoRefresh.checked

let $refreshInterval = document.getElementById('refreshInterval')
let refreshInterval = 1000 /*$refreshInterval.value * 1000*/

let $date = document.getElementById('date')
let date = new Date()

$autoRefresh.onchange = () => {
  autoRefresh = !autoRefresh
}

$refreshInterval.onchange = () => {
  refreshInterval = $refreshInterval.value * 1000
}

function loop() {
  if (autoRefresh) {
    date = new Date()
    $date.innerHTML = date
    // Add some custom divs to refresh
  }
  window.setTimeout(loop, refreshInterval);
}

loop();