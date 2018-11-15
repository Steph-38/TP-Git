$(function() {

    // Premier click sur le bouton
    $('button').on('click', function() {
        $('#premierVoeux').fadeIn( function() {

            // Second click sur le premier voeux
            $('#premierVoeux').on('click', function() {
                $('#secondVoeux').fadeIn( function() {

                    // Troisième click sur le second voeux
                    $('#secondVoeux').on('click', function() {
                        $('#troisiemeVoeux').fadeIn( function() {

                            // Dernier click sur le troisième veux
                            $('#troisiemeVoeux').on('click', function() {
                                $('#son')[0].play();
                                $('body').css('background', 'red');
                                $('p').html('Happy Birthday !!!');
                            });
                        });
                        

                    });
                });
            });
        });
    });

});