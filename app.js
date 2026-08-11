/**
 * BUMDes Sipodalle Batetangnga Sejahtera - Main SPA App Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

const App = {
  currentView: 'dashboard',
  currentTheme: localStorage.getItem('bumdes_theme') || 'light',
  customFinancialUrl: localStorage.getItem('bumdes_fin_app_url') || BUMDES_DATA.financialAppConfig.defaultAppUrl,

  init() {
    this.applyTheme(this.currentTheme);
    this.setupEventListeners();
    this.renderAllViews();
    this.setupFinancialUrlDisplay();
    this.initCounters();
    this.handleInitialRoute();

    // Inisialisasi mini chart dashboard
    setTimeout(() => {
      if (typeof initDashboardMiniChart === 'function') {
        initDashboardMiniChart(this.currentTheme === 'dark');
      }
    }, 150);
  },

  // ==========================================
  // 1. SPA ROUTING & NAVIGATION
  // ==========================================
  navigate(viewId) {
    if (!viewId) return;

    // Update active nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('data-view') === viewId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update views with smooth fade transition
    document.querySelectorAll('.view-section').forEach(sec => {
      sec.classList.remove('active-view');
    });

    const targetSection = document.getElementById(`view-${viewId}`);
    if (targetSection) {
      targetSection.classList.add('active-view');
      this.currentView = viewId;
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // If opening dashboard view, initialize mini chart
      if (viewId === 'dashboard') {
        setTimeout(() => {
          if (typeof initDashboardMiniChart === 'function') {
            initDashboardMiniChart(this.currentTheme === 'dark');
          }
        }, 100);
      }

      // If opening finance view, initialize charts
      if (viewId === 'finance') {
        setTimeout(() => {
          if (typeof initFinancialCharts === 'function') {
            initFinancialCharts(this.currentTheme === 'dark');
          }
        }, 100);
      }

      // If opening news view, reset to news list
      if (viewId === 'news') {
        const listView = document.getElementById('newsListView');
        const articleView = document.getElementById('newsDetailArticleView');
        if (listView && articleView) {
          listView.style.display = 'block';
          articleView.style.display = 'none';
        }
      }

      // Close mobile menu if open
      const mobileNav = document.getElementById('navMenu');
      if (mobileNav && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
      }
    }
  },

  handleInitialRoute() {
    const hash = window.location.hash.replace('#', '').replace('view-', '');
    if (['dashboard', 'profile', 'news', 'events', 'finance'].includes(hash)) {
      this.navigate(hash);
    } else {
      this.navigate('dashboard');
    }
  },

  // ==========================================
  // 2. THEME SWITCHER (DARK / LIGHT)
  // ==========================================
  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.currentTheme = theme;
    localStorage.setItem('bumdes_theme', theme);

    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' 
        ? '<i class="fa-solid fa-sun" style="color: #fbbf24;"></i>' 
        : '<i class="fa-solid fa-moon"></i>';
    }

    if (this.currentView === 'finance' && typeof updateChartsTheme === 'function') {
      updateChartsTheme(theme === 'dark');
    }
  },

  toggleTheme() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);
    this.showToast(`Mode tampilan diubah ke ${newTheme === 'dark' ? 'Gelap' : 'Terang'}`);
  },

  // ==========================================
  // 3. EVENT LISTENERS
  // ==========================================
  setupEventListeners() {
    // Navigation clicks & Dropdown anchor targets
    document.querySelectorAll('[data-view]').forEach(elem => {
      elem.addEventListener('click', (e) => {
        e.preventDefault();
        const view = elem.getAttribute('data-view');
        const anchor = elem.getAttribute('data-target-anchor');
        this.navigate(view);
        window.location.hash = view;

        if (anchor) {
          setTimeout(() => {
            const targetEl = document.getElementById(anchor);
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 150);
        }
      });
    });

    // Theme toggle
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => this.toggleTheme());
    }

    // Mobile menu drawer
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    if (mobileBtn && navMenu) {
      mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
      });
    }

    // News Filter & Search
    const searchNews = document.getElementById('newsSearchInput');
    if (searchNews) {
      searchNews.addEventListener('input', () => this.filterNews());
    }

    document.querySelectorAll('.news-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.news-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.filterNews();
      });
    });

    // Events Filter
    document.querySelectorAll('.event-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.event-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.filterEvents();
      });
    });

    // Financial App Quick Actions
    const btnOpenFinApp = document.getElementById('btnOpenFinApp');
    if (btnOpenFinApp) {
      btnOpenFinApp.addEventListener('click', () => this.openFinancialApp());
    }

    const btnQuickFinNav = document.getElementById('btnQuickFinNav');
    if (btnQuickFinNav) {
      btnQuickFinNav.addEventListener('click', () => this.openFinancialApp());
    }

    const btnConfigFin = document.getElementById('btnConfigFinLink');
    if (btnConfigFin) {
      btnConfigFin.addEventListener('click', () => this.openConfigModal());
    }

    const btnCopyFinLink = document.getElementById('btnCopyFinLink');
    if (btnCopyFinLink) {
      btnCopyFinLink.addEventListener('click', () => this.copyFinancialLink());
    }

    // Modal Close buttons
    document.querySelectorAll('.modal-close-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        this.closeAllModals();
      });
    });

    // Close modal on outside click
    document.querySelectorAll('.modal-backdrop').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.closeAllModals();
        }
      });
    });

    // Config form submit
    const configForm = document.getElementById('finConfigForm');
    if (configForm) {
      configForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.saveCustomFinancialUrl();
      });
    }

    const btnResetConfig = document.getElementById('btnResetFinUrl');
    if (btnResetConfig) {
      btnResetConfig.addEventListener('click', () => {
        document.getElementById('inputFinUrl').value = BUMDES_DATA.financialAppConfig.defaultAppUrl;
      });
    }

    // Download simulated reports
    const btnDownloadPDF = document.getElementById('btnDownloadPDF');
    if (btnDownloadPDF) {
      btnDownloadPDF.addEventListener('click', () => {
        this.showToast('Menyiapkan berkas Laporan Keuangan format PDF...');
        setTimeout(() => {
          this.showToast('✓ Laporan Keuangan BUMDes Sipodalle (PDF) berhasil diunduh');
        }, 1200);
      });
    }

    const btnDownloadExcel = document.getElementById('btnDownloadExcel');
    if (btnDownloadExcel) {
      btnDownloadExcel.addEventListener('click', () => {
        this.showToast('Mengekspor data buku besar & neraca ke Excel...');
        setTimeout(() => {
          this.showToast('✓ Data Keuangan Format Excel (.xlsx) berhasil diekspor');
        }, 1200);
      });
    }
  },

  // ==========================================
  // 4. RENDERING VIEWS
  // ==========================================
  renderAllViews() {
    this.renderUnits();
    this.renderTeam();
    this.renderNews(BUMDES_DATA.news);
    this.renderEvents(BUMDES_DATA.events);
    this.renderFinancialTables();
  },

  // Render Business Units (2 Units)
  renderUnits() {
    const container = document.getElementById('unitsContainer');
    const profileUnitsContainer = document.getElementById('profileUnitsContainer');
    if (!container && !profileUnitsContainer) return;

    const cardsHtml = BUMDES_DATA.businessUnits.map(unit => `
      <div class="unit-card">
        <div class="unit-img-wrapper">
          <img src="${unit.image}" alt="${unit.title}" loading="lazy">
          <span class="unit-category-badge">${unit.category}</span>
          <span class="unit-status-badge"><i class="fa-solid fa-circle-check"></i> ${unit.status}</span>
        </div>
        <div class="unit-body">
          <h4 class="unit-title">${unit.title}</h4>
          <p class="unit-desc">${unit.description}</p>
          <ul class="unit-highlights">
            ${unit.highlights.map(h => `<li><i class="fa-solid fa-check"></i> ${h}</li>`).join('')}
          </ul>
          <div class="unit-footer">
            <span class="unit-omzet-tag"><i class="fa-solid fa-chart-line"></i> Omset: ${unit.omzetYear}</span>
            <span class="badge badge-emerald">${unit.growth}</span>
          </div>
        </div>
      </div>
    `).join('');

    if (container) container.innerHTML = cardsHtml;
    if (profileUnitsContainer) profileUnitsContainer.innerHTML = cardsHtml;
  },

  // Render Organization Team
  renderTeam() {
    const container = document.getElementById('teamContainer');
    if (!container) return;

    container.innerHTML = BUMDES_DATA.team.map(member => `
      <div class="team-card">
        <div class="team-img-wrapper">
          <img src="${member.image}" alt="${member.name}" loading="lazy">
          <span class="team-badge">${member.badge}</span>
        </div>
        <div class="team-body">
          <h4 class="team-name">${member.name}</h4>
          <div class="team-role">${member.role}</div>
          <p class="team-desc">${member.description}</p>
        </div>
      </div>
    `).join('');
  },

  // Render News
  renderNews(items) {
    const container = document.getElementById('newsContainer');
    const dashboardNewsContainer = document.getElementById('dashboardNewsContainer');

    if (container) {
      if (items.length === 0) {
        container.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-surface-elevated); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
            <i class="fa-regular fa-newspaper" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
            <h4>Tidak ada berita ditemukan</h4>
            <p>Silakan coba kata kunci atau filter kategori lainnya.</p>
          </div>
        `;
      } else {
        container.innerHTML = items.map(news => `
          <article class="news-card">
            <div class="news-img-wrap">
              <img src="${news.image}" alt="${news.title}" loading="lazy">
              <span class="badge badge-emerald" style="position: absolute; top: 1rem; left: 1rem; backdrop-filter: blur(8px);">${news.category}</span>
            </div>
            <div class="news-body">
              <div class="news-meta">
                <span><i class="fa-regular fa-calendar"></i> ${news.date}</span>
                <span><i class="fa-regular fa-clock"></i> ${news.readTime}</span>
              </div>
              <h4 class="news-title">${news.title}</h4>
              <p class="news-summary">${news.summary}</p>
              <button class="btn-read-news" onclick="App.openNewsDetail('${news.id}')">
                Baca Selengkapnya <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </article>
        `).join('');
      }
    }

    if (dashboardNewsContainer) {
      dashboardNewsContainer.innerHTML = BUMDES_DATA.news.slice(0, 4).map(news => `
        <div class="dash-news-card-v2" onclick="App.openNewsDetail('${news.id}')">
          <div class="dnc-img-wrap">
            <img src="${news.image}" alt="${news.title}" loading="lazy">
          </div>
          <div class="dnc-body">
            <div class="dnc-meta"><i class="fa-regular fa-calendar"></i> ${news.date} • <span style="color: #059669; font-weight: 700;">${news.category}</span></div>
            <h4 class="dnc-title">${news.title}</h4>
            <p class="dnc-desc">${news.summary}</p>
          </div>
        </div>
      `).join('');
    }
  },

  filterNews() {
    const searchVal = (document.getElementById('newsSearchInput')?.value || '').toLowerCase().trim();
    const activeCategory = document.querySelector('.news-filter-btn.active')?.getAttribute('data-category') || 'all';

    const filtered = BUMDES_DATA.news.filter(item => {
      const matchCat = (activeCategory === 'all') || (item.category.toLowerCase() === activeCategory.toLowerCase());
      const matchSearch = item.title.toLowerCase().includes(searchVal) || item.summary.toLowerCase().includes(searchVal);
      return matchCat && matchSearch;
    });

    this.renderNews(filtered);
  },

  openNewsDetail(newsId) {
    const news = BUMDES_DATA.news.find(n => n.id === newsId);
    if (!news) return;

    // Switch to news view if currently in another view
    if (this.currentView !== 'news') {
      this.navigate('news');
    }

    const listView = document.getElementById('newsListView');
    const articleView = document.getElementById('newsDetailArticleView');
    const contentContainer = document.getElementById('inlineArticleContent');

    if (listView && articleView && contentContainer) {
      listView.style.display = 'none';
      articleView.style.display = 'block';

      contentContainer.innerHTML = `
        <div style="margin-bottom: 2rem; border-radius: var(--radius-lg); overflow: hidden; max-height: 440px; box-shadow: var(--shadow-md);">
          <img src="${news.image}" alt="${news.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;">
        </div>
        <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1.25rem; flex-wrap: wrap;">
          <span class="badge badge-emerald"><i class="fa-solid fa-tag"></i> ${news.category}</span>
          <span style="font-size: 0.875rem; color: var(--text-muted);"><i class="fa-regular fa-calendar"></i> ${news.date}</span>
          <span style="font-size: 0.875rem; color: var(--text-muted);"><i class="fa-regular fa-user"></i> Penulis: ${news.author}</span>
          <span style="font-size: 0.875rem; color: var(--text-muted);"><i class="fa-regular fa-clock"></i> ${news.readTime}</span>
        </div>
        <h1 style="font-size: 2.25rem; font-weight: 800; margin-bottom: 1.75rem; line-height: 1.25; color: var(--text-main);">${news.title}</h1>
        <div style="color: var(--text-main); font-size: 1.1rem; line-height: 1.85; white-space: pre-line; letter-spacing: -0.01em;">
          ${news.content}
        </div>
      `;

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  closeNewsDetail() {
    const listView = document.getElementById('newsListView');
    const articleView = document.getElementById('newsDetailArticleView');

    if (listView && articleView) {
      articleView.style.display = 'none';
      listView.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  // Render Events
  renderEvents(items) {
    const container = document.getElementById('eventsContainer');
    const dashboardEventsContainer = document.getElementById('dashboardEventsContainer');

    const getStatusClass = (status) => {
      if (status === 'Mendatang') return 'status-mendatang';
      if (status === 'Berlangsung') return 'status-berlangsung';
      return 'status-selesai';
    };

    if (container) {
      if (items.length === 0) {
        container.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-surface-elevated); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
            <i class="fa-regular fa-calendar-xmark" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
            <h4>Tidak ada agenda ditemukan</h4>
          </div>
        `;
      } else {
        container.innerHTML = items.map(event => `
          <div class="event-card">
            <div class="event-img-wrap">
              <img src="${event.image}" alt="${event.title}" loading="lazy">
              <span class="event-status-badge ${getStatusClass(event.status)}">${event.statusBadge}</span>
            </div>
            <div class="event-body">
              <span class="badge badge-cyan" style="align-self: flex-start; margin-bottom: 0.5rem;">${event.category}</span>
              <h4 class="event-title">${event.title}</h4>
              <ul class="event-details-list">
                <li><i class="fa-regular fa-calendar"></i> ${event.date}</li>
                <li><i class="fa-regular fa-clock"></i> ${event.time}</li>
                <li><i class="fa-solid fa-location-dot"></i> ${event.location}</li>
                <li><i class="fa-solid fa-users"></i> ${event.participants}</li>
              </ul>
              <p class="event-desc">${event.description}</p>
            </div>
          </div>
        `).join('');
      }
    }

    if (dashboardEventsContainer) {
      dashboardEventsContainer.innerHTML = BUMDES_DATA.events.slice(0, 2).map(event => `
        <div class="event-card">
          <div class="event-img-wrap">
            <img src="${event.image}" alt="${event.title}" loading="lazy">
            <span class="event-status-badge ${getStatusClass(event.status)}">${event.statusBadge}</span>
          </div>
          <div class="event-body">
            <span class="badge badge-cyan" style="align-self: flex-start; margin-bottom: 0.5rem;">${event.category}</span>
            <h4 class="event-title">${event.title}</h4>
            <ul class="event-details-list">
              <li><i class="fa-regular fa-calendar"></i> ${event.date}</li>
              <li><i class="fa-regular fa-clock"></i> ${event.time}</li>
              <li><i class="fa-solid fa-location-dot"></i> ${event.location}</li>
            </ul>
            <p class="event-desc">${event.description}</p>
          </div>
        </div>
      `).join('');
    }
  },

  filterEvents() {
    const activeStatus = document.querySelector('.event-filter-btn.active')?.getAttribute('data-status') || 'all';
    const filtered = BUMDES_DATA.events.filter(item => {
      if (activeStatus === 'all') return true;
      return item.status.toLowerCase() === activeStatus.toLowerCase();
    });
    this.renderEvents(filtered);
  },

  // Render Financial Tables (Sesuai PPAK)
  renderFinancialTables() {
    const incomeBody = document.getElementById('incomeStatementTableBody');
    if (incomeBody) {
      const items = BUMDES_DATA.financialReports.incomeStatement;
      incomeBody.innerHTML = items.map(row => {
        let rowClass = '';
        let amountClass = '';
        let prefix = 'Rp ';

        if (row.type === 'income') {
          amountClass = 'amount-income';
        } else if (row.type === 'expense') {
          amountClass = 'amount-expense';
          prefix = '- Rp ';
        } else if (row.type.startsWith('subtotal')) {
          rowClass = 'row-subtotal';
        } else if (row.type === 'net_profit') {
          rowClass = 'row-highlight';
          amountClass = 'amount-income';
        }

        return `
          <tr class="${rowClass}">
            <td>${row.item}</td>
            <td class="text-right ${amountClass}">${prefix}${row.amount.toLocaleString('id-ID')}</td>
          </tr>
        `;
      }).join('');
    }

    const balanceBody = document.getElementById('balanceSheetTableBody');
    if (balanceBody) {
      const bs = BUMDES_DATA.financialReports.balanceSheet;
      balanceBody.innerHTML = `
        <tr class="row-subtotal"><td colspan="2">A. ASET & KEKAYAAN BUMDES</td></tr>
        ${bs.assets.currentAssets.map(a => `<tr><td style="padding-left: 1.5rem;">${a.name}</td><td class="text-right">Rp ${a.value.toLocaleString('id-ID')}</td></tr>`).join('')}
        ${bs.assets.fixedAssets.map(a => `<tr><td style="padding-left: 1.5rem;">${a.name}</td><td class="text-right">${a.value < 0 ? '- Rp ' + Math.abs(a.value).toLocaleString('id-ID') : 'Rp ' + a.value.toLocaleString('id-ID')}</td></tr>`).join('')}
        <tr class="row-highlight"><td>TOTAL ASET</td><td class="text-right">Rp ${bs.assets.totalAssets.toLocaleString('id-ID')}</td></tr>

        <tr class="row-subtotal"><td colspan="2">B. KEWAJIBAN & EKUITAS</td></tr>
        ${bs.liabilitiesAndEquity.liabilities.map(l => `<tr><td style="padding-left: 1.5rem;">${l.name}</td><td class="text-right">Rp ${l.value.toLocaleString('id-ID')}</td></tr>`).join('')}
        ${bs.liabilitiesAndEquity.equity.map(e => `<tr><td style="padding-left: 1.5rem;">${e.name}</td><td class="text-right">Rp ${e.value.toLocaleString('id-ID')}</td></tr>`).join('')}
        <tr class="row-highlight"><td>TOTAL KEWAJIBAN & EKUITAS</td><td class="text-right">Rp ${bs.liabilitiesAndEquity.totalLiabilitiesAndEquity.toLocaleString('id-ID')}</td></tr>
      `;
    }
  },

  // ==========================================
  // 5. FINANCIAL APP LINK INTEGRATION
  // ==========================================
  setupFinancialUrlDisplay() {
    const urlDisplays = document.querySelectorAll('.dynamic-fin-url');
    urlDisplays.forEach(elem => {
      elem.textContent = this.customFinancialUrl;
    });

    const inputFinUrl = document.getElementById('inputFinUrl');
    if (inputFinUrl) {
      inputFinUrl.value = this.customFinancialUrl;
    }
  },

  openFinancialApp() {
    this.showToast(`Membuka Sistem PPAK BUMDes Sipodalle...`);
    window.open(this.customFinancialUrl, '_blank', 'noopener,noreferrer');
  },

  copyFinancialLink() {
    navigator.clipboard.writeText(this.customFinancialUrl).then(() => {
      this.showToast('✓ Link PPAK Google Apps Script disalin ke clipboard');
    }).catch(() => {
      this.showToast('Salin link: ' + this.customFinancialUrl);
    });
  },

  openConfigModal() {
    const modal = document.getElementById('finConfigModal');
    const input = document.getElementById('inputFinUrl');
    if (input) input.value = this.customFinancialUrl;
    if (modal) modal.classList.add('show');
  },

  saveCustomFinancialUrl() {
    const input = document.getElementById('inputFinUrl');
    if (!input) return;

    let url = input.value.trim();
    if (!url) {
      this.showToast('⚠️ Mohon masukkan URL link aplikasi keuangan');
      return;
    }

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }

    this.customFinancialUrl = url;
    localStorage.setItem('bumdes_fin_app_url', url);
    this.setupFinancialUrlDisplay();
    this.closeAllModals();
    this.showToast('✓ Endpoint Google Apps Script PPAK berhasil diperbarui!');
  },

  closeAllModals() {
    document.querySelectorAll('.modal-backdrop').forEach(modal => {
      modal.classList.remove('show');
    });
  },

  // ==========================================
  // 6. DYNAMIC COUNTER ANIMATION
  // ==========================================
  initCounters() {
    const counters = document.querySelectorAll('.stat-count');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const prefix = counter.getAttribute('data-prefix') || '';
      const suffix = counter.getAttribute('data-suffix') || '';
      let count = 0;

      const updateCount = () => {
        const increment = Math.ceil(target / 40);
        count += increment;

        if (count < target) {
          counter.innerText = prefix + count.toLocaleString('id-ID') + suffix;
          setTimeout(updateCount, 25);
        } else {
          counter.innerText = prefix + target.toLocaleString('id-ID') + suffix;
        }
      };

      updateCount();
    });
  },

  // ==========================================
  // 7. TOAST NOTIFICATION
  // ==========================================
  showToast(message) {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-info" style="color: var(--primary-500);"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
};
