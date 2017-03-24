(function() {
  $(function() {
    $('table .select-all').click(function(e) {
      var table;
      table = $(e.target).closest('table');
      return $('td input:checkbox', table).prop('checked', this.checked).trigger('change');
    });
    return $('td input:checkbox').change(function() {
      return $(this).closest('tr').toggleClass('table-active', this.checked);
    });
  });

}).call(this);
