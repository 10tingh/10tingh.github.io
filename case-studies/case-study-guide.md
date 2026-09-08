# Case Study Guide — how we write the 8

This is the working process for turning a SeeSaw Labs or Slide UX project into a
published case study. Use it every time so all 8 end up consistent in shape,
voice, and depth — even though the projects themselves are pretty different
(some are hands-on design execution, some are strategy/BD-flavored).

Companion file: `case-study-template.html` — the styled page every case study
gets built into once the content below is locked. Don't skip ahead to HTML
before the content is solid; it's much cheaper to fix a weak story in plain
text than after it's laid out.

---

## How each one gets made

1. **Pick the project.** One of the 8 from the SeeSaw Labs / Slide UX list.
2. **Tyler supplies the specifics** — this guide's questions below, answered
   in whatever form is easiest (bullet points, a voice memo transcript,
   copy-pasted Slack threads, whatever). Resume/LinkedIn bullets are a
   starting skeleton, not a source of truth — they're too compressed to
   write from directly.
3. **Draft in Markdown first.** Plain-text draft, structured with the sections
   below, reviewed and edited before anything touches the HTML template.
   Easier to cut a paragraph in Markdown than in a styled page. Write the
   Executive Summary (00) last, even though it's the first thing on the
   page — see that section below.
4. **Port into `case-study-template.html`.** Copy the template, drop in the
   approved copy, swap the stat cards and any visuals.
5. **Proofread against the checklist** at the bottom before it goes live.

---

## Voice check before you write a word

Every case study should sound like it's doing at least one of these (per
the brand standards doc) — most will hit two or three:

- **Systems-minded** — did this project turn something scattered into
  something repeatable? Say what the "before" chaos looked like.
- **Plainspoken teacher** — explain the process the way you'd explain it to
  a smart junior designer, not the way you'd explain it to another Head of
  Design trying to prove you know the jargon. No unexplained acronyms.
- **Accessible by default** — if WCAG/accessibility was part of the work,
  even implicitly, say so plainly, not as an afterthought bullet.
- **Strategic operator** — for the Slide UX projects especially: don't
  hide the business reasoning behind a purely visual story. Say what the
  client actually needed to happen (a signed contract, a retained
  relationship, a roadmap a exec would approve).

Write in first person, past tense, active voice. Cut any sentence that
could describe literally any project ("I collaborated with cross-functional
stakeholders to deliver a user-centered solution" — delete). Specificity is
the whole game: name the tool, the number, the actual objection a
stakeholder raised.

---

## The page, section by section

The at-a-glance strip sits in the page header (unnumbered). Below it come
six numbered plates, 00 through 05 — but plate 00 is written *last*, once
you already know how the story ends. Everything else drafts in page order.

### At-a-glance (header strip, not prose — a fact block)
- Company
- Your role / title on this project
- **Length** of the project (e.g. "6 weeks," "3 months") — not calendar
  dates
- **Team, by role only, not names** — who else was involved and what they
  did (e.g. "Product Designer (me), 1 Engineer, 1 Account Lead"), never a
  person's name
- Tools used
- One outcome, stated as a single stat or fact (this feeds both the Plate
  00 summary and the Plate 04 pull-quote — see below)

**Ask Tyler:** *Company, your role, roughly how long it ran, what other
roles were on it (not who — just "an engineer," "a PM," etc.), what tools
you actually opened every day, and — if you had to defend this project's
value in one sentence to someone who wasn't there, what's the sentence?*

### 00. Executive Summary — write this LAST
2–4 sentences that distill the whole case study: the problem, what you did,
what happened. This is the first thing a reader sees, but it should read
like an ending, not a preview — so draft it only after Sections 1–5 (below)
are done and you know exactly how the story resolves. Paired on the page
with a **screenshot of the finished, shipped product** — the final state,
not a work-in-progress. If there's genuinely no visual for a project (some
of the Slide UX / strategy work may not have one), flag it and we'll figure
out a substitute (a document, a deck slide, a scoping artifact) rather than
leaving the slot empty.

**Ask Tyler (after everything else is drafted):** *If someone only read
three sentences of this case study, what should they walk away knowing? And
do you have a screenshot, mockup, or document that shows the finished
thing?*

### 1. The Setup — context & problem
What existed before this project started, and why it needed to change. Who
asked for it (or who should have asked for it, if it was self-initiated).
What was actually broken, slow, inconsistent, or missing — described
concretely, not as "there was an opportunity to improve UX."

**Ask Tyler:** *What was the state of things before you touched this? What
specific pain, request, or gap kicked it off? Was there a deadline or
external pressure (a client renewal, a launch date, a sales pitch)?*

