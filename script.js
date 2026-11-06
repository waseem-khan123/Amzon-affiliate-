/**
 * MobileGearX – Core JavaScript
 * Brand Tagline: Tech Review. Amazon Deals.
 * Description: Central data store, dynamic catalog rendering, search, filters,
 *              and Amazon affiliate link handlers.
 */

// Central Product Catalog (Demo Data for Amazon Affiliate Marketing)
const PRODUCTS_DATA = [
  {
    id: "earbuds-apexpods",
    name: "ApexPods Pro Wireless ANC Earbuds",
    category: "Wireless Earbuds",
    price: "$79.99",
    priceNum: 79.99,
    rating: 4.8,
    reviewCount: "2,840",
    image: "images/earbuds.svg",
    badge: "Editor's Choice",
    shortDesc: "Hybrid Active Noise Cancellation with transparency mode, 36-hour total battery life, and crystal-clear calls.",
    overview: "The ApexPods Pro delivers an exceptional wireless audio experience built for daily commuters and fitness enthusiasts alike. Featuring 11mm dynamic drivers and customized hybrid ANC, it effectively reduces ambient noise by up to 38dB. The comfortable ergonomic in-ear design ensures a secure seal, while Bluetooth 5.3 delivers ultra-low latency.",
    keyFeatures: [
      "Hybrid Active Noise Cancellation (-38dB depth)",
      "36 Hours total playback with USB-C quick-charge case",
      "Bluetooth 5.3 with multipoint device connection",
      "IPX7 water & sweat resistance for workouts",
      "4-mic AI call noise cancellation for crystal-clear conversations"
    ],
    specs: {
      "Driver Size": "11mm Dynamic Drivers",
      "Bluetooth Version": "5.3 (SBC, AAC codecs)",
      "Battery Life": "8 hrs (Earbuds) + 28 hrs (Case)",
      "Charging Time": "10 min charge = 2 hours playtime",
      "Water Resistance": "IPX7 Certified",
      "Weight": "4.6g per earbud"
    },
    pros: [
      "Top-tier active noise cancellation for the price",
      "Comfortable fit for long listening sessions",
      "Crisp treble and punchy bass response",
      "Fast charging USB-C case"
    ],
    cons: [
      "No wireless Qi charging support",
      "Companion app requires basic account setup"
    ],
    reviewSummary: "The ApexPods Pro stands out as our top recommendation for anyone seeking premium active noise cancellation without the $200+ flagship price tag. High build quality and long battery life make this an undeniable Amazon value.",
    amazonUrl: "https://www.amazon.com/dp/B08N5WRWNW?tag=mobilegearx-20"
  },
  {
    id: "earbuds-soundwave",
    name: "SoundWave Mini True Wireless Earbuds",
    category: "Wireless Earbuds",
    price: "$39.99",
    priceNum: 39.99,
    rating: 4.5,
    reviewCount: "1,420",
    image: "images/earbuds-mini.svg",
    badge: "Best Value",
    shortDesc: "Ultra-compact pocket earbuds with punchy bass, smart touch controls, and 24 hours of endurance.",
    overview: "Weighing only 3.8 grams per earbud, the SoundWave Mini offers pocket-sized portability without sacrificing sound quality. Equipped with 10mm titanium-coated drivers, you get crisp highs and satisfying low-end response, perfect for casual podcasts, runs, and audiobooks.",
    keyFeatures: [
      "Featherlight 3.8g ultra-compact pill design",
      "24-Hour combined battery life with pocket case",
      "Intuitive smart touch controls for tracks and volume",
      "Auto-connect pairing as soon as the case opens",
      "IPX5 splash-proof protection against rain and sweat"
    ],
    specs: {
      "Driver Size": "10mm Titanium-Coated",
      "Bluetooth Version": "5.2",
      "Battery Life": "6 hrs per charge, 24 hrs total",
      "Charging Port": "USB Type-C",
      "Water Rating": "IPX5",
      "Weight": "3.8g (Single bud)"
    },
    pros: [
      "Extremely affordable entry point",
      "Tiny charging case fits anywhere",
      "Clear microphone performance indoors",
      "Instant automatic Bluetooth pairing"
    ],
    cons: [
      "No Active Noise Cancellation (passive isolation only)",
      "Touch sensors can be slightly sensitive"
    ],
    reviewSummary: "If you want a reliable backup pair of earbuds or a budget daily driver for workouts and commuting, the SoundWave Mini punches well above its modest price tag.",
    amazonUrl: "https://www.amazon.com/dp/B09ABC1001?tag=mobilegearx-20"
  },
  {
    id: "headphones-studiobeat",
    name: "StudioBeat Max ANC Over-Ear Headphones",
    category: "Headphones",
    price: "$129.99",
    priceNum: 129.99,
    rating: 4.7,
    reviewCount: "3,910",
    image: "images/headphones.svg",
    badge: "Top Rated",
    shortDesc: "Hi-Res certified audio over-ear headphones with 60-hour playtime, plush memory foam, and multi-mode ANC.",
    overview: "Built for travelers, creators, and work-from-home professionals, the StudioBeat Max delivers studio-grade acoustics. Custom 40mm silk-diaphragm drivers produce deep bass and crisp micro-details up to 40kHz. With 60 hours of continuous wireless playback, battery anxiety is completely eliminated.",
    keyFeatures: [
      "Hi-Res Audio Certified with dual 40mm dynamic drivers",
      "Up to 60 Hours battery life (45 Hours with ANC active)",
      "3 Hybrid ANC modes (Indoor, Outdoor, Travel)",
      "Ultra-plush protein leather memory foam earcups",
      "Fast charge: 5 minutes gives 4 hours of music"
    ],
    specs: {
      "Driver Diameter": "40mm Silk Diaphragm",
      "Frequency Response": "16Hz - 40,000Hz",
      "Battery Life": "60 hrs (ANC off) / 45 hrs (ANC on)",
      "Connection": "Bluetooth 5.3 + 3.5mm Aux Cable",
      "Charging": "USB Type-C Fast Charge",
      "Weight": "255 grams"
    },
    pros: [
      "Unmatched 60-hour battery life",
      "Superior comfort during 8+ hour work sessions",
      "Includes premium travel case & auxiliary cord",
      "Balanced EQ right out of the box"
    ],
    cons: [
      "Earcups get warm in humid climates",
      "Microphone sounds slightly muffled in windy areas"
    ],
    reviewSummary: "The StudioBeat Max is one of the most comfortable and capable over-ear headphones available under $150. A must-buy for students and frequent flyers.",
    amazonUrl: "https://www.amazon.com/dp/B08N5STUDIO?tag=mobilegearx-20"
  },
  {
    id: "headphones-aerosound",
    name: "AeroSound Wireless Gaming Headset",
    category: "Headphones",
    price: "$69.99",
    priceNum: 69.99,
    rating: 4.6,
    reviewCount: "890",
    image: "images/gaming-headset.svg",
    badge: "Gamer's Pick",
    shortDesc: "Ultra-low latency 2.4GHz wireless headset with 7.1 virtual surround sound and detachable noise-canceling boom mic.",
    overview: "The AeroSound wireless gaming headset delivers pinpoint directional audio cues for competitive gaming on PC, PlayStation, and mobile. Dual connectivity allows you to switch between high-speed 2.4GHz USB wireless dongle and Bluetooth 5.3 on the fly.",
    keyFeatures: [
      "Dual Wireless Mode (2.4GHz dongle + Bluetooth 5.3)",
      "Spatial 7.1 Virtual Surround Sound engine",
      "Broadcast-grade detachable cardioid microphone",
      "Cooling gel-infused breathable ear cushions",
      "35-Hour battery life with dynamic RGB lighting"
    ],
    specs: {
      "Wireless Type": "2.4GHz USB-C Dongle + Bluetooth 5.3",
      "Latency": "< 20ms over 2.4GHz",
      "Battery Life": "35 hours",
      "Compatibility": "PC, Mac, PS5, Switch, Android, iOS",
      "Weight": "280 grams",
      "Microphone": "Detachable Cardioid Boom"
    },
    pros: [
      "Virtually zero latency over 2.4GHz dongle",
      "Accurate directional footstep audio cues",
      "Glasses-friendly breathable ear cushions",
      "Detachable mic is great for mobile music use"
    ],
    cons: [
      "RGB lighting drains battery faster",
      "Dongle requires USB-A adapter for older consoles"
    ],
    reviewSummary: "Outstanding wireless gaming performance at half the price of major gaming brands. High comfort and low latency make this a great Amazon pickup.",
    amazonUrl: "https://www.amazon.com/dp/B09AERO123?tag=mobilegearx-20"
  },
  {
    id: "watch-chronofit",
    name: "ChronoFit Ultra Smartwatch",
    category: "Smart Watches",
    price: "$99.99",
    priceNum: 99.99,
    rating: 4.7,
    reviewCount: "1,750",
    image: "images/smartwatch.svg",
    badge: "Trending",
    shortDesc: "1.96-inch AMOLED always-on display, Bluetooth calling, GPS route tracking, and comprehensive health monitoring.",
    overview: "The ChronoFit Ultra is designed to be your all-day health companion and wrist assistant. With a brilliant 1.96\" AMOLED screen visible even under direct sunlight, it monitors heart rate, blood oxygen (SpO2), stress levels, and sleep stages 24/7. Built-in speaker and mic enable clear phone calls straight from your wrist.",
    keyFeatures: [
      "1.96\" HD AMOLED curved touch screen (410x502 resolution)",
      "Bluetooth calling with high-clarity speaker and microphone",
      "Multi-system satellite GPS tracking for outdoor runs",
      "12-Day typical battery life (6 days heavy use)",
      "100+ Sports modes with automatic workout detection"
    ],
    specs: {
      "Display": "1.96\" AMOLED, 60Hz, 1000 nits peak",
      "Sensors": "Optical Heart Rate, SpO2, Accelerometer, Barometer",
      "Battery Capacity": "380mAh (up to 12 days)",
      "Water Resistance": "5ATM (swim-proof up to 50m)",
      "Compatibility": "iOS 11.0+ & Android 7.0+",
      "Strap Size": "22mm Quick Release"
    },
    pros: [
      "Vibrant high-resolution AMOLED display",
      "Smooth phone calls directly from the watch",
      "Long battery life reduces charging hassle",
      "Extensive watch face customization in app"
    ],
    cons: [
      "GPS lock takes ~15 seconds outdoors",
      "Cannot reply with full custom keyboard on iOS"
    ],
    reviewSummary: "For under $100, the ChronoFit Ultra offers premium looks, an incredible screen, and reliable 10+ day battery life that easily beats big-name competitors.",
    amazonUrl: "https://www.amazon.com/dp/B08CHRONO9?tag=mobilegearx-20"
  },
  {
    id: "watch-pulsetracker",
    name: "PulseTracker V2 Fitness Watch",
    category: "Smart Watches",
    price: "$49.99",
    priceNum: 49.99,
    rating: 4.4,
    reviewCount: "1,120",
    image: "images/fitwatch.svg",
    badge: "Best Value",
    shortDesc: "Slim lightweight fitness tracker with 14-day battery, sleep stage scoring, and 50+ athletic modes.",
    overview: "The PulseTracker V2 is streamlined for those who want accurate health telemetry without the bulk of a full smartwatch. Its sleek capsule silhouette sits flush against your wrist, silently measuring resting heart rate, daily step counts, calorie burn, and restorative REM sleep.",
    keyFeatures: [
      "Slim 24g featherweight wrist profile",
      "14-Day uninterrupted battery on single charge",
      "Continuous 24/7 SpO2 and Heart Rate tracking",
      "Advanced sleep analysis with actionable insights",
      "5ATM water resistance for lap swimming"
    ],
    specs: {
      "Display": "1.47\" TFT Color Touchscreen",
      "Battery": "180mAh (14-day standby)",
      "Sensors": "3-Axis Accelerometer, PPG Heart Sensor",
      "Weight": "24g with strap",
      "Waterproof": "5ATM (50 meters)",
      "Sync": "Bluetooth Low Energy 5.1"
    },
    pros: [
      "Incredibly lightweight — you forget you are wearing it",
      "Two full weeks of battery life",
      "Intuitive companion mobile app",
      "Affordable fitness gift"
    ],
    cons: [
      "Uses connected smartphone GPS, not standalone GPS",
      "Smaller screen text compared to full smartwatches"
    ],
    reviewSummary: "A clean, functional, and budget-friendly activity tracker that focuses on the essentials: battery longevity, sleep metrics, and workout logging.",
    amazonUrl: "https://www.amazon.com/dp/B09PULSE22?tag=mobilegearx-20"
  },
  {
    id: "acc-maggrip",
    name: "MagGrip Magnetic Car Mount & Stand",
    category: "Mobile Accessories",
    price: "$24.99",
    priceNum: 24.99,
    rating: 4.8,
    reviewCount: "4,210",
    image: "images/car-mount.svg",
    badge: "Best Seller",
    shortDesc: "Strong 20-magnet MagSafe-compatible car air vent mount with 360-degree rotation and rock-solid clamp.",
    overview: "The MagGrip magnetic mount secures your smartphone instantly without clumsy clamps. Equipped with 20 military-grade N52 neodymium magnets, your device remains rock-steady over speed bumps, potholes, and sharp highway curves.",
    keyFeatures: [
      "20x Ultra-strong N52 Neodymium magnet array",
      "Universal steel hook air vent clamp mechanism",
      "360-degree ball joint for landscape and portrait angles",
      "MagSafe compatible out of the box (includes metal rings for non-MagSafe devices)",
      "One-handed snap-on and release design"
    ],
    specs: {
      "Magnet Type": "20x N52 Neodymium",
      "Hold Force": "Up to 5.5 lbs (2.5 kg)",
      "Mounting Mechanism": "Twist-lock Steel Air Vent Hook",
      "Rotation": "Full 360° Free Angle",
      "Material": "Aviation-grade Aluminum Alloy & Silicone"
    },
    pros: [
      "Rock-solid vent grip that won't fall out",
      "Strong magnetic hold even through thick phone cases",
      "Minimalist footprint looks sleek on any dashboard",
      "Includes 2 metal conversion rings for Android phones"
    ],
    cons: [
      "Does not fit circular rotary air vents well",
      "Passive mount only (does not provide wireless charging)"
    ],
    reviewSummary: "The most dependable magnetic car mount we have tested. Twist-lock security and powerful magnets make this an indispensable travel companion.",
    amazonUrl: "https://www.amazon.com/dp/B08MAGGRIP?tag=mobilegearx-20"
  },
  {
    id: "acc-armorshield",
    name: "ArmorShield 3-in-1 Phone Protection Kit",
    category: "Mobile Accessories",
    price: "$19.99",
    priceNum: 19.99,
    rating: 4.5,
    reviewCount: "2,340",
    image: "images/phone-case.svg",
    badge: "Value Bundle",
    shortDesc: "Military-grade drop-tested hybrid case with integrated aluminum kickstand and two 9H tempered glass screen protectors.",
    overview: "Get comprehensive 360-degree protection with ArmorShield. The dual-layer polycarbonate and TPU bumper absorbs shock from drops up to 10 feet. An integrated aerospace-grade aluminum kickstand lets you prop your phone in portrait for FaceTime or landscape for movies.",
    keyFeatures: [
      "10-Foot Military Drop Protection (MIL-STD-810G)",
      "Heavy-duty built-in adjustable kickstand (0° to 60°)",
      "Includes 2x 9H hardness tempered glass screen protectors",
      "Raised 1.5mm screen lip and 2.0mm camera bezel",
      "Textured anti-slip side grips prevent accidental drops"
    ],
    specs: {
      "Protection Standard": "MIL-STD-810G Drop Certified",
      "Kickstand": "Aerospace Aluminum Hinge",
      "Included Accessories": "2x 9H Tempered Glass + Alignment Frame",
      "Thickness": "2.4mm profile"
    },
    pros: [
      "Complete package includes case and screen protectors",
      "Kickstand works reliably in both orientations",
      "Tactile, responsive button covers",
      "Resists yellowing and finger smudges"
    ],
    cons: [
      "Adds slight bulk to slim phones",
      "Kickstand can make wireless charging slightly finicky"
    ],
    reviewSummary: "A sturdy, well-engineered protection bundle that saves you the cost of buying screen protectors separately. Outstanding durability for daily life.",
    amazonUrl: "https://www.amazon.com/dp/B09ARMOR31?tag=mobilegearx-20"
  },
  {
    id: "charger-voltcharge",
    name: "VoltCharge 65W GaN Fast Wall Charger",
    category: "Chargers",
    price: "$34.99",
    priceNum: 34.99,
    rating: 4.9,
    reviewCount: "5,600",
    image: "images/gan-charger.svg",
    badge: "Editor's Choice",
    shortDesc: "Compact 3-port GaN III fast charger capable of powering a laptop, phone, and tablet simultaneously.",
    overview: "Harnessing next-generation Gallium Nitride (GaN III) semiconductor technology, the VoltCharge 65W is 50% smaller than standard manufacturer laptop bricks. With 2 USB-C ports and 1 USB-A port, it dynamically balances power output so you can charge your MacBook, iPhone, and AirPods with just one wall plug.",
    keyFeatures: [
      "65W Max Power Delivery with GaN III semiconductors",
      "3-Port Charging: 2x USB-C + 1x USB-A",
      "Powers laptops (MacBook Pro/Air, Dell XPS, ThinkPad)",
      "Foldable travel prongs for compact suitcase storage",
      "Smart dynamic power distribution & over-heat safety sensors"
    ],
    specs: {
      "Total Wattage": "65W Maximum",
      "Ports": "2x USB-C PD 3.0, 1x USB-A QC 3.0",
      "Input": "100-240V ~ 50/60Hz (Worldwide travel ready)",
      "Dimensions": "2.1 x 1.6 x 1.2 inches",
      "Safety Certifications": "UL, FCC, CE, RoHS"
    },
    pros: [
      "Replaces multiple bulky chargers in one plug",
      "Stays surprisingly cool even under sustained 65W load",
      "Foldable wall prongs prevent scratching other gear",
      "Wide compatibility with Apple, Samsung, and laptops"
    ],
    cons: [
      "Brief 1-second renegotiation pause when plugging a 2nd device",
      "USB-C charging cable sold separately"
    ],
    reviewSummary: "The single best travel and desk charger you can purchase on Amazon. It handles virtually any personal device while taking up minimal wall space.",
    amazonUrl: "https://www.amazon.com/dp/B08VOLT65W?tag=mobilegearx-20"
  },
  {
    id: "charger-powercore",
    name: "PowerCore 20000mAh Ultra-Slim Power Bank",
    category: "Chargers",
    price: "$42.99",
    priceNum: 42.99,
    rating: 4.8,
    reviewCount: "3,180",
    image: "images/powerbank.svg",
    badge: "Top Pick",
    shortDesc: "High-capacity 22.5W two-way fast charging portable battery with real-time LED digital percentage display.",
    overview: "Never be stranded with a dead battery again. The PowerCore 20,000mAh packs enough power to recharge an iPhone 15 up to 4.5 times or a Galaxy S24 up to 3.8 times. The precision digital screen displays exact battery percentage remaining, eliminating guesswork.",
    keyFeatures: [
      "Colossal 20,000mAh capacity (Airline TSA approved under 100Wh)",
      "22.5W High-Speed PD and QC 3.0 fast charging",
      "Crystal-clear digital LED screen showing exact percentage",
      "Charge up to 3 devices concurrently (2x USB-A + 1x USB-C)",
      "MultiProtect 11-point safety system against short circuits"
    ],
    specs: {
      "Capacity": "20,000mAh / 74Wh (TSA Approved)",
      "Output": "USB-C (22.5W max), 2x USB-A (18W max)",
      "Input": "USB-C (18W fast recharge)",
      "Dimensions": "5.6 x 2.7 x 1.0 inches",
      "Weight": "385 grams"
    },
    pros: [
      "Huge capacity easily lasts an entire weekend camping trip",
      "Accurate percentage indicator instead of vague 4-dot lights",
      "TSA carry-on flight approved",
      "Fast charges phones up to 55% in 30 minutes"
    ],
    cons: [
      "Heavier than 10,000mAh compact models",
      "Takes about 5.5 hours to fully recharge the bank"
    ],
    reviewSummary: "High capacity, fast output, and an informative digital readout make the PowerCore 20000mAh our premier recommendation for heavy travelers and commuters.",
    amazonUrl: "https://www.amazon.com/dp/B09CORE20K?tag=mobilegearx-20"
  },
  {
    id: "comp-ergoglide",
    name: "ErgoGlide Wireless Ergonomic Mouse",
    category: "Computer Accessories",
    price: "$39.99",
    priceNum: 39.99,
    rating: 4.7,
    reviewCount: "2,150",
    image: "images/mouse.svg",
    badge: "Ergo Choice",
    shortDesc: "57-degree natural handshake angle mouse with whisper-quiet clicks, 4000 DPI sensor, and multi-device pairing.",
    overview: "Relieve forearm strain and wrist fatigue with the ErgoGlide. Designed according to scientific ergonomics, its 57-degree vertical tilt places your hand in a natural handshake posture. Enjoy silent switches, smooth navigation wheels, and seamless switching between laptop and desktop.",
    keyFeatures: [
      "Scientifically contoured 57-degree vertical ergonomic angle",
      "90% Whisper-quiet click switches for quiet office environments",
      "Dual connectivity: Bluetooth 5.0 + 2.4GHz USB wireless receiver",
      "Adjustable 800 - 4000 DPI optical sensor for precision tracking",
      "Rechargeable battery lasts up to 3 months on single charge"
    ],
    specs: {
      "Sensor": "High-precision Optical (800/1200/2400/4000 DPI)",
      "Connectivity": "Bluetooth 5.0 & 2.4GHz Wireless (up to 3 devices)",
      "Battery": "500mAh Lithium Rechargeable (USB-C)",
      "Battery Life": "Up to 90 days per charge",
      "Weight": "115 grams",
      "Hand Orientation": "Right-Handed"
    },
    pros: [
      "Instantly relieves wrist tension during long computer work",
      "Silent click switches are ideal for shared spaces",
      "Built-in rechargeable battery (no AA batteries needed)",
      "Smooth thumb scroll wheel and forward/back buttons"
    ],
    cons: [
      "Takes 1-2 days to adapt to vertical grip",
      "Right-hand orientation only (no left-hand variant)"
    ],
    reviewSummary: "If you spend more than 4 hours a day at your desk, the ErgoGlide is one of the most effective and affordable wrist-health investments you can make.",
    amazonUrl: "https://www.amazon.com/dp/B08ERGO400?tag=mobilegearx-20"
  },
  {
    id: "comp-mechkey",
    name: "MechKey Pro 75% Mechanical Keyboard",
    category: "Computer Accessories",
    price: "$89.99",
    priceNum: 89.99,
    rating: 4.8,
    reviewCount: "1,640",
    image: "images/keyboard.svg",
    badge: "Staff Favorite",
    shortDesc: "Hot-swappable custom mechanical keyboard with gasket mount, sound-dampening foam, and multi-mode wireless.",
    overview: "The MechKey Pro brings enthusiast-grade typing acoustics to an accessible price point. Features a compact 75% layout that preserves arrow keys while saving desk space for your mouse. Built with pre-lubed mechanical switches, factory sound-dampening silicone, and a multi-function metal volume knob.",
    keyFeatures: [
      "Compact 75% layout (82 keys + metal rotary knob)",
      "Gasket mounted structure with multi-layer acoustic dampening",
      "Hot-swappable PCB compatible with 3-pin and 5-pin switches",
      "Tri-mode connectivity: Bluetooth 5.1, 2.4GHz wireless, USB-C wired",
      "Double-shot PBT keycaps resistant to shine and oils"
    ],
    specs: {
      "Layout": "75% ANSI with Volume Rotary Knob",
      "Switches": "Pre-lubed Linear Red / Tactile Brown options",
      "Keycaps": "OEM Profile Double-Shot PBT",
      "Battery": "4000mAh Rechargeable (up to 200 hours backlight off)",
      "Lighting": "South-facing RGB with 18 dynamic effects",
      "Weight": "890 grams"
    },
    pros: [
      "Incredible out-of-the-box deep 'thocky' acoustic sound",
      "Metal volume knob provides tactile media control",
      "Long-lasting 4000mAh battery",
      "Compatible with Mac and Windows layout toggles"
    ],
    cons: [
      "Substantial weight makes it less portable",
      "RGB software is Windows only (onboard lighting controls work on all OS)"
    ],
    reviewSummary: "Delivers the premium feel, sound, and build of a $200 custom mechanical keyboard at an unbeatable price point on Amazon.",
    amazonUrl: "https://www.amazon.com/dp/B09MECH75K?tag=mobilegearx-20"
  }
];

