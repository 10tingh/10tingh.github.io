# CFBDepth.com — Using AI to Make Complex Data Accessible to Everyone

Company: SeeSaw Labs
Status: Questions out for Tyler (v2)
Source: `case-study-placeholders.md`, section "2. CFBDepth.com" (resume-level skeleton) + `images/homepage hero.webp` (confirmed by Tyler as the final chat panel UI) + Tyler's inline answers to the v1 questions (archived verbatim at the bottom). Everything not stated in those sources is marked `[TK]`.

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

CFBDepth sold fans, bettors, and subscribers limited access to college football data sheets stripped of their proprietary formulas, and its staff couldn't build every view those users wanted. In about 8 weeks, racing the start of the college football season, I led the project and designed an AI chat agent that lets users ask for the data in plain English: I designed the conversation and the agent's personality, built the chat experience, and gave the agent a memory of each user's teams, data preferences, and betting factors. Alongside it, a data-licensing API added a new kind of customer, the API buyer, and I designed the internal tool that issues and rotates their keys. The result was new users at higher price points and a new revenue stream, with a handful of API customers before we handed off the final API tool.

Image: `images/homepage hero.webp` — the final UI of the chat panel (confirmed by Tyler). Specific on-screen details (the CFBAI name, credits, model picker, "Powered by Claude") stay out of the copy until Tyler confirms they can be used (Q6).

## 01 — The Setup

CFBDepth.com published college football data sheets: live stats and analytics. Users paid for limited access to those sheets, which were stripped of CFBDepth's proprietary formulas before publishing. Those users were fans who wanted updates on their teams' players, bettors, and subscribers.

Using the data the way they wanted was a heavy lift. Each user wanted to slice the data differently, and CFBDepth's staff couldn't build all the views it would take to satisfy them.

The owner of CFBDepth asked for the project. The deadline was fixed: everything had to be complete before Week 0 of the college football season, because CFBDepth's primary audience, gamblers, would want the tool as soon as games kicked off.

## 02 — The Approach

I was Project Lead & Senior Designer on a team with 2 engineers. I built the agent's chat experience and designed its conversations, and I did some engineering on the agent itself as part of quality assurance. The engineers set up the database and built the API tooling.

We started by meeting with CFBDepth's stakeholders and users to identify every user persona: the value each one got from CFBDepth, how they used it, and their goals and motivations. That research fed the conversation design.

Next came the agent's personality. We modeled it on head football coach Nick Saban: authoritative, confident, and not afraid to let its opinions be known. Then we architected how conversations should flow, so that every user type got to what interested them most.

From there, we built payment into both the tool and the conversation itself, designing how the agent would prompt users to add more to their account or move to a larger plan (see Decision 03).

Then we built the API tool, an internal tool for issuing API keys to clients (see Decision 04). I designed its UI with Claude Code. Because it was a simple internal tool, we tested it only through internal usability testing.

We wrote training materials for both the chat agent and the API tool. A final UI pass brought in CFBDepth's new branding so the agent felt like part of one cohesive experience.

[TK: how Figma, Vercel, Railway, and Docusaurus each fit in.] [TK: which AI model powered the agent, and whether it belongs in Tools.]

Tools/pills: Figma, Claude Code, Vercel, Railway, Docusaurus

Image plan (all recreated for this case study; Tyler has no original process artifacts since he left the agency):
- **Persona map** — the three user types from 01 (team fans, bettors, subscribers), each with what they want from CFBDepth's data. Caption: "Persona map, recreated for this case study. Not an original project artifact."
- **Conversation flow** — one entry point branching by user type into the topics each cares about, with an upsell moment marked on the path. Caption: "Conversation flow, recreated for this case study. Not an original project artifact."

## 03 — The Work

**Decision 01 — A conversation instead of more data views**
I put CFBDepth's data behind an AI chat agent, so users could ask for what they wanted in plain English instead of waiting for staff to build another view of a published sheet. Considered instead: [TK: the alternative, e.g. more pre-built views, a dashboard, or filters]. Why: [TK: why conversation won for these users]. What's known: it took pressure off CFBDepth's staff and let users work with the data directly.

Image plan: before/after, a formula-stripped data sheet next to the same question asked in chat. Caption: "Low-fidelity before/after, recreated for this case study. Not an original project artifact."

**Decision 02 — An agent that remembers, at the cost of an extra call every session**
I designed the agent to remember each user: their user type, the teams they support and why, the data they like to examine and how, and the factors they weigh when betting and making picks. After every conversation, the agent updated its memory, and it read that memory back in before starting the next session. Considered instead: a simpler agent without memory. Why and what it cost: memory made the solution more complex, and the extra call it added to every session made it much more expensive to run. We accepted both, because a better experience was the priority for capturing users.

Image plan: memory loop, session ends → memory updated (user type, teams, data preferences, betting factors) → memory loaded → next session starts. Caption: "Diagram recreated for this case study. Not an original project artifact."

**Decision 03 — Payment built into the conversation**
I built payment into the conversation, not just the tool, so the agent itself could prompt users to add more to their account or move to a larger plan. Considered instead: [TK: the alternative, e.g. keeping payment on a separate upgrade page]. Why and what it cost: [TK: why in-conversation upsell won, and any trade-off, e.g. how pushy the prompts could be].

