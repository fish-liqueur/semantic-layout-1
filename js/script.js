function windowSwitching() {
//    document.getElementById("search-section").classList.toggle("hide");
    $('#search-section').toggleClass("hide");
}

$(document).ready(function () {
    $("#search-button").click(function () {
        var searchForm = $("#search-button").closest("form");
        var errorMsgs = {tooShort: "Введите хотя бы три символа!", emptyBox: "Зачем вы ищете ничего?"};
        var errorBlock = searchForm.find("#search-error");
        if (searchForm.find(':input[name=searchbox]').val() === "") {
            errorBlock.show();
            errorBlock.text(errorMsgs.emptyBox);
        } else if (searchForm.find(':input[name=searchbox]').val().length < 3) {
            errorBlock.show();
            errorBlock.text(errorMsgs.tooShort);
        } else {
            errorBlock.hide();
        }
    });
});

$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 0;
    $('html,body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 600);
    e.preventDefault();
});