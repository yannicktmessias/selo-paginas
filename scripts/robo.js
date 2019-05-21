jQuery(document).ready(function() {
    var max_links = 20
    var links = 1

    $("#selectAll").click(function() {
        $('input:checkbox').not(this).prop('checked', this.checked);
    });

    $("#nextPageSeloForm").click(function() {
        window.location.href = "new_selo_2.html";
    });

    $("#shouldHaveRepresentative").click(function() {
        var representativeFormIds = [
            'representativeName',
            'representativeCPF',
            'representativeEmail',
            'representativePhone',
            'representativeCell',
            'representativeStatus0',
            'representativeStatus1'
        ]

        for (var i = 0; i < representativeFormIds.length; i++) {
            $('#' + representativeFormIds[i]).prop('disabled', !this.checked);
            $('#' + representativeFormIds[i]).prop('required', this.checked);
        }
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