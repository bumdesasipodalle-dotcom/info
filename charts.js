/**
 * Inisialisasi dan Manajemen Grafik Keuangan BUMDes Sipodalle Batetangnga Sejahtera
 * Menggunakan Chart.js & Menyesuaikan dengan Struktur PPAK BUMDes
 */

let trendChartInstance = null;
let unitContributionChartInstance = null;
let profitDistributionChartInstance = null;

function getChartColors(isDark) {
  return {
    textColor: isDark ? '#94a3b8' : '#64748b',
    gridColor: isDark ? 'rgba(51, 65, 85, 0.4)' : 'rgba(226, 232, 240, 0.8)',
    tooltipBg: isDark ? '#1e293b' : '#0f172a',
    tooltipText: '#ffffff'
  };
}

function initFinancialCharts(isDark = false) {
  const c = getChartColors(isDark);
  const finData = (window.App && window.App.data) ? window.App.data.financialReports : BUMDES_DATA.financialReports;

  // 1. Line Chart: Tren Pendapatan Pasar, Ikan Nila & Laba Bersih
  const ctxTrends = document.getElementById('monthlyTrendsChart');
  if (ctxTrends) {
    if (trendChartInstance) trendChartInstance.destroy();

    trendChartInstance = new Chart(ctxTrends, {
      type: 'line',
      data: {
        labels: finData.monthlyTrends.months,
        datasets: [
          {
            label: 'Pendapatan Pasar Desa',
            data: finData.monthlyTrends.revenuePasar,
            borderColor: '#059669',
            backgroundColor: 'rgba(5, 150, 105, 0.15)',
            fill: true,
            tension: 0.35,
            borderWidth: 2.5,
            pointBackgroundColor: '#059669',
            pointRadius: 4.5
          },
          {
            label: 'Pendapatan Budidaya Ikan Nila',
            data: finData.monthlyTrends.revenueIkan,
            borderColor: '#0284c7',
            backgroundColor: 'rgba(2, 132, 199, 0.15)',
            fill: true,
            tension: 0.35,
            borderWidth: 2.5,
            pointBackgroundColor: '#0284c7',
            pointRadius: 4.5
          },
          {
            label: 'Laba Bersih BUMDes',
            data: finData.monthlyTrends.netProfit,
            borderColor: '#10b981',
            backgroundColor: 'transparent',
            tension: 0.35,
            borderWidth: 3,
            pointBackgroundColor: '#10b981',
            pointRadius: 5
          },
          {
            label: 'Total Beban Usaha',
            data: finData.monthlyTrends.totalExpenses,
            borderColor: '#f43f5e',
            backgroundColor: 'transparent',
            borderDash: [4, 4],
            tension: 0.35,
            borderWidth: 2,
            pointBackgroundColor: '#f43f5e',
            pointRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: c.textColor,
              font: { family: "'Plus Jakarta Sans', sans-serif", weight: '600', size: 11.5 },
              usePointStyle: true,
              boxWidth: 8
            }
          },
          tooltip: {
            backgroundColor: c.tooltipBg,
            titleColor: c.tooltipText,
            bodyColor: c.tooltipText,
            padding: 12,
            cornerRadius: 8,
            callbacks: {
              label: function(context) {
                return ` ${context.dataset.label}: Rp ${context.parsed.y} Juta`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: c.gridColor },
            ticks: { color: c.textColor, font: { family: "'Plus Jakarta Sans', sans-serif" } }
          },
          y: {
            grid: { color: c.gridColor },
            ticks: {
              color: c.textColor,
              font: { family: "'Plus Jakarta Sans', sans-serif" },
              callback: value => `Rp ${value} Jt`
            }
          }
        }
      }
    });
  }

  // 2. Doughnut Chart: Kontribusi 2 Unit Usaha (Pasar vs Budidaya Ikan Nila)
  const ctxUnit = document.getElementById('unitContributionChart');
  if (ctxUnit) {
    if (unitContributionChartInstance) unitContributionChartInstance.destroy();

    const unitLabels = finData.unitContributions.map(u => u.name);
    const unitValues = finData.unitContributions.map(u => u.revenue);
    const unitColors = finData.unitContributions.map(u => u.color);

    unitContributionChartInstance = new Chart(ctxUnit, {
      type: 'doughnut',
      data: {
        labels: unitLabels,
        datasets: [{
          data: unitValues,
          backgroundColor: unitColors,
          borderWidth: 3,
          borderColor: isDark ? '#0f172a' : '#ffffff',
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: c.textColor,
              font: { family: "'Plus Jakarta Sans', sans-serif", size: 11.5, weight: '600' },
              padding: 14,
              usePointStyle: true
            }
          },
          tooltip: {
            backgroundColor: c.tooltipBg,
            titleColor: c.tooltipText,
            bodyColor: c.tooltipText,
            padding: 12,
            cornerRadius: 8,
            callbacks: {
              label: function(context) {
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const val = context.raw;
                const pct = ((val / total) * 100).toFixed(1);
                return ` ${context.label}: Rp ${val} Juta (${pct}%)`;
              }
            }
          }
        },
        cutout: '65%'
      }
    });
  }

  // 3. Bar Chart: Pembagian Hasil Usaha / PADes Sesuai PPAK
  const ctxProfit = document.getElementById('profitDistributionChart');
  if (ctxProfit) {
    if (profitDistributionChartInstance) profitDistributionChartInstance.destroy();

    const pLabels = finData.profitDistribution.map(p => p.label);
    const pValues = finData.profitDistribution.map(p => p.amount / 1000000); // dalam juta
    const pColors = finData.profitDistribution.map(p => p.color);

    profitDistributionChartInstance = new Chart(ctxProfit, {
      type: 'bar',
      data: {
        labels: pLabels,
        datasets: [{
          label: 'Alokasi Dana (Juta Rp)',
          data: pValues,
          backgroundColor: pColors,
          borderRadius: 8,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: c.tooltipBg,
            titleColor: c.tooltipText,
            bodyColor: c.tooltipText,
            padding: 12,
            cornerRadius: 8,
            callbacks: {
              label: function(context) {
                return ` Nominal: Rp ${context.parsed.x.toLocaleString('id-ID')} Juta (${finData.profitDistribution[context.dataIndex].percentage}%)`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: c.gridColor },
            ticks: {
              color: c.textColor,
              font: { family: "'Plus Jakarta Sans', sans-serif" },
              callback: value => `Rp ${value} Jt`
            }
          },
          y: {
            grid: { display: false },
            ticks: { color: c.textColor, font: { family: "'Plus Jakarta Sans', sans-serif", weight: '600', size: 11.5 } }
          }
        }
      }
    });
  }

  // 4. Mini Dashboard Chart: Perkembangan Modal & Pendapatan (Persis Laptop Mockup)
  initDashboardMiniChart(isDark);
}

