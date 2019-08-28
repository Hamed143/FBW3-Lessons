var list = document.getElementById('fbw3');
    var entry = document.getElementById('formAddName');
    entry.onsubmit = function(evt) {
    evt.preventDefault();
    var firstName = document.getElementById('firstName').value;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(firstName));
    list.appendChild(entry);
  }
