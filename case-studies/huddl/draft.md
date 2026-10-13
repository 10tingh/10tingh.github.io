# Huddl — Streamlining REMS Drug Care Through Connected Pharmacy Workflows

Company: SeeSaw Labs + Slide UX
Status: Draft v3, ready for Tyler's review
Source: `case-study-placeholders.md`, section "4. Huddl" (resume-level skeleton) + Tyler's inline answers to the v1 questions and the v2 follow-ups (both archived verbatim at the bottom).

---

## At-a-glance

| Field | Value |
|---|---|
| Role | Lead Designer |
| Timeline | 8 weeks |
| Team | Lead Designer (me), 1 PM, 2 Developers |
| Tools | Figma, Claude Code, TestFlight |
| Outcome stat | Up to 80% reduction in administrative hours managing REMS prescriptions |

---

## 00 — Executive Summary

Before Huddl, getting pharmacists cleared to dispense REMS drugs and keeping patients informed ran across manual paperwork, separate online platforms, and phone calls. In 8 weeks as lead designer, I took Huddl from discovery interviews to a validated prototype on TestFlight: one app for education, registration, and orders, with in-app chat in place of the phone. Measured against existing benchmarks and again in usability testing with live patients, Huddl cut the administrative hours spent managing REMS prescriptions by up to 80%, and the prototype helped Huddl secure funding with the University of California San Francisco.

Image: `images/app hero.webp` — the finished app on TestFlight (confirmed by Tyler).

## 01 — The Setup

Huddl streamlines how pharmacists get educated and registered to dispense REMS drugs. REMS (Risk Evaluation and Mitigation Strategy) drugs carry special handling protocols, and pharmacists have to be educated and registered before they're allowed to distribute them.

Before Huddl, that work ran across lots of independent systems. Some steps were manual paperwork, some meant moving information by hand from one online platform to another, and customer orders were managed over the phone. Nothing tied the steps together.

Talking to patients was phone-only too. Pharmacists, physicians, and care teams needed a direct line to patients for prescription renewals, questions, and confirming delivery or pickup, and every one of those conversations meant a call. Calls made it hard to start a conversation at all, and once a call was underway, human error crept into what got said and heard.

The client was Huddl itself, a startup. It needed a functional prototype it could validate with users and subject matter experts (SMEs), and then use to raise more funding. The project ran 8 weeks.

## 02 — The Approach

I started with discovery interviews with three groups: patients, pharmacists, and admin staff. Across those interviews and the prototype testing that came later, I worked with roughly 20 people in all, spanning patients, pharmacists, admin staff, and cardiologists.

I sorted what I heard into an affinity diagram, grouping individual insights into larger themes. Two themes stood out:

- **Speed:** completing the process was slow and inefficient.
- **Coordination:** working together was frustrating for both sides.

I turned each theme into a problem statement:

1. *How might we let pharmacists complete REMS education, registration, and order management in one place, so the process stops being slow and inefficient?*
2. *How might we make it easy for pharmacy teams and patients to start a conversation and get it right, so coordination stops frustrating both sides?*

