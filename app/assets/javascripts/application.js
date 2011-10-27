// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

// Application specific behaviour
function addAlternateTableBehaviour() {
  $("table.list tr:odd").addClass("odd");
}

// Dirty Form
function makeEditForm(form) {
  var buttons = form.find("fieldset.buttons");
  buttons.fadeIn('slow');
}

function addDirtyForm() {
  $(".form-view form").dirty_form()
    .dirty(function(event, data){
      makeEditForm($(this));
    })

  $(".form-view").focusin(function() {makeEditForm($(this))});
}

// Time Input
function pad(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

function formatMinutes(minutes) {
  return pad(Math.floor(minutes / 60), 2) + ":" + pad(minutes % 60, 2);
}

function parseMinutes(minutes) {
  var hours, minutes = minutes.split(":");
  return hours * 60 + minutes;
}

function addTimeInputBehaviour() {
  $( ".time_slider" ).slider({
    range: true,
    min: 0,
    max: 1440,
    step: 15,
    values: [ 480, 1020 ],
    slide: function( event, ui ) {
      $("#activity_duration_from").val(formatMinutes(ui.values[ 0 ]));
      $("#activity_duration_to").val(formatMinutes(ui.values[ 1 ]));
    }
  });
//  $(".time_slider").slider("values", 0, parseMinutes($("#activity_duration_from").val()));
//  $(".time_slider").slider("values", 1, parseMinutes($("#activity_duration_to").val()));
}


// Initialize behaviours
function initializeBehaviours() {
  // from cyt.js
  addComboboxBehaviour();
  addAutofocusBehaviour();
  addDatePickerBehaviour();
  addSortableBehaviour();
  addLinkifyContainersBehaviour();
  addOverviewTooltipBehaviour();
  addIconTooltipBehaviour();
  addTimeCheckBehaviour();

  // application
  addAlternateTableBehaviour();
  addDirtyForm();
  addTimeInputBehaviour();
}

// Loads functions after DOM is ready
$(document).ready(initializeBehaviours);
