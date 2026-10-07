import type { Dream, PopularDream } from "../types/dream.types";

export const DREAMS_PER_PAGE = 3;

export const mockDreams: Dream[] = [
  {
    title: "The Glass Tower That Kept Growing",
    author: "nocturnalwren",
    time: "18 min ago",
    views: "1.8k",
    anonymous: false,
    excerpt:
      "I was inside a skyscraper that never ended. Every time I reached a landing, the ceiling dissolved and another floor appeared above me.",
    content:
      "The elevator deposited me at a lobby of polished onyx and low hum. The concierge behind the desk had no face — just a smooth expanse where features should have been — and he handed me a keycard embossed with a room number that kept changing. I took the stairs instead. Each landing smelled of rain and old cedar. When I reached what I thought was the top floor, the ceiling liquefied and another level materialized, identical to the one below. Strangers passed me on the stairs, all carrying boxes. None of them looked surprised. I remember thinking: someone must know where the roof is.",
    real_life_context:
      "I had just been promoted at work and was three months into a new role that felt exponentially more demanding than anything I had prepared for. Every week revealed another layer of responsibility I hadn't anticipated.",
    dreamer_interpretation:
      "The tower is the job. Or maybe ambition in general. I never find the top because there isn't one — you just keep climbing and the ceiling keeps resetting. The faceless concierge might be the institution itself, helpful-seeming but ultimately unreadable.",
  },
  {
    title: "Swimming Through Amber Light",
    author: "velvetecho",
    time: "42 min ago",
    views: "976",
    anonymous: true,
    excerpt:
      "The whole dream was underwater, but I could breathe fine. The water was warm and golden, almost syrup-thick, and everyone I knew looked slightly wrong.",
    content:
      "There was a dinner party at the bottom of a lake. The table was set formally — linen, crystal, silverware — and everyone was seated as if nothing unusual was happening. My mother was there, but younger than I've ever known her. My best friend from childhood sat across from me, wearing a coat I recognized from a photograph. The conversation was normal, mundane even, but every time someone spoke the sound arrived a half-second late, like a badly dubbed film. The amber water pressed against everything gently. No one seemed to notice I was the only one who couldn't stop looking at the surface above us, lit from somewhere.",
    real_life_context:
      "My grandmother had passed away two weeks before this dream. We weren't particularly close, but her death had made me think a lot about everyone I'd lost gradual contact with over the years.",
    dreamer_interpretation:
      "I think the amber is nostalgia — thick and preserving. The dinner party is a reunion I can't actually have. The late audio is memory: things said years ago that I'm only now really hearing.",
  },
  {
    title: "My Childhood Home Had an Extra Floor",
    author: "silentfreq",
    time: "1 hr ago",
    views: "3.2k",
    anonymous: false,
    excerpt:
      "I found a staircase in the house I grew up in that had never been there before. Upstairs, strangers were living in rooms I somehow remembered.",
    content:
      "The staircase appeared behind a door that had always been a closet. The wood was darker than the rest of the house, and the banister felt older under my hand. At the top were four rooms arranged along a narrow corridor. In the first, a man I didn't recognize was writing letters at a small desk. He acknowledged me with a nod, as if my visit were expected. The second room was full of furniture covered in dust sheets, shapes I almost recognized. The third was empty but warm, with light coming under the door from nowhere. The fourth door was locked. I knew with dream-certainty that I had been in that room before, many times, and that I had forgotten everything about it.",
    real_life_context:
      "I had visited my hometown for the first time in six years. The house has new owners and I drove past it but didn't stop. I also found a box of childhood journals I'd stored at my parents' place.",
    dreamer_interpretation:
      "The extra floor is memory I haven't accessed yet. Each room holds something different — the present, the covered-up past, the lost past, and the locked room is probably something I've genuinely suppressed. I'm not sure I want that door opened.",
  },
  {
    title: "A Train Station at the Edge of Morning",
    author: "juniperlake",
    time: "2 hrs ago",
    views: "741",
    anonymous: true,
    excerpt:
      "Every platform led to a different version of my life. I kept checking the board, waiting for a train whose name I had forgotten.",
    content:
      "The station had no name above the entrance. The departure board refreshed constantly but never displayed a time I could read before it changed. Platform one led to a city I knew looked like mine but wasn't — I could see it through a glass partition, close enough to feel the warmth. Platform two was foggy and smelled of salt water. Platform three I couldn't reach; the escalator moved upward no matter how fast I descended. The fourth platform was empty of trains but full of people I recognized from different periods of my life, all waiting, all looking at their own departure boards. Nobody looked worried. I was the only one who felt the urgency.",
    real_life_context:
      "I had recently turned thirty and had been wrestling with a career change I couldn't commit to. Two different offers were on the table and I was paralyzed between them.",
    dreamer_interpretation:
      "Every platform is a choice, obviously. But what struck me on waking was that everyone else seemed at peace with waiting, and I was the frantic one. Maybe the dream isn't about the decision — it's about my relationship to uncertainty.",
  },
  {
    title: "The Library That Remembered Me",
    author: "quillmere",
    time: "4 hrs ago",
    views: "2.1k",
    anonymous: false,
    excerpt:
      "The books on the shelves had my name on their spines. Not as author — as subject. Every volume was something that had happened to me.",
    content:
      "I walked through a library that smelled of thunderstorm and sandalwood. The shelves ran floor to ceiling and the ceiling was impossibly high, receding into warm dark. The books had no dust. When I pulled one from the shelf — a slim volume titled 'August, the year I was twelve' — the pages were full of events I remembered but hadn't thought of in decades. My own handwriting, but neater than I've ever managed. I replaced it and walked further in. Near the back were books that hadn't been written yet; the pages were blank but warm to the touch. A librarian appeared at my elbow, someone whose face I kept forgetting as I looked at it. She said: these are the ones that need the most careful attention.",
    real_life_context:
      "I had started therapy for the first time in my adult life. We had been doing a lot of work around early memories and how they shape present behavior.",
    dreamer_interpretation:
      "The blank books waiting to be written feel hopeful to me — the library isn't just archival, it's generative. The librarian is probably my therapist, or the process of therapy itself. The unwritten volumes are both daunting and the whole point.",
  },
  {
    title: "Running in the Dark, Going Nowhere",
    author: "ashenveil",
    time: "6 hrs ago",
    views: "519",
    anonymous: true,
    excerpt:
      "I sprinted as hard as I could through a corridor that stretched infinitely ahead. My legs moved but the scenery never changed.",
    content:
      "The corridor was institutional — white fluorescent light, scuffed linoleum, the low hum of ventilation. I was running from something but when I turned, nothing was behind me. The urgency was entirely internal. I was fast in the dream, faster than I've ever been in waking life, but I covered no distance. Doors appeared on either side as I ran but they were all locked, and the handles were all different — ornate brass, plain chrome, carved wood, rope — as if collected from different buildings. Eventually I sat down in the middle of the corridor. The moment I stopped running, the corridor shortened immediately to a manageable length, and I could see a window at the end with gray morning light behind it.",
    real_life_context:
      "Six months into a very high-pressure project at work. I was working weekends and had been sleeping poorly for most of the year.",
    dreamer_interpretation:
      "The moment I stopped, the corridor shrank. I've thought about that a lot. Maybe the urgency is its own trap. The different door handles feel important — opportunities, exits, possibilities — but none of them opened while I was running.",
  },
  {
    title: "The Garden That Grew Inward",
    author: "mirewitch",
    time: "9 hrs ago",
    views: "1.4k",
    anonymous: false,
    excerpt:
      "Instead of growing outward, everything in the garden folded toward a center I couldn't reach. Flowers that turned inward. Trees whose branches curved back on themselves.",
    content:
      "The garden was beautiful in an unsettling way — every plant leaning inward like iron filings toward a magnet I couldn't see or feel. I followed a path that spiraled rather than led anywhere. The roses had thorns that curved inward too, not outward. At the center of the spiral I expected something — a fountain, a figure, an object — but there was only a small circle of bare earth, very dark, very still. I knelt and pressed my palm to it. It was warm, almost feverish. A sound like distant voices came from beneath. Not distressed — just present, below everything, conversational and continuous.",
    real_life_context:
      "I had recently returned from a long solo trip and was struggling to readjust to ordinary life. Everything felt smaller. I had started meditating.",
    dreamer_interpretation:
      "The inward-folding garden feels like interiority — the meditation practice, the solo travel, the process of turning attention inward after years of looking outward. The voices beneath the earth feel like something I'm learning to listen to, not something threatening.",
  },
  {
    title: "Underwater City, Windows Lit",
    author: "dissolveform",
    time: "12 hrs ago",
    views: "887",
    anonymous: true,
    excerpt:
      "The city was completely submerged but fully inhabited. Lights in every window, cars on the streets, people going about their evenings as if nothing had changed.",
    content:
      "I descended to it from a boat — not diving, more like sinking slowly and comfortably, the pressure never building. The city was a mid-century kind of place, wide boulevards and low brick buildings, yellow streetlights haloed in the water. People walked to restaurants. A couple argued outside what looked like a pharmacy. A bus made its slow turn at an intersection. Nobody acknowledged the water, including me after the first few minutes. I had an apartment somewhere in the city. I remember climbing stairs to it, unlocking a door, entering a small familiar space I didn't recognize. I stood at the window and watched the underwater street below and felt, with great clarity, completely at home.",
    real_life_context:
      "I had moved to a new city eight months prior. The adjustment had been harder than I expected — professionally fine, personally quite lonely.",
    dreamer_interpretation:
      "Belonging somewhere that's slightly wrong. The underwater city is the new city — I've made it liveable, made it mine, but there's still this ambient wrongness I've learned to stop noticing. The sense of being at home despite the strangeness felt accurate, and a little melancholy.",
  },
];

export const popularDreams: PopularDream[] = [
  ["Teeth Falling Out — What It Actually Means", "8.4k"],
  ["Flying Dreams and What Controls Them", "6.1k"],
  ["Being Chased: The Most Common Dream", "5.9k"],
  ["Dreaming of Someone Who Has Passed", "4.7k"],
];
