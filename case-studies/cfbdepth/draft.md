# CFBDepth.com — Using AI to Make Complex Data Accessible to Everyone

Company: SeeSaw Labs
Status: Ported, awaiting Tyler's push
Source: `case-study-placeholders.md`, section "2. CFBDepth.com" (resume-level skeleton) + `images/homepage hero.webp` (confirmed by Tyler as the final chat panel UI) + Tyler's inline answers to the v1 and v2 questions (archived verbatim at the bottom).

---

## At-a-glance

| Field | Value |
|---|---|
| Role | Project Lead & Senior Designer |
| Timeline | About 8 weeks |
| Team | Project Lead & Senior Designer (me), 2 Engineers |
| Tools | Figma, Claude Code, Vercel, Railway, Docusaurus |
| Outcome stat | A new revenue stream: a handful of API customers before the final API tool handoff |

---

## 00 — Executive Summary

CFBDepth sold fans, bettors, and subscribers limited access to college football data sheets stripped of their proprietary formulas, and its staff couldn't build every view those users wanted. In about 8 weeks, racing the start of the college football season, I led the project and designed CFBAI, an AI chat agent that lets users ask for the data in plain English: I designed the conversation and the agent's personality, built the chat experience, and gave the agent a memory of each user's teams, data preferences, and betting factors. Alongside it, a data-licensing API added a new kind of customer, the API buyer, and I designed the internal tool that issues and rotates their keys. Both launched before Week 0, bringing in new users at higher price points and a new revenue stream, with a handful of API customers before we handed off the final API tool.

Image: `images/homepage hero.webp` — the final UI of the CFBAI chat panel (confirmed by Tyler).

## 01 — The Setup

CFBDepth.com published college football data sheets: live stats and analytics. Users paid for limited access to those sheets, which were stripped of CFBDepth's proprietary formulas before publishing. Those users were fans who wanted updates on their teams' players, bettors, and subscribers.

Using the data the way they wanted was a heavy lift. Each user wanted to slice the data differently, and CFBDepth's staff couldn't build all the views it would take to satisfy them.

The owner of CFBDepth asked for the project. The deadline was fixed: everything had to be complete before Week 0 of the college football season, because CFBDepth's primary audience, gamblers, would want the tool as soon as games kicked off.

## 02 — The Approach

I was Project Lead & Senior Designer on a team with 2 engineers. I built the agent's chat experience and designed its conversations, and I did some engineering on the agent itself as part of quality assurance. The engineers set up the database and built the API tooling.

We started by meeting with CFBDepth's stakeholders and users to identify every user persona: the value each one got from CFBDepth, how they used it, and their goals and motivations. That research fed the conversation design.

Next came the agent's personality. We modeled it on head football coach Nick Saban: authoritative, confident, and not afraid to let its opinions be known. Then we architected how conversations should flow, so that every user type got to what interested them most. A model picker in CFBAI let users choose different AI models depending on the type of information they wanted.

From there, we built payment into both the tool and the conversation itself. CFBAI runs on a credits system, and we designed how the agent would prompt users to add more to their account or move to a larger plan.

Then we built the API tool, an internal tool for issuing API keys to clients (see Decision 03). I designed its UI with Claude Code. Because it was a simple internal tool, we tested it only through internal usability testing.

We wrote training materials for both the chat agent and the API tool. A final UI pass brought in CFBDepth's new branding so the agent felt like part of one cohesive experience.

Figma was for design, Vercel for hosting, Railway for the database, and Docusaurus for documentation.

Tools/pills: Figma, Claude Code, Vercel, Railway, Docusaurus

Image plan (all recreated for this case study; Tyler has no original process artifacts since he left the agency):
- **Persona map** — the three user types from 01 (team fans, bettors, subscribers), each with what they want from CFBDepth's data. Caption: "Persona map, recreated for this case study. Not an original project artifact."
- **Conversation flow** — one entry point branching by user type into the topics each cares about, with an upsell moment marked on the path. Caption: "Conversation flow, recreated for this case study. Not an original project artifact."

## 03 — The Work

