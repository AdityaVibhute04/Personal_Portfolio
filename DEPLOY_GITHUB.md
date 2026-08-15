# Deploying Portfolio v1.2 to GitHub Pages

The site contains nested image, report, resume, and source folders. Push the complete folder tree; uploading only HTML/CSS files will cause report/source links to return 404.

## Git Bash workflow

From inside your local `Personal_Portfolio` repository:

```bash
git status
git add -A
git commit -m "Deploy portfolio v1.2"
git push origin main
```

Then wait for GitHub Pages to rebuild and hard-refresh the live site with `Ctrl + F5`.

## Before committing

Confirm these folders exist:

```text
assets/
├── images/
├── reports/
├── resume/
└── source/
```

Check for accidental merge markers:

```bash
grep -RIn --exclude-dir=.git -E '^(<<<<<<<|=======|>>>>>>>)' .
```

It should return nothing.

## GitHub Pages settings

Repository → Settings → Pages → Deploy from branch:
- Branch: `main`
- Folder: `/ (root)`

## Notes

- `.gitattributes` keeps text-file line endings consistent across Windows/Git Bash and GitHub.
- The site is static; no npm install or build command is required.
- The thesis PDF is large, so normal Git/Git Bash is preferable to browser upload.
