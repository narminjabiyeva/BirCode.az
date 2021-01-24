 $(document).ready(function() {
     $('video').prop('muted',true).play()
 });

 $(document).ready(function () {
	$('#apply-btn').click(function () {
		$('#popup, #shadow').toggle();
		return false;
	});
	$('#shadow, .exit').click(function () {
		$('#popup, #shadow').toggle();
	})
});










































