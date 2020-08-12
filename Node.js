export default class Node{
  constructor(word){
    this.count = 1;
    this.word = word;
    this.left = undefined;
    this.right = undefined;
  }

  insert(node){
    // if(this.node.word == node.word) {
    //   this.count++;
    //   return
    // }

    //compare which word comes first
    let n = this.word.localeCompare(node.word)

    if(n < 0){
      //this comes before node word 
      (this.right == undefined) ? this.right = node : this.right.insert(node)
    }else if (n > 0){
      //node word comes before
      (this.left == undefined) ? this.left = node : this.left.insert(node)
    }else{
      this.count++;
      //equal
      }
    }
  }
