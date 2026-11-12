/** DEMO CONTENT. Replace all photos, films, names, dates and metadata before publishing. */
export const site = {
  name: 'THE IMAGE ARCHIVE', initials: 'DEOLA', subtitle: 'An independent photographic journal',
  email: 'hello@example.com', instagram: '', location: 'Location not supplied',
  bio: 'This is an editable biography placeholder. Add your own background, artistic practice and the stories that shape your photographs.',
  statement: 'An archive of passing moments, places and people. This text is a placeholder: replace it with your personal photographic statement.'
};
export type Photograph = { id: string; title: string; src: string; alt: string; collection: string; date: string; location: string; caption: string; ratio: 'portrait' | 'landscape' | 'square'; order: number };
const uns = (id: string, w = 1500) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
export const photographs: Photograph[] = [
  { id: 'p01', title: 'A moment held', src: uns('photo-1517841905240-472988babdf9'), alt: 'Sample portrait photograph', collection: 'portraits', date: 'Demo / undated', location: 'Location placeholder', caption: 'Replace with the story behind this photograph.', ratio: 'portrait', order: 1 },
  { id: 'p02', title: 'In between', src: uns('photo-1500530855697-b586d89ba3ee'), alt: 'Sample expansive landscape photograph', collection: 'personal', date: 'Demo / undated', location: 'Location placeholder', caption: 'A sample entry in a personal archive.', ratio: 'landscape', order: 2 },
  { id: 'p03', title: 'Passing through', src: uns('photo-1519608487953-e999c86e7455'), alt: 'Sample sky photograph', collection: 'street', date: 'Demo / undated', location: 'Location placeholder', caption: 'A place remembered.', ratio: 'landscape', order: 3 },
  { id: 'p04', title: 'Soft light', src: uns('photo-1524504388940-b1c1722653e1'), alt: 'Sample portrait', collection: 'portraits', date: 'Demo / undated', location: 'Location placeholder', caption: 'Notes on light and presence.', ratio: 'portrait', order: 4 },
  { id: 'p05', title: 'The quiet hour', src: uns('photo-1470252649378-9c29740c9fa8'), alt: 'Sample landscape at sunset', collection: 'personal', date: 'Demo / undated', location: 'Location placeholder', caption: 'An open space, and a pause.', ratio: 'landscape', order: 5 },
  { id: 'p06', title: 'After the rain', src: uns('photo-1480714378408-67cf0d13bc1b'), alt: 'Sample city photograph', collection: 'street', date: 'Demo / undated', location: 'Location placeholder', caption: 'Notes from the street.', ratio: 'landscape', order: 6 },
  { id: 'p07', title: 'An observer', src: uns('photo-1534528741775-53994a69daeb'), alt: 'Sample studio portrait', collection: 'portraits', date: 'Demo / undated', location: 'Location placeholder', caption: 'A portrait in natural light.', ratio: 'portrait', order: 7 },
  { id: 'p08', title: 'Where the road ends', src: uns('photo-1464822759023-fed622ff2c3b'), alt: 'Sample mountain photograph', collection: 'documentary', date: 'Demo / undated', location: 'Location placeholder', caption: 'An entry in a visual journey.', ratio: 'landscape', order: 8 },
  { id: 'p09', title: 'Stillness', src: uns('photo-1501785888041-af3ef285b470'), alt: 'Sample lakeside landscape', collection: 'documentary', date: 'Demo / undated', location: 'Location placeholder', caption: 'Place and atmosphere.', ratio: 'landscape', order: 9 },
  { id: 'p10', title: 'The frame', src: uns('photo-1490481651871-ab68de25d43d'), alt: 'Sample fashion photograph', collection: 'editorial', date: 'Demo / undated', location: 'Location placeholder', caption: 'An experimental editorial frame.', ratio: 'portrait', order: 10 },
  { id: 'p11', title: 'Lines and forms', src: uns('photo-1487958449943-2429e8be8625'), alt: 'Sample architecture photograph', collection: 'editorial', date: 'Demo / undated', location: 'Location placeholder', caption: 'Study of shape and structure.', ratio: 'landscape', order: 11 },
  { id: 'p12', title: 'The long walk', src: uns('photo-1470770841072-f978cf4d019e'), alt: 'Sample landscape photograph', collection: 'documentary', date: 'Demo / undated', location: 'Location placeholder', caption: 'A landscape in transition.', ratio: 'landscape', order: 12 }
];
export type Collection = { id: string; slug: string; title: string; description: string; dateRange: string; photoIds: string[]; order: number; cover: string };
export const collections: Collection[] = [
  { id: 'c01', slug: 'portraits', title: 'Portraits', description: 'Light, gesture and the space between.', dateRange: 'Undated / demo', photoIds: ['p01', 'p04', 'p07'], order: 1, cover: 'p01' },
  { id: 'c02', slug: 'street', title: 'Street', description: 'Unscripted fragments of a passing world.', dateRange: 'Undated / demo', photoIds: ['p06', 'p03'], order: 2, cover: 'p06' },
  { id: 'c03', slug: 'personal', title: 'Personal', description: 'Notes from the everyday, held a little longer.', dateRange: 'Undated / demo', photoIds: ['p02', 'p05'], order: 3, cover: 'p02' },
  { id: 'c04', slug: 'documentary', title: 'Documentary', description: 'Following places, their texture and their traces.', dateRange: 'Undated / demo', photoIds: ['p08', 'p09', 'p12'], order: 4, cover: 'p08' },
  { id: 'c05', slug: 'editorial', title: 'Editorial', description: 'Form, movement and visual studies.', dateRange: 'Undated / demo', photoIds: ['p10', 'p11'], order: 5, cover: 'p10' }
];
export type Recording = { id: string; slug: string; title: string; src: string; thumbnail: string; date: string; location: string; duration: string; format: string; description: string; order: number };
/** Working third-party SAMPLE clips: replace with /public/videos/your-file.mp4 before publishing. */
export const recordings: Recording[] = [
  { id: 'REC–001', slug: 'first-light', title: 'First light', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', thumbnail: uns('photo-1470252649378-9c29740c9fa8'), date: 'Undated / demo', location: 'Location placeholder', duration: 'Sample clip', format: 'Digital / example', description: 'Demonstration video. Replace this footage and metadata with your original recording.', order: 1 },
  { id: 'REC–002', slug: 'another-afternoon', title: 'Another afternoon', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm', thumbnail: uns('photo-1500530855697-b586d89ba3ee'), date: 'Undated / demo', location: 'Location placeholder', duration: 'Sample clip', format: 'Digital / example', description: 'Demonstration video. Add your own clip to make this a personal archive.', order: 2 },
  { id: 'REC–003', slug: 'small-observations', title: 'Small observations', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', thumbnail: uns('photo-1501785888041-af3ef285b470'), date: 'Undated / demo', location: 'Location placeholder', duration: 'Sample clip', format: 'Digital / example', description: 'Demonstration video. Each record can have its own date, duration and location.', order: 3 }
];
export const getPhoto = (id: string) => photographs.find(p => p.id === id)!;
