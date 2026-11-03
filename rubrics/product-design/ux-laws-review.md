---
name: UX Laws Review
category: product-design
version: 1.0
summary: Evaluates a screen or flow against core psychology principles for UX, grouped into perception, decision, memory, and confidence, reporting violations with impact ratings.
when_to_use: A structured design critique of a screen or flow against psychology principles, when you want to check why a design feels hard, slow, or forgettable, before or alongside testing with users.
inputs: Screenshots of the screen or the flow's screens in order, or a description detailed enough to name the elements, actions, and states. State the primary task the user is trying to complete, because several laws can only be judged against a task.
scale: No overall score; each law violation rated High, Medium, or Low impact; laws with no surface reported as Cannot judge
level: standard
author: David Nguyen
author_url: https://davidnguyen.com/
---
<!-- source: mcp -->

## Purpose

Use this rubric to inspect a design against a set of psychology principles: regularities in how people perceive groups, make choices, remember sequences, and judge whether a product feels good to use. For each law, the review looks for the places the design works with the principle or against it, describes each violation where it occurs, and rates how much it matters. The result reads as a problem list organized by family, ordered by impact.

The laws are tendencies, not guarantees. A design can break a law and still succeed for a good reason, and a design can follow every law here and still fail with real users. When two laws pull in opposite directions, which happens often, the report names the tradeoff and recommends the side that serves the primary task, rather than pretending one law always wins.

This rubric is an inspection, not a test. It finds problems a trained eye can see in the design itself. It does not predict what any individual user will do, and a clean result does not mean users will succeed; it means no violations of these laws are visible in what was submitted. Testing with users remains the way to learn what users actually do.

If the input shows no interface to evaluate, say so and stop. If the input is a single static screen, evaluate it as one, and mark the laws that need a flow or system behavior (progress over time, response speed, recovery) by what the screen itself shows, using the not-applicable rule rather than guessing.

## Criteria

The criteria are four families. The laws inside each family are the checks. Their names below are the published law names. Everything else in each block, what to examine and what good and bad look like, is written for this rubric. Judge each law and give it a result: violation (listed and rated), Looks sound (with the visible evidence), or Cannot judge (using the rule in the Scoring section).

### 1. Perception: how the eye groups things

How people read a screen as groups, before they read any single element.

#### Law of Proximity
Elements placed close together read as related; elements far apart read as separate.
- What to examine: Spacing between labels and their controls, between items in a list, between cards, and between an action and the content it acts on.
- What good looks like: Related controls share tight spacing, unrelated groups are separated by a clearly larger gap, and no label sits closer to a neighbor than to its own control.
- What bad looks like: A label that sits closer to the next field than to its own; an action floating equidistant from two groups so it is unclear what it acts on.

#### Law of Similarity
Elements that look alike read as the same kind of thing.
- What to examine: Color, shape, size, and type treatment for buttons, links, tags, and icons across the screen.
- What good looks like: One visual treatment per kind of action, and the primary action visibly distinct from secondary ones.
- What bad looks like: A link styled like a button; two different button styles used for the same action; a warning and a success message in the same color.

#### Law of Common Region
Elements inside a shared boundary read as one group.
- What to examine: Cards, panels, boxes, and dividers, and whether the contents inside each boundary belong together.
- What good looks like: Everything inside a boundary belongs to it, and nothing that belongs together is split across a boundary.
- What bad looks like: A boundary that cuts a related pair in half; a card that groups unrelated items so they read as one choice.

#### Law of Prägnanz
People read an ambiguous shape in the simplest complete form they can.
- What to examine: Icons, illustrations, diagrams, and any graphic that must be understood at a glance.
- What good looks like: Each icon or graphic resolves to one obvious meaning immediately, or carries a label that settles it.
- What bad looks like: An icon or diagram that can be read two ways, with no label or context to settle which reading is right.

