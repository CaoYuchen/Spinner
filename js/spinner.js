
$(function(){
    $("#overlay-menu").click(function() {
    $(".overlay").addClass('overlay-open');
    });

    $(".overlay-close").click(function() {
        $(".overlay").removeClass('overlay-open');
    });
})


$(function(){
    document.oncontextmenu = function(){
        return false;
    }
    document.onselectstart = function() {
        return false;
    }
    document.onselectstart = function(){
        return false;
    }
    document.onkeydown = function() {
        if (event.ctrlKey) {
            return false;
        }
        if (event.altKey) {
            return false;
        }
        if (event.shiftKey) {
            return false;
        }
    }
})
