# Satyam Kumar - Data Engineer Portfolio

A modern, responsive portfolio website showcasing my experience as a Data Engineer specializing in AWS, PySpark, Databricks, and Big Data technologies.

## Features

- **Modern Design**: Clean, tech-focused UI with data engineering themed visuals
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle transitions and scroll animations
- **Fast Loading**: Pure HTML, CSS, JavaScript - no heavy frameworks
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: Follows web accessibility best practices

## Sections

1. **Hero** - Strong introduction with animated typing effect
2. **About** - Professional summary with key highlights
3. **Skills** - Categorized technical skills with progress bars
4. **Experience** - Timeline of work history and achievements
5. **Projects** - Key projects with metrics and technologies
6. **Certifications** - All professional certifications with links
7. **Contact** - Contact information and resume download

## Quick Start

### Option 1: Open Directly (Simplest)

Simply double-click `index.html` to open in your default browser.

### Option 2: Local Development Server

Using Python (recommended for proper asset loading):

```bash
# Python 3
cd /path/to/Portfolio
python -m http.server 8000

# Open http://localhost:8000 in your browser
```

Using Node.js:

```bash
# Install live-server globally (one-time)
npm install -g live-server

# Run server
cd /path/to/Portfolio
live-server
```

Using VS Code:
- Install "Live Server" extension
- Right-click `index.html` > "Open with Live Server"

## Deployment

### GitHub Pages (Free)

1. Create a new repository on GitHub

2. Initialize git and push:
```bash
cd /path/to/Portfolio
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: `main` / `root`
   - Save

4. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Netlify (Free, Recommended)

**Option A: Drag & Drop**
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login
3. Drag the entire `Portfolio` folder to the deploy area
4. Your site is live instantly!

**Option B: Git Integration**
1. Push code to GitHub (see above)
2. Login to Netlify
3. Click "New site from Git"
4. Choose your repository
5. Deploy settings are auto-detected
6. Click "Deploy site"

### Vercel (Free)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd /path/to/Portfolio
vercel
```

3. Follow the prompts

### Custom Domain (Optional)

After deploying to any platform:
1. Buy a domain (Namecheap, GoDaddy, Google Domains)
2. Add custom domain in platform settings
3. Update DNS records as instructed

## Project Structure

```
Portfolio/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styles
├── js/
│   └── main.js             # JavaScript functionality
├── assets/                 # Additional assets (if any)
├── certifications/         # Certification PDFs/images
│   ├── AWS Certified Cloud Practitioner certificate.pdf
│   ├── AWS Certified Developer - Associate certificate.pdf
│   ├── AWS Certified Solutions Architect - Associate certificate.pdf
│   ├── AWS Certified Solutions Architect - Professional certificate.pdf
│   ├── DATABRICKS CERTIFIED DATA ENGINEER ASSO.png
│   └── DP700fabric.pdf
├── resume/
│   └── Satyam_Kumar_Resume.pdf
└── README.md               # This file
```

## Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-500: #3b82f6;  /* Main brand color */
    --accent-cyan: #06b6d4;
    --accent-emerald: #10b981;
    /* ... */
}
```

### Content
- Update `index.html` with your information
- Replace certifications in `certifications/` folder
- Replace resume in `resume/` folder

### Animations
- Adjust timing in `js/main.js`
- Modify CSS animations in `css/styles.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- JavaScript (ES6+)
- Google Fonts (Inter, JetBrains Mono)

## Performance

- No external JavaScript libraries
- Minimal CSS (single file)
- Optimized animations with `will-change`
- Lazy loading ready
- Reduced motion support

## License

This portfolio is personal. Feel free to use as inspiration for your own portfolio.

---

Built by Satyam Kumar | Data Engineer
