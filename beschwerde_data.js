/* Beschwerdeantwort — конструктор v4.2 «минимум»
   Deutsch-Test für den Beruf B2, часть «Lesen und Schreiben».
   Принцип: один каркас на блок; в каждой дырке — ДЖОКЕР (подходит всегда) + до трёх точных вариантов.
   Если шеф в записке диктует, что именно написать, — его слова вставляются в дырку по одному из трёх превращений.
   К каждой немецкой единице — русский перевод.
   kreis: 1 = ядро (учить первым), 2 = второй круг (после ядра) */

const BLOECKE = [

/* ---------- ЯДРО ---------- */

{ id:"1", kreis:1, haeuf:"100 %",
  de:"Anrede", ru:"Обращение",
  rahmen:{ de:"Sehr geehrte Frau [Name],   /   Sehr geehrter Herr [Name],",
           ru:"Глубокоуважаемая госпожа [имя],   /   Глубокоуважаемый господин [имя]," },
  slots:[],
  falle:"После запятой следующая строка начинается с БОЛЬШОЙ буквы, потому что дальше идёт новое предложение.",
  c1:[] },

{ id:"2", kreis:1, haeuf:"100 %",
  de:"Einstieg", ru:"Зачин — жалоба получена",
  rahmen:{ de:"Ihre Beschwerde ist bei uns eingegangen.", ru:"Ваша жалоба к нам поступила." },
  slots:[
    { de:"Ihre E-Mail ist bei uns eingetroffen.", ru:"Ваше письмо к нам пришло.", note:"равноценная замена — если в задании речь о письме" },
    { de:"Ihre Anfrage hat uns erreicht.",        ru:"Ваш запрос до нас дошёл.",  note:"равноценная замена — если в задании речь о запросе" }
  ],
  falle:"Твоя неизменная часть. Три варианта равноценны — бери тот, что совпадает со словом из задания.",
  c1:[] },

{ id:"3", kreis:1, haeuf:"100 %", pflicht:true,
  de:"Entschuldigung", ru:"Понимание и извинение",
  rahmen:{ de:"Wir verstehen Ihren Ärger und möchten uns aufrichtig für die entstandenen Unannehmlichkeiten entschuldigen.",
           ru:"Мы понимаем Ваше раздражение и хотели бы искренне извиниться за возникшие неудобства." },
  slots:[
    { de:"Ihre Verärgerung ist nachvollziehbar; für die entstandenen Unannehmlichkeiten bitten wir vielmals um Entschuldigung.",
      ru:"Ваше раздражение понятно; за возникшие неудобства мы приносим глубокие извинения.",
      note:"альтернатива выше регистром — на проверке у корректора, пока НЕ учить. ⚠️ Если выбрать — «bitten» столкнётся с блоком 15" },
    { de:"Für die entstandenen Unannehmlichkeiten bitten wir vielmals um Entschuldigung.",
      ru:"За возникшие неудобства мы приносим глубокие извинения.",
      note:"альтернатива самая короткая — на проверке у корректора, пока НЕ учить" }
  ],
  falle:"Твоя неизменная часть: пишется дословно, целиком, всегда. Две альтернативы — только кандидаты до вердикта корректора.",
  c1:[] },

{ id:"4", kreis:1, haeuf:"89 %",
  de:"Ursache", ru:"Причина",
  rahmen:{ de:"Wie eine eingehende Prüfung ergeben hat, ist es aufgrund [причина] zu den von Ihnen geschilderten Unregelmäßigkeiten gekommen.",
           ru:"Как показала тщательная проверка, из-за [причина] возникли описанные Вами сбои." },
  slots:[
    { joker:true, de:"eines bedauerlichen Zusammentreffens mehrerer ungünstiger Umstände",
      ru:"досадного стечения нескольких неблагоприятных обстоятельств", note:"подходит к ЛЮБОЙ ситуации — если не знаешь, что писать" },
    { de:"eines internen Bearbeitungsfehlers",          ru:"внутренней ошибки при обработке",    note:"ошибка у нас: путаница, не тот товар, счёт, организация" },
    { de:"eines internen Systemfehlers",                ru:"внутреннего системного сбоя",        note:"из твоего шаблона · техника, IT, сайт, счета, автоматы" },
    { de:"eines krankheitsbedingten Personalausfalls",  ru:"отсутствия персонала по болезни",    note:"из твоего шаблона · опоздание, недоделки, сервис недоступен" },
    { de:"eines Lieferengpasses bei unserem Hersteller", ru:"перебоев с поставками у нашего производителя", note:"задержка поставки, недопоставка — особенно если шеф пишет «со стороны производителя»" },
    { de:"eines Produktionsfehlers",                    ru:"производственного брака",            note:"из твоего шаблона · дефект, поломка, повреждение" }
  ],
  falle:"ОДНО правило Genitiv на все шесть причин: aufgrund + eines + (прилагательное на -en) + существительное на -s или -es. Все шесть причин нарочно подобраны мужского или среднего рода, поэтому женских исключений нет. Три причины из шести — твои собственные из исходного шаблона, новых для заучивания три. Если шеф прямо называет причину — бери ту, что ближе к его словам.",
  c1:["Präpositionen mit Genitiv — предлоги с родительным падежом","Partizipialattribut «die von Ihnen geschilderten …» — причастное определение"] },

{ id:"5", kreis:1, haeuf:"14 % в банке · 3 раза из 3 на реальном экзамене",
  de:"Grenze", ru:"Ограничение, отказ",
  rahmen:{ de:"So sehr wir Ihr Anliegen auch nachvollziehen können, müssen wir Sie darauf hinweisen, dass [X].",
           ru:"Как бы мы ни понимали Ваше обращение, мы вынуждены обратить Ваше внимание на то, что [X]." },
  slots:[
    { joker:true, de:"wir Ihre Forderungen in dieser Form leider nicht erfüllen können",
      ru:"мы, к сожалению, не можем удовлетворить Ваши требования в такой форме", note:"универсальный отказ — подходит всегда" },
    { de:"die Ursache außerhalb unseres Verantwortungsbereichs liegt",
      ru:"причина лежит вне нашей зоны ответственности", note:"вина не наша: клиент, третья сторона, неправильное обращение" },
    { de:"Ihre Wünsche über den vertraglich vereinbarten Umfang hinausgehen",
      ru:"Ваши пожелания выходят за рамки согласованного договором объёма", note:"вне договора, лимит исчерпан — дальше часто блок 12" },
    { de:"eine Erledigung bis zu dem von Ihnen genannten Zeitpunkt nicht möglich ist",
      ru:"выполнение к названному Вами моменту невозможно", note:"срок хуже требуемого — реальный срок дальше в блоке 6" }
  ],
  falle:"Придаточное стоит первым, поэтому главное начинается с глагола: müssen wir, а не «wir müssen». В русском порядок слов не меняется, рука пишет wir müssen. Если шеф диктует свою причину отказа — превращение Б (см. «Правила»). Два ограничения — один каркас, второе через und. После этого блока нужен смягчитель: блок 7 (компенсация) или блок 12 (этот раз бесплатно).",
  c1:["Konzessivsatz «so sehr … auch» — уступительное придаточное","Inversion — глагол перед подлежащим"] },

{ id:"6", kreis:1, haeuf:"~75 % (вместе с бывшим блоком «срок»)",
  de:"Abhilfe + Termin", ru:"Что делаем и когда",
  rahmen:{ de:"Selbstverständlich schaffen wir Abhilfe: [действие]",
           ru:"Разумеется, мы примем меры: [действие]" },
  slots:[
    { joker:true, de:"Alle beanstandeten Punkte werden [когда] erledigt.",
      ru:"Все пункты, на которые Вы указали, будут [когда] выполнены.", note:"универсальный: брак, ошибки, недоделки, правки" },
    { de:"Die betreffenden Artikel werden Ihnen [когда] zugesandt.",
      ru:"Соответствующие товары будут Вам [когда] высланы.", note:"товар: замена, недопоставка, задержка заказа. Если это замена брака — перед zugesandt можно добавить kostenfrei (бесплатно)" },
    { de:"Die beanstandete Rechnung wird [когда] korrigiert und der zu viel berechnete Betrag erstattet.",
      ru:"Оспоренный счёт будет [когда] исправлен, а излишне начисленная сумма возвращена.", note:"ошибка в счёте" },
    { de:"Das Problem ist inzwischen behoben.",
      ru:"Проблема тем временем устранена.", note:"ВМЕСТО всего блока, без каркаса — если шеф пишет, что всё уже исправлено" }
  ],
  zeit:{ titel:"Вставка [когда] — по умолчанию unverzüglich",
    items:[
      { joker:true, de:"unverzüglich",                ru:"незамедлительно",           note:"срока в записке нет" },
      { de:"spätestens bis zum 12. Mai",               ru:"самое позднее до 12 мая",   note:"точная дата — предлог bis zum" },
      { de:"spätestens am Mittwoch",                   ru:"самое позднее в среду",     note:"день недели — предлог am" },
      { de:"spätestens Anfang nächster Woche",         ru:"самое позднее в начале следующей недели", note:"расплывчатый срок — БЕЗ предлога" }
    ]},
  falle:"Срок теперь не отдельный блок, а вставка [когда] прямо внутри действия: «Die betreffenden Artikel werden Ihnen spätestens Anfang nächster Woche kostenfrei zugesandt.» Порядок немецкий: сначала КОГДА, потом КАК (TeKaMoLo). Три формы срока — три предлога: дата — bis zum, день недели — am, расплывчато — без предлога. В русском предлог есть везде («до», «в», «в начале»), и рука ставит его туда, где его нет.",
  c1:["Nomen-Verb-Verbindung «Abhilfe schaffen» — принять меры","Passiv — страдательный залог","TeKaMoLo — порядок обстоятельств"] },

{ id:"7", kreis:1, haeuf:"36 %",
  de:"Angebot", ru:"Что даём сверх",
  rahmen:{ de:"Als Zeichen unseres Entgegenkommens bieten wir Ihnen [объект] an.",
           ru:"В знак нашего расположения мы предлагаем Вам [объект]." },
  slots:[
    { joker:true, de:"einen Preisnachlass in Höhe von 20 %", ru:"скидку в размере 20 %", note:"по умолчанию — шеф не уточнил, что давать" },
    { de:"eine Gutschrift in Höhe von 100 €",                ru:"кредит-ноту на сумму 100 €", note:"шеф назвал сумму в евро" }
  ],
  falle:"Если шеф диктует, ЧТО предложить (модель со склада, техника, замену в другом цвете) — его слова идут в дырку по превращению А: einen / ein / eine + Akkusativ. Два предложения в одном письме — ОДИН каркас, два объекта через sowie: «… bieten wir Ihnen ein vergleichbares Modell sowie einen Preisnachlass in Höhe von 20 % an.» anbieten — разделяемый глагол: an уезжает в самый конец.",
  c1:["trennbares Verb — разделяемый глагол","Konnektor «sowie» — а также"] },

{ id:"8", kreis:1, haeuf:"43 %",
  de:"Prävention", ru:"Чтобы не повторилось",
  rahmen:{ de:"Um derartige Vorkommnisse künftig auszuschließen, haben wir bereits entsprechende Maßnahmen eingeleitet: [мера]",
           ru:"Чтобы исключить подобные происшествия в будущем, мы уже инициировали соответствующие меры: [мера]" },
  slots:[
    { joker:true, de:"Sämtliche Abläufe werden grundlegend optimiert.",
      ru:"Все процессы будут основательно оптимизированы.", note:"универсальный — подходит всегда" },
    { de:"Sämtliche Aufträge werden einer zusätzlichen Qualitätskontrolle unterzogen.",
      ru:"Все без исключения заказы проходят дополнительный контроль качества.", note:"брак, не тот товар, недоделки" },
    { de:"Sie werden über jede Terminänderung noch am selben Tag informiert.",
      ru:"Вы будете информироваться о любом переносе срока в тот же день.", note:"жалоба на молчание, плохую связь" },
    { de:"Unsere Mitarbeitenden werden erneut auf die geltenden Verhaltensregeln hingewiesen.",
      ru:"Наши сотрудники будут повторно проинструктированы о действующих правилах поведения.", note:"грубость, поведение персонала" }
  ],
  falle:"aus-ZU-schließen: у разделяемого глагола zu лезет ВНУТРЬ слова. В русском аналога нет. Если места мало — вторую половину можно опустить: каркас уже закрывает пункт шефа.",
  c1:["Infinitivgruppe «um … zu» — инфинитивный оборот","Nomen-Verb-Verbindung «Maßnahmen einleiten»","Nomen-Verb-Verbindung «einer Kontrolle unterziehen»"] },

{ id:"9", kreis:1, haeuf:"100 %", pflicht:true,
  de:"Schluss", ru:"Финал",
  rahmen:{ de:"Wir hoffen darauf, dass Sie trotz dieses Vorfalls auch weiterhin [форма] bleiben.\nUnsere Kunden haben oberste Priorität, und wir sind stets bestrebt, Ihnen den bestmöglichen Service zu bieten. Bei Rückfragen stehen wir Ihnen gerne zur Verfügung.\n\nMit freundlichen Grüßen\n[Vorname Name]",
           ru:"Мы надеемся на то, что Вы несмотря на этот случай и впредь останетесь [форма].\nНаши клиенты имеют высший приоритет, и мы всегда стремимся предложить Вам наилучший сервис. При дополнительных вопросах мы охотно в Вашем распоряжении.\n\nС уважением\n[Имя Фамилия]" },
  slots:[
    { de:"unsere treue Kundin",  ru:"нашей верной клиенткой",   note:"адресат — женщина" },
    { de:"unser treuer Kunde",   ru:"нашим верным клиентом",    note:"адресат — мужчина" },
    { de:"unsere treuen Kunden", ru:"нашими верными клиентами", note:"адресат — фирма" },
    { de:"Angesichts unserer langjährigen und vertrauensvollen Zusammenarbeit hoffen wir darauf, dass Sie …",
      ru:"Ввиду нашего многолетнего и доверительного сотрудничества мы надеемся на то, что Вы …",
      note:"ЗАЧИН вместо «Wir hoffen darauf» — если шеф пишет «давний клиент», «langjährige Beziehung» (10 заданий из 56)" }
  ],
  falle:"Твоя неизменная часть. После bleiben падеж НЕ меняется, остаётся Nominativ: unser treuER KundE. В русском «останетесь клиентОМ» — творительный, рука тянет в косвенный. В зачине Angesichts … стоит на первом месте, поэтому hoffen wir, а не wir hoffen.",
  c1:["Präposition mit Genitiv «angesichts» — ввиду"] },

/* ---------- ВТОРОЙ КРУГ — каждый блок одно готовое предложение ---------- */

{ id:"10", kreis:2, haeuf:"11 %",
  de:"Bedauern", ru:"Отдельное сожаление",
  rahmen:{ de:"Dass Sie diese Erfahrung machen mussten, bedauern wir außerordentlich.",
           ru:"О том, что Вам пришлось столкнуться с этим, мы чрезвычайно сожалеем." },
  slots:[],
  falle:"Придаточное первым, поэтому bedauern вторым, wir третьим. По-русски порядок обратный. Wir bedauern, dass… — тоже верно, но за инверсию дают балл.",
  c1:["Vorfeld-Nebensatz — придаточное в первой позиции"] },

{ id:"11", kreis:2, haeuf:"4 %",
  de:"Schadensübernahme", ru:"Берём ущерб на себя",
  rahmen:{ de:"Für den verursachten Schaden kommen wir in vollem Umfang auf.",
           ru:"За причинённый ущерб мы отвечаем в полном объёме." },
  slots:[],
  falle:"für etwas aufkommen — устойчивое выражение, дословно не собирается; приставка auf уходит в конец. Ставится сразу после блока 4.",
  c1:["trennbares Verb — разделяемый глагол"] },

{ id:"12", kreis:2, haeuf:"4 % · реальный экзамен друга",
  de:"Zahlungspflicht", ru:"Этот раз бесплатно, дальше платно",
  rahmen:{ de:"Ausnahmsweise erbringen wir diese Leistung noch kostenfrei. Für jede weitere Inanspruchnahme müssten wir Ihnen die anfallenden Kosten jedoch in Rechnung stellen.",
           ru:"В порядке исключения мы ещё оказываем эту услугу бесплатно. Однако за каждое дальнейшее обращение нам пришлось бы выставить Вам возникающие расходы в счёт." },
  slots:[
    { de:"…müssten wir Ihnen jedoch 200 € in Rechnung stellen.", ru:"…однако нам пришлось бы выставить Вам 200 €.", note:"шеф назвал сумму — ставится вместо die anfallenden Kosten" }
  ],
  falle:"müssten, а не müssen — Konjunktiv II: без него фраза про деньги звучит ультиматумом. Смягчитель «этот раз бесплатно» стоит ПЕРЕД. etwas in Rechnung stellen — устойчивое выражение.",
  c1:["Konjunktiv II — сослагательное наклонение","Nomen-Verb-Verbindung «in Rechnung stellen»","Nominalstil «Inanspruchnahme»"] },

{ id:"13", kreis:2, haeuf:"5 %",
  de:"Prüfung", ru:"Дело ещё изучается",
  rahmen:{ de:"Der Sachverhalt wird derzeit intern geprüft; über das Ergebnis informieren wir Sie zeitnah.",
           ru:"Обстоятельства дела в настоящее время проверяются внутри компании; о результате мы сообщим Вам в ближайшее время." },
  slots:[],
  falle:"Нужен, когда шеф просит написать, что решения ещё нет. derzeit, а не jetzt: jetzt в деловом письме звучит разговорно.",
  c1:["Passiv — страдательный залог"] },

{ id:"14", kreis:2, haeuf:"4 раза из 56",
  de:"Konditional ohne «wenn»", ru:"Если дата не подойдёт",
  rahmen:{ de:"Sollte Ihnen dieser Termin nicht zusagen, teilen Sie uns dies bitte zeitnah mit.",
           ru:"Если эта дата Вам не подойдёт, сообщите нам об этом, пожалуйста, в ближайшее время." },
  slots:[],
  falle:"Условие БЕЗ союза wenn: sollte выходит на первое место. В русском союз обязателен, поэтому по аналогии не выводится — учится целиком. Ставится сразу после блока 6, когда дату предлагаем мы.",
  c1:["Konditionalsatz ohne «wenn» — условное придаточное без союза"] },

{ id:"15", kreis:2, haeuf:"7 %",
  de:"Rückfrage", ru:"Что нужно от клиента",
  rahmen:{ de:"Wir bitten Sie um eine kurze Rückmeldung, ob Sie mit diesem Vorschlag einverstanden sind.",
           ru:"Мы просим Вас о кратком ответе, согласны ли Вы с этим предложением." },
  slots:[
    { de:"einige Fotos der beschädigten Ware", ru:"несколько фотографий повреждённого товара", note:"шеф просит доказательства — вместо eine kurze Rückmeldung…" }
  ],
  falle:"jemanden um etwas bitten — Akkusativ в обеих позициях: Sie (кого) um eine Rückmeldung (о чём).",
  c1:[] },

{ id:"16", kreis:2, haeuf:"3 раза из 56 · реальный экзамен",
  de:"Selbstkritik", ru:"Упрёк себе за прошлое",
  rahmen:{ de:"Sie hätten von uns unaufgefordert eine Zwischennachricht erhalten müssen.",
           ru:"Вы должны были получить от нас промежуточное сообщение без напоминания." },
  slots:[],
  falle:"Konjunktiv II Perfekt с модальным глаголом: двойной инфинитив в конце (erhalten müssen), hätten на втором месте. По правилу не выводится — учится целиком. Нужен, когда клиента вовремя не информировали.",
  c1:["Konjunktiv II Perfekt mit Modalverb"] }
];

