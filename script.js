/* ============================================================
   MENTOR DOS 1% — script.js
   IndexedDB CRUD, UI, Tradução, Chart, Mentor IA
   ============================================================ */

// ===== TRANSLATIONS =====
const LANG = {
  pt: {
    siteTitle: "Mentor dos 1%",
    siteSubtitle: "Plataforma de Renda Online",
    navDashboard: "Dashboard",
    navLearn: "Aprendizado",
    navPlanner: "Planejamento",
    navEarnings: "Ganhos",
    navMentor: "Mentor IA",
    navGoals: "Metas",
    dashTitle: "Dashboard",
    dashDesc: "Acompanhe seu progresso rumo ao 1%",
    learnTitle: "Área de Aprendizado",
    learnDesc: "Métodos reais para gerar renda online",
    plannerTitle: "Planejamento Diário",
    plannerDesc: "Organize sua rotina e seja consistente",
    earningsTitle: "Registro de Ganhos",
    earningsDesc: "Registre cada centavo conquistado",
    mentorTitle: "Mentor Inteligente",
    mentorDesc: "Orientação personalizada baseada no seu comportamento",
    goalsTitle: "Metas Semanais",
    goalsDesc: "Defina e acompanhe suas metas",
    statTotal: "Total Ganho",
    statAvg: "Média Diária",
    statBest: "Melhor Dia",
    statDays: "Dias Ativos",
    chartTitle: "Evolução de Ganhos",
    todayTasks: "Tarefas de Hoje",
    addTask: "Adicionar",
    myTasks: "Minhas Tarefas",
    addEarning: "Registrar",
    history: "Histórico de Ganhos",
    ask: "Perguntar",
    addGoal: "Adicionar Meta",
    loading: "Analisando seu progresso...",
    taskPh: "Descrição da tarefa...",
    sourcePh: "Fonte (ex: Freelancing)...",
    mentorPh: "Pergunte ao seu mentor...",
    goalPh: "Descreva sua meta...",
    noTasks: "Nenhuma tarefa para hoje.",
    noEarnings: "Nenhum ganho registrado ainda.",
    noGoals: "Nenhuma meta criada ainda.",
    deleteConfirm: "Tem certeza que deseja apagar todos os dados?",
    resetDone: "Dados apagados com sucesso!",
    taskAdded: "✔ Tarefa adicionada!",
    earningAdded: "✔ Ganho registrado!",
    goalAdded: "✔ Meta adicionada!",
    goalUpdated: "✔ Progresso atualizado!",
    fillAll: "⚠ Preencha todos os campos.",
    target: "Meta",
    progress: "Progresso",
    of: "de",
    achieved: "Conquistado!",
    updateProgress: "Atualizar",
    currentProgress: "Progresso atual ($)...",
  },
  en: {
    siteTitle: "Mentor of 1%",
    siteSubtitle: "Online Income Platform",
    navDashboard: "Dashboard",
    navLearn: "Learning",
    navPlanner: "Planner",
    navEarnings: "Earnings",
    navMentor: "AI Mentor",
    navGoals: "Goals",
    dashTitle: "Dashboard",
    dashDesc: "Track your progress toward the top 1%",
    learnTitle: "Learning Center",
    learnDesc: "Real methods to generate income online",
    plannerTitle: "Daily Planner",
    plannerDesc: "Organize your routine and stay consistent",
    earningsTitle: "Earnings Log",
    earningsDesc: "Record every dollar earned",
    mentorTitle: "Smart Mentor",
    mentorDesc: "Personalized guidance based on your behavior",
    goalsTitle: "Weekly Goals",
    goalsDesc: "Set and track your goals",
    statTotal: "Total Earned",
    statAvg: "Daily Average",
    statBest: "Best Day",
    statDays: "Active Days",
    chartTitle: "Earnings Over Time",
    todayTasks: "Today's Tasks",
    addTask: "Add",
    myTasks: "My Tasks",
    addEarning: "Record",
    history: "Earnings History",
    ask: "Ask",
    addGoal: "Add Goal",
    loading: "Analyzing your progress...",
    taskPh: "Task description...",
    sourcePh: "Source (e.g., Freelancing)...",
    mentorPh: "Ask your mentor...",
    goalPh: "Describe your goal...",
    noTasks: "No tasks for today.",
    noEarnings: "No earnings recorded yet.",
    noGoals: "No goals created yet.",
    deleteConfirm: "Are you sure you want to delete all data?",
    resetDone: "Data cleared successfully!",
    taskAdded: "✔ Task added!",
    earningAdded: "✔ Earning recorded!",
    goalAdded: "✔ Goal added!",
    goalUpdated: "✔ Progress updated!",
    fillAll: "⚠ Please fill all fields.",
    target: "Target",
    progress: "Progress",
    of: "of",
    achieved: "Achieved!",
    updateProgress: "Update",
    currentProgress: "Current progress ($)...",
  }
};

