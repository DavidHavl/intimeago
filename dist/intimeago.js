(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.intimeago = {}));
}(this, (function (exports) { 'use strict';

    var SEQUENCE_ARRAY = [
        60,
        60,
        24,
        7,
        365 / 7 / 12,
        12,
    ];
    /**
     * format Date / string / timestamp to timestamp
     * @param input
     * @returns {*}
     */
    function toDate(input) {
        if (input instanceof Date)
            return input;
        // @ts-ignore
        if (!isNaN(input) || /^\d+$/.test(input))
            return new Date(parseInt(input));
        input = (input || '')
            // @ts-ignore
            .trim()
            .replace(/\.\d+/, '') // remove milliseconds
            .replace(/-/, '/')
            .replace(/-/, '/')
            .replace(/(\d)T(\d)/, '$1 $2')
            .replace(/Z/, ' UTC') // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC
            .replace(/([+-]\d\d):?(\d\d)/, ' $1$2'); // -04:00 -> -0400
        // @ts-ignore
        return new Date(input);
    }
    /**
     * format the diff second to *** time ago, with setting locale
     * @param diff
     * @param localeFunction
     * @returns
     */
    function formatDiff(diff, localeFunction) {
        /**
         * if locale is not exist, use defaultLocale.
         * if defaultLocale is not exist, use build-in `en`.
         * be sure of no error when locale is not exist.
         *
         * If `time in`, then 1
         * If `time ago`, then 0
         */
        var agoIn = diff < 0 ? 1 : 0;
        /**
         * Get absolute value of number (|diff| is non-negative) value of x
         * |diff| = diff if diff is positive
         * |diff| = -diff if diff is negative
         * |0| = 0
         */
        diff = Math.abs(diff);
        /**
         * Unit of time
         */
        var idx = 0;
        for (; diff >= SEQUENCE_ARRAY[idx] && idx < SEQUENCE_ARRAY.length; idx++) {
            diff /= SEQUENCE_ARRAY[idx];
        }
        /**
         * Math.floor() is alternative of ~~
         *
         * The differences and bugs:
         * Math.floor(3.7) -> 4 but ~~3.7 -> 3
         * Math.floor(1559125440000.6) -> 1559125440000 but ~~1559125440000.6 -> 52311552
         *
         * More information about the performance of algebraic:
         * https://www.youtube.com/watch?v=65-RbBwZQdU
         */
        diff = Math.floor(diff);
        idx *= 2;
        if (diff > (idx === 0 ? 9 : 1))
            idx += 1;
        return localeFunction(diff, idx)[agoIn].replace('%s', diff.toString());
    }
    /**
     * Calculate the seconds between given date and relative date (now).
     * @param date
     * @param relativeDate
     * @returns {number}
     */
    function diffSec(date, relativeDate) {
        var relDate = relativeDate ? toDate(relativeDate) : new Date();
        return (+relDate - +toDate(date)) / 1000;
    }
    /**
     * nextInterval: calculate the next interval time.
     *
     * Examples:
     * diff = 60 then it return 1 (so it runs again in 1 seconds and shows "in 59 seconds" )
     * diff = 83 then it returns 23
     * diff = 119 then it returns 59
     * diff = 3601 (an hour + 1 second), then it returns 1
     * @param diff {number} the difference in seconds between now and date to be formatted.
     **/
    function nextInterval(diff) {
        var diffAbs = Math.abs(diff);
        if (diffAbs <= SEQUENCE_ARRAY[0]) {
            return 1;
        }
        var sv = 1, i = 0, d = diffAbs;
        for (; d >= SEQUENCE_ARRAY[i] && i < SEQUENCE_ARRAY.length; i++) {
            d /= SEQUENCE_ARRAY[i];
            sv *= SEQUENCE_ARRAY[i];
        }
        var remainder = diffAbs % sv;
        return Math.ceil(remainder > 0 ? remainder : 1);
    }

    var timeTypes = [
        ['ثانية', 'ثانيتين', '%s ثوان', '%s ثانية'],
        ['دقيقة', 'دقيقتين', '%s دقائق', '%s دقيقة'],
        ['ساعة', 'ساعتين', '%s ساعات', '%s ساعة'],
        ['يوم', 'يومين', '%s أيام', '%s يوماً'],
        ['أسبوع', 'أسبوعين', '%s أسابيع', '%s أسبوعاً'],
        ['شهر', 'شهرين', '%s أشهر', '%s شهراً'],
        ['عام', 'عامين', '%s أعوام', '%s عاماً'],
    ];
    function formatTime(type, n) {
        if (n < 3)
            return timeTypes[type][n - 1];
        if (n >= 3 && n <= 10)
            return timeTypes[type][2];
        return timeTypes[type][3];
    }
    // @ts-ignore
    function ar (number, index) {
        if (index === 0) {
            return ['منذ لحظات', 'بعد لحظات'];
        }
        var timeStr = formatTime(Math.floor(index / 2), number);
        return ['منذ' + ' ' + timeStr, 'بعد' + ' ' + timeStr];
    }

    /**
     *
     * @param f1 - 1
     * @param f - 21, 31, ...
     * @param s - 2-4, 22-24, 32-34 ...
     * @param t - 5-20, 25-30, ...
     * @param n
     * @returns
     */
    function formatNum(f1, f, s, t, n) {
        var n10 = n % 10;
        var str = t;
        if (n === 1) {
            str = f1;
        }
        else if (n10 === 1 && n > 20) {
            str = f;
        }
        else if (n10 > 1 && n10 < 5 && (n > 20 || n < 10)) {
            str = s;
        }
        return str;
    }
    var seconds = formatNum.bind(null, 'секунду', '%s секунду', '%s секунды', '%s секунд'), minutes = formatNum.bind(null, 'хвіліну', '%s хвіліну', '%s хвіліны', '%s хвілін'), hours = formatNum.bind(null, 'гадзіну', '%s гадзіну', '%s гадзіны', '%s гадзін'), days = formatNum.bind(null, 'дзень', '%s дзень', '%s дні', '%s дзён'), weeks = formatNum.bind(null, 'тыдзень', '%s тыдзень', '%s тыдні', '%s тыдняў'), months = formatNum.bind(null, 'месяц', '%s месяц', '%s месяцы', '%s месяцаў'), years = formatNum.bind(null, 'год', '%s год', '%s гады', '%s гадоў');
    // @ts-ignore
    function be (number, index) {
        switch (index) {
            case 0:
                return ['толькі што', 'праз некалькі секунд'];
            case 1:
                return [seconds(number) + ' таму', 'праз ' + seconds(number)];
            case 2:
            case 3:
                return [minutes(number) + ' таму', 'праз ' + minutes(number)];
            case 4:
            case 5:
                return [hours(number) + ' таму', 'праз ' + hours(number)];
            case 6:
            case 7:
                return [days(number) + ' таму', 'праз ' + days(number)];
            case 8:
            case 9:
                return [weeks(number) + ' таму', 'праз ' + weeks(number)];
            case 10:
            case 11:
                return [months(number) + ' таму', 'праз ' + months(number)];
            case 12:
            case 13:
                return [years(number) + ' таму', 'праз ' + years(number)];
            default:
                return ['', ''];
        }
    }

    // @ts-ignore
    function bg (number, index) {
        return [
            ['току що', 'съвсем скоро'],
            ['преди %s секунди', 'след %s секунди'],
            ['преди 1 минута', 'след 1 минута'],
            ['преди %s минути', 'след %s минути'],
            ['преди 1 час', 'след 1 час'],
            ['преди %s часа', 'след %s часа'],
            ['преди 1 ден', 'след 1 ден'],
            ['преди %s дни', 'след %s дни'],
            ['преди 1 седмица', 'след 1 седмица'],
            ['преди %s седмици', 'след %s седмици'],
            ['преди 1 месец', 'след 1 месец'],
            ['преди %s месеца', 'след %s месеца'],
            ['преди 1 година', 'след 1 година'],
            ['преди %s години', 'след %s години'],
        ][index];
    }

    // Bangla (India)
    // @ts-ignore
    function bn_IN (number, index) {
        return [
            ['এইমাত্র', 'একটা সময়'],
            ['%s সেকেন্ড আগে', '%s এর সেকেন্ডের মধ্যে'],
            ['1 মিনিট আগে', '1 মিনিটে'],
            ['%s এর মিনিট আগে', '%s এর মিনিটের মধ্যে'],
            ['1 ঘন্টা আগে', '1 ঘন্টা'],
            ['%s ঘণ্টা আগে', '%s এর ঘন্টার মধ্যে'],
            ['1 দিন আগে', '1 দিনের মধ্যে'],
            ['%s এর দিন আগে', '%s এর দিন'],
            ['1 সপ্তাহ আগে', '1 সপ্তাহের মধ্যে'],
            ['%s এর সপ্তাহ আগে', '%s সপ্তাহের মধ্যে'],
            ['1 মাস আগে', '1 মাসে'],
            ['%s মাস আগে', '%s মাসে'],
            ['1 বছর আগে', '1 বছরের মধ্যে'],
            ['%s বছর আগে', '%s বছরে'],
        ][index];
    }

    // @ts-ignore
    function ca (number, index) {
        return [
            ['fa un moment', "d'aquí un moment"],
            ['fa %s segons', "d'aquí %s segons"],
            ['fa 1 minut', "d'aquí 1 minut"],
            ['fa %s minuts', "d'aquí %s minuts"],
            ['fa 1 hora', "d'aquí 1 hora"],
            ['fa %s hores', "d'aquí %s hores"],
            ['fa 1 dia', "d'aquí 1 dia"],
            ['fa %s dies', "d'aquí %s dies"],
            ['fa 1 setmana', "d'aquí 1 setmana"],
            ['fa %s setmanes', "d'aquí %s setmanes"],
            ['fa 1 mes', "d'aquí 1 mes"],
            ['fa %s mesos', "d'aquí %s mesos"],
            ['fa 1 any', "d'aquí 1 any"],
            ['fa %s anys', "d'aquí %s anys"],
        ][index];
    }

    // @ts-ignore
    function de (number, index) {
        return [
            ['gerade eben', 'vor einer Weile'],
            ['vor %s Sekunden', 'in %s Sekunden'],
            ['vor 1 Minute', 'in 1 Minute'],
            ['vor %s Minuten', 'in %s Minuten'],
            ['vor 1 Stunde', 'in 1 Stunde'],
            ['vor %s Stunden', 'in %s Stunden'],
            ['vor 1 Tag', 'in 1 Tag'],
            ['vor %s Tagen', 'in %s Tagen'],
            ['vor 1 Woche', 'in 1 Woche'],
            ['vor %s Wochen', 'in %s Wochen'],
            ['vor 1 Monat', 'in 1 Monat'],
            ['vor %s Monaten', 'in %s Monaten'],
            ['vor 1 Jahr', 'in 1 Jahr'],
            ['vor %s Jahren', 'in %s Jahren'],
        ][index];
    }

    // @ts-ignore
    function el (number, index) {
        return [
            ['μόλις τώρα', 'σε λίγο'],
            ['%s δευτερόλεπτα πριν', 'σε %s δευτερόλεπτα'],
            ['1 λεπτό πριν', 'σε 1 λεπτό'],
            ['%s λεπτά πριν', 'σε %s λεπτά'],
            ['1 ώρα πριν', 'σε 1 ώρα'],
            ['%s ώρες πριν', 'σε %s ώρες'],
            ['1 μέρα πριν', 'σε 1 μέρα'],
            ['%s μέρες πριν', 'σε %s μέρες'],
            ['1 εβδομάδα πριν', 'σε 1 εβδομάδα'],
            ['%s εβδομάδες πριν', 'σε %s εβδομάδες'],
            ['1 μήνα πριν', 'σε 1 μήνα'],
            ['%s μήνες πριν', 'σε %s μήνες'],
            ['1 χρόνο πριν', 'σε 1 χρόνο'],
            ['%s χρόνια πριν', 'σε %s χρόνια'],
        ][index];
    }

    // @ts-ignore
    function en_short (number, index) {
        return [
            ['just now', 'in %ss'],
            ['%ss ago', 'in %ss'],
            ['1m ago', 'in 1m'],
            ['%sm ago', 'in %sm'],
            ['1h ago', 'in 1h'],
            ['%sh ago', 'in %sh'],
            ['1d ago', 'in 1d'],
            ['%sd ago', 'in %sd'],
            ['1w ago', 'in 1w'],
            ['%sw ago', 'in %sw'],
            ['1mo ago', 'in 1mo'],
            ['%smo ago', 'in %smo'],
            ['1yr ago', 'in 1yr'],
            ['%syr ago', 'in %syr'],
        ][index];
    }

    var EN_US = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];
    // @ts-ignore
    function en_US (diff, idx) {
        var unit = EN_US[Math.floor(idx / 2)];
        if (diff > 1)
            unit += 's';
        if (idx === 0)
            return ['just now', "in " + diff + " " + unit];
        return [diff + " " + unit + " ago", "in " + diff + " " + unit];
    }

    // @ts-ignore
    function es (number, index) {
        return [
            ['justo ahora', 'en un rato'],
            ['hace %s segundos', 'en %s segundos'],
            ['hace 1 minuto', 'en 1 minuto'],
            ['hace %s minutos', 'en %s minutos'],
            ['hace 1 hora', 'en 1 hora'],
            ['hace %s horas', 'en %s horas'],
            ['hace 1 día', 'en 1 día'],
            ['hace %s días', 'en %s días'],
            ['hace 1 semana', 'en 1 semana'],
            ['hace %s semanas', 'en %s semanas'],
            ['hace 1 mes', 'en 1 mes'],
            ['hace %s meses', 'en %s meses'],
            ['hace 1 año', 'en 1 año'],
            ['hace %s años', 'en %s años'],
        ][index];
    }

    // @ts-ignore
    function eu (number, index) {
        return [
            ['orain', 'denbora bat barru'],
            ['duela %s segundu', '%s segundu barru'],
            ['duela minutu 1', 'minutu 1 barru'],
            ['duela %s minutu', '%s minutu barru'],
            ['duela ordu 1', 'ordu 1 barru'],
            ['duela %s ordu', '%s ordu barru'],
            ['duela egun 1', 'egun 1 barru'],
            ['duela %s egun', '%s egun barru'],
            ['duela aste 1', 'aste 1 barru'],
            ['duela %s aste', '%s aste barru'],
            ['duela hillabete 1', 'hillabete 1 barru'],
            ['duela %s hillabete', '%s hillabete barru'],
            ['duela urte 1', 'urte 1 barru'],
            ['duela %s urte', '%s urte barru'],
        ][index];
    }

    // As persian language has different number symbols we need to replace regular numbers
    // to standard persian numbres.
    function toPersianNumber(number) {
        // List of standard persian numbers from 0 to 9
        var persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return number.toString().replace(/\d/g, function (x) { return persianDigits[parseInt(x)]; });
    }
    // @ts-ignore
    function fa (number, index) {
        var formattedString = [
            ['لحظاتی پیش', 'همین حالا'],
            ['%s ثانیه پیش', '%s ثانیه دیگر'],
            ['۱ دقیقه پیش', '۱ دقیقه دیگر'],
            ['%s دقیقه پیش', '%s دقیقه دیگر'],
            ['۱ ساعت پیش', '۱ ساعت دیگر'],
            ['%s ساعت پیش', '%s ساعت دیگر'],
            ['۱ روز پیش', '۱ روز دیگر'],
            ['%s روز پیش', '%s روز دیگر'],
            ['۱ هفته پیش', '۱ هفته دیگر'],
            ['%s هفته پیش', '%s هفته دیگر'],
            ['۱ ماه پیش', '۱ ماه دیگر'],
            ['%s ماه پیش', '%s ماه دیگر'],
            ['۱ سال پیش', '۱ سال دیگر'],
            ['%s سال پیش', '%s سال دیگر'],
        ][index];
        // We convert regular numbers (%s) to standard persian numbers using toPersianNumber function
        return [
            formattedString[0].replace('%s', toPersianNumber(number)),
            formattedString[1].replace('%s', toPersianNumber(number)),
        ];
    }

    // @ts-ignore
    function fi (number, index) {
        return [
            ['juuri äsken', 'juuri nyt'],
            ['%s sekuntia sitten', '%s sekunnin päästä'],
            ['minuutti sitten', 'minuutin päästä'],
            ['%s minuuttia sitten', '%s minuutin päästä'],
            ['tunti sitten', 'tunnin päästä'],
            ['%s tuntia sitten', '%s tunnin päästä'],
            ['päivä sitten', 'päivän päästä'],
            ['%s päivää sitten', '%s päivän päästä'],
            ['viikko sitten', 'viikon päästä'],
            ['%s viikkoa sitten', '%s viikon päästä'],
            ['kuukausi sitten', 'kuukauden päästä'],
            ['%s kuukautta sitten', '%s kuukauden päästä'],
            ['vuosi sitten', 'vuoden päästä'],
            ['%s vuotta sitten', '%s vuoden päästä'],
        ][index];
    }

    // @ts-ignore
    function fr (number, index) {
        return [
            ["à l'instant", 'dans un instant'],
            ['il y a %s secondes', 'dans %s secondes'],
            ['il y a 1 minute', 'dans 1 minute'],
            ['il y a %s minutes', 'dans %s minutes'],
            ['il y a 1 heure', 'dans 1 heure'],
            ['il y a %s heures', 'dans %s heures'],
            ['il y a 1 jour', 'dans 1 jour'],
            ['il y a %s jours', 'dans %s jours'],
            ['il y a 1 semaine', 'dans 1 semaine'],
            ['il y a %s semaines', 'dans %s semaines'],
            ['il y a 1 mois', 'dans 1 mois'],
            ['il y a %s mois', 'dans %s mois'],
            ['il y a 1 an', 'dans 1 an'],
            ['il y a %s ans', 'dans %s ans'],
        ][index];
    }

    // @ts-ignore
    function gl (number, index) {
        return [
            ['xusto agora', 'daquí a un pouco'],
            ['hai %s segundos', 'en %s segundos'],
            ['hai 1 minuto', 'nun minuto'],
            ['hai %s minutos', 'en %s minutos'],
            ['hai 1 hora', 'nunha hora'],
            ['hai %s horas', 'en %s horas'],
            ['hai 1 día', 'nun día'],
            ['hai %s días', 'en %s días'],
            ['hai 1 semana', 'nunha semana'],
            ['hai %s semanas', 'en %s semanas'],
            ['hai 1 mes', 'nun mes'],
            ['hai %s meses', 'en %s meses'],
            ['hai 1 ano', 'nun ano'],
            ['hai %s anos', 'en %s anos'],
        ][index];
    }

    // @ts-ignore
    function he (number, index) {
        return [
            ['זה עתה', 'עכשיו'],
            ['לפני %s שניות', 'בעוד %s שניות'],
            ['לפני דקה', 'בעוד דקה'],
            ['לפני %s דקות', 'בעוד %s דקות'],
            ['לפני שעה', 'בעוד שעה'],
            number === 2 ? ['לפני שעתיים', 'בעוד שעתיים'] : ['לפני %s שעות', 'בעוד %s שעות'],
            ['אתמול', 'מחר'],
            number === 2 ? ['לפני יומיים', 'בעוד יומיים'] : ['לפני %s ימים', 'בעוד %s ימים'],
            ['לפני שבוע', 'בעוד שבוע'],
            number === 2 ? ['לפני שבועיים', 'בעוד שבועיים'] : ['לפני %s שבועות', 'בעוד %s שבועות'],
            ['לפני חודש', 'בעוד חודש'],
            number === 2 ? ['לפני חודשיים', 'בעוד חודשיים'] : ['לפני %s חודשים', 'בעוד %s חודשים'],
            ['לפני שנה', 'בעוד שנה'],
            number === 2 ? ['לפני שנתיים', 'בעוד שנתיים'] : ['לפני %s שנים', 'בעוד %s שנים'],
        ][index];
    }

    // Hindi (India)
    // @ts-ignore
    function hi_IN (number, index) {
        return [
            ['अभी', 'कुछ समय'],
            ['%s सेकंड पहले', '%s सेकंड में'],
            ['1 मिनट पहले', '1 मिनट में'],
            ['%s मिनट पहले', '%s मिनट में'],
            ['1 घंटे पहले', '1 घंटे में'],
            ['%s घंटे पहले', '%s घंटे में'],
            ['1 दिन पहले', '1 दिन में'],
            ['%s दिन पहले', '%s दिनों में'],
            ['1 सप्ताह पहले', '1 सप्ताह में'],
            ['%s हफ्ते पहले', '%s हफ्तों में'],
            ['1 महीने पहले', '1 महीने में'],
            ['%s महीने पहले', '%s महीनों में'],
            ['1 साल पहले', '1 साल में'],
            ['%s साल पहले', '%s साल में'],
        ][index];
    }

    // @ts-ignore
    function hu (number, index) {
        return [
            ['éppen most', 'éppen most'],
            ['%s másodperce', '%s másodpercen belül'],
            ['1 perce', '1 percen belül'],
            ['%s perce', '%s percen belül'],
            ['1 órája', '1 órán belül'],
            ['%s órája', '%s órán belül'],
            ['1 napja', '1 napon belül'],
            ['%s napja', '%s napon belül'],
            ['1 hete', '1 héten belül'],
            ['%s hete', '%s héten belül'],
            ['1 hónapja', '1 hónapon belül'],
            ['%s hónapja', '%s hónapon belül'],
            ['1 éve', '1 éven belül'],
            ['%s éve', '%s éven belül'],
        ][index];
    }

    // Indonesian (Indonesia)
    // @ts-ignore
    function id_ID (number, index) {
        return [
            ['baru saja', 'sebentar'],
            ['%s detik yang lalu', 'dalam %s detik'],
            ['1 menit yang lalu', 'dalam 1 menit'],
            ['%s menit yang lalu', 'dalam %s menit'],
            ['1 jam yang lalu', 'dalam 1 jam'],
            ['%s jam yang lalu', 'dalam %s jam'],
            ['1 hari yang lalu', 'dalam 1 hari'],
            ['%s hari yang lalu', 'dalam %s hari'],
            ['1 minggu yang lalu', 'dalam 1 minggu'],
            ['%s minggu yang lalu', 'dalam %s minggu'],
            ['1 bulan yang lalu', 'dalam 1 bulan'],
            ['%s bulan yang lalu', 'dalam %s bulan'],
            ['1 tahun yang lalu', 'dalam 1 tahun'],
            ['%s tahun yang lalu', 'dalam %s tahun'],
        ][index];
    }

    // @ts-ignore
    function it (number, index) {
        return [
            ['poco fa', 'fra poco'],
            ['%s secondi fa', 'fra %s secondi'],
            ['un minuto fa', 'fra un minuto'],
            ['%s minuti fa', 'fra %s minuti'],
            ["un'ora fa", "fra un'ora"],
            ['%s ore fa', 'fra %s ore'],
            ['un giorno fa', 'fra un giorno'],
            ['%s giorni fa', 'fra %s giorni'],
            ['una settimana fa', 'fra una settimana'],
            ['%s settimane fa', 'fra %s settimane'],
            ['un mese fa', 'fra un mese'],
            ['%s mesi fa', 'fra %s mesi'],
            ['un anno fa', 'fra un anno'],
            ['%s anni fa', 'fra %s anni'],
        ][index];
    }

    // @ts-ignore
    function ja (number, index) {
        return [
            ['すこし前', 'すぐに'],
            ['%s秒前', '%s秒以内'],
            ['1分前', '1分以内'],
            ['%s分前', '%s分以内'],
            ['1時間前', '1時間以内'],
            ['%s時間前', '%s時間以内'],
            ['1日前', '1日以内'],
            ['%s日前', '%s日以内'],
            ['1週間前', '1週間以内'],
            ['%s週間前', '%s週間以内'],
            ['1ヶ月前', '1ヶ月以内'],
            ['%sヶ月前', '%sヶ月以内'],
            ['1年前', '1年以内'],
            ['%s年前', '%s年以内'],
        ][index];
    }

    // @ts-ignore
    function ko (number, index) {
        return [
            ['방금', '곧'],
            ['%s초 전', '%s초 후'],
            ['1분 전', '1분 후'],
            ['%s분 전', '%s분 후'],
            ['1시간 전', '1시간 후'],
            ['%s시간 전', '%s시간 후'],
            ['1일 전', '1일 후'],
            ['%s일 전', '%s일 후'],
            ['1주일 전', '1주일 후'],
            ['%s주일 전', '%s주일 후'],
            ['1개월 전', '1개월 후'],
            ['%s개월 전', '%s개월 후'],
            ['1년 전', '1년 후'],
            ['%s년 전', '%s년 후'],
        ][index];
    }

    // @ts-ignore
    function ml (number, index) {
        return [
            ['ഇപ്പോള്‍', 'കുറച്ചു മുന്‍പ്'],
            ['%s സെക്കന്റ്‌കള്‍ക്ക് മുന്‍പ്', '%s സെക്കന്റില്‍'],
            ['1 മിനിറ്റിനു മുന്‍പ്', '1 മിനിറ്റില്‍'],
            ['%s മിനിറ്റുകള്‍ക്ക് മുന്‍പ', '%s മിനിറ്റില്‍'],
            ['1 മണിക്കൂറിനു മുന്‍പ്', '1 മണിക്കൂറില്‍'],
            ['%s മണിക്കൂറുകള്‍ക്കു മുന്‍പ്', '%s മണിക്കൂറില്‍'],
            ['1 ഒരു ദിവസം മുന്‍പ്', '1 ദിവസത്തില്‍'],
            ['%s ദിവസങ്ങള്‍ക് മുന്‍പ്', '%s ദിവസങ്ങള്‍ക്കുള്ളില്‍'],
            ['1 ആഴ്ച മുന്‍പ്', '1 ആഴ്ചയില്‍'],
            ['%s ആഴ്ചകള്‍ക്ക് മുന്‍പ്', '%s ആഴ്ചകള്‍ക്കുള്ളില്‍'],
            ['1 മാസത്തിനു മുന്‍പ്', '1 മാസത്തിനുള്ളില്‍'],
            ['%s മാസങ്ങള്‍ക്ക് മുന്‍പ്', '%s മാസങ്ങള്‍ക്കുള്ളില്‍'],
            ['1 വര്‍ഷത്തിനു  മുന്‍പ്', '1 വര്‍ഷത്തിനുള്ളില്‍'],
            ['%s വര്‍ഷങ്ങള്‍ക്കു മുന്‍പ്', '%s വര്‍ഷങ്ങള്‍ക്കുല്ല്ളില്‍'],
        ][index];
    }

    // @ts-ignore
    function my (number, index) {
        return [
            ['ယခုအတွင်း', 'ယခု'],
            ['%s စက္ကန့် အကြာက', '%s စက္ကန့်အတွင်း'],
            ['1 မိနစ် အကြာက', '1 မိနစ်အတွင်း'],
            ['%s မိနစ် အကြာက', '%s မိနစ်အတွင်း'],
            ['1 နာရီ အကြာက', '1 နာရီအတွင်း'],
            ['%s နာရီ အကြာက', '%s နာရီအတွင်း'],
            ['1 ရက် အကြာက', '1 ရက်အတွင်း'],
            ['%s ရက် အကြာက', '%s ရက်အတွင်း'],
            ['1 ပတ် အကြာက', '1 ပတ်အတွင်း'],
            ['%s ပတ် အကြာက', '%s ပတ်အတွင်း'],
            ['1 လ အကြာက', '1 လအတွင်း'],
            ['%s လ အကြာက', '%s လအတွင်း'],
            ['1 နှစ် အကြာက', '1 နှစ်အတွင်း'],
            ['%s နှစ် အကြာက', '%s နှစ်အတွင်း'],
        ][index];
    }

    // @ts-ignore
    function nb_NO (number, index) {
        return [
            ['akkurat nå', 'om litt'],
            ['%s sekunder siden', 'om %s sekunder'],
            ['1 minutt siden', 'om 1 minutt'],
            ['%s minutter siden', 'om %s minutter'],
            ['1 time siden', 'om 1 time'],
            ['%s timer siden', 'om %s timer'],
            ['1 dag siden', 'om 1 dag'],
            ['%s dager siden', 'om %s dager'],
            ['1 uke siden', 'om 1 uke'],
            ['%s uker siden', 'om %s uker'],
            ['1 måned siden', 'om 1 måned'],
            ['%s måneder siden', 'om %s måneder'],
            ['1 år siden', 'om 1 år'],
            ['%s år siden', 'om %s år'],
        ][index];
    }

    // @ts-ignore
    function nl (number, index) {
        return [
            ['recent', 'binnenkort'],
            ['%s seconden geleden', 'binnen %s seconden'],
            ['1 minuut geleden', 'binnen 1 minuut'],
            ['%s minuten geleden', 'binnen %s minuten'],
            ['1 uur geleden', 'binnen 1 uur'],
            ['%s uur geleden', 'binnen %s uur'],
            ['1 dag geleden', 'binnen 1 dag'],
            ['%s dagen geleden', 'binnen %s dagen'],
            ['1 week geleden', 'binnen 1 week'],
            ['%s weken geleden', 'binnen %s weken'],
            ['1 maand geleden', 'binnen 1 maand'],
            ['%s maanden geleden', 'binnen %s maanden'],
            ['1 jaar geleden', 'binnen 1 jaar'],
            ['%s jaar geleden', 'binnen %s jaar'],
        ][index];
    }

    // @ts-ignore
    function nn_NO (number, index) {
        return [
            ['nett no', 'om litt'],
            ['%s sekund sidan', 'om %s sekund'],
            ['1 minutt sidan', 'om 1 minutt'],
            ['%s minutt sidan', 'om %s minutt'],
            ['1 time sidan', 'om 1 time'],
            ['%s timar sidan', 'om %s timar'],
            ['1 dag sidan', 'om 1 dag'],
            ['%s dagar sidan', 'om %s dagar'],
            ['1 veke sidan', 'om 1 veke'],
            ['%s veker sidan', 'om %s veker'],
            ['1 månad sidan', 'om 1 månad'],
            ['%s månadar sidan', 'om %s månadar'],
            ['1 år sidan', 'om 1 år'],
            ['%s år sidan', 'om %s år'],
        ][index];
    }

    // 0-13 alternately: single unit of time,
    // genitive plural form for all other numbers excluding cases below:
    // 14-20: nominative plural form for the numbers 2,3,4
    // and all other numbers higher than 21 which end in 2,3,4
    var l = [
        ['w tej chwili', 'za chwilę'],
        ['%s sekund temu', 'za %s sekund'],
        ['1 minutę temu', 'za 1 minutę'],
        ['%s minut temu', 'za %s minut'],
        ['1 godzinę temu', 'za 1 godzinę'],
        ['%s godzin temu', 'za %s godzin'],
        ['1 dzień temu', 'za 1 dzień'],
        ['%s dni temu', 'za %s dni'],
        ['1 tydzień temu', 'za 1 tydzień'],
        ['%s tygodni temu', 'za %s tygodni'],
        ['1 miesiąc temu', 'za 1 miesiąc'],
        ['%s miesięcy temu', 'za %s miesięcy'],
        ['1 rok temu', 'za 1 rok'],
        ['%s lat temu', 'za %s lat'],
        ['%s sekundy temu', 'za %s sekundy'],
        ['%s minuty temu', 'za %s minuty'],
        ['%s godziny temu', 'za %s godziny'],
        ['%s dni temu', 'za %s dni'],
        ['%s tygodnie temu', 'za %s tygodnie'],
        ['%s miesiące temu', 'za %s miesiące'],
        ['%s lata temu', 'za %s lata'],
    ];
    // @ts-ignore
    function pl (number, index) {
        // to determine which plural form must be used check the last 2 digits
        // and calculate new index value to get the nominative form (14-20)
        // for all other cases use index value as it is (0-13)
        return l[index & 1 ? (number % 10 > 4 || number % 10 < 2 || 1 === ~~(number / 10) % 10 ? index : ++index / 2 + 13) : index];
    }

    // @ts-ignore
    function pt_BR (number, index) {
        return [
            ['agora mesmo', 'agora'],
            ['há %s segundos', 'em %s segundos'],
            ['há um minuto', 'em um minuto'],
            ['há %s minutos', 'em %s minutos'],
            ['há uma hora', 'em uma hora'],
            ['há %s horas', 'em %s horas'],
            ['há um dia', 'em um dia'],
            ['há %s dias', 'em %s dias'],
            ['há uma semana', 'em uma semana'],
            ['há %s semanas', 'em %s semanas'],
            ['há um mês', 'em um mês'],
            ['há %s meses', 'em %s meses'],
            ['há um ano', 'em um ano'],
            ['há %s anos', 'em %s anos'],
        ][index];
    }

    // @ts-ignore
    function ro (number, index) {
        var langTable = [
            ['chiar acum', 'chiar acum'],
            ['acum %s secunde', 'peste %s secunde'],
            ['acum un minut', 'peste un minut'],
            ['acum %s minute', 'peste %s minute'],
            ['acum o oră', 'peste o oră'],
            ['acum %s ore', 'peste %s ore'],
            ['acum o zi', 'peste o zi'],
            ['acum %s zile', 'peste %s zile'],
            ['acum o săptămână', 'peste o săptămână'],
            ['acum %s săptămâni', 'peste %s săptămâni'],
            ['acum o lună', 'peste o lună'],
            ['acum %s luni', 'peste %s luni'],
            ['acum un an', 'peste un an'],
            ['acum %s ani', 'peste %s ani'],
        ];
        if (number < 20) {
            return langTable[index];
        }
        // A `de` preposition must be added between the number and the adverb
        // if the number is greater than 20.
        return [langTable[index][0].replace('%s', '%s de'), langTable[index][1].replace('%s', '%s de')];
    }

    /**
     *
     * @param f1 - 1
     * @param f - 21, 31, ...
     * @param s - 2-4, 22-24, 32-34 ...
     * @param t - 5-20, 25-30, ...
     * @param n
     * @returns
     */
    function formatNum$1(f1, f, s, t, n) {
        var n10 = n % 10;
        var str = t;
        if (n === 1) {
            str = f1;
        }
        else if (n10 === 1 && n > 20) {
            str = f;
        }
        else if (n10 > 1 && n10 < 5 && (n > 20 || n < 10)) {
            str = s;
        }
        return str;
    }
    var seconds$1 = formatNum$1.bind(null, 'секунду', '%s секунду', '%s секунды', '%s секунд'), minutes$1 = formatNum$1.bind(null, 'минуту', '%s минуту', '%s минуты', '%s минут'), hours$1 = formatNum$1.bind(null, 'час', '%s час', '%s часа', '%s часов'), days$1 = formatNum$1.bind(null, 'день', '%s день', '%s дня', '%s дней'), weeks$1 = formatNum$1.bind(null, 'неделю', '%s неделю', '%s недели', '%s недель'), months$1 = formatNum$1.bind(null, 'месяц', '%s месяц', '%s месяца', '%s месяцев'), years$1 = formatNum$1.bind(null, 'год', '%s год', '%s года', '%s лет');
    // @ts-ignore
    function ru (number, index) {
        switch (index) {
            case 0:
                return ['только что', 'через несколько секунд'];
            case 1:
                return [seconds$1(number) + ' назад', 'через ' + seconds$1(number)];
            case 2: // ['минуту назад', 'через минуту'];
            case 3:
                return [minutes$1(number) + ' назад', 'через ' + minutes$1(number)];
            case 4: // ['час назад', 'через час'];
            case 5:
                return [hours$1(number) + ' назад', 'через ' + hours$1(number)];
            case 6:
                return ['вчера', 'завтра'];
            case 7:
                return [days$1(number) + ' назад', 'через ' + days$1(number)];
            case 8: // ['неделю назад', 'через неделю'];
            case 9:
                return [weeks$1(number) + ' назад', 'через ' + weeks$1(number)];
            case 10: // ['месяц назад', 'через месяц'];
            case 11:
                return [months$1(number) + ' назад', 'через ' + months$1(number)];
            case 12: // ['год назад', 'через год'];
            case 13:
                return [years$1(number) + ' назад', 'через ' + years$1(number)];
            default:
                return ['', ''];
        }
    }

    // @ts-ignore
    function sq (number, index) {
        return [
            ['pak më parë', 'pas pak'],
            ['para %s sekondash', 'pas %s sekondash'],
            ['para një minute', 'pas një minute'],
            ['para %s minutash', 'pas %s minutash'],
            ['para një ore', 'pas një ore'],
            ['para %s orësh', 'pas %s orësh'],
            ['dje', 'nesër'],
            ['para %s ditësh', 'pas %s ditësh'],
            ['para një jave', 'pas një jave'],
            ['para %s javësh', 'pas %s javësh'],
            ['para një muaji', 'pas një muaji'],
            ['para %s muajsh', 'pas %s muajsh'],
            ['para një viti', 'pas një viti'],
            ['para %s vjetësh', 'pas %s vjetësh'],
        ][index];
    }

    function formatNum$2(single, one, few, other, n) {
        var rem10 = n % 10;
        var rem100 = n % 100;
        if (n == 1) {
            return single;
        }
        else if (rem10 == 1 && rem100 != 11) {
            return one;
        }
        else if (rem10 >= 2 && rem10 <= 4 && !(rem100 >= 12 && rem100 <= 14)) {
            return few;
        }
        else {
            return other;
        }
    }
    var seconds$2 = formatNum$2.bind(null, '1 секунд', '%s секунд', '%s секунде', '%s секунди'), minutes$2 = formatNum$2.bind(null, '1 минут', '%s минут', '%s минуте', '%s минута'), hours$2 = formatNum$2.bind(null, 'сат времена', '%s сат', '%s сата', '%s сати'), days$2 = formatNum$2.bind(null, '1 дан', '%s дан', '%s дана', '%s дана'), weeks$2 = formatNum$2.bind(null, 'недељу дана', '%s недељу', '%s недеље', '%s недеља'), months$2 = formatNum$2.bind(null, 'месец дана', '%s месец', '%s месеца', '%s месеци'), years$2 = formatNum$2.bind(null, 'годину дана', '%s годину', '%s године', '%s година');
    // @ts-ignore
    function sr (number, index) {
        switch (index) {
            case 0:
                return ['малопре', 'управо сад'];
            case 1:
                return ['пре ' + seconds$2(number), 'за ' + seconds$2(number)];
            case 2:
            case 3:
                return ['пре ' + minutes$2(number), 'за ' + minutes$2(number)];
            case 4:
            case 5:
                return ['пре ' + hours$2(number), 'за ' + hours$2(number)];
            case 6:
            case 7:
                return ['пре ' + days$2(number), 'за ' + days$2(number)];
            case 8:
            case 9:
                return ['пре ' + weeks$2(number), 'за ' + weeks$2(number)];
            case 10:
            case 11:
                return ['пре ' + months$2(number), 'за ' + months$2(number)];
            case 12:
            case 13:
                return ['пре ' + years$2(number), 'за ' + years$2(number)];
            default:
                return ['', ''];
        }
    }

    // @ts-ignore
    function sv (number, index) {
        return [
            ['just nu', 'om en stund'],
            ['%s sekunder sedan', 'om %s sekunder'],
            ['1 minut sedan', 'om 1 minut'],
            ['%s minuter sedan', 'om %s minuter'],
            ['1 timme sedan', 'om 1 timme'],
            ['%s timmar sedan', 'om %s timmar'],
            ['1 dag sedan', 'om 1 dag'],
            ['%s dagar sedan', 'om %s dagar'],
            ['1 vecka sedan', 'om 1 vecka'],
            ['%s veckor sedan', 'om %s veckor'],
            ['1 månad sedan', 'om 1 månad'],
            ['%s månader sedan', 'om %s månader'],
            ['1 år sedan', 'om 1 år'],
            ['%s år sedan', 'om %s år'],
        ][index];
    }

    // @ts-ignore
    function ta (number, index) {
        return [
            ['இப்போது', 'சற்று நேரம் முன்பு'],
            ['%s நொடிக்கு முன்', '%s நொடிகளில்'],
            ['1 நிமிடத்திற்க்கு முன்', '1 நிமிடத்தில்'],
            ['%s நிமிடத்திற்க்கு முன்', '%s நிமிடங்களில்'],
            ['1 மணி நேரத்திற்கு முன்', '1 மணி நேரத்திற்குள்'],
            ['%s மணி நேரத்திற்கு முன்', '%s மணி நேரத்திற்குள்'],
            ['1 நாளுக்கு முன்', '1 நாளில்'],
            ['%s நாட்களுக்கு முன்', '%s நாட்களில்'],
            ['1 வாரத்திற்கு முன்', '1 வாரத்தில்'],
            ['%s வாரங்களுக்கு முன்', '%s வாரங்களில்'],
            ['1 மாதத்திற்கு முன்', '1 மாதத்தில்'],
            ['%s மாதங்களுக்கு முன்', '%s மாதங்களில்'],
            ['1 வருடத்திற்கு முன்', '1 வருடத்தில்'],
            ['%s வருடங்களுக்கு முன்', '%s வருடங்களில்'],
        ][index];
    }

    // @ts-ignore
    function th (number, index) {
        return [
            ['เมื่อสักครู่นี้', 'อีกสักครู่'],
            ['%s วินาทีที่แล้ว', 'ใน %s วินาที'],
            ['1 นาทีที่แล้ว', 'ใน 1 นาที'],
            ['%s นาทีที่แล้ว', 'ใน %s นาที'],
            ['1 ชั่วโมงที่แล้ว', 'ใน 1 ชั่วโมง'],
            ['%s ชั่วโมงที่แล้ว', 'ใน %s ชั่วโมง'],
            ['1 วันที่แล้ว', 'ใน 1 วัน'],
            ['%s วันที่แล้ว', 'ใน %s วัน'],
            ['1 อาทิตย์ที่แล้ว', 'ใน 1 อาทิตย์'],
            ['%s อาทิตย์ที่แล้ว', 'ใน %s อาทิตย์'],
            ['1 เดือนที่แล้ว', 'ใน 1 เดือน'],
            ['%s เดือนที่แล้ว', 'ใน %s เดือน'],
            ['1 ปีที่แล้ว', 'ใน 1 ปี'],
            ['%s ปีที่แล้ว', 'ใน %s ปี'],
        ][index];
    }

    // @ts-ignore
    function tr (number, index) {
        return [
            ['az önce', 'şimdi'],
            ['%s saniye önce', '%s saniye içinde'],
            ['1 dakika önce', '1 dakika içinde'],
            ['%s dakika önce', '%s dakika içinde'],
            ['1 saat önce', '1 saat içinde'],
            ['%s saat önce', '%s saat içinde'],
            ['1 gün önce', '1 gün içinde'],
            ['%s gün önce', '%s gün içinde'],
            ['1 hafta önce', '1 hafta içinde'],
            ['%s hafta önce', '%s hafta içinde'],
            ['1 ay önce', '1 ay içinde'],
            ['%s ay önce', '%s ay içinde'],
            ['1 yıl önce', '1 yıl içinde'],
            ['%s yıl önce', '%s yıl içinde'],
        ][index];
    }

    function formatNum$3(f1, f, s, t, n) {
        var n10 = n % 10;
        var str = t;
        if (n === 1) {
            str = f1;
        }
        else if (n10 === 1 && n > 20) {
            str = f;
        }
        else if (n10 > 1 && n10 < 5 && (n > 20 || n < 10)) {
            str = s;
        }
        return str;
    }
    var seconds$3 = formatNum$3.bind(null, 'секунду', '%s секунду', '%s секунди', '%s секунд'), minutes$3 = formatNum$3.bind(null, 'хвилину', '%s хвилину', '%s хвилини', '%s хвилин'), hours$3 = formatNum$3.bind(null, 'годину', '%s годину', '%s години', '%s годин'), days$3 = formatNum$3.bind(null, 'день', '%s день', '%s дні', '%s днів'), weeks$3 = formatNum$3.bind(null, 'тиждень', '%s тиждень', '%s тиждні', '%s тижднів'), months$3 = formatNum$3.bind(null, 'місяць', '%s місяць', '%s місяці', '%s місяців'), years$3 = formatNum$3.bind(null, 'рік', '%s рік', '%s роки', '%s років');
    // @ts-ignore
    function uk (number, index) {
        switch (index) {
            case 0:
                return ['щойно', 'через декілька секунд'];
            case 1:
                return [seconds$3(number) + ' тому', 'через ' + seconds$3(number)];
            case 2:
            case 3:
                return [minutes$3(number) + ' тому', 'через ' + minutes$3(number)];
            case 4:
            case 5:
                return [hours$3(number) + ' тому', 'через ' + hours$3(number)];
            case 6:
            case 7:
                return [days$3(number) + ' тому', 'через ' + days$3(number)];
            case 8:
            case 9:
                return [weeks$3(number) + ' тому', 'через ' + weeks$3(number)];
            case 10:
            case 11:
                return [months$3(number) + ' тому', 'через ' + months$3(number)];
            case 12:
            case 13:
                return [years$3(number) + ' тому', 'через ' + years$3(number)];
            default:
                return ['', ''];
        }
    }

    // @ts-ignore
    function vi (number, index) {
        return [
            ['vừa xong', 'một lúc'],
            ['%s giây trước', 'trong %s giây'],
            ['1 phút trước', 'trong 1 phút'],
            ['%s phút trước', 'trong %s phút'],
            ['1 giờ trước', 'trong 1 giờ'],
            ['%s giờ trước', 'trong %s giờ'],
            ['1 ngày trước', 'trong 1 ngày'],
            ['%s ngày trước', 'trong %s ngày'],
            ['1 tuần trước', 'trong 1 tuần'],
            ['%s tuần trước', 'trong %s tuần'],
            ['1 tháng trước', 'trong 1 tháng'],
            ['%s tháng trước', 'trong %s tháng'],
            ['1 năm trước', 'trong 1 năm'],
            ['%s năm trước', 'trong %s năm'],
        ][index];
    }

    var ZH_CN = ['秒', '分钟', '小时', '天', '周', '个月', '年'];
    // @ts-ignore
    function zh_CN (diff, idx) {
        if (idx === 0)
            return ['刚刚', '片刻后'];
        var unit = ZH_CN[~~(idx / 2)];
        return [diff + " " + unit + "\u524D", diff + " " + unit + "\u540E"];
    }

    // @ts-ignore
    function zh_TW (number, index) {
        return [
            ['剛剛', '片刻後'],
            ['%s 秒前', '%s 秒後'],
            ['1 分鐘前', '1 分鐘後'],
            ['%s 分鐘前', '%s 分鐘後'],
            ['1 小時前', '1 小時後'],
            ['%s 小時前', '%s 小時後'],
            ['1 天前', '1 天後'],
            ['%s 天前', '%s 天後'],
            ['1 週前', '1 週後'],
            ['%s 週前', '%s 週後'],
            ['1 個月前', '1 個月後'],
            ['%s 個月前', '%s 個月後'],
            ['1 年前', '1 年後'],
            ['%s 年前', '%s 年後'],
        ][index];
    }

    var localeFunctions = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ar: ar,
        be: be,
        bg: bg,
        bn_IN: bn_IN,
        ca: ca,
        de: de,
        el: el,
        en_short: en_short,
        en_US: en_US,
        es: es,
        eu: eu,
        fa: fa,
        fi: fi,
        fr: fr,
        gl: gl,
        he: he,
        hi_IN: hi_IN,
        hu: hu,
        id_ID: id_ID,
        it: it,
        ja: ja,
        ko: ko,
        ml: ml,
        my: my,
        nb_NO: nb_NO,
        nl: nl,
        nn_NO: nn_NO,
        pl: pl,
        pt_BR: pt_BR,
        ro: ro,
        ru: ru,
        sq: sq,
        sr: sr,
        sv: sv,
        ta: ta,
        th: th,
        tr: tr,
        uk: uk,
        vi: vi,
        zh_CN: zh_CN,
        zh_TW: zh_TW
    });

    /**
     * All supported locales
     */
    var Locales = {};
    /**
     * Import a locale by name
     * @param locale
     */
    var importLocale = function (locale) {
        Locales[locale] = localeFunctions[locale];
    };
    /**
     * Check if given locale is imported
     * @param locale
     * @returns {*}
     */
    var isLocaleImported = function (locale) {
        return !!Locales[locale];
    };
    /**
     * Get a locale, default is en_US
     * @param locale
     * @returns {*}
     */
    var getLocale = function (locale) {
        return locale && Locales[locale] ? Locales[locale] : Locales['en_US'];
    };

    /**
     * @author     David Havl <info@davidhavl.com>
     * @link:      https://github.com/DavidHavl/intimeago
     * @license    MIT
     */
    var DATETIME_ATTRIBUTE_NAME = 'data-intimeago-datetime';
    var RELATIVE_DATETIME_ATTRIBUTE_NAME = 'data-intimeago-relative-datetime';
    var PREPEND_TEXT_ATTRIBUTE_NAME = 'data-intimeago-prepend-text';
    var REMOVE_ON_ZERO_ATTRIBUTE_NAME = 'data-intimeago-remove-on-zero';
    var UPDATE_EVENT_NAME = 'intimeago-update';
    var TIMER_POOL = {};
    var TIMER_ID_ATTRIBUTE_NAME = 'intimeago-timer-id';
    /**
     * Clear a node update timer
     * @param node
     */
    var clearTimer = function (node) {
        if (node && node.hasAttribute(TIMER_ID_ATTRIBUTE_NAME)) {
            var timerId = parseInt(String(node.getAttribute(TIMER_ID_ATTRIBUTE_NAME)));
            clearTimeout(timerId);
            delete TIMER_POOL[timerId];
        }
    };
    function runSingle(node, datetime, localeFunction, options) {
        // clear the node's existing timer
        clearTimer(node);
        // check if still in the dome (has not been detached)
        if (!node.isConnected) {
            return;
        }
        // Relative datetime option
        var relativeDateTime = new Date();
        if (options && options.relativeDateTime) {
            relativeDateTime = options.relativeDateTime;
        }
        else if (node.hasAttribute(RELATIVE_DATETIME_ATTRIBUTE_NAME)) {
            relativeDateTime = node.getAttribute(RELATIVE_DATETIME_ATTRIBUTE_NAME) + '';
        }
        // Get diff seconds
        var diff = diffSec(datetime, relativeDateTime);
        var prepend = node.getAttribute(PREPEND_TEXT_ATTRIBUTE_NAME);
        // Render
        node.innerText = (prepend ? prepend : '') + formatDiff(diff, localeFunction);
        // Dispatch the event.
        // @ts-ignore
        node.dispatchEvent(new CustomEvent(UPDATE_EVENT_NAME, { detail: { diff: diff } }));
        if (node.getAttribute(REMOVE_ON_ZERO_ATTRIBUTE_NAME) && Math.floor(diff) === 0) {
            node.remove();
            return;
        }
        var nextInt = nextInterval(diff);
        var timerId = setTimeout(function () {
            runSingle(node, datetime, localeFunction, options);
        }, Math.min(Math.max(nextInt, 1) * 1000, 0x7fffffff));
        // Just the key itself is more performant
        TIMER_POOL[timerId] = 1;
        node.setAttribute(TIMER_ID_ATTRIBUTE_NAME, String(timerId));
    }
    /**
     * Remove from one or more elements
     * @param nodes - the node/s to remove the functionality from
     */
    function remove(nodes) {
        // Clear one or more known nodes
        if (nodes) {
            // @ts-ignore
            var nodeList = nodes.length ? nodes : [nodes];
            for (var key in Object.keys(nodeList)) {
                clearTimer(nodeList[key]);
            }
        }
        // else clear all timers
        else {
            // @ts-ignore
            Object.keys(TIMER_POOL).forEach(function (timerId) {
                clearTimeout(timerId);
                delete TIMER_POOL[timerId];
            });
        }
    }
    /**
     * Setup dom element/s
     * @param nodes {HTMLElement | HTMLElement[] | NodeList}
     * @param locale {LocaleName}
     * @param options
     */
    function setup(nodes, locale, options) {
        locale = locale || 'en_US';
        // Import needed locale
        if (!isLocaleImported(locale)) {
            importLocale(locale);
        }
        // @ts-ignore
        var nodeList = nodes.length ? nodes : [nodes];
        for (var key in Object.keys(nodeList)) {
            if (nodeList[key].hasAttribute(DATETIME_ATTRIBUTE_NAME)) {
                runSingle(nodeList[key], String(nodeList[key].getAttribute(DATETIME_ATTRIBUTE_NAME)), getLocale(locale), options || {});
            }
        }
        return nodeList;
    }
    /**
     * Format the difference into string
     * @param date
     * @param locale
     * @param options
     */
    function format(date, locale, options) {
        locale = locale || 'en_US';
        // Import needed locale
        if (!isLocaleImported(locale)) {
            importLocale(locale);
        }
        // Diff seconds
        var sec = diffSec(date, options && options.relativeDateTime);
        // Format it with locale
        return formatDiff(sec, getLocale(locale));
    }

    exports.DATETIME_ATTRIBUTE_NAME = DATETIME_ATTRIBUTE_NAME;
    exports.PREPEND_TEXT_ATTRIBUTE_NAME = PREPEND_TEXT_ATTRIBUTE_NAME;
    exports.RELATIVE_DATETIME_ATTRIBUTE_NAME = RELATIVE_DATETIME_ATTRIBUTE_NAME;
    exports.REMOVE_ON_ZERO_ATTRIBUTE_NAME = REMOVE_ON_ZERO_ATTRIBUTE_NAME;
    exports.UPDATE_EVENT_NAME = UPDATE_EVENT_NAME;
    exports.format = format;
    exports.remove = remove;
    exports.setup = setup;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=intimeago.js.map
