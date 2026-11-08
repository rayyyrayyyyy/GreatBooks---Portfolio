export type Book = {
  id: string;
  title: string;
  author: string;
  year: string;
  category: "Prose" | "Poetry";
  lens: string;
  color: string;
  cover?: string;
  description: string;
  overview: string;
  themes: { title: string; text: string }[];
  reflection: string;
  quote?: string;
  quoteSource?: string;
};

export const books: Book[] = [
  {
    id: "whirlwind",
    title: "Voice Out of the Whirlwind",
    author: "Anonymous · The Book of Job",
    year: "Date uncertain",
    category: "Poetry",
    lens: "Philosophical & theological",
    color: "#e8e7e2",
    cover: "/images/whirlwind.svg",
    description: "Suffering, wonder, and the limits of human understanding.",
    overview:
      "In the Book of Job’s divine speeches, God answers Job out of a whirlwind. Rather than offering a simple explanation for Job’s suffering, the voice turns his attention toward the vastness of creation: the foundations of the earth, the sea, the stars, and creatures beyond human control. The passage challenges the assumption that the world’s meaning can be measured entirely by human experience.",
    themes: [
      {
        title: "The limits of knowledge",
        text: "The succession of questions reveals how little Job—and the reader—can claim to know about creation. The passage invites intellectual humility without making the experience of suffering any less real.",
      },
      {
        title: "Suffering and the search for justice",
        text: "Job’s pain challenges the belief that good people are always rewarded and suffering is always deserved. The divine response resists the tidy explanations offered by his companions.",
      },
      {
        title: "Wonder beyond certainty",
        text: "Images of wild animals, oceans, and stars shift the focus from a human-centered account of order to a creation larger and stranger than any individual can comprehend.",
      },
    ],
    reflection:
      "This passage invites me to recognize that not every painful experience has an explanation I can immediately understand. It also makes me question the impulse to explain away someone else’s suffering. Sometimes a more compassionate response begins with listening and admitting the limits of what I know.",
    quote: "Where wast thou when I laid the foundations of the earth?",
    quoteSource: "Job 38:4 · King James Version",
  },
  {
    id: "iliad",
    title: "The Iliad",
    author: "Homer",
    year: "c. 8th century BCE",
    category: "Poetry",
    lens: "Moral & ethical",
    color: "#efe5df",
    description: "The cost of wrath, the weight of honor, and shared grief.",
    overview:
      "Set during the Trojan War, The Iliad centers on Achilles’ anger and its devastating consequences. His dispute with Agamemnon, the death of Patroclus, and his confrontation with Hector reveal the tension between heroic glory and human vulnerability. The epic closes not with the fall of Troy, but with Hector’s funeral, bringing the losses of war into sharp focus.",
    themes: [
      {
        title: "Wrath and its consequences",
        text: "Achilles’ anger drives the poem, but its effects reach far beyond him. The epic asks what happens when personal injury and pride become more powerful than responsibility to others.",
      },
      {
        title: "Glory and mortality",
        text: "The desire for lasting honor exists beside the certainty of death. Heroic achievement can preserve a name, but it cannot protect a family from grief.",
      },
      {
        title: "Compassion across conflict",
        text: "Priam’s appeal to Achilles creates a moment of recognition between enemies. Their shared experience of loss briefly interrupts the logic of revenge.",
      },
    ],
    reflection:
      "The meeting between Priam and Achilles reminds me that an opponent is still a person with relationships, fears, and grief. The Iliad makes heroism feel more complicated: strength matters, but so does the ability to stop, listen, and recognize another person’s humanity.",
    quote: "Sing, O goddess, the anger of Achilles son of Peleus.",
    quoteSource: "The Iliad, Book I · Samuel Butler translation",
  },
  {
    id: "odyssey",
    title: "The Odyssey",
    author: "Homer",
    year: "c. 8th century BCE",
    category: "Poetry",
    lens: "Archetypal",
    color: "#e7edf0",
    description: "An enduring journey of resilience and belonging.",
    overview:
      "After the Trojan War, Odysseus faces a long and perilous voyage home to Ithaca. Monsters, temptations, and the will of the gods test his ingenuity, while Penelope and Telemachus navigate their own trials at home. Read through an archetypal lens, the epic becomes a study of the hero’s journey—and of what makes a place home.",
    themes: [
      {
        title: "The journey and the self",
        text: "Each challenge strips away certainty and asks Odysseus to adapt. His journey is geographical, but it is also a process of rediscovering his identity.",
      },
      {
        title: "Hospitality and belonging",
        text: "The treatment of strangers becomes a measure of a community’s values. Good hosts and dangerous hosts reveal the importance of mutual care.",
      },
      {
        title: "Loyalty and perseverance",
        text: "Penelope’s resourcefulness parallels Odysseus’s resilience. Their endurance reminds us that heroism can take many forms.",
      },
    ],
    reflection:
      "The Odyssey helps me see that getting lost, adapting, and beginning again can be part of a meaningful journey. Home is not only a destination; it is also the relationships and responsibilities that make returning worthwhile.",
    quote: "Tell me, O Muse, of that ingenious hero who travelled far and wide.",
    quoteSource: "The Odyssey, Book I · Samuel Butler translation",
  },
  {
    id: "sonnet-xviii",
    title: "Sonnet XVIII",
    author: "William Shakespeare",
    year: "1609",
    category: "Poetry",
    lens: "Formalist",
    color: "#e9ebe1",
    cover: "/images/sonnet-xviii.svg",
    description: "A summer’s beauty, preserved in fourteen lines.",
    overview:
      "Beginning with “Shall I compare thee to a summer’s day?”, Shakespeare’s Sonnet XVIII considers the beauty of the beloved beside the changing, imperfect beauty of nature. Its argument moves from summer’s brevity to the poem’s promise of endurance. The closing couplet places that promise in the hands of future readers: the beloved lives on as long as the verse is read.",
    themes: [
      {
        title: "Beauty and change",
        text: "Wind, heat, and the shortness of summer expose the instability of natural beauty. The comparison becomes a way to explore how everything living is subject to time.",
      },
      {
        title: "Poetry as preservation",
        text: "The poem proposes that art can keep a beloved presence alive beyond physical change. Its confidence depends on the continuing relationship between writing and reading.",
      },
      {
        title: "The turn and the couplet",
        text: "The shift at “But thy eternal summer” changes the direction of the argument. The final rhyming couplet completes it by making the poem itself the source of the beloved’s continued life.",
      },
    ],
    reflection:
      "Sonnet XVIII encourages me to look closely at the way form carries meaning. Fourteen lines can hold a complete movement of thought. It also makes me consider how words, photographs, and stories preserve the people and moments I do not want to forget.",
    quote:
      "So long as men can breathe or eyes can see,\nSo long lives this, and this gives life to thee.",
    quoteSource: "William Shakespeare · Sonnet XVIII, lines 13–14",
  },
  {
    id: "genji",
    title: "The Tale of Genji",
    author: "Murasaki Shikibu",
    year: "c. 1008",
    category: "Prose",
    lens: "Historical & cultural",
    color: "#eee5e6",
    description: "Love, courtly life, and the tenderness of impermanence.",
    overview:
      "Written by Murasaki Shikibu in Heian-period Japan, The Tale of Genji follows Hikaru Genji and the intricate relationships of the imperial court, before extending its attention to a later generation. Poetry, seasonal imagery, and social ritual reveal a world of extraordinary refinement, but also unequal power, longing, and emotional uncertainty.",
    themes: [
      {
        title: "The awareness of impermanence",
        text: "Seasonal changes and fleeting encounters make beauty inseparable from its passing. This sensitivity to transience, often discussed as mono no aware, gives the narrative much of its emotional depth.",
      },
      {
        title: "Love and unequal power",
        text: "Romantic relationships unfold within hierarchies of status and gender. Looking beyond the court’s elegance reveals how differently its customs affect people with less freedom.",
      },
      {
        title: "Expression and restraint",
        text: "Poems, letters, clothing, and carefully chosen gestures communicate feelings that cannot always be stated directly. Reading the social context becomes essential to understanding the characters.",
      },
    ],
    reflection:
      "The Tale of Genji asks me to notice the feelings hidden in small gestures and the customs shaping a person’s choices. It reminds me to approach an unfamiliar culture with curiosity while still paying attention to questions of power and care.",
  },
  {
    id: "divine-comedy",
    title: "Divine Comedy",
    author: "Dante Alighieri",
    year: "c. 1308–1321",
    category: "Poetry",
    lens: "Allegorical",
    color: "#e8e4dc",
    description: "From a dark wood toward understanding and renewal.",
    overview:
      "Dante’s journey through Inferno, Purgatorio, and Paradiso begins with a traveler lost in a dark wood. Guided first by Virgil and later by Beatrice, the pilgrim encounters souls whose stories connect personal choices with a larger moral and spiritual order. The poem draws on medieval Christianity, classical learning, and the politics of Dante’s own world.",
    themes: [
      {
        title: "The journey of transformation",
        text: "Moving through the three realms becomes an allegory of moral and spiritual growth. Understanding develops gradually as the pilgrim learns how to see beyond his first reactions.",
      },
      {
        title: "Choice and accountability",
        text: "The encounters link actions with consequences, often through symbolic correspondences. They invite reflection on responsibility while also revealing Dante’s particular historical and theological outlook.",
      },
      {
        title: "Guidance, reason, and love",
        text: "Virgil and Beatrice represent different kinds of guidance. The journey suggests that reason is indispensable, but that the poem’s vision of fulfillment also requires a transformation of desire.",
      },
    ],
    reflection:
      "The opening image of being lost makes a vast medieval poem feel personally accessible. Dante’s journey suggests that acknowledging confusion can be the beginning of growth, and that accepting guidance is not the opposite of finding my own way.",
    quote: "Midway upon the journey of our life\nI found myself within a forest dark.",
    quoteSource: "Inferno, Canto I · Henry Wadsworth Longfellow translation",
  },
  {
    id: "sonnet-ccxcii",
    title: "Sonnet CCXCII",
    author: "Francesco Petrarch",
    year: "14th century",
    category: "Poetry",
    lens: "Elegiac & formalist",
    color: "#e6e9df",
    cover: "/images/sonnet-ccxcii.svg",
    description: "Love endures where presence gives way to memory.",
    overview:
      "In Sonnet CCXCII from the Canzoniere, Petrarch recalls the beloved’s eyes, hands, hair, and smile before confronting the fact of her death. The beauty once celebrated in his love poetry is now dust, while the speaker remains alive without the light that guided him. The poem ends by imagining his song exhausted and his lyre turned toward weeping—a declaration of silence expressed through poetry itself.",
    themes: [
      {
        title: "Love, memory, and absence",
        text: "The opening catalogue makes the beloved vividly present in memory. The abrupt recognition of death then exposes the distance between what the speaker can remember and what he can recover.",
      },
      {
        title: "The fragility of beauty",
        text: "Golden hair and an almost heavenly smile are placed beside the image of unfeeling dust. That contrast gives the poem its emotional force: idealized beauty cannot escape mortality.",
      },
      {
        title: "The paradox of the grieving poet",
        text: "The speaker announces the end of his love song, yet this sonnet continues to give loss a form. Poetry becomes both a record of what language cannot restore and a way of bearing witness to love.",
      },
    ],
    reflection:
      "What draws me to Sonnet CCXCII is its honesty about the space someone leaves behind. Its movement from remembered beauty to grief makes love feel both fragile and enduring. Placed beside Shakespeare’s Sonnet XVIII, it offers a different possibility: poetry may not defeat loss, but it can give memory and sorrow a lasting voice.",
    quote: "et la cetera mia rivolta in pianto.",
    quoteSource: "Francesco Petrarch · Canzoniere 292, line 14 · original Italian",
  },
];