// ===== METHODS DATA =====
const METHODS = {
  pt: [
    {
      id: 1, icon: "💻", name: "Freelancing",
      brief: "Venda seus serviços e habilidades para clientes ao redor do mundo.",
      desc: "Freelancing é a arte de oferecer seus talentos — design, escrita, programação, tradução — a clientes sem vínculos empregatícios. Você define horários, preços e clientes.",
      steps: ["Identifique sua habilidade principal", "Crie um portfólio simples (mesmo que básico)", "Cadastre-se em Upwork, Fiverr ou Workana", "Aplique para 5 projetos por dia inicialmente", "Construa avaliações positivas e suba os preços"],
      diff: "Iniciante", time: "1–3 meses"
    },
    {
      id: 2, icon: "📦", name: "Dropshipping",
      brief: "Venda produtos sem precisar de estoque. O fornecedor envia direto ao cliente.",
      desc: "No dropshipping você cria uma loja online, escolhe produtos de um fornecedor e quando alguém compra, o fornecedor envia diretamente. Você fica com a margem.",
      steps: ["Escolha um nicho lucrativo", "Encontre fornecedores (AliExpress, CJ Dropshipping)", "Crie uma loja (Shopify ou WooCommerce)", "Configure anúncios (Facebook/TikTok Ads)", "Otimize com base nas vendas"],
      diff: "Intermediário", time: "2–6 meses"
    },
    {
      id: 3, icon: "🔗", name: "Marketing de Afiliados",
      brief: "Ganhe comissões indicando produtos de outras empresas.",
      desc: "Você promove produtos de terceiros e recebe uma comissão por cada venda feita através do seu link exclusivo. Não precisa criar nada — só divulgar certo.",
      steps: ["Cadastre-se em plataformas (Hotmart, Amazon, Monetizze)", "Escolha produtos com boa comissão e demanda", "Crie conteúdo que resolve problemas do público", "Insira links de afiliado estrategicamente", "Escale com tráfego pago ou SEO"],
      diff: "Iniciante", time: "1–4 meses"
    },
    {
      id: 4, icon: "⌨️", name: "Programação",
      brief: "Desenvolva apps, sites e sistemas. Alta demanda e ótima remuneração.",
      desc: "Programação é uma das habilidades mais valiosas do século XXI. Com ela você pode criar produtos próprios, trabalhar como freelancer, ou ser contratado remotamente por empresas do mundo inteiro.",
      steps: ["Escolha uma linguagem (Python, JavaScript ou Flutter)", "Estude pelo menos 2h por dia com projetos práticos", "Complete 3–5 projetos de portfólio no GitHub", "Aplique para vagas júnior remotas", "Suba para pleno/sênior em 1–2 anos"],
      diff: "Avançado", time: "4–12 meses"
    },
    {
      id: 5, icon: "📱", name: "Criação de Conteúdo",
      brief: "Construa uma audiência e monetize através de marcas, produtos e plataformas.",
      desc: "Criadores de conteúdo constroem audiências em torno de nichos específicos e depois monetizam através de patrocínios, produtos digitais, cursos, YouTube AdSense e mais.",
      steps: ["Defina um nicho específico (não genérico)", "Publique consistentemente por 90 dias seguidos", "Aprenda edição básica de vídeo ou design", "Ative monetização nas plataformas (YouTube, TikTok)", "Faça parcerias com marcas do seu nicho"],
      diff: "Intermediário", time: "3–9 meses"
    }
  ],
  en: [
    {
      id: 1, icon: "💻", name: "Freelancing",
      brief: "Sell your skills and services to clients around the world.",
      desc: "Freelancing is the art of offering your talents — design, writing, coding, translation — to clients without employment ties. You set your own schedule, rates, and clients.",
      steps: ["Identify your main skill", "Build a simple portfolio (even if basic)", "Sign up on Upwork, Fiverr, or Freelancer", "Apply to 5 projects per day initially", "Build positive reviews and raise your prices"],
      diff: "Beginner", time: "1–3 months"
    },
    {
      id: 2, icon: "📦", name: "Dropshipping",
      brief: "Sell products without inventory. The supplier ships directly to the customer.",
      desc: "In dropshipping you create an online store, choose products from a supplier, and when someone buys, the supplier ships directly. You keep the margin.",
      steps: ["Choose a profitable niche", "Find suppliers (AliExpress, CJ Dropshipping)", "Create a store (Shopify or WooCommerce)", "Set up ads (Facebook/TikTok Ads)", "Optimize based on sales data"],
      diff: "Intermediate", time: "2–6 months"
    },
    {
      id: 3, icon: "🔗", name: "Affiliate Marketing",
      brief: "Earn commissions by promoting other companies' products.",
      desc: "You promote third-party products and earn a commission for every sale made through your unique link. No need to create anything — just promote correctly.",
      steps: ["Sign up on platforms (Amazon, ClickBank, ShareASale)", "Choose products with good commissions and demand", "Create content that solves your audience's problems", "Insert affiliate links strategically", "Scale with paid traffic or SEO"],
      diff: "Beginner", time: "1–4 months"
    },
    {
      id: 4, icon: "⌨️", name: "Programming",
      brief: "Build apps, websites, and systems. High demand and great pay.",
      desc: "Programming is one of the most valuable skills of the 21st century. With it you can create your own products, freelance, or be hired remotely by companies worldwide.",
      steps: ["Choose a language (Python, JavaScript, or Flutter)", "Study at least 2h/day with practical projects", "Complete 3–5 portfolio projects on GitHub", "Apply for junior remote positions", "Level up to mid/senior in 1–2 years"],
      diff: "Advanced", time: "4–12 months"
    },
    {
      id: 5, icon: "📱", name: "Content Creation",
      brief: "Build an audience and monetize through brands, products, and platforms.",
      desc: "Content creators build audiences around specific niches and then monetize through sponsorships, digital products, courses, YouTube AdSense, and more.",
      steps: ["Define a specific niche (not generic)", "Post consistently for 90 days straight", "Learn basic video editing or design", "Enable monetization on platforms (YouTube, TikTok)", "Partner with brands in your niche"],
      diff: "Intermediate", time: "3–9 months"
    }
  ]
};

