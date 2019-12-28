// JavaScript Document

// RESET A="#"
function resetA() {
$('a[href="#"]').click(function(event) {
	event.preventDefault();
	});
}

/* ===================
ATTIVA DATEPICKER
=================== */
function attivaDatePicker() {	 
 var dates = $( "#date1, #date2" ).datepicker({
			changeMonth: true,
			numberOfMonths: 1,
			onSelect: function( selectedDate ) {
				var option = this.id == "date1" ? "minDate" : "maxDate",
					instance = $( this ).data( "datepicker" ),
					date = $.datepicker.parseDate(
						instance.settings.dateFormat ||
						$.datepicker._defaults.dateFormat,
						selectedDate, instance.settings );
				dates.not( this ).datepicker( "option", option, date );
			}
		});      
		
		var dates2 = $( "#date3, #date4" ).datepicker({
			changeMonth: true,
			numberOfMonths: 1,
			onSelect: function( selectedDate ) {
				var option = this.id == "date3" ? "minDate" : "maxDate",
					instance = $( this ).data( "datepicker" ),
					date2 = $.datepicker.parseDate(
						instance.settings.dateFormat ||
						$.datepicker._defaults.dateFormat,
						selectedDate, instance.settings );
				dates2.not( this ).datepicker( "option", option, date2 );
			}
		});
		}   

/* ========================================
JS specifico per "pagina"
========================================= */
 switch (pagina) {
	case 'ita-contatti.php': 
	function verifica_dati(){
	var mesErrori=new Array();
	var form1=document.getElementById("form1");
	if (form1.nome.value=="") mesErrori.push("- Compila il campo nome");
	if (form1.info.value=="") mesErrori.push("- Compila il corpo del messaggio");
	var email=form1.email.value;
	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (email == "" || !filter.test(email)) mesErrori.push("- Verifica l\'indirizzo E-mail inserito");
	if (form1.consenso_0.checked=="") mesErrori.push("- Accetta le condizioni della privacy");
	messaggio=mesErrori.join("\n\n");
	if ( mesErrori.length>0){
	alert(messaggio);
	return false;
	}
	else{
	return true;
	}
	} 
	break;
	
	case 'supersizeGallery':
	$(document).ready(function() {
	$.supersized({	
	slide_interval: 3000, // Length between transitions
	transition: 1, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
	transition_speed:700, // Speed of transition									   
	// Components							
	slide_links	:'blank', // Individual links for each slide (Options: false, 'num', 'name', 'blank')
	slides:[
	{image : 'loop/PIO-Tavolino.jpg', title : 'Pio Porcinai Designer', url : '#'},
	{image : 'loop/Pio-tavolino-con-lapis.jpg', title : 'Pio Porcinai Designer', thumb : 'demo/nemo.jpg', url : '#'},
	{image : 'loop/Tavolo-CAIO.jpg', title : 'Pio Porcinai Designer', thumb : 'demo/nemo.jpg', url : '#'}
	]
	});
	});
	break;
	
	case 'presentazione':
	$(document).ready(function() {
	$.supersized({	
	slide_interval: 3000, // Length between transitions
	transition: 1, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
	transition_speed:700, // Speed of transition									   
	// Components							
	slide_links	:'blank', // Individual links for each slide (Options: false, 'num', 'name', 'blank')
	slides:[
	{image : 'images/bg-profilo.jpg', title : 'Pio Porcinai Designer', url : '#'}
	]
	});
	});
	break;
	
	case 'creditcontacts':
	$(document).ready(function() {
	$.supersized({	
	slide_interval: 3000, // Length between transitions
	transition: 1, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
	transition_speed:700, // Speed of transition									   
	// Components							
	slide_links	:'blank', // Individual links for each slide (Options: false, 'num', 'name', 'blank')
	slides:[
	{image : 'images/bg-contacts.jpg', title : 'Pio Porcinai Designer', url : '#'}
	]
	});
	});
	break;
	
 	}
/* =======================
Attivazione componenti: widgets e plug-in.
Eventi associati al caricamento del DOM per tutte le pagine.
======================= */
$(document).ready(function() {	
	$(document).pngFix();
	$('.fancybox').fancybox();
	resetA();
	});

/* =======================
Eventi associati al caricamento completo della pagina
======================= */
$(window).bind("load", function() {
	});

/* =======================
Eventi associati allo scroll della pagina
======================= */
$(window).bind('scroll', function() {
	});

/* =======================
Eventi associati al ridimensionamento della finestra
======================= */
$(window).bind("resize", function() {  
	});

/* ========================= DGNET WEBDESIGN 2012 ========================= 

	SPEED UUUUUUP +
	---------------------------------------------------
	Icone Png: http://www.iconfinder.com/ 
	Trova Font: http://www.myfonts.com/WhatTheFont/
	Css3 Gradient Generator: http://www.colorzilla.com/
	Css3 Generator: http://css3generator.com/
	Jquery user Interface: http://jqueryui.com/
	Guida Html5: http://www.html.it/guide/guida-html5/
	
	Plug-In Cycle: http://jquery.malsup.com/cycle/
	Fancybox: http://fancyapps.com/fancybox/
	Superfish: http://users.tpg.com.au/j_birch/plugins/superfish/
	Supersized: http://buildinternet.com/project/supersized/
	
	jquery 1.7.2 URL assoluto <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	
========================================================================= */