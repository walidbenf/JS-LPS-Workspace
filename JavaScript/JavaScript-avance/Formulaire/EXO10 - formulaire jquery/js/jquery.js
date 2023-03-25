<!DOCTYPE html>
<html>
    <head>
        <title>Découverte de jQuery</title>
        <meta charset='utf-8'>
        <style>
            .p1{
                border: 1px solid black;
            }
            .p2{
                border: 1px solid red;
            }
        </style>
    </head>
    <body>
        <h1>Gestion d'évènements en jQuery</h1>
        <p class='p1'>Passez sur moi...</p>
        <p class='p2'>... et j'apparais !</p>

        <!--On inclut la librairie jQuery-->
        <script src='https://code.jquery.com/jquery-3.1.0.js'></script>

        <!--On écrit notre code JavaScript / jQuery-->
        <script>
            $(document).ready(function(){

                $('.p2').hide();
                $('.p1').mouseenter(function(){
                    $('.p2').show();
                });
                $('.p1').mouseleave(function(){
                    $('.p2').hide();
                });

            });
        </script>
    </body>
</html>