// ===== STATE =====
let currentLang = localStorage.getItem('mentor_lang') || 'pt';
let currentTheme = localStorage.getItem('mentor_theme') || 'dark';
let earningsChart = null;
let db = null;

// ===== DB INIT =====
function initDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('MentorDB', 1);
    req.onupgradeneeded = (e) => {
      const d = e.target.result;
      if (!d.objectStoreNames.contains('tasks'))
        d.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });
      if (!d.objectStoreNames.contains('earnings'))
        d.createObjectStore('earnings', { keyPath: 'id', autoIncrement: true });
      if (!d.objectStoreNames.contains('goals'))
        d.createObjectStore('goals', { keyPath: 'id', autoIncrement: true });
    };
    req.onsuccess = (e) => { db = e.target.result; resolve(); };
    req.onerror = () => reject(req.error);
  });
}

// ===== DB CRUD =====
function dbAdd(store, data) {
  return new Promise((res, rej) => {
    const tx = db.transaction(store, 'readwrite');
    const req = tx.objectStore(store).add(data);
    req.onsuccess = () => res(req.result);
    req.onerror = () => rej(req.error);
  });
}
function dbGetAll(store) {
  return new Promise((res, rej) => {
    const tx = db.transaction(store, 'readonly');
    const req = tx.objectStore(store).getAll();
    req.onsuccess = () => res(req.result);
    req.onerror = () => rej(req.error);
  });
}
function dbUpdate(store, data) {
  return new Promise((res, rej) => {
    const tx = db.transaction(store, 'readwrite');
    const req = tx.objectStore(store).put(data);
    req.onsuccess = () => res();
    req.onerror = () => rej(req.error);
  });
}
function dbDelete(store, id) {
  return new Promise((res, rej) => {
    const tx = db.transaction(store, 'readwrite');
    const req = tx.objectStore(store).delete(id);
    req.onsuccess = () => res();
    req.onerror = () => rej(req.error);
  });
}
function dbClearAll() {
  return new Promise((res) => {
    const stores = ['tasks', 'earnings', 'goals'];
    let done = 0;
    stores.forEach(s => {
      const tx = db.transaction(s, 'readwrite');
      tx.objectStore(s).clear().onsuccess = () => { if (++done === stores.length) res(); };
    });
  });
}

