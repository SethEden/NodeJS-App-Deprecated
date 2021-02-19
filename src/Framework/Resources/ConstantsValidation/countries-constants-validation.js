/**
 * @file countries-constants-validation.js
 * @module countries-constants-validation
 * @description Contains validations for named countries.
 * @requires module:countries-constants
 * @author Seth Hollingsead
 * @date 2021/02/17
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as ctr from '../../Constants/countries.constants';

 /**
 * @function countriesConstantsValidation
 * @description Initializes the countries constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/02/17
 */
 export const countriesConstantsValidation = [
   // Countires
   {Name: 'cAfghanistan', Actual: cfg.cAfghanistan, Expected: 'Afghanistan'},
   {Name: 'cAlbania', Actual: cfg.cAlbania, Expected: 'Albania'},
   {Name: 'cAlgeria', Actual: cfg.cAlgeria, Expected: 'Algeria'},
   {Name: 'cAndorra', Actual: cfg.cAndorra, Expected: 'Andorra'},
   {Name: 'cAngola', Actual: cfg.cAngola, Expected: 'Angola'},
   {Name: 'cAntigua', Actual: cfg.cAntigua, Expected: 'Antigua'},
   {Name: 'cArgentina', Actual: cfg.cArgentina, Expected: 'Argentina'},
   {Name: 'cArmenia', Actual: cfg.cArmenia, Expected: 'Armenia'},
   {Name: 'cAustralia', Actual: cfg.cAustralia, Expected: 'Australia'},
   {Name: 'cAustria', Actual: cfg.cAustria, Expected: 'Austria'},
   {Name: 'cAzerbaijan', Actual: cfg.cAzerbaijan, Expected: 'Azerbaijan'},
   {Name: 'cBahamas', Actual: cfg.cBahamas, Expected: 'Bahamas'},
   {Name: 'cBahrain', Actual: cfg.cBahrain, Expected: 'Bahrain'},
   {Name: 'cBangladesh', Actual: cfg.cBangladesh, Expected: 'Bangladesh'},
   {Name: 'cBarbados', Actual: cfg.cBarbados, Expected: 'Barbados'},
   {Name: 'cBarbuda', Actual: cfg.cBarbuda, Expected: 'Barbuda'},
   {Name: 'cBelarus', Actual: cfg.cBelarus, Expected: 'Belarus'},
   {Name: 'cBelgium', Actual: cfg.cBelgium, Expected: 'Belgium'},
   {Name: 'cBelize', Actual: cfg.cBelize, Expected: 'Belize'},
   {Name: 'cBenin', Actual: cfg.cBenin, Expected: 'Benin'},
   {Name: 'cBhutan', Actual: cfg.cBhutan, Expected: 'Bhutan'},
   {Name: 'cBolivia', Actual: cfg.cBolivia, Expected: 'Bolivia'},
   {Name: 'cBosnia', Actual: cfg.cBosnia, Expected: 'Bosnia'},
   {Name: 'cBotswana', Actual: cfg.cBotswana, Expected: 'Botswana'},
   {Name: 'cBrazil', Actual: cfg.cBrazil, Expected: 'Brazil'},
   {Name: 'cBrunei', Actual: cfg.cBrunei, Expected: 'Brunei'},
   {Name: 'cBulgaria', Actual: cfg.cBulgaria, Expected: 'Bulgaria'},
   {Name: 'cBurkinaFaso', Actual: cfg.cBurkinaFaso, Expected: 'BurkinaFaso'},
   {Name: 'cBurundi', Actual: cfg.cBurundi, Expected: 'Burundi'},
   {Name: 'cCotedlvoire', Actual: cfg.cCotedlvoire, Expected: 'Cote dlvoire'},
   {Name: 'cCaboVerde', Actual: cfg.cCaboVerde, Expected: 'Cabo Verde'},
   {Name: 'cCambodia', Actual: cfg.cCambodia, Expected: 'Cambodia'},
   {Name: 'cCameroon', Actual: cfg.cCameroon, Expected: 'Cameroon'},
   {Name: 'cCanada', Actual: cfg.cCanada, Expected: 'Canada'},
   {Name: 'cCentralAfricanRepublic', Actual: cfg.cCentralAfricanRepublic, Expected: 'Central African Republic'},
   {Name: 'cChad', Actual: cfg.cChad, Expected: 'Chad'},
   {Name: 'cChile', Actual: cfg.cChile, Expected: 'Chile'},
   {Name: 'cChina', Actual: cfg.cChina, Expected: 'China'},
   {Name: 'cColombia', Actual: cfg.cColombia, Expected: 'Colombia'},
   {Name: 'cComoros', Actual: cfg.cComoros, Expected: 'Comoros'},
   {Name: 'cCongo', Actual: cfg.cCongo, Expected: 'Congo'},
   {Name: 'cCostaRica', Actual: cfg.cCostaRica, Expected: 'Costa Rica'},
   {Name: 'cCroatia', Actual: cfg.cCroatia, Expected: 'Croatia'},
   {Name: 'cCuba', Actual: cfg.cCuba, Expected: 'Cuba'},
   {Name: 'cCyprus', Actual: cfg.cCyprus, Expected: 'Cyprus'},
   {Name: 'cCzechia', Actual: cfg.cCzechia, Expected: 'Czechia'},
   {Name: 'cDemocraticRepublicOfTheCongo', Actual: cfg.cDemocraticRepublicOfTheCongo, Expected: 'Democratic Republic of the Congo'},
   {Name: 'cDenmark', Actual: cfg.cDenmark, Expected: 'Denmark'},
   {Name: 'cDjibouti', Actual: cfg.cDjibouti, Expected: 'Djibouti'},
   {Name: 'cDominica', Actual: cfg.cDominica, Expected: 'Dominica'},
   {Name: 'cDominicanRepublic', Actual: cfg.cDominicanRepublic, Expected: 'Dominican Republic'},
   {Name: 'cEcuador', Actual: cfg.cEcuador, Expected: 'Ecuador'},
   {Name: 'cEgypt', Actual: cfg.cEgypt, Expected: 'Egypt'},
   {Name: 'cElSalvador', Actual: cfg.cElSalvador, Expected: 'El Salvador'},
   {Name: 'cEquatorialGuinea', Actual: cfg.cEquatorialGuinea, Expected: 'Equatorial Guinea'},
   {Name: 'cEritrea', Actual: cfg.cEritrea, Expected: 'Eritrea'},
   {Name: 'cEstonia', Actual: cfg.cEstonia, Expected: 'Estonia'},
   {Name: 'cEswatini', Actual: cfg.cEswatini, Expected: 'Eswatini'}, // -- Formerly Swaziland
   {Name: 'cEthiopia', Actual: cfg.cEthiopia, Expected: 'Ethiopia'},
   {Name: 'cFiji', Actual: cfg.cFiji, Expected: 'Fiji'},
   {Name: 'cFinland', Actual: cfg.cFinland, Expected: 'Finland'},
   {Name: 'cFrance', Actual: cfg.cFrance, Expected: 'France'},
   {Name: 'cGabon', Actual: cfg.cGabon, Expected: 'Gabon'},
   {Name: 'cGambia', Actual: cfg.cGambia, Expected: 'Gambia'},
   {Name: 'cGeorgia', Actual: cfg.cGeorgia, Expected: 'Georgia'},
   {Name: 'cGermany', Actual: cfg.cGermany, Expected: 'Germany'},
   {Name: 'cGhana', Actual: cfg.cGhana, Expected: 'Ghana'},
   {Name: 'cGreece', Actual: cfg.cGreece, Expected: 'Greece'},
   {Name: 'cGrenada', Actual: cfg.cGrenada, Expected: 'Grenada'},
   {Name: 'cGuatemala', Actual: cfg.cGuatemala, Expected: 'Guatemala'},
   {Name: 'cGuinea', Actual: cfg.cGuinea, Expected: 'Guinea'},
   {Name: 'cGuineaBissau', Actual: cfg.cGuineaBissau, Expected: 'Guinea-Bissau'},
   {Name: 'cGuyana', Actual: cfg.cGuyana, Expected: 'Guyana'},
   {Name: 'cHaiti', Actual: cfg.cHaiti, Expected: 'Haiti'},
   {Name: 'cHerzegovina', Actual: cfg.cHerzegovina, Expected: 'Herzegovina'},
   {Name: 'cHolySee', Actual: cfg.cHolySee, Expected: 'Holy See'},
   {Name: 'cHonduras', Actual: cfg.cHonduras, Expected: 'Honduras'},
   {Name: 'cHungary', Actual: cfg.cHungary, Expected: 'Hungary'},
   {Name: 'cIceland', Actual: cfg.cIceland, Expected: 'Iceland'},
   {Name: 'cIndia', Actual: cfg.cIndia, Expected: 'India'},
   {Name: 'cIndonesia', Actual: cfg.cIndonesia, Expected: 'Indonesia'},
   {Name: 'cIran', Actual: cfg.cIran, Expected: 'Iran'},
   {Name: 'cIraq', Actual: cfg.cIraq, Expected: 'Iraq'},
   {Name: 'cIreland', Actual: cfg.cIreland, Expected: 'Ireland'},
   {Name: 'cIsrael', Actual: cfg.cIsrael, Expected: 'Israel'},
   {Name: 'cItaly', Actual: cfg.cItaly, Expected: 'Italy'},
   {Name: 'cJamaica', Actual: cfg.cJamaica, Expected: 'Jamaica'},
   {Name: 'cJapan', Actual: cfg.cJapan, Expected: 'Japan'},
   {Name: 'cJordan', Actual: cfg.cJordan, Expected: 'Jordan'},
   {Name: 'cKazakhstan', Actual: cfg.cKazakhstan, Expected: 'Kazakhstan'},
   {Name: 'cKenya', Actual: cfg.cKenya, Expected: 'Kenya'},
   {Name: 'cKiribati', Actual: cfg.cKiribati, Expected: 'Kiribati'},
   {Name: 'cKuwait', Actual: cfg.cKuwait, Expected: 'Kuwait'},
   {Name: 'cKyrgyzstan', Actual: cfg.cKyrgyzstan, Expected: 'Kyrgyzstan'},
   {Name: 'cLaos', Actual: cfg.cLaos, Expected: 'Laos'},
   {Name: 'cLatvia', Actual: cfg.cLatvia, Expected: 'Latvia'},
   {Name: 'cLebanon', Actual: cfg.cLebanon, Expected: 'Lebanon'},
   {Name: 'cLesotho', Actual: cfg.cLesotho, Expected: 'Lesotho'},
   {Name: 'cLiberia', Actual: cfg.cLiberia, Expected: 'Liberia'},
   {Name: 'cLibya', Actual: cfg.cLibya, Expected: 'Libya'},
   {Name: 'cLiechtenstein', Actual: cfg.cLiechtenstein, Expected: 'Liechtenstein'},
   {Name: 'cLithuania', Actual: cfg.cLithuania, Expected: 'Lithuania'},
   {Name: 'cLuxembourg', Actual: cfg.cLuxembourg, Expected: 'Luxembourg'},
   {Name: 'cMadagascar', Actual: cfg.cMadagascar, Expected: 'Madagascar'},
   {Name: 'cMalawi', Actual: cfg.cMalawi, Expected: 'Malawi'},
   {Name: 'cMalaysia', Actual: cfg.cMalaysia, Expected: 'Malaysia'},
   {Name: 'cMaldives', Actual: cfg.cMaldives, Expected: 'Maldives'},
   {Name: 'cMali', Actual: cfg.cMali, Expected: 'Mali'},
   {Name: 'cMalta', Actual: cfg.cMalta, Expected: 'Malta'},
   {Name: 'cMarshallIslands', Actual: cfg.cMarshallIslands, Expected: 'Marshall Islands'},
   {Name: 'cMauritania', Actual: cfg.cMauritania, Expected: 'Mauritania'},
   {Name: 'cMauritius', Actual: cfg.cMauritius, Expected: 'Mauritius'},
   {Name: 'cMexico', Actual: cfg.cMexico, Expected: 'Mexico'},
   {Name: 'cMicronesia', Actual: cfg.cMicronesia, Expected: 'Micronesia'},
   {Name: 'cMoldova', Actual: cfg.cMoldova, Expected: 'Moldova'},
   {Name: 'cMonaco', Actual: cfg.cMonaco, Expected: 'Monaco'},
   {Name: 'cMongolia', Actual: cfg.cMongolia, Expected: 'Mongolia'},
   {Name: 'cMontenegro', Actual: cfg.cMontenegro, Expected: 'Montenegro'},
   {Name: 'cMorocco', Actual: cfg.cMorocco, Expected: 'Morocco'},
   {Name: 'cMozambique', Actual: cfg.cMozambique, Expected: 'Mozambique'},
   {Name: 'cMyanmar', Actual: cfg.cMyanmar, Expected: 'Myanmar'},
   {Name: 'cNamibia', Actual: cfg.cNamibia, Expected: 'Namibia'},
   {Name: 'cNauru', Actual: cfg.cNauru, Expected: 'Nauru'},
   {Name: 'cNepal', Actual: cfg.cNepal, Expected: 'Nepal'},
   {Name: 'cNetherlands', Actual: cfg.cNetherlands, Expected: 'Netherlands'},
   {Name: 'cNewZealand', Actual: cfg.cNewZealand, Expected: 'New Zealand'},
   {Name: 'cNevis', Actual: cfg.cNevis, Expected: 'Nevis'},
   {Name: 'cNicaragua', Actual: cfg.cNicaragua, Expected: 'Nicaragua'},
   {Name: 'cNiger', Actual: cfg.cNiger, Expected: 'Niger'},
   {Name: 'cNigeria', Actual: cfg.cNigeria, Expected: 'Nigeria'},
   {Name: 'cNorthKorea', Actual: cfg.cNorthKorea, Expected: 'North Korea'},
   {Name: 'cNorthMacedonia', Actual: cfg.cNorthMacedonia, Expected: 'North Macedonia'},
   {Name: 'cNorway', Actual: cfg.cNorway, Expected: 'Norway'},
   {Name: 'cOman', Actual: cfg.cOman, Expected: 'Oman'},
   {Name: 'cPakistan', Actual: cfg.cPakistan, Expected: 'Pakistan'},
   {Name: 'cPalau', Actual: cfg.cPalau, Expected: 'Palau'},
   {Name: 'cPalestine', Actual: cfg.cPalestine, Expected: 'Palestine'},
   {Name: 'cPanama', Actual: cfg.cPanama, Expected: 'Panama'},
   {Name: 'cPapuaNewGuinea', Actual: cfg.cPapuaNewGuinea, Expected: 'Papua New Guinea'},
   {Name: 'cParaguay', Actual: cfg.cParaguay, Expected: 'Paraguay'},
   {Name: 'cPeru', Actual: cfg.cPeru, Expected: 'Peru'},
   {Name: 'cPhilippines', Actual: cfg.cPhilippines, Expected: 'Philippines'},
   {Name: 'cPoland', Actual: cfg.cPoland, Expected: 'Poland'},
   {Name: 'cPortugal', Actual: cfg.cPortugal, Expected: 'Portugal'},
   {Name: 'cPrincipe', Actual: cfg.cPrincipe, Expected: 'Principe'},
   {Name: 'cQatar', Actual: cfg.cQatar, Expected: 'Qatar'},
   {Name: 'cRomania', Actual: cfg.cRomania, Expected: 'Romania'},
   {Name: 'cRussia', Actual: cfg.cRussia, Expected: 'Russia'},
   {Name: 'cRwanda', Actual: cfg.cRwanda, Expected: 'Rwanda'},
   {Name: 'cSaintKitts', Actual: cfg.cSaintKitts, Expected: 'Saint Kitts'},
   {Name: 'cSaintLucia', Actual: cfg.cSaintLucia, Expected: 'Saint Lucia'},
   {Name: 'cSaintVincent', Actual: cfg.cSaintVincent, Expected: 'Saint Vincent'},
   {Name: 'cSomoa', Actual: cfg.cSomoa, Expected: 'Somoa'},
   {Name: 'cSanMarino', Actual: cfg.cSanMarino, Expected: 'San Marino'},
   {Name: 'cSaoTome', Actual: cfg.cSaoTome, Expected: 'Sao Tome'},
   {Name: 'cSaudiArabia', Actual: cfg.cSaudiArabia, Expected: 'Saudi Arabia'},
   {Name: 'cSenegal', Actual: cfg.cSenegal, Expected: 'Senegal'},
   {Name: 'cSerbia', Actual: cfg.cSerbia, Expected: 'Serbia'},
   {Name: 'cSeychelles', Actual: cfg.cSeychelles, Expected: 'Seychelles'},
   {Name: 'cSierraLeone', Actual: cfg.cSierraLeone, Expected: 'Sierra Leone'},
   {Name: 'cSingapore', Actual: cfg.cSingapore, Expected: 'Singapore'},
   {Name: 'cSlovakia', Actual: cfg.cSlovakia, Expected: 'Slovakia'},
   {Name: 'cSlovenia', Actual: cfg.cSlovenia, Expected: 'Slovenia'},
   {Name: 'cSolomonIslands', Actual: cfg.cSolomonIslands, Expected: 'Solomon Islands'},
   {Name: 'cSomalia', Actual: cfg.cSomalia, Expected: 'Somalia'},
   {Name: 'cSouthAfrica', Actual: cfg.cSouthAfrica, Expected: 'South Africa'},
   {Name: 'cSouthKorea', Actual: cfg.cSouthKorea, Expected: 'South Korea'},
   {Name: 'cSouthSudan', Actual: cfg.cSouthSudan, Expected: 'South Sudan'},
   {Name: 'cSpain', Actual: cfg.cSpain, Expected: 'Spain'},
   {Name: 'cSriLanka', Actual: cfg.cSriLanka, Expected: 'Sri Lanka'},
   {Name: 'cSudan', Actual: cfg.cSudan, Expected: 'Sudan'},
   {Name: 'cSuriname', Actual: cfg.cSuriname, Expected: 'Suriname'},
   {Name: 'cSweden', Actual: cfg.cSweden, Expected: 'Sweden'},
   {Name: 'cSwitzerland', Actual: cfg.cSwitzerland, Expected: 'Switzerland'},
   {Name: 'cSyria', Actual: cfg.cSyria, Expected: 'Syria'},
   {Name: 'cTajikistan', Actual: cfg.cTajikistan, Expected: 'Tajikistan'},
   {Name: 'cTanzania', Actual: cfg.cTanzania, Expected: 'Tanzania'},
   {Name: 'cThailand', Actual: cfg.cThailand, Expected: 'Thailand'},
   {Name: 'cTimorLeste', Actual: cfg.cTimorLeste, Expected: 'Timor-Leste'},
   {Name: 'cTogo', Actual: cfg.cTogo, Expected: 'Togo'},
   {Name: 'cTonga', Actual: cfg.cTonga, Expected: 'Tonga'},
   {Name: 'cTrinidadAndTabago', Actual: cfg.cTrinidadAndTabago, Expected: 'Trinidad and Tabago'},
   {Name: 'cTunisia', Actual: cfg.cTunisia, Expected: 'Tunisia'},
   {Name: 'cTurkey', Actual: cfg.cTurkey, Expected: 'Turkey'},
   {Name: 'cTurkmenistan', Actual: cfg.cTurkmenistan, Expected: 'Turkmenistan'},
   {Name: 'cTuvalu', Actual: cfg.cTuvalu, Expected: 'Tuvalu'},
   {Name: 'cUganda', Actual: cfg.cUganda, Expected: 'Uganda'},
   {Name: 'cUkraine', Actual: cfg.cUkraine, Expected: 'Ukraine'},
   {Name: 'cUnitedArabEmirates', Actual: cfg.cUnitedArabEmirates, Expected: 'United Arab Emirates'},
   {Name: 'cUnitedKingdom', Actual: cfg.cUnitedKingdom, Expected: 'United Kingdom'},
   {Name: 'cUnitedStatesOfAmerica', Actual: cfg.cUnitedStatesOfAmerica, Expected: 'United States of America'},
   {Name: 'cUruguay', Actual: cfg.cUruguay, Expected: 'Uruguay'},
   {Name: 'cUzbekistan', Actual: cfg.cUzbekistan, Expected: 'Uzbekistan'},
   {Name: 'cVanuatu', Actual: cfg.cVanuatu, Expected: 'Vanuatu'},
   {Name: 'cVenezuela', Actual: cfg.cVenezuela, Expected: 'Venezuela'},
   {Name: 'cVietnam', Actual: cfg.cVietnam, Expected: 'Vietnam'},
   {Name: 'cYemen', Actual: cfg.cYemen, Expected: 'Yemen'},
   {Name: 'cZambia', Actual: cfg.cZambia, Expected: 'Zambia'},
   {Name: 'cZimbabwe', Actual: cfg.cZimbabwe, Expected: 'Zimbabwe'}
 ];
