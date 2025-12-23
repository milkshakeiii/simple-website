# Planning Guide

A professional nonprofit website showcasing The Angola Partnership's mission to support English education in Huambo, Angola, making it easy for visitors to understand the impact and contribute to the cause.

**Experience Qualities**: 
1. **Trustworthy** - Professional design with clear mission statement and authentic photography builds credibility for donors
2. **Inspiring** - Compelling narratives about student dreams and opportunities evoke emotional connection to the cause
3. **Accessible** - Simple, clear navigation ensures all visitors can easily learn about and support the mission

**Complexity Level**: Content Showcase (information-focused) - This is a nonprofit information and awareness site focused on presenting the mission, impact, and donation opportunities in a clear, compelling manner.

## Essential Features

### Hero Section with Mission Statement
- **Functionality**: Large hero area with tagline and primary call-to-action
- **Purpose**: Immediately communicate the mission and inspire action
- **Trigger**: Page load
- **Progression**: View hero image → Read tagline "Helping Angolans thrive" → See primary CTA → Navigate deeper
- **Success criteria**: Clear value proposition visible within 3 seconds

### Mission & Impact Section
- **Functionality**: Detailed explanation of the work in Angola with statistics
- **Purpose**: Build understanding and credibility about the program
- **Trigger**: Scroll down from hero
- **Progression**: Read about Language Institute → Understand context (post-civil war Angola) → Learn about impact metrics (50 students, $22/month fees)
- **Success criteria**: Visitors understand what the organization does and why it matters

### Program Details Section
- **Functionality**: Information about the Language Institute, staff, and operational structure
- **Purpose**: Demonstrate transparency and local partnership
- **Trigger**: Continued scrolling
- **Progression**: Learn about IECA partnership → Meet key staff (Rev. Dr. Moma, Canadian teacher) → Understand cost structure
- **Success criteria**: Visitors see the organization as well-structured and accountable

### Photo Gallery Section
- **Functionality**: Display authentic photos from the Language Institute
- **Purpose**: Create emotional connection through visual storytelling
- **Trigger**: Scroll to gallery section
- **Progression**: View student and staff photos → Visualize the impact → Feel connected to beneficiaries
- **Success criteria**: Visitors engage with photos and feel inspired

### Contact/Donation Section
- **Functionality**: Clear contact information and call-to-action for donations
- **Purpose**: Convert interest into action (donations, inquiries)
- **Trigger**: Ready to contribute or learn more
- **Progression**: See donation opportunity → Find contact email → Take action
- **Success criteria**: Clear path to donate or get in touch

## Edge Case Handling
- **No Images Available**: Graceful fallbacks with color blocks if images fail to load
- **Long Text Content**: Proper text truncation and "read more" patterns for mobile
- **Email Links**: Clear mailto: links that open default email client
- **Mobile Navigation**: Hamburger menu or simplified nav for small screens
- **Slow Connections**: Progressive loading, optimized images

## Design Direction
The design should feel warm, professional, and hopeful—reflecting African culture through earthy tones while maintaining nonprofit credibility. It should inspire trust and compassion without feeling overly corporate or too casual.

## Color Selection

**Primary Color**: Warm terracotta/burnt sienna (oklch(0.62 0.14 35)) - Evokes African earth tones, warmth, and authenticity
**Secondary Colors**: 
- Soft cream/beige (oklch(0.95 0.01 85)) for backgrounds - Creates warmth without stark white
- Deep brown (oklch(0.35 0.04 45)) for text - Professional and readable, warmer than pure black
**Accent Color**: Vibrant teal/turquoise (oklch(0.65 0.13 195)) - Represents hope, education, and opportunity; provides energetic contrast
**Foreground/Background Pairings**:
- Primary terracotta (oklch(0.62 0.14 35)): White text (oklch(0.98 0 0)) - Ratio 5.2:1 ✓
- Accent teal (oklch(0.65 0.13 195)): White text (oklch(0.98 0 0)) - Ratio 5.8:1 ✓
- Cream background (oklch(0.95 0.01 85)): Deep brown text (oklch(0.35 0.04 45)) - Ratio 8.1:1 ✓
- White background: Primary terracotta text - Ratio 5.2:1 ✓

## Font Selection
The typography should feel modern yet approachable, professional yet warm—suitable for a nonprofit mission with global reach.

**Typographic Hierarchy**:
- H1 (Hero Tagline): Playfair Display Bold/56px/tight line-height - Elegant serif conveys trustworthiness and tradition
- H2 (Section Headers): Playfair Display Semibold/36px/1.2 line-height - Maintains visual hierarchy
- H3 (Subsections): Work Sans Semibold/24px/1.3 line-height - Sans-serif for readability
- Body Text: Work Sans Regular/18px/1.6 line-height - Clean, highly readable for longer content
- Small Text/Captions: Work Sans Regular/14px/1.5 line-height - Maintains legibility at smaller sizes

## Animations
Animations should be purposeful and understated, enhancing the experience without distraction. Use subtle entrance animations (fade-in, slide-up) for sections as they come into view, gentle hover states on interactive elements (buttons, cards), and smooth scroll behavior for navigation links. All animations should feel organic and respectful of the serious mission while maintaining a sense of hope and forward movement.

## Component Selection

**Components**:
- **Button**: Primary CTAs for donations and contact - use filled variant with primary color, secondary variant with outline for less critical actions
- **Card**: For program statistics, staff bios, and impact metrics - subtle shadow, rounded corners matching theme
- **Badge**: For highlighting key statistics (50 students, $22/month) - use accent color
- **Separator**: Between major sections - subtle, using muted color
- **Scroll Area**: If needed for longer content sections on mobile

**Customizations**:
- **Hero Image Card**: Custom full-width hero component with overlay gradient for text readability
- **Stat Counter**: Custom component displaying key metrics with accent color highlights
- **Photo Grid**: Custom responsive grid layout for gallery images
- **Donation CTA Box**: Custom highlighted card component with accent border

**States**:
- Buttons: Default (solid with shadow), hover (slight scale and brightness increase), active (slight press effect), focus (ring in accent color)
- Links: Default (primary color), hover (accent color with underline), visited (slightly muted)
- Cards: Default (subtle shadow), hover (elevated shadow, slight lift)

**Icon Selection**:
- GraduationCap (education/learning)
- Globe (global impact/English language)
- Users (community/students)
- Heart (donation/support)
- Mail (contact)
- BookOpen (reading/education)

**Spacing**:
- Section padding: py-16 md:py-24
- Container max-width: max-w-6xl
- Content spacing: space-y-8 for major sections, space-y-4 for related content
- Card padding: p-6 md:p-8
- Button padding: px-8 py-4

**Mobile**:
- Single column layout on mobile, 2-3 columns on tablet/desktop
- Stack hero content vertically on mobile
- Simplified navigation with mobile menu
- Larger tap targets (min 44x44px) for all interactive elements
- Reduced font sizes (H1: 36px, H2: 28px, Body: 16px on mobile)
- Adjusted spacing (py-8 md:py-16 for sections)
