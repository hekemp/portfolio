var modalHtmlForGame, thumbnailHtmlForGame;

thumbnailHtmlForGame = function(game, index) {
  var html;
  html = '';
  html += '<div class="col-sm-4 portfolio-item">';
  html += '\t<a href="#" class="portfolio-link" data-toggle="modal" data-target="#modal' + index + '">';
  html += '\t\t<div class="caption">';
  html += '\t\t\t<div class="caption-content">';
  html += '\t\t\t\t<i class="fa fa-search-plus fa-3x"></i>';
  html += '\t\t\t</div>';
  html += '\t\t</div>';
  html += '\t\t<img src="img/portfolio/' + game.thumbnail_img + '" class="img-fluid" alt="">';
  html += '\t</a>';
  html += '</div>';
  return html;
};

modalHtmlForGame = function(game, index) {
  var html;
  html = '';
  html += '<div class="modal fade" id="modal' + index + '" tabindex="-1" role="dialog" aria-hidden="true">';
  html += '\t<div class="modal-dialog modal-lg">';
  html += '\t\t<div class="modal-content">';
  html += '\t\t\t<div class="modal-header">';
  html += '\t\t\t\t<h5 class="modal-title">' + game.title + '</h5>';
  html += '\t\t\t\t<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
  html += '\t\t\t\t\t<span aria-hidden="true">&times;</span>';
  html += '\t\t\t\t</button>';
  html += '\t\t\t</div>';
  html += '\t\t\t<div class="modal-body">';
  html += '\t\t\t\t<img src="img/portfolio/' + game.img + '" class="img-fluid img-centered" alt="">';
  html += '\t\t\t\t' + game.description;
  if (game.itch) {
    html += '\t\t\t\t<p><center><iframe frameborder="0" src="' + game.itch + '" width="552" height="167"></iframe></center></p>';
  }
  if (game.gif) {
    html += '\t\t\t\t<center><img src="img/portfolio/' + game.gif + '" class="img-fluid" alt=""></center>';
  }
  html += '\t\t\t\t<center><ul class="list-inline item-details">';
  html += '\t\t\t\t\t<li>Date:';
  html += '\t\t\t\t\t\t<strong><a href="' + game.link + '" target="_blank" rel="noopener noreferrer">' + game.date + '</a></strong>';
  html += '\t\t\t\t\t</li>';
  html += '\t\t\t\t</ul></center>';
  html += '\t\t\t</div>';
  html += '\t\t\t<div class="modal-footer">';
  html += '\t\t\t\t<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>';
  html += '\t\t\t</div>';
  html += '\t\t</div>';
  html += '\t</div>';
  return html += '</div>';
};

$(function() {
  var g, game, games, html, i, index, j, k, len, len1, len2;
  games = portfolioDetails();
  html = '';
  for (index = i = 0, len = games.length; i < len; index = ++i) {
    game = games[index];
    html += thumbnailHtmlForGame(game, index);
  }
  $('#portfolioRow').html(html);
  html = '';
  for (index = j = 0, len1 = games.length; j < len1; index = ++j) {
    game = games[index];
    html += modalHtmlForGame(game, index);
  }
  $('#modals').html(html);
  for (index = k = 0, len2 = games.length; k < len2; index = ++k) {
    g = games[index];
    $('#modal' + index).modal('hide');
  }
});