// ===== TRANSLATION =====
function t(key) { return (LANG[currentLang] && LANG[currentLang][key]) || LANG.pt[key] || key; }

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    el.placeholder = t(key);
  });
  document.getElementById('langLabel').textContent = currentLang === 'pt' ? 'EN' : 'PT';
}

function toggleLang() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  localStorage.setItem('mentor_lang', currentLang);
  applyTranslations();
  renderMethods();
  renderTasks();
  renderEarnings();
  renderGoals();
  renderDashboard();
  updateMentorMessage();
}

// ===== THEME =====
function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  document.getElementById('themeIcon').textContent = currentTheme === 'dark' ? '☀' : '☾';
  if (earningsChart) updateChart();
}
function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('mentor_theme', currentTheme);
  applyTheme();
}

// ===== NAVIGATION =====
function navigateTo(section, el) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('section-' + section).classList.add('active');
  if (el) el.classList.add('active');
  if (window.innerWidth <= 700) document.getElementById('sidebar').classList.remove('open');
}
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ===== NOTIFICATION =====
function notify(msg) {
  const n = document.getElementById('notification');
  n.textContent = msg;
  n.classList.add('show');
  setTimeout(() => n.classList.remove('show'), 3000);
}

// ===== TASKS =====
async function addTask() {
  const time = document.getElementById('taskTime').value;
  const desc = document.getElementById('taskDesc').value.trim();
  if (!time || !desc) { notify(t('fillAll')); return; }
  await dbAdd('tasks', { time, desc, done: false });
  document.getElementById('taskTime').value = '';
  document.getElementById('taskDesc').value = '';
  notify(t('taskAdded'));
  renderTasks();
  renderDashboard();
}

async function renderTasks() {
  const tasks = (await dbGetAll('tasks')).sort((a, b) => a.time.localeCompare(b.time));
  const list = document.getElementById('taskList');
  if (!tasks.length) { list.innerHTML = `<div class="empty-msg">${t('noTasks')}</div>`; renderDashTasks(tasks); return; }
  list.innerHTML = tasks.map(task => `
    <div class="task-item ${task.done ? 'done' : ''}" id="task-${task.id}">
      <div class="task-time">${task.time}</div>
      <div class="task-desc">${escHtml(task.desc)}</div>
      <button class="task-check" onclick="toggleTask(${task.id})">${task.done ? '✓' : ''}</button>
      <button class="task-del" onclick="deleteTask(${task.id})">✕</button>
    </div>
  `).join('');
  renderDashTasks(tasks);
}

function renderDashTasks(tasks) {
  const el = document.getElementById('dashTaskList');
  if (!tasks.length) { el.innerHTML = `<div class="empty-msg">${t('noTasks')}</div>`; return; }
  el.innerHTML = tasks.slice(0, 5).map(t2 => `
    <div class="dash-task-item">
      <span class="dtask-time">${t2.time}</span>
      <span>${escHtml(t2.desc)}</span>
      ${t2.done ? '<span style="color:var(--green);margin-left:auto">✓</span>' : ''}
    </div>
  `).join('');
}

async function toggleTask(id) {
  const tasks = await dbGetAll('tasks');
  const task = tasks.find(t2 => t2.id === id);
  if (!task) return;
  task.done = !task.done;
  await dbUpdate('tasks', task);
  renderTasks();
  updateMentorMessage();
}

async function deleteTask(id) {
  await dbDelete('tasks', id);
  renderTasks();
}

