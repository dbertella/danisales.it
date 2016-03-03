// ==============================================
// Copyright 2004 by CodeLifter.com
// Free for all; but please leave in this header.
// ==============================================

var Quotation=new Array() // do not change this!

// Set up the quotations to be shown, below.
// To add more quotations, continue with the
// pattern, adding to the array.  Remember
// to increment the Quotation[x] index!

Quotation[0] = "DAMMI L'ELAPSED";
Quotation[1] = "Dobbiamo imparare a giocare con le banche";
Quotation[2] = "Se vuole cammello paga cammello";
Quotation[3] = "Ma questi sono gli happy problems";
Quotation[4] = "riusciresti a preparare entro venerdÃ¬ il preventivo (giorni effort) ";
Quotation[5] = "riusciresti a confrontarti con il PM";
Quotation[6] = "Ho smesso di bere";
Quotation[7] = "Sono a dieta";
Quotation[8] = "Esportiamo il timing";
Quotation[9] = "Faccio corso di scrum master";
Quotation[10] = "Il nostro partner ci ha girato un'opportunitÃ ";
Quotation[11] = "Buongiorno, scrivi ad amministrazione per le ferie";
Quotation[12] = "Facciamo un backlog con le user stories";
Quotation[13] = "Io avrÃ² una visione ad aquila sui progetti";
Quotation[14] = "dobbiamo ragionare insieme sui timing generali di progetto";
Quotation[15] = "dobbiamo condividere il know-how interno";
Quotation[16] = "facciamo un kickoff di inizio progetto";
Quotation[17] = "agile agency";
Quotation[18] = "javascript boutique";
Quotation[19] = "facciamo una retrospettiva";
Quotation[20] = "vedo gente stringo mani";
Quotation[21] = "ragazzi ho trovato un nuovo tool";
Quotation[22] = "stiamo andando out of scope dal focus della riunione";
Quotation[23] = "Non esistono problemi solo cose che si possono fare e che non si possono fare";
Quotation[24] = "Mettimi in cc";
Quotation[25] = "dividiamo le changes e i bugs";
Quotation[26] = "Lâ€™attivitÃ  Ã¨ solo di tappabuchi, come Ã¨ nella natura del maschio";
Quotation[27] = "facciamo una call per definire i dettagli?";
Quotation[28] = "Vediamo se abbiamo la capacity ";
Quotation[29] = "Mettiamolo in pipeline e facciamolo";
Quotation[30] = "Teniamoci una contingency";
Quotation[31] = "Auecchia!";
Quotation[32] = "Auanzemann";
Quotation[33] = "siamo in over selling";
Quotation[34] = "sono un Business developer";


// ======================================
// Do not change anything below this line
// ======================================
var Q = Quotation.length;
var whichQuotation=Math.round(Math.random()*(Q-1));
function showQuotation(){document.write(Quotation[whichQuotation]);}
showQuotation();