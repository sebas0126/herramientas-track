(function() {
  var emailFormat, header, htmlTag, outlookStyle;

  $(document).ready(function() {
    var button;
    button = document.getElementById('btnFormat');
    if (button) {
      button.onclick = emailFormat;
    }
  });

  htmlTag = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"\n"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">\n%body%\n</html>';

  outlookStyle = '\n.o365button {\ndisplay: block !important;\n}\ntd div {\ndisplay: block !important;\n}\n.x_fr-fil {\ndisplay: block !important;\n}\n.x_fr-dib {\ndisplay: block !important;\n}';

  header = '\n<tr> \n<td> \n<table style="display: inline-table;" border="0" cellpadding="0" cellspacing="0" width="650"> \n<tr> \n<td colspan="3" style="font-family:Arial, Helvetica, sans-serif; font-size:11px; color:#666; text-align:center "> \n<p>&nbsp;</p> \n<p> \nPara asegurar la entrega de nuestras comunicaciones, por favor agregue \n<br> xxx@xxxxx.com a su libreta de direcciones. \n<br> Si no puede ver correctamente las im&aacute;genes de este correo <a href="#">haga clic aqu&iacute;.</a> \n<br> \n<br> \n</p> \n</td> \n</tr> \n%replace% \n<tr> \n<td colspan="3" style="font-family:Arial, Helvetica, sans-serif; font-size:11px; color:#666; text-align:center "> \n<p> \n<br> \n<br> Nota: para garantizar que la informaci&oacute;n de este correo llegue correctamente, \n<br> es posible que algunas palabras lleguen sin tilde para evitar la desconfiguraci&oacute;n \n<br> de algunos caracteres. \n<br> \n<strong>Este correo electr&oacute;nico ha sido enviado a !*email*!.</strong> \n</p> \n<p>&nbsp;</p> \n</td> \n</tr> \n</table> \n</td> \n</tr>';

  emailFormat = function() {
    var bodyTag, firstTableTag, headTag, imgTags, inner, mail, mailHtml, metaTag, removeTag, styleTag, tableTags, text, titleTag;
    mailHtml = document.getElementById('htmlI').value.replace('\\', '');
    mail = document.getElementById('show');
    mail.innerHTML = mailHtml;
    removeTag = mail.getElementsByTagName('style');
    mail.removeChild(removeTag[0]);
    imgTags = Array.prototype.slice.call(mail.getElementsByTagName('img'));
    imgTags.forEach(function(tag, index) {
      tag.removeAttribute('id');
      tag.removeAttribute('alt');
      tag.removeAttribute('height');
      tag.removeAttribute('name');
      tag.setAttribute('style', 'display: block; border: none;');
    });
    tableTags = Array.prototype.slice.call(mail.getElementsByTagName('table'));
    tableTags.forEach(function(tag, index) {
      tag.removeAttribute('style');
      tag.removeAttribute('left"');
    });
    firstTableTag = mail.getElementsByTagName('table')[0];
    firstTableTag.setAttribute('align', 'center');
    inner = firstTableTag.innerHTML;
    header = header.replace('%replace%', inner);
    firstTableTag.innerHTML = header;
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
    text = text.replace(/></g, '>\n<');
    text = text.replace(/<!--[\s\S]*?-->/g, '');
    text = text.replace(/^\s*[\r\n]/gm, '');
    text = text.replace(/^\s+/mg, '');
    document.getElementById('htmlF').value = text;
  };

}).call(this);

