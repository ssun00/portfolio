import benefit_night from '../assets/designs/benefit_night.png';
import biglittle from '../assets/designs/biglittle_fb.png';
import beachtrip from '../assets/designs/beach_trip.png';
import jia from '../assets/designs/jia.png';
import sky from '../assets/designs/sky.png';
import squat from '../assets/designs/squat.png';
import sun from '../assets/designs/sun.png';
import lub from '../assets/designs/lub.png';
import orang from '../assets/designs/orang.png';
import plant from '../assets/designs/plant.png';
import stroob from '../assets/designs/stroob.png';
import ugh from '../assets/designs/ugh.png';
import resilience from '../assets/designs/resilience.jpg';
import tshirt from '../assets/designs/tshirt.jpg';
import sticker1 from '../assets/designs/sticker_1.jpg';
import sticker2 from '../assets/designs/sticker_2.jpg';

export const CATEGORIES = [
  { id: 'all',      label: 'ALL' },
  { id: 'org',  label: 'ORGANIZATIONS' },
  { id: 'art', label: 'ART' },
];

export const RARITIES = {
  COMMON:    { label: 'COMMON',    color: '#8888A0' },
  UNCOMMON:  { label: 'UNCOMMON',  color: '#7BF5A8' },
  RARE:      { label: 'RARE',      color: '#FF6BAE' },
  EPIC:      { label: 'EPIC',      color: '#C4A7FF' },
  LEGENDARY: { label: 'LEGENDARY', color: '#FFD93D' },
};

/*
  {
    id: string,           // url-safe
    title: string,        // short title for the detail panel
    category: string,
    rarity: string,       // matches a key in RARITIES
    thumbnail: string|null, // path to image, or null for placeholder
    fullImage: string|null, // larger image for inspect view (defaults to thumbnail)
    description: string,
    tool: string,         // tool used (Figma, Procreate, etc.)
    year: number,
  }
*/

export const DESIGNS = [
  {
    id: 'stroob',
    title: 'STRAWBERRY',
    category: 'art',
    rarity: 'RARE',
    thumbnail: stroob,
    description: '',
    tool: 'PROCREATE',
    year: 2023,
  },
  {
    id: 'benefit-night',
    title: 'AASA BENEFIT NIGHT EVENT',
    category: 'org',
    rarity: 'COMMON',
    thumbnail: benefit_night,
    description: 'Event design UNCCH Asian American Student Association Benefit Night',
    tool: 'PROCREATE',
    year: 2022,
  },
  {
    id: 'lub',
    title: 'HEART',
    category: 'art',
    rarity: 'UNCOMMON',
    thumbnail: lub,
    description: '',
    tool: 'PROCREATE',
    year: 2023,
  },
  {
    id: 'jia',
    title: 'REJUVENATION JIA POSTER',
    category: 'org',
    rarity: 'LEGENDARY',
    thumbnail: jia,
    description: 'Event poster designed for UNCCH largest cultural event, Journey into Asia, with the theme Rejuvenation',
    tool: 'PROCREATE & ADOBE PS',
    year: 2022,
  },
  {
    id: 'ugh',
    title: 'JEANS',
    category: 'art',
    rarity: 'RARE',
    thumbnail: ugh,
    description: '',
    tool: 'PROCREATE',
    year: 2023,
  },
  {
    id: 'sticker-1',
    title: 'UNC AASA RAM STICKER',
    category: 'org',
    rarity: 'LEGENDARY',
    thumbnail: sticker1,
    description: 'UNCCH AASA sticker design of our ram mascot',
    tool: 'PROCREATE & ADOBE PS',
    year: 2021,
  },
  {
    id: 'beach-trip',
    title: 'BEACH TRIP EVENT',
    category: 'org',
    rarity: 'UNCOMMON',
    thumbnail: beachtrip,
    description: 'Event design for UNCCH AASA Beach Trip',
    tool: 'PROCREATE',
    year: 2022,
  },
  {
    id: 'squat',
    title: 'SQUATTING SKETCH',
    category: 'art',
    rarity: 'RARE',
    thumbnail: squat,
    description: '',
    tool: 'PROCREATE',
    year: 2023,
  },
  {
    id: 'tshirt',
    title: 'UNCCH AASA T-SHIRT',
    category: 'org',
    rarity: 'LEGENDARY',
    thumbnail: tshirt,
    description: 'T-shirt design for UNCCH AASA',
    tool: 'PROCREATE & ADOBE PS',
    year: 2021,
  },
  {
    id: 'orang',
    title: 'ORANGE',
    category: 'art',
    rarity: 'RARE',
    thumbnail: orang,
    description: '',
    tool: 'PROCREATE',
    year: 2023,
  },
  {
    id: 'sun',
    title: 'SUN',
    category: 'art',
    rarity: 'RARE',
    thumbnail: sun,
    description: '',
    tool: 'PROCREATE',
    year: 2023,
  },
  {
    id: 'resilience',
    title: 'RESILIENCE JIA POSTER',
    category: 'org',
    rarity: 'LEGENDARY',
    thumbnail: resilience,
    description: 'Event poster designed for UNCCH largest cultural event, Journey into Asia, with the theme Resilience',
    tool: 'PROCREATE',
    year: 2021,
  },
  {
    id: 'sticker-2',
    title: 'UNC AASA SRIRACHA STICKER',
    category: 'org',
    rarity: 'LEGENDARY',
    thumbnail: sticker2,
    description: 'UNCCH AASA sticker design using Sriracha',
    tool: 'PROCREATE',
    year: 2021,
  },
  {
    id: 'sky',
    title: 'SKY',
    category: 'art',
    rarity: 'UNCOMMON',
    thumbnail: sky,
    description: '',
    tool: 'PROCREATE',
    year: 2023,
  },
  {
    id: 'big-little',
    title: 'UNC AASA BIG LITTLE EVENT DESIGN',
    category: 'org',
    rarity: 'COMMON',
    thumbnail: biglittle,
    description: 'Event design for UNCCH AASA Big Little Social',
    tool: 'PROCREATE',
    year: 2021,
  },
  {
    id: 'plant',
    title: 'PLANT',
    category: 'art',
    rarity: 'UNCOMMON',
    thumbnail: plant,
    description: '',
    tool: 'PROCREATE',
    year: 2024,
  },
];