#### Law of Uniform Connectedness
Elements that are visually connected read as more related than elements that are not.
- What to examine: Lines, connectors, arrows, shared backgrounds, and step indicators that join elements, and whether the things they join belong together.
- What good looks like: Connectors join only things that belong together, and steps in a sequence are visibly linked in order.
- What bad looks like: A line joining unrelated items so they read as one group; a connector that crosses groups and makes the wrong pairing look intended; steps shown as separate islands with no visible sequence.

### 2. Decision: how people choose and act

How people pick between options and move toward an action.

#### Hick's Law
Decision time grows with the number and complexity of choices.
- What to examine: Menus, option lists, pricing tiers, filters, and any screen that asks the user to choose.
- What good looks like: The choice set is trimmed to what the task needs, and complex choices are staged or given a default or recommended path.
- What bad looks like: A wall of equivalent options with no default, grouping, or recommended path, so the user must compare everything before acting.

#### Fitts's Law
The time to reach a target grows with its distance and shrinks with its size.
- What to examine: The size and placement of primary actions, tap targets, and controls the task depends on, including on small screens.
- What good looks like: The primary action is large and near the eye and hand path; destructive actions are smaller and farther from the main path.
- What bad looks like: A tiny tap target far from the content it acts on; a primary action buried at a screen edge; targets so close together that the wrong one is easy to hit.

#### Jakob's Law
Users spend most of their time on other products, so they expect yours to work like those.
- What to examine: Navigation, search, login, checkout, settings, and any standard control, against the conventions users arrive already knowing.
- What good looks like: Standard patterns are used unless breaking one visibly gains something, and the gain is stated in the finding when a break is judged sound.
- What bad looks like: Reinvented navigation or search that forces relearning with no benefit; a standard control that behaves the opposite of what the platform taught the user.

#### Tesler's Law
Every system carries a certain amount of complexity that cannot be removed, only moved.
- What to examine: Where the complexity lands: on the user as steps, choices, and jargon, or on the system as defaults, automation, and smart handling.
- What good looks like: The system carries complexity where it can, and the complexity left with the user is visible, guided, and understandable.
- What bad looks like: Complexity dumped on the user as long forms and unexplained choices; or complexity hidden so thoroughly that the user cannot understand, check, or correct what the system did.

### 3. Memory: what people retain and return to

What people remember during and after using the product.

#### Miller's Law
Working memory holds about seven, plus or minus two, chunks at once.
- What to examine: Navigation items, options in a list, steps in a process, widgets on a dashboard, and facts a form asks for at once.
- What good looks like: Lists are chunked into groups of a handful; long processes are staged; a screen never asks the user to hold many unrelated facts at once.
- What bad looks like: Fifteen top-level navigation items; a form demanding many unrelated facts on one screen; a dashboard where every widget competes at once.

#### Peak-End Rule
People judge an experience mainly by its most intense moment and by its ending.
- What to examine: The most intense moment of the flow and the final step, confirmation, or exit.
- What good looks like: The peak is a success moment, and the ending confirms the outcome clearly so the user leaves knowing what happened.
- What bad looks like: A strong flow ending on a dead, ambiguous screen; a painful peak, such as an error or a paywall, with no recovery offered.

#### Serial Position Effect
The first and last items in a sequence are remembered best.
- What to examine: Lists, menus, onboarding steps, search results, and any ordered sequence the user must remember or choose from.
- What good looks like: The most important items sit first or last, and middle items are the ones that matter least if forgotten.
- What bad looks like: The key action buried in the middle of a list while trivia bookends it.

#### Von Restorff Effect
The item that stands out is the item remembered.
- What to examine: Emphasis through color, size, weight, or motion, and which element carries it.
- What good looks like: Exactly one element carries standout treatment, and it is the thing that matters most on the screen.
- What bad looks like: Everything emphasized, so nothing stands out; or standout treatment spent on decoration while the key action sits quietly.

#### Zeigarnik Effect
People remember uncompleted tasks better than completed ones.
- What to examine: Multi-step flows, saved progress, drafts, and return paths after an interruption.
- What good looks like: Incomplete work stays visible and resumable, with progress shown and a clear way to continue where the user left off.
- What bad looks like: Progress lost on exit with no draft; no sign of what remains; a returning user forced to start over or reconstruct where they were.