// -------------------------------------------------------------
// Utility Functions
// -------------------------------------------------------------

/**
 * Generate Star Rating HTML string
 */
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.4;
  let starsHtml = '';
  
  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<span class="star filled">★</span>';
  }
  if (hasHalf) {
    starsHtml += '<span class="star half">★</span>';
  }
  const remaining = 5 - Math.ceil(rating);
  for (let i = 0; i < remaining; i++) {
    starsHtml += '<span class="star empty">☆</span>';
  }
  return starsHtml;
}

/**
 * Build Single Product Card HTML
 */
function createProductCardHTML(product) {
  return `
    <article class="product-card" data-category="${product.category}" data-id="${product.id}">
      <div class="card-badge-wrap">
        <span class="product-category-pill">${product.category}</span>
        ${product.badge ? `<span class="badge ${product.badge.toLowerCase().replace(/[^a-z0-9]/g, '-')}">${product.badge}</span>` : ''}
      </div>
      <div class="card-image-box">
        <a href="product-view.html?id=${encodeURIComponent(product.id)}" title="${product.name}">
          <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
        </a>
      </div>
      <div class="card-content">
        <h3 class="product-title">
          <a href="product-view.html?id=${encodeURIComponent(product.id)}">${product.name}</a>
        </h3>
        <div class="rating-box">
          <div class="stars">${renderStars(product.rating)}</div>
          <span class="rating-number">${product.rating}</span>
          <span class="review-count">(${product.reviewCount})</span>
        </div>
        <p class="product-desc">${product.shortDesc}</p>
        <div class="price-box">
          <span class="price-label">Amazon Price:</span>
          <span class="price-val">${product.price}</span>
        </div>
        <div class="card-actions">
          <a href="product-view.html?id=${encodeURIComponent(product.id)}" class="btn btn-outline">
            View Details
          </a>
          <a href="${product.amazonUrl}" target="_blank" rel="noopener noreferrer sponsored" class="btn btn-amazon" title="Check Current Price on Amazon">
            <svg class="cart-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            Buy on Amazon
          </a>
        </div>
      </div>
    </article>
  `;
}

