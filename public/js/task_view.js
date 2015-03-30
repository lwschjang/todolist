function ToDo(title){
  this.title = title;
  this.isComplete = false;
}

ToDo.prototype.complete = function(){
  this.isComplete = true;
}

function ToDoView(model){
	this.$el = $("<div>"); // if we define this on the prototype they all share a div
  this.model = model;
}

ToDoView.prototype = {
  template: _.template($("#todo-template").html()),
  render: function(){
    var html = this.template(this.model);
    this.$el.html(html);
  },
  init: function(){
    this.render();
    this.$el.on("click", this, this.markComplete);
    $("#todos").append(this.$el);
  },
  markComplete: function(e){
    var view = e.data;
    var todo = view.model;
    todo.complete();
    view.render();
  }
}

$("#new-todo").on("keyup", function(e){
if (e.keyCode != 13) { return };
var task = $(this).val();
var todo = new ToDo(task)
new ToDoView(todo).init();
$(this).val("");
});

t1 = new ToDo("clean up")
v1 = new ToDoView(t1);
v1.init();