### 4. Confidence and flow: how the design feels to use

Whether the product feels fast, forgiving, and worth trusting.

#### Aesthetic-Usability Effect
Attractive designs are perceived as more usable, whether or not they are.
- What to examine: Visual polish against actual usability, judged separately: does the screen look good, and does it also work?
- What good looks like: Polish supports the task, and the screen is both attractive and usable.
- What bad looks like: Polish masking broken flows, where a beautiful screen hides confusing steps, dead ends, or missing feedback. Name the usability problem, not just the beauty.

#### Doherty Threshold
When a system responds slowly, users lose flow and productivity drops.
- What to examine: Acknowledgement of actions, loading states, transitions, and any wait the design shows or implies.
- What good looks like: Every action is acknowledged promptly, and waits show progress so the user knows the system is working.
- What bad looks like: Silent waits with no feedback; spinners with no sense of progress; laggy input that makes the user repeat actions.

#### Postel's Law
Be liberal in what you accept, and conservative in what you send.
- What to examine: Input tolerance for formats, case, spacing, and common variations, and the precision of what the system sends back.
- What good looks like: Inputs are accepted in the formats people naturally use and normalized silently; outputs are precise, with units, dates, and amounts unambiguous.
- What bad looks like: Rigid format demands with no example; ambiguous outputs, such as a date with no year or an amount with no currency.

#### Pareto Principle
Roughly eighty percent of effects come from twenty percent of causes.
- What to examine: The weight the screen gives to the actions most users need, against the weight given to edge cases.
- What good looks like: The few actions that matter most dominate the screen, and edge cases are present but tucked away.
- What bad looks like: Equal weight for rare and core actions, so the main task competes with trivia for attention and space.

#### Goal-Gradient Effect
Effort rises as people get closer to a goal.
- What to examine: Multi-step flows, onboarding checklists, checkout progress, and any goal with steps, including whether progress is visible and how the starting point is framed.
- What good looks like: Progress toward the goal is visible at every step, the end is named, and the final steps feel shorter because the user can see how little is left. A head start counts: work already credited, such as a first step marked done on signup, makes the remaining goal feel reachable without changing the work left.
- What bad looks like: A long flow with no progress shown, so the user cannot tell how far along they are; a goal that starts at zero with no credit for work already done; a progress indicator that stalls or resets and makes the end feel farther away.

## Scoring

This rubric gives no overall score and no grade. Its output is the violation list, grouped by family, and the impact ratings carry the priorities.

Rate every violation on this scale:

- **High**: The violation blocks the primary task, misleads the user into a wrong outcome, or recurs on every use of a core screen. Fix before release.
- **Medium**: The violation slows the user, confuses them, or forces a workaround, but they recover and complete the task. Fix at normal priority.
- **Low**: Surface friction. The user notices it but is not slowed or misled in any meaningful way. Fix when time is available.

Judge impact from three things together: how often the violation will be hit, how hard it hits when it is, and whether it sits on the product's primary task. When a rating could reasonably be two values, choose the higher one when the violation sits on the primary task, and say in the finding that it was a close call.

Not applicable: a law with no surface in the submission to judge (for example, Zeigarnik Effect on a single static screen with no flow, or Doherty Threshold where no system behavior is shown) is reported as **Cannot judge**, with one line naming what would be needed to judge it. Do not convert an absent surface into a violation, and do not skip the law silently.

Tradeoffs: when two laws pull in opposite directions, report both sides in the finding, name the tradeoff, and recommend the side that serves the primary task. A law broken for a stated, task-serving reason is reported as a judged tradeoff, not as a violation, with the reason given.

## Output format

Return the review in this structure, in Markdown:

