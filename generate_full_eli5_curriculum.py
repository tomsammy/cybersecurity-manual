import json
import os
from class11_data import CLASS_11_DATA

# ELI5 Analogies and titles for all 48 classes
ELI5_MAP = {
    1: {
        "title": "The House Floorplan Tour (Linux for a 5-Year-Old)",
        "analogy": "Before you clean your bedroom or play hide-and-seek, you need to turn on the lights and see where the doors, cupboards, and toy boxes are! In Linux, we use simple words like 'whoami' to ask 'Who am I?', 'ls' to see our toys, and simple scripts to check all the open windows so nobody sneaks in."
    },
    2: {
        "title": "The Postcard vs The Locked Secret Box (Packet Sniffing)",
        "analogy": "Imagine writing your secret lunch money password on a clear postcard and tossing it down the school hallway. Anyone standing in the hall can read it with their eyes! That is HTTP. In this lab, we use a special net called Wireshark to catch that clear postcard in the air."
    },
    3: {
        "title": "The Public Phonebook and Map Explorer (OSINT)",
        "analogy": "Before detectives visit a building, they look at Google Maps, the town phonebook, and newspaper articles from home without ever touching the building's doorbell. That is Open-Source Intelligence (OSINT)!"
    },
    4: {
        "title": "Checking Every Door and Window in the Castle (Nmap Scanning)",
        "analogy": "Imagine a big castle with 65,535 little windows. Nmap is like a quick friendly guard who gently knocks on each window to see: Is it open? Who is sitting inside? And what name badge are they wearing? If an old broken lock is spotted, we write it down!"
    },
    5: {
        "title": "The Master Skeleton Key and the Robot Puppet (Metasploit)",
        "analogy": "Vulnerability scanning found an unlocked back door. Metasploit is like a tool box containing the exact key that fits that lock. Once inside, it attaches a friendly helper puppet (a payload) so we can prove the lock was broken."
    },
    6: {
        "title": "Guessing the Toy Box Passcode & The Secret Salt Recipe",
        "analogy": "If someone uses 'password123', a robot can guess it in one second! But if we add a sprinkle of secret salt (random letters) and stir it up into a soup (hashing), nobody can turn the soup back into the password!"
    },
    7: {
        "title": "The Letter Carrier Interceptor (Burp Suite Proxy)",
        "analogy": "Imagine you write a note to the toy store: 'I want this toy for $100'. A friendly mail carrier (Burp Suite) holds the letter in the air, lets you erase '$100' and write '$1', and then delivers it to see if the store notices!"
    },
    8: {
        "title": "Tricking the Magic Librarian with 'OR 1=1' (SQL Injection)",
        "analogy": "You ask the magical library robot: 'Show me my secret book IF my name is Timmy OR IF 1 equals 1!' Because 1 always equals 1, the confused robot dumps the entire library on the floor!"
    },
    9: {
        "title": "The Sticky Note Prank that Steals Visitor Stickers (Cross-Site Scripting)",
        "analogy": "An attacker leaves a prank note on the school bulletin board. When another student walks up to read it, the note magically unsticks their hall pass badge and mails it to the attacker!"
    },
    10: {
        "title": "Climbing Backwards Out the Kitchen Window (LFI & Directory Traversal)",
        "analogy": "When a computer program says 'Which picture do you want?', you type '../../../../' to climb up the stairs into the private attic and read the secret diary (/etc/passwd)!"
    },
    12: {
        "title": "The Confused Delivery Truck (Windows Unquoted Service Paths)",
        "analogy": "A delivery driver has a note that says: 'Drive to C:\\Program Files\\My App\\service.exe'. Because there are no quote marks, the driver gets confused and drops the package at 'C:\\Program.exe' first!"
    },
    13: {
        "title": "The Pretend Mail Carrier Answering Shouts (Responder & MitM)",
        "analogy": "A student stands in the courtyard shouting: 'Does anyone know where the printer is?' A rogue student quickly yells back: 'I do! Give me your lunch ticket!' That is LLMNR poisoning."
    },
    14: {
        "title": "The Castle Map to the Royal Throne (BloodHound AD)",
        "analogy": "Active Directory is a giant maze of friendships and keys. BloodHound draws a treasure map showing: 'If you ask the gardener for their key, you can unlock the pantry, which unlocks the King's tower!'"
    },
    15: {
        "title": "The Secret Walkie-Talkie Tunnel (Chisel Pivoting)",
        "analogy": "You are inside a room with a closed metal vault. But your friend has one hand inside the vault and one hand in the hallway. You hand them a walkie-talkie so you can talk straight into the vault!"
    },
    16: {
        "title": "The Security Camera Playback Machine (Splunk Log Analysis)",
        "analogy": "Splunk is like having a giant TV room that records every footprint, open door, and light switch so detectives can rewind time and watch exactly who stole the cookies!"
    },
    17: {
        "title": "The Magic Password Door to the Switch (Management Plane Hardening)",
        "analogy": "If you don't lock the switch management door, anyone walking by can plug in and change the rules. We install strong SSHv2 locks and automatic timeout alarms."
    },
    18: {
        "title": "The Guard Dog That Only Knows Your Collar (Port Security Sticky MAC)",
        "analogy": "The network port learns the exact hardware collar (MAC address) of your laptop. If a stranger unplugs your cable and plugs in their own laptop, the port instantly goes to sleep (shutdown)!"
    },
    19: {
        "title": "The Tall Fences Between the Playgrounds (VLAN Hopping Defense)",
        "analogy": "Kindergarteners belong in Kindergarten, and High Schoolers belong in High School. We lock the gate and turn off automatic fence-moving so nobody can jump over the wall!"
    },
    20: {
        "title": "The Fake Cafeteria Lunch Lady (DHCP Snooping)",
        "analogy": "A rogue computer pretends to be the teacher handing out desk numbers. DHCP Snooping makes sure only the REAL approved teacher is allowed to hand out network addresses."
    },
    21: {
        "title": "The Nametag Inspector at the Front Door (Dynamic ARP Inspection)",
        "analogy": "A bully says: 'Hey everybody, I am the teacher now! Give me your homework!' Dynamic ARP Inspection checks the official school list to kick out anyone lying about their identity."
    },
    22: {
        "title": "The Bouncer with the Guest List (Access Control Lists - ACLs)",
        "analogy": "An ACL is a security guard standing at the door with a clipboard: 'Web traffic on port 80 may come in; Ping echoes are turned away!'"
    },
    23: {
        "title": "The Central Student ID Office (AAA RADIUS/TACACS+)",
        "analogy": "Instead of having a different lock on 50 doors, every guard calls the Central Office to ask: 'Is Timmy allowed in? What permissions does he have?'"
    },
    24: {
        "title": "The One-Way Playground Turnstile (Zone-Based Firewalls)",
        "analogy": "Kids can walk OUT of the school onto the soccer field, and the turnstile lets them walk back in. But strangers outside can never push the turnstile to walk in uninvited!"
    },
    25: {
        "title": "The Big Fortress Gatekeeper (Cisco ASA Firewall)",
        "analogy": "The ASA firewall is a big heavy iron wall dividing the trusted castle (inside) from the wild forest (outside)."
    },
    26: {
        "title": "The Masked Disguise for Outside Visitors (NAT & PAT)",
        "analogy": "When 100 students go on a field trip, they all wear the same school mascot costume so nobody on the street knows their private home addresses!"
    },
    27: {
        "title": "The Secret Underground Pipe Across Town (GRE Tunnels)",
        "analogy": "Two treehouses on opposite sides of town connect a cardboard pipe across the street so they can pass notes directly."
    },
    28: {
        "title": "The Armored Guard Escort for the Secret Pipe (IPsec Encryption)",
        "analogy": "Cardboard pipes can be peeked into! IPsec wraps that pipe in titanium armor and scrambles all the letters inside into secret code."
    },
    29: {
        "title": "The Magic Teleport Gate for Homeworkers (AnyConnect Remote VPN)",
        "analogy": "When an employee works from home in their pajamas, AnyConnect puts an invisible bubble around their laptop so it acts like it is sitting right inside headquarters!"
    },
    30: {
        "title": "The Unbreakable Black Box Flight Recorder (Syslog & SNMPv3)",
        "analogy": "Whenever anything moves, an airplane records it in a flame-proof black box. Syslog sends all events to a safe server so nobody can erase their tracks."
    },
    31: {
        "title": "The Smart Metal Detector at the Gate (Router IOS IPS)",
        "analogy": "A metal detector listens and looks at everything walking through the gate. If it sees a pattern matching a dangerous weapon, it shuts the door instantly!"
    },
    32: {
        "title": "The Big Castle Security Inspection Capstone",
        "analogy": "You are the Chief Inspector. You walk around the entire kingdom checking every lock, fence, gate, and rule we built over the last 8 weeks!"
    },
    33: {
        "title": "The Central Control Room Tower (Wazuh SIEM)",
        "analogy": "The SIEM is a giant control room with 100 TV screens where all security guards across the kingdom send their notes simultaneously!"
    },
    34: {
        "title": "The Little Watchtower Sentries (Wazuh Agents)",
        "analogy": "A friendly security guard is stationed on every computer. Whenever a door opens or someone types a bad password, the guard radios the main control tower."
    },
    35: {
        "title": "Teaching the Alarm Bell When to Ring (Custom SIEM Rules)",
        "analogy": "If someone drops a pencil, don't ring the fire alarm! But if someone tries 5 wrong keys in 1 minute, sound the siren! That is rule tuning."
    },
    36: {
        "title": "The Detective's Microscopic Notebook (Windows Sysmon)",
        "analogy": "Sysmon writes down the exact name of every program that woke up, who woke it up, and what command parameters it carried in its backpack."
    },
    37: {
        "title": "Finding the Sneaky Wolf in Sheep's Clothing (EDR Hunting)",
        "analogy": "A sneaky wolf puts on a sheep sweater and says 'My name is svchost.exe!'. The EDR detective looks at where it lives and what it is whispering into the network to catch the fake!"
    },
    38: {
        "title": "The Emergency Safety Bubble (Live EDR Isolation)",
        "analogy": "When a computer is infected, we hit the red button! An invisible bubble wraps around it: it can't talk to any other computers, but the detective can still look inside!"
    },
    39: {
        "title": "Checking the Return Address on the Fake Birthday Card (Phishing Headers)",
        "analogy": "You get a letter that says 'Free Ice Cream from Santa!'. You flip the envelope over and see a stamp from a stranger down the street. That is checking email headers."
    },
    40: {
        "title": "The Bomb Squad Blast Box (Malware Detonation Sandbox)",
        "analogy": "When you find a mysterious suspicious package, you don't open it on your desk! You put it inside a bomb-proof glass box (Any.Run) and watch what it does!"
    },
    41: {
        "title": "The Detective's Clue Board Matrix (MITRE ATT&CK)",
        "analogy": "A big poster on the wall listing every trick a burglar might try, from picking locks to hiding in the closet, so we know what they will do next!"
    },
    42: {
        "title": "Separating False Alarms from Real Campfires (SOC Alert Triaging)",
        "analogy": "Sometimes toast burns and sets off the smoke alarm (False Positive). Sometimes there is real fire (True Positive). A SOC analyst knows how to tell the difference fast!"
    },
    43: {
        "title": "Listening to the Secret Spy Morse Code Radio (PCAP Malware Patterns)",
        "analogy": "A sneaky spy program sends a tiny beep every 30 seconds back to the villain. We listen to the network waves and measure the rhythm of the beeps!"
    },
    44: {
        "title": "The Super-Fast Tripwire Alarm (Suricata NIDS)",
        "analogy": "Suricata is a super-fast tripwire stretched across the network highway that sounds an alert the split second it spots a known bad word!"
    },
    45: {
        "title": "Freezing the Brain of the Computer (Volatility Memory Forensics)",
        "analogy": "When a villain erases their files on disk, their thoughts are still running inside the computer's live brain (RAM)! Volatility takes an X-ray of those thoughts!"
    },
    46: {
        "title": "Dusting for Fingerprints on the Storage Drive (Autopsy Forensics)",
        "analogy": "Even when a thief tries to wipe the dust, their shoes left footprints in the carpet (Prefetch) and open folders (Shellbags). Autopsy finds the footprints!"
    },
    47: {
        "title": "The Ultimate Castle Defense Live Simulation (Purple Team)",
        "analogy": "The attackers launch everything they have at the castle walls, and the defenders watch their radar screens and lock the gates in real time!"
    },
    48: {
        "title": "The Chief Detective's Final Report to the King (Executive Incident Report)",
        "analogy": "You write a clear, honest letter to the King: Here is how the thief got in, here is what they touched, here is how we caught them, and here is how to make sure it never happens again!"
    }
}

