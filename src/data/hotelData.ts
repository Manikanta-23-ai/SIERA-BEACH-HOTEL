import { RoomType, GalleryPhoto, AmenityItem, NearbyAttraction } from '../types';

export const HOTEL_INFO = {
  name: "SIERA BEACH HOTEL",
  headline: "Your Coastal Escape in Rushikonda",
  tagline: "Serene boutique hospitality on the Bay of Bengal coastline",
  phoneRaw: "099083 02666",
  phoneDisplay: "+91 99083 02666",
  phoneTel: "+919908302666",
  whatsappNumber: "919908302666",
  email: "reservations.sierabeach@gmail.com",
  address: {
    street: "Rushikonda Beach Road",
    area: "Rushikonda",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    pincode: "530045",
    country: "India",
    full: "Rushikonda, Visakhapatnam, Andhra Pradesh 530045, India",
  },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Siera+Beach+Hotel+Rushikonda+Visakhapatnam",
};

export const HOTEL_IMAGES = {
  heroSunset: "/images/siera_hero_sunset.jpg",
  exterior: "/images/siera_hotel_exterior.jpg",
  roomOceanView: "/images/siera_room_ocean_view.jpg",
  roomSuite: "/images/siera_room_suite.jpg",
  coastalVista: "/images/siera_beach_coastal_vista.jpg",
} as const;

export const ROOMS: RoomType[] = [
  {
    id: "deluxe-ocean-view",
    name: "Deluxe Ocean View Room",
    subtitle: "Panoramic vistas of the Bay of Bengal coastline",
    description: "Generously proportioned coastal room featuring a private floor-to-ceiling panoramic window overlooking Rushikonda's blue ocean surf. Styled with plush seating, refined dark flooring, and soothing seaside acoustics.",
    image: HOTEL_IMAGES.roomOceanView,
    alt: "Deluxe ocean view bedroom at Siera Beach Hotel with expansive window overlooking Rushikonda beach",
    bedType: "King Bed",
    occupancy: "Up to 2 Adults + 1 Child",
    view: "Direct Ocean & Coastal View",
    verifiedFeatures: [
      "Floor-to-ceiling panoramic ocean window",
      "Air conditioning with climate control",
      "Complimentary high-speed Wi-Fi",
      "Attached private bathroom with hot water",
      "Armchair lounge area",
      "Pet-friendly accommodation option"
    ]
  },
  {
    id: "premium-suite",
    name: "Premium Suite",
    subtitle: "Boutique comfort with lush tropical outlook",
    description: "Serene, air-conditioned master suite appointed with an upholstered headboard, crisp luxury linens, warm accent lighting, and expansive windows framing the verdant tropical greenery surrounding Rushikonda.",
    image: HOTEL_IMAGES.roomSuite,
    alt: "Premium Suite at Siera Beach Hotel with king bed and tropical garden view",
    bedType: "King Bed",
    occupancy: "2 Adults",
    view: "Tropical Garden & Green Canopy",
    verifiedFeatures: [
      "Plush king platform bed with crisp white linens",
      "Individual air conditioning unit",
      "Warm ambient lighting & reading lamps",
      "Dedicated bedside charging & controls",
      "Spacious wardrobe & luggage storage",
      "Complimentary high-speed Wi-Fi"
    ]
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "hero-sunset",
    title: "Rushikonda Coastal Sunset",
    category: "coastal",
    image: HOTEL_IMAGES.heroSunset,
    description: "Panoramic sunset glow over Rushikonda coastline with gentle waves breaking on the golden beach."
  },
  {
    id: "exterior-facade",
    title: "Hotel Facade & Architecture",
    category: "exterior",
    image: HOTEL_IMAGES.exterior,
    description: "Contemporary multi-storey boutique building with architectural louvers, balconies, and tropical foliage."
  },
  {
    id: "room-ocean-dog",
    title: "Sea-Facing Room & Coastal Panorama",
    category: "rooms",
    image: HOTEL_IMAGES.roomOceanView,
    description: "Uninterrupted ocean view from the deluxe room, welcoming travelers and pet companions alike."
  },
  {
    id: "room-suite",
    title: "Elegantly Appointed Bedroom",
    category: "rooms",
    image: HOTEL_IMAGES.roomSuite,
    description: "King-size bed with teal accents, upholstered headboard, and tranquil window onto coastal greenery."
  },
  {
    id: "rushikonda-vista",
    title: "Aerial View of Rushikonda Beach",
    category: "coastal",
    image: HOTEL_IMAGES.coastalVista,
    description: "Famous curved shoreline and turquoise waters of Rushikonda Beach, Visakhapatnam."
  }
];