1. **Summary line**: how many violations were found, counted by impact (for example, "7 violations: 2 high, 3 medium, 2 low"), which families they fall in, and which laws were reported as cannot judge.
2. One section per family, in the order above, showing one of: its violations, each with the law named, the element or state where the violation occurs, the problem stated concretely, its impact rating, and what would fix it; or **Looks sound**, with the visible evidence; or **Cannot judge**, with the reason. Where a law was broken for a task-serving reason, report it as a tradeoff with both sides named.
3. A closing section, **Highest impact fixes**, listing the violations to fix first, in impact order, high first, each in one line with its law and family named.

Example of a finding at the standard this rubric expects:
- Acceptable: "High (Decision, Hick's Law): the pricing screen presents twelve equivalent tiers with no default, grouping, or recommended path, so a first-time buyer must compare every tier before acting."
- Not acceptable: "The design is confusing and has too many choices." (It names no law, no screen, no element, and nothing to fix.)

Rubric summary
Rubric: UX Laws Review v1.0 · Date: {date of the run} · Artifact: {the artifact's name as given, or: not named}
{counts line: violations by impact, laws judged sound, laws reported as cannot judge, tradeoffs reported}
{result line: the report's overall result in the rubric's own words, for example: "7 violations: 2 high, 3 medium, 2 low; 6 laws sound; 4 cannot judge"}

Every value in the block is copied or counted from the judgments in the same report. If a value cannot be derived from the report, the block says so instead of estimating.

## Honesty rules

- Report violations you can point to. Every violation names the screen, element, or state where it occurs; a general impression about the product is not a finding.
- Do not invent system behavior. If the submission does not show what happens after an action, or how fast the system responds, judge the affordance that is visible and say the behavior itself was not shown, using the closest applicable rule rather than assuming feedback exists.
- The laws describe tendencies in how people perceive, decide, and remember. They do not predict what any individual user will do. Do not claim users will behave a certain way because a law says so; say the design works with or against the tendency.
- A clean result does not mean the design is usable, and this report must not claim it is. Say so in the summary when the violation count is low.
- When laws conflict, do not quietly pick a winner. Report the tradeoff, name both laws, and tie the recommendation to the primary task.
- Keep this rubric's text and the sources apart: the law names and the general principles are the published set, credited in the Sources; the judgments about this design are the reviewer's own, written for this evaluation.
- Do not claim a violation from a description alone without flagging it. Anything judged from a description instead of the artifact itself is flagged as judged from a description.

## Sources

The laws in this rubric come from the researchers and traditions below. The grouping of the laws into four families, the examination guidance, the impact scale, and the reporting format are original ProductRubric material, written by the rubric's author. The descriptions of the laws in this file are written in the author's own words and do not reproduce any source's text. This rubric is not affiliated with or endorsed by any of the originators below.

- Perception, Gestalt tradition: Law of Proximity, Law of Similarity, Law of Common Region, Law of Uniform Connectedness, and Law of Prägnanz come from the Gestalt psychologists Max Wertheimer, Wolfgang Köhler, and Kurt Koffka.
- Hick's Law: William Edmund Hick (1952) and Ray Hyman (1953).
- Fitts's Law: Paul Fitts (1954).
- Jakob's Law: Jakob Nielsen.
- Tesler's Law: Larry Tesler.
- Miller's Law: George A. Miller (1956).
- Peak-End Rule: Daniel Kahneman, Barbara Fredrickson, Charles Schreiber, and Donald Redelmeier (1993).
- Serial Position Effect: the memory research tradition beginning with Hermann Ebbinghaus.
- Von Restorff Effect: Hedwig von Restorff (1933).
- Zeigarnik Effect: Bluma Zeigarnik (1927).
- Aesthetic-Usability Effect: Masaaki Kurosu and Kaori Kashimura (1995), later studied by Noam Tractinsky.
- Doherty Threshold: Walter Doherty and A. James Thadhani, IBM (1982).
- Postel's Law: Jon Postel (1980).
- Pareto Principle: Vilfredo Pareto.
- Goal-Gradient Effect: Clark Hull (1932), with later work by Ran Kivetz, Oleg Urminsky, and Yuhuang Zheng (2006).
- Endowed Progress Effect, folded into the Goal-Gradient Effect above: Joseph Nunes and Xavier Drèze (2006).
