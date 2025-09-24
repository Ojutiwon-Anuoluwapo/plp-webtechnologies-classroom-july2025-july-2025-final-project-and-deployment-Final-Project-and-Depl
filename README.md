# Project planning and documentation for MicroSavvy
# MicroSavvy — Scholarship-based Microsoft basics training

MicroSavvy is a scholarship initiative by AnojmaTech that empowers learners with accessible, beginner-friendly training in Microsoft Word, Excel, PowerPoint, and Outlook. The program is strictly virtual, focuses on practical basics (not advanced features), and awards certification upon successful completion.

- Live site: https://microsavvy.netlify.app
- Repository: https://github.com/Ojutiwon-Anuoluwapo/plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl

---

## 1) Purpose, objectives, and scope

**Purpose:** Provide a clear, friendly onboarding experience for scholarship learners to understand the program, select a course, and register easily.

**Objectives:**
- **Accessibility:** Lower barriers to digital literacy with a scholarship format and clear expectations.
- **Clarity:** Communicate that training is introductory, not in-depth.
- **Ease of registration:** Embed a Google Form so learners can register and upload certification payment proof.
- **Trust:** Present professional branding, consistent UI, and a concise learner journey.

**Scope:**
- **Introductory only:** Practical basics, foundational skills (no advanced analytics, macros, or complex automation).
- **Virtual delivery:** Evening classes; learners provide their own internet access.
- **Certification fee:** Flat fee on completion; scholarship covers tuition.

---

## 2) Target audience and success criteria

**Audience:** Beginners and scholarship recipients seeking essential Microsoft skills for school, entry-level jobs, or community programs.

**Success criteria:**
- **Discoverability:** Users immediately grasp what MicroSavvy offers and that it’s introductory.
- **Conversion:** Registration flow is smooth; form completion without confusion.
- **Consistency:** Uniform header/footer, colors, and navigation across all pages.
- **Responsiveness:** Mobile-friendly layouts; readable on low-end devices.

---

## 3) Information architecture and pages

**Site map:**
- **Home (index.html):** Hero, brief mission, call-to-action to view courses and register.
- **About (about.html):** Scholarship goal, how it works, schedule, certification details, FAQs.
- **Courses (courses.html):** Course cards (Word, Excel, PowerPoint, Outlook), Register Now button + embedded Google Form.
- **Contact (contact.html):** WhatsApp button, email link, optional embedded contact form.

**Navigation flow:**
- **Entry:** Home → Courses
- **Decision:** Courses → Register (Google Form) → Confirmation
- **Support:** Contact available at all times from navbar/footer.

---

## 4) Content outlines

**Home:**
- **Hero:** Brand statement, scholarship mission, “Explore Courses” button.
- **Highlights:** Introductory scope, evening classes, certification fee note.
- **CTA:** Register Now (links to Google Form).

**About:**
- **Scholarship goal:** Accessibility, community impact.
- **Expectations:** Introductory only; what’s included vs. not included.
- **Delivery:** Virtual, evenings; learners bring data.
- **Certification:** Criteria and fee.
- **FAQs:** Common questions on schedule, tech requirements, and support.

**Courses:**
- **Course cards:** Short descriptions focused on basics.
- **Registration:** Direct button + embedded form for seamless flow.

**Contact:**
- **WhatsApp:** Quick question link.
- **Email:** mailto link with prefilled subject.
- **Optional form:** Google Form embed for messages.

---

## 5) Design system and branding

**Colors:**
- **Primary:** Navy `#1A2D4D`
- **Accent:** Emerald `#2FAE66`
- **Background:** Light gray/white `#f9f9f9`
- **Text:** Default navy `#1A2D4D`

**Typography:**
- **Headings:** Bold, clean sans-serif (e.g., Inter, Poppins, or system fonts).
- **Body:** High contrast, 16–18px base, 1.5 line-height.

**Logo sizing:**
- **Desktop:** Height ~50px, width auto, max-width 180–200px.
- **Mobile:** Height ~40px via media query.

**Components:**
- **Buttons:** Solid accent, hover state slightly darker or change to accent.
- **Cards:** Light background, subtle shadow, clear hierarchy.

---

## 6) Technical stack and structure

**Stack:** HTML5, CSS3, vanilla JS, Google Forms (registration), Netlify (deployment).

**Structure:**
```
microsavvy/
├── index.html
├── about.html
├── courses.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    └── logo.png
```

**Paths:** Use relative paths (e.g., `images/logo.png`, `css/style.css`) to ensure assets load on deployment.

---

## 7) Interactivity and accessibility

**Interactivity:**
- **Explore Courses button:** Smooth scroll or navigation.
- **Registration:** Google Form embed + external “Register Now” link.
- **Contact actions:** WhatsApp and email launch.

**Accessibility:**
- **Alt text:** Informative alt for images (e.g., “MicroSavvy logo”).
- **Color contrast:** Ensure WCAG-friendly contrast (navy/white).
- **Keyboard navigation:** Focus states on links and buttons.
- **Semantic HTML:** `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.

---

## 8) Testing and QA checklist

**Functional:**
- **Links:** All pages navigate correctly.
- **Images:** Logo and assets render everywhere.
- **Form:** Google Form opens and embeds correctly.

**Responsive:**
- **Mobile:** Check 360–414px widths.
- **Tablet:** Check ~768px.
- **Desktop:** Check 1280px+.

**Performance:**
- **Images:** Compressed assets.
- **CSS/JS:** Minimize unused code.

**Accessibility:**
- **Alt text:** Present and meaningful.
- **Focus states:** Visible.
- **Headings:** Logical order (H1→H2→H3).

---

## 9) Deployment instructions

**Netlify (recommended):**
1. **Drag-and-drop:** Upload the project folder to Netlify dashboard for instant deploy.
2. **Git integration:** Import from GitHub; auto-deploy on push.
3. **Domain:** Customize site name; add a custom domain if available.
4. **Verify:** Test on phone/laptop; confirm HTTPS padlock.

Alternative options: GitHub Pages, Vercel (if moving to Next.js later).

---

## 10) Maintenance plan and roadmap

**Routine updates:**
- **Content:** Batch times, course availability, FAQ adjustments.
- **Form:** Update Google Form link if changed.
- **Branding:** Iterative improvements to visuals.

**Future upgrades:**
- **Advanced modules:** Offer follow-on courses.
- **Custom registration:** Move from Google Forms to a lightweight backend if needed.
- **Analytics:** Track visits and conversion to registrations.

---

## 11) Risks and mitigations

**Broken asset paths:** Use relative paths and verify after deploy.
**Expectations mismatch:** Prominent “introductory only” notice on Home, About, and Courses.
**Form changes:** Keep a short URL and test embeds after edits.
**Support load:** Provide clear WhatsApp/email contact; set response expectations.

---

## 12) Changelog

- **v1.0:** Initial multipage site with scholarship description, Google Form registration, responsive header, and contact actions.
- **v1.1 (planned):** Add FAQs, hover states for nav, refine mobile spacing, compress images.
```
