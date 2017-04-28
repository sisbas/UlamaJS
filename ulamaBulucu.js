/**
 * Created by SEMİH on 28.04.2017.
 */
var deger = "semih işbaş aptal ahmak deneme yanılma";


var sessizHarfler = "bcçdfgğhjklmnprsştvyz";
var sesliHarfler = "aeıioöuü";
var noktalamaIsaretleri = '.,;!?"';

var ayir = deger.split(' ');
sessizMi();
function sessizMi() {
    for (var i = 0; i < ayir.length - 1; i++) {
        for (var j = 0; j < sessizHarfler.length; j++) {
            if (ayir[i].charAt(ayir[i].length - 1) == sessizHarfler[j]) {
                for (var k = 0; k < sesliHarfler.length; k++) {
                    if (!isNaN(ayir[i + 1])) {
                        continue;
                    } else {
                        if (ayir[i + 1].charAt(0) == sesliHarfler[k]) {
                            console.log("ULAMA VAR!!!!")
                        }
                    }
                }
            }
        }
    }
}
