// Popover

$(function () {
    $('[data-toggle="popover"]').popover()
})

$('#example').popover('hide').delay( 5000 );
$('#example').click(function() {

  $('#example').popover('show');
});

$('#example').on('shown.bs.popover', function () {
  setTimeout('hide', 5000)
})
