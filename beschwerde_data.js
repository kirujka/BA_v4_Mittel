/* Beschwerdeantwort — конструктор v4.3 «минимум» — после проверки корректором-носителем (30.09.2026)
   Deutsch-Test für den Beruf B2, часть «Lesen und Schreiben».
   Принцип: один каркас на блок; в каждой дырке — ДЖОКЕР (подходит всегда) + несколько точных вариантов.
   Если шеф в записке диктует, что именно написать, — его слова вставляются в дырку по одному из трёх превращений.
   К каждой немецкой единице — русский перевод.
   kreis: 1 = ядро (учить первым), 2 = второй круг (после ядра) */

const BLOECKE = [

/* ---------- ЯДРО ---------- */

{ id:"1", kreis:1, haeuf:"100 %",
  de:"Anrede", ru:"Обращение",
  rahmen:{ de:"Sehr geehrte Frau [Nachname],   /   Sehr geehrter Herr [Nachname],",
           ru:"Глубокоуважаемая госпожа [фамилия],   /   Глубокоуважаемый господин [фамилия]," },
  slots:[
    { joker:true, de:"Sehr geehrte Damen und Herren,", ru:"Уважаемые дамы и господа,", note:"фамилии в задании нет" }
  ],
  falle:"В дырку — только ФАМИЛИЯ: Sehr geehrte Frau Weber. Имя не ставится (❌ Frau Anna), название фирмы тоже (❌ Herr Firma Müller GmbH): жалобу от фирмы подписывает человек — обращаешься к нему. После запятой следующая строка с БОЛЬШОЙ буквы.",
  c1:[] },

{ id:"2", kreis:1, haeuf:"100 %",
  de:"Einstieg", ru:"Зачин — письмо получено",
  rahmen:{ de:"Ihre Anfrage hat uns erreicht.", ru:"Ваш запрос до нас дошёл." },
  slots:[
    { de:"Ihre E-Mail hat uns erreicht.", ru:"Ваше электронное письмо до нас дошло.", note:"меняется одно слово" },
    { de:"Ihr Brief hat uns erreicht.",   ru:"Ваше письмо до нас дошло.",             note:"меняется одно слово — и окончание: Ihr, не Ihre" }
  ],
  falle:"Выбрано вместе с корректором: один глагол на все случаи — hat uns erreicht, меняется только слово. Ловушка окончания: Ihre — перед словами женского рода (die Anfrage, die E-Mail, die Beschwerde), Ihr — перед мужским и средним (der Brief, das Schreiben).",
  c1:[] },

{ id:"3", kreis:1, haeuf:"100 %", pflicht:true,
  de:"Entschuldigung", ru:"Понимание и извинение",
  rahmen:{ de:"Wir verstehen Ihren Ärger und möchten uns aufrichtig für die entstandenen Unannehmlichkeiten entschuldigen.",
           ru:"Мы понимаем Ваше раздражение и хотели бы искренне извиниться за возникшие неудобства." },
  slots:[],
  falle:"Твоя неизменная часть: пишется дословно, целиком, всегда. Корректор подтвердила — оставить именно этот вариант, альтернативы убраны. Признание эмоции клиента («мы понимаем Ваше раздражение») даёт баллы по критерию Kommunikative Gestaltung.",
  c1:[] },

{ id:"4", kreis:1, haeuf:"89 %",
  de:"Ursache", ru:"Причина",
  rahmen:{ de:"Wie eine eingehende Prüfung ergeben hat, ist es aufgrund [причина] zu den von Ihnen geschilderten Unregelmäßigkeiten gekommen.",
           ru:"Как показала тщательная проверка, из-за [причина] возникли описанные Вами сбои." },
  slots:[
    { joker:true, de:"eines bedauerlichen Zusammentreffens mehrerer ungünstiger Umstände",
      ru:"досадного стечения нескольких неблагоприятных обстоятельств", note:"подходит к ЛЮБОЙ ситуации — если не знаешь, что писать" },
    { de:"eines internen Bearbeitungsfehlers",           ru:"внутренней ошибки при обработке",   note:"ошибка у нас: путаница, не тот товар, счёт, организация" },
    { de:"eines internen Systemfehlers",                 ru:"внутреннего системного сбоя",       note:"из твоего шаблона · техника, IT, сайт, счета, автоматы" },
    { de:"eines krankheitsbedingten Personalausfalls",   ru:"отсутствия персонала по болезни",   note:"из твоего шаблона · опоздание, недоделки, сервис недоступен" },
    { de:"eines Lieferengpasses bei unserem Hersteller", ru:"перебоев с поставками у нашего производителя", note:"задержка, недопоставка — особенно если шеф пишет «со стороны производителя»" },
    { de:"eines Produktionsfehlers",                     ru:"производственного брака",           note:"из твоего шаблона · дефект, поломка, повреждение" }
  ],
  falle:"Проверено корректором, без правок. ОДНО правило Genitiv на все шесть причин: aufgrund + eines + (прилагательное на -en) + существительное на -s или -es. Все шесть мужского или среднего рода — женских исключений нет. Если шеф прямо называет причину — бери ту, что ближе к его словам.",
  c1:["Präpositionen mit Genitiv — предлоги с родительным падежом","Partizipialattribut «die von Ihnen geschilderten …» — причастное определение"] },

{ id:"5", kreis:1, haeuf:"14 % в банке · 3 раза из 3 на реальном экзамене",
  de:"Grenze", ru:"Ограничение, отказ",
  rahmen:{ de:"So sehr wir Ihr Anliegen auch nachvollziehen können, weisen wir Sie darauf hin, dass [X].",
           ru:"Как бы мы ни понимали Ваше обращение, мы обращаем Ваше внимание на то, что [X]." },
  slots:[
    { joker:true, de:"wir Ihre Forderungen in dieser Form leider nicht erfüllen können",
      ru:"мы, к сожалению, не можем удовлетворить Ваши требования в такой форме", note:"универсальный отказ — подходит всегда" },
    { de:"wir die Ursache nicht beeinflussen können",
      ru:"мы не можем повлиять на причину", note:"вина не наша — формулировка корректора. Если шеф пишет «außerhalb unseres Verantwortungsbereichs» — переписываешь его слова (превращение Б)" },
    { de:"Ihre Wünsche über den vertraglich vereinbarten Umfang hinausgehen",
      ru:"Ваши пожелания выходят за рамки согласованного договором объёма", note:"вне договора, лимит исчерпан — дальше часто блок 12" },
    { de:"eine Erledigung bis zu dem von Ihnen genannten Zeitpunkt nicht möglich ist",
      ru:"выполнение к названному Вами моменту невозможно", note:"срок хуже требуемого — реальный срок дальше в блоке 6" }
  ],
  falle:"Без модального глагола: müssen корректор сочла резким, а möchten уже стоит в блоке 3 (möchten uns … entschuldigen) — был бы повтор в каждом письме с отказом. hinweisen — разделяемый глагол: weisen … hin, приставка hin — в конец главного, прямо перед «, dass». Придаточное стоит первым, поэтому главное начинается с глагола: weisen wir, а не «wir weisen». В русском порядок не меняется. Два ограничения — один каркас, второе через und. После этого блока нужен смягчитель: блок 7 или блок 12.",
  c1:["Konzessivsatz «so sehr … auch» — уступительное придаточное","Inversion — глагол перед подлежащим","trennbares Verb «hinweisen» — разделяемый глагол"] },

{ id:"6", kreis:1, haeuf:"~75 %",
  de:"Abhilfe + Termin", ru:"Что делаем и когда",
  rahmen:{ de:"Selbstverständlich schaffen wir Abhilfe: [действие]",
           ru:"Разумеется, мы примем меры: [действие]" },
  slots:[
    { joker:true, de:"Alle beanstandeten Punkte werden [когда] erledigt.",
      ru:"Все пункты, на которые Вы указали, будут [когда] выполнены.", note:"универсальный: брак, ошибки, недоделки, правки" },
    { de:"Die betreffenden Artikel werden Ihnen [когда] zugesandt.",
      ru:"Соответствующие товары будут Вам [когда] высланы.", note:"товар: замена, недопоставка, задержка заказа" },
    { de:"Die Rechnung wird [когда] korrigiert und der Betrag erstattet.",
      ru:"Счёт будет [когда] исправлен, а сумма возвращена.", note:"деньги — из твоего исходного шаблона. Варианты ниже" },
    { de:"Das Problem ist inzwischen behoben.",
      ru:"Проблема тем временем устранена.", note:"ВМЕСТО всего блока, без каркаса — если шеф пишет, что всё уже исправлено" }
  ],
  gruppen:[
    { titel:"Деньги — меняешь 1–3 слова",
      items:[
        { de:"Die Rechnung wird [когда] korrigiert.",       ru:"Счёт будет [когда] исправлен.",           note:"только ошибка в счёте" },
        { de:"Der Betrag wird Ihnen [когда] erstattet.",    ru:"Сумма будет Вам [когда] возвращена.",      note:"только вернуть деньги" },
        { de:"Die Mahnung wird [когда] storniert.",         ru:"Напоминание об оплате будет [когда] аннулировано.", note:"напоминание пришло по ошибке" }
      ]},
    { titel:"Вставка [когда] — по умолчанию unverzüglich",
      items:[
        { joker:true, de:"unverzüglich",                    ru:"незамедлительно",           note:"срока в записке нет" },
        { de:"spätestens bis zum 12. Mai",                   ru:"самое позднее до 12 мая",   note:"дата — bis zum" },
        { de:"spätestens am Mittwoch",                       ru:"самое позднее в среду",     note:"день недели — am" },
        { de:"spätestens Anfang nächster Woche",             ru:"самое позднее в начале следующей недели", note:"расплывчато — БЕЗ предлога" }
      ]}
  ],
  falle:"Срок — не отдельный блок, а вставка [когда] внутри действия: «Die betreffenden Artikel werden Ihnen spätestens Anfang nächster Woche zugesandt.» Три формы срока — три предлога: дата — bis zum, день недели — am, расплывчато — без предлога. В русском предлог есть везде («до», «в», «в начале»), и рука ставит его туда, где его нет. Все действия — Passiv: werden + причастие в конце.",
  c1:["Nomen-Verb-Verbindung «Abhilfe schaffen» — принять меры","Passiv — страдательный залог","TeKaMoLo — порядок обстоятельств"] },

{ id:"7", kreis:1, haeuf:"36 %",
  de:"Angebot", ru:"Что даём сверх",
  rahmen:{ de:"Als Zeichen unseres Entgegenkommens bieten wir Ihnen [объект] an.",
           ru:"В знак нашего расположения мы предлагаем Вам [объект]." },
  slots:[
    { joker:true, de:"einen Preisnachlass in Höhe von 20 %", ru:"скидку в размере 20 %", note:"по умолчанию — шеф не уточнил, что давать" },
    { de:"eine Gutschrift in Höhe von 100 €",                ru:"кредит-ноту на сумму 100 €", note:"шеф назвал сумму в евро" }
  ],
  falle:"Проверено корректором, без правок. Если шеф диктует, ЧТО предложить, — его слова идут в дырку по превращению А: einen / ein / eine + Akkusativ. Два предложения — ОДИН каркас, два объекта через sowie. anbieten — разделяемый глагол: an уезжает в самый конец.",
  c1:["trennbares Verb — разделяемый глагол","Konnektor «sowie» — а также"] },

{ id:"8", kreis:1, haeuf:"43 %",
  de:"Prävention", ru:"Чтобы не повторилось",
  rahmen:{ de:"Zur Vermeidung ähnlicher Vorkommnisse [концовка]",
           ru:"Во избежание подобных происшествий [концовка]" },
  slots:[
    { joker:true, de:"haben wir bereits entsprechende Maßnahmen ergriffen.",
      ru:"мы уже приняли соответствующие меры.", note:"подходит всегда — шеф не требует конкретной меры" },
    { de:"wird jeder Auftrag künftig zusätzlich kontrolliert.",
      ru:"каждый заказ впредь дополнительно проверяется.", note:"брак, не тот товар, ошибки" },
    { de:"wird künftig ein verantwortlicher Mitarbeiter alle Aufträge persönlich koordinieren.",
      ru:"впредь ответственный сотрудник будет лично координировать все заказы.", note:"из твоего шаблона · неразбериха, организация, мероприятия — второй джокер, если не понял, в чём дело" },
    { de:"wird unser Team zeitnah erweitert.",
      ru:"наша команда в ближайшее время будет расширена.", note:"из твоего шаблона · нехватка людей, задержки" },
    { de:"wird unser Personal gezielt geschult.",
      ru:"наш персонал пройдёт целенаправленное обучение.", note:"грубость, плохой сервис" },
    { de:"informieren wir Sie künftig umgehend über jede Änderung.",
      ru:"впредь мы будем немедленно сообщать Вам о любом изменении.", note:"молчали, не сообщили" }
  ],
  falle:"Переделано после корректора: клиенту важен результат, а не внутренняя кухня — поэтому один короткий зачин (из твоего шаблона) + короткая концовка. После зачина глагол СРАЗУ вторым: Zur Vermeidung … haben wir / wird / informieren wir. В русском «Во избежание … мы приняли» — подлежащее первым, и рука пишет «Zur Vermeidung … wir haben» — ошибка. Vorkommnisse, а не Vorfälle: «Vorfall» уже стоит в финале.",
  c1:["Nominalstil «zur Vermeidung + Genitiv» — именной стиль","Inversion — глагол сразу после зачина","Nomen-Verb-Verbindung «Maßnahmen ergreifen» — принять меры"] },

{ id:"9", kreis:1, haeuf:"100 %", pflicht:true, letzter:true,
  de:"Schluss", ru:"Финал",
  rahmen:{ de:"Wir hoffen darauf, dass Sie trotz dieses Vorfalls auch weiterhin [форма] bleiben.\nUnsere Kunden haben oberste Priorität, und wir sind stets bestrebt, Ihnen den bestmöglichen Service zu bieten. Bei Rückfragen stehen wir Ihnen gerne zur Verfügung.\n\nMit freundlichen Grüßen\n[Vorname Nachname]",
           ru:"Мы надеемся на то, что Вы, несмотря на этот случай, и впредь останетесь [форма].\nНаши клиенты имеют высший приоритет, и мы всегда стремимся предложить Вам наилучший сервис. При дополнительных вопросах мы охотно в Вашем распоряжении.\n\nС уважением\n[Имя Фамилия]" },
  slots:[
    { de:"unsere treue Kundin", ru:"нашей верной клиенткой", note:"адресат — женщина" },
    { de:"unser treuer Kunde",  ru:"нашим верным клиентом",  note:"адресат — мужчина ИЛИ фирма (фирма = один клиент)" },
    { de:"Angesichts unserer langjährigen und vertrauensvollen Zusammenarbeit hoffen wir darauf, dass Sie …",
      ru:"Ввиду нашего многолетнего и доверительного сотрудничества мы надеемся на то, что Вы …",
      note:"ЗАЧИН вместо «Wir hoffen darauf» — если шеф пишет «давний клиент», «langjährige Beziehung»" }
  ],
  falle:"Твоя неизменная часть — оставлена как есть. После bleiben падеж НЕ меняется, остаётся Nominativ: unser treuER KundE. В русском «останетесь клиентОМ» — творительный, рука тянет в косвенный. В зачине Angesichts … стоит первым, поэтому hoffen wir. Подпись — имя и фамилия, без «Herr»: Kyrylo Fomin. «Herr» — только в обращении к другому. Корректор считает treue старомодным — старомодно, но уместно в формальном письме, оставлено.",
  c1:["Präposition mit Genitiv «trotz», «angesichts»","Korrelat «darauf, dass» — местоименное наречие"] },

/* ---------- ВТОРОЙ КРУГ ---------- */

{ id:"10", kreis:2, haeuf:"11 %",
  de:"Bedauern", ru:"Отдельное сожаление — связка",
  rahmen:{ de:"Das tut uns sehr leid.", ru:"Нам очень жаль." },
  slots:[
    { de:"Die Verzögerung tut uns sehr leid.",        ru:"Нам очень жаль, что возникла задержка.",   note:"о чём именно — первым" },
    { de:"Die fehlende Rückmeldung tut uns sehr leid.", ru:"Нам очень жаль, что мы не дали ответа.", note:"идеально перед блоком 16" },
    { de:"Die Fehler tun uns sehr leid.",             ru:"Нам очень жаль, что произошли ошибки.",   note:"несколько вещей — tun, не tut" }
  ],
  falle:"Связка-джокер от корректора: [о чём жалеем] tut uns sehr leid. То, о чём жалеем, — подлежащее, стоит первым; глагол согласуется с ним: одна вещь — tut, несколько — tun. Где ставить: после блока 3, когда шеф просит отдельно пожалеть о конкретном. Лучшая пара — с блоком 16: «Die fehlende Rückmeldung tut uns sehr leid. Sie hätten von uns automatisch …». Не пиши «Wir entschuldigen uns» — извинение уже есть в блоке 3.",
  c1:[] },

{ id:"11", kreis:2, haeuf:"4 %",
  de:"Schadensübernahme", ru:"Берём ущерб на себя",
  rahmen:{ de:"Für den verursachten Schaden kommen wir in vollem Umfang auf.",
           ru:"За причинённый ущерб мы отвечаем в полном объёме." },
  slots:[],
  falle:"Проверено корректором. für etwas aufkommen — устойчивое выражение; приставка auf уходит в конец. Ставится сразу после блока 4.",
  c1:["trennbares Verb — разделяемый глагол"] },

{ id:"12", kreis:2, haeuf:"4 % · реальный экзамен друга",
  de:"Zahlungspflicht", ru:"Этот раз бесплатно, дальше платно",
  rahmen:{ de:"Ausnahmsweise übernehmen wir die Kosten dieses Mal noch. Alle weiteren Leistungen werden wir Ihnen jedoch in Rechnung stellen.",
           ru:"В порядке исключения в этот раз расходы мы ещё берём на себя. Все дальнейшие услуги мы, однако, выставим Вам в счёт." },
  slots:[
    { de:"Alle weiteren Leistungen werden wir Ihnen jedoch mit jeweils 200 € in Rechnung stellen.",
      ru:"Все дальнейшие услуги мы, однако, выставим Вам в счёт по 200 € за каждую.", note:"шеф назвал сумму — вместо второго предложения" }
  ],
  falle:"Корректор: жёстче. Поэтому werden wir (выставим), а не müssten wir (пришлось бы) — без «может быть». Смягчитель «в этот раз ещё бесплатно» стоит ПЕРЕД. Слово «definitiv» (однозначно), которое предлагала корректор, не взято: в деловом письме звучит резко. etwas in Rechnung stellen — устойчивое выражение.",
  c1:["Nomen-Verb-Verbindung «in Rechnung stellen» — выставить в счёт","Konnektor «jedoch» — однако"] },

{ id:"13", kreis:2, haeuf:"5 %",
  de:"Prüfung", ru:"Дело ещё изучается",
  rahmen:{ de:"Der Sachverhalt wird derzeit intern geprüft; über das Ergebnis informieren wir Sie zeitnah.",
           ru:"Обстоятельства дела в настоящее время проверяются внутри компании; о результате мы сообщим Вам в ближайшее время." },
  slots:[],
  falle:"Проверено корректором. Нужен, когда шеф пишет, что решения ещё нет. С блоком 4 не ставится. derzeit, а не jetzt: jetzt в деловом письме звучит разговорно.",
  c1:["Passiv — страдательный залог"] },

{ id:"14", kreis:2, haeuf:"4 раза из 56",
  de:"Konditional ohne «wenn»", ru:"Если дата не подойдёт",
  rahmen:{ de:"Sollte der Termin nicht passen, melden Sie sich bitte bei uns.",
           ru:"Если дата не подойдёт, пожалуйста, свяжитесь с нами." },
  slots:[],
  falle:"Вариант корректора — вдвое короче. «Sollte der Termin nicht passen» — обязательная часть: условие БЕЗ союза wenn, sollte на первом месте. В русском «если» обязательно, поэтому по аналогии не выводится — учится целиком. Ставится сразу после блока 6.",
  c1:["Konditionalsatz ohne «wenn» — условное придаточное без союза"] },

{ id:"15", kreis:2, haeuf:"7 %",
  de:"Rückfrage", ru:"Что нужно от клиента",
  rahmen:{ de:"Bitte teilen Sie uns mit, ob Sie einverstanden sind.",
           ru:"Пожалуйста, сообщите нам, согласны ли Вы." },
  slots:[
    { joker:true, de:"Bitte schicken Sie uns die entsprechenden Unterlagen.", ru:"Пожалуйста, пришлите нам соответствующие документы.", note:"ВТОРОЙ КАРКАС — просим что-то прислать; джокер" },
    { de:"Bitte schicken Sie uns einige Fotos des Schadens.",               ru:"Пожалуйста, пришлите нам несколько фотографий повреждения.", note:"повреждение — любое, не только товара" },
    { de:"Bitte schicken Sie uns eine Kopie der Rechnung.",                 ru:"Пожалуйста, пришлите нам копию счёта.", note:"спор о деньгах" }
  ],
  falle:"Короткие просьбы с Bitte — вариант корректора. Два каркаса: «сообщите, согласны ли Вы» и «пришлите нам [что]». Что прислать, шеф обычно диктует — переписываешь его слова в Akkusativ (превращение А): Bitte schicken Sie uns [что].",
  c1:[] },

{ id:"16", kreis:2, haeuf:"3 раза из 56 · реальный экзамен",
  de:"Selbstkritik", ru:"Упрёк себе за прошлое",
  rahmen:{ de:"Sie hätten von uns automatisch eine Zwischennachricht erhalten müssen.",
           ru:"Вы должны были автоматически получить от нас промежуточное сообщение." },
  slots:[],
  falle:"automatisch — правка корректора (было unaufgefordert). Konjunktiv II Perfekt с модальным глаголом: двойной инфинитив в конце (erhalten müssen), hätten на втором месте — учится целиком. Лучшая пара — после блока 10: «Die fehlende Rückmeldung tut uns sehr leid.»",
  c1:["Konjunktiv II Perfekt mit Modalverb"] }
];

