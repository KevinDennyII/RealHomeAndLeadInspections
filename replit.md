# Overview

This is a professional one-page website for Real Home and Lead Inspections, LLC, a Baltimore-based home inspection service. The site is built with vanilla HTML, CSS, and JavaScript following modern web development practices. It features a responsive design with sections for services, scheduling (via Acuity integration), and contact information. The site is designed to be deployed on Netlify and requires integration with Acuity Scheduling for live booking functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Static Site Architecture**: Single-page application built with vanilla HTML5, CSS3, and JavaScript
- **Responsive Design**: Mobile-first approach using CSS Grid and Flexbox for layouts
- **Modern CSS Practices**: Implements CSS custom properties (CSS variables) for consistent theming and follows Josh Comeau's CSS principles
- **Performance Optimization**: Uses preconnected fonts, semantic HTML5 structure, and minimal JavaScript for fast loading

## Styling and Design System
- **Color Scheme**: Inspired by Rayville Property Management branding with primary blue (#2c5aa0) and supporting colors defined as CSS custom properties
- **Typography**: Inter font family with fallbacks to system fonts for optimal performance
- **Component-Based CSS**: Modular CSS structure with reusable components for buttons, cards, and layout containers

## JavaScript Functionality
- **Smooth Scrolling Navigation**: Custom implementation for internal page navigation
- **Event-Driven Architecture**: Uses modern DOM event handling for user interactions
- **Progressive Enhancement**: Core functionality works without JavaScript

## Development and Build Process
- **Local Development**: Uses http-server package for local development server
- **No Build Process**: Direct deployment of source files without compilation or bundling
- **Version Control Ready**: Clean project structure suitable for Git-based workflows

# External Dependencies

## Third-Party Services
- **Acuity Scheduling**: Primary booking system integration (requires manual setup by client)
  - Embedded iframe widget for appointment scheduling
  - Customizable to match brand colors and styling
  - Handles pricing display and email confirmations

## Fonts and Assets
- **Google Fonts**: Inter font family loaded via Google Fonts CDN with preconnect optimization
- **No External CSS Frameworks**: Custom CSS implementation without Bootstrap or similar frameworks

## Hosting and Deployment
- **Netlify**: Configured for deployment on Netlify platform
- **Static Hosting**: No server-side processing required, can be hosted on any static hosting service

## Development Dependencies
- **http-server**: Node.js package for local development server (npm dependency)
- **No Build Tools**: Direct file serving without webpack, gulp, or similar build systems

## Integration Requirements
- **Manual Acuity Setup**: Client must obtain embed code from their Acuity Scheduling account
- **Demo Widget Replacement**: Current implementation includes placeholder widget that needs replacement with live Acuity embed code