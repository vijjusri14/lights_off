$(document).ready(function() {
    var mw = window.matchMedia("(min-width: 570px)");
    var mh = window.matchMedia("(min-height: 570px)");
    if (mw.matches && mh.matches) {
        var _on = 'images/Light_On_L.png';
        var _off = 'images/Light_Off_L.png';
    } else {
        var _on = 'images/Light_On.png';
        var _off = 'images/Light_Off.png';
    }
    reset(_off);
    randomOn(_on);
    $('#reset').click(function() {
        reset(_off);
        randomOn(_on);
    });
    $('.card').click(function() {
        var _toggle = $(this).data('toggler');
        _toggle.forEach(function(element) {
            _id = '#' + element;
            var src = $(_id).attr('src');
            var newsrc = (src == _on) ? _off : _on;
            var elem = document.querySelector(_id);
            flipInY(elem, 1);
            $(_id).attr('src', newsrc);
        }, this);
    });
});

function randomOn(_on) {
    _id = '#' + String.fromCharCode((r = Math.random() * (25) + 36 | 0, r += r > 9 ? (r < 36 ? 55 : 61) : 48));
    $(_id).attr('src', _on);
}

function reset(_off) {
    $('.card').attr('src', _off);
}

function flipInY(elem, iterations) {
    var animationTimingFunction = elem.style['animation-timing-function'];
    var keyframes = [
        { transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 0 },
        { transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', offset: 0.4 },
        { transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: '1', offset: 0.6 },
        { transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', opacity: '1', offset: 0.8 },
        { transform: 'perspective(400px)', opacity: '1', offset: 1 }
    ];
    var timing = { duration: 500, iterations: iterations, easing: 'ease-in' };
    return elem.animate(keyframes, timing);
}