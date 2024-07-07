$(document).ready(function() {
  var job = 'CEO';
  var jobInput = $('#jobInput');
  var signatureJob = $(".signatureJob");

  var localStorageJob = localStorage.getItem('signatureJob');
  if (null !== localStorageJob) {
    job = localStorageJob;
    jobInput.val(job);
  }
  signatureJob.each(function() {
    $(this).text(job);
  });
  jobInput.val(job);

  jobInput.on('input', function() {
    var job = jobInput.val();
    signatureJob.each(function() {
      $(this).text(job);
    });
    localStorage.setItem('signatureJob', job);
  });
});
