var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down")
var trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
  element.addEventListener('click', function(event) {
    const id = event.currentTarget.closest('.message')
      .querySelector('[data-user-id]').dataset.userId;

    fetch('/thumbUp', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    })
    .then(response => {
      if (!response.ok) throw new Error(`Vote request failed: ${response.status}`);
      return response.json();
    })
    .then(() => window.location.reload())
    .catch(error => console.error('Could not submit thumbs-up vote:', error));
  });
});

Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function(event) {
    const id = event.currentTarget.closest('.message')
      .querySelector('[data-user-id]').dataset.userId;

    fetch('/thumbsDown', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    })
    .then(response => {
      if (!response.ok) throw new Error(`Vote request failed: ${response.status}`);
      return response.json();
    })
    .then(() => window.location.reload())
    .catch(error => console.error('Could not submit thumbs-down vote:', error));
  });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const id = this.parentNode.parentNode.childNodes[1].dataset.userId // specific id 
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
           id
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
