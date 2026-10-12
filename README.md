# 🛡️ 24-Week Cybersecurity, Network Defense, & SOC Operations Master Manual

An interactive, student-led, zero-theory laboratory manual built for **complete beginners**, breaking down every complex cybersecurity concept into vivid, child-simple analogies (**Explain Like I'm 5 Years Old - ELI5**) and following the industry gold-standard **"Build it. Find it. Fix it."** learning rhythm.

Directly adapted from **`Student_Led_LinPEAS_GTFOBins_SUID_Lab.pdf`** and the **24-Week Master Syllabus**.

---

## 🌟 Pedagogical Framework ("Broken Down for a 5-Year-Old")

### 1. The ELI5 Conceptual Story
Every single lab opens with a crystal-clear, zero-jargon story before learners touch a terminal.
> *Example (SUID Permissions):*  
> "Imagine a school where only the Principal is allowed to open the special candy drawer with their Golden Badge. One day, the Principal leaves a pair of scissors on the desk stamped with a magic sticker: 'Whoever picks up these scissors is allowed to act as the Principal while using them!' An ordinary student picks up the scissors, cuts open the lock, and grabs the candy. That magic sticker is called SUID (Set User ID). In Linux, if a tool owned by root has SUID, any ordinary student who runs it borrows the Principal's superpowers!"

### 2. The "Build it. Find it. Fix it." Learning Rhythm
Students don't just hack pre-made black boxes. They experience the complete engineering lifecycle:
$$\text{Create} \longrightarrow \text{Baseline Test} \longrightarrow \text{Enumerate} \longrightarrow \text{Analyse} \longrightarrow \text{Verify} \longrightarrow \text{Remediate} \longrightarrow \text{Retest}$$

- **Roles Included:**
  - 🛠️ `labadmin` (Administrator who sets up the environment, creates safe practice configurations, and applies the defensive fix)
  - 🔍 `trainee` (Security Auditor who conducts unauthorized-as-trainee discovery and validation)

### 3. The 3-Way Security Proof Table
Every lab verifies security across 3 distinct test states:
1. **Direct Test (Test 1):** Normal non-privileged action (`cat /root/flag.txt` $\rightarrow$ **Permission denied**)
2. **Vulnerability Demonstration (Test 2):** Exploitation vector (`/opt/suid-lab/find -exec cat` $\rightarrow$ **Training Flag Revealed**)
3. **Post-Remediation Retest (Test 3):** Retesting after fix (`chmod 0755` $\rightarrow$ **Permission denied**)

### 4. Interactive Evidence Checklist (S1 to S8)
Interactive checkboxes for all 8 required screenshots:
- `[S1]` Root-owned copied binary showing mode 4755 (`-rwsr-xr-x`)
- `[S2]` `trainee` identity (`uid=1001`) and normal read permission denial
- `[S3]` Manual SUID enumeration listing the suspicious binary
- `[S4]` LinPEAS automated scan execution & summary banner
- `[S5]` Corroboration of the suspicious binary via `stat`/`ls`
- `[S6]` Controlled read of ONLY the dummy training flag (`LAB{SUID_FIND_SUCCESS}`)
- `[S7]` Verification of `euid=0(root)` without opening a privileged shell
- `[S8]` Remediation verification: `0755` mode and failed repeat retest

### 5. 100-Mark Assessment Rubric
- **Requirements, Isolation & Clean Snapshot:** 15 Marks
- **Vulnerability Creation & Explanation:** 15 Marks
- **Manual + LinPEAS Detection & Verification:** 20 Marks
- **GTFOBins Analysis & Controlled Proof:** 20 Marks
- **Permission Fix & Verified Failed Retest:** 20 Marks
- **Report, Screenshots & Explanation Quality:** 10 Marks

---

## 🚀 Live Launch & Access

- 🌐 **Live Web Manual URL:** [http://localhost:8080](http://localhost:8080)
- 📂 **Local Directory:** [c:\Users\hp\Desktop\DataClassPython\cybersecurity-manual](file:///c:/Users/hp/Desktop/DataClassPython/cybersecurity-manual)
- 💻 **Direct File Access:** [index.html](file:///c:/Users/hp/Desktop/DataClassPython/cybersecurity-manual/index.html)
- ⚡ **Windows One-Click Launcher:** [launch.bat](file:///c:/Users/hp/Desktop/DataClassPython/cybersecurity-manual/launch.bat)
