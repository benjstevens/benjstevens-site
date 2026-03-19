# Ben J Stevens Ministry - Static Website

A professional Christian ministry website built with pure HTML, CSS, and minimal JavaScript. Ready for GitHub Pages deployment.

## Quick Start

1. Download all files from this folder
2. Replace placeholder images in `/images` folder (see `/images/README.md` for details)
3. Update placeholder content (marked with `[Placeholder]` or `<!-- REPLACE -->` comments)
4. Upload to your GitHub repository

## File Structure

```
/
├── index.html          # Home page
├── about.html          # About page
├── sermons.html        # Sermons & Media page
├── bookings.html       # Book Speaking page
├── contact.html        # Contact page
├── blog.html           # Blog & Insights page
├── styles.css          # All styles
├── script.js           # Minimal JavaScript
├── images/             # Image assets folder
│   └── README.md       # Image requirements guide
└── README.md           # This file
```

## GitHub Pages Deployment

### Option 1: Using GitHub Web Interface
1. Create a new repository named `username.github.io` (replace `username` with your GitHub username)
2. Upload all files to the repository root
3. Go to Settings > Pages
4. Source: Deploy from branch > Main > / (root)
5. Save and wait a few minutes
6. Your site will be live at `https://username.github.io`

### Option 2: Using Custom Domain
1. Create a repository with any name
2. Upload all files
3. Go to Settings > Pages
4. Add your custom domain (e.g., `benjstevens.org`)
5. Create a CNAME record with your domain registrar pointing to `username.github.io`

## Customization Checklist

### Replace Placeholder Content:
- [ ] Update all `[Placeholder]` text throughout HTML files
- [ ] Replace biography in `about.html`
- [ ] Update ministry statistics in `index.html`
- [ ] Add real sermon titles/dates in `sermons.html`
- [ ] Add real blog post content in `blog.html`
- [ ] Update contact email and location in `contact.html`

### Replace Images:
- [ ] Hero background image
- [ ] Profile photo
- [ ] Sermon thumbnails
- [ ] Blog post images
- [ ] Gallery photos

### Update Links:
- [ ] YouTube channel URL
- [ ] Facebook page URL
- [ ] Instagram profile URL
- [ ] Email address

### Update YouTube Embeds:
- [ ] Replace placeholder YouTube video ID (`dQw4w9WgXcQ`) with actual sermon videos

## Technical Notes

- **No Build Required**: Pure HTML/CSS/JS - just upload and go
- **Mobile Responsive**: Fully responsive design for all screen sizes
- **No Dependencies**: No external frameworks or libraries required (fonts loaded from Google Fonts)
- **SEO Optimized**: Semantic HTML with proper meta tags
- **Accessible**: ARIA labels and semantic structure for screen readers

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Forms

All forms are frontend-only and display toast notifications on submission. They do not actually send data. To enable form submissions, you can:

1. Use a service like Formspree (https://formspree.io)
2. Use Netlify Forms (if hosting on Netlify)
3. Connect to your own backend

## License

This website template is created for Ben J Stevens Ministry. All content rights belong to the ministry.
