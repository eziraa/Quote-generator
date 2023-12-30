const localQuotes = [
  {
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },

    author: "Thomas Edison",
  },
  {
    text: "You can observe a lot just by watching.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Yogi Berra",
  },
  {
    text: "A house divided against itself cannot stand.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Abraham Lincoln",
  },
  {
    text: "Difficulties increase the nearer we get to the goal.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Fate is in your hands and no one elses",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Byron Pulsifer",
  },
  {
    text: "Be the chief but never the lord.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Lao Tzu",
  },
  {
    text: "Nothing happens unless first we dream.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Carl Sandburg",
  },
  {
    text: "Well begun is half done.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Aristotle",
  },
  {
    text: "Life is a learning experience, only if you learn.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Yogi Berra",
  },
  {
    text: "Self-complacency is fatal to progress.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Margaret Sangster",
  },
  {
    text: "Peace comes from within. Do not seek it without.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Buddha",
  },
  {
    text: "What you give is what you get.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Byron Pulsifer",
  },
  {
    text: "We can only learn to love by loving.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Iris Murdoch",
  },
  {
    text: "Life is change. Growth is optional. Choose wisely.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Karen Clark",
  },
  {
    text: "You'll see it when you believe it.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Wayne Dyer",
  },
  {
    text: "Today is the tomorrow we worried about yesterday.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: null,
  },
  {
    text: "It's easier to see the mistakes on someone else's paper.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: null,
  },
  {
    text: "Every man dies. Not every man really lives.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: null,
  },
  {
    text: "To lead people walk behind them.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Lao Tzu",
  },
  {
    text: "Having nothing, nothing can he lose.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "William Shakespeare",
  },
  {
    text: "Trouble is only opportunity in work clothes.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Henry J. Kaiser",
  },
  {
    text: "A rolling stone gathers no moss.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Publilius Syrus",
  },
  {
    text: "Ideas are the beginning points of all fortunes.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Napoleon Hill",
  },
  {
    text: "Everything in life is luck.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Donald Trump",
  },
  {
    text: "Doing nothing is better than being busy doing nothing.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Lao Tzu",
  },
  {
    text: "Trust yourself. You know more than you think you do.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Benjamin Spock",
  },
  {
    text: "Study the past, if you would divine the future.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Confucius",
  },
  {
    text: "The day is already blessed, find peace within it.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: null,
  },
  {
    text: "From error to error one discovers the entire truth.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Sigmund Freud",
  },
  {
    text: "Well done is better than well said.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Benjamin Franklin",
  },
  {
    text: "Bite off more than you can chew, then chew it.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Ella Williams",
  },
  {
    text: "Work out your own salvation. Do not depend on others.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Buddha",
  },
  {
    text: "One today is worth two tomorrows.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Benjamin Franklin",
  },
  {
    text: "Once you choose hope, anythings possible.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Christopher Reeve",
  },
  {
    text: "God always takes the simplest way.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Albert Einstein",
  },
  {
    text: "One fails forward toward success.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Charles Kettering",
  },
  {
    text: "From small beginnings come great things.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: null,
  },
  {
    text: "Learning is a treasure that will follow its owner everywhere",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Chinese proverb",
  },
  {
    text: "Be as you wish to seem.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Socrates",
  },
  {
    text: "The world is always in movement.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "V. Naipaul",
  },
  {
    text: "Never mistake activity for achievement.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "John Wooden",
  },
  {
    text: "What worries you masters you.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Haddon Robinson",
  },
  {
    text: "One faces the future with ones past.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Pearl Buck",
  },
  {
    text: "Goals are the fuel in the furnace of achievement.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Brian Tracy",
  },
  {
    text: "Who sows virtue reaps honour.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Leonardo da Vinci",
  },
  {
    text: "Be kind whenever possible. It is always possible.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Dalai Lama",
  },
  {
    text: "Talk doesn't cook rice.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Chinese proverb",
  },
  {
    text: "He is able who thinks he is able.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Buddha",
  },
  {
    text: "A goal without a plan is just a wish.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Larry Elder",
  },
  {
    text: "To succeed, we must first believe that we can.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Michael Korda",
  },
  {
    text: "Learn from yesterday, live for today, hope for tomorrow.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Albert Einstein",
  },
  {
    text: "A weed is no more than a flower in disguise.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "James Lowell",
  },
  {
    text: "Do, or do not. There is no try.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Yoda",
  },
  {
    text: "All serious daring starts from within.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Harriet Beecher Stowe",
  },
  {
    text: "The best teacher is experience learned from failures.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Byron Pulsifer",
  },
  {
    text: "Think how hard physics would be if particles could think.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Murray Gell-Mann",
  },
  {
    text: "Love is the flower you've got to let grow.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "John Lennon",
  },
  {
    text: "Don't wait. The time will never be just right.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Napoleon Hill",
  },
  {
    text: "Time is the wisest counsellor of all.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Pericles",
  },
  {
    text: "You give before you get.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Napoleon Hill",
  },
  {
    text: "Wisdom begins in wonder.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Socrates",
  },
  {
    text: "Without courage, wisdom bears no fruit.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Baltasar Gracian",
  },
  {
    text: "Change in all things is sweet.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Aristotle",
  },
  {
    text: "What you fear is that which requires action to overcome.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Byron Pulsifer",
  },
  {
    text: "When performance exceeds ambition, the overlap is called success.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Cullen Hightower",
  },
  {
    text: "When deeds speak, words are nothing.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "African proverb",
  },
  {
    text: "Real magic in relationships means an absence of judgement of others.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Wayne Dyer",
  },
  {
    text: "I never think of the future. It comes soon enough.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Albert Einstein",
  },
  {
    text: "Skill to do comes of doing.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Ralph Emerson",
  },
  {
    text: "Wisdom is the supreme part of happiness.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Sophocles",
  },
  {
    text: "I believe that every person is born with talent.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Maya Angelou",
  },
  {
    text: "Important principles may, and must, be inflexible.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Abraham Lincoln",
  },
  {
    text: "The undertaking of a new action brings new strength.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Richard Evans",
  },
  {
    text: "The years teach much which the days never know.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Ralph Emerson",
  },
  {
    text: "Our distrust is very expensive.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Ralph Emerson",
  },
  {
    text: "All know the way; few actually walk it.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Bodhidharma",
  },
  {
    text: "Great talent finds happiness in execution.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Faith in oneself is the best and safest course.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Michelangelo",
  },
  {
    text: "Courage is going from failure to failure without losing enthusiasm.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Winston Churchill",
  },
  {
    text: "The two most powerful warriors are patience and time.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Leo Tolstoy",
  },
  {
    text: "Anticipate the difficult by managing the easy.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Lao Tzu",
  },
  {
    text: "Those who are free of resentful thoughts surely find peace.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Buddha",
  },
  {
    text: "A short saying often contains much wisdom.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Sophocles",
  },
  {
    text: "It takes both sunshine and rain to make a rainbow.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: null,
  },
  {
    text: "A beautiful thing is never perfect.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: null,
  },
  {
    text: "Only do what your heart tells you.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Princess Diana",
  },
  {
    text: "Life is movement-we breathe, we eat, we walk, we move!",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "John Pierrakos",
  },
  {
    text: "No one can make you feel inferior without your consent.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Eleanor Roosevelt",
  },
  {
    text: "Argue for your limitations, and sure enough theyre yours.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Richard Bach",
  },
  {
    text: "Luck is what happens when preparation meets opportunity.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Seneca",
  },
  {
    text: "Victory belongs to the most persevering.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Napoleon Bonaparte",
  },
  {
    text: "Love all, trust a few, do wrong to none.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "William Shakespeare",
  },
  {
    text: "In order to win, you must expect to win.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Richard Bach",
  },
  {
    text: "A goal is a dream with a deadline.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Napoleon Hill",
  },
  {
    text: "You can do it if you believe you can!",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Napoleon Hill",
  },
  {
    text: "Set your goals high, and don't stop till you get there.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Bo Jackson",
  },
  {
    text: "Every new day is another chance to change your life.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: null,
  },
  {
    text: "Smile, breathe, and go slowly.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Thich Nhat Hanh",
  },
  {
    text: "Nobody will believe in you unless you believe in yourself.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Liberace",
  },
  {
    text: "Do more than dream: work.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "William Arthur Ward",
  },
  {
    text: "No man was ever wise by chance.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Seneca",
  },
  {
    text: "Some pursue happiness, others create it.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: null,
  },
  {
    text: "He that is giddy thinks the world turns round.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "William Shakespeare",
  },
  {
    text: "Don't ruin the present with the ruined past.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Ellen Gilchrist",
  },
  {
    text: "Do something wonderful, people may imitate it.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Albert Schweitzer",
  },
  {
    text: "We do what we do because we believe.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: null,
  },
  {
    text: "Do one thing every day that scares you.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Eleanor Roosevelt",
  },
  {
    text: "If you cannot be silent be brilliant and thoughtful.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Byron Pulsifer",
  },
  {
    text: "Who looks outside, dreams; who looks inside, awakes.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Carl Jung",
  },
  {
    text: "What we think, we become.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Buddha",
  },
  {
    text: "The shortest answer is doing.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Lord Herbert",
  },
  {
    text: "All our knowledge has its origins in our perceptions.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Leonardo da Vinci",
  },
  {
    text: "The harder you fall, the higher you bounce.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: null,
  },
  {
    text: "Trusting our intuition often saves us from disaster.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Anne Wilson Schaef",
  },
  {
    text: "Truth is powerful and it prevails.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Sojourner Truth",
  },
  {
    text: "Light tomorrow with today!",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Elizabeth Browning",
  },
  {
    text: "Silence is a fence around wisdom.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "German proverb",
  },
  {
    text: "Society develops wit, but its contemplation alone forms genius.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Madame de Stael",
  },
  {
    text: "The simplest things are often the truest.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Richard Bach",
  },
  {
    text: "Everyone smiles in the same language.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: null,
  },
  {
    text: "Yesterday I dared to struggle. Today I dare to win.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Bernadette Devlin",
  },
  {
    text: "No alibi will save you from accepting the responsibility.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Napoleon Hill",
  },
  {
    text: "If you can dream it, you can do it.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Walt Disney",
  },
  {
    text: "It is better to travel well than to arrive.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Buddha",
  },
  {
    text: "Life shrinks or expands in proportion to one's courage.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Anais Nin",
  },
  {
    text: "You have to believe in yourself.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Sun Tzu",
  },
  {
    text: "Our intention creates our reality.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Wayne Dyer",
  },
  {
    text: "Silence is a true friend who never betrays.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Confucius",
  },
  {
    text: "Character develops itself in the stream of life.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "From little acorns mighty oaks do grow.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "American proverb",
  },
  {
    text: "You can't stop the waves, but you can learn to surf.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Jon Kabat-Zinn",
  },
  {
    text: "Reality does not conform to the ideal, but confirms it.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Gustave Flaubert",
  },
  {
    text: "Speak low, if you speak love.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "William Shakespeare",
  },
  {
    text: "A really great talent finds its happiness in execution.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Reality leaves a lot to the imagination.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "John Lennon",
  },
  {
    text: "The greatest remedy for anger is delay.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Seneca",
  },
  {
    text: "Growth itself contains the germ of happiness.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: "Pearl Buck",
  },
  {
    text: "You can do what's reasonable or you can decide what's possible.",

    rection: {
      like: 0,
      dislike: 0,
      love: 0,
      vomit: 0,
    },
    author: null,
  },
];

