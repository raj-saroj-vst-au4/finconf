# QRD 2027 — Conference on Quant, Risk & Data

A multi-page PHP site for QRD 2027, the Conference on Quant, Risk & Data, 4–6 March 2027 at VMCC, IIT Bombay, hosted by Citadel Lab jointly with RTQF, IISc Bangalore. One persistent WebGL figure runs behind every page: about 26,000 points re-form into four quant objects (an implied volatility surface, a limit order book, the Lorenz attractor and the efficient frontier) as you scroll. Built with three.js, GSAP/ScrollTrigger and Lenis, bundled locally with esbuild; nothing loads from a CDN.

## Run locally

Requires PHP 8+ and Node.js 18+ to rebuild assets.

```sh
cd /srv/www/finconf
npm install
npm run build
php -S 127.0.0.1:8080
```

Open http://127.0.0.1:8080. After building, PHP alone is sufficient to serve the site; no database is required.

## Pages

| Page | Contents |
|---|---|
| `index.php` | Hero, about and the six conference themes (an accordion), the three days in brief, links to the inner pages, FAQ |
| `programme.php` | The three days on one time axis, then each day drawn to scale (block height is duration) with parallel tracks as lanes; a plain list on phones |
| `workshops.php` | The two pre-conference workshops (Day 0): date and venue, who should attend, each workshop's track, instructors and outline, the schedule and fees |
| `speakers.php` | Keynote speakers (the two keynote talks), then academia and industry speakers (`keynotes.php` redirects here) |
| `call-for-papers.php` | Four sections in order: general information (themes, key dates, fast-tracked publication in ASMBI), paper submission (PDF upload, writing advice), paper presentation, poster presentation (A0 portrait guidelines, dates) |
| `registration.php` | Who should attend; conference, poster, and workshop fees; deadlines and important dates |
| `venue.php` | "Venue & contact": VMCC photographs, address and directions, getting there, accommodation, contact email |
| `committees.php` | Organising committee, operations team, scientific programme committee |

## Content and editing

