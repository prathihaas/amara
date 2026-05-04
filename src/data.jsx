// Rooms, menu, gallery data for Amara
const ROOMS = [
  {
    id: 'courtyard',
    name: 'Courtyard Room',
    tagline: 'Ground-floor repose with a private garden view.',
    price: 8400,
    size: '34 m²',
    bed: 'King',
    view: 'Courtyard',
    max: 2,
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
    phLabel: 'Courtyard room · king bed',
    amenities: ['Private balcony', 'Rain shower', 'Handwoven linens', 'Nespresso', 'Complimentary Wi-Fi'],
    desc: 'Our entry-level room is anything but. A quiet pocket of the property with filtered morning light, a soaking tub, and a sliding door onto the herb garden.',
  },
  {
    id: 'deluxe',
    name: 'Deluxe Olive Suite',
    tagline: 'Room to breathe. Room to stay a while.',
    price: 12600,
    size: '52 m²',
    bed: 'King',
    view: 'Olive grove',
    max: 3,
    img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
    phLabel: 'Deluxe olive suite',
    amenities: ['Separate lounge', 'Walk-in wardrobe', 'Deep soaking tub', 'Work nook', 'Evening turndown'],
    desc: 'Two connected rooms — a bedroom you sink into and a lounge that invites afternoon tea. Olive-wood panelling, brass detailing, and a window seat sized for books.',
  },
  {
    id: 'heritage',
    name: 'Heritage Suite',
    tagline: 'The one with the arches.',
    price: 18200,
    size: '72 m²',
    bed: 'King + Daybed',
    view: 'City & fort',
    max: 4,
    img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80',
    phLabel: 'Heritage suite · arched windows',
    amenities: ['Arched windows', 'Private terrace', 'Butler on call', 'Dining for four', 'Bath with a view'],
    desc: 'A corner suite with arched windows that frame the Nizamabad Fort at sunset. The terrace is big enough for a long dinner — we will happily set one.',
  },
  {
    id: 'royal',
    name: 'The Amara Residence',
    tagline: 'Our two-bedroom flagship.',
    price: 32000,
    size: '118 m²',
    bed: '2 × King',
    view: 'Panoramic',
    max: 6,
    img: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200&q=80',
    phLabel: 'Residence · two bedrooms',
    amenities: ['Two bedrooms', 'Private dining', 'Dedicated butler', 'Steam room', 'Wrap-around terrace'],
    desc: 'A private residence for families, small gatherings, and the kind of holidays that earn a whole weekend of stories. Dining table for ten. Pre-dawn chai on the terrace, always.',
  },
];

const CATEGORIES = [
  { id: 'all', name: 'All', icon: 'grid' },
  { id: 'breakfast', name: 'Breakfast', icon: 'sun' },
  { id: 'biryani', name: 'Biryani & Rice', icon: 'pot' },
  { id: 'curries', name: 'Curries', icon: 'bowl' },
  { id: 'grills', name: 'Grills', icon: 'flame' },
  { id: 'breads', name: 'Breads', icon: 'bread' },
  { id: 'desserts', name: 'Desserts', icon: 'heart' },
  { id: 'drinks', name: 'Drinks', icon: 'cup' },
];

