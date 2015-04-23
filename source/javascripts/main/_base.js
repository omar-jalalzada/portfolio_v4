

$(document).ready(function() {


  $('.slide .inner_slide_container').each(function() {
    $(this).bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

      if (isInView) {
        $(this).addClass("active")
        // element is now visible in the viewport
        if (visiblePartY == 'top') {
          // console.log("visiblepartyY "+$(this))
          // top part of element is visible
        } else if (visiblePartY == 'bottom') {

          // bottom part of element is visible
        } else {
          // whole part of element is visible
        }
      } else {
        // element has gone out of viewport
        $(this).removeClass("active")
      }
    });
  });






  $(function() {
      $(window).resize(function() {
          $('.slide_1').height($(window).height() - $('.slide_1').offset().top);
      });
      $(window).resize();
  });


  $("#portfolio_summary_trigger").click(
    function(){
      $("#portfolio_summary").toggleClass("show")
  });
  $("#portfolio_summary").click(
    function(){
      $(this).toggleClass("show")
  });


  //----------------------------------------
  //////////
  // adding the hover interaction for the phone displays 
  //////////

  $(".project_navigtaion_container").mouseenter(function(e){
    $(this).addClass("init_hover")
    $('.inner_slide_container.active').foggy({
      blurRadius: 3,          // In pixels.
      opacity: 1,           // Falls back to a filter for IE.
      cssFilterSupport: true  // Use "-webkit-filter" where available.
    }); 
  });
  $(".project_navigtaion_container").mouseleave(function(e){
    $(this).removeClass("init_hover")
     $('.inner_slide_container.active').foggy(false);
  });

  // $('.project_navigtaion_container').blurjs({
  //   source: 'body',
  //   radius: 7,
  //   overlay: 'rgba(255,255,255,0.4)'
  // });



  //----------------------------------------
  //////////
  // adding the hover interaction for the phone displays 
  //////////
  $(".phone_mockups_4_in_a_row li.contains_more_text").click(
    function(){
      $(this).toggleClass("show")
  });
  //----------------------------------------




  //----------------------------------------
  //////////
  // Add the SFMOMA prototype video
  //////////
  if($("#sfmoma_intro_video").length == 1) {
    console.log("SFMOMA Prototype video added")
    // create the iframe
    var iframe_tag = document.createElement('iframe')
    var iframe_tag_fs_att = document.createAttribute("allowfullscreen")
    var iframe_tag_fb_att = document.createAttribute("frameborder")
    iframe_tag_fb_att.value = "0";
    iframe_tag.src = "//www.youtube.com/embed/CxjTBXxEsoU?controls=2&modestbranding=1&showinfo=0&theme=light"
    iframe_tag.width = "100%"
    iframe_tag.height = "100%"
    iframe_tag.setAttributeNode(iframe_tag_fs_att)
    iframe_tag.setAttributeNode(iframe_tag_fb_att)
    iframe_tag.id = "youtube_iframe_tag"
    // add the iframe
    $("#sfmoma_intro_video").append(iframe_tag)
  }


  //----------------------------------------


  //----------------------------------------
  //////////
  // Add the harlemshake video
  //////////
  if($("#harlemshake_video").length == 1) {
    console.log("Moovweb harlemshake video added")
    var iframe_tag = document.createElement('iframe')
    var iframe_tag_fs_att = document.createAttribute("allowfullscreen")
    var iframe_tag_fb_att = document.createAttribute("frameborder")
    iframe_tag_fb_att.value = "0";
    iframe_tag.src = "//www.youtube.com/embed/90BcQJ3GRyM?controls=2&modestbranding=1&showinfo=0&theme=light"
    iframe_tag.width = "100%"
    iframe_tag.height = "100%"
    iframe_tag.setAttributeNode(iframe_tag_fs_att)
    iframe_tag.setAttributeNode(iframe_tag_fb_att)
    iframe_tag.id = "youtube_iframe_tag"
    // add the iframe
    $("#harlemshake_video").append(iframe_tag)
  }
  //----------------------------------------




  //----------------------------------------
  //////////
  // Fancy Box Slideswhow
  //////////
  $(".fancybox-thumb").fancybox({
    openSpeed: 100,
    closeSpeed: 10,
    nextSpeed: 200,
    scrollOutside: true,
    helpers : {
      title : {
        type: 'outside',
        position: 'bottom'

      },
      thumbs  : {
        width : 50,
        height  : 50
      }
    }
  });
  //----------------------------------------

});


