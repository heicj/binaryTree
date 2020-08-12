import Node from '/Node.js';
import { txt } from '/text.js'
let str = txt;
let tree;

function strToWordArr(str){
  let punctuationless = str.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"");
  let finalString = punctuationless.replace(/\s{2,}/g," ");
  finalString = finalString.toLowerCase();
  return finalString.split(' ')
}

strToWordArr(str)

class Tree{
  constructor(){
    this.root = null;
  }

  insert(node){
    if(this.root == null){
      this.root = node;
    }else{
      this.root.insert(node)
    }
  }

  get(word){
    return (this.root == null) ? undefined : this.root.get(word) 
  };
}

tree = new Tree()

let wordArr = strToWordArr(str);
console.log('length of array', wordArr.length)
for(let i = 0; i < wordArr.length; i++){
  let word = wordArr[i];
  let n = new Node(word)
  tree.insert(n);
}

console.log(tree)
console.log(tree.get('my'))

