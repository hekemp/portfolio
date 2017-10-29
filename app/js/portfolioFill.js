var modalHtmlForGame, thumbnailHtmlForGame;

thumbnailHtmlForGame = function(game, index) {
  return "<div class=\"col-md-4 portfolio-item\">\n  <a href=\"#\" class=\"portfolio-link\" data-toggle=\"modal\" data-target=\"#modal" + index + "\">\n    <div class=\"caption\">\n      <div class=\"caption-content\">\n        <i class=\"fa fa-search-plus fa-3x\"></i>\n      </div>\n    </div>\n    <img src=\"img/portfolio/" + game.thumbnail_img + "\" class=\"img-fluid\" alt=\"\">\n  </a>\n</div>";
};

modalHtmlForGame = function(game, index) {
  return "<div class=\"modal fade\" id=\"modal" + index + "\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">" + game.title + "</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <center>\n          <img src=\"img/portfolio/" + game.img + "\" class=\"img-fluid img-centered img-portfolio rounded\" alt=\"An image of " + game.title + "\">\n        </center>\n        " + game.description + "\n        " + (game.itch ? '<p><center><iframe frameborder="0" src="' + game.itch + '" width="80%" height="auto"></iframe></center></p>' : '') + "\n        " + (game.gif ? '<center><img src="img/portfolio/' + game.gif + '" class="img-fluid img-portfolio" alt=""></center>' : '') + "\n        " + (game.github ? '<div class="github-widget" data-repo="' + game.github + '"></div>' : '') + "\n        " + (game.youtube ? '<center><div class="youtube-wrapper"><iframe class="youtube-widget" width="560" height="315" src="https://www.youtube.com/embed/' + game.youtube + '?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></div></center>' : '') + "\n        " + (game.youtube ? '<script>$("#modal' + index + '").on(\'hidden.bs.modal\', function (e) { $("#modal' + index + ' iframe").attr("src", $("#modal' + index + ' iframe").attr("src")); });</script>' : '') + "\n        <center>\n          <ul class=\"list-inline item-details\">\n            <li>Date:\n              <strong><a href=\"" + game.link + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + game.date + "</a></strong>\n            </li>\n          </ul>\n        </center>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>";
};

$(function() {
  var fn, fn1, game, i, index, j, len, len1, modalHtml, otherHtml, proj, projects, ref, ref1, thumbHtml;
  projects = portfolioDetails();
  thumbHtml = '';
  otherHtml = '';
  modalHtml = '';
  ref = projects.games;
  fn = function(game, index) {
    thumbHtml += thumbnailHtmlForGame(game, "game" + index);
    return modalHtml += modalHtmlForGame(game, "game" + index);
  };
  for (index = i = 0, len = ref.length; i < len; index = ++i) {
    game = ref[index];
    fn(game, index);
  }
  ref1 = projects.other;
  fn1 = function(proj, index) {
    otherHtml += thumbnailHtmlForGame(proj, "other" + index);
    return modalHtml += modalHtmlForGame(proj, "other" + index);
  };
  for (index = j = 0, len1 = ref1.length; j < len1; index = ++j) {
    proj = ref1[index];
    fn1(proj, index);
  }
  $('#portfolioRow').html(thumbHtml);
  $('#otherPortfolioRow').html(otherHtml);
  $('#modals').html(modalHtml);
});
