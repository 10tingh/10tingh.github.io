# Kasasa — Unifying a Fragmented Sales Demo into One Cohesive Experience

Company: SeeSaw Labs
Status: Draft v3, ready for Tyler's review: v2 follow-up answers folded in (navigation is now a Decision, product names added), 00 attribution fixed, no [TK]s or open questions left; the draft and the JobHunter summary await Tyler's approval
Source: `case-study-placeholders.md`, section "7. Kasasa" (resume-level skeleton) + `images/surelock-phone.webp` + Tyler's inline answers to the v1 questions and his chat answers to the v2 follow-ups (both archived verbatim at the bottom).

---

## At-a-glance

| Field | Value |
|---|---|
| Role | Senior Designer & Project Lead |
| Timeline | 8 weeks |
| Team | Senior Designer & Project Lead (me), 1 Designer, 2 Developers |
| Tools | Figma, Figma Make, Claude Code |
| Outcome stat | One demo in place of separately configured tools, rolled out to Kasasa's sales team |

---

## 00 — Executive Summary

Kasasa's sales demos ran on separate tools that didn't talk to each other, so salespeople configured each one by hand and stuck to a tight script. The organization was under pressure to increase sales, the demo was a major blocker, and Kasasa's product team brought the problem to us. In 8 weeks as Senior Designer & Project Lead, I helped turn it into one demo that works whether a salesperson leads it or someone explores it on their own, guides viewers through every product as a new user or a power user, carries data across the whole platform so a change in one product ripples through the rest, and shows the emails and other collateral that about 8 salespeople told us in testing were missing. It got product and sales on the same page: the demo now ties what Kasasa's products promise to how they behave over time and affect each other, and the sales team met the rollout with incredibly positive feedback.

Image: `images/surelock-phone.webp` — a screen from the finished demo (confirmed by Tyler). SureLock is the primary tool in the platform; the screen shows a "Freedom Checking +" account with Threat Monitoring, Scam Detection ("Start Scanning"), and a Dark Web Monitoring strength score of 3/10.

## 01 — The Setup

Kasasa's sales demos were hard to deliver with consistent messaging, and the tools were the reason. The existing demo tools didn't live in the same environment, and they didn't talk to one another. To run a realistic demo, a salesperson had to configure every tool separately and then follow a very tight script, because going off it would break the demo.

Real workflows added another drag. Showing how the software behaved meant sitting through the real-time wait for documents and sign-offs to move through each workflow.

The demo had to cover Kasasa's product suite: SureLock, the primary tool, alongside Kasasa Cash, Everyday Rewards, and Take-Back Loans.

The request came from Kasasa's product team. The organization was under a lot of pressure to increase sales, and the difficulty of the demo was a major blocker to that. The project ran 8 weeks.

## 02 — The Approach

It started with a big kickoff: a download of Kasasa's design system, its product suite, and the demo tools the sales team was already using.

From there, it was an information architecture problem first. The question was how every product could be reached interchangeably by different types of users. We worked it out in hierarchy and flow diagrams before designing screens. Next, we got together as a team to decide what the navigation would feel like (see Decision 02).

We ran internal usability testing with about 8 salespeople, the people who would eventually use the tool to drive conversations and demos. Testing showed we needed to show the collateral users receive at different points in the process, such as the emails sent when certain actions happen. We added those moments to the demo (see Decision 04).

Figma held the design system, and we used Figma Make for early prototype concepts. Once the initial concept was validated with a team of Kasasa's stakeholders, we moved all design and development into Claude Code.

Tools/pills: Figma, Figma Make, Claude Code

Image plan (all recreated for this case study; Tyler has no original process artifacts):
- **Hierarchy diagram** — the product suite as a tree, with SureLock as the primary tool and Kasasa Cash, Everyday Rewards, and Take-Back Loans below it. Caption: "Hierarchy diagram, recreated for this case study to illustrate the information architecture work. Not an original project artifact."
- **User-type flow diagram** — two lanes, new user and power user, each tracing a different path to the same products (SureLock, Kasasa Cash, Everyday Rewards, Take-Back Loans). Caption: "Flow diagram, recreated for this case study. Not an original project artifact."

