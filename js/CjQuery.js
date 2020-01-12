$(document).ready(function () {
    $(".tab-home__link").click(function () {
        $('.tab-home').animate({
                transform: 'skew(-60deg)',
                width: '400px',
                opacity: '1'
            }, "slow")
            // .animate({
            //     width: '300px',
            //     opacity: '0.8'
            // }, "slow")
            // .animate({
            //     height: '100px',
            //     opacity: '0.4'
            // }, "slow")
            // .animate({
            //     width: '100px',
            //     opacity: '0.8'
            // }, "slow")
    });
});
