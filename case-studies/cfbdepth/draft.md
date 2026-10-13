# CFBDepth.com — AI-Powered Chatbot

Company: SeeSaw Labs
Status: Questions out for Tyler (v1)
Source: `case-study-placeholders.md`, section "2. CFBDepth.com" (resume-level skeleton) + `images/homepage hero.webp` (contents not yet confirmed by Tyler). Everything not stated in the placeholder is marked `[TK]`.

---

## At-a-glance

| Field | Value |
|---|---|
| Role | Product Designer & Project Lead (solo designer) [TK: confirm exact title] |
| Timeline | [TK: duration, e.g. "N weeks"] |
| Team | Product Designer & Project Lead (me), [TK: other roles, e.g. who built the agent, database, and API] |
| Tools | Figma, Claude Code, Vercel, Railway, Docusaurus |
| Outcome stat | [TK: one outcome, stated as a single stat or fact] |

---

## 00 — Executive Summary

CFBDepth's proprietary college football data lived in data sheets that less technical users had to dig through like spreadsheets. As the solo product designer and project lead, I owned the interface, interactions, and agent behavior of an AI chatbot that lets people query live stats and analytics by conversation, an agent that remembers preferences and conversation history to sharpen its answers, and the client-facing work around an API that lets CFBDepth license data streams to other businesses. [TK: what happened: launch, usage, licensing, or the closest proof it worked.]

Image: `images/homepage hero.webp` — [TK: Tyler to confirm this is the finished, live product]. It appears to show a "CFBAI — Ask Anything" page on CFBDepth with a chat panel, suggested prompts, a model picker, and a credits counter; none of that is described in the copy until Tyler confirms it.

## 01 — The Setup

