# Deploying v1.1 to GitHub Pages

## Recommended: GitHub Desktop

The website contains nested report/source folders. Uploading only the visible HTML files will make the site load while every PDF/source link returns 404.

1. Clone `AdityaVibhute04/Personal_Portfolio` in GitHub Desktop.
2. Delete the old site files from the local cloned folder.
3. Copy **everything inside this v1.1 folder** into the cloned repository root. Keep `assets/images`, `assets/reports`, and `assets/source` intact.
4. In GitHub Desktop, review the changes, commit them, and Push origin.
5. Wait for GitHub Pages to redeploy, then hard-refresh the browser (`Ctrl+F5`).

## Important folders

- `assets/images/` - website figures
- `assets/reports/` - submitted PDFs
- `assets/source/` - source archives such as the OpenDSS RAR

The thesis PDF is large, so GitHub Desktop / normal Git is preferred over browser upload.

## Local verification

Open `index.html` locally for layout review. A link audit was also run before packaging to make sure every relative href/src target exists in the delivered folder.
