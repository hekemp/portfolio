thumbnailHtmlForGame = (game, index) ->
  html = ''
  html += '<div class="col-sm-4 portfolio-item">'
  html += '\t<a href="#" class="portfolio-link" data-toggle="modal" data-target="#modal' + index + '">'
  html += '\t\t<div class="caption">'
  html += '\t\t\t<div class="caption-content">'
  html += '\t\t\t\t<i class="fa fa-search-plus fa-3x"></i>'
  html += '\t\t\t</div>'
  html += '\t\t</div>'
  html += '\t\t<img src="img/portfolio/' + game.thumbnail_img + '" class="img-fluid" alt="">'
  html += '\t</a>'
  html += '</div>'
  html

modalHtmlForGame = (game, index) ->
  html = ''
  html += '<div class="modal fade" id="modal' + index + '" tabindex="-1" role="dialog" aria-hidden="true">'
  html += '\t<div class="modal-dialog modal-lg">'
  html += '\t\t<div class="modal-content">'
  html += '\t\t\t<div class="modal-header">'
  html += '\t\t\t\t<h5 class="modal-title">' + game.title + '</h5>'
  html += '\t\t\t\t<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
  html += '\t\t\t\t\t<span aria-hidden="true">&times;</span>'
  html += '\t\t\t\t</button>'
  html += '\t\t\t</div>'
  html += '\t\t\t<div class="modal-body">'
  html += '\t\t\t\t<img src="img/portfolio/' + game.img + '" class="img-fluid img-centered" alt="">'
  html += '\t\t\t\t' + game.description
  html += '\t\t\t\t<p><center><iframe frameborder="0" src="' + game.itch + '" width="552" height="167"></iframe></center></p>' if game.itch
  html += '\t\t\t\t<center><img src="img/portfolio/' + game.gif + '" class="img-fluid" alt=""></center>' if game.gif
  html += '\t\t\t\t<center><ul class="list-inline item-details">'
  html += '\t\t\t\t\t<li>Date:'
  html += '\t\t\t\t\t\t<strong><a href="' + game.link + '" target="_blank" rel="noopener noreferrer">' + game.date + '</a></strong>'
  html += '\t\t\t\t\t</li>'
  html += '\t\t\t\t</ul></center>'
  html += '\t\t\t</div>'
  html += '\t\t\t<div class="modal-footer">'
  html += '\t\t\t\t<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'
  html += '\t\t\t</div>'
  html += '\t\t</div>'
  html += '\t</div>'

  # html += '\t<div class="modal-content">'
  # html += '\t\t<div class="close-modal" data-dismiss="modal">'
  # html += '\t\t\t<div class="lr">'
  # html += '\t\t\t\t<div class="rl">'
  # html += '\t\t\t\t</div>'
  # html += '\t\t\t</div>'
  # html += '\t\t</div>'
  # html += '\t\t<div class="container">'
  # html += '\t\t\t<div class="row">'
  # html += '\t\t\t\t<div class="col-lg-8 col-lg-offset-2">'
  # html += '\t\t\t\t\t<div class="modal-body">'
  # html += '\t\t\t\t\t\t<h2>' + game.title + '</h2>'
  # html += '\t\t\t\t\t\t<hr class="star-primary">'
  # html += '\t\t\t\t\t\t<img src="img/portfolio/' + game.img + '" class="img-fluid img-centered" alt="">'
  # html += '\t\t\t\t\t\t' + game.description
  # html += '\t\t\t\t\t\t<p><iframe frameborder="0" src="' + game.itch + '" width="552" height="167"></iframe></iframe></p>' if game.itch
  # html += '\t\t\t\t\t\t<img src="img/portfolio/' + game.gif + '" class="img-fluid img-centered" alt="">' if game.gif
  # html += '\t\t\t\t\t\t<ul class="list-inline item-details">'
  # html += '\t\t\t\t\t\t\t<li>Date:'
  # html += '\t\t\t\t\t\t\t\t<strong><a href="' + game.link + '" target="_blank" rel="noopener noreferrer">' + game.date + '</a></strong>'
  # html += '\t\t\t\t\t\t\t</li>'
  # html += '\t\t\t\t\t\t</ul>'
  # html += '\t\t\t\t\t\t<button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>'
  # html += '\t\t\t\t\t</div>'
  # html += '\t\t\t\t</div>'
  # html += '\t\t\t</div>'
  # html += '\t\t</div>'
  # html += '\t</div>'
  html += '</div>'

$ ->
  games = portfolioDetails()
  html = ''
  html += thumbnailHtmlForGame(game, index) for game, index in games
  $('#portfolioRow').html(html)
  html = ''
  html += modalHtmlForGame(game, index) for game, index in games
  $('#modals').html(html)
  $('#modal' + index).modal('hide') for g, index in games
  return