// ===== EARNINGS =====
async function addEarning() {
  const date = document.getElementById('earningDate').value;
  const amount = parseFloat(document.getElementById('earningAmount').value);
  const source = document.getElementById('earningSource').value.trim();
  if (!date || isNaN(amount) || amount <= 0 || !source) { notify(t('fillAll')); return; }
  await dbAdd('earnings', { date, amount, source });
  document.getElementById('earningAmount').value = '';
  document.getElementById('earningSource').value = '';
  notify(t('earningAdded'));
  renderEarnings();
  renderDashboard();
  updateMentorMessage();
}

async function renderEarnings() {
  const earnings = (await dbGetAll('earnings')).sort((a, b) => b.date.localeCompare(a.date));
  const list = document.getElementById('earningsList');
  if (!earnings.length) { list.innerHTML = `<div class="empty-msg">${t('noEarnings')}</div>`; return; }
  list.innerHTML = earnings.map(e => `
    <div class="earning-item">
      <div class="earning-date">${formatDate(e.date)}</div>
      <div class="earning-source">${escHtml(e.source)}</div>
      <div class="earning-amount">$${e.amount.toFixed(2)}</div>
      <button class="earning-del" onclick="deleteEarning(${e.id})">✕</button>
    </div>
  `).join('');
}

async function deleteEarning(id) {
  await dbDelete('earnings', id);
  renderEarnings();
  renderDashboard();
  updateMentorMessage();
}

// ===== DASHBOARD =====
async function renderDashboard() {
  const earnings = await dbGetAll('earnings');

  const total = earnings.reduce((s, e) => s + e.amount, 0);
  const byDay = {};
  earnings.forEach(e => { byDay[e.date] = (byDay[e.date] || 0) + e.amount; });
  const days = Object.keys(byDay);
  const values = Object.values(byDay);
  const avg = days.length ? total / days.length : 0;
  const best = values.length ? Math.max(...values) : 0;

  document.getElementById('statTotal').textContent = '$' + total.toFixed(2);
  document.getElementById('statAvg').textContent = '$' + avg.toFixed(2);
  document.getElementById('statBest').textContent = '$' + best.toFixed(2);
  document.getElementById('statDays').textContent = days.length;

  updateChart(days.sort(), days.sort().map(d => byDay[d]));
  updateMentorMessage(total, days.length, avg);
}

// ===== CHART =====
function updateChart(labels = [], data = []) {
  const ctx = document.getElementById('earningsChart').getContext('2d');
  const isDark = currentTheme === 'dark';
  const gridColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)';
  const textColor = isDark ? '#9A9590' : '#6A6560';

  if (earningsChart) earningsChart.destroy();

  earningsChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels.map(formatDate),
      datasets: [{
        label: '$',
        data,
        borderColor: '#D4AF37',
        backgroundColor: 'rgba(212,175,55,0.08)',
        pointBackgroundColor: '#D4AF37',
        pointBorderColor: '#0A0B0E',
        pointRadius: 5,
        pointHoverRadius: 7,
        borderWidth: 2.5,
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: isDark ? '#181C24' : '#E0DDD7',
          titleColor: '#D4AF37',
          bodyColor: isDark ? '#F0EDE8' : '#1A1814',
          borderColor: 'rgba(212,175,55,0.3)',
          borderWidth: 1,
          callbacks: {
            label: ctx2 => ' $' + ctx2.parsed.y.toFixed(2)
          }
        }
      },
      scales: {
        x: { grid: { color: gridColor }, ticks: { color: textColor, font: { size: 12 } } },
        y: { grid: { color: gridColor }, ticks: { color: textColor, font: { size: 12 }, callback: v => '$' + v } }
      }
    }
  });
}

