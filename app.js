/**
 * Cybersecurity Master Manual - Main Application Logic
 * Enriched with ELI5 Analogies, "Build it. Find it. Fix it." Methodology,
 * S1-S8 Screenshot Checklists, 3-Way Security Comparison Tables,
 * Troubleshooting Guides, and 100-Mark Rubrics.
 */

// Global Application State
const AppState = {
    curriculum: [],
    currentClassId: 1,
    activeTab: 'guide',
    searchQuery: '',
    filterPhase: 'all',
    filterWeek: 'all',
    filterCategory: 'all',
    filterStatus: 'all',
    completedClasses: new Set(),
    labNotes: {},
    quizAnswers: {},
    checkedEvidence: {}, // { classId: { S1: true, S2: false, ... } }
    terminalInstance: null,
    isInstructorMode: false
};

// Storage Keys
const STORAGE_KEYS = {
    CURRICULUM: 'cyber_manual_custom_curriculum_v2',
    COMPLETED: 'cyber_manual_completed_v2',
    NOTES: 'cyber_manual_notes_v2',
    QUIZ: 'cyber_manual_quiz_v2',
    EVIDENCE: 'cyber_manual_evidence_v2',
    LAST_CLASS: 'cyber_manual_last_class_v2'
};

// Toast notification helper
window.showToast = function(message, type = 'info') {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    const colorClass = type === 'success' 
        ? 'border-emerald-500 bg-emerald-950/90 text-emerald-200' 
        : type === 'warning'
        ? 'border-amber-500 bg-amber-950/90 text-amber-200'
        : 'border-cyan-500 bg-[#0d1829]/95 text-cyan-200';

    toast.className = `flex items-center gap-3 px-4 py-3 rounded-lg border shadow-xl text-sm transition-all duration-300 transform translate-y-2 opacity-0 ${colorClass}`;
    toast.innerHTML = `
        <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span class="font-medium">${message}</span>
    `;

    toastContainer.appendChild(toast);
    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-2', 'opacity-0');
    });

    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
    }, 3200);
};

// Application Initialization
document.addEventListener('DOMContentLoaded', () => {
    loadSavedState();
    initApp();
});

function loadSavedState() {
    const savedCurriculum = localStorage.getItem(STORAGE_KEYS.CURRICULUM);
    if (savedCurriculum) {
        try {
            AppState.curriculum = JSON.parse(savedCurriculum);
        } catch (e) {
            AppState.curriculum = window.CYBER_CURRICULUM || [];
        }
    } else {
        AppState.curriculum = window.CYBER_CURRICULUM || [];
    }

    const savedCompleted = localStorage.getItem(STORAGE_KEYS.COMPLETED);
    if (savedCompleted) {
        try { AppState.completedClasses = new Set(JSON.parse(savedCompleted)); } catch (e) {}
    }

    const savedNotes = localStorage.getItem(STORAGE_KEYS.NOTES);
    if (savedNotes) {
        try { AppState.labNotes = JSON.parse(savedNotes); } catch (e) {}
    }

    const savedQuiz = localStorage.getItem(STORAGE_KEYS.QUIZ);
    if (savedQuiz) {
        try { AppState.quizAnswers = JSON.parse(savedQuiz); } catch (e) {}
    }

    const savedEvidence = localStorage.getItem(STORAGE_KEYS.EVIDENCE);
    if (savedEvidence) {
        try { AppState.checkedEvidence = JSON.parse(savedEvidence); } catch (e) {}
    }

    const savedLastClass = localStorage.getItem(STORAGE_KEYS.LAST_CLASS);
    if (savedLastClass) {
        const id = parseInt(savedLastClass, 10);
        if (AppState.curriculum.some(c => c.id === id)) {
            AppState.currentClassId = id;
        }
    }
}

function saveState() {
    localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify([...AppState.completedClasses]));
    localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(AppState.labNotes));
    localStorage.setItem(STORAGE_KEYS.QUIZ, JSON.stringify(AppState.quizAnswers));
    localStorage.setItem(STORAGE_KEYS.EVIDENCE, JSON.stringify(AppState.checkedEvidence));
    localStorage.setItem(STORAGE_KEYS.LAST_CLASS, AppState.currentClassId.toString());
}

function initApp() {
    populateFilterOptions();
    renderSidebar();
    updateProgressStats();

    AppState.terminalInstance = new CyberTerminal('terminal-container');

    renderCurrentClass();
    bindGlobalEvents();
}

function populateFilterOptions() {
    const weekSelect = document.getElementById('filter-week');
    if (weekSelect) {
        weekSelect.innerHTML = `<option value="all">All Weeks (1 - 24)</option>`;
        for (let w = 1; w <= 24; w++) {
            weekSelect.innerHTML += `<option value="${w}">Week ${w}</option>`;
        }
    }

    const catSelect = document.getElementById('filter-category');
    if (catSelect) {
        const categories = [...new Set(AppState.curriculum.map(c => c.category))].filter(Boolean);
        catSelect.innerHTML = `<option value="all">All Specialties / Tools</option>`;
        categories.forEach(cat => {
            catSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
        });
    }
}

