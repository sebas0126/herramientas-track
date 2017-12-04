$(document).ready ->
  button = document.getElementById('btnFormat')

  responsive = null

  if button
    button.onclick = ->
      if document.getElementById("res").checked
        console.log "responsive"
        responsiveFormat()
      else if document.getElementById("gen").checked
        console.log "generico"
        genericFormat()
      else
        console.log "MasterCard"
        mcFormat()

htmlTag = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"\n"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">\n%body%\n</html>'

outlookStyle = '\n.o365button {\ndisplay: block !important;\n}\ntd div {\ndisplay: block !important;\n}\n.x_fr-fil {\ndisplay: block !important;\n}\n.x_fr-dib {\ndisplay: block !important;\n}\n'

GENERICHEADER = '\n<tr>
            \n<td>
              \n<table style="display: inline-table;" border="0" cellpadding="0" cellspacing="0" width="650">
              \n<tr>
              \n<td colspan="3" style="font-family:Arial, Helvetica, sans-serif; font-size:11px; color:#666; text-align:center ">
              \n<p>&nbsp;</p>
              \n<p>
              \nPara asegurar la entrega de nuestras comunicaciones, por favor agregue
              \n<br> xxx@xxxxx.com a su libreta de direcciones.
              \n<br> Si no puede ver correctamente las im&aacute;genes de este correo <a href="#">haga clic aqu&iacute;.</a>
              \n<br>
             \n<br>
            \n</p>
          \n</td>
        \n</tr>
        \n%replace%
        \n<tr>
          \n<td colspan="3" style="font-family:Arial, Helvetica, sans-serif; font-size:11px; color:#666; text-align:center ">
            \n<p>
              \n<br>
              \n<br> Nota: para garantizar que la informaci&oacute;n de este correo llegue correctamente,
              \n<br> es posible que algunas palabras lleguen sin tilde para evitar la desconfiguraci&oacute;n
              \n<br> de algunos caracteres.
              \n<br>
              \n<strong>Este correo electr&oacute;nico ha sido enviado a !*email*!.</strong>
            \n</p>
            \n<p>&nbsp;</p>
          \n</td>
        \n</tr>
      \n</table>
    \n</td>
  \n</tr>'

MASTERCARDHEADER = '\n<tr>
    \n<td style="font-family: arial, helvetica, sans-serif; color:#ffffff; background-color:#292929; padding: 15px 20px; text-align: left; box-sizing: border-box; font-size: 14px; font-weight: bold;">
      \n¡No pierdas tu oportunidad, llega a tu meta, gana y disfruta!
    \n</td>
  \n</tr>
 \n%replace%
\n<tr>
    \n<td style="padding: 0 0 0 11px; background-color: #ffffff;">
      \n<p style="color:#6c6d71; font-size:12px; margin:25px 43px 0 0; font-family:Helvetica,Arial, sans-serif; line-height: 15px;">Bancolombia nunca solicitará datos financieros como usuarios, claves, números de tarjetas de crédito con sus códigos de seguridad y fechas de vencimiento mediante vínculos de correo electrónico, si recibe alguno, repórtelo de inmediato a correosospechoso@bancolombia.com.co</p>
      \n<hr style="color: #6c6d71;margin: 12px 67px 0 0;" />
      \n<p style="color:#6c6d71; font-size:12px; margin:25px 43px 0 0;text-align:left; font-family:Helvetica,Arial, sans-serif; line-height: 15px;">Más información en nuestras líneas de atención telefónica:</p>
      \n<p style="color:#6c6d71; font-size:12px; margin:0 43px 0 0;text-align:left; font-family:Helvetica,Arial, sans-serif;line-height: 12px;"> Bogot&aacute; <a href="tel:+5713430000" style="text-decoration:none"><span style="color:#00448c">+57 (1) 343 00 00</span></a> – Medell&iacute;n <a href="tel:+5745109000" style="text-decoration:none"><span style="color:#00448c">+57 (4) 510 90 00</span></a> – Cali <a href="tel:+5725540505" style="text-decoration:none"><span style="color:#00448c">+57 (2) 554 05 05</span></a></p>
      \n<p style="color:#6c6d71; font-size:12px; margin:0 43px 0 0;text-align:left; font-family:Helvetica,Arial, sans-serif; line-height: 15px;"> Barranquilla <a href="tel:+5753618888" style="text-decoration:none"><span style="color:#00448c">+57 (5) 361 88 88</span></a> – Bucaramanga <a href="tel:+5776972525" style="text-decoration:none"><span style="color:#00448c">+57 (7) 697 25 25</span></a> – Cartagena <a href="tel:+5756934400" style="text-decoration:none"><span style="color:#00448c">+57 (5) 693 44 00</span></a></p>
      \n<p style="color:#6c6d71; font-size:12px; margin:0 43px 0 0;text-align:left; font-family:Helvetica,Arial, sans-serif; line-height: 15px;"> Resto del pa&iacute;s <span style="color:#00448c">01800 09 12345</span></p>
      \n<p style="color:#6c6d71; font-size:12px; margin:0 43px 0 0;text-align:left; font-family:Helvetica,Arial, sans-serif; line-height: 15px;"> Sede principal Cra 48 Nro. 26-85</p>
      \n<p style="color:#6c6d71; font-size:12px; margin:0 43px 0 0;text-align:left; font-family:Helvetica,Arial, sans-serif; line-height: 15px;"> Medell&iacute;n – Colombia</p>
      \n<p style="color:#6c6d71; font-size:12px; margin:5px 43px 20px 0; text-align:left; font-family:Helvetica,Arial, sans-serif;"><a href="#SPONECLICKOPTOUT" name="qLink1" target="_blank" xt="SPONECLICKOPTOUT">Cancelar suscripci&oacute;n</a></p>
    \n</td>
  \n</tr>'