**Decision 01 — A conversation instead of more data views**
I put CFBDepth's data behind an AI chat agent, so users could ask for what they wanted in plain English. Considered instead: what CFBDepth was already doing, having staff build more views of the published sheets. Why: the spectrum of needs and users was too wide for pre-built views to cover. And more and more users are comfortable with language models, so a chat experience gave the brand a modern feel. It took pressure off CFBDepth's staff and let users work with the data directly.

Image plan: before/after, a formula-stripped data sheet next to the same question asked in chat. Caption: "Low-fidelity before/after, recreated for this case study. Not an original project artifact."

**Decision 02 — An agent that remembers, at the cost of an extra call every session**
I designed the agent to remember each user: their user type, the teams they support and why, the data they like to examine and how, and the factors they weigh when betting and making picks. After every conversation, the agent updated its memory, and it read that memory back in before starting the next session. Considered instead: a simpler agent without memory. Why and what it cost: memory made the solution more complex, and the extra call it added to every session made it much more expensive to run. We accepted both, because a better experience was the priority for capturing users.

Image plan: memory loop, session ends → memory updated (user type, teams, data preferences, betting factors) → memory loaded → next session starts. Caption: "Diagram recreated for this case study. Not an original project artifact."

**Decision 03 — A licensing API the original scope didn't include**
The original scope covered only the chat agent. During a weekly check-in, the owner and I talked about who else would want CFBDepth's data and how it could be monetized, and every option led back to distributing API keys. Considered instead: keeping the data inside CFBDepth's own site and the chat agent, as the original scope did. Why: an API brought in a new type of user, the API buyer, as part of CFBDepth's push to grow the brand. We ran it as a separate statement of work (SOW) alongside the chat agent, inside the same pre-season timeline. The 2 engineers built the API tooling; I designed the UX/UI of the internal tool that generates clients' API keys. It puts front and center which data streams each client gets, and how to rotate keys when a subscription ends.

Image plan: low-fi API key tool, a client row with data-stream checkboxes and a "Rotate key" action tied to subscription status. Caption: "Low-fidelity screen, recreated for this case study. Not an original project artifact."

## 04 — The Outcome

The chat agent and the API tool both launched before Week 0, ahead of the season deadline. The chat agent let users pair CFBDepth's many-layered data with the power of AI, and it became the backbone of CFBDepth's initiative to scale up and offer more to its users. It brought in new users at higher price points, and the API opened a new revenue stream: CFBDepth already had a handful of API customers before we handed off the final API tool.

There's no hard metric.

Stat card: New revenue stream — a handful of API customers before the final API tool handoff (no usage or revenue numbers)

Image: reuse `images/homepage hero.webp` (the final chat panel UI) as the closing shot, as Rendevor, huddl, and Kasasa do.

---

## Notes

- Title changed to the placeholder's title at Tyler's request (v1 Q12), in Kasasa's "Company — Title" shape.
- 00 and the Role/Team cells match Tyler's account: he built the chat experience and conversation design and designed the API key tool's UI; the engineers built the database and API tooling.
- v3: the tools line in 02 follows Tyler's v2 Q1 answer, in his order (design, hosting, database, documentation). Claude Code stays in the API tool paragraph.
- v3: no AI model is named as *the* model and none is in Tools; users chose among models (v2 Q2), shown as the model picker in 02. "Powered by Claude" from the hero stays out of the copy.
- v3: Decision 01's alternative is the real before-state (staff building more views of the sheets); Tyler named no other option. The reason is his (v2 Q3).
- v3: the payment decision folded back into 02 as process; Tyler gave no alternative or trade-off (v2 Q4). Section 3 now has three decisions; the API decision is renumbered 03.
- v3: launch before Week 0 is Tyler's (v2 Q5), now in 04 and in 00.
- v3: CFBAI, the credits system, the model picker, and Nick Saban are cleared for copy (v2 Q6). Placing the credits system next to the payment step is the Writer's framing; the copy doesn't claim users buy credits specifically.
- Decision 02's alternative ("a simpler agent without memory") is the Writer's framing of the plain opposite; the trade-off and reason are Tyler's (v1 Q8).
- Decision 03's alternative is the original scope, a real before-state (v1 Q9). "Inside the same pre-season timeline" is the Writer's link between "concurrently" (v1 Q9) and the Week 0 deadline (v1 Q4).
- "Plain English" is from Tyler's v1 Q3 ("through English language").
- Outcome: no number invented. "A handful" is Tyler's word. The copy says plainly there's no hard metric, as Kasasa does.
- Section 05 omitted; Tyler had nothing to add (v1 Q11) and it's optional.
- Q5's "hardest part / change of course" went unanswered; 02 doesn't claim one.
- All process visuals are planned as recreations; none exist yet. Each caption must say it was recreated for this case study.
- JobHunter summary: the Owner picked the second of the two mailed lines on Tyler's "use your best judgement." v3's facts don't change it. Not written into JobHunter: that row's cell already holds the first wording, and the Writer only fills TODO cells. Tyler can apply it in the post office or edit the cell.
- Content checklist: passes. Specific stat (a handful of API customers, qualitative, flagged as no hard metric); roles only; duration not dates; 00 written last as an ending; final-state screenshot in 00; a number, tool, or duration in every section (00: 8 weeks; 01: Week 0; 02: 2 engineers, Figma/Claude Code/Vercel/Railway/Docusaurus; 03: 2 engineers, SOW; 04: Week 0); three real trade-offs in 03; voice hits systems-minded (staff hand-building views → one conversational layer), plainspoken teacher, strategic operator (the API as a new revenue stream).

