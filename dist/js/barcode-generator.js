(function() {
  var cantCod, codificacion, generarAleatorios, generarCodigos, numeroAleatorio;

  codificacion = "CODE128";

  cantCod = 0;

  $(document).ready(function() {
    var aleatorio, alto, btnAdd, cantTxt, codPagina, fila, largo, long, pag, rdbC128, rdbCodes, rdbEAN13, rdbRandom;
    aleatorio = true;
    rdbRandom = document.getElementById('random');
    rdbCodes = document.getElementById('codes');
    rdbC128 = document.getElementById('code128');
    rdbEAN13 = document.getElementById('ean13');
    rdbC128.onclick = function() {
      codificacion = "CODE128";
      document.getElementById("txtLong").value = "";
      document.getElementById("txtLong").readOnly = false;
    };
    rdbEAN13.onclick = function() {
      codificacion = "EAN13";
      document.getElementById("txtLong").value = 12;
      document.getElementById("txtLong").readOnly = true;
    };
    rdbRandom.onclick = function() {
      $("#codesForm").addClass("invisible");
      $("#randomForm").removeClass("invisible");
      aleatorio = true;
    };
    rdbCodes.onclick = function() {
      $("#codesForm").removeClass("invisible");
      $("#randomForm").addClass("invisible");
      aleatorio = false;
    };
    btnAdd = document.getElementById('btnAdd');
    btnAdd.onclick = function() {
      $('#addCode').append('<input id="txtCode' + cantTxt + '" type="text" placeholder="Codigo" class="form-control"><br>');
      document.getElementById("txtCode" + cantTxt).focus();
      cantTxt++;
    };
    cantTxt = 1;
    long = 25;
    alto = 25;
    largo = 40;
    fila = 5;
    codPagina = 60;
    pag = 0;
    $("#btnGenerar").click(function() {
      var arrCodes, i, txtAct, txtCant, txtLong;
      arrCodes = [];
      i = 0;
      $("#show").html("");
      if (aleatorio) {
        txtLong = document.getElementById("txtLong");
        txtCant = document.getElementById("txtCant");
        cantCod = parseInt(txtCant.value);
        long = parseInt(txtLong.value);
        if (!cantCod) {
          txtCant.value = 1;
          cantCod = 1;
        }
        if (!long) {
          txtLong.value = 5;
          long = 5;
        }
        generarCodigos(generarAleatorios(cantCod, long));
      } else {
        while (i < cantTxt) {
          txtAct = document.getElementById("txtCode" + i);
          arrCodes.push(txtAct.value);
          i++;
        }
        generarCodigos(arrCodes);
      }
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

  generarCodigos = function(arreglo) {
    var html, i, results;
    i = 0;
    cantCod = arreglo.length;
    results = [];
    while (i < cantCod) {
      html = '<canvas id="cb' + i + '"></canvas>';
      $("#show").append(html);
      JsBarcode("#cb" + i, arreglo[i], {
        format: codificacion
      });
      results.push(i++);
    }
    return results;
  };

  generarAleatorios = function(cantidad, longitud) {
    var arrRandom, i;
    i = 0;
    arrRandom = [];
    while (i < cantidad) {
      arrRandom.push(numeroAleatorio(longitud));
      i++;
    }
    return arrRandom;
  };

  numeroAleatorio = function(tamano) {
    var x;
    x = Math.random().toString().slice(2, tamano + 2);
    return x;
  };

}).call(this);

