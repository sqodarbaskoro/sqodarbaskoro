# Project Planning: sqodarbaskoro GitHub Profile & Landing Page

**Author:** Sri Yanto Qodarbaskoro  
**Email:** sqodarbaskoro@gmail.com  
**LinkedIn:** https://www.linkedin.com/in/sqodarbaskoro/  
**Copyright:** © 2025 Sri Yanto Qodarbaskoro

---

## Project Overview

### Purpose
Present a professional GitHub presence for Sri Yanto Qodarbaskoro as an **AI Engineer**, grounded in verified public LinkedIn and repository facts, with a polished profile README and a GitHub Pages landing site.

### Scope
**Included**
- Profile `README.md` (renders on https://github.com/sqodarbaskoro)
- Static landing page (`index.html`, `styles.css`, `script.js`) for GitHub Pages
- Project tracking docs (`PLANNING.md`, `TASKS.md`)

**Excluded**
- Private employment documents or non-public metrics
- Fabricated stars, awards, or unreleased claims
- Backend services or CMS

### Target Users
- Hiring managers and technical recruiters evaluating AI / ML engineering fit
- Collaborators exploring SeismoPilot and open repositories
- Peers in marine seismic / industrial AI domains

---

## Technical Architecture

### Technology Stack
- **Language:** HTML5, CSS3, vanilla JavaScript
- **Hosting:** GitHub Pages (this repository)
- **Profile surface:** GitHub special README repository (`sqodarbaskoro/sqodarbaskoro`)
- **Fonts:** Bricolage Grotesque, Figtree, IBM Plex Mono (Google Fonts)

### System Architecture
```
GitHub Profile View          GitHub Pages
─────────────────            ────────────
README.md  ──► github.com/sqodarbaskoro
index.html + CSS + JS ──► sqodarbaskoro.github.io
```

### Key Components
1. **Profile README:** Affaan-m-inspired structure (Now / Systems / Experience / Stack / Contact) with factual content.
2. **Landing page:** Full-bleed ocean/sonar visual system, animated seismic traces, project and career sections.
3. **Atmosphere script:** Canvas waveform animation with reduced-motion respect.

---

## Content Sources (Verified)

| Source | Facts used |
| --- | --- |
| LinkedIn public profile / posts | Title, Shearwater roles & dates, Schlumberger background, 19+ years experience, IBM/Coursera credentials, PPE CV project narrative |
| GitHub public repos | SeismoBrain, AURA Sentinel, SeismoPilotSave (HSE Interlock), PDFCompress, Name2Pdf |
| GitHub profile / seismopilot.com | Location Penang, company SeismoPilot; site offers process automation, ClariCV, predictive analytics, Seismo Pilot Survey, SeismoBrain, Edge PPE vision |

---

## Security Considerations
- No secrets or API keys in the site
- External links use `rel="noopener noreferrer"`
- Content limited to public facts

---

## Development Phases

### Phase 1: Foundation
- [x] Research LinkedIn + public repos
- [x] Study reference profile structure
- [x] Define visual direction (abyss / signal teal)

### Phase 2: Build
- [x] Profile README
- [x] Landing page HTML/CSS/JS
- [x] Tracking docs

### Phase 3: Publish
- [ ] PR review
- [ ] Enable GitHub Pages (Settings → Pages → Deploy from branch `main` / root)
- [ ] Confirm profile README rendering

---

## Decision Log

### 2026-09-20 — Dual surface (README + Pages)
**Context:** User asked for a landing page similar to affaan-m but better.  
**Decision:** Ship both a rich profile README and a custom Pages site.  
**Rationale:** affaan-m is README-only; a Pages site allows distinctive typography, motion, and atmosphere while the README still owns the GitHub profile view.  
**Alternatives:** README only; separate website repo.

### 2026-09-20 — AI-engineer positioning without inflating claims
**Context:** Career is Navigation Support Engineer with serious AI projects.  
**Decision:** Lead with AI Engineer identity while clearly stating current Shearwater role and domain depth.  
**Rationale:** Matches user request and public LinkedIn headline (“AI engineer”) without inventing titles.

---

**Last Updated:** 2026-09-20  
**Version:** 1.0.0