/* Порядок сборки письма */
const REIHENFOLGE = ["1","2","3","16","10","4","11","5","12","13","6","14","7","8","15","9"];

/* Четыре формы письма — выбери по записке, потом добавь/убери блоки */
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

/* Три превращения: слова шефа из записки → в дырку каркаса */
const TRANSFORM = [
  { id:"А", titel:"Шеф диктует, ЧТО предложить → блок 7",
    regel:"Из записки берёшь существительное с прилагательным и ставишь в Akkusativ: einen (м.р.) / ein (ср.р.) / eine (ж.р.). Слово dem Lagerbestand меняешь на unserem Lagerbestand. Глагол из записки выбрасываешь — в каркасе уже есть bieten … an.",
    bsp:[
      { notiz:"vergleichbares Modell aus Lagerbestand anbieten", de:"ein vergleichbares Modell aus unserem Lagerbestand", ru:"сопоставимую модель из нашего складского запаса" },
      { notiz:"Techniker kostenfrei zur Einweisung",             de:"eine kostenfreie Einweisung durch unseren Techniker", ru:"бесплатный инструктаж нашим техником" },
      { notiz:"Ersatz in anderen Farben vorschlagen",            de:"einen Ersatz in einer anderen Farbe", ru:"замену в другом цвете" }
    ]},
  { id:"Б", titel:"Шеф диктует, В ЧЁМ отказать → блок 5",
    regel:"Фразу из записки превращаешь в придаточное после dass: глагол уходит в самый конец. «Клиент» меняешь на «Sie» — ты пишешь ему самому.",
    bsp:[
      { notiz:"Garantie ist abgelaufen",               de:"die Garantie bereits abgelaufen ist", ru:"гарантия уже истекла" },
      { notiz:"Kosten der Überprüfung trägt der Kunde", de:"die Kosten der Überprüfung von Ihnen zu tragen sind", ru:"расходы на проверку несёте Вы" },
      { notiz:"Rabatt ablehnen",                        de:"wir Ihre Forderungen in dieser Form leider nicht erfüllen können", ru:"мы, к сожалению, не можем удовлетворить Ваши требования в такой форме — это джокер, превращать не нужно" }
    ]},
  { id:"В", titel:"Шеф диктует СРОК → вставка [когда] в блоке 6",
    regel:"Перед сроком ставишь spätestens (самое позднее). Дальше три формы: точная дата — bis zum, день недели — am, расплывчатый срок — без предлога. Если шеф пишет «frühestens» (не раньше) — ставишь frühestens am.",
    bsp:[
      { notiz:"Nachlieferung bis 12.05.",   de:"spätestens bis zum 12. Mai",         ru:"самое позднее до 12 мая" },
      { notiz:"Mittwochmorgen",             de:"spätestens am Mittwochmorgen",       ru:"самое позднее в среду утром" },
      { notiz:"Anfang nächster Woche",      de:"spätestens Anfang nächster Woche",   ru:"самое позднее в начале следующей недели" },
      { notiz:"Nachlieferung frühestens 12.05.", de:"frühestens am 12. Mai",      ru:"не раньше 12 мая" }
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
  { de:"die Rechnung korrigieren", ru:"исправить счёт", blk:"6" },
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
    text:"В каждой дырке есть вариант с пометкой ДЖОКЕР. Он подходит к любой ситуации — менее точно, зато без риска. На экзамене пустая дырка или сочинённая на ходу фраза хуже джокера.",
    de:"", ru:"" },
  { titel:"Шеф продиктовал — бери его слова",
    text:"Если в записке сказано, что именно предложить, в чём отказать или какой срок назвать, — выученный вариант не нужен. Слова шефа вставляются в дырку каркаса по одному из трёх превращений (А, Б, В). Целиком предложение из записки не переписывается никогда — только слова в твой каркас.",
    de:"", ru:"" },
  { titel:"Два ограничения — один каркас, союз und",
    text:"Каркас блока 5 не повторяется. Второе придаточное цепляется через und, dass не повторяется, глагол во втором придаточном тоже уходит в конец.",
    de:"So sehr wir Ihr Anliegen auch nachvollziehen können, müssen wir Sie darauf hinweisen, dass die Ursache außerhalb unseres Verantwortungsbereichs liegt und die Kosten der Überprüfung daher von Ihnen zu tragen sind.",
    ru:"Как бы мы ни понимали Ваше обращение, мы вынуждены обратить Ваше внимание на то, что причина лежит вне нашей зоны ответственности и расходы на проверку поэтому несёте Вы." },
  { titel:"Два предложения — один каркас, союз sowie",
    text:"Каркас блока 7 не повторяется. Два объекта соединяются через sowie («а также»), оба в Akkusativ.",
    de:"Als Zeichen unseres Entgegenkommens bieten wir Ihnen ein vergleichbares Modell aus unserem Lagerbestand sowie einen Preisnachlass in Höhe von 20 % an.",
    ru:"В знак нашего расположения мы предлагаем Вам сопоставимую модель из нашего складского запаса, а также скидку в размере 20 %." },
  { titel:"Блоки 4 и 13 вместе не ставятся",
    text:"Блок 4 говорит «проверка показала, что причина — …». Блок 13 говорит «дело ещё проверяется». Вместе они противоречат друг другу. Если шеф пишет «Umstände klären», «wird geprüft» — ставишь 13 без 4.",
    de:"", ru:"" },
  { titel:"После отказа — смягчитель",
    text:"За блоком 5 обязательно идёт либо блок 7 (компенсация), либо блок 12 (этот раз бесплатно). Голый отказ режет критерий Kommunikative Gestaltung.",
    de:"", ru:"" },
  { titel:"Одно слово — один раз на письмо",
    text:"Блоки подобраны так, чтобы в собранном письме значимые слова не повторялись. Повтор снижает оценку по критерию Spektrum sprachlicher Mittel. Проверено автоматически на всех 56 заданиях. Менять формулировку одного блока, не проверив соседние, нельзя.",
    de:"", ru:"" },
  { titel:"Мало места на бланке",
    text:"Сокращается в таком порядке: вторая половина блока 8 → блок 10 → среднее предложение финала. Блоки 1, 2, 3, 4 и 9 не трогаются никогда.",
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
    text:"Разнообразие и уровень конструкций: Genitiv, Passiv, Konjunktiv II, инфинитивные обороты, уступительное придаточное, инверсия. Повтор одного слова или конструкции снижает оценку." }
];

/* Вырезанное — справка, НЕ учить */
const RESERVE = [
  { blk:"4 Ursache", de:"einer technischen Störung in unserem System", ru:"технического сбоя в нашей системе — заменено твоим «internen Systemfehlers»" },
  { blk:"4 Ursache", de:"einer Verwechslung bei der Kommissionierung", ru:"путаницы при комплектации заказа — покрыто «internen Bearbeitungsfehlers»" },
  { blk:"4 Ursache", de:"eines Versäumnisses in unserer Kundenkommunikation", ru:"упущения в коммуникации с клиентами — покрыто блоком 16 + причиной «Personalausfall»" },
  { blk:"4 Ursache", de:"Nach eingehender Prüfung des Sachverhalts müssen wir Ihnen mitteilen, dass der Vorfall auf [причина в Akkusativ] zurückzuführen ist.", ru:"После тщательной проверки обстоятельств дела мы должны сообщить Вам, что происшествие вызвано [причина]. — вторая конструкция причины" },
  { blk:"5 Grenze", de:"der Mangel nachweislich auf eine unsachgemäße Handhabung zurückzuführen ist", ru:"неисправность доказуемо вызвана ненадлежащим обращением" },
  { blk:"5 Grenze", de:"es bei der Beschaffung der Ersatzteile zu Verzögerungen kommen kann", ru:"при закупке запчастей могут возникнуть задержки" },
  { blk:"5 Grenze", de:"Für Ihren Unmut bringen wir Ihnen vollstes Verständnis entgegen. Gleichwohl müssen wir Sie darauf hinweisen, dass …", ru:"Мы в полной мере понимаем Ваше недовольство. Тем не менее мы вынуждены… — старый каркас v3, повторял блок 3" },
  { blk:"6 Abhilfe", de:"Einer unserer Servicetechniker wird die Mängel vor Ort fachgerecht beheben.", ru:"Один из наших сервисных техников устранит недостатки на месте по всем правилам." },
  { blk:"6 Abhilfe", de:"im Laufe dieser Woche · bis heute Nachmittag", ru:"в течение этой недели · до сегодняшнего вечера — расплывчатые сроки, без предлога" },
  { blk:"7 Angebot", de:"Um Ihnen dennoch entgegenzukommen, bieten wir Ihnen … an.", ru:"Чтобы всё же пойти Вам навстречу, мы предлагаем Вам … — зачин после отказа" },
  { blk:"7 Angebot", de:"den Verzicht auf die vereinbarte Zusatzgebühr", ru:"отказ от согласованной дополнительной платы" },
  { blk:"7 Angebot", de:"die Beauftragung eines Partnerunternehmens", ru:"привлечение партнёрской компании" },
  { blk:"8 Prävention", de:"Unser Team wird personell verstärkt.", ru:"Наша команда будет усилена по составу." },
  { blk:"8 Prävention", de:"Ein verantwortlicher Mitarbeiter trägt künftig Sorge für die Koordination sämtlicher Aufträge.", ru:"Ответственный сотрудник будет впредь отвечать за координацию всех заказов." },
  { blk:"9 Schluss", de:"Ihre Bestellung trotz dieser Verzögerung aufrechterhalten", ru:"сохраните Ваш заказ несмотря на эту задержку — если клиент грозит отменой" },
  { blk:"9 Schluss", de:"von einer Kündigung des Vertrags absehen", ru:"откажетесь от расторжения договора — если клиент грозит расторжением" },
  { blk:"15 Rückfrage", de:"Ihre Bestätigung des vorgeschlagenen Termins", ru:"Ваше подтверждение предложенной даты" }
];
