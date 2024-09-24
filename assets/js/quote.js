const quotes = [
    {
      text: 'Think of the life you have lived until now as over and, as a dead man, see what\'s left as a bonus and live it according to Nature. Love the hand that fate deals you and play it as your own, for what could be more fitting?',
      author: 'Marcus Aurelius'
    },
    {
      text: 'It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.',
      author: 'Marcus Aurelius'
    },
    {
      text: 'In your actions, don\'t procrastinate. In your conversations, don\'t confuse. In your thoughts, don\'t wander. In your soul, don\'t be passive or aggressive. In your life, don\'t be all about business.',
      author: 'Marcus Aurelius'
    },
    {
      text: 'If it is not right, do not do it, if it is not true, do not say it',
      author: 'Marcus Aurelius'
    },
    {
      text: 'The best revenge is not to be like your enemy.',
      author: 'Marcus Aurelius'
    },
    {
      text: 'Choose not to be harmed — and you won\'t feel harmed. Don\'t feel harmed — and you haven\'t been.',
      author: 'Marcus Aurelius'
    },
    {
      text: 'It\'s time you realized that you have something in you more powerful and miraculous than the things that affect you and make you dance like a puppet.',
      author: 'Marcus Aurelius'
    },
    {
      text: 'External things are not the problem. It\'s your assessment of them. Which you can erase right now.',
      author: 'Marcus Aurelius'
    },
    {
      text: 'If anyone can refute me—show me I\'m making a mistake or looking at things from the wrong perspective—I\'ll gladly change. It\'s the truth I\'m after, and the truth never harmed anyone.',
      author: 'Marcus Aurelius'
    },
    {
      text: 'You could leave life right now. Let that determine what you do and say and think.',
      author: 'Marcus Aurelius'
    },
    {
      text: 'Be tolerant with others and strict with yourself.',
      author: 'Marcus Aurelius'
    },
    {
      text: 'We are more often frightened than hurt; and we suffer more in imagination than in reality.',
      author: 'Seneca'
    },
    {
      text: 'If a man knows not which port he sails, no wind is favorable.',
      author: 'Seneca'
    },
    {
      text: 'No person has the power to have everything they want, but it is in their power not to want what they don\'t have, and to cheerfully put to good use what they do have.',
      author: 'Seneca'
    },
    {
      text: 'Nothing, to my way of thinking, is a better proof of a well ordered mind than a man\'s ability to stop just where he is and pass some time in his own company.',
      author: 'Seneca'
    },
    {
      text: 'He who fears death will never do anything worthy of a man who is alive.',
      author: 'Seneca'
    },
    {
      text: 'This is our big mistake: to think we look forward to death. Most of death is already gone. Whatever time has passed is owned by death.',
      author: 'Seneca'
    },
    {
      text: 'Life is very short and anxious for those who forget the past, neglect the present, and fear the future.',
      author: 'Seneca'
    },
    {
      text: 'I judge you unfortunate because you have never lived through misfortune. You have passed through life without an opponent—no one can ever know what you are capable of, not even you.',
      author: 'Seneca'
    },
    {
      text: 'How does it help…to make troubles heavier by bemoaning them?',
      author: 'Seneca'
    },
    {
      text: 'People are frugal in guarding their personal property; but as soon as it comes to squandering time they are most wasteful of the one thing in which it is right to be stingy.',
      author: 'Seneca'
    },
    {
      text: 'How long are you going to wait before you demand the best for yourself?',
      author: 'Epictetus'
    },
    {
      text: 'Don\'t seek for everything to happen as you wish it would, but rather wish that everything happens as it actually will—then your life will flow well.',
      author: 'Epictetus'
    },
    {
      text: 'First say to yourself what you would be; and then do what you have to do.',
      author: 'Epictetus'
    },
    {
      text: 'Curb your desire—don\'t set your heart on so many things and you will get what you need.',
      author: 'Epictetus'
    },
    {
      text: 'That\'s why the philosophers warn us not to be satisfied with mere learning, but to add practice and then training. For as time passes we forget what we learned and end up doing the opposite, and hold opinions the opposite of what we should.',
      author: 'Epictetus'
    },
    {
      text: 'Don\'t explain your philosophy. Embody it.',
      author: 'Epictetus'
    },
    {
      text: 'The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control. Where then do I look for good and evil? Not to uncontrollable externals, but within myself to the choices that are my own…',
      author: 'Epictetus'
    },
    {
      text: 'If anyone tells you that a certain person speaks ill of you, do not make excuses about what is said of you but answer, He was ignorant of my other faults, else he would have not mentioned these alone.',
      author: 'Epictetus'
    },
    {
      text: 'I begin to speak only when I\'m certain what I\'ll say isn\'t better left unsaid.',
      author: 'Cato'
    },
    {
      text: 'What man actually needs is not a tensionless state but rather the striving and struggling for some goal worthy of him.',
      author: 'Viktor Frankl'
    },
    {
      text: 'When we are no longer able to change a situation, we are challenged to change ourselves.',
      author: 'Viktor Frankl'
    },
    {
      text: 'Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.',
      author: 'Marcus Aurelius'
    },
    {
      text: '"The greatest obstacle to living is expectancy, which hangs upon tomorrow and loses today.',
      author: 'Seneca'
    },
    {
      text: 'Well-being is realized by small steps, but is truly no small thing.',
      author: 'Zeno'
    },
    {
      text: 'Happiness is a good flow of life',
      author: 'Zeno'
    },
    {
      text: 'Better to trip with the feet than with the tongue.',
      author: 'Zeno'
    },
    {
      text: 'We have two ears and one mouth, so we should listen more than we say.',
      author: 'Zeno'
    },
    {
      text: 'Man conquers the world by conquering himself.',
      author: 'Zeno'
    },
    {
      text: 'A bad feeling is a commotion of the mind repugnant to reason, and against nature.',
      author: 'Zeno'
    },
    {
      text: 'If you lay violent hands on me, you\'ll have my body, but my mind will remain with Stilpo.',
      author: 'Zeno'
    },
    {
      text: 'The goal of life is living in agreement with Nature.',
      author: 'Zeno'
    },
    {
      text: 'When we are no longer able to change a situation, we are challenged to change ourselves.',
      author: 'Viktor Frankl'
    },
    {
      text: 'Everything can be taken from a man but one thing . . . to choose one\'s attitude in any given set of circumstances.',
      author: 'Viktor Frankl'
    },
    {
      text: 'Suffering ceases to be suffering at the moment it finds a meaning, such as the meaning of sacrifice.',
      author: 'Viktor Frankl'
    },
    {
      text: 'Life is not a quest for pleasure, or for power, but a quest for meaning.',
      author: 'Viktor Frankl'
    },
    {
      text: 'The greatest task for any person is to find the meaning of his or her life.',
      author: 'Viktor Frankl'
    },
    {
      text: 'Life is never made unbearable by circumstances, but only by lack of meaning and purpose.',
      author: 'Viktor Frankl'
    },
    {
      text: 'Live as though you are living a second time, and as though you had acted wrongly the first time.',
      author: 'Viktor Frankl'
    },
    {
      text: 'No man should judge unless he asks himself . . . whether in a similar situation, he might not have done the same.',
      author: 'Viktor Frankl'
    },
    {
      text: 'Success is total self-acceptance.',
      author: 'Viktor Frankl'
    }
  ];
  
