var emailResult;
var smsResult;

document.getElementById('file-email').onchange = function(){
  var file = this.files[0];

  var reader = new FileReader();
  reader.onload = function(progressEvent){
    // Entire file
    // console.log(this.result);
    emailResult = this.result;
    document.getElementById('emailTextarea').value = (this.result);

    // By lines
    // var lines = this.result.split('\n');
    // for(var line = 0; line < lines.length; line++){
    //   console.log(lines[line]);
    // }
    var numberPattern = /\d+/g;
    emailArr = emailResult.match( numberPattern );
  };
  reader.readAsText(file);
};


document.getElementById('file-sms').onchange = function(){
  var file = this.files[0];

  var reader = new FileReader();
  reader.onload = function(progressEvent){
    // Entire file
    // console.log(this.result);
    smsResult = this.result;

    document.getElementById('smsTextarea').value = (this.result);
    var numberPattern = /\d+/g;

    smsArr = smsResult.match( numberPattern );
    console.log(arr);
  };
  reader.readAsText(file);
};

function onCompare() {
  var emailRes = emailArr;
  var smsRes = smsArr;
  if ((emailRes!=null) && (smsRes!=null)) {
    if (arraysEqual(emailRes, smsRes)) {
      successProcess();
    } else {
      fraudDectected();
    }
  }else {
    errorProcess();
  }
}

function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

function fraudDectected() {
  $('#fraudDectected').modal('show');
}


function successProcess() {
  $('#successProcess').modal('show');
}

function errorProcess() {
  $('#errorProcess').modal('show');
}

function onClearButton() {
  window.location.reload();
}
