$(document).on('change', '.btn-file :file', function () {
  // window.CP.stopExecutionOnTimeout(1);
  var input = $(this), numFiles = input.get(0).files ? input.get(0).files.length : 1, label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
  input.trigger('fileselect', [
    numFiles,
    label
  ]);
});

$(document).ready(function () {
  // window.CP.stopExecutionOnTimeout(3);
  $('.btn-file :file').on('fileselect', function (event, numFiles, label) {
    // window.CP.stopExecutionOnTimeout(2);
    var input = $(this).parents('.input-group').find(':text'), log = numFiles > 1 ? numFiles + ' files selected' : label;
    if (input.length) {
      input.val(log);
    } else {
      if (log)
        alert(log);
    }
  });
});//@ sourceURL=pen.js

$("#qr_start").datepicker({
  changeMonth: true,
  changeYear: true
});