To kick off ideation, I ran a MoSCoW map (sorting features into Must have, Should have, Could have, and Won't have) to define what a minimum viable product (MVP) needed to do to solve both statements.

Ideation started with user flow diagrams. From those I mocked up a high-level user flow in Figma and prototyped the whole experience there. Claude Code came in only at the end, to define how the chat would behave: I built the scripts the AI must pass through and started the conversation design in Claude Code, using the REMS educational material and the user flow diagrams as guides to outline each conversation.

I validated the prototype with pharmacists, cardiologists, and end users, including usability testing with live patients, then led the 2 developers through launch on TestFlight, Apple's beta-testing platform.

Tools/pills: Figma, Claude Code, TestFlight

Image plan (all recreated for this case study; Tyler has no original process artifacts):
- **Affinity diagram** — sticky-note clusters from the interviews rolling up into the two themes, Speed and Coordination. Caption: "Affinity diagram, recreated for this case study to illustrate the synthesis. Not an original project artifact."
- **MoSCoW map** — four columns (Must / Should / Could / Won't) with the MVP line drawn under Must. Caption: "MoSCoW map, recreated for this case study. Not an original project artifact." (Contents need to stay generic or be confirmed by Tyler; the actual features sorted aren't in the sources.)
- **User flow diagram** — the path from pharmacist education and registration through orders to patient chat, in boxes and arrows. Caption: "User flow diagram, recreated for this case study. Not an original project artifact."
- **Low-fi Figma flow** — grayscale wireframes of the high-level flow, showing the step from diagram to screens before the final UI. Caption: "Low-fidelity screens, recreated for this case study to show the early design stage. Not original project files."

## 03 — The Work

**Decision 01 — One app instead of a chain of independent systems**
I centralized REMS education, registration, and order management into Huddl, instead of leaving the process spread across paperwork, separate online platforms, and phone orders. Research named the cost of that spread directly: speed to complete was slow and inefficient. Every step that lived in a different place was another manual handoff.

Image plan: low-fi screen of a single Huddl home view with education, registration, and orders side by side, next to a simple sketch of the old scattered path (paper form → platform A → platform B → phone). Caption: "Recreated for this case study. Not an original project artifact."

**Decision 02 — In-app chat instead of phone calls**
I moved patient communication (renewals, questions, delivery and pickup confirmations) into chat inside the app, instead of keeping it on the phone. Phone calls created friction just to get a conversation started, and once a call was underway, they left room for human error in what was communicated. Chat took aim at both: there's no call to set up, and each conversation follows scripts the AI must pass through instead of depending on how a call happens to go.

Image plan: low-fi chat screen showing a renewal or pickup-confirmation conversation between a pharmacy team and a patient. Caption: "Low-fidelity screen, recreated for this case study. Not an original project artifact."

**Decision 03 — Prototype in Figma first; bring in Claude Code only for conversation design**
I built and prototyped the whole flow in Figma first, and used Claude Code only at the end, to script how the AI chat would behave. Considered instead: starting the build in code earlier. Claude Code wasn't nearly as mature at that point, and we were still figuring out how to fit it into our existing process, so Figma carried the design and prototyping. What it allowed: the conversation scripts were written against a settled flow, with the user flow diagrams and the REMS educational material as their guides.

Image plan: a conversation outline diagram showing a scripted chat path (the steps the AI must pass through) mapped against the user flow. Caption: "Conversation script outline, recreated for this case study. Not an original project artifact."

## 04 — The Outcome

Huddl cut the administrative hours spent managing REMS prescriptions by up to 80%. We measured that against existing benchmarks, then again during usability testing with live patients. Validation testing with pharmacists, cardiologists, and end users confirmed the concept addressed real pain points. With the prototype in hand, Huddl secured funding with the University of California San Francisco and kept using the prototype to pitch private investors.

Stat card: Up to 80% — reduction in administrative hours managing REMS prescriptions, measured against existing benchmarks and in usability testing

Image: reuse `images/app hero.webp` as the closing shot (the finished app on TestFlight), as Rendevor does with its outcome image.

---

## Notes

- Problem statements in 02 were written by the Writer from Tyler's two affinity themes, at his request; Tyler confirmed them as written.
- Decision 01's "why" links the centralization to the Speed theme from research. Both facts are Tyler's; the link between them is the Writer's framing.
- Decision 03's rejected alternative ("starting the build in code earlier") is the Writer's framing of the opposite of what Tyler did; the reason is Tyler's.
- The 80% figure keeps Tyler's "up to." The benchmark figures themselves aren't in the sources, so the copy doesn't cite a baseline number.
- The ~20 count covers interviews and testing combined; Tyler gave one number, so the copy doesn't split it.
- Company field left as "SeeSaw Labs + Slide UX"; Tyler didn't say how the two split the work.
- Section 05 (Takeaway) omitted; Tyler had nothing to add and it's optional.
- All process visuals are planned as recreations; none exist yet. Each caption must say it was recreated for this case study.
- MoSCoW map contents must stay generic or be confirmed by Tyler; the actual features sorted aren't in the sources.

---

## JobHunter summary (pending Tyler's approval)
Huddl (SeeSaw Labs + Slide UX): as Lead Designer, took a REMS pharmacy app from discovery to a validated TestFlight prototype in 8 weeks, cutting administrative hours managing REMS prescriptions by up to 80% and helping the startup secure UCSF funding.

---

## Tyler's answers (v2 follow-ups)
Kept verbatim so the source stays on record.

1. Where does "up to 80%" come from? Was it measured in testing or estimated, and against what baseline?
   Answer:Measured against existing benchmarks and then again during usability testing with live patients.

2. Roughly how many people did you interview, and how many tested the prototype?
   Answer: Roughly 20 between all user types

3. Why prototype everything in Figma first and only bring in Claude Code at the end, rather than starting in code like you did on Rendevor?
   Answer:Claude Code wasn't nearly as mature at this point in time. We were still figuring out how to implement it into our existing process.

4. Do the two problem statements in section 02 match what you wrote at the time? Edit them if not.
   Answer:Yes

5. Title: "Huddl — Streamlining Pharmacy Workflows" or "Streamlining REMS Drug Care Through Connected Pharmacy Workflows"?
   Answer:The latter

---

## Tyler's answers (v1 source)
Kept verbatim so the source stays on record.

**At-a-glance**

1. What was your title on Huddl, roughly how long did it run (a duration, not dates), and what other roles were on the team (e.g. "2 engineers, 1 PM")? How did SeeSaw Labs and Slide UX split the work?
   Answer:I was lead designer on this. It ran a total of 8 weeks. I had a PM and 2 developers.

2. If you had to defend Huddl's value in one sentence to someone who wasn't there, what's the sentence? Is there a number behind the funding outcome (amount, phase scope, TestFlight testers)?
   Answer:Huddl's value is reducing administrative hours of the process of managing presciription REMs drugs by up to 80%.

**01 — The Setup**

3. Before Huddl, how did pharmacists get educated and registered to dispense REMS drugs? What tools or paperwork were involved, and where did it break down?
   Answer: Lots of independent systems that were either manual paperwork, manually moving between online platforms and then managing customers orders over the phone. This centralized the entire process.

4. Before Huddl, how did pharmacists, physicians, and care teams reach patients about renewals, questions, and delivery or pickup? What was going wrong?
   Answer: It was all done over the phone which created friction in having dialogue to start and then opened it up to human error communicating during the call itself.

5. Who asked for this project, and why then? Was there a deadline or outside pressure, like a leadership funding review?
   Answer: This came from Huddl directly needing to put together a functional prototype to validate with users and subject matter experts and use to get additional funding for the startup. 

**02 — The Approach**

6. What research did you run, and with how many people? Which user groups (pharmacists, physicians, care teams, patients) and which kinds of subject matter experts?
   Answer:Did discovery interviews with patients, pharmacists and admin staff. 

7. How did you turn the research into opportunities, and which 2–3 opportunities did you pursue?
   Answer: We analyzed the research by organizing insights into large themes by doing an affinity diagram. A few large themes came from that we focused on. Speed to complete was slow and inefficient, coordination was frustrating for both sides. We then took those ideas and broke them down into simple problem statements (please write these for me) and kicked off ideation with a MOSCOW map to define what an MVP needed to do for users that solved for both statements. 

8. How did ideation and prototyping go? What did you build in Claude Code vs. Figma, and how did you validate the prototype? Was there a moment you had to change course?
   Answer: Ideation was first done building user flow diagrams. I no longer have these so Claude will need to create an example. We then mocked up a high level user flow in Figma and prototyped everything there. We didn't use claude code until the end of the project in layering in how the chat functionality would behave. We built the scripts that the AI must pass through with it and began the conversation design in Claude code using the educational material and user flow diagrams as guides to outline conversations. 

**03 — The Work**

9. Give me 2–4 choices someone else might have made differently. For each: what you decided, what you considered and rejected, and why. Were there disagreements with the client, stakeholders, or the dev team? Did REMS rules or patient privacy limit what you could design?
   Answer: I cant think of any examples for this. OK to skip. 

**04 — The Outcome**

10. What happened after the TestFlight launch? Who were the stakeholders and leadership who approved funding, what does the next phase cover, and is there any feedback or usage data from testers?
   Answer: We tested with pharmacists, cardiologists and end users. We were able to validate the concept in that it addressed real pain points throughout this project. As a result of our work, they were able to secure funding with the University of California San Francisco and used the prototype to continue to pitch to private investors.

**05 — The Takeaway**

11. What would you do differently on Huddl, or what did it teach you that shows up in later work? (Skip if nothing real comes to mind.)
   Answer: Nothing. 

**00 — Executive Summary and images**

12. What does `images/app hero.webp` show? Is it the finished app as launched on TestFlight? Do you have any other screens, research artifacts, or prototype shots for sections 02–04?
   Answer: Yeah this is the finished app screen on TestFlight. I have no other prototype shots so I will need to generate low fidelity screens, diagrams and other artifacts to visually communicate the process.