let dashMiniChartInstance = null;

function initDashboardMiniChart(isDark = false) {
  const ctxDashMini = document.getElementById('dashMiniChart');
  if (!ctxDashMini) return;

  const c = getChartColors(isDark);
  const finData = (window.App && window.App.data) ? window.App.data.financialReports : BUMDES_DATA.financialReports;

  if (dashMiniChartInstance) dashMiniChartInstance.destroy();

  dashMiniChartInstance = new Chart(ctxDashMini, {
    type: 'line',
    data: {
      labels: ['Des 25', 'Jan 26', 'Feb 26', 'Mar 26', 'Apr 26'],
      datasets: [
        {
          label: 'Tren Omzet & Saldo Kas (Juta Rp)',
          data: [78.2, 92.5, 99.8, 104.2, 107.6],
          borderColor: '#fbbf24',
          backgroundColor: 'rgba(251, 191, 36, 0.15)',
          fill: true,
          tension: 0.45,
          borderWidth: 3,
          pointBackgroundColor: '#fbbf24',
          pointRadius: 4,
          pointHoverRadius: 6
        },
        {
          label: 'Laba Bersih Berjalan (Juta Rp)',
          data: [42.1, 50.7, 58.3, 62.4, 66.8],
          borderColor: '#34d399',
          backgroundColor: 'rgba(52, 211, 153, 0.12)',
          fill: true,
          tension: 0.45,
          borderWidth: 2.5,
          pointBackgroundColor: '#34d399',
          pointRadius: 3.5
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: '#a7f3d0',
            font: { size: 10.5, family: "'Plus Jakarta Sans', sans-serif", weight: '600' },
            boxWidth: 10
          }
        },
        tooltip: {
          backgroundColor: '#064e3b',
          titleColor: '#ffffff',
          bodyColor: '#ffffff',
          padding: 8
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255, 255, 255, 0.08)' },
          ticks: { color: '#a7f3d0', font: { size: 10 } }
        },
        y: {
          grid: { color: 'rgba(255, 255, 255, 0.08)' },
          ticks: {
            color: '#a7f3d0',
            font: { size: 10 },
            callback: v => `Rp ${v} Jt`
          }
        }
      }
    }
  });
}

function updateChartsTheme(isDark) {
  initFinancialCharts(isDark);
  initDashboardMiniChart(isDark);
}

