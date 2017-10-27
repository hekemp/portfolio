thumbnailHtmlForGame = (game, index) ->
  """
  <div class="col-sm-4 portfolio-item">'
    <a href="#" class="portfolio-link" data-toggle="modal" data-target="#modal#{index}">
      <div class="caption">
        <div class="caption-content">
          <i class="fa fa-search-plus fa-3x"></i>
        </div>
      </div>
      <img src="img/portfolio/#{game.thumbnail_img}" class="img-fluid" alt="">
    </a>
  </div>
  """

modalHtmlForGame = (game, index) ->
  """
  <div class="modal fade" id="modal#{index}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">#{game.title}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <center>
            <img src="img/portfolio/#{game.img}" class="img-fluid img-centered" alt="">
          </center>
          #{game.description}
          #{if game.itch then '<p><center><iframe frameborder="0" src="' + game.itch + '" width="552" height="167"></iframe></center></p>' else ''}
          #{if game.gif then '<center><img src="img/portfolio/' + game.gif + '" class="img-fluid" alt=""></center>' else ''}
          <center>
            <ul class="list-inline item-details">
              <li>Date:
                <strong><a href="#{game.link}" target="_blank" rel="noopener noreferrer">#{game.date}</a></strong>
              </li>
            </ul>
          </center>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  """

$ ->
  games = portfolioDetails()
  thumbHtml = ''
  modalHtml = ''
  for game, index in games
    do (game, index) ->
      thumbHtml += thumbnailHtmlForGame(game, index)
      modalHtml += modalHtmlForGame(game, index)
  $('#portfolioRow').html(thumbHtml)
  $('#modals').html(modalHtml)
  return