## 03 — The Work

**Decision 01 — One tool for both sales-led and self-guided demos**
I designed a single demo with more than one way in: a salesperson can lead it, or someone can discover it and guide themselves. Considered instead: separate tools for each use case. Why: this was a client constraint. Kasasa's demos also get found and used independently, not only in sales-led conversations, and both use cases had to be served by one tool.

Image plan: entry-point map with two doors, "Salesperson-led" and "Self-guided," opening into one demo, then splitting by user type (new user, power user). Caption: "Entry-point map, recreated for this case study. Not an original project artifact."

**Decision 02 — Navigation that holds the viewer's hand and switches perspective**
I designed navigation that always tells the viewer what they're looking at, and that lets them switch between a brand-new user's view and the view of a power user who's been on the platform for a few years. Considered instead: one fixed perspective with no guidance. Why: people in a demo need context at every moment, and the tool offers different benefits to different user types. This was the hardest part of the project: untangling every way a user could reach each product, seen through the lens of each user type.

Image plan: none of its own; the user-type flow diagram in 02 illustrates the two perspectives.

**Decision 03 — Data that persists across the whole platform**
I made inputs carry through the entire demo, so a change in one place ripples through every product it touches. Considered instead: the setup the sales team already had, separate tools configured one at a time that didn't talk to each other. Why: with persisting data, a viewer can see how different inputs affect products across the whole platform. The demo reads and reacts in real time the way Kasasa's actual software would, so a salesperson no longer has to hold to a tight script or wait on real documents and sign-offs to show a workflow.

Image plan: data-ripple flow showing one input in SureLock updating Kasasa Cash, Everyday Rewards, and Take-Back Loans, contrasted with a "before" sketch of disconnected tools each configured by hand. Caption: "Recreated for this case study. Not an original project artifact."

**Decision 04 — Adding collateral moments after testing, at the cost of complexity**
After testing with about 8 salespeople, I added the collateral users receive along the way, such as emails triggered by certain actions, into the demo experience. Considered instead: the original, simpler plan without those moments. Why: testing showed the demo needed to show what users actually receive at different points in the process. Adding those moments made the demo more complicated than we originally planned, and we took that on.

Image plan: a demo timeline with an action step followed by the email it triggers, inserted as its own moment in the flow. Caption: "Low-fidelity screens, recreated for this case study. Not an original project artifact."

## 04 — The Outcome

The demo rolled out to Kasasa's sales team, replacing separately configured tools with one cohesive demo, and the team met it with incredibly positive feedback. It got product and sales on the same page: the sales team can now demonstrate the most important feature sets to clients with a variety of needs, and the demo ties what the products promise to how they behave over time and affect each other.

There's no metric. A follow-up to collect measurables was planned for 3 months after launch, and I left the agency before it happened.

Stat card: One demo — in place of separately configured tools, rolled out to Kasasa's sales team (no usage metrics were collected before Tyler left the agency)

Image: reuse `images/surelock-phone.webp` as the closing shot (a screen from the finished demo), as Rendevor and huddl do with their outcome images.

---

## Notes

