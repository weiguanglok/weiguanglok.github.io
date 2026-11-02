# Personal website visual improvement brief

## Objective and scope

Improve Wei Guang Lok's existing personal portfolio so visitors quickly understand his electrical engineering specialisation, see evidence of his work, and can explore his projects. Preserve the railway identity and existing content accuracy.

This document is an implementation handoff. Implement the required work below in the existing website; optional work is explicitly separated. The user has chosen to retain the Bob's Adventure title screen because the available gameplay video is blurry. Treat the static title image as the main FPGA visual.

Read applicable repository instructions before editing. Inspect the current files and working tree: there are pre-existing uncommitted changes. Preserve those changes and integrate improvements without restoring files to HEAD. This brief does not authorise committing, pushing, publishing, or deploying.

## Existing implementation and evidence

The reviewed version is a static website with local assets and no build step:

| File | Responsibility |
| --- | --- |
| `index.html` | Content, section structure, images and links |
| `styles.css` | Tokens, typography and responsive layouts |
| `main.js` | Navigation, active section state and GSAP motion |
| `assets/gsap.min.js` | Existing bundled GSAP library |
| `assets/bobs-adventure.png` | FPGA game title screen to retain |
| `assets/coursereg-tracker.png` | CourseReg interface screenshot |
| `assets/profile-640.webp` | Personal portrait |
| `assets/nel-trains.jpg` | Credited Sengkang Depot photograph |

Recheck this inventory against the current checkout. Keep the existing stack and local asset loading. Add no framework, package manager, build system, or duplicate animation library.

Baseline screenshots, measurements and written critique are in `.taste-skill/before/`. The reviewed version passed source lint and the browser inspector at 1440, 768 and 390px. Its inspector reported one warning: no video. That warning is acceptable here because a clear static project image is preferable to the available blurry footage. These results describe the baseline, not the implementation you will deliver.

## Design decisions to preserve

- Keep Zilla Slab for large headings, the train photograph, square buttons, plain navigation, the blue contact field, and the large name in the footer.
- Keep all existing section IDs and incoming anchor links, project destinations, image credits, university details, internship dates and factual qualifications.
- Use the current palette roles: neutral ground, dark ink, restrained blue accent and a quiet contrasting project surface. Adjust values only for a demonstrated contrast or composition need.
- Use equal outer margins and shared alignment edges. Put asymmetry inside the page grid.
- Keep body text at least 18px on phones and approximately 20px on desktop. Secondary metadata may be 16px. Keep paragraphs comfortably readable, approximately 45–75 characters per line where space allows.
- Keep headings within two lines at the target widths. Shorten editorial headings before shrinking type. Preserve full institutional names in readable body text if a shorter heading is needed.
- Build with flat colour, authentic images and clear scale differences. Avoid decorative gradients, glass panels, resting shadows, pill badges, numbered section labels and repeated feature-card grids.

## Required work, in implementation order

### 1. Recompose the introduction for phones and tablets

Current issue: at 390px the 250px train image and caption precede the name. At 768px the photograph becomes a tall, narrow strip beside the introduction.

Implement the following:

- On phones, put the name, role, concise introduction and primary action before the train photograph. Align DOM reading order with the visual sequence; screen-reader users should encounter the introduction first too.
- Suggested supporting copy: “Electrical engineering student at NUS, specialising in sustainable electric transportation.” Merge the overlapping interests paragraph into this introduction or the About section so the first screen stays concise.
- Preserve “Explore my work” linking to `#projects` and retain the Singapore / NUS graduation metadata.
- Place a shallow landscape train crop after the introduction on phones, approximately 180–220px high at 390px. Keep the image credit legible and separate from the name and action.
- At tablet widths, choose a landscape or bounded split composition instead of the current long vertical crop. Keep the desktop split if it still looks balanced.
- Revisit the photograph's sticky positioning after restructuring; it must not obscure or outlast unrelated sections.

Done when: the name, role and primary action are visible without scrolling at 390×844; tablet photography retains a useful view of both trains; all breakpoints have natural reading order and no overlap.

### 2. Make the internship experience easier to scan

Current issue: both internships form a long run of bullet text before visitors reach the project imagery.

Implement the following:

