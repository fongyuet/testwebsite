window.onload = function() {
    //draggable(document.getElementById('drag'))
    var arr = document.querySelectorAll("#drag");

    for (var i = 0; i < arr.length; i++) {
        if (topics[i] == null) {
            arr[i].innerHTML = ""
        } else {
            arr[i].innerHTML = topics[i]
        }
        draggable(arr[i]);
    }

    var arr1 = document.querySelectorAll("#start");
    for (var i = 0; i < arr1.length; i++) {
        if (topics[i] == null) {
            arr1[i].innerHTML = ""
        } else {
            arr1[i].innerHTML = topics[i]
        }
    }
}
  function draggable(el) {
    el.addEventListener('mousedown', function(e) {
      var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
      var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);
      
      function mouseMoveHandler(e) {
        el.style.top = (e.clientY - offsetY) + 'px';
        el.style.left = (e.clientX - offsetX) + 'px';
      }
  
      function reset() {
        window.removeEventListener('mousemove', mouseMoveHandler);
        window.removeEventListener('mouseup', reset);
      }
  
      window.addEventListener('mousemove', mouseMoveHandler);
      window.addEventListener('mouseup', reset);
    });
  }

  var topics = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen"];

var inputF = document.getElementById('add');

function setTopic() {
    topics.push(inputF.value)
    var arr = document.querySelectorAll("#drag");

    for (var i = 0; i < arr.length; i++) {
        if (topics[i] == null) {
            arr[i].innerHTML = ""
        } else {
            arr[i].innerHTML = topics[i]
        }
        draggable(arr[i]);
    }

    var arr1 = document.querySelectorAll("#start");
    for (var i = 0; i < arr1.length; i++) {
        if (topics[i] == null) {
            arr1[i].innerHTML = ""
        } else {
            arr1[i].innerHTML = topics[i]
        }
    }
    inputF.value = ""
}

function reset() {
    topics = []
    var arr = document.querySelectorAll("#drag");
    for (var i = 0; i < arr.length; i++) {
        if (topics[i] == null) {
            arr[i].innerHTML = ""
        } else {
            arr[i].innerHTML = topics[i]
        }
        draggable(arr[i]);
    }

    var arr1 = document.querySelectorAll("#start");
    for (var i = 0; i < arr1.length; i++) {
        if (topics[i] == null) {
            arr1[i].innerHTML = ""
        } else {
            arr1[i].innerHTML = topics[i]
        }
    }
}

var inputT = document.getElementById('topic');

function setTopicTitle() {
    var topicT = document.getElementById("title2");
    topicT.innerHTML = inputT.value
    inputT.value = ""
}
//}