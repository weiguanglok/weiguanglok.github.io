# Visual implementation report

Implemented the required visual brief in index.html, styles.css and main.js. No commit or deployment was performed.

The phone introduction now precedes the photograph in DOM and visual order. Tablet layout uses a bounded photograph alongside About. Body text uses a system sans-serif; Zilla Slab remains on display headings. Compared with the baseline, the sans-serif makes the long technical content easier to scan. The portrait is larger. Rail power emphasises the existing over-5,000 equipment fact; rolling stock has a contrasting surface. All original internship contributions remain available.

CourseReg has a phone crop showing the complete CFG1500 vacancy/demand comparison and a normal link to the full screenshot. The FPGA title screen is retained. Three native disclosures explain dual displays, turn-based combat and LFSR randomness, with brief GSAP entrances. They remain usable without JavaScript. No project-specific HDL internals were added; explanations use facts already on the original page. The optional source-accurate LFSR simulator and image modal were deferred.

Removed scroll-linked photo/name transforms, eliminating competing transform writers. Existing one-time entrances and reduced-motion handling remain.

## Verification

- JavaScript syntax check and source lint passed (0 failures / 0 warnings).
- Browser screenshots captured at 1440, 768 and 390px; all ten final fold/page sheets were viewed in .taste-skill/final.
- No horizontal overflow at 320, 390, 700, 768, 1000, 1100 and 1440px.
- Primary action bottom is approximately 358px at 390px width, comfortably within the first screen.
- Menu click and Escape passed. Native disclosure keyboard activation passed with Space. The initial automated Enter event sequence did not activate the disclosure; Space was subsequently verified using native key events.
- Rapid disclosure toggling followed by a reduced-motion change left all content visible.
- Native disclosures and the initially open topic were verified with JavaScript disabled.
- No broken internal anchor destinations and no JavaScript exceptions observed.
- A 200% body-text enlargement check at phone width showed no horizontal overflow; this is a text enlargement check, not a full browser zoom test.
- External destination URLs were preserved, not individually audited against their remote sites. Physical touch-device testing and a separate GSAP-only network failure test were not performed.

The unmodified inspector rules report one failure: factual photo caption and internship date metadata were classified as eyebrow headings at 390px. These are retained as genuine captions/dates. No-footage is an intentional warning because the available gameplay clip is blurry. A retry with the documented eyebrow exception is recorded separately if the browser gate can run.

## Final visual critique

ROUND 2
Seen in one second: A personal name and railway imagery on desktop; name, role and action first on phones.
Idea (one sentence): North East Line engineering experience anchors a portfolio about electrical engineering and everyday journeys.
Live thing: Three expandable FPGA explanations.
Layout words by section: hero=split / about=portrait / experience=outcome-and-colour-field / projects=image-and-walkthrough / skills=list / education=list / contact=colour-field / footer=large-name
Scores: design 7.5 · usability 8 · creativity 7 · content 8 → overall 7.6 before strict rubric caps
Caps applied: The strict skill rubric caps overall at 6.0 while its metadata classification is still reported as a failure; this is a house-style issue, not a broken interaction.
Top three remaining limitations:
1. Internship experience still depends on text; authentic shareable engineering artefacts would strengthen desktop-page-01.jpg.
2. The complete CourseReg interface remains dense on tablet; the full-image link provides detail (tablet-page-01.jpg).
3. FPGA explanations are factual introductions rather than an actual HDL demonstration (mobile-page-01.jpg); the optional simulator requires source verification.

No new imagery was sourced. Existing train photo credit remains in the footer: Sengkang Depot NEL Trains July2017, JohnLim99, CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:Sengkang_Depot_NEL_Trains_July2017.jpg . Existing portrait, screenshots and university logos were retained. No sample business statistics or substitute photographs were introduced. No new direction was dealt because this is a targeted implementation of the approved review brief.

Final gate update: The retry completed successfully. `.taste-skill/checked/report.json` reports 0 FAIL / 1 WARN at 1440, 768 and 390px, with `--allow eyebrow` solely for genuine photo caption and internship date metadata. All ten checked screenshots were opened. The remaining warning is no footage, accepted under the brief. The earlier automatic approval timeout was resolved on retry. The conservative final rubric score remains 6.5 because the inventory includes a three-line institutional heading; the layout and interactions pass the browser gate.

Follow-up: Reordered internships in reverse chronological order (Rolling stock, Jan–Jun 2026; Rail power, May–Aug 2025). Removed the rolling-stock-only inset and column ratio so both entries use the same responsive grid. Source lint passed. Browser measurements at 1440, 768 and 390px confirm identical label and contribution left edges for both entries and no horizontal overflow. Section screenshots are in .taste-skill/alignment. No commit performed.