RESPONSIVEHEADER = '\n<table style="width: 100%;" border="0" cellpadding="0" cellspacing="0">
\n<tr>
\n<td>&nbsp;</td>
\n<td style="font-family: arial, helvetica, sans-serif; color:#ffffff; background-color:#014678; padding: 15px 20px; text-align: left; box-sizing: border-box; font-size: 14px; font-weight: bold;">
\nAGREGA TU TITULO
\n</td>
\n<td>&nbsp;</td>
\n</tr>
\n
    \n%replace%
    \n<tr>
      \n<td></td>
      \n<td style="width:600px;">
        \n<table border="0" cellpadding="0" cellspacing="0" style="width:100%;">
          \n<tr>
            \n<td style="width:5%;">&nbsp;</td>
            \n<td style="font-family:arial, helvetica, sans-serif; font-size: 0.90em; color:#666666; line-height:1.4; font-weight:lighter; padding-bottom:20px; border-bottom:1px solid #666666;">
              \n<br />Bancolombia nunca te solicitar&aacute; datos financieros como usuarios, claves, n&uacute;meros de tarjetas de cr&eacute;dito con sus c&oacute;digos de seguridad y fechas de vencimiento mediante v&iacute;nculos de correo electr&oacute;nico, si recibe alguno, rep&oacute;rtelo de inmediato a <a href="mailto:correosospechoso@bancolombia.com.co">correosospechoso@bancolombia.com.co</a>
            \n</td>
            \n<td style="width:5%;">&nbsp;</td>
          \n</tr>
          \n<tr>
            \n<td>
            \n</td>
            \n<td style="font-family:arial, helvetica, sans-serif; font-size: 0.90em; color:#666666; line-height:1.4; font-weight:lighter; padding-top:20px;">M&aacute;s informaci&oacute;n en nuestras l&iacute;neas de atenci&oacute;n telef&oacute;nica:<br>Bogot&aacute; <span style="color:#274687;">+57(1) 343 00 00</span> - Medell&iacute;n <span style="color:#274687;">+57(4) 510 90 00</span> - Cali <span style="color:#274687;">+57(2) 554 05 05</span>
              \n<br>Barranquilla <span style="color:#274687;">+57(5) 361 88 88</span> - Bucaramanga <span style="color:#274687;">+57(7) 697 25 25</span> - Cartagena <span style="color:#274687;">+57(5) 693 44 00</span>
              \n<br>Resto del pa&iacute;s <span style="color:#274687;">018000 09 12345</span>
              \n<br>Sede principal Cra 48 Nro. 26-85<br>Medell&iacute;n - Colombia<br>
              \n<br>
              \nSi desea dejar de recibir este contenido, 
              \n<a href="#" target="_blank" style="color:#274687;">haga clic aqu&iacute;</a>
              \n<br>
              \n<br>
            \n</td>
            \n<td>
            \n</td>
          \n</tr>
        \n</table>
      \n</td>
      \n<td>
      \n</td>
      \n<td></td>
    \n</tr>'

