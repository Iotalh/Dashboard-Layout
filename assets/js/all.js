"use strict";

console.log('Hello!');
var isCreate = false;
$(document).ready(function () {
  $("#reply").click(function () {
    if (!isCreate) {
      ClassicEditor.create(document.querySelector('#editor')).then(function (editor) {
        console.log(editor);
      })["catch"](function (error) {
        console.error(error);
      });
    } else {
      $(".ck-editor").show();
    }

    $("#btns").toggleClass("d-none");
  });
  $("#cancel").click(function () {
    $(".ck-editor").hide();
    $("#btns").toggleClass("d-none");
  });
  $("#infoBtn").click(function () {
    console.log("info");
    $("#infoBtns").toggleClass("mb-8");
  });
});
//# sourceMappingURL=all.js.map
