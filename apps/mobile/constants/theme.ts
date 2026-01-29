export const Theme = {
  colors: {
    // --- CORE SURFACES ---
    background: '#FDFCFB',    // Pure archival paper
    surface: '#F5F2ED',       // Solid secondary surface (Sidebar/Inputs)
    surfaceFaded: 'rgba(242, 239, 233, 0.7)', // Glassmorphism for Top Bars
    
    // --- TEXT & INK ---
    ink: '#121212',           // Deepest charcoal
    inkFaded: '#71716A',      // Aged ink (for meta data)
    inkSubtle: '#B5B3AD',     // For placeholders/disabled states
    
    // --- BRAND & ACCENT ---
    accent: '#780001',        // Deep Oxblood Red (More premium than bright red)
    accentLight: '#FDF0F0',   // Wash for selected states
    accentGold: '#A68966',    // "Book Cloth" Gold for special highlights
    
    // --- FUNCTIONAL (DESTRUCTIVE / SUCCESS / WARN) ---
    // Muted "Gallery" tones rather than neon "Digital" tones
    success: '#3A5A40',       // Deep Forest Green (Success)
    warning: '#D4A373',       // Raw Sienna (Warning)
    destructive: '#BC4749',   // Dried Blood (Error/Delete)
    info: '#457B9D',          // Steel Blue (Information)

    // --- INTERFACE ELEMENTS ---
    tabBarBg: '#FFFFFF',      // Pure white to pop against paper background
    border: '#E8E4DE',        // Fine-line divider (Hairline width)
    glassBorder: 'rgba(255, 255, 255, 0.4)',
    shadow: 'rgba(18, 18, 18, 0.03)', // Extremely soft "Senior" shadow
  },
  
  fonts: {
    title: 'Fraunces-Bold',  
    body: 'Lora-Regular',
    bodyBold: 'Lora-Bold',
    mono: 'JetBrainsMono-Regular',
  },

  spacing: {
    xs: 4,
    sm: 10,
    md: 20,
    lg: 30,
    xl: 60,
    gutter: 24, 
  },

  typography: {
    h1: { 
        fontSize: 38, 
        lineHeight: 46, 
        fontFamily: 'Fraunces-Bold',
        letterSpacing: -0.5 
    },
    h2: { 
        fontSize: 24, 
        lineHeight: 32, 
        fontFamily: 'Fraunces-Bold' 
    },
    body: { 
        fontSize: 18, 
        lineHeight: 28, 
        fontFamily: 'Lora-Regular' 
    },
    label: { 
        fontSize: 10, 
        fontFamily: 'JetBrainsMono-Regular', 
        letterSpacing: 2,
        textTransform: 'uppercase' as const 
    },
    button: {
        fontSize: 14,
        fontFamily: 'JetBrainsMono-Regular',
        letterSpacing: 1,
    }
  },

  shadows: {
    premium: {
      shadowColor: '#121212',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.05,
      shadowRadius: 12,
      elevation: 2,
    }
  }
};