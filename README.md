# Real Home and Lead Inspections, LLC Website

A clean, professional one-page website built with vanilla HTML, CSS, and JavaScript following modern web development practices.

## Current Status

✅ **Completed Features:**
- Responsive design matching Rayville Property Management branding
- Modern CSS following Josh Comeau's principles
- Semantic HTML5 structure
- Smooth scrolling navigation
- Service overview section
- Contact information section
- Mobile-first responsive design
- Accessibility features
- Ready for Netlify deployment

⚠️ **Requires Client Action:**
- **Acuity Scheduling Integration**: The scheduling section contains a demo widget that shows the intended functionality. To activate live booking, you need to replace the demo widget with your actual Acuity Scheduling embed code.

## Next Steps to Complete

### 1. Get Your Acuity Embed Code
1. Log into your Acuity Scheduling account
2. Navigate to Business Settings > Embed Code
3. Customize the widget to match your brand
4. Copy the provided embed code

### 2. Replace Demo Widget
In `index.html`, find this section (around line 88):
```html
<!-- TEMPORARY DEMO WIDGET - Replace with your Acuity embed code -->
<div class="acuity-demo-widget">
    <!-- Demo content -->
</div>
```

Replace the entire `<div class="acuity-demo-widget">` section with your Acuity embed code.

### 3. Test Integration
- Verify booking flow works on desktop and mobile
- Test pricing displays correctly  
- Confirm email confirmations function

## File Structure
```
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # Modern CSS with custom properties
├── js/
│   └── script.js          # Vanilla JavaScript for interactions
├── ACUITY_INTEGRATION.md  # Detailed integration instructions
└── README.md              # This file
```

## Deployment to Netlify

1. Push this code to a GitHub repository
2. Connect the repository to Netlify
3. Deploy (no build process needed - static files)
4. Add custom domain if desired

## Design Features

- **Color Scheme**: Matches Rayville Property Management branding
- **Typography**: Inter font family for modern, readable text
- **Layout**: CSS Grid and Flexbox for responsive layouts
- **Animations**: Smooth transitions and scroll-based animations
- **Accessibility**: Proper focus states, semantic HTML, ARIA labels

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Maintenance

The codebase is intentionally simple and well-documented for easy maintenance. All styles use CSS custom properties for consistent theming, and the JavaScript is modular and commented.