addHeader = (obj, header) ->
  inner = obj.innerHTML
  header = header.replace('%replace%', inner)
  obj.innerHTML = header

deleteStyle = (obj) ->
  removeTag = obj.getElementsByTagName('style')
  obj.removeChild removeTag[0]

removeAttr = (obj, tag, attr) ->
  tags = Array::slice.call(obj.getElementsByTagName(tag))
  tags.forEach (t, i) ->
    attr.forEach (at, j) ->
      t.removeAttribute at
    return

addAttr = (obj, tag, attr, vAttr) ->
  tags = Array::slice.call(obj.getElementsByTagName(tag))
  tags.forEach (t, i) ->
    attr.forEach (at, j) ->
      t.setAttribute at, vAttr[j]
    return

getChildren = (obj, tag) ->
  arrChildren = new Array
  tags = Array::slice.call(obj.getElementsByTagName(tag))
  tags.forEach (t, i) ->
    if t.parentNode == obj
      arrChildren.push(t)
  arrChildren

addTdTag = (arr, tag) ->
  innerCont = null
  arr.forEach (t, i) ->
    innerCont = t.innerHTML
    t.innerHTML = "<td></td>\n%inner%\n<td></td>"
    t.innerHTML = t.innerHTML.replace("%inner%", innerCont);

getTagWidth = (obj, tag) ->
  tags = Array::slice.call(obj.getElementsByTagName(tag))
  width = null
  tags.forEach (t, i) ->
    width = t.getAttribute("width")
    t.parentNode.setAttribute("style", "width: " + width + "px")

responsiveFormat = ->
  mailHtml = document.getElementById('htmlI').value.replace('\\', '')
  mail = document.getElementById('show')
  mail.innerHTML = mailHtml

  firstTableTag = mail.getElementsByTagName("table")[0]

  # Borrar etiqueta style
  deleteStyle(mail)

  # Obtener los tr principales
  principalTrTags = getChildren(mail.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0], 'tr')

  # Agrega los width a los td de los img
  getTagWidth(mail, "img")

  # Agrega los width a los td de los table
  getTagWidth(firstTableTag, "table")

  # Agregar etiqueta td vacia a los tr
  addTdTag(principalTrTags, "TD")

  # Borrar atributos de etiqueta img
  removeAttr(mail, 'img', ['id', 'alt', 'height', 'name', 'width'])

  # Agregar atributo style a etiqueta img
  addAttr(mail, 'img', ['style'], ['display: block; border: none; width: 100%'])

  # Borrar atributos de etiqueta img
  removeAttr(firstTableTag, 'table', ['style', 'align', 'left"', 'width'])

  # Agregar style a los table
  addAttr(firstTableTag, 'table', ['style'], ['width: 100%'])

  # Reemplazar header
  addHeader(firstTableTag, RESPONSIVEHEADER)
  firstTableTag.setAttribute('style', 'width: 100%;');
  firstTableTag.removeAttribute('width');

  # Agregar body
  bodyTag = document.createElement('BODY')
  bodyTag.setAttribute 'bgcolor', '#ffffff'

  # Agregar style outlook
  styleTag = document.createElement('STYLE')
  styleTag.innerHTML = outlookStyle

  # Obtener etiquetas head
  titleTag = mail.getElementsByTagName('title')[0]
  metaTag = mail.getElementsByTagName('meta')[0]

  #Agregar header
  headTag = document.createElement('HEAD')
  headTag.appendChild titleTag
  headTag.appendChild metaTag
  mail.appendChild headTag
  bodyTag.appendChild styleTag
  bodyTag.appendChild firstTableTag
  mail.appendChild bodyTag

  text = htmlTag.replace('%body%', mail.innerHTML)
  text = text.replace(/<tbody>/g, '').replace(/<\/tbody>/g, '')
  text = text.replace(/></g, '>\n<')
  text = text.replace(/<!--[\s\S]*?-->/g, '')
  text = text.replace(/^\s*[\r\n]/gm, '')
  text = text.replace(/^\s+/mg, '')
  document.getElementById('htmlF').value = text

  return

