/* ============================================================
   Synai — shared data
   Real posters via the TMDB image CDN (no key needed to serve).
   Genre dimensions: action, drama, comedy, scifi, thriller,
   romance, fantasy, crime, mystery, animation
   Mood tags (the "in the moment" layer):
     cozy, feelgood, emotional, intense, mindbending, epic
   ============================================================ */

const IMG = 'https://image.tmdb.org/t/p/w500';

const GENRE_LABEL = {
  action: 'Action', drama: 'Drama', comedy: 'Comedy', scifi: 'Sci-Fi',
  thriller: 'Thriller', romance: 'Romance', fantasy: 'Fantasy',
  crime: 'Crime', mystery: 'Mystery', animation: 'Animation',
};

const MOOD_LABEL = {
  cozy: 'Cozy', feelgood: 'Feel-good', emotional: 'Emotional',
  intense: 'Intense', mindbending: 'Mind-bending', epic: 'Epic',
};

/* id, title, year, kind, genre, poster, tags(genre weights),
   moods(which moments it fits), overview */
const CATALOG = [
  { id: 'inception', title: 'Inception', year: 2010, kind: 'Movie', genre: 'scifi', poster: '/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg',
    tags: { scifi: 3, thriller: 2, action: 1 }, moods: ['mindbending', 'intense'],
    overview: 'A thief who steals secrets from people’s dreams takes one last job: planting an idea instead of stealing one. The deeper the team goes, the harder it is to tell what’s real.' },
  { id: 'dune', title: 'Dune', year: 2021, kind: 'Movie', genre: 'scifi', poster: '/gDzOcq0pfeCeqMBwKIJlSmQpjkZ.jpg',
    tags: { scifi: 3, action: 2, drama: 1 }, moods: ['epic', 'intense'],
    overview: 'Young heir Paul Atreides is thrust onto the deadly desert planet Arrakis, where a precious resource, ancient prophecy, and brutal politics collide around him.' },
  { id: 'parasite', title: 'Parasite', year: 2019, kind: 'Movie', genre: 'thriller', poster: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    tags: { thriller: 3, drama: 2, comedy: 1 }, moods: ['intense', 'mindbending'],
    overview: 'A struggling family cons their way into working for a wealthy household, one job at a time — until a buried secret turns the scheme into something far darker.' },
  { id: 'madmax', title: 'Mad Max: Fury Road', year: 2015, kind: 'Movie', genre: 'action', poster: '/hA2ple9q4qnwxp3hKVNhroipsir.jpg',
    tags: { action: 3, scifi: 1 }, moods: ['intense', 'epic'],
    overview: 'On a post-apocalyptic desert highway, Max and rebel warrior Furiosa flee a tyrant in one relentless, roaring car chase for freedom.' },
  { id: 'interstellar', title: 'Interstellar', year: 2014, kind: 'Movie', genre: 'scifi', poster: '/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg',
    tags: { scifi: 3, drama: 2 }, moods: ['epic', 'emotional', 'mindbending'],
    overview: 'With Earth dying, a former pilot leaves his family to lead a team through a wormhole in search of a new home for humanity — racing against time and gravity itself.' },
  { id: 'eeaao', title: 'Everything Everywhere All at Once', year: 2022, kind: 'Movie', genre: 'scifi', poster: '/u68AjlvlutfEIcpmbYpKcdi09ut.jpg',
    tags: { scifi: 2, comedy: 2, drama: 2 }, moods: ['mindbending', 'feelgood', 'emotional'],
    overview: 'An exhausted laundromat owner discovers she can tap into parallel versions of her life — and must do so to save the multiverse and reconnect with her family.' },
  { id: 'br2049', title: 'Blade Runner 2049', year: 2017, kind: 'Movie', genre: 'scifi', poster: '/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg',
    tags: { scifi: 3, mystery: 2, drama: 1 }, moods: ['mindbending', 'intense'],
    overview: 'A young blade runner uncovers a long-buried secret that could shatter what’s left of society — and sends him searching for a man who vanished decades ago.' },
  { id: 'spiderverse', title: 'Into the Spider-Verse', year: 2018, kind: 'Movie', genre: 'animation', poster: '/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg',
    tags: { animation: 3, action: 2 }, moods: ['feelgood', 'epic'],
    overview: 'Teenager Miles Morales becomes Spider-Man and teams up with Spider-People from other dimensions to stop a threat to every reality — and find his own voice.' },
  { id: 'spirited', title: 'Spirited Away', year: 2001, kind: 'Movie', genre: 'animation', poster: '/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
    tags: { animation: 3, fantasy: 2 }, moods: ['cozy', 'feelgood', 'emotional'],
    overview: 'A young girl wanders into a hidden spirit world and must work in a witch’s bathhouse to rescue her parents and find the courage to make her way home.' },
  { id: 'darkknight', title: 'The Dark Knight', year: 2008, kind: 'Movie', genre: 'action', poster: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    tags: { action: 2, crime: 2, thriller: 2 }, moods: ['intense', 'epic'],
    overview: 'Batman faces the Joker, an anarchic mastermind who wants to prove that anyone can be broken — pushing Gotham, and Batman, to their limits.' },
  { id: 'johnwick', title: 'John Wick', year: 2014, kind: 'Movie', genre: 'action', poster: '/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg',
    tags: { action: 3, thriller: 2 }, moods: ['intense'],
    overview: 'A grieving retired hitman comes out of retirement for one very personal, very stylish rampage after the wrong people cross him.' },
  { id: 'lalaland', title: 'La La Land', year: 2016, kind: 'Movie', genre: 'romance', poster: '/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg',
    tags: { romance: 3, drama: 1, comedy: 1 }, moods: ['emotional', 'feelgood'],
    overview: 'An aspiring actress and a jazz pianist fall in love in Los Angeles while chasing their dreams — and quietly test how much they’ll sacrifice to reach them.' },
  { id: 'knivesout', title: 'Knives Out', year: 2019, kind: 'Movie', genre: 'mystery', poster: '/pThyQovXQrw2m0s9x82twj48Jq4.jpg',
    tags: { mystery: 3, comedy: 2, crime: 1 }, moods: ['feelgood', 'mindbending'],
    overview: 'When a wealthy novelist dies on his birthday, a charming detective sifts through a houseful of greedy, lying relatives to untangle who did it.' },
  { id: 'oppenheimer', title: 'Oppenheimer', year: 2023, kind: 'Movie', genre: 'drama', poster: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    tags: { drama: 3, thriller: 1 }, moods: ['intense', 'epic'],
    overview: 'The story of J. Robert Oppenheimer and the race to build the atomic bomb — and the moral reckoning that haunts him long after the blast.' },
  { id: 'whiplash', title: 'Whiplash', year: 2014, kind: 'Movie', genre: 'drama', poster: '/7fn624j5lj3xTme2SgiLCeuedmO.jpg',
    tags: { drama: 3, thriller: 1 }, moods: ['intense', 'emotional'],
    overview: 'A promising young drummer is pushed to the edge of his sanity by a brilliant, abusive instructor who believes greatness only comes through cruelty.' },
  { id: 'getout', title: 'Get Out', year: 2017, kind: 'Movie', genre: 'thriller', poster: '/mE24wUCfjK8AoBBjaMjho7Rczr7.jpg',
    tags: { thriller: 3, mystery: 1 }, moods: ['intense', 'mindbending'],
    overview: 'A young man visits his girlfriend’s family for the weekend and slowly realizes their too-perfect hospitality hides something deeply sinister.' },
  { id: 'breakingbad', title: 'Breaking Bad', year: 2008, kind: 'Series', genre: 'crime', poster: '/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
    tags: { crime: 3, drama: 2, thriller: 2 }, moods: ['intense'],
    overview: 'A mild-mannered high-school chemistry teacher with cancer starts cooking meth to provide for his family — and transforms into a ruthless drug kingpin.' },
  { id: 'strangerthings', title: 'Stranger Things', year: 2016, kind: 'Series', genre: 'scifi', poster: '/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg',
    tags: { scifi: 2, fantasy: 2, mystery: 1 }, moods: ['cozy', 'epic', 'feelgood'],
    overview: 'When a boy vanishes in a small 1980s town, his friends confront secret government experiments, supernatural forces, and a mysterious girl with powers.' },
  { id: 'severance', title: 'Severance', year: 2022, kind: 'Series', genre: 'scifi', poster: '/pPHpeI2X1qEd1CS1SeyrdhZ4qnT.jpg',
    tags: { scifi: 3, mystery: 2, thriller: 1 }, moods: ['mindbending', 'intense'],
    overview: 'Workers undergo a procedure that splits their memories between work and home — until one of them starts to suspect what their company is really doing.' },
  { id: 'lastofus', title: 'The Last of Us', year: 2023, kind: 'Series', genre: 'drama', poster: '/dmo6TYuuJgaYinXBPjrgG9mB5od.jpg',
    tags: { drama: 2, thriller: 2, action: 2 }, moods: ['intense', 'emotional'],
    overview: 'Twenty years into a fungal pandemic, a hardened survivor is hired to smuggle a teenage girl who may be humanity’s last hope across a ruined America.' },
  { id: 'got', title: 'Game of Thrones', year: 2011, kind: 'Series', genre: 'fantasy', poster: '/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg',
    tags: { fantasy: 3, drama: 2, action: 1 }, moods: ['epic', 'intense'],
    overview: 'Noble families scheme and wage war for control of the Iron Throne, while an ancient, icy threat gathers strength beyond the Wall.' },
  { id: 'thebear', title: 'The Bear', year: 2022, kind: 'Series', genre: 'drama', poster: '/4fVddnbhcmzRZE14NJY03GKS6Fn.jpg',
    tags: { drama: 3, comedy: 1 }, moods: ['intense', 'emotional'],
    overview: 'A fine-dining chef returns home to run his late brother’s chaotic sandwich shop, fighting grief, debt, and a kitchen on the edge of collapse.' },
  { id: 'fleabag', title: 'Fleabag', year: 2016, kind: 'Series', genre: 'comedy', poster: '/27vEYsRKa3eAniwmoccOoluEXQ1.jpg',
    tags: { comedy: 3, drama: 2, romance: 1 }, moods: ['feelgood', 'emotional'],
    overview: 'A sharp, grief-stricken woman careens through love, sex, and family in London — confiding every messy thought straight to you.' },
  { id: 'arcane', title: 'Arcane', year: 2021, kind: 'Series', genre: 'animation', poster: '/abf8tHznhSvl9BAElD2cQeRr7do.jpg',
    tags: { animation: 3, fantasy: 2, action: 1 }, moods: ['epic', 'emotional'],
    overview: 'In a divided city of glittering wealth and grimy underbelly, two sisters end up on opposite sides of a brewing war over magic and technology.' },
];

