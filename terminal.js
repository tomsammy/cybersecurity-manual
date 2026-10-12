/**
 * Interactive Cyber Terminal Simulator
 * Emulates Bash, Cisco IOS, Metasploit, PowerShell, and Forensics shells
 * with realistic command responses for the 24-week syllabus and student labs.
 */

class CyberTerminal {
    constructor(containerId, initialPrompt = 'kali@purple-box:~$ ') {
        this.container = document.getElementById(containerId);
        this.currentPrompt = initialPrompt;
        this.history = [];
        this.historyIndex = -1;
        this.customOutputs = {};
        this.init();
    }

    init() {
        if (!this.container) return;
        this.container.innerHTML = `
            <div class="terminal-wrapper flex flex-col h-full bg-[#0a0f1d] border border-cyan-900/60 rounded-xl overflow-hidden shadow-2xl font-mono text-sm">
                <!-- Terminal Header Bar -->
                <div class="terminal-header bg-[#0e1628] border-b border-cyan-900/50 px-4 py-2.5 flex items-center justify-between select-none">
                    <div class="flex items-center space-x-2">
                        <span class="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                        <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                        <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                        <span id="term-title" class="ml-2 text-xs font-semibold text-cyan-400 tracking-wider">SEC-TERM :: KALI PURPLE CONSOLE</span>
                    </div>
                    <div class="flex items-center space-x-3 text-xs text-slate-400">
                        <button id="term-clear-btn" class="hover:text-cyan-300 transition-colors flex items-center gap-1 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                            <span>Clear</span>
                        </button>
                        <button id="term-copy-all" class="hover:text-cyan-300 transition-colors flex items-center gap-1 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                            <span>Copy Buffer</span>
                        </button>
                        <span class="text-emerald-400 flex items-center gap-1">
                            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                            ONLINE
                        </span>
                    </div>
                </div>

                <!-- Terminal Output Buffer -->
                <div id="term-output" class="flex-1 p-4 overflow-y-auto space-y-2 text-slate-200 leading-relaxed scrollbar-thin scrollbar-thumb-slate-700">
                    <div class="text-cyan-400 font-bold mb-2">
                        =========================================================================<br/>
                        &nbsp;* 24-WEEK CYBERSECURITY &amp; SOC INTERACTIVE LAB ENVIRONMENT *<br/>
                        &nbsp;Target Sandbox: Isolated Non-Production Network (192.168.1.0/24)<br/>
                        &nbsp;Type <span class="text-amber-400 font-bold">help</span> or click '▶ Run in Terminal' on any lab step.<br/>
                        =========================================================================
                    </div>
                </div>

                <!-- Terminal Prompt Line -->
                <div class="terminal-input-bar bg-[#0b1222] border-t border-cyan-900/40 p-3 flex items-center gap-2">
                    <span id="term-prompt" class="text-emerald-400 font-semibold select-none whitespace-nowrap">${this.currentPrompt}</span>
                    <input type="text" id="term-input" class="flex-1 bg-transparent border-0 outline-none text-cyan-200 font-mono text-sm caret-cyan-400 placeholder:text-slate-600" placeholder="Type a command (e.g. whoami, id, cat, help)..." autocomplete="off" spellcheck="false" />
                    <button id="term-exec-btn" class="bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold px-3 py-1 rounded text-xs transition-colors flex items-center gap-1">
                        Run
                    </button>
                </div>
            </div>
        `;

        this.outputElem = document.getElementById('term-output');
        this.inputElem = document.getElementById('term-input');
        this.promptElem = document.getElementById('term-prompt');
        this.titleElem = document.getElementById('term-title');

        this.attachEventListeners();
    }

    attachEventListeners() {
        if (!this.inputElem) return;

        this.inputElem.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const cmd = this.inputElem.value.trim();
                if (cmd) {
                    this.history.push(cmd);
                    this.historyIndex = this.history.length;
                    this.executeCommand(cmd);
                    this.inputElem.value = '';
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (this.historyIndex > 0) {
                    this.historyIndex--;
                    this.inputElem.value = this.history[this.historyIndex];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (this.historyIndex < this.history.length - 1) {
                    this.historyIndex++;
                    this.inputElem.value = this.history[this.historyIndex];
                } else {
                    this.historyIndex = this.history.length;
                    this.inputElem.value = '';
                }
            }
        });

        const execBtn = document.getElementById('term-exec-btn');
        if (execBtn) {
            execBtn.addEventListener('click', () => {
                const cmd = this.inputElem.value.trim();
                if (cmd) {
                    this.history.push(cmd);
                    this.historyIndex = this.history.length;
                    this.executeCommand(cmd);
                    this.inputElem.value = '';
                }
            });
        }

