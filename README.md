# Manju Reddy | Portfolio (React + Vite)

## Run locally
npm install
npm run dev

## Deploy to GitHub Pages
1. Replace the contents of your existing repo with this folder (keep your .git).
2. `npm install` then `npm run deploy` (builds and publishes the `dist` folder to the `gh-pages` branch).
3. In GitHub, Settings > Pages: Source = "Deploy from a branch", branch `gh-pages`, folder `/ (root)`.

The build uses relative paths (`base: './'`), so it works on a user site or a project site.

## Edit content
- `src/data.js`: links, stats, experience, technologies, certifications
- `src/projects.js`: all projects (images are in `public/projects`)
- Resume: replace `public/Manju_Reddy_Technical_Lead_Resume.pdf`