- Title changed to the placeholder's title at Tyler's request (Q13), in huddl's "Company — Title" shape.
- All mention of the team changing removed at Tyler's request (Q10): no Decision on it, no "took over all design" or "back half." The Team field lists the starting roles; Tyler confirmed the wording (follow-up 1).
- Decision 01's rejected alternative ("separate tools for each use case") is the Writer's framing of the opposite of Tyler's "a single tool"; the reason is Tyler's.
- Decision 02 (navigation) added at Tyler's request (follow-up 2). The decision, the reason, and "hardest part" come from his v1 Q5 answer. He named no alternative, so "one fixed perspective with no guidance" is the Writer's framing of the plain opposite, the same approach as Decision 01. The navigation detail was trimmed from 02 so it isn't told twice; 02 keeps the IA/hierarchy work and points to the Decision.
- Decision 03's alternative is the real before-state from Q3, not an invented option. The link between persisting data and dropping the tight script is the Writer's framing of two facts Tyler gave.
- Decision 04's alternative is the original plan Tyler mentions in Q6 ("more complicated than we originally planned").
- Decisions ordered entry points → navigation → data → collateral, so the navigation Decision follows the entry-point map's split by user type.
- The Figma Make → Claude Code move stays in 02 as process: Tyler gave a "when" (after the initial concept was validated with a team of Kasasa's stakeholders, follow-up 3), not a reason.
- Product names (Kasasa Cash, Everyday Rewards, Take-Back Loans, alongside SureLock) come from follow-up 4. Used in 01 and in the hierarchy, user-type flow, and data-ripple image plans. No claims about what each product does. The hierarchy places SureLock at the top as "the primary tool," per Tyler's Q13 answer; the other three sit below it as peers.
- The 00 attribution was corrected: the product team made the request; the sales pressure and the demo-as-blocker belong to the organization (v1 Q4).
- 00 now also mentions the new-user/power-user navigation, so the summary covers all four Decisions.
- "Varied by salesperson" from the placeholder is folded in as "hard to deliver with consistent messaging," Tyler's wording.
- Outcome stat is qualitative by necessity; the copy says plainly that no metric exists. No number invented.
- 00 says "I helped turn it into" because a designer and two developers were on the team; Tyler can tighten if he prefers.
- Section 05 (Takeaway) omitted; Tyler had nothing to add (Q12) and it's optional.
- All process visuals are planned as recreations; none exist yet. Each caption must say it was recreated for this case study.
- JobHunter summary unchanged from v2: no fact in it changed.
- Content checklist: passes. Specific stat (qualitative, flagged as such); roles only; duration not dates; 00 written last as an ending; final-state screenshot in 00; a number, tool, or duration in every section (01: 8 weeks; 02: about 8 salespeople, Figma/Figma Make/Claude Code; 03: about 8 salespeople; 04: 3 months); four real trade-offs in 03; voice hits systems-minded (scattered tools → one environment), plainspoken teacher, strategic operator (sales pressure as the driver).

---

## JobHunter summary (pending Tyler's approval)
Kasasa (SeeSaw Labs): as Senior Designer & Project Lead, unified Kasasa's disconnected sales demo tools in 8 weeks into one demo that works sales-led or self-guided and carries data across the product suite, getting product and sales on the same page; the sales team met the rollout with incredibly positive feedback.

---

## Tyler's answers (archive)
Kept verbatim so the source stays on record.

### v2 follow-ups (answered in chat)

1. The Team field now reads "Senior Designer & Project Lead (me), 1 Designer, 2 Developers," the starting team, with no mention of the change. Is that wording right?
   Answer: Yeah

2. Navigation as hand-holding (new-user vs power-user views) is in 02 as process. Do you want it as a Decision? If so, what did you consider instead, and why did you go the way you did?
   Answer: Yes

3. Why move from Figma Make to Claude Code once the concept was validated, rather than staying in Figma for the rest of the design? If there's a reason, it could become a Decision.
   Answer: After the initial concept was validated with a a team of the client's stakeholders.

4. The recreated diagrams label Kasasa's other products generically, since only SureLock is named. OK as is, or can you name any others?
   Answer: Kasasa Cash, Everyday Rewards, Take-Back Loans,

### v1 source

**At-a-glance**

1. What was your exact title on Kasasa, roughly how long did it run (a duration, not dates), and what roles were on the team at the start and after you lost the developer and designer?
   Answer:Senior Designer & Project Lead - 8 weeks. It started with 2 designers and 2 developers. ended with myself and one developer.

2. If you had to defend this project's value in one sentence to someone who wasn't there, what's the sentence? Is there a number behind "rolled out with great success"?
   Answer: It got both product and sales on the same page by being able to effectively demonstrate the most important feature sets to clients that fit a variety of unique needs. It created cohesion between the message/objective of the products and the demonstration of the products across time and how it affects other products in the suite.

**01 — The Setup**

3. Before this tool, what did a Kasasa sales demo look like, and how did it differ from one salesperson to the next? What went wrong because of it?
   Answer:Sales demos were very hard to do with consistent messaging because the existing demo tools werent in the same environment. They didnt talk to one another. So in order to do a realistic demo, sales people would have to configure all of the tools separately and have a very tight script because diverging from it would throw off the demo. Now the demo is able to read and react in real time just as their actual software would and respond to a variety of inputs without having to do the real time wait of documents and processes to be signed off on in workflows. 

4. Who at Kasasa asked for this, and why then? Was there a deadline or outside pressure? Which of Kasasa's products did the demo need to cover, and why did showing how they connect matter?
   Answer: This came from their product team. A lot of pressure in the organization to increase sales and a major blocker of that was the difficulty of the demo. 

**02 — The Approach**

5. Walk me through what you did, roughly in order. What was the first move, what did ideation with Kasasa's product team look like, and what was the hardest part to figure out?
   Answer:A huge kickoff that was a download of their design system, product suite, and current demo tools. From there it was an information architecture problem first. How would these all be accessed interchangably from different user types. Lots of hierarchy and flow diagrams to do this. Then we had to get together as a team and decide what the navigation experience would look like as users needed hand holding in a demo to provide context of what they were looking at at any given point in time. Sometimes they would want to see a tool as a new user and other times from the perspective of a power user whos been in the platform for a few years as the tool provides different benefits to those different user types. This was really the hardest part, detangling all of the ways a user could access different products with the lense of different user types.

6. What was the "light usability testing": who tested it, how many people, and did anything change because of it?
   Answer:internal testing with sales people who would be eventually using this tool to drive conversations and demos. roughly 8 people. We learned about needing to show users different collateral they may receive at different points in the process as well such as emails when certain actions happen. So we had to add those moments into the overall demo experience that made things slightly more complicated than we originally planned. 

7. How did Figma, Figma Make, and Claude Code each fit in? What got built in which?
   Answer:Figma was used to define the design system and we used Figma make for early prototype concepts. Once we landed on a concept and validated it, we switched all design and development processes to Claude Code.

**03 — The Work**

8. Multiple entry points: why support both salesperson-led and self-guided demos instead of one path? What did you consider and reject?
   Answer:This was a client constraint as demos are used independently and are discoverable versus being sales led and guided. We needed to address both use cases with a single tool.

9. Persisting data across the experience: what did that mean for the user, and what was the alternative you rejected?
   Answer:Persisting data allowed the user to see how different inputs affected products across the entire platform. When they make a change, they can see how it ripples throughout the entire experience. 

10. Losing a developer and a designer: when in the project did it happen, what were the other options (cut scope, pause, replace), and what did taking over all design cost or force you to trade off? Any disagreement with Kasasa's team worth a fourth decision?
    Answer:It was roughly 2/3 into the project. On second thought. I think I want to lose all mention of the team changing. It really doesn't impact the outcome of the narrative. 

**04 — The Outcome**

11. What happened after the rollout to Kasasa's sales team? Any number (reps using it, demos run, deals, prep time saved), or the closest proof it worked?
    Answer: It was met with incredibly positive feedback from the sales team. I left the agency before we did our follow up 3 months after launch to get the measurables. 

**05 — The Takeaway**

12. What would you do differently, or what did this project teach you that shows up in later work? (Skip if nothing real.)
    Answer: Nothing. 

**00 — Executive Summary, images, and title**

13. What does `images/surelock-phone.webp` show? Is it a screen from the finished demo tool, and what is SureLock? Do you have other screens or process artifacts for 02–04, or should we recreate low-fi visuals like huddl? And which title: "Kasasa — Sales Demonstration Tool" or "Unifying a Fragmented Sales Demo into One Cohesive Experience"?
    Answer:SureLock is the name of the primary tool in the platform. The image is a screen from the finished demo. I don't have access to other visuals so we will need to generate them. The latter title is great. 
