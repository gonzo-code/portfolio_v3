document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.talk-card').forEach(function (card) {
    var url = card.dataset.video;
    if (!url) return;
    var match = url.match(/(?:v=|youtu\.be\/)([\w-]{11})/);
    if (match) {
      var id = match[1];
      var img = card.querySelector('img');
      img.src = 'https://img.youtube.com/vi/' + id + '/hqdefault.jpg';
    }
  });
});
