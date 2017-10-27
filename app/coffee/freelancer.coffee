$ ->
  'use strict'
  # Start of use strict
  # Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click ->
    if location.pathname.replace(/^\//, '') == @pathname.replace(/^\//, '') and location.hostname == @hostname
      target = $(@hash)
      target = if target.length then target else $('[name=' + @hash.slice(1) + ']')
      if target.length
        $('html, body').animate { scrollTop: target.offset().top - 48 }, 1000, 'easeInOutExpo'
        return false
    return
  # Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click ->
    $('.navbar-collapse').collapse 'hide'
    return
  # Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy
    target: '#mainNav'
    offset: 54
  # Collapse Navbar

  navbarCollapse = ->
    if $('#mainNav').offset().top > 100
      $('#mainNav').addClass 'navbar-shrink'
    else
      $('#mainNav').removeClass 'navbar-shrink'
    return

  # Collapse now if page is not at top
  navbarCollapse()
  # Collapse the navbar when page is scrolled
  $(window).scroll navbarCollapse
# End of use strict