let getQuote = () =>
  localQuotes[Math.floor(Math.random() * localQuotes.length)];
let current_quote = getQuote();

let generateNewQuote = (current_quote) => {
  document.querySelector(".quote-text").textContent = current_quote.text;
  document.querySelector(".quote-author").textContent = current_quote.author;
};
document.getElementById("new-quote").addEventListener("click", function () {
  current_quote = getQuote();
  generateNewQuote(current_quote);
});

document.querySelector("#btn-like").addEventListener("click", function () {
  this.style.backgroundColor = "blue";
  this.style.borderRadius = "40px";
  this.textContent = `👍 ${12}`;
});
generateNewQuote(current_quote);

// Handling reaction to the quote

// Handle like btn
document.querySelector("#btn-like").addEventListener("click", function () {
  this.style.backgroundColor = "green";
  this.style.borderRadius = "40px";
  current_quote.rection["like"]++;
  this.textContent = `👍 ${current_quote.rection["like"]}`;
});

// Handle dislike btn

document.querySelector("#btn-dislike").addEventListener("click", function () {
  this.style.backgroundColor = "red";
  this.style.borderRadius = "40px";
  current_quote.rection["dislike"]++;
  this.textContent = `👎 ${current_quote.rection["dislike"]}`;
});

// Handle love btn

document.querySelector("#btn-love").addEventListener("click", function () {
  this.style.backgroundColor = "blue";
  this.style.borderRadius = "40px";
  current_quote.rection["love"]++;
  this.textContent = `❤️ ${current_quote.rection["love"]}`;
});

// Handle dislike btn

document.querySelector("#btn-vomit").addEventListener("click", function () {
  this.style.backgroundColor = "yellow";
  this.style.borderRadius = "40px";
  current_quote.rection["vomit"]++;
  this.textContent = `🤮 ${current_quote.rection["vomit"]}`;
});