---

## JobHunter summary (approved by Tyler, not yet applied)
CFBDepth.com (SeeSaw Labs): as Project Lead & Senior Designer, led an AI chat agent built in about 8 weeks, designing its conversations and chat experience, that lets college football fans and bettors work with CFBDepth's data in plain English and remembers each user's teams and betting preferences; also designed the key tool for a new data-licensing API that opened a new revenue stream with a handful of customers before final handoff.

---

## Tyler's answers (archive)
Kept verbatim so the source stays on record.

### v2 source

**02 — The Approach**

1. How did Figma, Vercel, Railway, and Docusaurus each fit in? (Claude Code is covered: you designed the API tool's UI in it.)
   Answer: Dude. They all do different things. Design. Hosting. Database. Documentation. 

2. Which AI model powered the agent? The hero says "Powered by Claude"; is that right, and should it be listed in Tools?
   Answer: Users could use different models depending what type of information they wanted.

**03 — The Work**

3. Chat instead of more data views: what else did you consider (more pre-built views, a dashboard, filters), and why did conversation win? If nothing else was on the table, say so and Decision 01 becomes the setup for the other three.
   Answer: Because of how wide the spectrum of needs and users was. Also the language models are something more and more users are becoming comfortable with so wanted to replicate that experience to help add a modern feel to the brand.

4. Payment inside the conversation: what was the alternative (e.g. a separate upgrade page), and was there a trade-off, such as how hard the agent should push upgrades? If none, it folds back into 02.
   Answer: None. 

**04 — The Outcome**

5. Did the chat agent and the API tool launch before Week 0?
   Answer: It did. 

**00 — Images**

6. Can the hero's details appear in the copy: the CFBAI name, the credits system, the model picker? And is naming Nick Saban as the personality model fine on the page?
   Answer:It's fine. 

### v1 source

1. What was your exact title on CFBDepth, roughly how long did it run (a duration, not dates), and what other roles were on the team (e.g. "2 engineers")? Who built the agent, the database work, and the API?
   Answer: Project Lead & Senior Designer. Project was roughly 8 weeks. We had 2 other engineers on the team. I built the agent chat experience and the conversation design. I also did some engineering on the agent itself as part of quality assurance. The other engineers took care of setting up the database and building the API tooling. I did some UX/UI work in defining the tool that generates the API keys for clients. It emphasizes which data streams will be available for each client and how to rotate keys for when subscriptions end.

2. If you had to defend this project's value in one sentence to someone who wasn't there, what's the sentence? Is there a number behind it (users, conversations, subscribers, licensing deals)?
   Answer: The end product allowed end users to be able to pair in depth and many layers of data with the power of AI. This is the backbone of the companies initiative to scale up and provide more to the end users while also appealing to a new user type, the API buyer. This initative is all about growing the brand.

3. Before the chatbot, who was using CFBDepth's data sheets and how? Who are the "less technical users" (fans, bettors, CFBDepth staff, subscribers?), and what concretely went wrong for them?
   Answer:End users were paying to have limited access to data sheets that were published and stripped of their propiertary formulas. This included fans of teams wanting updates on players, bettors and subscribers. It was a heavy lift to use the data how users wanted to use it and CFBDepth was having a hard time building all the views to satisfy their users desires. The AI tool took a lot of that pressure off staff and allowed users to interact directly with the data through English language.

4. Who at CFBDepth asked for this, and why then? Was there a deadline or outside pressure (a season start, a launch, a licensing opportunity)? Was licensing data part of the original ask?
   Answer:The owner. We had to get the entire project complete before Week 0 of College Football as their primary audience, gamblers, would want this tool when games start to kickoff. 

5. Walk me through what you did, roughly in order. What was the first move? Did you research or test with users? How did you define the agent's behavior? What was the hardest part, and was there a moment you changed course?
   Answer:

6. How did each tool fit in: Figma, Claude Code, Vercel, Railway, Docusaurus? Which AI model or API powered the agent, and should it be listed in Tools?
   Answer:

7. Chat instead of spreadsheets: what else did you consider (a better table, a dashboard, filters) and why did conversation win for these users?
   Answer:We first met with stakeholders and users to identify all the different user personas and the value they get from CFBDepth and how they use it. We wanted to understand goals and motivations in order to begin doing the conversation design. We then did the conversation design and built the 'personality' of the tool. It was authoritative, confident and not afraid to let it's opinions be known. We designed the AI personality after head football coach, Nick Saban. We architected how conversations should flow which fit all of the user types and what would most interest them. We then needed to integrate payment into the tool but also the conversation and how it would prompt users to add more to their account or purchase a larger plan. We then built the API tool and I designed the UI with Claude Code. Because this was a simple internal tool we had no testing outside of internal usability testing. We also put together training materials for both the AI chat agent and the API tool. We also did a final UI pass that integrated CFBDepths new branding into the tool so it felt like a cohesive experience. 

8. Agent memory: what exactly did the agent remember about users, how did that sharpen results, and what was the alternative? Were there trade-offs (privacy, user control over what it remembered, complexity)?
   Answer: It remembered their user type and users preferences. Teams they support and why. Preferences of data they like to examine and how. Factors when betting to consider and making picks. We made sure that after each conversation, the AI memory updated and would pass through that memory before engaging in a new session. The trade off was the complexity of the solution and it was much more expensive to add a new call for each session but the better user experience was the priority in order to capture users. 

9. The licensing API: whose idea was it, what was the alternative, and what was your part beyond client-facing work? Who were the businesses it was meant for? Is there another decision worth a slot, such as how the agent handled questions the data couldn't answer, or a disagreement with the client?
   Answer:This was not part of the original scope and came organically from a conversation during a weekly project check in with the owner. We talked about who would be interested in the type of data they have and how it could be monetized. Ultimately, all roads led back to the idea of being able to distribute API keys. We did this as a separate SOW concurrently with this project. 

10. What happened after it shipped? Any number, even a rough one (usage, engagement, revenue, data licensing deals), or the closest proof it worked?
    Answer:Expanded business. Capturing new users at higher price points and opened new revenue streams with the API solution. We already had a handful of customers before we finished our final API tool handoff. 

11. What would you do differently, or what did this project teach you that shows up in later work? (Skip if nothing real.)
    Answer: Nothing. 

12. What does `images/homepage hero.webp` show? It looks like a "CFBAI — Ask Anything" page with a chat panel, suggested prompts, a model picker, credits, "Powered by Claude", and betting picks. Is that the finished, live product, and can any of those details go in the copy (e.g. the CFBAI name, the credits system)? Do you have other screens or process artifacts for 02–04, or should we recreate low-fi visuals? And which title: "CFBDepth.com — AI-Powered Chatbot" or "Using AI to Make Complex Data Accessible to Everyone"?
    Answer:That image is the final UI of the chat panel. I dont have other screenshots as I no longer work the agency. You will need to generate assets as much as possible. I like the latter title. 