const byId = (id) => CATALOG.find((m) => m.id === id);

/* ------------------------------------------------------------
   The quiz: a mix of in-the-moment "mood" questions and
   personality "this-or-that" poster matchups.
   - type 'mood': pick one option; each option carries genre
     weights (dims), mood tags, and/or a movie-vs-series lean.
   - type 'match': pick a poster; its own tags + moods are added.
   ------------------------------------------------------------ */
const QUESTIONS = [
  { type: 'mood', kicker: 'Right now', q: 'How do you want to feel when it’s over?', options: [
    { label: 'Cozy & comforted', sub: 'Wrapped in a blanket', moods: ['cozy', 'feelgood'] },
    { label: 'Completely blown away', sub: 'Whoa.', moods: ['mindbending', 'epic'] },
    { label: 'Moved, maybe teary', sub: 'Hit me right here', moods: ['emotional'] },
    { label: 'Wired & on edge', sub: 'Grip the cushions', moods: ['intense'] },
  ] },

  { type: 'match', a: byId('madmax'), b: byId('lalaland') },

  { type: 'mood', kicker: 'Headspace', q: 'How much brain power have you got tonight?', options: [
    { label: 'Running on empty', sub: 'Keep it easy', moods: ['cozy', 'feelgood'] },
    { label: 'Enough to follow a plot', sub: 'Somewhere in between', moods: [] },
    { label: 'Give me a puzzle', sub: 'Make me think', moods: ['mindbending'], dims: { mystery: 1 } },
  ] },

  { type: 'match', a: byId('dune'), b: byId('got') },
  { type: 'match', a: byId('fleabag'), b: byId('oppenheimer') },

  { type: 'mood', kicker: 'The room', q: 'Who’s watching tonight?', options: [
    { label: 'Just me', sub: 'Solo wind-down', moods: ['cozy'] },
    { label: 'Friends', sub: 'Keep it fun', moods: ['feelgood'], dims: { comedy: 1 } },
    { label: 'Date night', sub: 'Something to feel', moods: ['emotional'], dims: { romance: 2 } },
    { label: 'Big group', sub: 'Make it an event', moods: ['epic'], dims: { action: 1 } },
  ] },

  { type: 'match', a: byId('getout'), b: byId('spirited') },
  { type: 'match', a: byId('breakingbad'), b: byId('knivesout') },

  { type: 'mood', kicker: 'Tempo', q: 'Pick your pace.', options: [
    { label: 'Slow & calm', sub: 'Let it breathe', moods: ['cozy'], dims: { drama: 1 } },
    { label: 'Steady & absorbing', sub: 'Pull me in', moods: ['emotional'], dims: { drama: 1 } },
    { label: 'Fast & loud', sub: 'Floor it', moods: ['intense'], dims: { action: 2 } },
  ] },

  { type: 'match', a: byId('spiderverse'), b: byId('darkknight') },

  { type: 'mood', kicker: 'The vibe', q: 'Comfort or discovery?', options: [
    { label: 'A cozy, familiar vibe', sub: 'Warm and easy', moods: ['cozy', 'feelgood'] },
    { label: 'Something bold & new', sub: 'Surprise me', moods: ['mindbending', 'intense'] },
  ] },

  { type: 'match', a: byId('br2049'), b: byId('thebear') },
  { type: 'match', a: byId('severance'), b: byId('eeaao') },

  { type: 'mood', kicker: 'The clock', q: 'How much time have you got?', options: [
    { label: 'A quick hit', sub: 'One and done', kind: 2 },
    { label: 'All night', sub: 'Let’s binge a series', kind: -2 },
    { label: 'Whatever’s great', sub: 'No rules', kind: 0 },
  ] },
];
