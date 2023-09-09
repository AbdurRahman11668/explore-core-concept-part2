const lyrics = 'Tumi bondu kala pakhi ami jeno ki';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
console.log(sentences);

const partial = lyrics.slice(5, 8);
console.log(partial);

const partial2 = lyrics.substring(5, 8);
console.log(partial2);

const lines = ['Tumi bondu kala pakhi ami jeno ki',
'Tumi bondu kala pakhi ami jeno ki',
'Tumi bondu kala pakhi ami jeno ki'];
const newSong = lines.join('... ');

console.log(newSong);