- Preserve both roles, employers, dates and substantive contributions.
- Give each internship an outcome-led opening, followed by concise supporting contributions. Consolidate repeated phrasing without strengthening claims.
- Give the existing “over 5,000 equipment items” fact visual prominence. Keep the qualifier “over” and identify it as equipment organised in an asset hierarchy, not an invented productivity metric.
- Use distinct but related compositions for Rail power and Rolling stock. Keep dates and role context adjacent to the relevant work.
- Add a work artefact only if an authentic, shareable one is available. Otherwise use an editorial text composition with the verified result prominent. Keep the page complete without waiting for new assets.
- A diagram explaining the general asset-hierarchy concept may be drawn in HTML/SVG, clearly described as a conceptual illustration. It must not imply that invented records or relationships came from SBS Transit.

Done when: a visitor can identify each role and its main contribution from headings and lead text alone; full substantive information remains available; the section has visual hierarchy beyond two matching bullet columns.

### 3. Improve project image presentation

For CourseReg:

- Keep the full screenshot available, but show a closer mobile crop of one meaningful comparison from the real screenshot.
- Use a separate crop or responsive image treatment where needed. Ensure the crop preserves the meaning of the selected data.
- Provide an explicit “View full screenshot” link. A normal link to the bundled image is sufficient; a custom image modal is optional.
- Preserve the live demo and repository links. Distinguish screenshot enlargement from launching the live application.

For Bob's Adventure:

- Retain the complete title screen with its original aspect ratio and readable lettering.
- Keep the image static at rest. It is a single flattened image; separate cloud, tree and lettering animation would require genuine separate layers.
- Add the walkthrough specified in the next section beneath or beside the image. The image and project summary remain visible while topics change.
- Preserve the Verilog, Vivado, Basys 3 and Pmod OLEDrgb context and repository link.

Done when: the CourseReg crop communicates a specific comparison at phone width, its full screenshot is reachable, and the FPGA title is fully visible without stretching or clipping.

### 4. Add a useful FPGA walkthrough

Use one subject-specific interaction: three expandable explanations labelled “Dual displays”, “Turn-based combat” and “LFSR randomness”. Implement them as native `details` / `summary` disclosures. Allow independent expansion and collapse; do not add tab keyboard semantics to disclosure controls.

Content requirements:

| Topic | Explanation to provide | Evidence boundary |
| --- | --- | --- |
| Dual displays | Explain the use of two Pmod OLEDrgb displays and the display/animation work described in the existing project | Verify source code before claiming a particular synchronisation method, display resolution or one-player-per-screen architecture |
| Turn-based combat | Explain the turn-based PvP structure in plain language | Verify source code before specifying health, timing, abilities or state transitions |
| LFSR randomness | Explain that an LFSR generates a deterministic pseudorandom sequence used in AI ability selection and parry mechanics | Register length, taps, seed, period and output mapping require actual source evidence |

- Write approximately 40–70 words per topic. Use verified project facts from the current page; inspect the linked repository when deeper detail is needed. Record source file references for any new technical claims in the delivery notes.
- Keep the initial project summary concise so visitors understand the hardware project without opening anything.
- Open the first topic by default. Native disclosures must remain functional without JavaScript or GSAP.
- Use a simple, labelled diagram only where it clarifies a verified explanation. Generic diagrams must be labelled conceptual. Put the same information in accessible text.
- Add a short GSAP entrance to newly expanded content: 8–12px upward travel toward its resting position, approximately 0.25–0.4 seconds, using `power2.out`. Keep expansion itself native and immediate; animate only inner content.
- Cancel or replace a previous tween when the same topic is toggled rapidly. Closing and reopening must never leave content invisible, offset, or unclickable.
- Keep controls at least 44px tall, keyboard operable and visibly focused. Use their visible topic names as accessible names.

Done when: all three topics can be opened and closed with keyboard and touch, reveal useful project facts, work without script, and remain stable under rapid toggling and reduced-motion changes.

### 5. Strengthen the personal introduction and reading rhythm

- Enlarge the portrait in About: aim for approximately 220–280px wide on desktop and 120–160px on phones, adjusting to preserve a balanced composition. Retain its natural proportions and meaningful alt text.
- Keep the personal text adjacent to the portrait rather than visually treating the portrait as an icon.
- Trial one neutral sans-serif for paragraphs and navigation while retaining Zilla Slab headings. A system sans-serif stack is sufficient and requires no new font download. Use at most two type families.
- Keep the sans-serif change only if side-by-side screenshots show improved reading and hierarchy. Record the decision; font replacement is a design trial, not an unconditional requirement.
- Rebalance section spacing after content edits. Keep section gaps larger than internal gaps and remove accidental blank stretches taller than half a viewport.