const MENU = [
  // Breakfast
  { id: 'm1', cat: 'breakfast', name: 'Idli Platter', sub: 'Steamed rice cakes · coconut & tomato chutneys · sambar', price: 420, veg: true, phLabel: 'Idli, 3 pcs' },
  { id: 'm2', cat: 'breakfast', name: 'Masala Dosa', sub: 'Fermented crepe · spiced potato · gunpowder', price: 480, veg: true, phLabel: 'Masala dosa' },
  { id: 'm3', cat: 'breakfast', name: 'Keema Paratha', sub: 'Flaky layered bread · minced lamb · mint yoghurt', price: 620, veg: false, phLabel: 'Keema paratha' },
  { id: 'm4', cat: 'breakfast', name: 'Continental Plate', sub: 'Eggs to order · house granola · seasonal fruit', price: 780, veg: false, phLabel: 'Continental plate' },

  // Biryani
  { id: 'm5', cat: 'biryani', name: 'Nizamabad Dum Biryani', sub: 'Long-grain basmati · slow-cooked lamb · saffron, mace, rose', price: 920, veg: false, phLabel: 'Lamb dum biryani', featured: true },
  { id: 'm6', cat: 'biryani', name: 'Vegetable Dum Biryani', sub: 'Aromatic basmati · root vegetables · caramelised onion', price: 680, veg: true, phLabel: 'Veg biryani' },
  { id: 'm7', cat: 'biryani', name: 'Chicken Biryani', sub: 'Bone-in chicken · green chilli · fresh coriander', price: 820, veg: false, phLabel: 'Chicken biryani' },
  { id: 'm8', cat: 'biryani', name: 'Hyderabadi Khichdi', sub: 'Rice & lentils · ghee · fried onions', price: 540, veg: true, phLabel: 'Khichdi bowl' },

  // Curries
  { id: 'm9', cat: 'curries', name: 'Butter Paneer', sub: 'Cottage cheese · tomato cream · fenugreek', price: 560, veg: true, phLabel: 'Butter paneer' },
  { id: 'm10', cat: 'curries', name: 'Telangana Chicken', sub: 'Country chicken · gongura leaves · dry coconut', price: 720, veg: false, phLabel: 'Telangana chicken', featured: true },
  { id: 'm11', cat: 'curries', name: 'Dal Amara', sub: 'Our house black dal · slow-cooked overnight', price: 440, veg: true, phLabel: 'House dal' },
  { id: 'm12', cat: 'curries', name: 'Prawn Moilee', sub: 'Coconut milk · curry leaf · turmeric', price: 860, veg: false, phLabel: 'Prawn moilee' },

  // Grills
  { id: 'm13', cat: 'grills', name: 'Chicken Tikka', sub: 'Yoghurt & chilli marinade · charcoal tandoor', price: 640, veg: false, phLabel: 'Chicken tikka' },
  { id: 'm14', cat: 'grills', name: 'Paneer Tikka', sub: 'Cottage cheese · bell pepper · kasundi glaze', price: 520, veg: true, phLabel: 'Paneer tikka' },
  { id: 'm15', cat: 'grills', name: 'Lamb Seekh', sub: 'Hand-minced lamb · green chilli · rumali roti', price: 780, veg: false, phLabel: 'Lamb seekh' },
  { id: 'm16', cat: 'grills', name: 'Malai Broccoli', sub: 'Cream cheese · cashew · black pepper', price: 480, veg: true, phLabel: 'Malai broccoli' },

  // Breads
  { id: 'm17', cat: 'breads', name: 'Garlic Naan', sub: 'Tandoor-baked · fresh garlic · coriander', price: 180, veg: true, phLabel: 'Garlic naan' },
  { id: 'm18', cat: 'breads', name: 'Laccha Paratha', sub: 'Hand-layered · ghee finish', price: 160, veg: true, phLabel: 'Laccha paratha' },
  { id: 'm19', cat: 'breads', name: 'Rumali Roti', sub: 'Paper-thin · inverted griddle', price: 140, veg: true, phLabel: 'Rumali roti' },
  { id: 'm20', cat: 'breads', name: 'Sheermal', sub: 'Saffron-soaked · slightly sweet', price: 200, veg: true, phLabel: 'Sheermal' },

  // Desserts
  { id: 'm21', cat: 'desserts', name: 'Double ka Meetha', sub: 'Saffron milk-soaked bread · pistachio · rose', price: 360, veg: true, phLabel: 'Double ka meetha', featured: true },
  { id: 'm22', cat: 'desserts', name: 'Qubani ka Meetha', sub: 'Stewed apricot · vanilla cream · almond brittle', price: 380, veg: true, phLabel: 'Qubani ka meetha' },
  { id: 'm23', cat: 'desserts', name: 'Gulab Jamun', sub: 'Warm milk dumplings · cardamom syrup', price: 280, veg: true, phLabel: 'Gulab jamun' },
  { id: 'm24', cat: 'desserts', name: 'Kulfi Falooda', sub: 'House kulfi · rose syrup · vermicelli', price: 320, veg: true, phLabel: 'Kulfi falooda' },

  // Drinks
  { id: 'm25', cat: 'drinks', name: 'Filter Coffee', sub: 'South Indian chicory blend · steamed milk', price: 180, veg: true, phLabel: 'Filter coffee' },
  { id: 'm26', cat: 'drinks', name: 'Masala Chai', sub: 'Black tea · cardamom · ginger · fresh milk', price: 160, veg: true, phLabel: 'Masala chai' },
  { id: 'm27', cat: 'drinks', name: 'Turmeric Lassi', sub: 'Yoghurt · local turmeric · honey', price: 220, veg: true, phLabel: 'Turmeric lassi' },
  { id: 'm28', cat: 'drinks', name: 'Virgin Mojito', sub: 'Lime · mint · sparkling water', price: 260, veg: true, phLabel: 'Virgin mojito' },
];

const GALLERY = [
  { label: 'Lobby · dusk', size: 'wide', img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1400&q=80' },
  { label: 'Suite bath', size: 'tall', img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80' },
  { label: 'Pool', size: 'sq', img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80' },
  { label: 'Courtyard', size: 'sq', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80' },
  { label: 'Dining room', size: 'sq', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80' },
  { label: 'Suite living', size: 'sq', img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80' },
  { label: 'Terrace', size: 'wide', img: 'https://images.unsplash.com/photo-1519449556851-5720b33024e7?w=1400&q=80' },
  { label: 'Detail', size: 'sq', img: 'https://images.unsplash.com/photo-1615529162924-f8605388461d?w=800&q=80' },
];

Object.assign(window, { ROOMS, CATEGORIES, MENU, GALLERY });
