function Task(title){
  this.title = title;
  this.isComplete = false;
}

Task.prototype.complete = function(){
  this.isComplete = true;
  this.completedOn = new Date();
}