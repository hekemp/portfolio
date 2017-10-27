var modalHtmlForGame, thumbnailHtmlForGame;

thumbnailHtmlForGame = function(game, index) {
  return "<div class=\"col-sm-4 portfolio-item\">'\n  <a href=\"#\" class=\"portfolio-link\" data-toggle=\"modal\" data-target=\"#modal" + index + "\">\n    <div class=\"caption\">\n      <div class=\"caption-content\">\n        <i class=\"fa fa-search-plus fa-3x\"></i>\n      </div>\n    </div>\n    <img src=\"img/portfolio/" + game.thumbnail_img + "\" class=\"img-fluid\" alt=\"\">\n  </a>\n</div>";
};

modalHtmlForGame = function(game, index) {
  return "<div class=\"modal fade\" id=\"modal" + index + "\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">" + game.title + "</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <center>\n          <img src=\"img/portfolio/" + game.img + "\" class=\"img-fluid img-centered\" alt=\"\">\n        </center>\n        " + game.description + "\n        " + (game.itch ? '<p><center><iframe frameborder="0" src="' + game.itch + '" width="552" height="167"></iframe></center></p>' : '') + "\n        " + (game.gif ? '<center><img src="img/portfolio/' + game.gif + '" class="img-fluid" alt=""></center>' : '') + "\n        <center>\n          <ul class=\"list-inline item-details\">\n            <li>Date:\n              <strong><a href=\"" + game.link + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + game.date + "</a></strong>\n            </li>\n          </ul>\n        </center>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>";
};

$(function() {
  var fn, game, games, i, index, len, modalHtml, thumbHtml;
  games = portfolioDetails();
  thumbHtml = '';
  modalHtml = '';
  fn = function(game, index) {
    thumbHtml += thumbnailHtmlForGame(game, index);
    return modalHtml += modalHtmlForGame(game, index);
  };
  for (index = i = 0, len = games.length; i < len; index = ++i) {
    game = games[index];
    fn(game, index);
  }
  $('#portfolioRow').html(thumbHtml);
  $('#modals').html(modalHtml);
});
