(function ($) {

  // Auto-submit main search input after autocomplete
  if (typeof Drupal.jsAC != 'undefined') {
    /**
     * Puts the currently highlighted suggestion into the autocomplete field.
     */
    Drupal.jsAC.prototype.select = function (node) {
      // Check that we own this autocomplete.
      if ($(this.input).hasClass('cwrc-field-filler-autocomplete')) {
        regex = /^\((.*?)\)\ (.*)/g;
        match = regex.exec($(node).data('autocompleteValue'));
        autocomplete_value = match[2];

        // Attempt to fill the closest valueURI as well.
        $(this.input).parents('fieldset').find('input[name$="valueURI]"]').val(match[1]);

      // Default autocomplete behaviour will do here.
      } else {
        autocomplete_value = $(node).data('autocompleteValue');
      }

      this.input.value = autocomplete_value;
      $(this.input).trigger('autocompleteSelect', [node]);
    };
  };

})(jQuery);