function renderSidebar() {
    const sidebarList = document.getElementById('sidebar-classes-list');
    if (!sidebarList) return;

    const filtered = AppState.curriculum.filter(cls => {
        if (AppState.filterPhase !== 'all' && cls.phase !== parseInt(AppState.filterPhase, 10)) return false;
        if (AppState.filterWeek !== 'all' && cls.week !== parseInt(AppState.filterWeek, 10)) return false;
        if (AppState.filterCategory !== 'all' && cls.category !== AppState.filterCategory) return false;
        if (AppState.filterStatus === 'completed' && !AppState.completedClasses.has(cls.id)) return false;
        if (AppState.filterStatus === 'uncompleted' && AppState.completedClasses.has(cls.id)) return false;

        if (AppState.searchQuery) {
            const q = AppState.searchQuery.toLowerCase();
            const inTitle = cls.title.toLowerCase().includes(q);
            const inObj = cls.objective.toLowerCase().includes(q);
            const inTools = cls.tools.some(t => t.toLowerCase().includes(q));
            const inWeek = cls.weekTitle.toLowerCase().includes(q);
            const inEli5 = cls.eli5Story ? cls.eli5Story.title.toLowerCase().includes(q) : false;
            return inTitle || inObj || inTools || inWeek || inEli5;
        }

        return true;
    });

    if (filtered.length === 0) {
        sidebarList.innerHTML = `
            <div class="p-6 text-center text-slate-500">
                <p class="text-xs">No matching labs found.</p>
                <button onclick="resetFilters()" class="mt-2 text-xs text-cyan-400 hover:underline">Reset Filters</button>
            </div>
        `;
        return;
    }

    const phases = [
        { id: 1, name: 'Phase 1: Offensive Security (W1–8)', color: 'border-red-500/50 text-red-400' },
        { id: 2, name: 'Phase 2: Network Defense (W9–16)', color: 'border-blue-500/50 text-blue-400' },
        { id: 3, name: 'Phase 3: SOC Operations (W17–24)', color: 'border-emerald-500/50 text-emerald-400' }
    ];

    let html = '';

    phases.forEach(ph => {
        const phClasses = filtered.filter(c => c.phase === ph.id);
        if (phClasses.length === 0) return;

        html += `
            <div class="mb-4">
                <div class="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider ${ph.color} border-l-2 bg-slate-900/60 sticky top-0 z-10 flex items-center justify-between">
                    <span>${ph.name}</span>
                    <span class="text-[10px] text-slate-400">(${phClasses.length})</span>
                </div>
                <div class="mt-1 space-y-1">
        `;

        phClasses.forEach(cls => {
            const isActive = cls.id === AppState.currentClassId;
            const isDone = AppState.completedClasses.has(cls.id);

            html += `
                <button onclick="selectClass(${cls.id})" 
                    class="w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center justify-between group ${
                        isActive 
                            ? 'bg-cyan-950/80 border border-cyan-500/60 text-cyan-200 shadow-md font-semibold' 
                            : 'hover:bg-slate-800/60 text-slate-300 border border-transparent'
                    }">
                    <div class="flex items-center gap-2.5 truncate mr-2">
                        <span class="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${
                            isDone 
                                ? 'bg-emerald-900/80 text-emerald-300 border border-emerald-500/60' 
                                : isActive
                                ? 'bg-cyan-900/80 text-cyan-300 border border-cyan-500/60'
                                : 'bg-slate-800 text-slate-400'
                        }">
                            ${isDone ? '✓' : cls.classNumber}
                        </span>
                        <div class="truncate">
                            <span class="block truncate text-slate-200 group-hover:text-cyan-300">${cls.title}</span>
                            <span class="text-[10px] text-slate-500 font-mono">W${cls.week} • ${cls.category}</span>
                        </div>
                    </div>
                    <span class="text-[10px] px-1.5 py-0.5 rounded ${
                        cls.difficulty.includes('Beginner') ? 'bg-emerald-950 text-emerald-400' :
                        cls.difficulty.includes('Intermediate') ? 'bg-amber-950 text-amber-400' :
                        'bg-red-950 text-red-400'
                    }">${cls.difficulty[0]}</span>
                </button>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    sidebarList.innerHTML = html;
}

window.selectClass = function(id) {
    AppState.currentClassId = id;
    saveState();
    renderSidebar();
    renderCurrentClass();
    document.getElementById('main-content-scroll')?.scrollTo({ top: 0, behavior: 'smooth' });
};

window.resetFilters = function() {
    AppState.searchQuery = '';
    AppState.filterPhase = 'all';
    AppState.filterWeek = 'all';
    AppState.filterCategory = 'all';
    AppState.filterStatus = 'all';

    document.getElementById('search-input').value = '';
    document.getElementById('filter-phase').value = 'all';
    document.getElementById('filter-week').value = 'all';
    document.getElementById('filter-category').value = 'all';
    document.getElementById('filter-status').value = 'all';

    renderSidebar();
};

function renderCurrentClass() {
    const cls = AppState.curriculum.find(c => c.id === AppState.currentClassId);
    if (!cls) return;

    // Header Details
    document.getElementById('lab-badge-phase').textContent = cls.phaseTitle;
    document.getElementById('lab-badge-week').textContent = cls.weekTitle;
    document.getElementById('lab-title').textContent = cls.title;
    document.getElementById('lab-objective').textContent = cls.objective;
    document.getElementById('lab-category').textContent = cls.category;
    document.getElementById('lab-difficulty').textContent = cls.difficulty;
    document.getElementById('lab-duration').textContent = cls.duration;
    document.getElementById('lab-target-env').textContent = cls.targetEnvironment;

    // Tools badges
    const toolsContainer = document.getElementById('lab-tools-container');
    if (toolsContainer) {
        toolsContainer.innerHTML = cls.tools.map(t => `
            <span class="px-2 py-0.5 rounded text-xs bg-slate-800 text-cyan-300 border border-cyan-900/60 font-mono">
                ${t}
            </span>
        `).join('');
    }

    // Toggle complete button state
    const completeBtn = document.getElementById('mark-complete-btn');
    if (completeBtn) {
        const isDone = AppState.completedClasses.has(cls.id);
        if (isDone) {
            completeBtn.className = 'px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/40';
            completeBtn.innerHTML = `
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Completed</span>
            `;
        } else {
            completeBtn.className = 'px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700';
            completeBtn.innerHTML = `
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Mark Lab Complete</span>
            `;
        }
    }

    // Prev / Next buttons
    const prevBtn = document.getElementById('prev-class-btn');
    const nextBtn = document.getElementById('next-class-btn');
    const currentIndex = AppState.curriculum.findIndex(c => c.id === cls.id);
    
    if (prevBtn) {
        prevBtn.disabled = currentIndex <= 0;
        prevBtn.onclick = () => {
            if (currentIndex > 0) selectClass(AppState.curriculum[currentIndex - 1].id);
        };
    }
    if (nextBtn) {
        nextBtn.disabled = currentIndex >= AppState.curriculum.length - 1;
        nextBtn.onclick = () => {
            if (currentIndex < AppState.curriculum.length - 1) selectClass(AppState.curriculum[currentIndex + 1].id);
        };
    }

    renderTabContent(cls);
    syncTerminalWithClass(cls);
}

function syncTerminalWithClass(cls) {
    if (!AppState.terminalInstance) return;

    let prompt = 'kali@purple-box:~$ ';
    let title = 'SEC-TERM :: KALI PURPLE CONSOLE';

    if (cls.id === 11) {
        prompt = 'trainee@ubuntu:~$ ';
        title = 'SEC-TERM :: UBUNTU 24.04 (TRAINEE AUDITOR)';
    } else if (cls.tools.some(t => t.toLowerCase().includes('cisco'))) {
        prompt = 'Router# ';
        title = 'SEC-TERM :: CISCO IOS CLI';
    } else if (cls.tools.some(t => t.toLowerCase().includes('metasploit'))) {
        prompt = 'msf6 > ';
        title = 'SEC-TERM :: METASPLOIT FRAMEWORK';
    } else if (cls.targetEnvironment.toLowerCase().includes('windows')) {
        prompt = 'C:\\Users\\Student> ';
        title = 'SEC-TERM :: WINDOWS POWERSHELL';
    } else if (cls.tools.some(t => t.toLowerCase().includes('wazuh'))) {
        prompt = 'root@wazuh-manager:~# ';
        title = 'SEC-TERM :: WAZUH SIEM ENGINE';
    } else if (cls.tools.some(t => t.toLowerCase().includes('volatility'))) {
        prompt = 'analyst@forensics:~$ ';
        title = 'SEC-TERM :: VOLATILITY 3 CLI';
    }

    AppState.terminalInstance.setPrompt(prompt, title);
}

function renderTabContent(cls) {
    const guidePane = document.getElementById('tab-pane-guide');
    const termPane = document.getElementById('tab-pane-terminal');
    const topoPane = document.getElementById('tab-pane-topology');
    const notePane = document.getElementById('tab-pane-notebook');
    const quizPane = document.getElementById('tab-pane-quiz');

    [guidePane, termPane, topoPane, notePane, quizPane].forEach(p => p?.classList.add('hidden'));

    document.querySelectorAll('.tab-nav-btn').forEach(btn => {
        const tab = btn.getAttribute('data-tab');
        if (tab === AppState.activeTab) {
            btn.className = 'tab-nav-btn px-4 py-2.5 text-xs font-bold border-b-2 border-cyan-400 text-cyan-300 flex items-center gap-2 bg-slate-900/40';
        } else {
            btn.className = 'tab-nav-btn px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-slate-200 border-b-2 border-transparent flex items-center gap-2';
        }
    });

    if (AppState.activeTab === 'guide') {
        guidePane?.classList.remove('hidden');
        renderGuideTab(cls);
    } else if (AppState.activeTab === 'terminal') {
        termPane?.classList.remove('hidden');
    } else if (AppState.activeTab === 'topology') {
        topoPane?.classList.remove('hidden');
        renderTopologyTab(cls);
    } else if (AppState.activeTab === 'notebook') {
        notePane?.classList.remove('hidden');
        renderNotebookTab(cls);
    } else if (AppState.activeTab === 'quiz') {
        quizPane?.classList.remove('hidden');
        renderQuizTab(cls);
    }
}

function renderGuideTab(cls) {
    const container = document.getElementById('tab-pane-guide');
    if (!container) return;

    let html = `
        <div class="space-y-6">
            
            <!-- 🌟 EXPLAIN LIKE I'M 5 YEARS OLD (ELI5) HERO BANNER -->
            ${cls.eli5Story ? `
                <div class="bg-gradient-to-r from-amber-950/40 via-purple-950/30 to-cyan-950/40 border-2 border-amber-500/50 rounded-2xl p-5 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-3.5">
                        <div class="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300 flex-shrink-0 shadow-lg">
                            <span class="text-xl">🧸</span>
                        </div>
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/80">
                                    Explained for a 5-Year-Old
                                </span>
                                <h3 class="text-sm font-black text-white">${cls.eli5Story.title}</h3>
                            </div>
                            <p class="text-xs md:text-sm text-amber-100/90 mt-2 leading-relaxed">
                                "${cls.eli5Story.analogy}"
                            </p>
                        </div>
                    </div>
                </div>
            ` : ''}

            <!-- 🔄 "BUILD IT. FIND IT. FIX IT." METHODOLOGY PIPELINE -->
            <div class="bg-[#0b1322] border border-cyan-900/50 rounded-xl p-4">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div class="flex items-center gap-2">
                        <span class="text-xs font-bold text-cyan-400 uppercase tracking-wider">Methodology:</span>
                        <span class="text-xs font-black text-white bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                            ${cls.philosophy || 'Build it. Find it. Fix it.'}
                        </span>
                    </div>
                    <div class="text-[11px] text-slate-400 font-mono">
                        ${cls.learningMethod || 'Create ➔ Baseline test ➔ Enumerate ➔ Analyse ➔ Verify ➔ Remediate ➔ Retest'}
                    </div>
                </div>

                <!-- Roles Bar -->
                ${cls.roles ? `
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-800">
                        <div class="flex items-center gap-2 bg-[#080d1a] p-2 rounded border border-slate-800">
                            <span class="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                            <span class="text-slate-400 font-semibold">Admin Role:</span>
                            <span class="text-slate-200">${cls.roles.admin}</span>
                        </div>
                        <div class="flex items-center gap-2 bg-[#080d1a] p-2 rounded border border-slate-800">
                            <span class="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
                            <span class="text-slate-400 font-semibold">Auditor Role:</span>
                            <span class="text-slate-200">${cls.roles.trainee}</span>
                        </div>
                    </div>
                ` : ''}
            </div>

            <!-- Prerequisites & Safety Boundary -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="md:col-span-2 bg-[#0c1424] border border-cyan-900/50 rounded-xl p-4">
                    <h4 class="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                        Prerequisites &amp; Environment
                    </h4>
                    <ul class="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                        ${cls.prerequisites.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </div>
                <div class="bg-red-950/20 border border-red-900/50 rounded-xl p-4">
                    <h4 class="text-xs font-bold text-red-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                        Safety Boundary
                    </h4>
                    <p class="text-xs text-slate-300 leading-relaxed">
                        Run every step strictly inside your isolated practice VM. Do not test workplace, school, shared, or internet-hosted machines without specific written authorization.
                    </p>
                </div>
            </div>

            <!-- Core Concepts -->
            <div>
                <h3 class="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
                    Core Concepts Broken Down
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    ${cls.keyConcepts.map(kc => `
                        <div class="bg-[#0e1628] border border-slate-800 rounded-lg p-3 hover:border-cyan-800/60 transition-colors">
                            <span class="text-xs font-semibold text-cyan-300 block mb-1">${kc.title}</span>
                            <span class="text-xs text-slate-400 leading-relaxed block">${kc.explanation}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- DETAILED STEP-BY-STEP LAB WALKTHROUGH -->
            <div>
                <h3 class="text-sm font-bold text-slate-200 mb-3 flex items-center justify-between">
                    <span class="flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                        Hands-On Lab Walkthrough
                    </span>
                    <span class="text-xs font-normal text-slate-500">Student-Led Execution</span>
                </h3>

                ${cls.sections ? `
                    <!-- Multi-Section View (Class 11 exact workbook layout) -->
                    <div class="space-y-6">
                        ${cls.sections.map(sec => `
                            <div class="bg-[#090f1d] border border-cyan-900/40 rounded-xl p-4">
                                <div class="border-b border-cyan-900/40 pb-2 mb-4">
                                    <h4 class="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                                        Section ${sec.sectionNumber}: ${sec.title}
                                    </h4>
                                    <p class="text-xs text-slate-400 mt-0.5">${sec.desc}</p>
                                </div>
                                <div class="space-y-4">
                                    ${sec.steps.map(step => renderSingleStepCard(step)).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                ` : `
                    <!-- Standard Steps View -->
                    <div class="space-y-4">
                        ${cls.steps.map(step => renderSingleStepCard(step)).join('')}
                    </div>
                `}
            </div>

            <!-- 📊 THE 3-WAY SECURITY PROOF COMPARISON TABLE -->
            ${cls.threeWayProof ? `
                <div class="bg-[#0b1322] border border-cyan-900/40 rounded-xl p-4">
                    <h4 class="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-purple-400"></span>
                        ${cls.threeWayProof.title}
                    </h4>
                    <p class="text-xs text-slate-400 mb-3">
                        Compare what happens under standard protection vs during vulnerability testing vs after the security patch is applied.
                    </p>
                    <div class="overflow-x-auto">
                        <table class="w-full text-xs text-left text-slate-300 border-collapse">
                            <thead class="bg-[#0e182b] text-cyan-400 font-semibold border-b border-cyan-900/40">
                                <tr>
                                    ${cls.threeWayProof.headers.map(h => `<th class="p-2.5">${h}</th>`).join('')}
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-800 font-mono text-[11px]">
                                ${cls.threeWayProof.rows.map(r => `
                                    <tr class="hover:bg-slate-800/30">
                                        <td class="p-2.5 font-bold text-slate-200 font-sans">${r[0]}</td>
                                        <td class="p-2.5 text-cyan-300">${r[1]}</td>
                                        <td class="p-2.5 ${r[2].includes('denied') ? 'text-amber-400' : 'text-emerald-400 font-bold'}">${r[2]}</td>
                                        <td class="p-2.5 text-slate-400 font-sans">${r[3]}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            ` : ''}

            <!-- 📸 SCREENSHOT & EVIDENCE CHECKLIST (S1 TO S8) -->
            ${cls.evidenceChecklist ? `
                <div class="bg-[#090f1d] border border-emerald-900/40 rounded-xl p-4">
                    <div class="flex items-center justify-between mb-3">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                                Required Screenshot Evidence Checklist (Label S1 to S8)
                            </h4>
                            <p class="text-xs text-slate-400">Check off each screenshot as you capture it for your formal portfolio.</p>
                        </div>
                        <span id="evidence-counter-${cls.id}" class="text-xs font-bold text-emerald-300 bg-emerald-950 px-2 py-1 rounded border border-emerald-800 font-mono">
                            ${countCheckedEvidence(cls.id, cls.evidenceChecklist.length)}
                        </span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                        ${cls.evidenceChecklist.map(ev => {
                            const isChecked = AppState.checkedEvidence[cls.id]?.[ev.id] || false;
                            return `
                                <label class="flex items-start gap-2.5 p-2.5 bg-[#060a14] border border-slate-800 rounded-lg cursor-pointer hover:border-emerald-800 transition-colors">
                                    <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleEvidenceCheckbox(${cls.id}, '${ev.id}', this.checked, ${cls.evidenceChecklist.length})" 
                                        class="mt-0.5 rounded border-slate-700 text-emerald-600 focus:ring-emerald-500 bg-slate-900" />
                                    <div>
                                        <span class="font-bold text-emerald-400 font-mono">[${ev.id}]</span>
                                        <span class="text-slate-300 ml-1">${ev.label}</span>
                                    </div>
                                </label>
                            `;
                        }).join('')}
                    </div>
                </div>
            ` : ''}

            <!-- 🛠️ TROUBLESHOOTING GUIDE -->
            ${cls.troubleshootingTable ? `
                <div class="bg-[#0a101f] border border-slate-800 rounded-xl p-4">
                    <h4 class="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        Troubleshooting &amp; Common Errors
                    </h4>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-xs text-left text-slate-300 border-collapse">
                            <thead class="bg-[#0e182b] text-cyan-400 font-semibold border-b border-cyan-900/40">
                                <tr>
                                    <th class="p-2">Problem Observed</th>
                                    <th class="p-2">Root Cause</th>
                                    <th class="p-2">Corrective Action</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-800/80">
                                ${cls.troubleshootingTable.map(tb => `
                                    <tr class="hover:bg-slate-800/30">
                                        <td class="p-2 text-red-300 font-semibold">${tb.problem}</td>
                                        <td class="p-2 text-slate-400">${tb.cause}</td>
                                        <td class="p-2 text-emerald-300">${tb.fix}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            ` : ''}

            <!-- Deliverable & Submission -->
            <div class="bg-gradient-to-r from-purple-950/30 to-cyan-950/30 border border-cyan-800/40 rounded-xl p-4">
                <h4 class="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-1 flex items-center gap-2">
                    <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    Lab Deliverables &amp; Portfolio Submission
                </h4>
                <p class="text-xs text-slate-300 leading-relaxed">${cls.deliverable}</p>
                <div class="mt-3 flex gap-2">
                    <button onclick="switchTab('notebook')" class="bg-cyan-600 hover:bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1.5 rounded transition-colors flex items-center gap-1.5">
                        <span>Open Lab Notebook</span>
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                    <button onclick="switchTab('terminal')" class="bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold px-3 py-1.5 rounded border border-slate-700 transition-colors">
                        Open Cyber Terminal
                    </button>
                </div>
            </div>

        </div>
    `;

    container.innerHTML = html;
}

function renderSingleStepCard(step) {
    return `
        <div class="bg-[#0b1322] border border-cyan-900/40 rounded-xl overflow-hidden shadow-sm">
            <div class="bg-[#0e182b] px-4 py-3 border-b border-cyan-900/30 flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <span class="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-500/60 text-cyan-300 text-xs font-bold flex items-center justify-center">
                        ${step.stepNumber}
                    </span>
                    <h4 class="text-xs font-bold text-slate-200">${step.title}</h4>
                </div>
                ${step.role ? `
                    <span class="text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                        step.role.toLowerCase().includes('admin') ? 'bg-blue-950 text-blue-300 border border-blue-800' : 'bg-purple-950 text-purple-300 border border-purple-800'
                    }">
                        Role: ${step.role}
                    </span>
                ` : ''}
            </div>

            <div class="p-4 space-y-3">
                <p class="text-xs text-slate-300 leading-relaxed">${step.explanation || step.description}</p>

                <!-- Commands -->
                ${(step.commands || []).map((c) => `
                    <div class="bg-[#060a14] border border-slate-800 rounded-lg p-3 font-mono text-xs">
                        <div class="flex items-center justify-between text-slate-400 mb-2 border-b border-slate-800/80 pb-1.5">
                            <span class="text-[11px] text-slate-400 font-sans">${c.description || 'Terminal Command'}</span>
                            <div class="flex items-center gap-2 font-sans">
                                <button onclick="copyToClipboard('${escapeJsString(c.cmd)}')" class="hover:text-cyan-300 text-[11px] bg-slate-800 px-2 py-0.5 rounded border border-slate-700 flex items-center gap-1">
                                    <span>Copy</span>
                                </button>
                                <button onclick="runCommandInTerminal('${escapeJsString(c.cmd)}', '${escapeJsString(c.output)}')" class="bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold px-2 py-0.5 rounded text-[11px] flex items-center gap-1">
                                    <span>▶ Run in Terminal</span>
                                </button>
                            </div>
                        </div>
                        <div class="text-emerald-400 select-all whitespace-pre-wrap">${escapeHtml(c.cmd)}</div>
                    </div>
                `).join('')}

                <!-- Expected Output / Verification -->
                <div class="bg-emerald-950/20 border border-emerald-900/40 rounded-lg p-2.5 flex items-start gap-2">
                    <span class="text-emerald-400 text-xs font-bold mt-0.5">Expected Result:</span>
                    <span class="text-xs text-slate-300">${step.verification}</span>
                </div>

                <!-- Pro Tip / Checkpoint -->
                ${step.tip ? `
                    <div class="bg-slate-900/60 border border-slate-800 rounded-lg p-2.5 flex items-start gap-2 text-xs text-slate-400">
                        <span class="text-cyan-400 font-semibold">Pro Tip:</span>
                        <span>${step.tip}</span>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

function countCheckedEvidence(clsId, total) {
    const checked = AppState.checkedEvidence[clsId] ? Object.values(AppState.checkedEvidence[clsId]).filter(Boolean).length : 0;
    return `${checked} / ${total} Evidence Collected`;
}

window.toggleEvidenceCheckbox = function(clsId, evId, isChecked, total) {
    if (!AppState.checkedEvidence[clsId]) {
        AppState.checkedEvidence[clsId] = {};
    }
    AppState.checkedEvidence[clsId][evId] = isChecked;
    saveState();

    const counter = document.getElementById(`evidence-counter-${clsId}`);
    if (counter) {
        counter.textContent = countCheckedEvidence(clsId, total);
    }
    if (isChecked) {
        window.showToast?.(`Evidence ${evId} recorded!`, 'success');
    }
};

function renderTopologyTab(cls) {
    const container = document.getElementById('tab-pane-topology');
    if (!container) return;

    const topo = cls.topology;
    const nodes = topo.nodes || [];

    let html = `
        <div class="space-y-6">
            <div class="bg-[#0a101f] border border-cyan-900/50 rounded-xl p-4">
                <div class="flex items-center justify-between mb-4">
                    <div>
                        <h4 class="text-xs font-bold text-cyan-400 uppercase tracking-wider">${cls.title}</h4>
                        <p class="text-xs text-slate-400">${topo.description}</p>
                    </div>
                    <button id="simulate-ping-btn" onclick="simulateTopologyPing()" class="bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold px-3 py-1.5 rounded text-xs transition-colors flex items-center gap-1.5 shadow-md">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        <span>Simulate Packet Ping</span>
                    </button>
                </div>

                <div class="relative bg-[#060a14] border border-slate-800 rounded-xl p-8 flex items-center justify-around min-h-[260px] overflow-hidden">
                    <svg class="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="cyber-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.8"/>
                                <stop offset="100%" stop-color="#a855f7" stop-opacity="0.8"/>
                            </linearGradient>
                        </defs>
                        <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="url(#cyber-line-grad)" stroke-width="3" stroke-dasharray="6,6" id="topo-wire" class="animate-pulse" />
                        <circle id="ping-packet" cx="20%" cy="50%" r="5" fill="#38bdf8" class="hidden" />
                    </svg>

                    ${nodes.map((node) => `
                        <div onclick="inspectTopologyNode('${escapeJsString(node.label)}', '${node.ip}', '${escapeJsString(node.role)}')" 
                            class="relative z-10 flex flex-col items-center cursor-pointer group transition-transform hover:scale-105">
                            <div class="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl border ${
                                node.type === 'workstation' ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300' :
                                node.type === 'target' ? 'bg-purple-950/80 border-purple-500 text-purple-300' :
                                node.type === 'switch' ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300' :
                                'bg-red-950/80 border-red-500 text-red-300'
                            }">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    ${node.type === 'workstation' 
                                        ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>'
                                        : node.type === 'switch'
                                        ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>'
                                        : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>'}
                                </svg>
                            </div>
                            <span class="mt-2 text-xs font-bold text-slate-200 group-hover:text-cyan-300">${node.label}</span>
                            <span class="text-[11px] text-cyan-400 font-mono">${node.ip}</span>
                            <span class="text-[10px] text-slate-500">${node.role}</span>
                        </div>
                    `).join('')}
                </div>

                <div id="topo-inspector" class="mt-4 bg-[#0e1628] border border-cyan-900/60 rounded-xl p-4 text-xs">
                    <span class="font-bold text-cyan-400 block mb-1">Topology Node Details</span>
                    <span class="text-slate-400">Click on any device node above to view security posture and interface parameters.</span>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;
}

window.inspectTopologyNode = function(label, ip, role) {
    const el = document.getElementById('topo-inspector');
    if (!el) return;
    el.innerHTML = `
        <div class="flex items-center justify-between border-b border-cyan-900/40 pb-2 mb-2">
            <span class="font-bold text-cyan-300 text-sm">${label}</span>
            <span class="bg-cyan-950 text-cyan-400 font-mono px-2 py-0.5 rounded border border-cyan-800 text-[11px]">${ip}</span>
        </div>
        <div class="grid grid-cols-2 gap-2 text-slate-300">
            <div><span class="text-slate-500">Assigned Role:</span> ${role}</div>
            <div><span class="text-slate-500">Security Zone:</span> Isolated Non-Prod Subnet</div>
            <div><span class="text-slate-500">Link Status:</span> 1 Gbps Full-Duplex (Virtual)</div>
            <div><span class="text-slate-500">Telemetry Status:</span> Monitored</div>
        </div>
    `;
};

window.simulateTopologyPing = function() {
    const pkt = document.getElementById('ping-packet');
    if (!pkt) return;
    pkt.classList.remove('hidden');

    let start = 20;
    let end = 80;
    let forward = true;
    let cycles = 0;

    const interval = setInterval(() => {
        if (forward) {
            start += 5;
            pkt.setAttribute('cx', `${start}%`);
            if (start >= end) forward = false;
        } else {
            start -= 5;
            pkt.setAttribute('cx', `${start}%`);
            if (start <= 20) {
                forward = true;
                cycles++;
                if (cycles >= 2) {
                    clearInterval(interval);
                    pkt.classList.add('hidden');
                    window.showToast?.('ICMP Echo Reply received: 0% packet loss (Latency: 0.3ms)', 'success');
                }
            }
        }
    }, 40);
};

function renderNotebookTab(cls) {
    const container = document.getElementById('tab-pane-notebook');
    if (!container) return;

    const saved = AppState.labNotes[cls.id] || {
        rows: cls.dataCollectionTable.initialRows || [],
        answers: {},
        execSummary: ''
    };

    let html = `
        <div class="space-y-6">
            <!-- Header bar with export actions -->
            <div class="flex flex-wrap items-center justify-between gap-3 bg-[#0a101f] border border-cyan-900/50 p-4 rounded-xl">
                <div>
                    <h4 class="text-xs font-bold text-cyan-400 uppercase tracking-wider">Class ${cls.classNumber} Laboratory Notebook &amp; Journal</h4>
                    <p class="text-xs text-slate-400">Record observations, evidence hashes, and answers to reflection prompts.</p>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="saveCurrentNotebook(${cls.id})" class="bg-slate-800 hover:bg-slate-700 text-cyan-300 font-semibold px-3 py-1.5 rounded text-xs border border-slate-700 flex items-center gap-1.5">
                        <span>Save Notes</span>
                    </button>
                    <button onclick="exportLabReportMarkdown(${cls.id})" class="bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold px-3 py-1.5 rounded text-xs transition-colors flex items-center gap-1.5 shadow-md">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        <span>Export Report (.md)</span>
                    </button>
                    <button onclick="window.print()" class="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-3 py-1.5 rounded text-xs border border-slate-700 flex items-center gap-1.5">
                        <span>Print / PDF</span>
                    </button>
                </div>
            </div>

            <!-- 💯 100-MARK ASSESSMENT RUBRIC -->
            ${cls.assessmentRubric ? `
                <div class="bg-[#0b1322] border border-amber-900/40 rounded-xl p-4">
                    <div class="flex items-center justify-between mb-3 border-b border-amber-900/30 pb-2">
                        <h4 class="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                            Official Assessment Rubric (${cls.assessmentRubric.totalMarks} Marks Total)
                        </h4>
                        <span class="text-xs font-mono text-slate-400">Grading Blueprint</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                        ${cls.assessmentRubric.criteria.map(c => `
                            <div class="bg-[#070c18] border border-slate-800 p-2.5 rounded-lg flex items-center justify-between">
                                <span class="text-slate-300">${c.component}</span>
                                <span class="text-amber-400 font-mono font-bold bg-amber-950/80 px-2 py-0.5 rounded border border-amber-900/60">${c.marks} pts</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <!-- Data Collection Table -->
            <div class="bg-[#0b1322] border border-cyan-900/40 rounded-xl p-4">
                <div class="flex items-center justify-between mb-3">
                    <h4 class="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
                        Technical Evidence &amp; Findings Table
                    </h4>
                    <button onclick="addNotebookTableRow(${cls.id})" class="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                        + Add Row
                    </button>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-xs text-left text-slate-300 border-collapse" id="notebook-table">
                        <thead class="bg-[#0e182b] text-cyan-400 font-semibold border-b border-cyan-900/40">
                            <tr>
                                ${cls.dataCollectionTable.headers.map(h => `<th class="p-2.5">${h}</th>`).join('')}
                                <th class="p-2.5 w-12 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody id="notebook-table-body" class="divide-y divide-slate-800/80 font-mono">
                            ${saved.rows.map((row, rIdx) => `
                                <tr class="hover:bg-slate-800/40">
                                    ${row.map((cell, cIdx) => `
                                        <td class="p-2">
                                            <input type="text" value="${escapeHtml(cell)}" onchange="updateNotebookTableCell(${cls.id}, ${rIdx}, ${cIdx}, this.value)" 
                                                class="w-full bg-[#070c18] border border-slate-800 rounded px-2 py-1 text-xs text-slate-200 focus:border-cyan-500 focus:outline-none" />
                                        </td>
                                    `).join('')}
                                    <td class="p-2 text-center">
                                        <button onclick="deleteNotebookTableRow(${cls.id}, ${rIdx})" class="text-red-400 hover:text-red-300">✕</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Reflection Questions -->
            <div class="bg-[#0b1322] border border-cyan-900/40 rounded-xl p-4">
                <h4 class="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                    Student Reflection Questions
                </h4>
                <div class="space-y-4">
                    ${cls.reflectionQuestions.map((qObj, qIdx) => `
                        <div class="bg-[#080d1a] border border-slate-800/80 rounded-lg p-3">
                            <label class="block text-xs font-semibold text-slate-200 mb-1">
                                Q${qIdx + 1}: ${qObj.q}
                            </label>
                            ${qObj.hint ? `<span class="text-[11px] text-slate-500 block mb-2 italic">Hint: ${qObj.hint}</span>` : ''}
                            <textarea id="ref-q-${cls.id}-${qIdx}" onchange="updateNotebookAnswer(${cls.id}, ${qIdx}, this.value)" 
                                rows="2" class="w-full bg-[#050914] border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:border-cyan-500 focus:outline-none placeholder:text-slate-700" 
                                placeholder="Type your analytical reasoning and technical explanation...">${saved.answers[qIdx] || ''}</textarea>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- One-Page Finding & Executive Summary -->
            <div class="bg-[#0b1322] border border-cyan-900/40 rounded-xl p-4">
                <h4 class="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-purple-400"></span>
                    One-Page Security Finding &amp; Executive Summary
                </h4>
                <p class="text-xs text-slate-400 mb-2">
                    Summarize the security vulnerability, affected path, evidence difference, and verified remediation:
                </p>
                <textarea id="exec-summary-${cls.id}" onchange="updateNotebookExecSummary(${cls.id}, this.value)" 
                    rows="3" class="w-full bg-[#050914] border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:border-cyan-500 focus:outline-none placeholder:text-slate-700" 
                    placeholder="E.g., An insecure SUID permission on root-owned find allowed standard trainee to escalate privileges and access protected training flags. The issue was remediated by applying chmod 0755...">${saved.execSummary || ''}</textarea>
            </div>
        </div>
    `;

    container.innerHTML = html;
}

window.updateNotebookTableCell = function(clsId, rowIdx, colIdx, value) {
    if (!AppState.labNotes[clsId]) {
        const cls = AppState.curriculum.find(c => c.id === clsId);
        AppState.labNotes[clsId] = {
            rows: JSON.parse(JSON.stringify(cls.dataCollectionTable.initialRows || [])),
            answers: {},
            execSummary: ''
        };
    }
    AppState.labNotes[clsId].rows[rowIdx][colIdx] = value;
    saveState();
};

window.addNotebookTableRow = function(clsId) {
    const cls = AppState.curriculum.find(c => c.id === clsId);
    if (!cls) return;

    if (!AppState.labNotes[clsId]) {
        AppState.labNotes[clsId] = {
            rows: JSON.parse(JSON.stringify(cls.dataCollectionTable.initialRows || [])),
            answers: {},
            execSummary: ''
        };
    }

    const colCount = cls.dataCollectionTable.headers.length;
    const newRow = Array(colCount).fill('');
    AppState.labNotes[clsId].rows.push(newRow);
    saveState();
    renderNotebookTab(cls);
};

window.deleteNotebookTableRow = function(clsId, rowIdx) {
    if (AppState.labNotes[clsId] && AppState.labNotes[clsId].rows) {
        AppState.labNotes[clsId].rows.splice(rowIdx, 1);
        saveState();
        const cls = AppState.curriculum.find(c => c.id === clsId);
        renderNotebookTab(cls);
    }
};

window.updateNotebookAnswer = function(clsId, qIdx, value) {
    if (!AppState.labNotes[clsId]) {
        AppState.labNotes[clsId] = { rows: [], answers: {}, execSummary: '' };
    }
    AppState.labNotes[clsId].answers[qIdx] = value;
    saveState();
};

window.updateNotebookExecSummary = function(clsId, value) {
    if (!AppState.labNotes[clsId]) {
        AppState.labNotes[clsId] = { rows: [], answers: {}, execSummary: '' };
    }
    AppState.labNotes[clsId].execSummary = value;
    saveState();
};

window.saveCurrentNotebook = function(clsId) {
    saveState();
    window.showToast?.('Lab notebook saved to local storage.', 'success');
};

window.exportLabReportMarkdown = function(clsId) {
    const cls = AppState.curriculum.find(c => c.id === clsId);
    if (!cls) return;

    const saved = AppState.labNotes[cls.id] || {
        rows: cls.dataCollectionTable.initialRows || [],
        answers: {},
        execSummary: ''
    };

    let md = `# CYBERSECURITY LABORATORY REPORT: CLASS ${cls.classNumber}\n`;
    md += `**Title:** ${cls.title}\n`;
    md += `**Phase:** ${cls.phaseTitle}\n`;
    md += `**Week:** ${cls.weekTitle}\n`;
    md += `**Target Environment:** ${cls.targetEnvironment}\n`;
    md += `**Methodology:** ${cls.philosophy || 'Build it. Find it. Fix it.'}\n`;
    md += `**Date:** ${new Date().toLocaleDateString()}\n\n`;

    if (cls.eli5Story) {
        md += `## 0. Beginner Analogy Concept\n> "${cls.eli5Story.analogy}"\n\n`;
    }

    md += `## 1. Executive Summary & Finding\n${saved.execSummary || 'No executive summary entered.'}\n\n`;
    
    md += `## 2. Technical Evidence & Data Table\n`;
    md += `| ${cls.dataCollectionTable.headers.join(' | ')} |\n`;
    md += `| ${cls.dataCollectionTable.headers.map(() => '---').join(' | ')} |\n`;
    saved.rows.forEach(r => {
        md += `| ${r.join(' | ')} |\n`;
    });
    md += `\n`;

    if (cls.evidenceChecklist) {
        md += `## 3. Evidence Screenshots Checklist (S1–S8)\n`;
        cls.evidenceChecklist.forEach(ev => {
            const isChecked = AppState.checkedEvidence[cls.id]?.[ev.id] || false;
            md += `- [${isChecked ? 'x' : ' '}] **${ev.id}**: ${ev.label}\n`;
        });
        md += `\n`;
    }

    md += `## 4. Reflection Answers\n`;
    cls.reflectionQuestions.forEach((qObj, idx) => {
        md += `### Q${idx + 1}: ${qObj.q}\n`;
        md += `**Answer:** ${saved.answers[idx] || '_Pending answer_'}\n\n`;
    });

    md += `## 5. Deliverable Verification\n${cls.deliverable}\n`;

    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Class_${cls.classNumber}_Lab_Report.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    window.showToast?.('Lab report exported as Markdown!', 'success');
};

function renderQuizTab(cls) {
    const container = document.getElementById('tab-pane-quiz');
    if (!container) return;

    const quiz = cls.quickQuiz;
    const currentAnswer = AppState.quizAnswers[cls.id];

    let html = `
        <div class="max-w-2xl mx-auto bg-[#0c1424] border border-cyan-900/50 rounded-xl p-6 space-y-6">
            <div class="border-b border-cyan-900/40 pb-4">
                <span class="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">Class ${cls.classNumber} Knowledge Verification</span>
                <h3 class="text-sm font-bold text-slate-100">${quiz.question}</h3>
            </div>

            <div class="space-y-3">
                ${quiz.options.map((opt, oIdx) => {
                    let btnClass = 'w-full text-left p-3.5 rounded-lg border text-xs transition-all flex items-center justify-between ';
                    
                    if (currentAnswer !== undefined) {
                        if (oIdx === quiz.answer) {
                            btnClass += 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-semibold';
                        } else if (currentAnswer === oIdx) {
                            btnClass += 'bg-red-950/80 border-red-500 text-red-200 font-semibold';
                        } else {
                            btnClass += 'bg-slate-900/40 border-slate-800 text-slate-500';
                        }
                    } else {
                        btnClass += 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-cyan-500 hover:text-cyan-200';
                    }

                    return `
                        <button onclick="answerQuiz(${cls.id}, ${oIdx})" ${currentAnswer !== undefined ? 'disabled' : ''} class="${btnClass}">
                            <span>${opt}</span>
                            ${currentAnswer !== undefined && oIdx === quiz.answer ? '<span class="text-emerald-400 font-bold">✓ Correct</span>' : ''}
                            ${currentAnswer !== undefined && currentAnswer === oIdx && oIdx !== quiz.answer ? '<span class="text-red-400 font-bold">✕ Incorrect</span>' : ''}
                        </button>
                    `;
                }).join('')}
            </div>

            ${currentAnswer !== undefined ? `
                <div class="bg-[#080e1c] border border-cyan-900/40 rounded-lg p-4 text-xs space-y-2">
                    <span class="font-bold text-cyan-400 block">Explanation:</span>
                    <p class="text-slate-300 leading-relaxed">${quiz.explanation}</p>
                    <button onclick="resetQuizAnswer(${cls.id})" class="mt-2 text-xs text-amber-400 hover:underline">
                        Retry Question
                    </button>
                </div>
            ` : ''}
        </div>
    `;

    container.innerHTML = html;
}

window.answerQuiz = function(clsId, selectedIdx) {
    AppState.quizAnswers[clsId] = selectedIdx;
    saveState();
    const cls = AppState.curriculum.find(c => c.id === clsId);
    if (cls) {
        renderQuizTab(cls);
        if (selectedIdx === cls.quickQuiz.answer) {
            window.showToast?.('Correct answer! Knowledge check passed.', 'success');
        } else {
            window.showToast?.('Incorrect choice. Review the explanation.', 'warning');
        }
    }
};

window.resetQuizAnswer = function(clsId) {
    delete AppState.quizAnswers[clsId];
    saveState();
    const cls = AppState.curriculum.find(c => c.id === clsId);
    if (cls) renderQuizTab(cls);
};

window.switchTab = function(tabName) {
    AppState.activeTab = tabName;
    const cls = AppState.curriculum.find(c => c.id === AppState.currentClassId);
    if (cls) renderTabContent(cls);
};

window.copyToClipboard = function(text) {
    navigator.clipboard.writeText(text);
    window.showToast?.('Command copied to clipboard!', 'success');
};

window.runCommandInTerminal = function(cmd, output) {
    switchTab('terminal');
    if (AppState.terminalInstance) {
        AppState.terminalInstance.run(cmd, output);
    }
};

function updateProgressStats() {
    const total = AppState.curriculum.length;
    const completed = AppState.completedClasses.size;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

    const countElem = document.getElementById('stat-completed-count');
    const pctElem = document.getElementById('stat-completed-pct');
    const barElem = document.getElementById('stat-progress-bar');

    if (countElem) countElem.textContent = `${completed} / ${total}`;
    if (pctElem) pctElem.textContent = `${pct}% Complete`;
    if (barElem) barElem.style.width = `${pct}%`;
}

function bindGlobalEvents() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            AppState.searchQuery = e.target.value;
            renderSidebar();
        });
    }

    document.getElementById('filter-phase')?.addEventListener('change', (e) => {
        AppState.filterPhase = e.target.value;
        renderSidebar();
    });

    document.getElementById('filter-week')?.addEventListener('change', (e) => {
        AppState.filterWeek = e.target.value;
        renderSidebar();
    });

    document.getElementById('filter-category')?.addEventListener('change', (e) => {
        AppState.filterCategory = e.target.value;
        renderSidebar();
    });

    document.getElementById('filter-status')?.addEventListener('change', (e) => {
        AppState.filterStatus = e.target.value;
        renderSidebar();
    });

    document.getElementById('mark-complete-btn')?.addEventListener('click', () => {
        const id = AppState.currentClassId;
        if (AppState.completedClasses.has(id)) {
            AppState.completedClasses.delete(id);
            window.showToast?.('Lab marked as incomplete.', 'info');
        } else {
            AppState.completedClasses.add(id);
            window.showToast?.('Lab marked as complete! Well done.', 'success');
        }
        saveState();
        renderSidebar();
        renderCurrentClass();
        updateProgressStats();
    });

    document.querySelectorAll('.tab-nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.getAttribute('data-tab');
            if (tab) switchTab(tab);
        });
    });

    const instructorBtn = document.getElementById('instructor-studio-btn');
    const modal = document.getElementById('instructor-modal');
    const closeModalBtn = document.getElementById('close-instructor-modal');

    if (instructorBtn && modal) {
        instructorBtn.addEventListener('click', () => {
            populateInstructorModal();
            modal.classList.remove('hidden');
        });
    }

    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }
}

function populateInstructorModal() {
    const cls = AppState.curriculum.find(c => c.id === AppState.currentClassId);
    if (!cls) return;

    document.getElementById('edit-class-title').value = cls.title;
    document.getElementById('edit-class-category').value = cls.category;
    document.getElementById('edit-class-duration').value = cls.duration;
    document.getElementById('edit-class-difficulty').value = cls.difficulty;
    document.getElementById('edit-class-objective').value = cls.objective;
    document.getElementById('edit-class-target').value = cls.targetEnvironment;
    document.getElementById('edit-class-tools').value = cls.tools.join(', ');
}

window.saveInstructorEdits = function() {
    const cls = AppState.curriculum.find(c => c.id === AppState.currentClassId);
    if (!cls) return;

    cls.title = document.getElementById('edit-class-title').value;
    cls.category = document.getElementById('edit-class-category').value;
    cls.duration = document.getElementById('edit-class-duration').value;
    cls.difficulty = document.getElementById('edit-class-difficulty').value;
    cls.objective = document.getElementById('edit-class-objective').value;
    cls.targetEnvironment = document.getElementById('edit-class-target').value;
    cls.tools = document.getElementById('edit-class-tools').value.split(',').map(s => s.trim()).filter(Boolean);

    localStorage.setItem(STORAGE_KEYS.CURRICULUM, JSON.stringify(AppState.curriculum));
    window.showToast?.('Class details updated in local storage!', 'success');

    document.getElementById('instructor-modal')?.classList.add('hidden');
    renderSidebar();
    renderCurrentClass();
};

window.exportCurriculumJSON = function() {
    const jsonStr = JSON.stringify(AppState.curriculum, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cybersecurity_24week_curriculum.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    window.showToast?.('Curriculum JSON exported successfully!', 'success');
};

window.importCurriculumJSON = function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const imported = JSON.parse(e.target.result);
            if (Array.isArray(imported) && imported.length > 0) {
                AppState.curriculum = imported;
                localStorage.setItem(STORAGE_KEYS.CURRICULUM, JSON.stringify(imported));
                window.showToast?.(`Imported ${imported.length} classes successfully!`, 'success');
                document.getElementById('instructor-modal')?.classList.add('hidden');
                initApp();
            } else {
                alert('Invalid curriculum JSON format: expected an array of classes.');
            }
        } catch (err) {
            alert('Failed to parse JSON file.');
        }
    };
    reader.readAsText(file);
};

window.resetToDefaultCurriculum = function() {
    if (confirm('Are you sure you want to reset all modifications back to default?')) {
        localStorage.removeItem(STORAGE_KEYS.CURRICULUM);
        AppState.curriculum = window.CYBER_CURRICULUM || [];
        window.showToast?.('Curriculum reset to default!', 'info');
        document.getElementById('instructor-modal')?.classList.add('hidden');
        renderSidebar();
        renderCurrentClass();
    }
};

function escapeHtml(text) {
    if (!text) return '';
    return text.toString()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function escapeJsString(text) {
    if (!text) return '';
    return text.toString()
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '');
}