- All shared content lives in `includes/site.php`: the conference name (`$conference`, `$conference_full`), the contact email (`$contact_email`), themes (`$themes`), the workshops (`$workshops`: fill in instructors and outline when announced; their titles are also Day 0's lanes), the programme (`$days`, each slot with start and end times; an optional sixth value can display open-ended text such as "7:30 PM onwards"), organisers (`$team`, `$operations`), academia and industry speakers (`$academia_speakers`, `$industry_speakers`, empty until announced), scientific programme committee (`$programme_committee`, empty until announced), call for papers (`$dates`, `$advice`, `$journal_name`, `$journal_url`, and `$journal_cover`: set it to the journal title page image, e.g. `assets/images/asmbi-cover.jpg`, to show it), call for posters (`$poster_guidelines`, `$poster_dates`), fees (`$fees`, `$poster_fees`, `$workshop_fees`) and FAQ. The header, navigation and footer are rendered there too, so every page stays in step.
- **Links:** `$submission_form_url` and `$poster_form_url` (the Google Forms for papers and poster abstracts) are set at the top of `includes/site.php`; `$registration_url` is still empty. While a link is empty, its button opens a dialog explaining it is not open yet; once set, it links straight to the URL in a new tab.
- Dates and fees read "To be announced" until set; pending values are shown in italic.
- Style: lists use the serial comma ("a, b, and c"); the conference name is "Conference on Quant, Risk & Data" (no "International"). Tables carry an `aria-label` instead of a visible caption.
- The call for papers is adapted from the ISBIS StatFin 2026 call (https://statfin.cmi.ac.in/ISBIS2026/contributed_session.html), with selected papers fast-tracked to *Applied Stochastic Models in Business and Industry* (ASMBI; there is no special issue); the registration and committees pages follow the structure of that site's registration and committee pages.
- The venue page's travel notes (nearest airport and suburban stations) should be confirmed by the organisers before launch.
- The header and footer use the original IIT Bombay crest and Citadel Securities wordmark from https://www.som.iitb.ac.in/citadel/, stored locally in `assets/images/`. The venue photographs are `assets/images/vmcc-auditorium.webp` and `vmcc-entrance.webp`; their sources are recorded in `assets/images/SOURCES.md`.

## Code

- Styles: `assets/v2/v2.css` (plain CSS, no build step).
- Script source: `assets/v2/src/` — `main.js` (scroll choreography, menu, dialogs), `figure.js` (WebGL scene), `shapes.js` (point clouds). Run `npm run build:v2` after changing them.
- Each section picks its figure with `figure_attrs(<index>)`, which sets `data-figure`. Scrolling between two sections morphs from one figure to the next. `data-quiet` dims the figure behind text-heavy sections (`data-quiet-narrow` only on phones). `.tone-zone` turns the page ultramarine.
- Without JavaScript, WebGL or with reduced motion, all content stays readable: the figure and smooth scrolling are dropped.
- `bakupindex.php` is the original single-page design (Tailwind and jQuery, built by `npm run build:v1`).

## Version 3 (`version3.php`)

A navy design built around a live, simulated limit order book in WebGL. Price levels run across, the last seven seconds of history run back into the distance, and bar height is resting size. Visitors can hover a bar to read it, drag to turn the book, and click either side (or use the Buy/Sell buttons) to send an 8,000-share market order and see the price move. Teal always means buy orders and amber sell orders; neither colour is used for anything else.

- Content (program, topics, team, FAQ, dialog copy in `<template>` elements) is edited in `version3.php`; it does not share data with the other versions. Team placeholder SVGs are shown as initials; set a member's `photo` to a JPG, PNG or WebP to show a portrait.
- Styles: `assets/v3/v3.css` (plain CSS). Script source: `assets/v3/src/` (`book.js` the order-flow simulation, `scene.js` the three.js scene, `live-book.js` the read-outs, trading and frame loop, `main.js` page interactions). The order flow is a zero-intelligence model (random limit orders, cancellations and market orders) and is labelled on the page as simulated, not market data.
- `npm run build` (or `npm run build:v3`) bundles three.js into `assets/v3/v3.js` with esbuild. Type is Archivo (variable width and weight) with STIX Two for mathematical notation, copied into `assets/fonts/` by `scripts/vendor.mjs`. Nothing loads from a CDN.
- With reduced motion the market stands still until the visitor trades. Without JavaScript or WebGL a static depth chart replaces the 3D book, and all content stays readable.
- Deploy `version3.php` together with `assets/` (including `assets/v3/v3.js` and `assets/fonts/`); `assets/v3/src/` is not needed at runtime.

## Verification

```sh
for f in *.php includes/*.php; do php -l "$f"; done
npm run build
npx playwright install chromium
npm test
```

`tests/site.spec.js` covers every page (no errors, local assets only, current-page navigation, no table captions, the contact email in the footer), links between pages, the to-scale programme, the workshops page, the speakers page and old keynotes link, the venue & contact page, the call for papers order, the paper and poster forms, the registration fees and dialog, responsive layouts, the mobile menu, reduced motion and JavaScript-disabled rendering. `tests/version3.spec.js` covers version 3. `tests/conference.spec.js` was written for the original design and no longer matches `index.php`.

## Deployment

Deploy the nine page files (`index.php`, `programme.php`, `workshops.php`, `speakers.php`, `keynotes.php` (redirect), `call-for-papers.php`, `registration.php`, `venue.php`, `committees.php`), `includes/` and `assets/` to a PHP-enabled web server; `assets/v2/src/` is not needed at runtime. Do not expose `node_modules/`, `tests/`, or build tooling from the public document root. HTTPS is recommended. No runtime CDN scripts, database credentials, or private environment values are needed.

### Automatic deployment

`.github/workflows/deploy.yml` deploys from GitHub to the production server (`server8.hostathash.com`, serving https://qrdconference.com/) on every push to `main`, and on demand from the repository's Actions tab ("Deploy to production" > "Run workflow"). It first runs `php -l` on every PHP file, then uploads the files that changed over FTPS. Files deleted from the repository are removed from the server; anything else already on the server is left alone.

Set these once in GitHub under Settings > Secrets and variables > Actions:

- Secrets: `FTP_SERVER` (`server8.hostathash.com`), `FTP_USERNAME`, `FTP_PASSWORD`.
- Variable (optional): `FTP_SERVER_DIR`, the site's folder as the FTP account sees it, ending in `/` (for example `public_html/`). Leave it unset if the account opens straight into the document root.

Until the secrets are set, the deploy step is skipped. Rebuild `assets/v2/v2.js` with `npm run build:v2` and commit it before pushing script changes: the pipeline uploads the repository as it is.
