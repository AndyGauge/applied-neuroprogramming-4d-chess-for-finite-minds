// The book. One object per page, in reading order.
// Page numbers (01, 02, …) are assigned automatically based on this order.
//
// Schema fields per page:
//   title    — the page heading
//   gesture  — one-sentence hook the reader could quote back
//   body     — the dense argument, in author voice
//   command  — optional shell command rendered in a <pre> block
//   engineer — technical voice; the claim a domain reader nods through
//   manager  — frontline manager voice; consequences for her team in language she can repeat
//   family   — the kitchen-table version; what your spouse or kid would carry away

const raw = [
  {
    title: 'The Four-Slot Ceiling',
    gesture: 'Working memory holds four chunks. Throw eight unrelated items at a person and one drops.',
    body: 'A six-digit number gets remembered by chunking — three pairs, two triples, whatever lets the brain hold the pieces while it processes the rest. The chunking is involuntary. The four-slot ceiling is the bottleneck the schema is built around. Anything past four either gets dropped on the floor or rolled up into a chunk and counted as one. Designing a page is choosing which four chunks survive.',
    engineer: 'Cowan\'s slot model puts the working-memory ceiling at about four items. Past that you either chunk or you lose. Every layout decision is a choice about which four chunks survive the page.',
    manager: 'Your team can hold four things in mind at once. Five and one drops. The status update with eight bullet points is delivering one well; pick which four matter and ship those.',
    family: 'Your kid can hold a few things at once. So can you. So can your partner at the end of a long day. Don\'t pour eight things on someone — pour four. The other four can wait.'
  },
  {
    title: '4D Chess, Literally',
    gesture: 'People joke about 4D chess. It is the architecture.',
    body: 'Four compartments, each focused on a different slice of the same situation, is what the human mind brings to the table. A page that uses all four at once teaches the reader to hold four streams at once. A page that wastes the slots, or fills three of them with the same flavor of content, leaves three of the four dark. The joke is the diagnosis.',
    engineer: 'If the four slots are the budget, every page is a budget allocation. Spending all four on one dimension is running the same draw call four times. Spread the spend across orthogonal axes and the page does work no single axis could.',
    manager: 'When the team pitches a roadmap with four parallel angles, that is not chaos — that is how the org actually thinks. One stream of work in four voices is the same conversation you would have had anyway, finally surfaced.',
    family: 'Across the dinner table you switch voices without thinking. The work voice, the friend voice, the kid voice, the parent voice. The mind already does four. The page should too.'
  },
  {
    title: 'Continuum, Depth, Thread, Setting',
    gesture: 'Four dimensions, one schema. Skip one and the page goes vapor.',
    body: 'The continuum is the page sequence — time, the −5 to +5 spectrum the page sits on, the chapter ordering. The depth is the ladder inside one page, going from the technical claim a domain reader nods through, down through the frontline manager\'s read on consequences for her team, then the translation a non-specialist can carry, to the version a child could repeat back. The thread is the argument that crosses pages — the spine the reader follows from page one to the close. The setting is the cross-categorical anchor, the cultural or empirical context the claim has to sit inside before it is allowed to land.',
    engineer: 'The four axes are orthogonal. Continuum runs across the page array. Depth runs down the rungs of one page. Thread is the dependency edge between page n and page n+1. Setting is the constraint set the page is evaluated within.',
    manager: 'Ordering matters — that is continuum. Audience tier matters — that is depth. The arc across the doc matters — that is thread. The context the team brings to the room matters — that is setting. Plan for all four and the doc lands. Skip one and it does not.',
    family: 'A story has a beginning, middle, and end. It has voices a kid hears differently than a grandparent. It has a point. And it happens somewhere. Four. Same shape every time.'
  },
  {
    title: 'The Depth Ladder',
    gesture: 'Each rung loses precision. Each rung gains reach.',
    body: 'The reader who lands on page fourteen with thirty seconds gets the punch on the bottom rung. The reader with five minutes climbs all four rungs and walks away with the structure, not just the slogan. Both readers are the right reader. The page has to be written for both. The way to write for both is to render every rung every time.',
    engineer: 'Define your audience tiers explicitly. A page that compiles to one rung is single-tenant. A page that compiles to four rungs is multi-tenant. Multi-tenant scales without the writer paying for it twice.',
    manager: 'Some readers want the headline. Some want the proof. Both are on your team. A page that picks one alienates the other. Render every rung and let the reader land where they have time to land.',
    family: 'The kid asks what daddy does at work. Same answer the engineer wants — just shorter, in different words, with different stakes.'
  },
  {
    title: 'Setting Is the Field',
    gesture: 'The slot writers skip is the slot readers need.',
    body: 'I learned this writing about scripture and trauma research, separately, before I noticed it was one mechanism. The verse in isolation is vapor. Who wrote it, who first heard it, what was happening that month in that town — that is where the meaning locks in. A child reading *blessed are the poor* without the cultural setting hears charity language. With the setting, it is a sentence said to people who knew exactly which Roman tax collector lived around the corner and how much he took yesterday. The setting is the field the verse has to sit inside before the claim is allowed to land.',
    engineer: 'A finding without its population is a result without its preconditions. Do not ship a metric without the cohort. The cohort is the metric, the same way the runtime is the language.',
    manager: 'Do not bring data to a meeting without the context. The bullet that says *churn is up 12%* without saying which segment is the bullet that lights the wrong fire.',
    family: 'If you tell the kid one bad thing happened today, that is a story. If you tell her where, when, and who else was in the room, that is a story she can remember tomorrow.'
  },
  {
    title: 'Population Beats Finding',
    gesture: 'Two papers can disagree without contradicting each other if their populations do not match.',
    body: 'I was processing dissociation, in myself, and the first research I found said I was wrong about what I was experiencing. On a longer timeline I found newer research that said, wait — maybe the people who claim total amnesia for the criminal acts they are on trial for, who have something to gain from being crazy, are not the same population as everyone else reporting dissociation. The two papers did not contradict each other. Their populations did. The finding was the smallest part of either study. The population was the bigger part.',
    engineer: 'Two studies with opposing conclusions and overlapping methods are usually a population-not-method problem. Check the inclusion criteria before you check the statistics.',
    manager: 'If two reports tell different stories about the same product, the most useful next question is who is in each report. The data is not lying. The cohorts are different.',
    family: 'Two people can both be telling the truth about the same room and remember it differently. Who they were when they walked in matters more than what was on the walls.'
  },
  {
    title: 'The Consequence Is Loneliness',
    gesture: 'The feed will not fill the hole.',
    body: 'The processing left me with one thing the papers did not. The consequence of dissociation is loneliness. That sentence does not have a citation; I went and got it. The social feeds that suck us in are deep holes that karma and emoji reactions will not fill. The best kind of reaction is the one from your spouse or your neighbor.',
    engineer: 'Engagement metrics measure dwell time, not satiation. A platform that keeps you in the chair has not fed you. It has held you.',
    manager: 'If the team\'s primary feedback loop is the chat channel, you have outsourced the work that ought to be happening face to face. Replace one Slack thread per week with a hallway conversation.',
    family: 'The likes do not count. The dinner does.'
  },
  {
    title: 'Translate at Home First',
    gesture: 'Speaking a language your spouse cannot follow is selfish whether you mean it that way or not.',
    body: 'When our careers force us to speak a language our spouse cannot follow, maybe we are being abusive. Not intentionally; selfishly. The same translation we owe a neighbor is the one we should be giving at home. Doing the translation is the discipline that keeps the people who live with you from going to the feed for what should be coming from you. The schema makes a writer practice that discipline. Practicing it on the page is practice for the kitchen, and practice for the company.',
    engineer: 'If your domain language does not compile down to plain words at home, the translation pass is a missing layer in your stack. Adding the layer is a refactor, not new work.',
    manager: 'Engineering departments get held at arm\'s length by other teams when the speak does not land in rooms outside engineering. The translation is the manager\'s job before it is anyone else\'s.',
    family: 'If your kid cannot repeat back what you do all day, the gap is yours to close, not theirs.'
  },
  {
    title: 'The Rung That Travels',
    gesture: 'Engineering\'s claim plus the consequences her team will feel, in language she can repeat.',
    body: 'The frontline manager is the rung that has to travel — engineering\'s claim plus the consequences her team will feel, in language she can repeat in a planning meeting or in the email a vice president forwards. A page that does not render that rung leaves her to invent it, and what she invents will not be what you would have written.',
    engineer: 'Do not ship a doc with no manager-tier rendering and then complain that the rollout went sideways. The translation she will do without you is the version that gets quoted upstream.',
    manager: 'You are the rung that has to walk. Engineering ships you a claim. Your team ships you consequences. The sentence you build out of those two lands in a planning meeting or it does not land at all.',
    family: 'When your spouse asks how the day went, the answer that lands is not the title and not the bug fix. It is the consequence — what changed for the team because of what happened today.'
  },
  {
    title: 'The Schema Is a Cage',
    gesture: 'If the field is empty, the page looks broken on screen.',
    body: 'The schema is the harness — not a prompt, not a system message, a cage in the rendered output that forces whoever is writing the page, human or model, to put the cultural and empirical anchor down before the punchline. If the field is empty, the page looks broken on screen. The discipline is built into the layout so the writer does not have to remember to.',
    engineer: 'Required fields in the data structure beat required fields in the prompt. The structure refuses to render incomplete; the prompt only suggests.',
    manager: 'Templates with optional fields get half-filled. Templates with required fields get complete. Make the missing field visible in the output, not in the form.',
    family: 'Leave a slot blank in a card you give to your kid, she notices and asks. The blank slot is the prompt. Build the same thing into the page.'
  },
  {
    title: 'The Model Inside the Cage',
    gesture: 'Ask the model for a chapter, you get a sermon. Ask it to fill the slots in order, you get something you can edit with a pencil.',
    body: 'Here is where the LLM enters cleanly, not as the protagonist. The schema does the same job for a model that it does for me. Ask the model for a chapter and you get a sermon. Ask it to fill the technical, the translation, the setting, and the cost — in that order, with no other freedom — and you get something I can edit with a pencil in twenty minutes.',
    engineer: 'Constrain the surface area of the generation. Free-form chapter requests yield content you cannot compose; field-by-field requests yield content you can stitch and edit deterministically.',
    manager: 'The same review you would give an engineer\'s open-ended draft is the review you would give a model\'s. Ask for the structure first; the prose is the cheap part.',
    family: 'Ask the kid to tell you about her day, you get noise. Ask what was funny, what was hard, and what she wants for tomorrow, you get the day.'
  },
  {
    title: 'Four Streams Converge',
    gesture: 'By the last page, the reader can hold four at once because the schema spent the whole book teaching them to.',
    body: 'By the last page, the reader has crossed the continuum enough times that the order is muscle memory; has climbed the depth ladder so often they jump to whichever rung they need; has followed the thread; has accumulated enough setting that the page-one claim has somewhere to stand. Now the original claim returns, and it gets to be proved in the same four dimensions. The close lands because four streams converge at once, which a finite mind can receive only because the schema spent the whole book teaching it to hold four at once.',
    engineer: 'Convergence on the close is the test of whether the schema\'s training set was sufficient. If the reader can land all four rungs on the last page without help, the book trained them.',
    manager: 'The retrospective is the closing page of the project. If the team can hold the why, the what, the consequence, and the next step at once at the end, the project taught them to.',
    family: 'The point of reading a story to your kid every night for a year is not the story. It is that by the end of the year she can hold a story in her head.'
  },
  {
    title: 'Four Teams, One Problem',
    gesture: 'Four runs, same room, paid to compare notes for an hour.',
    body: 'The pattern scales past the page. Four teams attacking one problem from four different angles, paid to compare notes for an hour at the end, would compound a problem-space faster than four companies running one experiment each and waiting for the knowledge to leak between them through attrition. People will turn up for that — expenses paid, an hour together, an award and a check. They are already running the experiments on their own time, in second jobs and hobby builds, and most of that work is wasted because nobody puts the four runs in the same room.',
    engineer: 'Parallel experimentation with a shared retrospective beats serial experimentation with no retrospective. The hour at the end is where the compounding happens, not the runs themselves.',
    manager: 'Four teams, one problem, an award at the end. Cheaper than one team running the same experiments in series, and the morale carries the company longer than the answer does.',
    family: 'Cousins all working on the same puzzle in the same kitchen finish faster than four cousins on four kitchens with the same puzzle. The puzzle is not the point. The kitchen is.'
  },
  {
    title: 'Run the Scaffolder',
    gesture: 'One command. Then write.',
    body: 'The runtime is sveltekitbook on npm. Two scaffolders ship with it — one for long-form pages, one for talks. The long-form one lays down the schema, the routes, the cover, and a contents page. None of it writes prose. It renders prose inside a frame that occupies the four slots on purpose. Your job is to fill the slots. The schema is the part worth keeping stable; the surface around it is yours to bend.',
    command: 'npm create sveltekitbook@latest my-book',
    engineer: 'The scaffolder uses @sveltejs/adapter-static, so the build is a directory of static files you can drop behind any CDN or onto GitHub Pages. The four-dimensional schema lives in `src/lib/outline.js` — the one piece worth keeping stable as you bend the rest.',
    manager: 'One command and the team has the same starting frame. The schema is the contract; the prose is the work. Standardizing the frame is what makes writing across the team feel like one book instead of a folder of memos.',
    family: 'One command and the page is ready. What goes on it is the part that matters — and the schema makes sure you do not skip the part the reader needs.'
  },
  {
    title: 'Design the Slots First',
    gesture: 'The chapter the reader can hold is the one that fits the four slots they were born with.',
    body: 'If you write with an LLM, design the four dimensions before you ask for content. The chapter the reader can hold is the chapter that fits the four slots they were born with. The book that lands is the one that uses all four through its closing line.',
    engineer: 'Schema before content. Always. The structure determines the content\'s ceiling; flipping the order is how you end up with a long doc that says nothing for the reader who needed it most.',
    manager: 'Decide what the team needs to remember before you write the doc. The doc that gets remembered is the one written backward from the four things you decided up front.',
    family: 'Decide what you want them to know in twenty years. Then write the page that makes that the thing they remember.'
  }
];

export const flat = raw.map((s, i) => ({
  ...s,
  num: String(i + 1).padStart(2, '0'),
  orderIndex: i
}));

export function next(num) {
  const i = flat.findIndex((s) => s.num === num);
  return i >= 0 && i < flat.length - 1 ? flat[i + 1] : null;
}

export function prev(num) {
  const i = flat.findIndex((s) => s.num === num);
  return i > 0 ? flat[i - 1] : null;
}
