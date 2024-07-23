const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
  },
  {
    id: 4,
    emoji: "🤓",
    name: "Nerd Face",
    meaning:
      "Huge glasses, awkward smile and buck teeth. Used humorously or ironically for nerds or to express how smart you are. Stereotype of a nerd; a smart but funny-dressed person with social deficits."
  },
  {
    "id": 5,
    "emoji": "😃",
    "name": "Grinning Face With Big Eyes",
    "meaning": "A face with a big open smile and open eyes, showing teeth. Often conveys enthusiasm and excitement."
  },
  {
    "id": 6,
    "emoji": "😄",
    "name": "Grinning Face With Smiling Eyes",
    "meaning": "A face with a big open smile, showing teeth, and smiling eyes. Often conveys general happiness and good-natured amusement."
  },
  {
    "id": 7,
    "emoji": "😁",
    "name": "Beaming Face With Smiling Eyes",
    "meaning": "A face with a broad open smile and smiling eyes, showing upper teeth and tongue. Often conveys excitement or happiness."
  },
  {
    "id": 8,
    "emoji": "😆",
    "name": "Grinning Squinting Face",
    "meaning": "A face with a big open smile, showing upper teeth and tongue, with eyes scrunched. Often conveys laughter, delight, and joy."
  },
  {
    "id": 9,
    "emoji": "😅",
    "name": "Grinning Face With Sweat",
    "meaning": "A face with a big open smile, showing upper teeth and a bead of sweat. Often conveys relief, nervousness, or awkwardness."
  },
  {
    "id": 10,
    "emoji": "😂",
    "name": "Face With Tears of Joy",
    "meaning": "A face with a big open smile, showing upper teeth, with tears of joy streaming down. Often conveys laughter, joy, and amusement."
  },
  {
    "id": 11,
    "emoji": "🤣",
    "name": "Rolling On The Floor Laughing",
    "meaning": "A face with a big open smile, showing upper teeth, rolling on the floor laughing. Often conveys intense laughter and amusement."
  },
  {
    "id": 12,
    "emoji": "😊",
    "name": "Smiling Face With Smiling Eyes",
    "meaning": "A face with a closed smile, showing eyes, often conveys happiness, satisfaction, and contentment."
  },
  {
    "id": 13,
    "emoji": "😇",
    "name": "Smiling Face With Halo",
    "meaning": "A face with a closed smile, showing eyes and a halo. Often conveys innocence, goodness, or angelic behavior."
  },
  {
    "id": 14,
    "emoji": "🙂",
    "name": "Slightly Smiling Face",
    "meaning": "A face with a slight smile, showing closed lips. Often conveys happiness, satisfaction, or friendliness."
  },
  {
    "id": 15,
    "emoji": "🙃",
    "name": "Upside-Down Face",
    "meaning": "A face with a closed smile, turned upside-down. Often conveys silliness, irony, or sarcasm."
  },
  {
    "id": 16,
    "emoji": "😉",
    "name": "Winking Face",
    "meaning": "A face with a closed smile, showing one eye closed in a wink. Often conveys humor, playfulness, or flirtation."
  },
  {
    "id": 17,
    "emoji": "😌",
    "name": "Relieved Face",
    "meaning": "A face with a closed smile, showing eyes, often conveys relief, satisfaction, or peace."
  },
  {
    "id": 18,
    "emoji": "😍",
    "name": "Smiling Face With Heart-Eyes",
    "meaning": "A face with a big open smile, showing heart-shaped eyes. Often conveys love, admiration, or adoration."
  },
  {
    "id": 19,
    "emoji": "🥰",
    "name": "Smiling Face With Hearts",
    "meaning": "A face with a big open smile, showing hearts around it. Often conveys love, affection, or adoration."
  },
  {
    "id": 20,
    "emoji": "😘",
    "name": "Face Blowing a Kiss",
    "meaning": "A face with a closed smile, showing eyes, and a heart being blown from its mouth. Often conveys love, affection, or a kiss."
  },
  {
    "id": 21,
    "emoji": "😗",
    "name": "Kissing Face",
    "meaning": "A face with closed eyes and puckered lips giving a kiss. Often conveys sentiments of love and affection."
  },
  {
    "id": 22,
    "emoji": "😙",
    "name": "Kissing Face With Smiling Eyes",
    "meaning": "A face with closed eyes and a slight smile, giving a kiss. Often conveys affectionate feelings."
  },
  {
    "id": 23,
    "emoji": "😚",
    "name": "Kissing Face With Closed Eyes",
    "meaning": "A face with closed eyes and puckered lips giving a kiss. Often conveys deep affection."
  },
  {
    "id": 24,
    "emoji": "😋",
    "name": "Face Savoring Food",
    "meaning": "A face with closed eyes, a broad smile, and a tongue sticking out, savoring delicious food. Often conveys delight in a tasty treat."
  },
  {
    "id": 25,
    "emoji": "😛",
    "name": "Face With Tongue",
    "meaning": "A face with a closed smile, open eyes, and a tongue sticking out. Often conveys playfulness or joking."
  },
  {
    "id": 26,
    "emoji": "😜",
    "name": "Winking Face With Tongue",
    "meaning": "A face with a closed smile, winking one eye, and a tongue sticking out. Often conveys joking or playful teasing."
  },
  {
    "id": 27,
    "emoji": "🤪",
    "name": "Zany Face",
    "meaning": "A face with one large and one small eye, a big grin, and a tongue sticking out. Often conveys silliness, craziness, or excitement."
  },
  {
    "id": 28,
    "emoji": "😝",
    "name": "Squinting Face With Tongue",
    "meaning": "A face with closed eyes, a broad smile, and a tongue sticking out. Often conveys playful teasing or silliness."
  },
  {
    "id": 29,
    "emoji": "🤑",
    "name": "Money-Mouth Face",
    "meaning": "A face with a broad smile, dollar signs for eyes, and a green dollar sign tongue. Often conveys wealth, money, or success."
  },
  {
    "id": 30,
    "emoji": "🤗",
    "name": "Smiling Face With Open Hands",
    "meaning": "A face with a broad smile and open hands. Often conveys a warm, friendly, or affectionate hug."
  },
  {
    "id": 31,
    "emoji": "🤭",
    "name": "Face With Hand Over Mouth",
    "meaning": "A face with a small smile and a hand covering the mouth. Often conveys coy laughter, embarrassment, or surprise."
  },
  {
    "id": 32,
    "emoji": "🤫",
    "name": "Shushing Face",
    "meaning": "A face with one finger over the mouth, making a shushing gesture. Often conveys quiet, secrecy, or confidentiality."
  },
  {
    "id": 33,
    "emoji": "🤔",
    "name": "Thinking Face",
    "meaning": "A face with a raised eyebrow, hand on chin, and small smile. Often conveys deep thought or contemplation."
  },
  {
    "id": 34,
    "emoji": "🤐",
    "name": "Zipper-Mouth Face",
    "meaning": "A face with closed eyes and a zipper for a mouth. Often conveys silence, keeping a secret, or being speechless."
  },,
  {
    "id": 35,
    "emoji": "🤨",
    "name": "Face With Raised Eyebrow",
    "meaning": "A face with one eyebrow raised, showing skepticism or mild surprise. Often conveys questioning or disapproval."
  },
  {
    "id": 36,
    "emoji": "😐",
    "name": "Neutral Face",
    "meaning": "A face with closed eyes and a straight mouth. Often conveys a neutral or indifferent emotion."
  },
  {
    "id": 37,
    "emoji": "😑",
    "name": "Expressionless Face",
    "meaning": "A face with closed eyes and a straight mouth, showing little emotion. Often conveys a lack of expression or feeling."
  },
  {
    "id": 38,
    "emoji": "😶",
    "name": "Face Without Mouth",
    "meaning": "A face with closed eyes and no mouth. Often conveys silence, secrecy, or being speechless."
  },
  {
    "id": 39,
    "emoji": "😏",
    "name": "Smirking Face",
    "meaning": "A face with a small, sly smile and eyes looking to the side. Often conveys smugness, self-satisfaction, or flirtation."
  },
  {
  "id": 40,
  "emoji": "😒",
  "name": "Unamused Face",
  "meaning": "A face with closed eyes, a small frown, and a sideways glance. Often conveys dissatisfaction, disapproval, or skepticism."
  }

];

export default emojipedia;