def generate_curriculum():
    with open('cybersecurity-manual/curriculumData.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract existing classes
    start = content.find('[')
    end = content.rfind(']') + 1
    raw_json = content[start:end]
    existing = json.loads(raw_json)

    updated = []
    for cls in existing:
        c_id = cls['id']
        
        # If Class 11, replace with the exact 12-page workbook data!
        if c_id == 11:
            updated.append(CLASS_11_DATA)
            continue
        
        # For other classes, enrich them with ELI5, 3-way proof, and troubleshooting!
        eli5_info = ELI5_MAP.get(c_id, {
            "title": f"The Basic Concept Behind {cls['title']}",
            "analogy": f"This lab teaches {cls['objective']} in a simple, step-by-step beginner friendly manner."
        })

        cls['eli5Story'] = eli5_info
        cls['philosophy'] = "Build it. Find it. Fix it."
        cls['learningMethod'] = "Create -> Baseline test -> Enumerate -> Analyse -> Verify -> Remediate -> Retest"
        
        cls['roles'] = {
            "admin": "labadmin / Defender (Infrastructure configuration & remediation)",
            "trainee": "trainee / Security Auditor (Discovery & validation)"
        }

        # 3-Way Security Comparison Table
        tool_name = cls['tools'][0] if cls['tools'] else 'Standard Utility'
        cls['threeWayProof'] = {
            "title": f"The 3-Way Security Comparison Table for Class {c_id}",
            "headers": ["Test Executed", "Command", "Expected Outcome", "What it Proves to a Beginner"],
            "rows": [
                ["Baseline Test", "Standard connection test", "Protected / Normal State", "The default control is operational under ordinary conditions."],
                ["Vulnerability Validation", f"Testing with {tool_name}", "Finding / Vulnerability Flagged", "Proves the specific weakness can realistically be reached."],
                ["Post-Remediation Retest", "Rerun validation command", "Access Denied / Blocked", "Proves the defensive patch successfully stopped the issue!"]
            ]
        }

        # Evidence Checklist
        cls['evidenceChecklist'] = [
            {"id": "S1", "label": f"Baseline configuration of {cls['targetEnvironment']}"},
            {"id": "S2", "label": "Initial reachability and environment validation"},
            {"id": "S3", "label": f"Primary discovery scan or execution using {tool_name}"},
            {"id": "S4", "label": "Detailed evidence of finding or vulnerability flagged"},
            {"id": "S5", "label": "Independent manual verification of the observed risk"},
            {"id": "S6", "label": "Controlled demonstration of security impact"},
            {"id": "S7", "label": "Remediation step execution (hardening/patching)"},
            {"id": "S8", "label": "Post-remediation retest proving the vulnerability is closed"}
        ]

        # Troubleshooting Table
        cls['troubleshootingTable'] = [
            {"problem": "Target host unreachable / ping timeout", "cause": "VM network adapters on different subnets or guest firewall dropping ICMP.", "fix": "Ensure both VMs are on the same Host-Only or NAT network adapter in hypervisor settings."},
            {"problem": "Command not found", "cause": "Required tool package is not installed or not in system PATH.", "fix": f"Install required tools using package manager: sudo apt update && sudo apt install -y {tool_name.lower().split()[0]}."},
            {"problem": "Permission denied during execution", "cause": "Executing an administrative command without appropriate sudo permissions.", "fix": "Prefix command with 'sudo' if in admin role, or verify account permissions."},
            {"problem": "Output differs from workbook example", "cause": "Software version difference or service not currently running.", "fix": "Verify target service status with systemctl or netstat before testing."}
        ]

        # Assessment Rubric
        cls['assessmentRubric'] = {
            "totalMarks": 100,
            "criteria": [
                {"component": "Requirements, environment isolation and baseline setup", "marks": 15},
                {"component": "Execution of discovery and configuration tasks", "marks": 15},
                {"component": "Accurate detection and verification of findings", "marks": 20},
                {"component": "Controlled demonstration of security implications", "marks": 20},
                {"component": "Remediation implementation and verified retest", "marks": 20},
                {"component": "Documentation, screenshots and reflection quality", "marks": 10}
            ]
        }

        updated.append(cls)

    out_file = "cybersecurity-manual/curriculumData.js"
    json_str = json.dumps(updated, indent=2)
    js_content = f"// 24-Week Master Cybersecurity Curriculum Data (48 Classes - Fully Enriched ELI5)\nwindow.CYBER_CURRICULUM = {json_str};\n"
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Successfully wrote {len(updated)} enriched classes into {out_file} ({len(js_content)} bytes).")

if __name__ == "__main__":
    generate_curriculum()
