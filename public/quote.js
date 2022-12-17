(function () {
  let quotes = [
    `“Be the person you needed when you were younger.”`,
    `“If you want to lift yourself up, lift up someone else.”`,
    `“Don't envy what people have, emulate what they did to have it.”`,
    `“Be a prisoner of the past or a pioneer of the future. The choice is yours.”`,
    `“As you think, so shall you become.”`,
    `“Don't be pushed by your problems. Be led by your dreams.”`,
    `“Rise above the storm and you will find the sunshine.”`,
    `“The most courageous act is still to think for yourself. Aloud.”`,
    `“Sometimes life hits you in the head with a brick. Don't lose faith.”`,
    `“Life is the art of drawing sufficient conclusions from insufficient premises.”`,
    `“When money speaks, the truth keeps silent.”`,
    `“Better the last smile than the first laughter.”`,
    `“In the morning of life, work; in the midday, give counsel; in the evening, pray.”`,
    `“A poet is the painter of the soul.”`,
    `“Give me liberty, or give me death.”`,
    `“Good fences makes good neighbors.”`,
    `“Better is to bow than break.”`,
    `“All fortune is to be conquered by bearing it.”`,
    `“The most beautiful thing in the world is, of course, the world itself.”`,
    `“The difficulty in life is the choice.”`,
    `“In giving advice, seek to help, not to please, your friend.”`,
    `“A gift in season is a double favor to the needy.”`,
    `“Choose a job you love and you’ll never have to work a day in your life.”`,
    `“We all have two lives, the second begins when we realise we only have one.”`,
    `“Life is like riding a bicycle. In order to keep your balance, you must keep moving.”`,
    `“What lies behind us and what lies ahead of us are tiny matters compared to what lies within us.”`,
    `“The greatest glory in living lies not in never falling, but in rising every time we fall.”`,
    `“A winner is a dreamer who never gives up.”`,
    `“Love doesn’t make the world go round. Love is what makes the ride worthwhile.”`,
    `“The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.”`,
    `“I don’t want to be the next Bruce Lee, I want to be the first Jackie Chan.”`,
    `“Two things are infinite: the universe and human stupidity; and I’m not sure about the universe.”`,
    `“Something I find profoundly humbling is to note that human genius is limited while human stupidity is not.”`,
  ];

  let quoteElement = document.getElementById("quotemsg");
  let rand = Math.floor(Math.random() * quotes.length);
  let quote = quotes[rand];
  quoteElement.innerText = quote;
})();
