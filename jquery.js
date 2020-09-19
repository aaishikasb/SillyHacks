// Popover

$('#example').popover('hide');
$('#example').click(function() {

  $('#example').popover('show');
});

$(function () {
    $('[data-toggle="popover"]').popover()
})