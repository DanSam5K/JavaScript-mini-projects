let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//split the string into individual word
const storyWords = story.split(' ');

//console.log(storyWords);

// better words from story words
const betterWords = storyWords.filter(words => {
  return !unnecessaryWords.includes(words)
 });

//console.log(betterWords);

//overused word number times its occur
 let reallyCount = 0;
 let veryCount = 0;
 let basicallyCount = 0;
 let rightCount = 0;
 //let user know how many times they have used words both overused and rightly
 const overUsed = betterWords.forEach(word =>{
   if(word === "really"){
     return reallyCount += 1;
   } else if(word === "very") {
     return veryCount += 1;
   } else if(word === "basically"){
     return basicallyCount += 1;
   } else {
     return rightCount += 1;
   }
 });

 //how many sentence are in the paragraph all sentences ends with (. or !)
let sentences = 0;
storyWords.forEach(word => {
  if(word[word.length -1] === '.' || word[word.length -1] === '!' ){
    return sentences += 1;
  }
});


 console.log("Really Count: ", reallyCount);
 console.log("Very Count: ", veryCount)
 console.log("Basically Count: ", basicallyCount)
 console.log("Right Count: ", rightCount)
 console.log("Number of sentences: ", sentences)
 console.log("Better words used:", betterWords.length);