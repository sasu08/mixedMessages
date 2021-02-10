// The next phrases was generated from https://randomwordgenerator.com/sentence.php

const phrases = [
    'They did nothing as the raccoon attacked the lady’s bag of food.',
    'She was amazed by the large chunks of ice washing up on the beach.',
    'The Great Dane looked more like a horse than a dog.',
    'There aren\'t enough towels in the world to stop the sewage flowing from his mouth.',
    'She had some amazing news to share but nobody to share it with.',
    'I’m working on a sweet potato farm.',
    'He barked orders at his daughters but they just stared back with amusement.',
    'Peanut butter and jelly caused the elderly lady to think about her past.',
    'The murder hornet was disappointed by the preconceived ideas people had of him.',
    'There\'s a message for you if you look up.'
]

function randomPhrase(){
    number = Math.floor(Math.random() * 11);
    return phrases[number];
}

console.log(randomPhrase());