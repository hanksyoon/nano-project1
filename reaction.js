var bb = document.querySelector('.big-box');
var sb = document.getElementsByClassName('small-box');
var front = document.getElementsByClassName('front')

document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');
});

console.log(front);

for (var i = 0; i < sb.length; i++) {
  sb[i].addEventListener('click', function () {
    if (this.style.backgroundColor == 'green') {
      this.style.backgroundColor = 'blue';
      front[i].style.visibility = 'hidden';

    } else {
      this.style.backgroundColor = 'green';
      front[1].style.visibility = 'visible';
    }
  });
}

for (var i = 0; i < sb.length; i++) {
  sb[i].addEventListener('click', function () {
    if (this.style.backgroundColor == 'green') {
      this.style.backgroundColor = 'blue';
      front[i].style.visibility = 'hidden';

    } else {
      this.style.backgroundColor = 'green';
      front[1].style.visibility = 'visible';
    }
  });
}
