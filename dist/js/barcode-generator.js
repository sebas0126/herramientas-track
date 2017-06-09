(function() {
  var generarCodigos, numeroAleatorio;

  $(document).ready(function() {
    var alto, cantCod, codPagina, fila, largo, long, pag;
    cantCod = 0;
    long = alto = 25;
    largo = 40;
    fila = 5;
    codPagina = 60;
    pag = 0;
    $("#btnGenerar").click(function() {
      var txtCant, txtLong;
      $("#show").html("");
      txtLong = document.getElementById("txtLong");
      txtCant = document.getElementById("txtCant");
      cantCod = parseInt(document.getElementById("txtCant").value);
      long = parseInt(document.getElementById("txtLong").value);
      if (!cantCod) {
        txtCant.value = 1;
        cantCod = 1;
      }
      if (!long) {
        txtLong.value = 5;
        long = 5;
      }
      generarCodigos(cantCod, long);
      return $("#btnDescargar").removeClass("invisible");
    });
    return $("#btnDescargar").click(function() {
      var canvas, codigos, cont, pdf, x, y;
      x = 0;
      y = 0;
      cont = 1;
      pdf = new jsPDF();
      codigos = $('canvas');
      while (cont <= cantCod) {
        canvas = codigos[cont - 1].toDataURL('image/jpeg', 1.0);
        pdf.addImage(canvas, 'JPEG', x, y, 36, 21);
        x = x + largo;
        if (cont % fila === 0 && cont !== 0) {
          x = 0;
          y = y + alto;
        }
        if (cont % codPagina === 0 && cont !== 0) {
          pag = pag + 1;
          x = 0;
          y = 0;
          pdf.save("codigos-pag-" + pag + ".pdf");
          pdf = new jsPDF();
        }
        cont++;
      }
      pdf.save("codigos-pag-" + pag + ".pdf");
    });
  });

  generarCodigos = function(cantidad, longitud) {
    var html, i, randomNum, results;
    i = 0;
    html = "";
    results = [];
    while (i < cantidad) {
      html = '<canvas id="cb' + i + '"></canvas>';
      $("#show").append(html);
      randomNum = numeroAleatorio(longitud);
      JsBarcode("#cb" + i, randomNum);
      results.push(i++);
    }
    return results;
  };

  numeroAleatorio = function(tamano) {
    var x;
    x = Math.random().toString().slice(2, tamano + 2);
    return x;
  };

}).call(this);

