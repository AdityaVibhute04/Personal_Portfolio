# Engineering Project Archive — Prototype v0.1

Static website intended for GitHub Pages. No build step is required.

## Publish on GitHub Pages
1. Create a new GitHub repository.
2. Upload **all files and folders from this directory** to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish the site.

## Main files
- `index.html` — home page
- `projects.html` — searchable/filterable project archive
- `project-001.html` — EN615 wind turbine
- `project-002.html` — EN405 pipeline monitoring
- `project-003.html` — EN406 synchronous reluctance machine
- `about.html` — archive explanation
- `assets/styles.css` — full design system
- `assets/script.js` — theme switch, menu, filters, search, reveal effects

## Notes
- All links are relative, so the site works when hosted under a GitHub Pages repository path.
- Original reports are included in `assets/reports/`.
- Report figures used on the site are included in `assets/images/`.
- No framework or package installation is needed.
