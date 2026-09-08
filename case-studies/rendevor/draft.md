# Rendevor — Audit Center

Company: SeeSaw Labs
Status: Live — ported into index.html, v3. See images/ for the screenshots and wireframes used.
Source: SeeSaw Labs' published case study (used for one stat only) + Tyler's own account

---

## At-a-glance

| Field | Value |
|---|---|
| Role | Lead Product Designer & Product Manager |
| Timeline | 8 months |
| Team | Product Designer & PM (me), 2 Engineers |
| Tools | Figma, Claude Code, Excel, Anthropic API (OCR) |
| Outcome stat | AI handwriting recognition cut manual audit entry by 80% |

---

## 00 — Executive Summary

Rendevor's audit process was a black box: audits moved through delegations and sign-offs that nobody in the organization could describe start to finish, across facilities where some staff could use tablets and others were restricted to paper only. I led design and product management on Audit Center, standardizing the process around one workflow that works whether an audit happens on a device, in Excel, or on paper, and closing the loop on paper audits with an AI layer that reads handwritten forms directly instead of forcing staff to re-key them. That layer alone cut manual audit entry by 80%, and gave Rendevor's leadership real visibility into audit status and findings across every facility for the first time.

Image: `images/final-state.png` (AuditCenterDONE.PNG) — the live audit-in-progress view, showing the section tabs, question format, and Print PDF / Upload Paper Audit / Proceed actions.

## 01 — The Setup

Rendevor runs dialysis operations across more than 70 facilities nationwide, managed by 4 regional teams, many inside correctional settings, and needed a way to see where their internal processes were losing time and money. The project started as a discovery workshop with the client to map operations end to end and find either a bottleneck or an opportunity to free up staff time.

That workshop surfaced the audit process as a black box. Nobody in the organization could describe it start to finish. Audits moved through a maze of delegations and sign-offs with no visibility into status: was a given audit in review, and with whom? What was needed to move it forward? Was it stalled in a remediation step waiting on a corrective action, and had that action actually been verified before the audit moved on? No one could answer those questions with confidence.

Underneath that was a bigger problem: there was no formalized audit process to begin with. Each department ran audits its own way.

## 02 — The Approach

Ran a series of workshops to map every user, workflow, and audit state across the organization. Followed that with one-on-one interviews across departments and regions, talking to both frontline users and subject matter experts, to pull out the actual process each group followed, define requirements, and identify practices worth standardizing company-wide.

Two constraints shaped the design from there. First, the facilities themselves: because audits happen in correctional settings, device access varies by site. Some allow tablets and electronics, others restrict staff to paper only. Second, the paper workflow itself was generating rework: staff printed an Excel audit template, filled it out by hand, then re-typed it into a spreadsheet before the audit could move to its next step. Slow, and it introduced errors every time data got re-entered.

Designed and validated the solution in stages: low-fidelity wireframes, user validation testing, then high-fidelity Figma screens for usability testing. From there, instead of handing off static screens, built a working prototype directly in Claude Code, then led the development team through the build, an MVP launch, and subsequent releases that expanded functionality across the organization.

Tools/pills: Figma, Claude Code, Excel, Anthropic API

Images: `images/wireframe-audit-setup.png` and `images/wireframe-conduct-audit.png` — low-fidelity wireframes (generated to represent the early design stage described above) of the audit-setup and audit-taking screens, shown ahead of the high-fidelity Decision 01/02 screenshots below to make the "low-fi to high-fi" progression visible.

## 03 — The Work

**Decision 01 — One audit format, three input modes**
Built a single audit format that works whether staff are on a device, in Excel, or on paper, instead of mandating one digital-only tool across every facility. Considered instead: standardizing on a single digital workflow. That wasn't viable given the facility restrictions on electronics, so the format had to flex to the environment rather than assume it away.

Image: `images/decision-01-audit-modes.png` (audit.PNG) — the "Start New Audit" screen, showing Digital / Excel / Paper as parallel options plus the upload dropzone.

**Decision 02 — OCR instead of accepting the double-entry workflow**
Added a handwriting-recognition layer, built on the Anthropic API, so paper-only sites could upload a photo or scan of a completed audit instead of re-keying it into a spreadsheet by hand. Considered instead: leaving paper-based facilities on the manual re-entry process as an accepted limitation. That would have kept the slowest, most error-prone part of the workflow in place for exactly the sites least able to absorb it.

Image: `images/decision-02-ocr-upload.png` (uploadaudit.PNG) — the Upload Paper Audit flow (facility/auditor/period, then drag-and-drop for PDF, JPG, PNG, or Excel).

**Decision 03 — One standardized workflow, not eight digitized ones**
Defined a single audit taxonomy and workflow, built from the cross-department research, rather than digitizing each department's existing (and inconsistent) process as-is. Considered instead: building the tool around each department's current process to minimize change management. That would have preserved the black box in digital form. The actual problem was the absence of a shared process, so the design had to fix that first.

## 04 — The Outcome

Rendevor got its first fully transparent, end-to-end audit system: every audit's status, owner, and next step are now visible as it moves through review and remediation. That transparency directly reduced their regulatory risk with health and government oversight bodies. Leadership also got, for the first time, real data on audit findings across teams and facilities, enough to spot patterns and make informed decisions at the C-level instead of guessing.

The OCR layer alone cut manual audit entry by 80%, removing the double-entry step that had been the biggest source of both delay and error in the paper workflow.

Stat card: 80% — reduction in manual audit entry

Image: `images/outcome-final.png` (reuses audit.PNG) — the Start New Audit screen again, as a closing shot: the same system now running across all 70+ facilities.

## 05 — The Takeaway

The workshop-first approach is what actually found the real problem. If the project had started from "audits are slow, build a faster audit tool," it likely would have shipped a faster version of eight different broken processes. Starting from operational discovery instead of a stated solution is what surfaced that the real fix was standardizing a process that didn't exist yet.

---

## Notes

- Confirmed with Tyler: all facility names and data shown in the screenshots (e.g. "California Health Care Facilities") are whitelisted/fake, not real client data. No specific facility names appear anywhere in the written copy either way.
- `Audit Center.png` (the scanned handwritten paper audit) is still unused. Not needed now that the wireframes cover the "before" visual gap.
- Skipped the SeeSaw Labs published framing entirely per Tyler's call; the only thing pulled from it is the 80% stat, which matches Tyler's own account of what the OCR layer fixed.
- Wireframe images were generated (not sourced from Tyler's original design files) to represent what an early low-fidelity pass of these two screens would look like, based on the structure of the final screenshots.
