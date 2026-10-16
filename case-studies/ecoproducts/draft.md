# EcoProducts — Enhancing eCommerce through Information Architecture

Company: Slide UX
Status: Draft ready for Tyler's review (v2)
Source: Tyler's inline answers to the v1 questions (archived verbatim at the bottom) + `case-study-placeholders.md`, section "6. EcoProducts" (title, description, tools list) + the guide's table (company: Slide UX) + `images/hero image.webp` (the store's "Shop All" page; Tyler says it's the only real image he has).

---

## At-a-glance

| Field | Value |
|---|---|
| Role | Senior UX Designer |
| Timeline | About 2 months |
| Team | Senior UX Designer (me), 1 Designer, 1 Product Manager |
| Tools | Figma, FigJam, Hotjar, BigCommerce |
| Outcome stat | Conversions up 12%, measured 3 months after launch |

---

## 00 — Executive Summary

After a product expansion forced EcoProducts to reorganize its online store, conversions dropped 10%, and the company came to Slide UX to get back to its baseline. As Senior UX Designer, I owned the information architecture and conversion flow: I watched user sessions, interviewed users, and ran open and closed card sorts to find the gap between where shoppers expected products to be and where they actually lived, then rebuilt the structure around what they told us. Three months after launch, conversions were up 12%, past the baseline EcoProducts had asked us to get back to.

Image: `images/hero image.webp` — the EcoProducts store's "Shop All" page: the top navigation (Products, Learn, Company, Stories), a product-category list down the left, and category tiles with photos. This is the only real screenshot Tyler has; whether it shows the store exactly as we shipped it is not confirmed, so the caption should say "the EcoProducts store" rather than "the final design" (see Notes).

## 01 — The Setup

EcoProducts makes compostable, eco-friendly food service products: containers, plates, boxes, utensils, napkins, and to-go materials, with a different product for nearly every use. It's a big company, and it partners with large arenas and conference spaces across the US.

The trouble started with growth. EcoProducts expanded its product line, and the new products didn't fit the store's existing structure, so the company reorganized its information architecture to make room for them. After that change went live, conversions dropped 10%.

EcoProducts came to Slide UX with that problem and one clear goal: get conversions back to where they were before the reorganization.

## 02 — The Approach

The project ran about 2 months. I worked with one other designer and a product manager. I owned the information architecture and the conversion flow; the other designer focused on specific product pages, improving how shoppers moved to related products and how they started checkout.

The first move was watching. I went through a lot of user sessions in EcoProducts' analytics tool to see where people got stuck. Then I mapped the existing architecture end to end, including every product and where it sat, so we could see the whole store at once instead of one menu at a time.

Next came the users themselves. I ran user interviews and card sorting sessions to learn how people would actually organize the products and where they expected to find specific items. I ran the card sorts in two rounds. In the open sort, users grouped the products and wrote their own labels for each group. In the closed sort, they sorted the same products under pre-made labels we had written from our own assumptions, which showed us where those assumptions held and where they didn't.

Two findings shaped everything after. Users had their own way of referring to the new line of products, different from what the store called them. And there was a gap between where users expected to find products and where those products actually lived on the site.

With the card sort results in hand, I mapped the new architecture in FigJam: new top-level categories, products regrouped, and category names drawn from how users described things.

Tools/pills: Figma, FigJam, Hotjar, BigCommerce

Image (planned, recreated): a low-fi grayscale timeline of the process in order (watch sessions, map the existing architecture, interviews, open card sort, closed card sort, new architecture in FigJam), using only words from this section, captioned as a recreation.

## 03 — The Work

**Decision 01 — Let the card sorts, not our assumptions, set the new structure**
Rebuilt the categories and their names from what users did in the open and closed card sorts, instead of from the labels we had assumed would work. The closed sort was a direct test of those assumptions, and it showed a gap between where users expected products and where they actually were. The structure that had cost EcoProducts 10% of its conversions had been organized around how the company thought about its products; the new one is organized around how its customers look for them.

Image (planned, recreated): a low-fi side-by-side of an open card sort (users write their own group labels) and a closed card sort (users sort under pre-made labels), with blank grey cards and no real product names, captioned as a recreation.

**Decision 02 — Show shoppers that recommended products fit, so they don't leave to check**
Grouped related products the way users actually shopped and built logic to show that the recommended items were compatible, rather than leaving shoppers to find and verify matching pieces on their own. This was the biggest change to the product pages. A common pattern: a shopper adds cups or soup containers, then has to separately find lids and make sure the sizes and quantities line up. People were dropping off after spending time trying to confirm the lids fit what they were buying. Now the recommended products show they're compatible, so shoppers can add them right there without going anywhere else on the site.

Image (planned, recreated): a low-fi product card for a cup with a "recommended lid" beside it marked as a compatible fit and an add button, grey blocks in place of photos, captioned as a recreation.

**Decision 03 — Keep users' product names in search when renaming was off the table**
The card sorts showed that users called some products by different names than EcoProducts did, so we proposed new names for them. But changing product names outright was out of scope for this eCommerce project. Instead of dropping what we'd learned, we added the users' names to the products as labels on the backend. The store still shows EcoProducts' names, but a shopper who searches for a product by the name they'd use still finds it easily.

Image (planned, recreated): a low-fi diagram of one product with its displayed name and the user's name attached as a hidden search label, and a search box finding it by the user's name, captioned as a recreation.