### 2. The Approach — your role & process
What you actually did, in the order you did it. This is the "how," and it's
where the systems-minded / plainspoken-teacher voice does the most work —
walk the reader through your actual process, not a generic double-diamond
diagram. Name the specific research method, the specific prototyping tool,
the specific stakeholder you had to convince.

For strategy/BD-flavored projects (most of the Slide UX list): this section
can center on discovery calls, scoping conversations, proposal-building, or
relationship management instead of Figma work — that's a legitimate
"approach" too, and it's the section that proves the strategic-operator
pillar.

**Ask Tyler:** *Walk me through what you did, roughly in order. What was
the first move? What was the hardest part to figure out? Was there a moment
you had to change course?*

### 3. The Work — key decisions
2–4 specific decisions or trade-offs, each with the reasoning behind it.
This is the section that separates a real case study from a portfolio
gallery caption. A decision can be a design choice, a scoping call, a
process change, or a pushback you gave a stakeholder.

Pattern for each: **the decision → the alternative you didn't take → why.**

**Ask Tyler:** *What's a choice you made on this project that someone else
might have made differently? What did you consider and reject? Was there
a disagreement with a stakeholder, client, or teammate you had to resolve?*

This is also where visuals go, if there are any — screenshots, flow
diagrams, before/afters. Not required for every case study (several of the
Slide UX ones may be visual-light and that's fine), but flag it if you have
assets to pull in.

### 4. The Outcome — impact
What shipped, what changed, what happened next. Lead with the single
stat/fact from Section 0 if you have one. Business outcomes count as much
as design outcomes here — "the client renewed for a second phase," "the
proposal closed within two weeks," "reduced [specific task] from X steps to
Y" are all fair game. If there's no hard metric, a specific qualitative
result is fine ("the design system is still what the team uses today") —
just don't leave the section vague.

**Ask Tyler:** *What actually happened after this shipped/closed? Any
number, even a rough one? If no number exists, what's the closest thing
to proof that it worked?*

### 5. The Takeaway (optional, but strong when included)
One short paragraph — what you'd do differently, what you learned, or what
this project taught you that shows up in later work. Skip it if it feels
forced; a real one beats a generic one.

---

## Content checklist (run before moving a case study into HTML)

- [ ] At-a-glance stat is a specific fact, not "improved the user experience"
- [ ] Team field lists roles only — no names
- [ ] Timeline field is a duration, not calendar dates
- [ ] Executive Summary (00) was written last and reads as an ending, not a teaser
- [ ] Executive Summary has a final-state screenshot (or a flagged substitute)
- [ ] No sentence could be copy-pasted into a different case study unchanged
- [ ] At least one concrete number, tool, or duration per section
- [ ] Section 3 (The Work) has real trade-offs, not just a list of deliverables
- [ ] Voice matches at least 2 of the 4 pillars (see above)
- [ ] Read aloud once — cut anything that sounds like a LinkedIn post

---

## Folder structure

Each case study gets its own folder under `case-studies/`, named with its
slug (see the table below):

```
case-studies/
  case-study-guide.md          <- this file
  case-study-template.html     <- the page template
  rendevor/
    draft.md                   <- Markdown draft (Sections 00–05)
    index.html                 <- final page, built from the template
    images/                    <- final-state screenshot + any process visuals
  cogent-analytics/
  cfbdepth/
  huddl/
  mystique-productions/
  ecoproducts/
  kasasa/
  cs-disco/
```

Work happens in `draft.md` first; `index.html` and `images/` only show up
once a case study's copy is approved and it's ported into the template.

## The 8

| # | Slug | Company | Project | Status |
|---|------|---------|---------|--------|
| 1 | `cogent-analytics` | SeeSaw Labs + Slide UX | Cogent Analytics — Marketing Website & Custom Tools | Not started |
| 2 | `cfbdepth` | SeeSaw Labs | CFBDepth.com — AI-powered chatbot | Not started |
| 3 | `rendevor` | SeeSaw Labs | Rendevor — Audit Center | **Draft v1 in progress** — see `rendevor/draft.md`, pending Tyler's answers to its open questions |
| 4 | `huddl` | SeeSaw Labs + Slide UX | Huddl — Streamlining Pharmacy Workflows | Not started |
| 5 | `mystique-productions` | SeeSaw Labs | Mystique Productions — Content-Rich Marketing Website | Not started |
| 6 | `ecoproducts` | Slide UX | EcoProducts — Enhancing eCommerce through Information Architecture | Not started |
| 7 | `kasasa` | SeeSaw Labs | Kasasa — Sales Demonstration Tool | Not started |
| 8 | `cs-disco` | SeeSaw Labs | CS DISCO — Using AI to Transform the Legal Sector | Not started |