genericFormat = ->
  mailHtml = document.getElementById('htmlI').value.replace('\\', '')
  mail = document.getElementById('show')
  mail.innerHTML = mailHtml

  # Borrar etiqueta style
  deleteStyle(mail)

  # Borrar atributos de etiqueta img
  removeAttr(mail, 'img', ['id', 'alt', 'height', 'name'])

  # Agregar atributo style a etiqueta img
  addAttr(mail, 'img', ['style'], ['display: block; border: none;'])

  # Borrar atributos de etiqueta table
  removeAttr(mail, 'table', ['style', 'left"'])

  # Reemplazar header
  firstTableTag = mail.getElementsByTagName("table")[0]
  firstTableTag.setAttribute 'align', 'center'
  addHeader(firstTableTag, GENERICHEADER)

  # Agregar body
  bodyTag = document.createElement('BODY')
  bodyTag.setAttribute 'bgcolor', '#ffffff'

  # Agregar style outlook
  styleTag = document.createElement('STYLE')
  styleTag.innerHTML = outlookStyle

  # Obtener etiquetas head
  titleTag = mail.getElementsByTagName('title')[0]
  metaTag = mail.getElementsByTagName('meta')[0]

  #Agregar header
  headTag = document.createElement('HEAD')
  headTag.appendChild titleTag
  headTag.appendChild metaTag
  mail.appendChild headTag
  bodyTag.appendChild styleTag
  bodyTag.appendChild firstTableTag
  mail.appendChild bodyTag

  text = htmlTag.replace('%body%', mail.innerHTML)
  text = text.replace(/<tbody>/g, '').replace(/<\/tbody>/g, '')
  text = text.replace(/></g, '>\n<')
  text = text.replace(/<!--[\s\S]*?-->/g, '')
  text = text.replace(/^\s*[\r\n]/gm, '')
  text = text.replace(/^\s+/mg, '')
  document.getElementById('htmlF').value = text
  return


mcFormat = ->
  mailHtml = document.getElementById('htmlI').value.replace('\\', '')
  mail = document.getElementById('show')
  mail.innerHTML = mailHtml

  # Borrar etiqueta style
  deleteStyle(mail)

  # Borrar atributos de etiqueta img
  removeAttr(mail, 'img', ['id', 'alt', 'height', 'name'])

  # Agregar atributo style a etiqueta img
  addAttr(mail, 'img', ['style'], ['display: block; border: none;'])

  # Borrar atributos de etiqueta table
  removeAttr(mail, 'table', ['style', 'left"'])

  # Reemplazar header
  firstTableTag = mail.getElementsByTagName("table")[0]
  firstTableTag.removeAttribute 'width'
  firstTableTag.style.cssText = 'max-width: 600px; width: 600px; margin: 0 auto; background-color: red'
  addHeader(firstTableTag, MASTERCARDHEADER)

  # Agregar body
  bodyTag = document.createElement('BODY')
  bodyTag.setAttribute 'bgcolor', '#ffffff'
  bodyTag.setAttribute 'leftmargin', '0'
  bodyTag.setAttribute 'topmargin', '0'
  bodyTag.setAttribute 'marginwidth', '0'
  bodyTag.setAttribute 'marginheight', '0'
  bodyTag.style.width = '100%'

  # Agregar style outlook
  styleTag = document.createElement('STYLE')
  styleTag.innerHTML = outlookStyle

  # Obtener etiquetas head
  titleTag = mail.getElementsByTagName('title')[0]
  metaTag = mail.getElementsByTagName('meta')[0]

  #Agregar header
  headTag = document.createElement('HEAD')
  headTag.appendChild titleTag
  headTag.appendChild metaTag
  mail.appendChild headTag
  bodyTag.appendChild styleTag
  bodyTag.appendChild firstTableTag
  mail.appendChild bodyTag

  text = htmlTag.replace('%body%', mail.innerHTML)
  text = text.replace(/<tbody>/g, '').replace(/<\/tbody>/g, '')
  text = text.replace(/></g, '>\n<')
  text = text.replace(/<!--[\s\S]*?-->/g, '')
  text = text.replace(/^\s*[\r\n]/gm, '')
  text = text.replace(/^\s+/mg, '')
  document.getElementById('htmlF').value = text
  return