Image plan: low-fi chat moment where the agent offers a larger plan mid-conversation. Caption: "Low-fidelity screen, recreated for this case study. Not an original project artifact."

**Decision 04 — A licensing API the original scope didn't include**
The original scope covered only the chat agent. During a weekly check-in, the owner and I talked about who else would want CFBDepth's data and how it could be monetized, and every option led back to distributing API keys. Considered instead: keeping the data inside CFBDepth's own site and the chat agent, as the original scope did. Why: an API brought in a new type of user, the API buyer, as part of CFBDepth's push to grow the brand. We ran it as a separate statement of work (SOW) alongside the chat agent, inside the same pre-season timeline. The engineers built the API tooling; I designed the UX/UI of the internal tool that generates clients' API keys. It puts front and center which data streams each client gets, and how to rotate keys when a subscription ends.

Image plan: low-fi API key tool, a client row with data-stream checkboxes and a "Rotate key" action tied to subscription status. Caption: "Low-fidelity screen, recreated for this case study. Not an original project artifact."

## 04 — The Outcome

[TK: whether the chat agent and API tool launched before Week 0.] The chat agent let users pair CFBDepth's many-layered data with the power of AI, and it became the backbone of CFBDepth's initiative to scale up and offer more to its users. It brought in new users at higher price points, and the API opened a new revenue stream: CFBDepth already had a handful of API customers before we handed off the final API tool.

There's no hard metric.

Stat card: New revenue stream — a handful of API customers before the final API tool handoff (no usage or revenue numbers)

Image: reuse `images/homepage hero.webp` (the final chat panel UI) as the closing shot, as Rendevor, huddl, and Kasasa do.

---

## Notes

- Title changed to the placeholder's title at Tyler's request (v1 Q12), in Kasasa's "Company — Title" shape.
- 00 and the Role/Team cells now match Tyler's account: he built the chat experience and conversation design and designed the API key tool's UI; the engineers built the database and API tooling. The v1 phrasing about client-facing work "around an API" is gone. "Solo" dropped: Tyler didn't use it.
- Tyler's Q7 answer was the process walkthrough; it's used in 02. The real Q7 (alternatives to chat) is asked again below.
- Decision 02's alternative ("a simpler agent without memory") is the Writer's framing of the plain opposite; the trade-off and reason are Tyler's (v1 Q8).
- Decision 03 is new in v2, from the payment step in Tyler's walkthrough. The decision is his; alternative and trade-off are `[TK]`. If he has nothing, it can fold back into 02 and section 3 keeps three decisions.
- Decision 04's alternative is the original scope, a real before-state (v1 Q9). "Inside the same pre-season timeline" is the Writer's link between "concurrently" (Q9) and the Week 0 deadline (Q4).
- Nick Saban is named because Tyler named him as the personality model. Worth a glance from Tyler on whether naming a real person is fine on the page.
- "Plain English" is from Tyler's Q3 ("through English language").
- Outcome: no number invented. "A handful" is Tyler's word, kept as is. The copy says plainly there's no hard metric, as Kasasa does.
- Section 05 omitted; Tyler had nothing to add (v1 Q11) and it's optional.
- Q5's "hardest part / change of course" went unanswered; 02 doesn't claim one.
- All process visuals are planned as recreations; none exist yet. Each caption must say it was recreated for this case study.
- Hero details (CFBAI, credits, model picker, "Powered by Claude", the picks table) are kept out of copy pending Q6.

---

## JobHunter summary (pending Tyler's approval)
CFBDepth.com (SeeSaw Labs): as Project Lead & Senior Designer, led an AI chat agent built in about 8 weeks, designing its conversations and chat experience, that lets college football fans and bettors work with CFBDepth's data in plain English and remembers each user's teams and betting preferences; also designed the key tool for a new data-licensing API that opened a new revenue stream with a handful of customers before final handoff.

---

## Open questions for Tyler
Answer inline under each question; the next run folds your answers into the draft.

**02 — The Approach**

1. How did Figma, Vercel, Railway, and Docusaurus each fit in? (Claude Code is covered: you designed the API tool's UI in it.)
   Answer:

2. Which AI model powered the agent? The hero says "Powered by Claude"; is that right, and should it be listed in Tools?
   Answer:

**03 — The Work**

3. Chat instead of more data views: what else did you consider (more pre-built views, a dashboard, filters), and why did conversation win? If nothing else was on the table, say so and Decision 01 becomes the setup for the other three.
   Answer:

4. Payment inside the conversation: what was the alternative (e.g. a separate upgrade page), and was there a trade-off, such as how hard the agent should push upgrades? If none, it folds back into 02.
   Answer:

**04 — The Outcome**

5. Did the chat agent and the API tool launch before Week 0?
   Answer:

**00 — Images**

6. Can the hero's details appear in the copy: the CFBAI name, the credits system, the model picker? And is naming Nick Saban as the personality model fine on the page?
   Answer:

---

## Tyler's answers (archive)
Kept verbatim so the source stays on record.

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
