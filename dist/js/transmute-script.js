(function() {
  var GENERICHEADER, MASTERCARDHEADER, RESPONSIVEHEADER, addAttr, addHeader, addTdTag, deleteStyle, genericFormat, getChildren, getTagWidth, htmlTag, mcFormat, outlookStyle, removeAttr, responsiveFormat;

  $(document).ready(function() {
    var button, responsive;
    button = document.getElementById('btnFormat');
    responsive = null;
    if (button) {
      return button.onclick = function() {
        if (document.getElementById("res").checked) {
          console.log("responsive");
          return responsiveFormat();
        } else if (document.getElementById("gen").checked) {
          console.log("generico");
          return genericFormat();
        } else {
          console.log("MasterCard");
          return mcFormat();
        }
      };
    }
  });

  htmlTag = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"\n"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">\n%body%\n</html>';

  outlookStyle = '\n.o365button {\ndisplay: block !important;\n}\ntd div {\ndisplay: block !important;\n}\n.x_fr-fil {\ndisplay: block !important;\n}\n.x_fr-dib {\ndisplay: block !important;\n}\n';

  GENERICHEADER = '\n<tr> \n<td> \n<table style="display: inline-table;" border="0" cellpadding="0" cellspacing="0" width="650"> \n<tr> \n<td colspan="3" style="font-family:Arial, Helvetica, sans-serif; font-size:11px; color:#666; text-align:center "> \n<p>&nbsp;</p> \n<p> \nPara asegurar la entrega de nuestras comunicaciones, por favor agregue \n<br> xxx@xxxxx.com a su libreta de direcciones. \n<br> Si no puede ver correctamente las im&aacute;genes de este correo <a href="#">haga clic aqu&iacute;.</a> \n<br> \n<br> \n</p> \n</td> \n</tr> \n%replace% \n<tr> \n<td colspan="3" style="font-family:Arial, Helvetica, sans-serif; font-size:11px; color:#666; text-align:center "> \n<p> \n<br> \n<br> Nota: para garantizar que la informaci&oacute;n de este correo llegue correctamente, \n<br> es posible que algunas palabras lleguen sin tilde para evitar la desconfiguraci&oacute;n \n<br> de algunos caracteres. \n<br> \n<strong>Este correo electr&oacute;nico ha sido enviado a !*email*!.</strong> \n</p> \n<p>&nbsp;</p> \n</td> \n</tr> \n</table> \n</td> \n</tr>';

  MASTERCARDHEADER = '\n<tr> \n<td style="font-family: arial, helvetica, sans-serif; color:#ffffff; background-color:#292929; padding: 15px 20px; text-align: left; box-sizing: border-box; font-size: 14px; font-weight: bold;"> \n¡No pierdas tu oportunidad, llega a tu meta, gana y disfruta! \n</td> \n</tr> \n%replace% \n<tr> \n<td style="padding: 0 0 0 11px; background-color: #ffffff;"> \n<p style="color:#6c6d71; font-size:12px; margin:25px 43px 0 0; font-family:Helvetica,Arial, sans-serif; line-height: 15px;"> \nBancolombia nunca le solicitará datos financieros como usuarios, claves, números de tarjetas de crédito con sus  códigos de seguridad y fechas de vencimiento mediante vínculos de correo electrónico o llamadas telefónicas. Para verificar la autenticidad de este correo electrónico puede reenviarlo a <a target="_blank" href="mailto:correosospechoso@bancolombia.com.co">correosospechoso@bancolombia.com.co</a> \n</p> \n<hr style="color: #6c6d71;margin: 12px 67px 0 0;" /> \n<p style="color:#6c6d71; font-size:12px; margin:25px 43px 0 0;text-align:left; font-family:Helvetica,Arial, sans-serif; line-height: 15px;"> \nMás información en nuestras líneas de atención telefónica: \n</p> \n<p style="color:#6c6d71; font-size:12px; margin:0 43px 0 0;text-align:left; font-family:Helvetica,Arial, sans-serif;line-height: 12px;"> \nBogot&aacute; \n<a href="tel:+5713430000" style="text-decoration:none"><span style="color:#00448c"> \n+57 (1) 343 00 00 \n</span> \n</a> \n – Medell&iacute;n \n<a href="tel:+5745109000" style="text-decoration:none"><span style="color:#00448c"> \n+57 (4) 510 90 00 \n</span> \n</a> \n – Cali \n<a href="tel:+5725540505" style="text-decoration:none"> \n<span style="color:#00448c"> \n+57 (2) 554 05 05 \n</span> \n</a> \n</p> \n<p style="color:#6c6d71; font-size:12px; margin:0 43px 0 0;text-align:left; font-family:Helvetica,Arial, sans-serif; line-height: 15px;"> Barranquilla <a href="tel:+5753618888" style="text-decoration:none"><span style="color:#00448c"> \n+57 (5) 361 88 88 \n</span> \n</a> \n – Bucaramanga \n<a href="tel:+5776972525" style="text-decoration:none"> \n<span style="color:#00448c"> \n+57 (7) 697 25 25 \n</span> \n</a> \n – Cartagena \n<a href="tel:+5756934400" style="text-decoration:none"> \n<span style="color:#00448c"> \n+57 (5) 693 44 00 \n</span> \n</a> \n</p> \n<p style="color:#6c6d71; font-size:12px; margin:0 43px 0 0;text-align:left; font-family:Helvetica,Arial, sans-serif; line-height: 15px;"> \nResto del pa&iacute;s \n<span style="color:#00448c"> \n01800 09 12345 \n</span> \n</p> \n<p style="color:#6c6d71; font-size:12px; margin:0 43px 0 0;text-align:left; font-family:Helvetica,Arial, sans-serif; line-height: 15px;"> \nSede principal Cra 48 Nro. 26-85 \n</p> \n<p style="color:#6c6d71; font-size:12px; margin:0 43px 0 0;text-align:left; font-family:Helvetica,Arial, sans-serif; line-height: 15px;"> \nMedell&iacute;n – Colombia</p> \n<p style="color:#6c6d71; font-size:12px; margin:5px 43px 20px 0; text-align:left; font-family:Helvetica,Arial, sans-serif;"> \n<a href="#SPONECLICKOPTOUT" name="qLink1" target="_blank" xt="SPONECLICKOPTOUT">Cancelar suscripci&oacute;n \n</a> \n</p> \n</td> \n</tr>';

  RESPONSIVEHEADER = '\n<table style="width: 100%;" border="0" cellpadding="0" cellspacing="0"> \n<tr> \n<td>&nbsp;</td> \n<td style="font-family: arial, helvetica, sans-serif; color:#ffffff; background-color:#014678; padding: 15px 20px; text-align: left; box-sizing: border-box; font-size: 14px; font-weight: bold;"> \nAGREGA TU TITULO \n</td> \n<td>&nbsp;</td> \n</tr> \n \n%replace% \n<tr> \n<td></td> \n<td style="width:600px;"> \n<table border="0" cellpadding="0" cellspacing="0" style="width:100%;"> \n<tr> \n<td style="width:5%;">&nbsp;</td> \n<td style="font-family:arial, helvetica, sans-serif; font-size: 0.90em; color:#666666; line-height:1.4; font-weight:lighter; padding-bottom:20px; border-bottom:1px solid #666666;"> \n<br />Bancolombia nunca te solicitar&aacute; datos financieros como usuarios, claves, n&uacute;meros de tarjetas de cr&eacute;dito con sus c&oacute;digos de seguridad y fechas de vencimiento mediante v&iacute;nculos de correo electr&oacute;nico, si recibe alguno, rep&oacute;rtelo de inmediato a <a href="mailto:correosospechoso@bancolombia.com.co">correosospechoso@bancolombia.com.co</a> \n</td> \n<td style="width:5%;">&nbsp;</td> \n</tr> \n<tr> \n<td> \n</td> \n<td style="font-family:arial, helvetica, sans-serif; font-size: 0.90em; color:#666666; line-height:1.4; font-weight:lighter; padding-top:20px;">M&aacute;s informaci&oacute;n en nuestras l&iacute;neas de atenci&oacute;n telef&oacute;nica:<br>Bogot&aacute; <span style="color:#274687;"> \n+57(1) 343 00 00</span> - Medell&iacute;n <span style="color:#274687;"> \n+57(4) 510 90 00</span> - Cali <span style="color:#274687;"> \n+57(2) 554 05 05</span> \n<br>Barranquilla <span style="color:#274687;"> \n+57(5) 361 88 88</span> - Bucaramanga <span style="color:#274687;"> \n+57(7) 697 25 25</span> - Cartagena <span style="color:#274687;"> \n+57(5) 693 44 00</span> \n<br>Resto del pa&iacute;s <span style="color:#274687;">018000 09 12345</span> \n<br>Sede principal Cra 48 Nro. 26-85<br>Medell&iacute;n - Colombia<br> \n<br> \nSi desea dejar de recibir este contenido, \n<a href="#" target="_blank" style="color:#274687;">haga clic aqu&iacute;</a> \n<br> \n<br> \n</td> \n<td> \n</td> \n</tr> \n</table> \n</td> \n<td> \n</td> \n<td></td> \n</tr>';

  addHeader = function(obj, header) {
    var inner;
    inner = obj.innerHTML;
    header = header.replace('%replace%', inner);
    return obj.innerHTML = header;
  };

  deleteStyle = function(obj) {
    var removeTag;
    removeTag = obj.getElementsByTagName('style');
    return obj.removeChild(removeTag[0]);
  };

  removeAttr = function(obj, tag, attr) {
    var tags;
    tags = Array.prototype.slice.call(obj.getElementsByTagName(tag));
    return tags.forEach(function(t, i) {
      attr.forEach(function(at, j) {
        return t.removeAttribute(at);
      });
    });
  };

  addAttr = function(obj, tag, attr, vAttr) {
    var tags;
    tags = Array.prototype.slice.call(obj.getElementsByTagName(tag));
    return tags.forEach(function(t, i) {
      attr.forEach(function(at, j) {
        return t.setAttribute(at, vAttr[j]);
      });
    });
  };

  getChildren = function(obj, tag) {
    var arrChildren, tags;
    arrChildren = new Array;
    tags = Array.prototype.slice.call(obj.getElementsByTagName(tag));
    tags.forEach(function(t, i) {
      if (t.parentNode === obj) {
        return arrChildren.push(t);
      }
    });
    return arrChildren;
  };

  addTdTag = function(arr, tag) {
    var innerCont;
    innerCont = null;
    return arr.forEach(function(t, i) {
      innerCont = t.innerHTML;
      t.innerHTML = "<td></td>\n%inner%\n<td></td>";
      return t.innerHTML = t.innerHTML.replace("%inner%", innerCont);
    });
  };

  getTagWidth = function(obj, tag) {
    var tags, width;
    tags = Array.prototype.slice.call(obj.getElementsByTagName(tag));
    width = null;
    return tags.forEach(function(t, i) {
      width = t.getAttribute("width");
      return t.parentNode.setAttribute("style", "width: " + width + "px");
    });
  };

  responsiveFormat = function() {
    var bodyTag, firstTableTag, headTag, mail, mailHtml, metaTag, principalTrTags, styleTag, text, titleTag;
    mailHtml = document.getElementById('htmlI').value.replace('\\', '');
    mail = document.getElementById('show');
    mail.innerHTML = mailHtml;
    firstTableTag = mail.getElementsByTagName("table")[0];
    deleteStyle(mail);
    principalTrTags = getChildren(mail.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0], 'tr');
    getTagWidth(mail, "img");
    getTagWidth(firstTableTag, "table");
    addTdTag(principalTrTags, "TD");
    removeAttr(mail, 'img', ['id', 'alt', 'height', 'name', 'width']);
    addAttr(mail, 'img', ['style'], ['display: block; border: none; width: 100%']);
    removeAttr(firstTableTag, 'table', ['style', 'align', 'left"', 'width']);
    addAttr(firstTableTag, 'table', ['style'], ['width: 100%']);
    addHeader(firstTableTag, RESPONSIVEHEADER);
    firstTableTag.setAttribute('style', 'width: 100%;');
    firstTableTag.removeAttribute('width');
    bodyTag = document.createElement('BODY');
    bodyTag.setAttribute('bgcolor', '#ffffff');
    styleTag = document.createElement('STYLE');
    styleTag.innerHTML = outlookStyle;
    titleTag = mail.getElementsByTagName('title')[0];
    metaTag = mail.getElementsByTagName('meta')[0];
    headTag = document.createElement('HEAD');
    headTag.appendChild(titleTag);
    headTag.appendChild(metaTag);
    mail.appendChild(headTag);
    bodyTag.appendChild(styleTag);
    bodyTag.appendChild(firstTableTag);
    mail.appendChild(bodyTag);
    text = htmlTag.replace('%body%', mail.innerHTML);
    text = text.replace(/<tbody>/g, '').replace(/<\/tbody>/g, '');
    text = text.replace(/></g, '>\n<');
    text = text.replace(/<!--[\s\S]*?-->/g, '');
    text = text.replace(/^\s*[\r\n]/gm, '');
    text = text.replace(/^\s+/mg, '');
    document.getElementById('htmlF').value = text;
  };

  genericFormat = function() {
    var bodyTag, firstTableTag, headTag, mail, mailHtml, metaTag, styleTag, text, titleTag;
    mailHtml = document.getElementById('htmlI').value.replace('\\', '');
    mail = document.getElementById('show');
    mail.innerHTML = mailHtml;
    deleteStyle(mail);
    removeAttr(mail, 'img', ['id', 'alt', 'height', 'name']);
    addAttr(mail, 'img', ['style'], ['display: block; border: none;']);
    removeAttr(mail, 'table', ['style', 'left"']);
    firstTableTag = mail.getElementsByTagName("table")[0];
    firstTableTag.setAttribute('align', 'center');
    addHeader(firstTableTag, GENERICHEADER);
    bodyTag = document.createElement('BODY');
    bodyTag.setAttribute('bgcolor', '#ffffff');
    styleTag = document.createElement('STYLE');
    styleTag.innerHTML = outlookStyle;
    titleTag = mail.getElementsByTagName('title')[0];
    metaTag = mail.getElementsByTagName('meta')[0];
    headTag = document.createElement('HEAD');
    headTag.appendChild(titleTag);
    headTag.appendChild(metaTag);
    mail.appendChild(headTag);
    bodyTag.appendChild(styleTag);
    bodyTag.appendChild(firstTableTag);
    mail.appendChild(bodyTag);
    text = htmlTag.replace('%body%', mail.innerHTML);
    text = text.replace(/<tbody>/g, '').replace(/<\/tbody>/g, '');
    text = text.replace(/></g, '>\n<');
    text = text.replace(/<!--[\s\S]*?-->/g, '');
    text = text.replace(/^\s*[\r\n]/gm, '');
    text = text.replace(/^\s+/mg, '');
    document.getElementById('htmlF').value = text;
  };

  mcFormat = function() {
    var bodyTag, firstTableTag, headTag, mail, mailHtml, metaTag, styleTag, text, titleTag;
    mailHtml = document.getElementById('htmlI').value.replace('\\', '');
    mail = document.getElementById('show');
    mail.innerHTML = mailHtml;
    deleteStyle(mail);
    removeAttr(mail, 'img', ['id', 'alt', 'height', 'name']);
    addAttr(mail, 'img', ['style'], ['display: block; border: none;']);
    removeAttr(mail, 'table', ['style', 'left"']);
    firstTableTag = mail.getElementsByTagName("table")[0];
    firstTableTag.removeAttribute('width');
    firstTableTag.style.cssText = 'max-width: 600px; width: 600px; margin: 0 auto; background-color: red';
    addHeader(firstTableTag, MASTERCARDHEADER);
    bodyTag = document.createElement('BODY');
    bodyTag.setAttribute('bgcolor', '#ffffff');
    bodyTag.setAttribute('leftmargin', '0');
    bodyTag.setAttribute('topmargin', '0');
    bodyTag.setAttribute('marginwidth', '0');
    bodyTag.setAttribute('marginheight', '0');
    bodyTag.style.width = '100%';
    styleTag = document.createElement('STYLE');
    styleTag.innerHTML = outlookStyle;
    titleTag = mail.getElementsByTagName('title')[0];
    metaTag = mail.getElementsByTagName('meta')[0];
    headTag = document.createElement('HEAD');
    headTag.appendChild(titleTag);
    headTag.appendChild(metaTag);
    mail.appendChild(headTag);
    bodyTag.appendChild(styleTag);
    bodyTag.appendChild(firstTableTag);
    mail.appendChild(bodyTag);
    text = htmlTag.replace('%body%', mail.innerHTML);
    text = text.replace(/<tbody>/g, '').replace(/<\/tbody>/g, '');
    text = text.replace(/></g, '>\n<');
    text = text.replace(/<!--[\s\S]*?-->/g, '');
    text = text.replace(/^\s*[\r\n]/gm, '');
    text = text.replace(/^\s+/mg, '');
    document.getElementById('htmlF').value = text;
  };

}).call(this);

