# NECTAR Website Redesign Plan

## Overview
Full redesign of nectarband.net with modern dark/edgy aesthetic, new features, and improved content organization.

**Source**: `D:\original-site`
**Target**: `D:\claude-site`
**Live Site**: https://nectarband.net (GCS bucket: gs://nectarband.net)
**Last Updated**: 2026-02-08

---

## Implementation Status

### COMPLETED
- [x] Created `styles.css` with full design system
- [x] Created responsive navigation (sticky header, mobile hamburger menu)
- [x] Created footer with social links + mailing list signup
- [x] Redesigned `index.html` with logo-centered hero
- [x] Redesigned `about.html` with member grid
- [x] Created `contact.html` with booking form
- [x] Reorganized `videos.html` with all 28 videos in 3 sections
- [x] Updated `events.html` with upcoming + past events
- [x] Updated `songs.html` with searchable list (46 songs)
- [x] Fixed all member pages (Jennifer, Aaron, John, Pat, Brent)
- [x] Created `karaoke.html` easter egg
- [x] Converted lyrics to HTML format
- [x] Optimized lyrics styling (compact line-height, tight verse spacing)
- [x] Copied all assets (images, videos, photos)
- [x] Updated copyright to 2026
- [x] Configured Formspree for contact form (ID: xzdabyqk)
- [x] Changed featured video to Motley Crue - Home Sweet Home
- [x] Fixed video cropping with `.featured` class for home page video
- [x] Added social media URLs (Facebook, YouTube)
- [x] Removed Instagram placeholder (no account)
- [x] Created `reviews.html` for visitor reviews
- [x] Created `admin-reviews.html` (hidden admin page)
- [x] Added reviews ticker to home page
- [x] Set up Firestore database for reviews
- [x] Deployed Cloud Function for reviews API
- [x] Added Reviews link to navigation on all pages
- [x] Created GitHub repo: https://github.com/wrightbrent/Nectar-band-website

### PENDING
- [ ] Set up Firestore + Cloud Function for mailing list (optional)
- [ ] Deploy to GCS bucket
- [ ] Verify HTTPS

---

## Design Direction: Dark & Edgy Rock Aesthetic

### Color Palette
- **Primary Background**: #0a0a0a (near black)
- **Secondary Background**: #1a1a1a (dark gray)
- **Accent Color**: #ff6600 (orange)
- **Text**: #f5f5f5 (off-white)
- **Muted Text**: #888888

### Typography
- Headlines: Oswald (Google Fonts)
- Body: Roboto (Google Fonts)
- High contrast, large text for impact

### Visual Elements
- Logo-centered hero on home page
- Full-width sections with alternating backgrounds
- Hover effects on cards and links
- Orange accent underlines on navigation

---

## Current Site Structure

```
D:\claude-site\
├── index.html              - Home (logo hero, reviews ticker, featured video, next show, band preview)
├── about.html              - Band bio + member grid
├── events.html             - Upcoming & past events
├── songs.html              - Searchable song list (46 songs)
├── videos.html             - Video gallery (28 videos in 3 sections)
├── contact.html            - Contact form + booking info
├── reviews.html            - Public reviews page (submit + view)
├── admin-reviews.html      - Hidden admin page (manage reviews)
├── karaoke.html            - Hidden karaoke mode (easter egg)
├── styles.css              - Shared stylesheet
├── Jennifer.html           - Lead vocals (has secret karaoke link)
├── Aaron.html              - Guitar
├── John.html               - Drums
├── Pat.html                - Bass
├── Brent.html              - Guitar/Keys
├── lyrics/
│   ├── crazytrain.html     - Crazy Train lyrics
│   └── farbehind.html      - Far Behind lyrics
├── photos/
│   ├── gallery.html        - Photo gallery
│   ├── gallery.js          - Gallery JavaScript
│   ├── styles.css          - Gallery styles
│   └── *.jpg               - Photo files
├── *.jpg / *.jpeg          - Band/member images
├── *.mp4                   - Video files (28 total)
├── gcp-resource-map.md     - GCP resources documentation
└── WEBSITE-REDESIGN-PLAN.md - This file
```

---

## Features Implemented

### 1. Contact Form
- Fields: Name, Email, Subject dropdown, Message
- **Formspree configured**: https://formspree.io/f/xzdabyqk
- Booking info sidebar with social links
- Email notifications sent to registered Formspree account