Done when: the portrait has a deliberate presence, long text is comfortable to scan, and adjacent sections have clear hierarchy and varied compositions.

### 6. Integrate motion with the existing implementation

Use the bundled GSAP core and existing `gsap.matchMedia()` structure. The current site already animates entrances; inspect and reuse that logic rather than adding a second observer or a competing animation on the same element.

- Animate transform aliases (`x`, `y`, `scale`) and `autoAlpha` where appropriate. Keep geometry in CSS and native layout; do not animate width, height, top or left.
- Use short, one-time section entrances: approximately 16–24px travel, 0.45–0.65 seconds, with 60–90ms stagger for related parts. Avoid concealing entire sections until an observer fires.
- Give each animated property one owner. In particular, review the existing hero photo entrance and scroll handler, which both write transforms. Simplify that overlap if retained.
- Keep native page scrolling. Remove or simplify the scroll-linked name scaling if it adds distraction without conveying meaning.
- Register later event-driven tweens with the relevant GSAP context so media-query changes can revert them. Clean up custom listeners and animation frames when their setup is torn down.
- Keep walkthrough functionality outside the `if (!gsap) return` failure boundary. Functional content must work when the animation library is unavailable.
- Use `prefers-reduced-motion` through `gsap.matchMedia()`. Reduced motion keeps every interaction and skips animated travel. CSS should continue to disable smooth scrolling for that preference.
- On completed entrances, clear only the inline properties owned by those animations. Avoid clearing transforms belonging to unrelated layout or interaction code.

Done when: motion supports reading and interaction, resizing does not accumulate listeners or tweens, and script failure or motion preference changes cannot strand hidden content.

## Optional work: implement only when explicitly selected

### Source-accurate LFSR demonstration

This is a later enhancement, not required to finish the walkthrough. First inspect the actual Verilog. Record the register length, taps, shift direction, seed, reset behaviour and output mapping. If unavailable, defer the demonstration and complete the rest of this brief.

Implement state transitions in plain JavaScript, independent of rendering. Offer “Next clock pulse” and “Reset”; start paused with a labelled seed. Use GSAP only to animate bit movement and highlight feedback. Show the resulting state in readable text. Explain that the sequence is pseudorandom and deterministic; do not claim cryptographic randomness or a maximal period without evidence.

Validate several consecutive states and reset against the HDL or its simulation. Add focused logic tests because correctness here is meaningful. If a pedagogical example replaces the original implementation, label it explicitly and obtain agreement on that changed scope before presenting it as part of the project.

### Image modal

A normal full-image link already meets the screenshot requirement. If implementing a modal, use native `dialog`, give it an accessible title and visible close button, support Escape, restore focus to the opener, and preserve the original image link as the no-script fallback.

## Verification and completion

1. Capture a fresh baseline if the checkout differs from `.taste-skill/before/`. Inspect the final page at 1440, 768 and 390px; also manually check 320px width, 200% text zoom and intermediate breakpoint transitions.
2. Run `scripts/lint.mjs` and `scripts/inspect.mjs` from the available design-taste-frontend skill against the modified source and final page. Write output to `.taste-skill/after/`. If the tools cannot run, document the failure and use available browser tooling for screenshots; never report a pass that was not measured.
3. Open every final fold and page screenshot. Compare with the baseline for mobile introduction order, experience hierarchy, image readability, portrait size, spacing and the existing contact/footer composition.
4. Check mobile menu open/close, Escape, navigation anchors, active navigation, project links, screenshot links and contact links. Test each FPGA topic with mouse, touch and keyboard.
5. Test JavaScript disabled, GSAP unavailable, reduced motion enabled at load, and reduced motion changed after interaction. All primary content and native disclosures must remain available. Check for console errors and missing local assets.
6. Check rapid topic toggling and resizing across desktop/mobile while content is open. Confirm no stuck transforms, invisible text, horizontal overflow or focus loss.
7. Preserve factual claims and image attribution. Add no invented internship results, game behaviours, screenshots, testimonials or performance statistics.
8. Fix all inspector failures. Explain any remaining warnings individually; the absence of video is an intentional decision supported by the user's asset quality constraint.

Deliver the updated source, before/after screenshots and a concise report listing changes, checks actually performed, remaining limitations and any source references supporting newly added FPGA details. Identify optional enhancements that were deferred. Keep website copy focused on the visitor; implementation notes belong in the report.

Completion means all required sections above meet their individual criteria. A deferred optional LFSR demonstration or image modal does not block completion.
