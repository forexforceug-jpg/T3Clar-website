// All website images in one place - easy to change
export const siteImages = {
  // Default/fallback
  default: '/jinja-cityscape.jpg',
  
  // Page-specific hero images
  home: '/jinja-cityscape.jpg',
  about: '/jinja-cityscape.jpg',
  services: '/jinja-cityscape.jpg',
  ecosystem: '/jinja-cityscape.jpg',
  projects: '/jinja-cityscape.jpg',
  partners: '/jinja-cityscape.jpg',
  packages: '/jinja-cityscape.jpg',
  careers: '/jinja-cityscape.jpg',
  contact: '/jinja-cityscape.jpg',
  
  // You can add more specific images later:
  // office: '/office.jpg',
  // team: '/team.jpg',
  // bridge: '/jinja-bridge.jpg',
  // cityNight: '/jinja-night.jpg',
}

// Hero overlay presets
export const heroOverlays = {
  // Left side heavy overlay, right side visible
  leftHeavy: {
    left: "from-white/95 via-white/80 via-50% to-white/10",
    imageOpacity: 0.5,
    height: "min-h-[60vh]"
  },
  // Very transparent right side
  transparent: {
    left: "from-white/95 via-white/70 via-50% to-transparent",
    imageOpacity: 0.7,
    height: "min-h-[60vh]"
  },
  // Balanced both sides
  balanced: {
    left: "from-white/90 via-white/60 via-50% to-white/30",
    imageOpacity: 0.5,
    height: "min-h-[60vh]"
  },
  // Darker overall for text readability
  readable: {
    left: "from-white/95 via-white/85 via-50% to-white/50",
    imageOpacity: 0.4,
    height: "min-h-[60vh]"
  },
}