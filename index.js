function getFirstSelector(selector){
    return document.querySelector(selector);
};

function nestedTarget(){
  return document.querySelector('.target');
}

function increaseRankBy(n){
    var lists = document.getElementsByTagName("li");
    lists.forEach(function(i) {
      console.log(parseInt(lists[i].textContent, 10));
    })
  }

function deepestChild(){
  getElementById('grand-node');
}
