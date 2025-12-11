document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('geckoGrowthChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1 mo', '3 mo', '6 mo', '9 mo', '12 mo', '18 mo', '24 mo'],
      datasets: [
        {
          label: 'Male Crested Gecko',
          data: [4, 8, 18, 28, 35, 42, 45],
          borderColor: '#8a9c30',
          backgroundColor: 'rgba(138, 156, 48, 0.25)',
          tension: 0.3,
          pointRadius: 5
        },
        {
          label: 'Female Crested Gecko',
          data: [5, 10, 20, 32, 40, 48, 52],
          borderColor: '#e1db66',
          backgroundColor: 'rgba(225, 219, 102, 0.25)',
          tension: 0.3,
          pointRadius: 5
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: '#f4f3ee'
          }
        },
        title: {
          display: true,
          text: 'Age vs Weight in Crested Geckos',
          color: '#f4f3ee',
          font: {
            size: 18
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Age',
            color: '#f4f3ee'
          },
          ticks: {
            color: '#f4f3ee'
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Weight (grams)',
            color: '#f4f3ee'
          },
          ticks: {
            color: '#f4f3ee'
          }
        }
      }
    }
  });
});
