# AZ Paintball Website

A rebuilt static, GitHub Pages-friendly website starter for an Arizona paintball brand, field, event organizer, team, or local resource hub.

## Build approach

This is a medium static website using plain HTML, CSS, and lightweight JavaScript. That keeps it easy to edit, fast to load, and simple to deploy through GitHub Pages without a framework or build step.

## Recommended page structure

The site uses normal page-based navigation instead of relying on one long scrolling page:

- `index.html` — homepage and main visitor path
- `fields.html` — where-to-play / field information structure
- `beginner-guide.html` — beginner education and safety preparation
- `events.html` — private games, birthdays, company outings, and group planning
- `resources.html` — lightweight article/resource hub for future SEO content
- `faq.html` — common questions
- `contact.html` — demo planning form and contact placeholders
- `privacy.html` — privacy and form-behavior notes

## How to run locally

Open `index.html` in a browser.

For a cleaner local preview, use any simple static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Before publishing for real visitors

Replace all placeholders, especially:

- Real business, team, league, or field name
- Phone number and email address
- Field address, service area, and hours
- Verified prices, package names, age requirements, and safety rules
- Waiver, booking, and map links
- Real photos or approved graphics
- Real form service or backend endpoint

## Contact form note

The contact form is intentionally a front-end demo. It validates required fields and shows a message, but it does not send, email, or store anything.

For a real public website, connect the form to a secure form service or backend. Do not place email passwords, API keys, private URLs, or API tokens in frontend JavaScript.

## Security notes

- No external scripts or CDN dependencies are used.
- No secrets are included.
- The form does not collect real data yet.
- External links should use `target="_blank"` with `rel="noopener noreferrer"` if added later.
- GitHub Pages has limited custom security-header support. For stricter production headers such as Content-Security-Policy or HSTS, use hosting that supports custom headers or a proxy/CDN that can add them.

## Quality checklist

- Polished responsive layout with styled navigation, hero, cards, CTA panels, forms, and footer.
- SEO-friendly page structure with unique titles and meta descriptions.
- Lightweight resource page for future articles without fake posts.
- Image placeholders are styled blocks, not broken image links.
- Form behavior is clearly labeled as a demo.

## GitHub Pages deployment

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the default branch and root folder.
5. Save and wait for GitHub Pages to publish.

Default expected URL:

`https://pcdelros.github.io/az-paintball/`

If you add a custom domain, update `sitemap.xml` and `robots.txt`.
