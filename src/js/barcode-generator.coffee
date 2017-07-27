codificacion = "CODE128"
cantCod = 0

$(document).ready ->

	aleatorio = true

	rdbRandom = document.getElementById('random')
	rdbCodes = document.getElementById('codes')
	rdbC128 = document.getElementById('code128')
	rdbEAN13 = document.getElementById('ean13')

	rdbC128.onclick = ->
		codificacion = "CODE128"
		document.getElementById("txtLong").value = "";
		document.getElementById("txtLong").readOnly = false;
		return

	rdbEAN13.onclick = ->
		codificacion = "EAN13"
		document.getElementById("txtLong").value = 12;
		document.getElementById("txtLong").readOnly = true;
		return

	rdbRandom.onclick = ->
		$("#codesForm").addClass("invisible")
		$("#randomForm").removeClass("invisible")
		aleatorio = true
		return

	rdbCodes.onclick = ->
		$("#codesForm").removeClass("invisible")
		$("#randomForm").addClass("invisible")
		aleatorio = false
		return

	btnAdd = document.getElementById('btnAdd')
	btnAdd.onclick = ->
		$('#addCode').append('<input id="txtCode' + cantTxt + '" type="text" placeholder="Codigo" class="form-control"><br>')
		document.getElementById("txtCode" + cantTxt).focus();
		cantTxt++
		return


	cantTxt = 1

	long = 25
	alto = 25
	largo = 40
	fila = 5
	codPagina = 60

	pag = 0

	$("#btnGenerar").click ->
		arrCodes = []
		i = 0
		$("#show").html("")
		if aleatorio
			txtLong = document.getElementById("txtLong")
			txtCant = document.getElementById("txtCant")
			cantCod = parseInt(txtCant.value)
			long = parseInt(txtLong.value)
			if !cantCod
				txtCant.value = 1
				cantCod = 1
			if !long
				txtLong.value = 5
				long = 5
			generarCodigos(generarAleatorios(cantCod, long));
		else
			while i < cantTxt
				txtAct = document.getElementById("txtCode" + i)
				arrCodes.push(txtAct.value)
				i++
			generarCodigos(arrCodes)
		$("#btnDescargar").removeClass("invisible")


	$("#btnDescargar").click ->
		x = 0
		y = 0
		cont = 1
		pdf = new jsPDF()
		codigos = $('canvas')
		while cont <= cantCod
			canvas = codigos[cont-1].toDataURL('image/jpeg', 1.0)
			pdf.addImage canvas, 'JPEG', x, y, 36, 21
			x = x + largo
			if cont % fila == 0 && cont != 0
				x = 0
				y = y + alto
			if cont % codPagina == 0 && cont != 0
				pag = pag + 1
				x = 0
				y = 0
				pdf.save "codigos-pag-" + pag + ".pdf"
				pdf = new jsPDF()
			cont++
		pdf.save "codigos-pag-" + pag + ".pdf"
		# download = document.getElementById('download')
		return

generarCodigos = (arreglo) ->
	i = 0
	cantCod = arreglo.length
	while i < cantCod
		# if codificacion == "EAN13"
		# 	value = parseInt(arreglo[i])
		# else
		# 	value = arreglo[i]
		html = '<canvas id="cb' + i + '"></canvas>'
		$("#show").append(html)
		JsBarcode("#cb" + i, arreglo[i], {
			format: codificacion
		});
		i++

generarAleatorios = (cantidad, longitud) ->
	i = 0
	arrRandom = []
	while i < cantidad
		arrRandom.push numeroAleatorio(longitud)
		i++
	return arrRandom

numeroAleatorio = (tamano) ->
	x = Math.random().toString().slice(2, tamano + 2);
	x