/* Порядок сборки письма */
const REIHENFOLGE = ["1","2","3","10","16","4","11","5","12","13","6","14","7","8","15","9"];

/* Четыре формы письма */
const FORMEN = [
  { titel:"А · Виноваты — исправляем", ru:"самая частая", bloecke:["1","2","3","4","6","7","8","9"],
    wann:"шеф просит извиниться, объяснить причину, исправить, компенсировать, не допустить повторения" },
  { titel:"Б · Отказ", ru:"говорим «нет» и смягчаем", bloecke:["1","2","3","4","5","7","9"],
    wann:"шеф пишет «ablehnen», «nicht möglich», «liegt nicht bei uns», «außerhalb der Vereinbarung»" },
  { titel:"В · Делаем, но дальше платно", ru:"ситуация друга", bloecke:["1","2","3","4","5","12","6","9"],
    wann:"шеф пишет, что лимит исчерпан и дальше за деньги" },
  { titel:"Г · Ещё разбираемся", ru:"решения пока нет", bloecke:["1","2","3","13","7","15","9"],
    wann:"шеф пишет «wird geprüft», «Umstände klären», «mit Kollegen besprechen»" }
];

/* Три превращения: слова шефа → в дырку каркаса */
const TRANSFORM = [
  { id:"А", titel:"Шеф диктует, ЧТО предложить или прислать → блоки 7 и 15",
    regel:"Из записки берёшь существительное с прилагательным и ставишь в Akkusativ: einen (м.р.) / ein (ср.р.) / eine (ж.р.). dem Lagerbestand → unserem Lagerbestand. Глагол из записки выбрасываешь — он уже есть в каркасе.",
    bsp:[
      { notiz:"vergleichbares Modell aus Lagerbestand anbieten", de:"ein vergleichbares Modell aus unserem Lagerbestand", ru:"сопоставимую модель из нашего складского запаса" },
      { notiz:"Techniker kostenfrei zur Einweisung",             de:"eine kostenfreie Einweisung durch unseren Techniker", ru:"бесплатный инструктаж нашим техником" },
      { notiz:"Schadensbericht anfordern",                       de:"Bitte schicken Sie uns einen kurzen Schadensbericht.", ru:"Пожалуйста, пришлите нам краткий акт о повреждении." }
    ]},
  { id:"Б", titel:"Шеф диктует, В ЧЁМ отказать → блок 5",
    regel:"Фразу из записки превращаешь в придаточное после dass: глагол уходит в самый конец. «Клиент» меняешь на «Sie» — ты пишешь ему самому.",
    bsp:[
      { notiz:"Garantie ist abgelaufen",               de:"die Garantie bereits abgelaufen ist", ru:"гарантия уже истекла" },
      { notiz:"Kosten der Überprüfung trägt der Kunde", de:"die Kosten der Überprüfung von Ihnen zu tragen sind", ru:"расходы на проверку несёте Вы" },
      { notiz:"Ursache liegt außerhalb unseres Verantwortungsbereichs", de:"die Ursache außerhalb unseres Verantwortungsbereichs liegt", ru:"причина лежит вне нашей зоны ответственности" }
    ]},
  { id:"В", titel:"Шеф диктует СРОК → вставка [когда] в блоке 6",
    regel:"Перед сроком — spätestens (самое позднее). Дата — bis zum, день недели — am, расплывчатый срок — без предлога. Шеф пишет «frühestens» (не раньше) — ставишь frühestens am.",
    bsp:[
      { notiz:"Nachlieferung bis 12.05.",        de:"spätestens bis zum 12. Mai",       ru:"самое позднее до 12 мая" },
      { notiz:"Mittwochmorgen",                  de:"spätestens am Mittwochmorgen",     ru:"самое позднее в среду утром" },
      { notiz:"Anfang nächster Woche",           de:"spätestens Anfang nächster Woche", ru:"самое позднее в начале следующей недели" },
      { notiz:"Nachlieferung frühestens 12.05.", de:"frühestens am 12. Mai",            ru:"не раньше 12 мая" }
    ]}
];

