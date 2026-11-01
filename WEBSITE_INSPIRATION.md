# Website Inspiration & Design Reference

A curated list of real CS student websites and reusable templates for **Kuanyu Chien's personal website**.

**Purpose:** Save examples worth revisiting as the site grows. These are *references*, not endorsements, and the current website is a custom static HTML/CSS/JS implementation (not a fork of any of these sites).

## The four main references

| Reference | Website | What I like | How to apply it to this website |
|---|---|---|---|
| **Yuezhi Yang** — UT Austin CS PhD | https://yyuezhi.github.io/ | Clear academic introduction, dated **News** timeline, experience, research outputs | Add an easily updated **News / Updates** timeline for lab milestones, projects, and work experiences; keep dates visible |
| **Isaac Hung** — Georgia Tech CS student | https://isaac-hung.com/ | Featured projects, detailed blog entries, reflective student updates | Write engineering notes that tell the story behind projects: motivation → challenge → approach → result → what changed |
| **Winston Hu** — Stony Brook CS PhD | https://winstonhutiger.github.io/ | Modern homepage, featured research projects, blog and CV navigation | Make the homepage visually welcoming and point visitors quickly to detailed project pages |
| **al-folio** — academic website starter | https://alshedivat.github.io/al-folio/ | Clean typography, project pages, blog/CV conventions, responsive academic layout | Use its overall academic feel as design inspiration; consider migrating to it if Markdown posts/publications become important |

Sources: Sites checked on November 1, 2026. An academic site can change over time, so use these as inspiration rather than trying to match every feature exactly.

## Additional student sites worth comparing

| Reference | Website | Good for |
|---|---|---|
| **Zicheng Liang** — CS undergraduate | https://www.zichengliang.com/ | Showing hackathons, projects, and academic activities alongside conventional experience |
| **Zhaowen Deng** — Dartmouth student | https://d-k-deng.github.io/ | Chronological technical project articles and explanations |
| **Rebecca Dang** — UC Berkeley EECS B.S./M.S. | https://phrdang.github.io/ | Combining teaching, internships, academic work, and personal writing |
| **Navraj Dhaliwal** — CS master's student | https://navrajd.com/ | Software-engineering-friendly project presentation |
| **Pan Chen** — University of Toronto CS PhD | https://www.panchen.ca/ | Research, teaching, industry experience, and blogging in one academic profile |

## Templates / source code

| Option | Links | When to use |
|---|---|---|
| **al-folio** (Jekyll) | [Demo](https://alshedivat.github.io/al-folio/) · [GitHub](https://github.com/alshedivat/al-folio) | If moving to Markdown posts, research publications, and a longer academic CV |
| **Academic Pages** (Jekyll) | [Demo](https://academicpages.github.io/) · [GitHub](https://github.com/academicpages/academicpages.github.io) | If preferring a traditional faculty/graduate-student academic homepage |
| **Astro Scholar** (Astro) | [Theme details](https://astro.build/themes/details/astro-scholar/) | If wanting a more customizable frontend and content-oriented workflow |

**Note on al-folio:** Its project instructions currently recommend **“Use this template”** rather than “Fork” when starting a fresh project. This does not change how the current custom website is deployed.

## My recommended blend for your site

1. **Homepage:** Winston Hu's modern project-first presentation, with concise academic introduction.
2. **Career / academic record:** Yuezhi Yang's dated news and experience sections.
3. **Engineering journal:** Isaac Hung's detailed posts and project progress reports.
4. **Visual style / eventual framework:** al-folio's simple academic layout.

### Content priorities from your current work

- **Research:** SPARK Robotics Lab — PushT Diffusion Policy vs ACT; YAM/ABC-VLA debugging; teleoperation.
- **Engineering projects:** Scry insider threat detection; in-memory SQL database; C++/Qt educational app.
- **Academic record:** University of Utah CS/Math, earlier degree, teaching assistantship, timeline of milestones.
- **Writing:** Clear problem → experiment/implementation → evidence → lessons → next steps.

### Later design improvements

- Add visual evidence: PushT success-rate plots and demonstration video, robot images, Scry screenshots, SQL architecture diagram (only after permissions are checked).
- Add a small **News** / **Now** feed on the homepage.
- Keep projects separate from research notes so recruiters can skim while technical readers can dive deeper.
- Consider Markdown-based notes only when you feel limited by editing `assets/data.js`.

## Publication & privacy reminder

The links above are *reference sites*, not assets to copy. Do not reuse other students' photos, graphics, or code without permission or respecting their licenses. Do not publish private lab material, private repository URLs, compute account details, or the separate personal resume archive without reviewing it first.
