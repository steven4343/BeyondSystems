# Beyond Systems Website

Professional static website for Beyond Systems - a leading provider of mining solutions, industrial equipment, and security services in Zambia.

## Project Structure

```
client-website/
│
├── index.html        # Homepage with services overview
├── about.html        # About Us page
├── contact.html      # Contact page with form
│
├── assets/
│   ├── css/
│   │   └── style.css    # Main stylesheet
│   │
│   ├── js/
│   │   └── main.js      # JavaScript functionality
│   │
│   └── images/
│       └── (logo and images to be added)
│
└── README.md
```

## Features

### Homepage (index.html)
- Hero section with company tagline
- Authorized Distributors showcase
- Products & Services overview
- Security Solutions section
- Mining Locations served
- Footer with quick links

### About Page (about.html)
- Company mission, vision, and values
- Why choose Beyond Systems
- Company highlights and expertise
- Call-to-action sections

### Contact Page (contact.html)
- Contact form with validation
- Contact information display
- Business hours
- Map section placeholder
- Services available list

## Design Features

- **Modern, professional design** with green brand color (#00cc66)
- **Fully responsive** layout for mobile, tablet, and desktop devices
- **Smooth animations** and hover effects
- **Clean typography** using Archivo and DM Sans fonts
- **Optimized for mining/industrial sector** aesthetics

## Technologies Used

- HTML5
- CSS3 (External stylesheet)
- Vanilla JavaScript
- Google Fonts (Archivo, DM Sans)

## Setup Instructions

1. **Download all files** maintaining the folder structure
2. **Add your logo** to `assets/images/logo.png`
3. **Update contact information** in all HTML files:
   - Replace `+260 XXX XXX XXX` with actual phone number
   - Update email addresses if different
   - Add specific office address
4. **Optional**: Connect contact form to backend service

## Customization Guide

### Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
    --primary-green: #00cc66;
    --dark-bg: #0a0f0d;
    --text-dark: #1a1a1a;
    --text-light: #f5f5f5;
}
```

### Content
- Edit text content directly in HTML files
- Update services, products, and distributor information
- Modify section layouts as needed

### Images
- Add company logo to `assets/images/logo.png`
- Add service/product images to `assets/images/`
- Update image references in HTML files

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact Form

The contact form currently shows a JavaScript alert on submission. To make it functional:

1. **Option 1**: Use a form service like Formspree, Form submit, or Netlify Forms
2. **Option 2**: Connect to your own backend API
3. **Option 3**: Use email services like EmailJS

Example integration with Formspree:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## Deployment

This is a static website and can be deployed to:
- **Netlify** (recommended - free tier available)
- **Vercel** (recommended - free tier available)
- **GitHub Pages** (free)
- **Traditional web hosting** (any hosting service)
- **AWS S3** + CloudFront
- **Firebase Hosting**

### Quick Deploy to Netlify:
1. Create account at netlify.com
2. Drag and drop the `client-website` folder
3. Your site will be live in seconds!

## Maintenance

### Regular Updates
- Update contact information
- Add new services/products
- Update distributor listings
- Add news/blog posts (optional)
- Update copyright year

### Performance
- Optimize images before uploading
- Minify CSS/JS for production (optional)
- Enable caching on your hosting service

## Support

For questions or customization requests, contact:
- Email: info@beyondsystems.co.zm
- Phone: +260 XXX XXX XXX

## License

© 2026 Beyond Systems. All rights reserved.

---

**Built for:** Beyond Systems
**Project:** Corporate Website
**Version:** 1.0
**Last Updated:** January 2026