/* Что требует шеф → какой блок */
const TRIGGER = [
  { de:"sich entschuldigen", ru:"извиниться", blk:"3" },
  { de:"das Bedauern zum Ausdruck bringen", ru:"выразить сожаление", blk:"10" },
  { de:"die Ursache nennen / erklären, wie es dazu kam", ru:"назвать причину, объяснить, как так вышло", blk:"4" },
  { de:"Gründe seitens des Herstellers erläutern", ru:"объяснить причины со стороны производителя", blk:"4" },
  { de:"über eine IT-Störung informieren", ru:"сообщить о сбое IT", blk:"4" },
  { de:"Verantwortung für die Schäden übernehmen", ru:"взять ответственность за ущерб", blk:"11" },
  { de:"mitteilen, dass die Forderungen geprüft werden", ru:"сообщить, что требования проверяются", blk:"13" },
  { de:"genaue Umstände klären", ru:"прояснить точные обстоятельства", blk:"13" },
  { de:"die Forderung ablehnen", ru:"отклонить требование", blk:"5" },
  { de:"erklären, dass die Verantwortung nicht bei uns liegt", ru:"объяснить, что ответственность не на нас", blk:"5" },
  { de:"darauf hinweisen, dass dies außerhalb der Vereinbarung liegt", ru:"указать, что это вне договорённости", blk:"5" },
  { de:"mitteilen, dass der Wunschtermin nicht machbar ist", ru:"сообщить, что желаемый срок невозможен", blk:"5" },
  { de:"darauf hinweisen, dass weitere Leistungen kostenpflichtig sind", ru:"предупредить, что дальнейшие услуги платные", blk:"12" },
  { de:"versichern, dass alles korrigiert wird", ru:"заверить, что всё будет исправлено", blk:"6" },
  { de:"Ersatz zusenden / fehlende Ware nachliefern", ru:"выслать замену, допоставить недостающее", blk:"6" },
  { de:"die Rechnung korrigieren / den Betrag erstatten", ru:"исправить счёт, вернуть деньги", blk:"6" },
  { de:"mitteilen, dass das Problem bereits behoben ist", ru:"сообщить, что проблема уже устранена", blk:"6" },
  { de:"einen Termin nennen / Lieferung bis …", ru:"назвать срок, доставка до …", blk:"6" },
  { de:"um Rückmeldung bitten, falls der Termin nicht passt", ru:"попросить ответ, если дата не подходит", blk:"14" },
  { de:"eine Entschädigung / Wiedergutmachung anbieten", ru:"предложить компенсацию", blk:"7" },
  { de:"einen Preisnachlass gewähren", ru:"предоставить скидку", blk:"7" },
  { de:"ein vergleichbares Modell anbieten", ru:"предложить сопоставимую модель", blk:"7" },
  { de:"eine Woche der Gebühren als Kulanz erlassen", ru:"списать недельную плату в порядке доброй воли", blk:"7" },
  { de:"zusichern, dass sich der Vorfall nicht wiederholt", ru:"заверить, что случай не повторится", blk:"8" },
  { de:"Maßnahmen zur künftigen Vermeidung mitteilen", ru:"сообщить меры по предотвращению", blk:"8" },
  { de:"Fotos / einen Schadensbericht anfordern", ru:"запросить фото, акт о повреждении", blk:"15" },
  { de:"Zustimmung einholen / Rückmeldung erbitten", ru:"получить согласие, попросить ответ", blk:"15" },
  { de:"einräumen, dass der Kunde früher hätte informiert werden müssen", ru:"признать, что клиента надо было проинформировать раньше", blk:"16" },
  { de:"die langjährige Geschäftsbeziehung betonen", ru:"подчеркнуть многолетние деловые отношения", blk:"9" },
  { de:"den Kunden halten / Kündigung verhindern", ru:"удержать клиента, не допустить расторжения", blk:"9" }
];