// -------------------------------------------------------------
// Global Navigation & Search
// -------------------------------------------------------------

function initGlobalNav() {
  // Mobile Hamburger Toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNav');
  
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('nav-open');
      const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !expanded);
    });
  }

  // Global Header Search Bar
  const searchForms = document.querySelectorAll('.header-search-form');
  searchForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="search"]');
      const query = input ? input.value.trim() : '';
      if (query) {
        window.location.href = `products.html?search=${encodeURIComponent(query)}`;
      } else {
        window.location.href = `products.html`;
      }
    });
  });

  // Highlight Current Nav Item
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// -------------------------------------------------------------
// Home Page Handler
// -------------------------------------------------------------

function initHomePage() {
  const featuredContainer = document.getElementById('featuredProductsGrid');
  if (!featuredContainer) return;

  // Select 6 featured products
  const featured = PRODUCTS_DATA.slice(0, 6);
  featuredContainer.innerHTML = featured.map(createProductCardHTML).join('');
}

// -------------------------------------------------------------
// Products Page Handler (Search, Category Filters, Sorting)
// -------------------------------------------------------------

function initProductsPage() {
  const catalogGrid = document.getElementById('productsCatalogGrid');
  if (!catalogGrid) return;

  const searchInput = document.getElementById('catalogSearchInput');
  const categoryButtons = document.querySelectorAll('.cat-pill');
  const sortSelect = document.getElementById('sortSelect');
  const resultCount = document.getElementById('resultCount');
  const emptyState = document.getElementById('emptyState');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');

  // Read URL query params
  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get('category') || 'All';
  let activeSearch = urlParams.get('search') || '';

  if (searchInput && activeSearch) {
    searchInput.value = activeSearch;
  }

  // Set active class on category buttons
  function updateCategoryPillUI() {
    categoryButtons.forEach(btn => {
      const cat = btn.getAttribute('data-category');
      if (cat.toLowerCase() === activeCategory.toLowerCase()) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Filter & Sort Logic
  function applyFiltersAndRender() {
    let filtered = PRODUCTS_DATA.filter(prod => {
      // Category match
      const matchCat = (activeCategory === 'All') || 
                       (prod.category.toLowerCase() === activeCategory.toLowerCase());
      
      // Keyword match (name, desc, category)
      const q = activeSearch.toLowerCase();
      const matchSearch = !q || 
        prod.name.toLowerCase().includes(q) || 
        prod.shortDesc.toLowerCase().includes(q) || 
        prod.category.toLowerCase().includes(q);

      return matchCat && matchSearch;
    });

    // Apply Sorting
    const sortVal = sortSelect ? sortSelect.value : 'default';
    if (sortVal === 'price-low') {
      filtered.sort((a, b) => a.priceNum - b.priceNum);
    } else if (sortVal === 'price-high') {
      filtered.sort((a, b) => b.priceNum - a.priceNum);
    } else if (sortVal === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    // Render Count
    if (resultCount) {
      resultCount.textContent = `Showing ${filtered.length} of ${PRODUCTS_DATA.length} products`;
    }

    // Render Cards or Empty State
    if (filtered.length === 0) {
      catalogGrid.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
    } else {
      if (emptyState) emptyState.style.display = 'none';
      catalogGrid.innerHTML = filtered.map(createProductCardHTML).join('');
    }
  }

  // Category Pill Click
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.getAttribute('data-category');
      updateCategoryPillUI();
      applyFiltersAndRender();
    });
  });

  // Search Input live typing
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeSearch = e.target.value.trim();
      applyFiltersAndRender();
    });
  }

  // Sort Dropdown
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      applyFiltersAndRender();
    });
  }

  // Reset Filters
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      activeCategory = 'All';
      activeSearch = '';
      if (searchInput) searchInput.value = '';
      if (sortSelect) sortSelect.value = 'default';
      updateCategoryPillUI();
      applyFiltersAndRender();
    });
  }

  // Initial render
  updateCategoryPillUI();
  applyFiltersAndRender();
}

