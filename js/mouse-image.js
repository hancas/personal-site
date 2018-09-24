jQuery(document).ready(function($) {
  $('.hobbies').on('mouseenter', '.revealImage', function() {
    var img = $(this).data('src');

    $('.hobbies').append('<div class="imageHover" style="width:200px;"><img src="'+img+'" style="width:200px; height: auto; z-index: 15;"></div>')

  $(document).mousemove(function(e) {
    $('.imageHover').offset({
     left: e.pageX,
    top: e.pageY + 20
     })
  })

  }).on('mouseleave', function() {
    $('.hobbies').find('div.imageHover').remove()
  })
})
