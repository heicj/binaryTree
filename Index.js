import Node from '/Node.js';
import Tree from '/Tree.js';

const form = document.getElementById('form');
const resultP = document.getElementById('result')

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  let tree = new Tree()

  let str = e.target[0].value // this gets value from text area;
  let word = e.target[1].value //this gets value for word to look for;
  let wordArr = strToWordArr(str);

  for(let i = 0; i < wordArr.length; i++){
    let word = wordArr[i];
    let n = new Node(word)
    tree.insert(n);
  }

  let r = tree.get(word) //returns -1 if tree doesn't contain word
  if(r != -1){
    resultP.innerHTML = `The word "${r.word}" appears ${r.count} times in the text of ${wordArr.length} words.`
  }else{
    resultP.innerHTML = `The word "${word}" is not in the text.`
  }
  console.log(wordArr.length)
  console.log(tree.get(word))

})

function strToWordArr(str){
  let punctuationless = str.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"");
  let finalString = punctuationless.replace(/\s{2,}/g," ");
  finalString = finalString.toLowerCase();
  return finalString.split(' ')
}
