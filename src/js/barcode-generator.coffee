$(document).ready ->

	cantCod = 0
	long = 

	alto = 25
	largo = 40
	fila = 5
	codPagina = 60

	pag = 0

	$("#btnGenerar").click ->
		$("#show").html("")
		txtLong = document.getElementById("txtLong")
		txtCant = document.getElementById("txtCant")
		cantCod = parseInt(document.getElementById("txtCant").value)
		long = parseInt(document.getElementById("txtLong").value)
		if !cantCod
			txtCant.value = 1
			cantCod = 1
		if !long
			txtLong.value = 5
			long = 5
		generarCodigos(cantCod, long);
		$("#btnDescargar").removeClass("invisible");

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

generarCodigos = (cantidad, longitud) ->
	i = 0
	html = ""
	while i < cantidad
		html = '<canvas id="cb' + i + '"></canvas>'
		$("#show").append(html)
		randomNum = numeroAleatorio(longitud)
		JsBarcode("#cb" + i, randomNum);
		i++

numeroAleatorio = (tamano) ->
	x = Math.random().toString().slice(2, tamano + 2);
	x

	# cantidad = Math.pow(10, tamano)
	# x = Math.floor((Math.random() * cantidad) + 1);
	# x