// ===== MENTOR IA =====
const MENTOR_RESPONSES = {
  pt: {
    greet: ["Olá! Sou o seu Mentor dos 1%. diga 'motiva-me' que te dou a força para continuar hoje", "Bem-vindo de volta! Cada dia de consistência te aproxima do 1%. diga 'motiva-me' que te dou a força para continuar hoje"],
    noActivity: ["Não vi nenhuma atividade sua recentemente. Lembre-se: disciplina é a ponte entre os objetivos e os resultados.", "O maior risco não é falhar — é não tentar. Que tal registrar seu primeiro ganho hoje?"],
    lowEarnings: ["Você está começando! Os primeiros ganhos são os mais difíceis e os mais importantes. Continue.", "Pequenos ganhos diários constroem grandes resultados. Não subestime o poder da consistência."],
    growing: ["Estou vendo crescimento! Você está no caminho certo. Agora é hora de escalar.", "Excelente progresso! A consistência está gerando resultados. Continue investindo em aprendizado."],
    strong: ["Incrível! Você está performando como os 1%. Hora de automatizar e delegar.", "Resultados impressionantes! Considere diversificar suas fontes de renda para mais estabilidade."],
    taskDone: ["Tarefas concluídas mostram disciplina real. É assim que os 1% operam.", "Sua consistência com as tarefas está construindo o hábito do sucesso."],
    default: ["Foque em aprender algo novo hoje. O conhecimento é o melhor investimento.", "A chave é ação consistente. Mesmo 30 minutos por dia constroem resultados incríveis.", "Não compare seu capítulo 1 com o capítulo 20 de outro. Foque no seu processo.", "Cada habilidade que você desenvolve é um ativo que ninguém pode tirar de você."]
  },
  en: {
    greet: ["Hello! I'm your 1% Mentor. I'm here to guide you toward financial freedom. Say 'motivate me' and I'll give you the strength to continue today.?", "Welcome back! Every day of consistency brings you closer to the 1%. Say 'motivate me' and I'll give you the strength to continue today."],
    noActivity: ["I haven't seen any activity from you recently. Remember: discipline is the bridge between goals and results.", "The biggest risk isn't failing — it's not trying. How about logging your first earning today?"],
    lowEarnings: ["You're just starting! The first earnings are the hardest and the most important. Keep going.", "Small daily gains build great results. Don't underestimate the power of consistency."],
    growing: ["I see growth! You're on the right track. Now it's time to scale.", "Excellent progress! Consistency is generating results. Keep investing in learning."],
    strong: ["Amazing! You're performing like the top 1%. Time to automate and delegate.", "Impressive results! Consider diversifying your income sources for more stability."],
    taskDone: ["Completed tasks show real discipline. That's how the 1% operate.", "Your consistency with tasks is building the habit of success."],
    default: ["Focus on learning something new today. Knowledge is the best investment.", "The key is consistent action. Even 30 minutes a day builds incredible results.", "Don't compare your chapter 1 to someone else's chapter 20. Focus on your process.", "Every skill you develop is an asset no one can take from you."]
  }
};

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

async function updateMentorMessage(total, days, avg) {
  if (total === undefined) {
    const earnings = await dbGetAll('earnings');
    total = earnings.reduce((s, e) => s + e.amount, 0);
    const byDay = {};
    earnings.forEach(e => { byDay[e.date] = (byDay[e.date] || 0) + e.amount; });
    days = Object.keys(byDay).length;
    avg = days ? total / days : 0;
  }

  const r = MENTOR_RESPONSES[currentLang] || MENTOR_RESPONSES.pt;
  let msg;
  if (days === 0) msg = pick(r.noActivity);
  else if (avg < 10) msg = pick(r.lowEarnings);
  else if (avg < 50) msg = pick(r.growing);
  else msg = pick(r.strong);

  const badge = document.getElementById('mentorBadge');
  if (badge) badge.innerHTML = `💡 <span>${msg}</span>`;
}

async function initMentorChat() {
  const el = document.getElementById('mentorMessages');
  const r = MENTOR_RESPONSES[currentLang] || MENTOR_RESPONSES.pt;
  el.innerHTML = '';
  addMentorMsg(pick(r.greet), 'mentor');
}

function addMentorMsg(text, type) {
  const el = document.getElementById('mentorMessages');
  const div = document.createElement('div');
  div.className = `msg-bubble msg-${type}`;
  div.textContent = text;
  el.appendChild(div);
  el.scrollTop = el.scrollHeight;
}