export const favoriteBook = books.find((book) => book.id === "sonnet-ccxcii")!;

export const learnings = [
  {
    icon: "history",
    title: "Historical context",
    short: "Seeing the world behind the words.",
    detail:
      "Placing each work in its cultural setting makes its questions more vivid. Ancient Greek honor, Heian courtly life, the medieval Christian cosmos, and Renaissance love poetry each bring different assumptions into view. Context helps me understand those differences without losing sight of shared human concerns.",
  },
  {
    icon: "search",
    title: "Literary lenses",
    short: "One work. Many ways of seeing.",
    detail:
      "Philosophical, moral, historical, allegorical, and formalist readings bring different questions into focus. A close reading of a sonnet’s turn reveals how form shapes emotion, while cultural context helps illuminate the social rituals in The Tale of Genji.",
  },
  {
    icon: "globe",
    title: "Human experiences",
    short: "Finding ourselves in unfamiliar lives.",
    detail:
      "Across these works, suffering, grief, love, homecoming, and the search for meaning take different forms. Reading Job beside Homer, Murasaki, Dante, Shakespeare, and Petrarch opens a conversation across cultures rather than reducing their differences to one universal answer.",
  },
  {
    icon: "thought",
    title: "Critical thinking",
    short: "Asking better questions, every day.",
    detail:
      "Comparing Shakespeare’s promise of poetic endurance with Petrarch’s grieving voice helps me resist easy conclusions. I can build a reading from specific images, shifts in tone, and structural choices, while recognizing that a translation also shapes the language I encounter.",
  },
];

