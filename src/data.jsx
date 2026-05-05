// Rooms, menu, gallery, banquet data for Amara
const ROOMS = [
  {
    id: 'standard',
    name: 'Standard Room',
    tagline: 'Comfortable, well-appointed, nothing lacking.',
    price: 3000,
    size: '22 m²',
    bed: 'King or Twin',
    view: 'Garden / Courtyard',
    max: 2,
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
    phLabel: 'Standard room',
    amenities: ['Free Wi-Fi', 'Complimentary breakfast', 'Free parking', 'Air conditioning', 'Flat-screen TV'],
    desc: 'A well-finished room with everything you need — a proper bed, a quiet night, and a hot breakfast in the morning. Fifteen of them, each one consistent.',
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    tagline: 'More room to breathe. Same honest hospitality.',
    price: 3300,
    size: '28 m²',
    bed: 'King',
    view: 'City / Courtyard',
    max: 3,
    img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
    phLabel: 'Deluxe room',
    amenities: ['Free Wi-Fi', 'Complimentary breakfast', 'Free parking', 'Spacious bathroom', 'Work desk', 'Air conditioning'],
    desc: 'The deluxe room gives you the extra square footage to actually use the space. A larger bathroom, a proper work desk, and a little more quiet at the end of the day.',
  },
  {
    id: 'suite',
    name: 'Suite',
    tagline: 'The one you remember.',
    price: 4750,
    size: '42 m²',
    bed: 'King + Sitting area',
    view: 'Panoramic city',
    max: 2,
    img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80',
    phLabel: 'Suite',
    amenities: ['Free Wi-Fi', 'Complimentary breakfast', 'Free parking', 'Separate sitting room', 'Premium toiletries', 'Complimentary minibar'],
    desc: 'Our two suites are the most spacious rooms in the house — a proper sitting area, a generous bathroom, and a view that reminds you why you came to Nizamabad.',
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
  { label: 'Courtyard', size: 'sq', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80' },
  { label: 'Dining room', size: 'sq', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80' },
  { label: 'Suite living', size: 'sq', img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80' },
  { label: 'Terrace', size: 'wide', img: 'https://images.unsplash.com/photo-1519449556851-5720b33024e7?w=1400&q=80' },
  { label: 'Detail', size: 'sq', img: 'https://images.unsplash.com/photo-1615529162924-f8605388461d?w=800&q=80' },
];

const BANQUETS = [
  {
    id: 'jade',
    name: 'Jade Hall',
    tagline: 'Intimate meetings and small celebrations.',
    size: '1,000 sq ft',
    capacity: '80–100 guests',
    capacityNote: '60–70 seated · 80–100 reception',
    ac: false,
    tags: ['Corporate meetings', 'Workshops', 'Small parties', 'Birthdays'],
    img: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=1200&q=80',
    desc: 'A versatile room for focused gatherings. Boardroom sessions, product launches, birthday dinners, or any occasion where the guest list is intimate but the moment is not.',
  },
  {
    id: 'olive',
    name: 'Olive Hall',
    tagline: 'Grand events with every comfort.',
    size: '5,000 sq ft',
    capacity: '400 guests',
    capacityNote: 'Up to 400 · combinable with Ruby',
    ac: true,
    tags: ['Weddings', 'Receptions', 'Conferences', 'Corporate events'],
    img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80',
    desc: 'One of two grand halls at Amara. 5,000 sq ft, centralized air conditioning, and in-house catering from our kitchens. Opens directly into Ruby Hall for combined events of 800 guests.',
  },
  {
    id: 'ruby',
    name: 'Ruby Hall',
    tagline: 'Expansive. Air-conditioned. Occasion-ready.',
    size: '5,000 sq ft',
    capacity: '400 guests',
    capacityNote: 'Up to 400 · combinable with Olive',
    ac: true,
    tags: ['Weddings', 'Receptions', 'Large conferences', 'Celebrations'],
    img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80',
    desc: 'Mirror to Olive Hall — same footprint, same specifications, same kitchen. Book one or both. Together, Olive and Ruby seat up to 800 guests under one roof.',
  },
];

Object.assign(window, { ROOMS, CATEGORIES, MENU, GALLERY, BANQUETS });