/* Правила сборки */
const REGELN = [
  { titel:"Записка — чек-лист, а не план письма",
    text:"Пункты в записке идут как попало. Выбираешь форму письма (А, Б, В или Г), отмечаешь по записке, какие блоки добавить или убрать, выстраиваешь в порядке из шпаргалки — и только потом пишешь.",
    de:"", ru:"" },
  { titel:"Не знаешь, что вставить, — джокер",
    text:"В каждой дырке есть вариант с пометкой ДЖОКЕР. Он подходит к любой ситуации — менее точно, зато без риска. Пустая дырка или фраза, сочинённая на ходу, хуже джокера.",
    de:"", ru:"" },
  { titel:"Шеф продиктовал — бери его слова",
    text:"Если в записке сказано, что предложить, в чём отказать или какой срок назвать, — выученный вариант не нужен. Слова шефа вставляются в дырку каркаса по одному из трёх превращений (А, Б, В). Предложение из записки целиком не переписывается никогда — только слова в твой каркас.",
    de:"", ru:"" },
  { titel:"Два ограничения — один каркас, союз und",
    text:"Каркас блока 5 не повторяется. Второе придаточное цепляется через und, dass не повторяется, глагол во втором придаточном тоже уходит в конец.",
    de:"So sehr wir Ihr Anliegen auch nachvollziehen können, weisen wir Sie darauf hin, dass wir die Ursache nicht beeinflussen können und die Kosten der Überprüfung daher von Ihnen zu tragen sind.",
    ru:"Как бы мы ни понимали Ваше обращение, мы обращаем Ваше внимание на то, что мы не можем повлиять на причину и расходы на проверку поэтому несёте Вы." },
  { titel:"Два предложения — один каркас, союз sowie",
    text:"Каркас блока 7 не повторяется. Два объекта соединяются через sowie («а также»), оба в Akkusativ.",
    de:"Als Zeichen unseres Entgegenkommens bieten wir Ihnen ein vergleichbares Modell aus unserem Lagerbestand sowie einen Preisnachlass in Höhe von 20 % an.",
    ru:"В знак нашего расположения мы предлагаем Вам сопоставимую модель из нашего складского запаса, а также скидку в размере 20 %." },
  { titel:"Блоки 4 и 13 вместе не ставятся",
    text:"Блок 4 говорит «проверка показала, что причина — …». Блок 13 — «дело ещё проверяется». Вместе они противоречат друг другу. Шеф пишет «Umstände klären», «wird geprüft» — ставишь 13 без 4.",
    de:"", ru:"" },
  { titel:"После отказа — смягчитель",
    text:"За блоком 5 обязательно идёт либо блок 7 (компенсация), либо блок 12 (в этот раз бесплатно). Голый отказ режет критерий Kommunikative Gestaltung.",
    de:"", ru:"" },
  { titel:"Одно слово — один раз на письмо",
    text:"Блоки подобраны так, чтобы в собранном письме значимые слова не повторялись. Повтор снижает оценку по критерию Spektrum sprachlicher Mittel. Проверено автоматически на всех 56 заданиях.",
    de:"", ru:"" },
  { titel:"Мало места на бланке",
    text:"Сокращается в таком порядке: блок 10 → в блоке 8 оставить джокер → среднее предложение финала. Блоки 1, 2, 3, 4 и 9 не трогаются никогда.",
    de:"", ru:"" }
];