export const reflections = [
  {
    number: "01",
    title: "A changed understanding",
    text: "These readings suggest that literature is not always there to resolve a question. Job’s unanswered suffering, Homer’s grieving heroes, and Petrarch’s sense of absence make room for uncertainty. Understanding can mean attending more carefully rather than arriving at a final explanation.",
    preview: "From finding the right answer to asking a better question.",
  },
  {
    number: "02",
    title: "Challenges & growth",
    text: "Epic poetry, unfamiliar courtly customs, and the compressed language of sonnets invite a slower kind of reading. Reading aloud, noting recurring images, and learning the historical context are ways to make these works more approachable without simplifying what makes them distinctive.",
    preview: "Learning to slow down when the words feel unfamiliar.",
  },
  {
    number: "03",
    title: "An influential lens",
    text: "A formalist reading of Sonnet CCXCII draws attention to the movement from remembered beauty to the speaker’s grief. Reading it beside Sonnet XVIII makes the contrast especially striking: one promises life through verse, while the other imagines a love song turning into tears.",
    preview: "Finding the shape of grief within fourteen lines.",
  },
  {
    number: "04",
    title: "Personal realizations",
    text: "Achilles’ encounter with Priam, the impermanence of Genji’s world, and Petrarch’s memories of the beloved all make vulnerability central to human experience. These works encourage me to see loss not as the opposite of love, but as something that can reveal its depth.",
    preview: "The works that speak of loss also reveal what matters.",
  },
  {
    number: "05",
    title: "Beyond the classroom",
    text: "I want to carry forward the patience to listen before judging, the humility to admit uncertainty, and the attention to notice beauty while it is here. These works offer different ways of practicing that care, from recognizing an enemy’s grief to preserving a loved one in words.",
    preview: "Carrying empathy and curiosity into the everyday.",
  },
];