async function askMentor() {
  const input = document.getElementById('mentorInput');
  const q = input.value.trim();
  if (!q) return;
  addMentorMsg(q, 'user');
  input.value = '';

  // Typing indicator
  const typing = document.createElement('div');
  typing.className = 'msg-bubble msg-mentor msg-typing';
  typing.textContent = currentLang === 'pt' ? 'Pensando...' : 'Thinking...';
  document.getElementById('mentorMessages').appendChild(typing);

  setTimeout(async () => {
    typing.remove();
    const earnings = await dbGetAll('earnings');
    const tasks = await dbGetAll('tasks');
    const total = earnings.reduce((s, e) => s + e.amount, 0);
    const done = tasks.filter(t2 => t2.done).length;
    const r = MENTOR_RESPONSES[currentLang] || MENTOR_RESPONSES.pt;

    let response;
    const ql = q.toLowerCase();

    if (ql.includes('ganho') || ql.includes('earn') || ql.includes('dinheir') || ql.includes('money')) {
      response = currentLang === 'pt'
        ? `Você tem $${total.toFixed(2)} registrado. ${pick(r.growing)}`
        : `You have $${total.toFixed(2)} recorded. ${pick(r.growing)}`;
    } else if (ql.includes('tarefa') || ql.includes('task') || ql.includes('rotina') || ql.includes('routine')) {
      response = currentLang === 'pt'
        ? `Você completou ${done} tarefas. ${pick(r.taskDone)}`
        : `You've completed ${done} tasks. ${pick(r.taskDone)}`;
    } else if (ql.includes('começ') || ql.includes('start') || ql.includes('inicio') || ql.includes('begin')) {
      response = currentLang === 'pt'
        ? 'Comece pelo Freelancing ou Marketing de Afiliados — menor barreira de entrada. Registre seus primeiros ganhos e use o Planejamento diário para manter consistência.'
        : 'Start with Freelancing or Affiliate Marketing — lowest barrier to entry. Log your first earnings and use the Daily Planner to stay consistent.';
    } else if (ql.includes('melhor') || ql.includes('best') || ql.includes('método') || ql.includes('method')) {
      response = currentLang === 'pt'
        ? 'O melhor método é o que você vai executar com consistência. Freelancing dá retorno rápido. Marketing de afiliados é escalável. Programação tem o maior potencial de longo prazo.'
        : 'The best method is the one you\'ll execute consistently. Freelancing gives quick returns. Affiliate marketing is scalable. Programming has the highest long-term potential.';
    } else {
      response = pick(r.default);
    }

    addMentorMsg(response, 'mentor');
  }, 1200);
}

// ===== METHODS =====
function renderMethods() {
  const methods = METHODS[currentLang] || METHODS.pt;
  document.getElementById('methodsGrid').innerHTML = methods.map(m => `
    <div class="method-card" onclick="openMethod(${m.id})">
      <div class="method-icon">${m.icon}</div>
      <div class="method-name">${m.name}</div>
      <div class="method-brief">${m.brief}</div>
      <div class="method-meta">
        <span class="method-tag tag-diff">⚡ ${m.diff}</span>
        <span class="method-tag tag-time">⏱ ${m.time}</span>
      </div>
    </div>
  `).join('');
}

