# Beyond Systems Website

Professional corporate website for Beyond Systems - Mining Solutions & Security Services in Solwezi, Zambia.

## 🏗️ Project Structure

```
beyond-systems-website/
│
├── index.html              # Homepage
├── about.html              # About Us page
├── contact.html            # Contact page
│
├── assets/
│   ├── css/
│   │   ├── style.css      # Global/shared styles (nav, footer, buttons, animations)
│   │   ├── about.css      # About page specific styles
│   │   └── contact.css    # Contact page specific styles
│   │
│   ├── js/
│   │   ├── main.js        # Global JavaScript (navigation, hamburger, scroll animations)
│   │   ├── about.js       # About page specific JavaScript
│   │   └── contact.js     # Contact page specific JavaScript (form handling)
│   │
│   ├── images/
│   │   ├── Logo.jpeg      # Company logo
│   │   ├── WANAKE.png     # WANAWAKE distributor logo
│   │   ├── ELORRY.png     # HENAN ELLORY distributor logo
│   │   ├── ARTELCN.png    # JILIN ARTEL distributor logo
│   │   └── map.png        # Map image for contact page
│   │
│   └── fonts/             # Custom fonts (if needed)
│
├── README.md              # This file
└── .gitignore             # Git ignore file
```

## ✨ Features

### 📄 **Pages**
- **Homepage** - Services showcase, distributors, chemicals, IT services
- **About** - Company info, mission, vision, why choose us
- **Contact** - Contact form, details, map

### 🎨 **Design**
- Fully responsive (desktop, tablet, mobile)
- Hamburger menu for mobile devices
- Scroll animations on all sections
- Modern green (#00cc66) brand colors
- Professional typography (Archivo + DM Sans)

### 🔧 **Technical**
- **Modular Structure** - Separate CSS/JS per page
- **Vanilla JavaScript** - No dependencies
- **Clean Code** - Well organized and commented
- **Performance** - Optimized for fast loading

## 🚀 Quick Start

### 1. Add Your Images

Place these files in `assets/images/`:
- Logo.jpeg
- WANAKE.png
- ELORRY.png
- ARTELCN.png
- map.png (optional - screenshot from Google Maps)

### 2. Update Contact Information

Edit these files:
- `index.html` (footer)
- `about.html` (footer)
- `contact.html` (contact details)

Replace:
- `+260 975 913 592` → Your phone
- `info@beyondsystems.co.zm` → Your email
- `jkayivwa2@gmail.com` → Your email
- `Solwezi, Zambia` → Your location

### 3. Deploy

Upload to any web host or use:
- **Netlify** (drag & drop)
- **Vercel**
- **GitHub Pages**
- Traditional hosting (FTP)

## 📱 Responsive Design

### Breakpoints:
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px (hamburger menu activated)

### Testing:
- Resize browser to test
- Use browser DevTools (F12)
- Test on actual mobile devices

## 🎯 File Responsibilities

### CSS Files

#### **style.css** (Global)
- CSS variables
- Reset styles
- Navigation (desktop & mobile)
- Hamburger menu
- Footer
- Buttons & CTAs
- Scroll animations
- Homepage sections
- Responsive breakpoints

#### **about.css** (About Page)
- Page header
- About section layout
- Mission/vision cards
- Why choose section
- CTA section

#### **contact.css** (Contact Page)
- Page header
- Contact form styling
- Contact details layout
- Map section
- Form validation styles

### JavaScript Files

#### **main.js** (Global)
- Hamburger menu toggle
- Scroll animations
- Smooth scrolling
- Navbar scroll effects
- Active nav link highlighting

#### **about.js** (About Page)
- About page animations
- Stat counters (optional)
- Parallax effects

#### **contact.js** (Contact Page)
- Form submission handling
- Form validation
- Success/error messages
- Map interaction

## 🔧 Customization

### Change Colors

Edit `assets/css/style.css`:
```css
:root {
    --primary-green: #00cc66;   /* Brand color */
    --dark-bg: #0a0f0d;         /* Dark background */
    --text-dark: #1a1a1a;       /* Text color */
    --text-light: #f5f5f5;      /* Light text */
}
```

### Add New Sections

1. Add HTML in appropriate page
2. Add styles in relevant CSS file
3. Add JavaScript if needed
4. Add to scroll animations in main.js

### Connect Contact Form

Edit `assets/js/contact.js`:
- Replace the commented API call with your backend
- Or use services like Formspree, FormSubmit, EmailJS

## 📞 Contact Information

- **Location:** Solwezi, Zambia
- **Phone:** +260 975 913 592
- **Email:** info@beyondsystems.co.zm
- **Email:** jkayivwa2@gmail.com

## 🐛 Troubleshooting

### Hamburger Menu Not Working?
1. Open browser console (F12)
2. Check for JavaScript errors
3. Verify screen width < 768px
4. Check main.js is loading

### Images Not Showing?
1. Check file names match exactly (case-sensitive)
2. Verify images are in `assets/images/`
3. Clear browser cache (Ctrl+F5)

### Styles Not Loading?
1. Check CSS file paths in HTML
2. Clear browser cache
3. Check browser console for 404 errors

### Form Not Submitting?
1. Check contact.js is loading
2. Open browser console for errors
3. Form currently shows alert - needs backend integration

## 📝 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🔒 Security

- All user input validated
- No inline JavaScript
- Prepared for CSP headers
- Ready for HTTPS

## 📦 Deployment

### Netlify (Recommended)
```bash
# Upload folder to netlify.com
# Instant deployment
# Free SSL certificate
```

### Traditional Hosting
```bash
# Upload via FTP/cPanel
# Point to index.html
# Enable HTTPS
```

## 🛠️ Development

### Testing Locally
```bash
# Use any local server:
# Python: python -m http.server 8000
# Node: npx serve
# VS Code: Live Server extension
```

### Making Changes
1. Edit HTML/CSS/JS files
2. Refresh browser to test
3. Test on mobile (browser DevTools)
4. Upload changes to server

## 📚 Additional Resources

- [HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## ✅ Pre-Launch Checklist

- [ ] All images added to assets/images/
- [ ] Contact information updated
- [ ] Test on desktop browser
- [ ] Test on mobile device
- [ ] Hamburger menu works
- [ ] All navigation links work
- [ ] Contact form validates
- [ ] Map displays/fallback works
- [ ] All sections scroll animate
- [ ] No console errors

## 📄 License

© 2026 Beyond Systems. All rights reserved.

---

**Built with** ❤️ **for Beyond Systems**  
**Location:** Solwezi, Zambia  
**Tagline:** Innovative Reliable Solutions