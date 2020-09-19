// Popover

$(function () {
    $('[data-toggle="popover"]').popover()
})

$('#example').popover('hide');
$('#example').click(function() {

  $('#example').popover('show');
});