CFBDepth.com had proprietary college football data sheets: live stats and analytics. Getting answers out of them meant digging through spreadsheets, which shut out less technical users. [TK: who those users were (fans, bettors, CFBDepth's own staff, paying subscribers?) and what concretely went wrong for them.]

[TK: who at CFBDepth asked for this, why then, and whether there was a deadline or outside pressure, such as a season start or a licensing opportunity.]

[TK: whether licensing data to other businesses was part of the original ask or came up during the project.]

## 02 — The Approach

I was the solo product designer and project lead, so I owned the interface, the interactions, and the agent's behavior end to end, along with all client-facing work with CFBDepth.

[TK: what I did, roughly in order: the first move, any research or testing with users, how the agent's behavior was defined, the hardest part, and any change of course.]

[TK: how each tool fit in: Figma, Claude Code, Vercel, Railway, Docusaurus. Which AI model or API powered the agent?]

Tools/pills: Figma, Claude Code, Vercel, Railway, Docusaurus

Image plan: [TK: image — any process artifacts (flows, conversation scripts, early screens), or recreate low-fi visuals as on huddl and Kasasa?]

## 03 — The Work

**Decision 01 — A conversation instead of spreadsheets**
I put CFBDepth's data behind a chatbot, so less technical users could ask for live stats and analytics in plain conversation instead of digging through spreadsheets. Considered instead: [TK: the alternative, e.g. leaving the data in spreadsheets, a filtered table or dashboard, or something else]. Why: [TK: why conversation won for these users].

Image plan: [TK: image — the hero chat panel could fit here once confirmed, or a before/after of a spreadsheet versus the same question asked in chat]

**Decision 02 — An agent that remembers**
I designed the agent to track each user's preferences and conversation history, so its results got sharper the more people used it. Considered instead: [TK: the alternative, e.g. a stateless chatbot that starts fresh every time]. Why and what it cost: [TK: what the agent remembered, how that sharpened results, and any trade-off such as privacy, user control, or complexity].

Image plan: [TK: image]

**Decision 03 — An API on the database, so the data could be licensed**
We layered an API on top of the underlying database so CFBDepth could license data streams to other businesses. Considered instead: [TK: the alternative, e.g. keeping the data inside the chatbot and site only]. Why: [TK: whose idea it was, the business reasoning behind it, and my part in it beyond client-facing work].

Image plan: [TK: image — e.g. the API documentation, if Docusaurus was used for it]

[TK: optional fourth decision on agent behavior, e.g. how it handled questions the data couldn't answer, or a disagreement with the client.]

## 04 — The Outcome

[TK: what shipped, and when relative to the project's start.]

[TK: what happened next: usage, engagement, subscriber or revenue impact, licensing deals signed through the API, or the closest proof it worked. Any number, even a rough one.]

Stat card: [TK: single stat or fact]

Image: [TK: image — reuse `images/homepage hero.webp` as the closing shot once confirmed, as Rendevor, huddl, and Kasasa do]

## 05 — The Takeaway

[TK: what I'd do differently or what this project taught me that shows up in later work. Optional; cut if nothing real.]

---

## Notes

- Title kept as the guide's "CFBDepth.com — AI-Powered Chatbot" until Tyler picks (see Q12). The placeholder's title is "Using AI to Make Complex Data Accessible to Everyone".
- Role cell uses the placeholder's "solo product designer and project lead". "Solo" refers to design; the placeholder's "we layered an API" suggests others were on the build, so the Team cell is left `[TK]`.
- The hero image is not described as fact anywhere in the copy. Things it seems to show that the placeholder doesn't back: the product name "CFBAI", "Powered by Claude", a model picker, a credits system, suggested prompts, and betting picks content. All are in Q12.
- No tool was assigned a role (e.g. Vercel/Railway for hosting, Docusaurus for API docs); that's for Tyler to confirm (Q6).
- Decision alternatives are left `[TK]`; the examples in brackets are prompts, not claims.
- 00 is kept short and ends on a `[TK]` because the outcome is unknown.

---

## JobHunter summary (pending Tyler's approval)
CFBDepth.com (SeeSaw Labs): as solo product designer and project lead, built an AI chatbot that lets less technical users query CFBDepth's proprietary college football stats by conversation, with an agent that learns from user preferences and history and an API that lets the client license its data to other businesses; [TK: outcome or metric].

---

## Open questions for Tyler
Answer inline under each question; the next run folds your answers into the draft.

**At-a-glance**

1. What was your exact title on CFBDepth, roughly how long did it run (a duration, not dates), and what other roles were on the team (e.g. "2 engineers")? Who built the agent, the database work, and the API?
   Answer:

2. If you had to defend this project's value in one sentence to someone who wasn't there, what's the sentence? Is there a number behind it (users, conversations, subscribers, licensing deals)?
   Answer:

**01 — The Setup**

3. Before the chatbot, who was using CFBDepth's data sheets and how? Who are the "less technical users" (fans, bettors, CFBDepth staff, subscribers?), and what concretely went wrong for them?
   Answer:

4. Who at CFBDepth asked for this, and why then? Was there a deadline or outside pressure (a season start, a launch, a licensing opportunity)? Was licensing data part of the original ask?
   Answer:

**02 — The Approach**

5. Walk me through what you did, roughly in order. What was the first move? Did you research or test with users? How did you define the agent's behavior? What was the hardest part, and was there a moment you changed course?
   Answer:

6. How did each tool fit in: Figma, Claude Code, Vercel, Railway, Docusaurus? Which AI model or API powered the agent, and should it be listed in Tools?
   Answer:

**03 — The Work**

7. Chat instead of spreadsheets: what else did you consider (a better table, a dashboard, filters) and why did conversation win for these users?
   Answer:

8. Agent memory: what exactly did the agent remember about users, how did that sharpen results, and what was the alternative? Were there trade-offs (privacy, user control over what it remembered, complexity)?
   Answer:

9. The licensing API: whose idea was it, what was the alternative, and what was your part beyond client-facing work? Who were the businesses it was meant for? Is there another decision worth a slot, such as how the agent handled questions the data couldn't answer, or a disagreement with the client?
   Answer:

**04 — The Outcome**

10. What happened after it shipped? Any number, even a rough one (usage, engagement, revenue, data licensing deals), or the closest proof it worked?
    Answer:

**05 — The Takeaway**

11. What would you do differently, or what did this project teach you that shows up in later work? (Skip if nothing real.)
    Answer:

**00 — Executive Summary, images, and title**

12. What does `images/homepage hero.webp` show? It looks like a "CFBAI — Ask Anything" page with a chat panel, suggested prompts, a model picker, credits, "Powered by Claude", and betting picks. Is that the finished, live product, and can any of those details go in the copy (e.g. the CFBAI name, the credits system)? Do you have other screens or process artifacts for 02–04, or should we recreate low-fi visuals? And which title: "CFBDepth.com — AI-Powered Chatbot" or "Using AI to Make Complex Data Accessible to Everyone"?
    Answer:
