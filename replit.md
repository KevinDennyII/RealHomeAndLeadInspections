# Overview

This is a professional one-page website for Real Home and Lead Inspections, LLC, a Baltimore-based home inspection service. The site is built with vanilla HTML, CSS, and JavaScript following modern web development practices. It features a responsive design with sections for services, live Acuity Scheduling integration, and detailed contact information including license credentials. The site is deployed on Netlify via GitHub auto-deployment with zero build process required.

# Recent Changes (October 18, 2025)

- Added comprehensive contact information section with:
  - Phone number (443-266-3761) with clickable tel: link
  - "Fully licensed & insured" tagline
  - License credentials display:
    - MD Home Inspector License #35492
    - MHIC #145534
    - MDE Accredited Visual Lead Inspector 100132
  - Service area information
- Enhanced contact section styling with license info card
- Client instructed to customize Acuity Scheduling widget colors to match site design

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
- **Acuity Scheduling**: Fully integrated booking system (Owner ID: 15707908)
  - Embedded iframe widget for appointment scheduling
  - Handles pricing display and email confirmations automatically
  - Allows online payment processing

## Fonts and Assets
- **Google Fonts**: Inter font family loaded via Google Fonts CDN with preconnect optimization
- **No External CSS Frameworks**: Custom CSS implementation without Bootstrap or similar frameworks

## Hosting and Deployment
- **Netlify**: Configured for deployment on Netlify platform
- **Static Hosting**: No server-side processing required, can be hosted on any static hosting service

## Development Dependencies
- **http-server**: Node.js package for local development server (npm dependency)
- **No Build Tools**: Direct file serving without webpack, gulp, or similar build systems

## Completed Integrations
- **Acuity Scheduling**: Live booking system fully integrated and operational
- **OhhDenny Services Attribution**: Professional footer attribution with link to ohhdennyservices.com