# SpendWise Dashboard

## Description
SpendWise is a financial budget tracker dashboard built using standard HTML5 and CSS3. The application features a clean layout structured with CSS Grid and Flexbox, providing a user interface for monitoring category expenses, recording new expenses, and viewing recent transaction histories.

## Key Features & Structure

1. **Dashboard Layout (CSS Grid):**
   - Main page structure designed using explicit CSS Grid areas (`sidebar`, `header`, `main`).
   - Uses zero absolute positioning for page layout control.

2. **Flexbox Alignment:**
   - Navigational links, header action items, category card headers, and input form controls are styled using Flexbox for balanced spacing and alignment.

3. **CSS Custom Properties (`:root` Variables):**
   - Color values (`--brand-color`, `--card-background`, `--primary-text-color`, etc.) are centralized in `:root` to maintain consistency across elements.

4. **Category Cards:**
   - Features 6 financial category cards: Food, Utilities, Entertainment, Transportation, Housing, and Savings.

5. **Responsiveness (< 768px):**
   - Utilizes a media query `@media (max-width: 768px)` that collapses the grid structure into a single-column layout for small screen sizes and mobile browsers.

6. **Card Micro-interactions:**
   - Category cards feature subtle 200ms `transform: translateY(-4px)` elevation and `box-shadow` depth animations triggered on both `:hover` and `:focus-within` states.

7. **Dark Theme Support:**
   - Implements native browser dark mode via `@media (prefers-color-scheme: dark)` by overriding `:root` color custom properties.