// -------------------------------------------------------------
// Product Details Page Handler (Dynamic by URL ID)
// -------------------------------------------------------------

function initProductViewPage() {
  const viewContainer = document.getElementById('productViewSection');
  if (!viewContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  // Find product by id, fallback to first product
  let product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) {
    product = PRODUCTS_DATA[0];
  }

  // Update Page Title
  document.title = `${product.name} Review & Specs | MobileGearX`;

  // Update Breadcrumbs
  const breadcrumbCategory = document.getElementById('viewBreadcrumbCategory');
  const breadcrumbProduct = document.getElementById('viewBreadcrumbProduct');
  if (breadcrumbCategory) {
    breadcrumbCategory.textContent = product.category;
    breadcrumbCategory.href = `products.html?category=${encodeURIComponent(product.category)}`;
  }
  if (breadcrumbProduct) {
    breadcrumbProduct.textContent = product.name;
  }

  // Main Product Info
  const viewImg = document.getElementById('viewProductImage');
  const viewTitle = document.getElementById('viewProductTitle');
  const viewBadge = document.getElementById('viewProductBadge');
  const viewCategory = document.getElementById('viewProductCategory');
  const viewRatingStars = document.getElementById('viewRatingStars');
  const viewRatingScore = document.getElementById('viewRatingScore');
  const viewReviewCount = document.getElementById('viewReviewCount');
  const viewPrice = document.getElementById('viewProductPrice');
  const viewShortDesc = document.getElementById('viewProductShortDesc');
  const viewAmazonBtn = document.getElementById('viewAmazonBtn');
  const viewOverview = document.getElementById('viewProductOverview');
  const viewFeaturesList = document.getElementById('viewKeyFeaturesList');
  const viewSpecsTable = document.getElementById('viewSpecsTable');
  const viewProsList = document.getElementById('viewProsList');
  const viewConsList = document.getElementById('viewConsList');
  const viewReviewSummary = document.getElementById('viewReviewSummary');

  if (viewImg) {
    viewImg.src = product.image;
    viewImg.alt = product.name;
  }
  if (viewTitle) viewTitle.textContent = product.name;
  if (viewCategory) viewCategory.textContent = product.category;
  if (viewBadge) {
    if (product.badge) {
      viewBadge.textContent = product.badge;
      viewBadge.style.display = 'inline-block';
    } else {
      viewBadge.style.display = 'none';
    }
  }

  if (viewRatingStars) viewRatingStars.innerHTML = renderStars(product.rating);
  if (viewRatingScore) viewRatingScore.textContent = product.rating;
  if (viewReviewCount) viewReviewCount.textContent = `(${product.reviewCount} customer reviews)`;
  if (viewPrice) viewPrice.textContent = product.price;
  if (viewShortDesc) viewShortDesc.textContent = product.shortDesc;

  if (viewAmazonBtn) {
    viewAmazonBtn.href = product.amazonUrl;
  }

  if (viewOverview) {
    viewOverview.textContent = product.overview;
  }

  // Key Features
  if (viewFeaturesList && product.keyFeatures) {
    viewFeaturesList.innerHTML = product.keyFeatures
      .map(feat => `<li><span class="check-icon">✓</span> <span>${feat}</span></li>`)
      .join('');
  }

  // Specs Table
  if (viewSpecsTable && product.specs) {
    viewSpecsTable.innerHTML = Object.entries(product.specs)
      .map(([key, val]) => `
        <tr>
          <th>${key}</th>
          <td>${val}</td>
        </tr>
      `).join('');
  }

  // Pros & Cons
  if (viewProsList && product.pros) {
    viewProsList.innerHTML = product.pros
      .map(pro => `<li><span class="pro-tag">+</span> <span>${pro}</span></li>`)
      .join('');
  }
  if (viewConsList && product.cons) {
    viewConsList.innerHTML = product.cons
      .map(con => `<li><span class="con-tag">-</span> <span>${con}</span></li>`)
      .join('');
  }

  // Review Summary
  if (viewReviewSummary) {
    viewReviewSummary.textContent = product.reviewSummary;
  }

  // Related Products (same category or others)
  const relatedContainer = document.getElementById('relatedProductsGrid');
  if (relatedContainer) {
    const related = PRODUCTS_DATA
      .filter(p => p.id !== product.id)
      .slice(0, 3);
    relatedContainer.innerHTML = related.map(createProductCardHTML).join('');
  }
}

// -------------------------------------------------------------
// Contact Form Handler (Client-Side Demo Feedback)
// -------------------------------------------------------------

function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const alertBox = document.getElementById('contactFormAlert');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const messageInput = document.getElementById('contactMessage');

    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      if (alertBox) {
        alertBox.className = 'form-alert error';
        alertBox.textContent = 'Please fill in all required fields before submitting.';
        alertBox.style.display = 'block';
      }
      return;
    }

    // Success feedback
    if (alertBox) {
      alertBox.className = 'form-alert success';
      alertBox.textContent = `Thank you, ${nameInput.value.trim()}! Your message has been received. Our team will review your inquiry shortly.`;
      alertBox.style.display = 'block';
    }

    contactForm.reset();

    // Auto-hide alert after 6 seconds
    setTimeout(() => {
      if (alertBox) alertBox.style.display = 'none';
    }, 6000);
  });
}

// -------------------------------------------------------------
// Initialize on DOM Ready
// -------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  initGlobalNav();
  initHomePage();
  initProductsPage();
  initProductViewPage();
  initContactForm();
});