function openMethod(id) {
  const methods = METHODS[currentLang] || METHODS.pt;
  const m = methods.find(x => x.id === id);
  if (!m) return;
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-icon">${m.icon}</div>
    <div class="modal-title">${m.name}</div>
    <div class="modal-desc">${m.desc}</div>
    <div class="modal-steps">
      <h3>${currentLang === 'pt' ? 'Passo a Passo' : 'Step by Step'}</h3>
      ${m.steps.map((s, i) => `
        <div class="step-item">
          <div class="step-num">${i + 1}</div>
          <div class="step-text">${s}</div>
        </div>
      `).join('')}
    </div>
    <div class="modal-badges">
      <span class="badge badge-diff">⚡ ${m.diff}</span>
      <span class="badge badge-time">⏱ ${m.time}</span>
    </div>
  `;
  document.getElementById('methodModal').classList.add('open');
}
function closeModal() { document.getElementById('methodModal').classList.remove('open'); }

// ===== GOALS =====
async function addGoal() {
  const desc = document.getElementById('goalDesc').value.trim();
  const target = parseFloat(document.getElementById('goalTarget').value);
  if (!desc || isNaN(target) || target <= 0) { notify(t('fillAll')); return; }
  await dbAdd('goals', { desc, target, progress: 0 });
  document.getElementById('goalDesc').value = '';
  document.getElementById('goalTarget').value = '';
  notify(t('goalAdded'));
  renderGoals();
}

async function renderGoals() {
  const goals = await dbGetAll('goals');
  const container = document.getElementById('goalsList');
  if (!goals.length) {
    container.innerHTML = `<div class="empty-msg" style="grid-column:1/-1">${t('noGoals')}</div>`;
    return;
  }
  container.innerHTML = goals.map(g => {
    const pct = Math.min(100, Math.round((g.progress / g.target) * 100));
    return `
      <div class="goal-card">
        <div class="goal-card-title">${escHtml(g.desc)}</div>
        <div class="goal-target">${t('target')}: $${g.target.toFixed(2)} | ${t('progress')}: $${(g.progress || 0).toFixed(2)}</div>
        <div class="goal-progress-bar">
          <div class="goal-progress-fill" style="width:${pct}%"></div>
        </div>
        <div class="goal-pct">${pct}% ${pct >= 100 ? '— ' + t('achieved') : ''}</div>
        <div class="goal-input-row">
          <input type="number" class="input-field" id="gp-${g.id}" placeholder="${t('currentProgress')}" min="0" step="0.01"/>
          <button class="btn-secondary" onclick="updateGoalProgress(${g.id})">${t('updateProgress')}</button>
        </div>
        <button class="goal-del" onclick="deleteGoal(${g.id})">✕ ${currentLang === 'pt' ? 'Remover' : 'Remove'}</button>
      </div>
    `;
  }).join('');
}

async function updateGoalProgress(id) {
  const input = document.getElementById('gp-' + id);
  const val = parseFloat(input.value);
  if (isNaN(val)) { notify(t('fillAll')); return; }
  const goals = await dbGetAll('goals');
  const goal = goals.find(g => g.id === id);
  if (!goal) return;
  goal.progress = val;
  await dbUpdate('goals', goal);
  notify(t('goalUpdated'));
  renderGoals();
}

async function deleteGoal(id) {
  await dbDelete('goals', id);
  renderGoals();
}

// ===== RESET =====
async function confirmReset() {
  if (confirm(t('deleteConfirm'))) {
    await dbClearAll();
    notify(t('resetDone'));
    renderTasks();
    renderEarnings();
    renderGoals();
    renderDashboard();
    initMentorChat();
  }
}

// ===== UTILS =====
function escHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function formatDate(d) {
  if (!d) return '';
  const [y, m, day] = d.split('-');
  return currentLang === 'pt' ? `${day}/${m}/${y}` : `${m}/${day}/${y}`;
}

// Set today's date in date input
function setDefaultDate() {
  const today = new Date().toISOString().split('T')[0];
  const el = document.getElementById('earningDate');
  if (el) el.value = today;
}

// ===== INIT =====
async function init() {
  await initDB();
  applyTheme();
  applyTranslations();
  renderMethods();
  setDefaultDate();
  await renderTasks();
  await renderEarnings();
  await renderGoals();
  await renderDashboard();
  initMentorChat();

  // Notifications for progress (check every hour)
  setTimeout(() => {
    checkProgressNotification();
    setInterval(checkProgressNotification, 3600000);
  }, 5000);
}

async function checkProgressNotification() {
  if (!('Notification' in window)) return;
  const earnings = await dbGetAll('earnings');
  if (earnings.length === 0) return;
  const total = earnings.reduce((s, e) => s + e.amount, 0);
  if (Notification.permission === 'granted') {
    new Notification('Mentor dos 1%', {
      body: currentLang === 'pt'
        ? `Total acumulado: $${total.toFixed(2)}. Continue! 🏆`
        : `Total accumulated: $${total.toFixed(2)}. Keep going! 🏆`,
      icon: ''
    });
  } else if (Notification.permission === 'default') {
    Notification.requestPermission();
  }
}

document.addEventListener('DOMContentLoaded', init);

//Olá! Sou o seu Mentor dos 1%. Estou aqui para te guiar rumo à liberdade financeira. O que precisa saber hoje?