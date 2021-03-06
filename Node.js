export default class Node{
  constructor(word, counter){
    this.count = 1;
    this.word = word;
    this.left = undefined;
    this.right = undefined;
    this.counter = counter;
  }

  insert(node){
    //compare which word comes first
    let n = this.word.localeCompare(node.word)

    if(n < 0){ //this node comes before node checking
      (this.right == undefined) ? this.right = node : this.right.insert(node)
    }else if (n > 0){ //node checking comes before this node
      (this.left == undefined) ? this.left = node : this.left.insert(node)
    }else{ //words are the same
      this.count++;
      }
    }

  get(word){
    console.log('checking node')
    this.counter();
    let n = this.word.localeCompare(word, 'en', { sensitivity: 'base' })

    let response = {}
    if(n == 0){
      response.word = this.word;
      response.count = this.count;
      return response
    }else if(n < 0 && this.right != undefined){ //this node comes before node checking
        return this.right.get(word)
    }else if (n > 0 && this.left != undefined){ //node checking comes before this node
        return this.left.get(word);
    }else{
      return -1;
    }
  }
}
