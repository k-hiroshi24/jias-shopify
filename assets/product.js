$(function(){
  // Change the display position of the label.
  $('.product-description .product_label').prependTo('#product-label-container');

  // Cart button display control by check box
  if($('div').hasClass('product-confirmBox')){
    $('.product-form--atc-button').prop('disabled', true).addClass('disabled');
  }
  $('input[name="product-confirmBox_ck"]').change(function(){
    if ( $('input[name="product-confirmBox_ck"]').prop('checked') ) {
      $('.product-form--atc-button').removeAttr('disabled').removeClass('disabled');
    } else {
      $('.product-form--atc-button').prop('disabled', true).addClass('disabled');
    }
  });
});
