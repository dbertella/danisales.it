var quotes = [
	'Interessante',
	'Molto interessante',
	'Più induttivo',
	'Il pesce puzza sempre dalla testa',
	'Per cambiare VERAMENTE',
	'Una soluzione end-to-end',
	'Se fossero bravi li avrebbero già venduti',
	'Che violenza..!',
	'Ah sono arrivati altri CV',
	'Concordo',
	'Io sono un boy scout',
	'Venite in piscina con me a fare apnea?',
	'Devo andare a mettere a letto le bambine',
	'Facciamo un prototipo e vendiamolo',
	'Ho una proposta',
	'Siamo una start up, siamo incubati in Reply',
	'Quelli sono soldi facili',
	'Facciamo i mini-me',
	'Per imparare a vendere bisognare fare almeno una figura di merda al giorno',
	'Mi piace',
	'Non siamo una boutique di design',
	'Facciamo un workshop di design thinking',
	'Sono super competitivo io',
	'Mettiamo lì uno dal cliente per 6 mesi',
	'Usiamo le logiche di una start up',
	'Le bambine non mi hanno fatto dormire',
	'Non siamo mica Accenture',
	'Metti giù una presentazione a bullet point',
	'Sulla tecnologia non mi fregano',
	'non vedo problemi, vedo opportunità',
	'se c\'è mediocrità ci sono più opportunità',
];

var q = quotes.length;
var dani = document.querySelector('.dani');

var showQuotation = function() {
	var randomQuote = Math.round(Math.random() * (q - 1));
	var randomImg = Math.ceil(Math.random() * 5);
	var img = document.createElement('img');
	img.src = 'danisales-0' + randomImg + '.jpg';
	dani.innerHTML = '';
	dani.appendChild(img);
	document.querySelector('.quote').innerText = quotes[randomQuote];
}
showQuotation();
dani.addEventListener('click', showQuotation, false);



