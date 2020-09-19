// Popover

$(function () {
    $('[data-toggle="popover"]').popover()
})

$('#example').popover('hide').delay( 5000 );
$('#example').click(function() {

  $('#example').popover('show');
});