## 04 — The Outcome

The new architecture and the product-page changes launched together, and three months after launch, conversions were up 12%. EcoProducts had come to us to recover a 10% drop and get back to baseline; the redesign went past it.

Stat card: 12% — increase in conversions, measured 3 months after launch

Image: `images/hero image.webp` again as the closing shot, or no image.

## 05 — The Takeaway

Talking to users and testing with them early turned up a lot of easy wins, problems that were quietly costing EcoProducts sales. None of the fixes were dramatic: a structure that matched how people looked, lids that clearly fit, a search that knew what customers called things. It was cool to see a few small changes have a big impact on the company.

---

## Notes

- Team: "1 other designer" is listed as "1 Designer" and "a PM" as "1 Product Manager". Tyler didn't say whether the PM was at Slide UX or EcoProducts, so the copy doesn't say.
- "Their analytics tool" (Q5) isn't named in the copy. Hotjar and BigCommerce stay in Tools from the placeholder, but no sentence says Hotjar was the session tool or that the store runs on BigCommerce (Q3's BigCommerce question and Q7's "who built it" went unanswered). If Hotjar was the session tool, 02 can name it.
- "Launched together" in 04 is a light inference: Tyler gave one launch ("3 months after product launch") for the whole project. Fix it if the IA and the product pages went live separately.
- "Past the baseline" comes from Tyler's Q4 ("getting back to their baseline which we after exceeded"). The copy doesn't compute how far past.
- Decision 02 says "we" and "built logic": Tyler wrote "we built in logic," and the other designer owned product pages, so it's framed as team work in my conversion flow, not as mine alone.
- Decision 01's alternative (our assumed labels) comes from the closed card sort Tyler described in Q5. Q8 didn't give a "restructure vs. improve search" reason, so that framing from v1 was dropped.
- No specific product examples from the card sorts are used (Tyler: "I don't remember specific examples so don't ask"). The only product example is Q7's cups, soup containers, and lids.
- The 05 takeaway's middle sentence lists the three changes from 03 as a recap; it adds no new facts.
- Images (Q9): only `images/hero image.webp` is real. Four low-fi grayscale SVGs are planned for the port, each captioned as a recreation, with no real product names or data. The hero's category names (e.g. "Cups - Lids - Accessories") weren't used in copy because it's unconfirmed whether that page reflects the redesign.
- Removed "drove measurable improvements in conversions and revenue" from the placeholder: Tyler gave a conversion number only, no revenue figure.

## JobHunter summary (pending Tyler's approval)
EcoProducts (Slide UX): as Senior UX Designer, owned the information architecture and conversion flow for a compostable food-service products company's online store after a product expansion and reorganization cut conversions 10%, using user interviews and open and closed card sorts over about 2 months, and conversions rose 12% three months after launch.

Sources: role and duration = At-a-glance; "owned the information architecture and conversion flow" = 02; company description = 01; the 10% drop = 01; interviews and card sorts = 02; 12% at 3 months = 04 and the stat card.

---

## Archive: Tyler's v1 answers (verbatim, draft only)

1. Role, duration, team — Senior UX Designer, 2 months, 1 other designer and a PM. My job was focused on the actual information architecture and conversion flow. The other designer focused on specific product pages to optimize navigation to other related products and initiating checkout.
2. Outcome — Helped increase conversions by 12% which was measured 3 months after product launch.
3. What EcoProducts sells — The sell compostable and eco friendly food containers. They have tons of different products for different uses from utensils, plate, boxes, container, to-go materials, napkins. They are a huge company and partner with large arenas and conference spaces around the US.
4. Kickoff — EcoProducts did some product expansions which required reorganizaztion of their information architecture. After implementing this change, they noticed a 10% dropoff in conversions so they came to Slide UX with this problerm and goal of getting back to their baseline which we after exceeded.
5. Research — Watched a lot of user sessions through their analytics tool, mapped out the existing architecture and all the products in that architecture. Then did user interviews and card sorting sessions to see how users would actually organize the products and where they would expect to find certain items. I ran both an open card sort and a closed card sort. At first I had users create their own labels and then had them organize under pre-made labels based on our assumptions. We made some new discoveries with how users were referring to the new line of products and found their was a gap in where users expected to find products versus where they actually existed. I don't remember specific examples so don't ask.
6. New IA — Yes it changed all these things and we did map in Figjam after conducting open and closed card sorts.
7. Product pages — The related products was the biggest change. We needed to group like things together in a way that matched user behaviors. One big pain point was users often would add things like cups and soup containers but also needed to separately add lids and be assured that the size and quantities were aligned. USers were dropping off after spending time trying to make sure the lids fit the products they were buying. So we built in logic to show and assure users that the recommended products were compatible and they didn't need to go anywhere else on the site to find and add those products if needed.
8. Trade-offs — We ended up proposing new names for some products because that's what our card sorting exercise uncovered but unfortunately entire product name changes were out of scope for this ecommerce project. We did add those names to labels on the backend so users who searched for those products were still able to find them easily.
9. Images — This is all I got so everything else needs sourced and created by you.
10. Three-sentence summary, takeaway — Talking and testing with users helped uncover a lot of easy wins early on that was ultimately impacting the bottom line. It was cool to see a few small changes have a big impact on the company.
