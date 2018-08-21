function increment(selector) {
  let container= $(selector);
  let fragment= document.createDocumentFragment(); //za nego zakachame vs.neshta i posle za dom!
  let textArea=$("<textarea>");
  let incrementButt= $("<button>Increment</button>");
  let addButton= $("<button> ADD </button>");
  let list = $("<ul>");
  //textarea
  textArea.addClass("counter");
  textArea.val(0);
  textArea.attr("disabled",true);
  //increment
  incrementButt.attr("id","incrementBtn");

  addButton.attr("id","addBtn");
  //list
  list.addClass("results");
  //events
  $(incrementButt).on("click",function(){
    textArea.val(+textArea.val()+1)
  })
  $(addButton).on("click",function(){
    let li=$(`<li>${textArea.val()}</li>`);
    li.appendTo(list);
  })
  textArea.appendTo(fragment);
  incrementButt.appendTo(fragment);
  addButton.appendTo(fragment);
  list.appendTo(fragment);
  container.append(fragment);

}
