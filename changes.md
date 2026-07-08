# Project Changes Log


## Premium Interactivity & Styling Enhancements

We introduced physics-based interactions and smooth scroll physics to elevate the site's overall user experience.

### 1. New Dependencies
- Added `lenis` for high-performance inertia smooth scrolling.

### 2. New Components
- **[NEW] SmoothScroll.tsx**: Initializes Lenis and provides RAF loop for smooth scroll tracking.
- **[NEW] Magnetic.tsx**: Reusable Framer Motion wrapper that implements spring-based magnetic attraction to the mouse cursor on hover.

### 3. Modifications
- **[MODIFY] layout.tsx**:
  - Imported and integrated `<SmoothScroll>` around page content to enable smooth scroll page-wide.
- **[MODIFY] Navbar.tsx**:
  - Refined the header background transition on scroll to use a smooth frosted glass backdrop filter (`backdrop-blur-xl`), border, and subtle shadow instead of a simple solid color.
  - Wrapped header navigation links and the mobile menu trigger in `<Magnetic>` tags to add cursor attraction.
- **[MODIFY] ContactForm.tsx**:
  - Wrapped the form's submit button in a `<Magnetic>` wrapper to add dynamic hover feedback.

---

## UI Header Logo Integration

- **[NEW] logo-transparent.png**: Copied the transparent background version of the WDE logo into the public assets directory.
- **[MODIFY] Navbar.tsx**:
  - Replaced the text brand name ("Wedding Documentary Events") with the new circular graphical WDE logo.
  - Used `logo-transparent.png` to ensure native alpha transparency.
  - Applied CSS filters (`invert`, `contrast`, `brightness`) to make the dark navy elements of the logo light-colored so they stand out cleanly against the dark header theme.

---

## Logo Update & Page Transition Loader

- **[NEW] wde-logo-2.png**: Added the exact requested WDE logo provided by the user.
- **[NEW] wde-logo-3.png**: Added `logo 3.png` for use in the cinematic sequence.
- **[MODIFY] Navbar.tsx**: Updated the logo source to the new `wde-logo-2.png` and increased the logo dimensions significantly for much better visibility across all devices. Removed CSS filters to preserve the logo's original intended appearance. Also added a dark gradient overlay before scrolling to improve contrast against the video background.
- **[MODIFY] template.tsx**: Created a top-level Framer Motion layout template acting as a page transition loader. 
  - **Conditional Logic**: Integrated `sessionStorage` and `usePathname`.
  - **Full Sequence**: On the user's first visit, or whenever clicking the header logo to return to the homepage, a full cinematic sequence plays where `logo.png` zooms in/out, followed immediately by `logo 3.png` zooming in/out.
  - **Short Sequence**: Clicking any other navigation links plays the sleek, 3D flip animation of `logo.png` on a blurred background.

---

## WhatsApp Widget, SEO & Performance Upgrades

- **[NEW] WhatsAppWidget.tsx**: Created an interactive floating chat widget styled specifically for **WDE Studio**. It opens a custom glassmorphic chat window showing a welcome message, 3 custom action links (Package Details, Date Availability, Chat with Expert), and a final "Continue on WhatsApp" CTA. The trigger is wrapped in a `<Magnetic>` hover element.
- **[MODIFY] layout.tsx**:
  - Imported and rendered `<WhatsAppWidget />` globally.
  - Injected structured JSON-LD schema (`LocalBusiness`) into the `<head>` to boost local search rankings and discoverability.
- **[MODIFY] Portfolio.tsx**, **[Navbar.tsx]**, **[template.tsx]**: Optimized performance and layout shifting by adding responsive `sizes` attributes to `<Image>` components, preventing full-scale desktop assets from loading on mobile viewports.