### 2. Social Media Integration
- Footer social icons (FB, YT) across all pages
- **Facebook**: https://www.facebook.com/NectarCol/
- **YouTube**: https://www.youtube.com/@brentwright6209
- Instagram removed (no account)

### 3. Mailing List Signup
- Email signup form in footer (all pages)
- Ready for Firestore/Cloud Function backend

### 4. Responsive Navigation
- Fixed header with logo + nav links
- Mobile hamburger menu with JavaScript toggle
- Orange underline on hover/active states

### 5. Hidden Karaoke Mode (Easter Egg)
- **Trigger**: Click copyright text on Jennifer's page
- **Features**:
  - Back button to Jennifer's page
  - Dropdown to select song
  - Lyrics displayed in iframe with karaoke styling
- **Lyrics available**: Crazy Train, Far Behind
- **Lyrics Styling**:
  - Font size: 1.5rem
  - Line height: 1.4 (compact)
  - Verse spacing: 0.5em (tight)
  - Centered text, dark background

### 6. Video Gallery
- **28 videos** organized into 3 sections:
  - Performances (15 videos)
  - Manitou Springs Shows (9 videos)
  - Morty's Benefit & More (4 videos)
- Video cards with title and venue
- Removed: Cranberries - Zombie (codec issue)

### 7. Song List
- 46 songs with artist and title
- Real-time search/filter functionality
- Alphabetically sorted
- Added: Bon Jovi - Livin' on a Prayer, Lita Ford - Kiss Me Deadly

### 8. Reviews System
- **Public Page** (`reviews.html`): Submit reviews (name + text)
- **Admin Page** (`admin-reviews.html`): Manage/delete reviews
- **Easter Egg**: Click "2026" year in footer on reviews page to access admin
- **Home Page Ticker**: Scrolling marquee of reviews below hero
- **Backend**:
  - Firestore database (collection: `reviews`)
  - Cloud Function: `https://us-central1-brent-wright.cloudfunctions.net/reviews`
  - Auto-approves all submissions
  - Supports GET (list), POST (submit), DELETE (remove)

---

## Bugs Fixed

- [x] Jennifer.html: Fixed title (was "John - Lead Vocals")
- [x] Jennifer.html: Fixed typos ("Jennier" → "Jennifer", "musicial" → "musical")
- [x] All pages: Updated copyright to "© 2026 NECTAR"
- [x] Standardized branding to "NECTAR"
- [x] Removed invalid HTML from events page

---

## Remaining Tasks

### Before Deployment
1. ~~**Formspree Setup**: Create account and get form ID for contact.html~~ ✓ DONE
2. ~~**Social Media URLs**: Replace placeholder links with real URLs~~ ✓ DONE
3. **Firestore Setup** (optional): For mailing list backend
4. **Test all pages**: Local browser testing
5. **Mobile testing**: Responsive design verification

### Deployment
```bash
# Sync to GCS bucket
gsutil -m rsync -r "D:\claude-site" gs://nectarband.net

# Or from WSL
source ~/google-cloud-sdk/path.bash.inc
gsutil -m rsync -r /mnt/d/claude-site gs://nectarband.net
```

### Post-Deployment
1. Verify https://nectarband.net loads correctly
2. Test all navigation links
3. Test contact form submission
4. Test mailing list signup
5. Check mobile responsiveness

---

## GCP Backend Setup (for Mailing List)

### Firestore Collection
- Collection: `subscribers`
- Document fields: `email`, `subscribed_at`, `source`

### Cloud Function
- HTTP trigger for form submissions
- Validates email format
- Stores in Firestore
- Returns success/error JSON

### Deployment Commands
```bash
gcloud firestore databases create --location=us-central1
gcloud functions deploy subscribeEmail --runtime=nodejs20 --trigger-http --allow-unauthenticated
```

---

## Decisions Made

- **Accent Color**: Orange (#ff6600)
- **Social Links**: Facebook + YouTube (no Instagram)
- **Contact Form**: Formspree (free, no backend required)
- **Mailing List**: Firestore + Cloud Functions (GCP-hosted)
- **Hero Design**: Logo image centered (not text)
- **Lyrics Format**: HTML files with styled verses
- **Videos**: 28 included (Zombie removed due to codec issue), organized by venue/date
- **Featured Video**: Motley Crue - Home Sweet Home (on home page)
- **Reviews**: Firestore + Cloud Functions (auto-approve, admin can delete)
- **GitHub Repo**: https://github.com/wrightbrent/Nectar-band-website
