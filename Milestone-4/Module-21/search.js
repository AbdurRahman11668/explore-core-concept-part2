// includes

const lyrics = 'Tumi bondu kala pakhi ami jeno ki';

const searchString = 'Pakhi'
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
// console.log(doesExistOneLine);


// ------------------------
// IndexOf
// console.log(lyrics.indexOf('pakhi'));


// ------------------------
// StartsWhith
console.log(lyrics.startsWith('Tumi'));