        const clearBtn = document.getElementById('term-clear-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clear());
        }

        const copyBtn = document.getElementById('term-copy-all');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                const text = this.outputElem.innerText;
                navigator.clipboard.writeText(text);
                window.showToast?.('Terminal buffer copied to clipboard!');
            });
        }
    }

    setPrompt(promptText, titleText = null) {
        this.currentPrompt = promptText;
        if (this.promptElem) this.promptElem.textContent = promptText;
        if (titleText && this.titleElem) this.titleElem.textContent = titleText;
    }

    writeLine(html, className = '') {
        if (!this.outputElem) return;
        const div = document.createElement('div');
        if (className) div.className = className;
        div.innerHTML = html;
        this.outputElem.appendChild(div);
        this.outputElem.scrollTop = this.outputElem.scrollHeight;
    }

    clear() {
        if (this.outputElem) {
            this.outputElem.innerHTML = '';
            this.writeLine(`<span class="text-slate-500 text-xs">Terminal cleared. Type 'help' for available commands.</span>`);
        }
    }

    registerCustomOutput(cmdSubstring, outputText) {
        this.customOutputs[cmdSubstring.toLowerCase()] = outputText;
    }

    run(commandText, expectedOutput = null) {
        this.writeLine(`<span class="text-emerald-400 font-semibold">${this.currentPrompt}</span> <span class="text-white font-bold">${this.escapeHtml(commandText)}</span>`);
        
        setTimeout(() => {
            if (expectedOutput) {
                this.formatAndPrintOutput(expectedOutput);
            } else {
                this.executeSimulatedCommand(commandText);
            }
        }, 150);
    }

    executeCommand(cmd) {
        this.writeLine(`<span class="text-emerald-400 font-semibold">${this.currentPrompt}</span> <span class="text-white font-bold">${this.escapeHtml(cmd)}</span>`);
        this.executeSimulatedCommand(cmd);
    }

    executeSimulatedCommand(cmd) {
        const lower = cmd.toLowerCase().trim();

        // Custom registered outputs
        for (const [key, val] of Object.entries(this.customOutputs)) {
            if (lower.includes(key)) {
                this.formatAndPrintOutput(val);
                return;
            }
        }

        if (lower === 'clear') {
            this.clear();
            return;
        }

        if (lower === 'help') {
            this.writeLine(`
<div class="text-cyan-300 font-bold mb-1">Available Interactive Simulator Commands:</div>
<div class="text-slate-300 grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
  <div><span class="text-amber-400">whoami / id</span> - Current user &amp; privilege level</div>
  <div><span class="text-amber-400">su - trainee / exit</span> - Switch user account</div>
  <div><span class="text-amber-400">cat /root/suid-lab-flag.txt</span> - Test read of protected flag</div>
  <div><span class="text-amber-400">/opt/suid-lab/find ...</span> - Execute SUID find binary</div>
  <div><span class="text-amber-400">./linpeas.sh</span> - Run LinPEAS privilege escalation scan</div>
  <div><span class="text-amber-400">nmap -sS -sV &lt;ip&gt;</span> - Port &amp; version scanner</div>
  <div><span class="text-amber-400">ping -c 4 &lt;ip&gt;</span> - ICMP echo reachability test</div>
  <div><span class="text-amber-400">msfconsole</span> - Launch Metasploit Framework</div>
  <div><span class="text-amber-400">show ip int br</span> - Cisco interface table</div>
  <div><span class="text-amber-400">wazuh-control status</span> - Wazuh SIEM status</div>
</div>
            `);
            return;
        }

        // User switching simulation
        if (lower === 'su - trainee') {
            this.setPrompt('trainee@ubuntu:~$ ', 'SEC-TERM :: UBUNTU 24.04 (TRAINEE AUDITOR)');
            this.formatAndPrintOutput(`[+] Switched to user trainee (UID 1001). Low privilege session active.`);
            return;
        }

        if (lower === 'exit') {
            if (this.currentPrompt.includes('trainee')) {
                this.setPrompt('labadmin@ubuntu:~$ ', 'SEC-TERM :: UBUNTU 24.04 (ADMINISTRATOR)');
                this.formatAndPrintOutput(`logout\n[+] Returned to labadmin session.`);
            } else {
                this.setPrompt('kali@purple-box:~$ ', 'SEC-TERM :: KALI PURPLE CONSOLE');
                this.formatAndPrintOutput(`[*] Connection closed. Returning to local terminal.`);
            }
            return;
        }

        // Whoami / Id simulation
        if (lower === 'whoami') {
            if (this.currentPrompt.includes('trainee')) {
                this.formatAndPrintOutput(`trainee`);
            } else if (this.currentPrompt.includes('labadmin')) {
                this.formatAndPrintOutput(`labadmin`);
            } else if (this.currentPrompt.includes('root')) {
                this.formatAndPrintOutput(`root`);
            } else {
                this.formatAndPrintOutput(`kali`);
            }
            return;
        }

        if (lower === 'id') {
            if (this.currentPrompt.includes('trainee')) {
                this.formatAndPrintOutput(`uid=1001(trainee) gid=1001(trainee) groups=1001(trainee)`);
            } else if (this.currentPrompt.includes('labadmin')) {
                this.formatAndPrintOutput(`uid=1000(labadmin) gid=1000(labadmin) groups=1000(labadmin),27(sudo)`);
            } else {
                this.formatAndPrintOutput(`uid=0(root) gid=0(root) groups=0(root)`);
            }
            return;
        }

        // Flag access tests
        if (lower === 'cat /root/suid-lab-flag.txt' || lower.includes('cat /root/')) {
            if (this.currentPrompt.includes('root') || this.currentPrompt.includes('labadmin')) {
                this.formatAndPrintOutput(`LAB{SUID_FIND_SUCCESS}`);
            } else {
                this.formatAndPrintOutput(`cat: /root/suid-lab-flag.txt: Permission denied`);
            }
            return;
        }

        // SUID find exploit commands
        if (lower.includes('/opt/suid-lab/find') && lower.includes('-exec') && lower.includes('flag')) {
            this.formatAndPrintOutput(`LAB{SUID_FIND_SUCCESS}`);
            return;
        }

        if (lower.includes('/opt/suid-lab/find') && lower.includes('-exec') && lower.includes('id')) {
            this.formatAndPrintOutput(`uid=1001(trainee) gid=1001(trainee) euid=0(root) groups=1001(trainee)`);
            return;
        }

        if (lower.includes('/usr/bin/find') && lower.includes('-exec') && lower.includes('flag')) {
            this.formatAndPrintOutput(`/usr/bin/cat: /root/suid-lab-flag.txt: Permission denied`);
            return;
        }

        if (lower.includes('stat') && lower.includes('/opt/suid-lab/find')) {
            this.formatAndPrintOutput(`-rwsr-xr-x 4755 root:root /opt/suid-lab/find`);
            return;
        }

        if (lower.includes('stat') && lower.includes('/usr/bin/find')) {
            this.formatAndPrintOutput(`-rwxr-xr-x 755 root:root /usr/bin/find`);
            return;
        }

        if (lower.includes('linpeas')) {
            this.formatAndPrintOutput(`                            ................\n                        .::::::::::::::::::::.\n... PEASS - Privilege Escalation Awesome Scripts Suite ...\n[+] LinPEAS completed scan.\n[!] SUID binary identified: /opt/suid-lab/find (-rwsr-xr-x)`);
            return;
        }

        // Ping
        if (lower.startsWith('ping')) {
            const ip = lower.split(' ').pop() || '192.168.1.105';
            this.formatAndPrintOutput(`PING ${ip} (${ip}) 56(84) bytes of data.\n64 bytes from ${ip}: icmp_seq=1 ttl=64 time=0.452 ms\n64 bytes from ${ip}: icmp_seq=2 ttl=64 time=0.318 ms\n64 bytes from ${ip}: icmp_seq=3 ttl=64 time=0.294 ms\n64 bytes from ${ip}: icmp_seq=4 ttl=64 time=0.330 ms\n--- ${ip} ping statistics ---\n4 packets transmitted, 4 received, 0% packet loss`);
            return;
        }

        // Fallback
        this.formatAndPrintOutput(`[+] Command executed:\n$ ${this.escapeHtml(cmd)}\n[INFO] Command processed successfully (Exit code: 0).`);
    }

    formatAndPrintOutput(outputStr) {
        const lines = outputStr.split('\n');
        lines.forEach(line => {
            let colorClass = 'text-slate-300';
            if (line.includes('LAB{') || line.includes('euid=0') || line.includes('VULNERABLE') || line.includes('CRITICAL') || line.includes('root')) {
                colorClass = 'text-emerald-400 font-bold';
            } else if (line.includes('Permission denied') || line.includes('WARNING') || line.includes('FAIL')) {
                colorClass = 'text-amber-400 font-semibold';
            } else if (line.startsWith('[*]') || line.startsWith('PORT') || line.startsWith('===') || line.startsWith('---')) {
                colorClass = 'text-cyan-300';
            } else if (line.startsWith('[+]')) {
                colorClass = 'text-emerald-300';
            }
            this.writeLine(`<span class="${colorClass}">${this.escapeHtml(line)}</span>`);
        });
    }

    escapeHtml(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }
}

window.CyberTerminal = CyberTerminal;
