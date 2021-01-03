const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'ある日:insertx:はお菓子が食べたくなりました。 そして:inserty:を食べました。その後 :insertz:も食べました。花子は体重を聞いて絶叫しました。:insertx:の体重が300Kgになっている！';
let insertX = ['太郎','母','父'];
let insertY = ['ポテトチップス100枚','チョコレート1年分','揚げドーナツ30個'];
let insertZ = ['カツ丼10kg','チーズたっぷりピザ20枚','唐揚げ100個'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('花子',name);
  }

  

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
