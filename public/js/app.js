function Task(title){
  this.title = title;
  this.isComplete = false;
}

Task.prototype.complete = function(){
  this.isComplete = true;
  this.completedOn = new Date();
}

function TaskView(model){
  this.$el = $("<div>"); // if we defined this on the prototype they all share a div
  this.model = model;
}

TaskView.prototype = {
  template: _.template($("#task-template").html()),
  render: function(){
    var html = this.template(this.model);
    this.$el.html(html);
  },
  init: function(){
    this.render();
    this.$el.on("click", this, this.markComplete);
    $("#tasks").append(this.$el);
  },
  markComplete: function(e){
    var view = e.data;
    var task = view.model;
    task.complete();
    view.render();
  }
}

var TaskListView = {
  $el: $("#task-form"),
  keyUp: function(e){
    if (e.keyCode != 13) { return };
    this.createTask;
    this.$el.val("");
  },
  init: function(){
    $el.on("keyup", this, this.keyUp);)
  },
  createTask: function(){
    var taskData = $("#task").val();
    var taskModel = new Task(taskData);
    new TaskView(taskModel).init();
  }
};

t1 = new Task("clean up")
v1 = new TaskView(t1);
v1.init();