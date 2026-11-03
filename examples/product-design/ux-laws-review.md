# Worked example: UX Laws Review

**Input:** Sample checkout flow, step 2 of 3: Shipping, described below. This is sample material written for this example, not a screen from a real product.
**Rubric:** UX Laws Review (`ux-laws-review`), version 1.0
**Produced:** Oct 31, 2026, by Muse running the rubric exactly as written, against the sample description below.

## Sample input

A checkout flow with three steps. Step 1, Cart, is marked done. Step 2, Shipping, is current. Step 3, Payment, is named but not yet reached. The three steps are joined by a single line, in order, with Step 1 already checked on entry.

The Shipping screen shows: a header with four navigation items (Home, Shop, Cart, Account); a form grouped as Contact (name, email) and Address (street, city, ZIP, country); a shipping options list with eight equivalent options and no default or recommended option; a country dropdown listing 200 countries alphabetically with no search; a primary Continue button and a Back button in the same size, color, and style, with Continue small and placed at the far bottom edge away from the form; an order summary card containing the items, the totals, and a promo code field; a bright promo banner above the form; a small truck icon with no label; and totals shown as $ with USD. No loading state, response time, or final confirmation screen is shown. The cheapest and fastest shipping option sits in the middle of the eight options, while a rarely used overnight option sits first.

The report below follows the rubric's Output format.

## Report

**Summary line:** 8 violations: 0 high, 5 medium, 3 low. Violations fall in Perception (2), Decision (3), Memory (2), and Confidence and flow (1). Laws reported as cannot judge: Peak-End Rule, Doherty Threshold.

### 1. Perception: how the eye groups things

- **Law of Proximity: Looks sound.** Labels sit tight against their own fields, Contact and Address are separated by a clearly larger gap, and the order summary items sit together inside their card.
- **Law of Similarity: Medium violation.** Back and Continue share the same size, color, and style, so the primary action is not visibly distinct from the secondary one. Fix: give Continue a distinct primary treatment and keep Back as a plain link or secondary button.
- **Law of Common Region: Looks sound.** Everything inside the order summary card belongs to it (items, totals, promo code), and nothing that belongs together is split across a boundary.
- **Law of Prägnanz: Low violation.** The small truck icon has no label and can be read as delivery, returns, or tracking, with nothing on screen to settle which reading is right. Fix: label the icon, or remove it.
- **Law of Uniform Connectedness: Looks sound.** The three checkout steps are joined by one line in order, and only the steps are joined, so the sequence reads as one flow.

### 2. Decision: how people choose and act

- **Hick's Law: Medium violation.** The shipping options list presents eight equivalent options with no default, grouping, or recommended path, so the user must compare every option before acting. Fix: preselect the most common option and mark it recommended, with the rest grouped by speed or price.
- **Fitts's Law: Medium violation.** The primary Continue button is small and placed at the far bottom edge, away from the form it acts on, while Back sits nearby at the same size, so the wrong target is easy to hit. Fix: make Continue large and place it directly under the form, with Back smaller and farther from the main path.
- **Jakob's Law: Looks sound.** The flow follows the standard checkout pattern users already know: Cart, then Shipping, then Payment, in that order, with standard navigation labels.
- **Tesler's Law: Medium violation.** The country dropdown dumps complexity on the user as a 200-item list with no search, when the system could offer search or a default from the address already entered. Fix: add search to the dropdown, and default the country where the system already knows it.

### 3. Memory: what people retain and return to

- **Miller's Law: Looks sound.** Navigation holds four items, and the form is chunked into Contact (two fields) and Address (four fields), so no screen asks the user to hold many unrelated facts at once.
- **Peak-End Rule: Cannot judge.** The ending and confirmation of the whole flow are not in this submission, which shows only step 2 of 3. Judging it needs the final step and confirmation screen.
- **Serial Position Effect: Low violation.** The cheapest and fastest shipping option sits in the middle of the eight options, while a rarely used overnight option sits first, so the key option is the one most likely to be missed. Fix: place the most important options first or last.
- **Von Restorff Effect: Low violation.** Standout treatment is spent on the bright promo banner, while the key action, Continue, sits quietly in plain treatment. Fix: give the standout treatment to Continue, and tone down the banner.
- **Zeigarnik Effect: Looks sound.** Incomplete work stays visible and resumable: the progress line shows step 2 current, Step 1 checked, Step 3 ahead, and the user can return to where they left off.

### 4. Confidence and flow: how the design feels to use

- **Aesthetic-Usability Effect: Looks sound.** The screen is clean and the polish supports the task: one form, one options list, one summary card, with no decoration hiding a broken step. The usability problems found above are named on their own laws, not hidden by the polish.
- **Doherty Threshold: Cannot judge.** No system behavior, loading state, or response time is shown in this submission. Judging it needs a run of the flow showing how actions are acknowledged and how long waits last.
- **Postel's Law: Looks sound.** Inputs are accepted in the formats people naturally use, and outputs are precise: totals show $ with USD, and dates and amounts in the summary are unambiguous.
- **Pareto Principle: Medium violation.** Promo code, gift options, and delivery instructions are given equal weight to the shipping choice and Continue, so the main task competes with edge cases for attention and space. Fix: tuck the edge cases behind a link or a collapsed section, and let the shipping choice and Continue dominate.
- **Goal-Gradient Effect: Looks sound.** Progress toward the goal is visible at every step, the end (Payment) is named, and Step 1 is already marked done on entry, so the remaining goal feels reachable without changing the work left.

## Highest impact fixes

1. Hick's Law (Decision): preselect and mark a recommended shipping option, with the rest grouped by speed or price.
2. Fitts's Law (Decision): make Continue large and place it directly under the form, with Back as a secondary treatment.
3. Tesler's Law (Decision): add search to the country dropdown, and default the country where it is already known.
4. Law of Similarity (Perception): give Continue a distinct primary treatment.
5. Pareto Principle (Confidence and flow): tuck promo, gift, and delivery instructions behind a link or collapsed section.
6. Law of Prägnanz (Perception): label the truck icon, or remove it.
7. Serial Position Effect (Memory): place the most important shipping options first or last.
8. Von Restorff Effect (Memory): move standout treatment from the promo banner to Continue.

```
Rubric summary
Rubric: UX Laws Review v1.0 · Date: 2026-10-31 · Artifact: Sample checkout flow, step 2 of 3: Shipping (sample material, described above)
Violations: 8 (0 high, 5 medium, 3 low); laws judged sound: 9; laws reported as cannot judge: 2; tradeoffs reported: 0
Result: 8 violations: 0 high, 5 medium, 3 low; 9 laws sound; 2 cannot judge
```
