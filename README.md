# Kuanyu Chien — Personal Website

A responsive, zero-build personal academic and engineering website inspired by academic research homepages and clean developer portfolios. It is a **custom standalone website**, not a fork of al-folio; this makes the first version easy to edit and publish on GitHub Pages with no Jekyll dependencies.

## What is included

- `index.html`: Home with introduction, featured projects, timeline, and recent notes
- `projects.html`: Filterable project gallery
- `project.html?id=...`: Reusable detailed project page
- `research.html`: Research overview and selected investigations
- `notes.html`: Engineering and research writing archive
- `note.html?id=...`: Reusable article page
- `cv.html`: Education, experience, projects and skills
- `assets/data.js`: **Main file to edit** — all project, note, and contact content
- `assets/style.css`: Colors, typography, layout, responsive styling
- `assets/app.js`: Shared navigation, templates, and filter interactions
- `assets/favicon.svg`: Editable site icon
- `assets/images/kuanyu-headshot.jpg`: Your homepage headshot
- `WEBSITE_INSPIRATION.md`: Curated examples of student websites and templates, with links and ideas to borrow

## View the website locally

Easy option: open `index.html` in a browser. All links use relative URLs, and there are no backend dependencies.

Optional local server:

```bash
cd kuanyu-website
python3 -m http.server 8000
```
Then visit http://localhost:8000.

## Publish on GitHub Pages (personal domain)

1. Sign in to GitHub and create a **public repository** named `KuanyuChien.github.io` (this exact spelling matches the GitHub username in your resume). If your current GitHub username is different, use `<your-username>.github.io` instead.
2. Upload **the contents** of this folder (all HTML files, `assets/`, and `.nojekyll`) to the root of the repository. Do not upload a wrapper folder that contains these files.
3. Open the repository's **Settings → Pages**.
4. Choose **Deploy from a branch**. Set the branch to `main` and folder to `/(root)`, and save.
5. Visit `https://kuanyuchien.github.io/` after deployment. (GitHub Pages deployment may take a few minutes.)
6. When changing content, edit `assets/data.js`, commit, and the site will update after deployment.

### Publishing to any repository instead

If the repo is named `my-portfolio`, its default address is `https://<your-username>.github.io/my-portfolio/`. Relative links are designed to work in that path too.

## Personalize it, in order

1. **Bio / homepage:** Change the introduction in `assets/app.js` inside the `home()` function.
2. **Contacts:** Update `github`, `linkedin`, and `email` at the top of `assets/data.js`.
3. **Projects:** Edit/add entries in the `projects` array in `assets/data.js`. Each project needs a unique `id`. Its detail page is automatically generated at `project.html?id=ID`.
4. **Notes:** Edit/add entries in `notes`. A note opens at `note.html?id=ID` and can connect to a project with `project:'ID'`.
5. **Research / CV:** Edit the `research()` and `cv()` functions in `assets/app.js` as new experiences arise.
6. **Theme:** Change the CSS variables at the beginning of `assets/style.css` (e.g., `--accent`, `--bg`, `--ink`).
7. **Headshot:** Replace `assets/images/kuanyu-headshot.jpg` with a new photo using the same filename, or update the image path in `assets/app.js`.
8. **Add your own visuals:** Insert screenshots, plots, diagrams or videos only when you have rights and, for lab work, advisor approval. This starter uses abstract CSS graphics, not sourced photographs.

## Suggested site maintenance

- After each completed project milestone: update the relevant project page.
- Monthly: add one short engineering note, focused on the question, method, results, and takeaway.
- Each semester: update experience, coursework, CV, and featured work.

## Facts and publication checks

This draft draws on your uploaded `Resume2.0.pdf` and SPARK lab PushT/YAM notes. Verify dates, figures, project ownership, advisor/lab publication policies, and links before sharing it with employers. The site intentionally does **not** publish the phone number in your resume, private compute-cluster account identifiers, internal file paths, private repository links, or unapproved lab code. It also does not reproduce detailed internal experiment logs. `CV` is an HTML summary, not an embedded or downloadable resume; add a public PDF later if desired.

Notes about PushT include final 200k-step evaluation: DP 67.0%, ACT 31.6% over 500 starts. The YAM proposed fixes are accurately labeled not yet validated.

## Next enhancements

- Add a real profile photo and annotated project visuals, after obtaining permission.
- Connect a custom domain.
- If you later want Markdown blog authoring, migrate the content to **al-folio / Jekyll** or **Astro**. This version intentionally prioritizes a simple immediate deployment.


## Resume versions and privacy

Three resume versions are organized separately in `resume-archive/` in the **companion archive**, not inside this public website folder. These documents contain a personal phone number. Do not upload the `resume-archive/` folder to a public GitHub Pages repository unless you explicitly want to disclose that information.

Links copied from the resumes and used on the website:
- GitHub: https://github.com/KuanyuChien
- LinkedIn: https://www.linkedin.com/in/kuanyuchien
- Email: kuanyu.chien.eng@gmail.com

## Design references

See **[WEBSITE_INSPIRATION.md](WEBSITE_INSPIRATION.md)** for the four main inspirations (Yuezhi Yang, Isaac Hung, Winston Hu, and al-folio), additional undergraduate/master's/PhD profiles, reusable templates, and a plan for future design improvements. This file is kept in the website project for reference; it does not appear in the public navigation.