export const VERIFIED_AMENITIES: AmenityItem[] = [
  {
    id: "ocean-views",
    title: "Ocean View Accommodations",
    description: "Select rooms feature broad picture windows offering panoramic vistas of the Bay of Bengal.",
    iconName: "Waves",
    verified: true
  },
  {
    id: "air-conditioning",
    title: "Air Conditioning",
    description: "Individually controlled air conditioning in guest bedrooms for total comfort in coastal weather.",
    iconName: "Wind",
    verified: true
  },
  {
    id: "wifi",
    title: "Complimentary Wi-Fi",
    description: "High-speed internet connectivity available across guest rooms and common areas.",
    iconName: "Wifi",
    verified: true
  },
  {
    id: "parking",
    title: "On-Site Vehicle Parking",
    description: "Dedicated parking space at the premises for guest personal cars and two-wheelers.",
    iconName: "Car",
    verified: true
  },
  {
    id: "front-desk",
    title: "24/7 Front Desk Assistance",
    description: "Round-the-clock front desk support for seamless check-in, local recommendations, and queries.",
    iconName: "Clock",
    verified: true
  },
  {
    id: "housekeeping",
    title: "Daily Housekeeping",
    description: "Attentive daily room cleaning and fresh linen service maintaining high hygiene standards.",
    iconName: "Sparkles",
    verified: true
  },
  {
    id: "elevator",
    title: "Elevator Access",
    description: "Modern passenger elevator serving all guest accommodation floors effortlessly.",
    iconName: "Building2",
    verified: true
  },
  {
    id: "pet-friendly",
    title: "Pet-Friendly Stay",
    description: "Welcoming accommodations for pet companions (please inform hotel team prior to arrival).",
    iconName: "HeartHandshake",
    verified: true
  }
];

export const NEARBY_ATTRACTIONS: NearbyAttraction[] = [
  {
    name: "Rushikonda Beach",
    distance: "Walking Distance (~350m)",
    description: "Renowned for its clean golden sands, safe swimming bay, water sports, and Blue Flag standard cleanliness.",
    tag: "Beach & Water Sports"
  },
  {
    name: "Kailasagiri Hilltop Park",
    distance: "~8 km (15 mins drive)",
    description: "Scenic hilltop park offering sweeping 360-degree views of Visakhapatnam, ocean promenade, and cable car ropeway.",
    tag: "Scenic Viewpoint"
  },
  {
    name: "Thotlakonda Buddhist Complex",
    distance: "~6 km (10 mins drive)",
    description: "Ancient hilltop Buddhist monastery heritage site overlooking the ocean, dating back over 2,000 years.",
    tag: "Heritage & History"
  },
  {
    name: "INS Kursura Submarine Museum",
    distance: "~12 km (20 mins drive)",
    description: "India's renowned submarine museum preserved on Ramakrishna Beach promenade in the heart of Vizag.",
    tag: "Maritime Heritage"
  }
];

export function buildWhatsAppEnquiryUrl(details?: {
  checkIn?: string;
  checkOut?: string;
  roomName?: string;
  guests?: string;
  note?: string;
}): string {
  let message = `Hello Siera Beach Hotel team! I would like to enquire about room availability and tariffs at your Rushikonda property.`;
  
  if (details?.roomName) {
    message += `\n- Room Type: ${details.roomName}`;
  }
  if (details?.checkIn) {
    message += `\n- Check-in Date: ${details.checkIn}`;
  }
  if (details?.checkOut) {
    message += `\n- Check-out Date: ${details.checkOut}`;
  }
  if (details?.guests) {
    message += `\n- Number of Guests: ${details.guests}`;
  }
  if (details?.note && details.note.trim()) {
    message += `\n- Notes / Queries: ${details.note.trim()}`;
  }

  return `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
