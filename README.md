# Maharashtra Mandal Bay Area — Website

Static HTML/CSS/JS website for **MMBA** (Maharashtra Mandal Bay Area), a non-profit Maharashtrian cultural organization serving Northern California since 1980.

## File Structure

```
mmba/
├── index.html          Homepage
├── about.html          About, history, leadership, FAQ
├── events.html         Festivals & events with filter
├── community.html      Community, testimonials, volunteer
├── membership.html     Membership plans + registration form
├── gallery.html        Photo gallery with lightbox
├── contact.html        Contact form + sponsorship
├── css/
│   └── global.css      Shared stylesheet
├── js/
│   └── main.js         Shared JavaScript
└── README.md
```

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Hero, about preview, events preview, membership CTA |
| `about.html` | Mission, history timeline, leadership, FAQ accordion |
| `events.html` | Filterable events grid, annual calendar |
| `community.html` | Programs, testimonials, volunteer roles |
| `membership.html` | Plan cards, benefits table, registration form |
| `gallery.html` | Masonry gallery with lightbox + Instagram section |
| `contact.html` | Contact form, address, sponsorship tiers |

## Design

- **Colors:** Kesari #FF6A13 · Maroon #7A1E1E · Gold #D4AF37 · Blue #0077B6
- **Fonts:** Cormorant Garamond (headings) + DM Sans (body) via Google Fonts
- **Style:** Silicon Valley minimalism + Indian cultural warmth
- **Responsive:** Mobile-first, works on all screen sizes

## To Deploy on GitHub Pages

1. Upload all files to your GitHub repo (keep folder structure intact)
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. Your site will be live at `https://yourusername.github.io/reponame/`

## Customization Checklist

- [ ] Replace emoji placeholders in `gallery.html` with real event photos
- [ ] Update leadership names in `about.html`
- [ ] Connect contact forms to a backend (Formspree, Netlify Forms, or similar)
- [ ] Add Google Maps embed in `contact.html`
- [ ] Update membership pricing if different from current ($40/$75/$200)
- [ ] Add real event dates once confirmed
- [ ] Update copyright year annually

## Form Integration (Formspree — Free)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint URL
3. In each HTML file, update the `<form>` tags:
   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
4. Remove the `onsubmit="return false;"` or JS submit handler

## Credits

Built for Maharashtra Mandal Bay Area · [mmbayarea.org](https://mmbayarea.org) · Est. 1980
