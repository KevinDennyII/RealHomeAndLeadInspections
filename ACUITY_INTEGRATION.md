# Acuity Scheduling Integration Instructions

## Quick Setup Steps

1. **Log into your Acuity Scheduling account**
   - Go to your Acuity dashboard

2. **Get the Embed Code**
   - Navigate to Business Settings > Embed Code
   - Customize the widget appearance to match your brand colors
   - Set the widget height to 800px for optimal display
   - Copy the provided embed code

3. **Update the Website**
   - Open `index.html` in your code editor
   - Find the comment section starting with "ACUITY SCHEDULING INTEGRATION:"
   - Replace the entire comment block AND the `<div class="acuity-demo-widget">` section with your Acuity embed code

## Example Integration

Replace this entire section in `index.html`:
```html
<!-- ACUITY SCHEDULING INTEGRATION comment section -->
<div class="acuity-demo-widget">
    <!-- All demo widget content -->
</div>
```

With your Acuity embed code, which typically looks like:
```html
<iframe src="https://app.acuityscheduling.com/schedule.php?owner=XXXXXX" 
        width="100%" 
        height="800" 
        frameBorder="0">
</iframe>
<script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
```

## Styling Notes

- The current CSS is designed to work seamlessly with Acuity's embedded widget
- The `.scheduler-container` class provides the perfect frame for the widget
- Widget will automatically match the site's responsive design
- If you need custom styling, add CSS rules targeting the iframe element

## Testing

After integration:
1. Test booking flow on desktop and mobile
2. Verify pricing displays correctly
3. Confirm email confirmations are working
4. Test the entire user journey from site visit to booking confirmation

## Support

If you encounter any issues with the Acuity integration, refer to their documentation at: https://acuityscheduling.com/support