(function() {
  var cantCod, codificacion, formato, generarAleatorios, generarCodigos, numeroAleatorio;

  codificacion = "CODE128";

  cantCod = 0;

  formato = "jpeg";

  $(document).ready(function() {
    var aleatorio, alto, codPagina, fila, largo, long, pag, rdbC128, rdbCodes, rdbEAN13, rdbJpg, rdbPng, rdbRandom;
    aleatorio = true;
    rdbRandom = document.getElementById('random');
    rdbCodes = document.getElementById('codes');
    rdbC128 = document.getElementById('code128');
    rdbEAN13 = document.getElementById('ean13');
    rdbJpg = document.getElementById('rdbJpg');
    rdbPng = document.getElementById('rdbPng');
    rdbJpg.onclick = function() {
      formato = "jpeg";
    };
    rdbPng.onclick = function() {
      formato = "png";
    };
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
        txtAct = document.getElementById("txtCodes");
        arrCodes = txtAct.value.split("\n");
        arrCodes = arrCodes.filter((function(_this) {
          return function(i) {
            return i;
          };
        })(this));
        generarCodigos(arrCodes);
      }
      $("#btnDescargarPDF").removeClass("invisible");
      return $("#btnDescargarZIP").removeClass("invisible");
    });
    $("#btnDescargarPDF").click(function() {
      var canvas, codigos, cont, pdf, x, y;
      x = 0;
      y = 0;
      cont = 1;
      pdf = new jsPDF();
      codigos = $('canvas');
      while (cont <= cantCod) {
        canvas = codigos[cont - 1].toDataURL('image/' + formato, 1.0);
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
          pdf.addPage();
        }
        cont++;
      }
      pdf.save("codigos.pdf");
    });
    return $("#btnDescargarZIP").click(function() {
      var codesArr, folder, obj, zip;
      zip = new JSZip();
      folder = zip.folder("codes");
      obj = document.getElementById("show");
      codesArr = Array.prototype.slice.call(obj.getElementsByTagName("CANVAS"));
      codesArr.forEach(function(t, i) {
        var data;
        data = t.toDataURL();
        data = data.substr(data.indexOf(',') + 1);
        console.log(data);
        return folder.file("code" + i + "." + formato.replace("e", ""), data, {
          base64: true
        });
      });
      zip.generateAsync({
        type: 'blob'
      }).then(function(content) {
        saveAs(content, 'codes.zip');
      });
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

