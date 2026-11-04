# Bluestar Janitorial LLC
Standalone React + Vite recreation of the current Framer homepage. No Framer subscription or runtime is required.

## Requirements
Node.js 22 or newer and npm.

## Run locally
```sh
npm install
npm run dev
```

## Production build
```sh
npm run build
npm run preview
```

## Upload and publish on GitHub Pages
1. Create an empty GitHub repository.
2. Upload ALL generated project files, including the hidden .github folder (not the setup script, node_modules, or dist).
3. Use main as the branch name.
4. Open Settings → Pages → Build and deployment → Source → GitHub Actions.
5. Open Actions and run "Deploy React website to GitHub Pages" if needed.
6. When deployment completes, open the URL shown in the workflow.
Vite uses relative asset paths, so both repository URLs and custom domains are supported.

To upload with Git:
```sh
git init
git add .
git commit -m "Add Bluestar React website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

## Content and assets
Edit service descriptions and business details in src/App.jsx. Edit colors and responsive styling in src/styles.css.

Photos are referenced by their original Bluestar website CDN URLs and require an internet connection. For long-term reliability, download authorized copies into public/images and update the paths. Google Fonts also require an internet connection.

Quote buttons intentionally open https://www.bluestarjanitorial.com/contact. No local contact form or submission backend is included. Phone buttons use (469) 261-1485. Confirm business claims, discounts, image usage rights, and contact details before launch.

This is a standalone reconstruction, not Framer's generated source export. The package has not been executed or browser-tested in this chat environment.
