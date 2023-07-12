<script>
jQuery(document).ready(function($) {
  var resumoHeight = '150px'; // Defina a altura do resumo

  $('.texto-resumido').css({
    'height': resumoHeight,
    'overflow': 'hidden'
  });

  $('#botao-expandir').click(function() {
    var textoResumido = $('.texto-resumido');
    if (textoResumido.height() <= parseInt(resumoHeight)) {
      textoResumido.animate({
        'height': textoResumido.get(0).scrollHeight + 'px'
      }, 500); // Defina a velocidade da animação, se necessário
      $(this).text('Recolher');
    } else {
      textoResumido.animate({
        'height': resumoHeight
      }, 500); // Defina a velocidade da animação, se necessário
      $(this).text('Expandir');
    }
  });
});

</script>
