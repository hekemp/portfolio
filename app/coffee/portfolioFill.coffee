thumbnailHtmlForGame = (game, index) ->
  """
  <div class="col-md-4 portfolio-item">
    <a href="#" class="portfolio-link" data-toggle="modal" data-target="#modal#{index}">
      <div class="caption">
        <div class="caption-content">
          <span>#{game.title}</span>
        </div>
      </div>
      <img data-src="img/portfolio/#{game.thumbnail_img}" class="img-fluid" alt="">
    </a>
  </div>
  """

modalHtmlForGame = (game, index) ->
  """
  <div class="modal fade" id="modal#{index}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"><a href="#{game.link}" target="_blank" rel="noopener noreferrer">#{game.title}</a></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <center>
            <a href="#{game.link}" target="_blank" rel="noopener noreferrer">
              <img data-src="img/portfolio/#{game.img}" class="img-fluid img-centered img-portfolio rounded" alt="An image of #{game.title}">
            </a>
          </center>
          #{game.description}
          #{if game.itch then '<p><center><iframe frameborder="0" data-src="' + game.itch + '" width="80%" height="auto"></iframe></center></p>' else ''}
          #{if game.gif then '<center><img data-src="img/portfolio/' + game.gif + '" class="img-fluid img-portfolio" alt=""></center>' else ''}
          #{if game.github then '<div class="github-widget" data-repo="' + game.github + '"></div>' else ''}
          #{if game.youtube then '<center><div class="youtube-wrapper"><iframe class="youtube-widget" width="560" height="315" data-src="https://www.youtube.com/embed/' + game.youtube + '?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></div></center>' else ''}
          #{if game.youtube then '<script>$("#modal' + index + '").on(\'hidden.bs.modal\', function (e) {
            $("#modal' + index + ' iframe").attr("src", $("#modal' + index + ' iframe").attr("src"));
            });</script>' else ''}
          <center>
            <ul class="list-inline item-details">
              <li>Date:
                <strong>#{game.date}</strong>
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
  projects = portfolioDetails()
  thumbHtml = ''
  otherHtml = ''
  modalHtml = ''
  for game, index in projects.games
    do (game, index) ->
      thumbHtml += thumbnailHtmlForGame(game, "game#{index}")
      modalHtml += modalHtmlForGame(game, "game#{index}")
  for proj, index in projects.other
    do (proj, index) ->
      otherHtml += thumbnailHtmlForGame(proj, "other#{index}")
      modalHtml += modalHtmlForGame(proj, "other#{index}")
  $('#portfolioRow').html(thumbHtml)
  $('#otherPortfolioRow').html(otherHtml)
  $('#modals').html(modalHtml)
  globalLazyLoad = new LazyLoad()
  modalLazyLoad = undefined
  modalLazyLoadiFrame = undefined
  $('.modal').bind('shown.bs.modal', ->
    modalLazyLoad = new LazyLoad(container: this)
    modalLazyLoadiFrame = new LazyLoad(elements_selector: "iframe")
    return
  ).bind 'hidden.bs.modal', ->
    modalLazyLoad.destroy()
    modalLazyLoadiFrame.destroy()
    return
  return