/* Четыре официальных критерия оценки */
const KRITERIEN = [
  { de:"Kommunikative Aufgabenbewältigung", ru:"Решение коммуникативной задачи",
    text:"Закрыты ли ВСЕ пункты записки шефа. Пропущенный пункт стоит дороже любой грамматической ошибки. Один пункт — один блок." },
  { de:"Kommunikative Gestaltung", ru:"Коммуникативное оформление",
    text:"Звучит ли письмо как обращение к живому человеку: признание эмоции, вежливость, отказ со смягчителем, логичная последовательность." },
  { de:"Formale Richtigkeit", ru:"Формальная правильность",
    text:"Грамматика и орфография. Выученные каркасы не ломаются; ошибки появляются там, где собираешь на ходу. Поэтому джокер лучше импровизации." },
  { de:"Spektrum sprachlicher Mittel", ru:"Спектр языковых средств",
    text:"Разнообразие и уровень конструкций: Genitiv, Passiv, Konjunktiv II, уступительное придаточное, условие без wenn, инверсия. Повтор одного слова или конструкции снижает оценку." }
];

/* Вырезанное и заменённое — справка, НЕ учить */
const RESERVE = [
  { blk:"3 · до корректора", de:"Für die entstandenen Unannehmlichkeiten bitten wir vielmals um Entschuldigung.", ru:"За возникшие неудобства мы приносим глубокие извинения. — альтернатива, корректор выбрала оригинал" },
  { blk:"5 · до корректора", de:"die Ursache außerhalb unseres Verantwortungsbereichs liegt", ru:"причина лежит вне нашей зоны ответственности — корректору тяжело; годится, если шеф пишет так сам" },
  { blk:"8 · до корректора", de:"Um derartige Vorkommnisse künftig auszuschließen, haben wir bereits entsprechende Maßnahmen eingeleitet: …", ru:"Чтобы исключить подобные происшествия в будущем, мы уже инициировали соответствующие меры: … — слишком массивно" },
  { blk:"8 · до корректора", de:"Unsere Mitarbeitenden werden erneut auf die geltenden Verhaltensregeln hingewiesen.", ru:"Наши сотрудники будут повторно проинструктированы о правилах поведения. — клиенту неважна внутренняя кухня" },
  { blk:"10 · до корректора", de:"Dass Sie diese Erfahrung machen mussten, bedauern wir außerordentlich.", ru:"О том, что Вам пришлось столкнуться с этим, мы чрезвычайно сожалеем." },
  { blk:"12 · до корректора", de:"Für jede weitere Inanspruchnahme müssten wir Ihnen die anfallenden Kosten jedoch in Rechnung stellen.", ru:"…нам пришлось бы выставить Вам расходы. — корректор: слишком мягко" },
  { blk:"14 · до корректора", de:"Sollte Ihnen dieser Termin nicht zusagen, teilen Sie uns dies bitte zeitnah mit.", ru:"Если эта дата Вам не подойдёт, сообщите нам об этом в ближайшее время. — длиннее" },
  { blk:"4 Ursache", de:"einer Verwechslung bei der Kommissionierung", ru:"путаницы при комплектации заказа — покрыто «internen Bearbeitungsfehlers»" },
  { blk:"4 Ursache", de:"Nach eingehender Prüfung des Sachverhalts müssen wir Ihnen mitteilen, dass der Vorfall auf [причина в Akkusativ] zurückzuführen ist.", ru:"После тщательной проверки мы должны сообщить Вам, что происшествие вызвано [причина]. — вторая конструкция причины" },
  { blk:"5 Grenze", de:"der Mangel nachweislich auf eine unsachgemäße Handhabung zurückzuführen ist", ru:"неисправность доказуемо вызвана ненадлежащим обращением" },
  { blk:"7 Angebot", de:"Um Ihnen dennoch entgegenzukommen, bieten wir Ihnen … an.", ru:"Чтобы всё же пойти Вам навстречу, мы предлагаем Вам … — зачин после отказа" },
  { blk:"9 Schluss", de:"von einer Kündigung des Vertrags absehen", ru:"откажетесь от расторжения договора — если клиент грозит расторжением" }
];
