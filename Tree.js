export default class Tree{
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