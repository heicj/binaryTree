import Node from '/Node.js';
let str = "This this, is a sample   sentence! Used - to  test?  binary tree sorting.";
// str.toLowerCase();
// let wordArr = str.split(' ')
// console.log(wordArr)
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

}

tree = new Tree()
// console.log(tree)

let wordArr = strToWordArr(str);

for(let i = 0; i < wordArr.length; i++){
  let word = wordArr[i];
  let n = new Node(word)
  tree.insert(n);
}

console.log(tree)

