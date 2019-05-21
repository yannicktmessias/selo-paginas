jQuery(document).ready(function() {
    var max_links = 30
    var links = 1

    $("#selectAll").click(function() {
        $('input:checkbox').not(this).prop('checked', this.checked);
    });
    $("#nextPageSeloForm").click(function() {
        window.location.href = "new_selo_2.html";
    });

    $("#addMoreLinkButton").click(function(e) {
        e.preventDefault();
        var linksList = $("#linksList");

        if (links < max_links) {
            links++;
            $(linksList).append('<input type="text" class="form-control mt-1" id="link" placeholder="URL do link" />');
        }
    });
});