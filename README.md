# AZ Paintball Website

A static, GitHub Pages-friendly website starter for an Arizona paintball brand, field, league, event organizer, or local resource hub.

## Recommended page structure

This is a medium static website instead of a single-page landing page because the topic naturally supports useful SEO pages:

- `index.html` — homepage and main visitor path
- `fields.html` — where-to-play / field listing structure
- `beginner-guide.html` — beginner tips and safety preparation
- `events.html` — group events, birthdays, team outings, and tournament-style content
- `faq.html` — common paintball questions
- `contact.html` — demo planning form and placeholder contact details

## How to run locally

Open `index.html` in a browser.

For a cleaner local preview, use any simple static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Before publishing for real visitors

Replace all bracketed placeholders, especially:

- Real business, team, league, or field name
- Phone number and email address
- Field address, service area, and hours
- Verified prices, package names, and age requirements
- Waiver, booking, and map links
- Real photos or approved graphics
- Real form service or backend endpoint

## Contact form note

The contact form is intentionally a front-end demo. It validates the required fields and shows a message, but it does not send or store anything.

For a real public website, connect the form to a secure service or backend. Do not place email passwords, API keys, private URLs, or API tokens in frontend JavaScript.

## Security notes

- No external scripts or CDN dependencies are used.
- No secrets are included.
- The form does not collect real data yet.
- External links should use `target="_blank"` with `rel="noopener noreferrer"` if added later.
- GitHub Pages has limited custom security-header support. For stricter production headers such as Content-Security-Policy or HSTS, use hosting that supports custom headers or a proxy/CDN that can add them.

## GitHub Pages deployment

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the default branch and root folder.
5. Save and wait for GitHub Pages to publish.

Default expected URL:

`https://pcdelros.github.io/az-paintball/`

If you add a custom domain, update `sitemap.xml` and `robots.txt`.
