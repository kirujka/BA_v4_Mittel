/* Beschwerdeantwort — данные картотеки, версия 3
   Deutsch-Test für den Beruf B2 · часть «Lesen und Schreiben»
   База: 56 заданий (53 тренировочных + 3 реальных экзаменационных)
   Источник истины: claude/Beschwerde_Konstruktor_v3.md в проекте «В2 повтор»

   ПРАВИЛО: каждая немецкая единица сопровождается русским переводом.

   Структура блока:
     id        — ярлык блока (B1…B13 ядро, D1–D2 фикс. добавки, O1–O3 необязательные)
     kind      — "kern" ядро | "fix" фиксированная добавка | "opt" необязательная
     pos       — место в порядке сборки письма
     de / ru   — название блока
     haeuf     — в скольких процентах заданий сработал
     rahmen    — каркас: {de, ru}
     slots     — подстановки: [{de, ru, note}]
     falle     — ловушка, по-русски
     c1        — тренируемые конструкции C1
*/

const BLOECKE = [

/* ─────────── ЯДРО ─────────── */

{
  id:"B1", kind:"kern", pos:1, haeuf:"100 %",
  de:"Anrede", ru:"Обращение",
  rahmen:{
    de:"Sehr geehrte Frau [Name],  /  Sehr geehrter Herr [Name],",
    ru:"Глубокоуважаемая госпожа [имя], / Глубокоуважаемый господин [имя],"
  },
  slots:[],
  falle:"Если после запятой идёт продолжение того же предложения — следующая строка с маленькой буквы. У нас дальше новое предложение, поэтому большая буква верна.",
  c1:[]
},

{
  id:"B2", kind:"kern", pos:2, haeuf:"100 %",
  de:"Einstieg + Entschuldigung", ru:"Вступление и извинение",
  rahmen:{
    de:"Ihre Beschwerde ist bei uns eingegangen. Wir verstehen Ihren Ärger und möchten uns aufrichtig für die entstandenen Unannehmlichkeiten entschuldigen.",
    ru:"Ваша жалоба к нам поступила. Мы понимаем Ваше раздражение и хотели бы искренне извиниться за возникшие неудобства."
  },
  slots:[
    {de:"Ihre Beschwerde ist bei uns eingegangen.", ru:"Ваша жалоба к нам поступила.", note:"зачин 1"},
    {de:"Ihre E-Mail ist bei uns eingetroffen.", ru:"Ваше письмо к нам пришло.", note:"зачин 2"},
    {de:"Ihre Anfrage hat uns erreicht.", ru:"Ваш запрос до нас дошёл.", note:"зачин 3"}
  ],
  falle:"Неизменяемый блок. Три зачина взаимозаменяемы, остальное пишется дословно.",
  c1:[]
},

{
  id:"B3", kind:"kern", pos:3, haeuf:"11 %",
  de:"Bedauern", ru:"Второе, конкретное сожаление",
  rahmen:{
    de:"Dass [X], bedauern wir außerordentlich.",
    ru:"О том, что [X], мы чрезвычайно сожалеем."
  },
  slots:[
    {de:"die von Ihnen beanstandete Lieferung nicht zu Ihrer Zufriedenheit ausgefallen ist",
     ru:"оспариваемая Вами поставка не оправдала Ваших ожиданий", note:"общий случай"},
    {de:"Sie über die Verzögerung nicht rechtzeitig informiert wurden",
     ru:"Вас своевременно не проинформировали о задержке", note:"провал коммуникации"},
    {de:"es bei der Bearbeitung Ihres Auftrags zu Verzögerungen gekommen ist",
     ru:"при обработке Вашего заказа возникли задержки", note:"срыв сроков"}
  ],
  falle:"Придаточное стоит первым, поэтому глагол bedauern (сожалеем) идёт вторым, а wir (мы) третьим. По-русски порядок обратный — «мы сожалеем, что…». Рука напишет Wir bedauern, dass… — тоже верно, но за инверсию дают балл.",
  c1:["Vorfeld-Nebensatz — придаточное в первой позиции","Partizipialattribut — причастное определение"]
},

{
  id:"B4", kind:"kern", pos:4, haeuf:"89 %",
  de:"Ursache", ru:"Причина",
  rahmen:{
    de:"Wie unsere internen Recherchen ergeben haben, ist es aufgrund [причина в Genitiv] zu den von Ihnen geschilderten Mängeln gekommen.",
    ru:"Как показали наши внутренние проверки, из-за [причина] возникли описанные Вами недостатки."
  },
  slots:[],
  ursachen:true,
  falle:"В мужском и среднем роде Genitiv требует -s / -es НА САМОМ существительном: Personalausfalls, Lieferengpasses, Materialfehlers, Versehens, Versäumnisses. В женском роде (Störung, Verwechslung) ничего не добавляется.",
  c1:["Präpositionen mit Genitiv — предлоги с родительным падежом"]
},

{
  id:"B5", kind:"kern", pos:8, haeuf:"50 %",
  de:"Abhilfe", ru:"Что делаем сейчас",
  rahmen:{
    de:"Selbstverständlich werden wir umgehend Abhilfe schaffen: [действие]",
    ru:"Разумеется, мы незамедлительно примем меры к устранению: [действие]"
  },
  slots:[
    {de:"Die fehlenden Artikel werden Ihnen unverzüglich nachgeliefert.",
     ru:"Недостающие товары будут Вам незамедлительно допоставлены."},
    {de:"Ein einwandfreier Ersatz wird Ihnen kostenfrei zugesandt.",
     ru:"Безупречная замена будет Вам бесплатно выслана."},
    {de:"Die beanstandete Rechnung wird korrigiert und der zu viel berechnete Betrag umgehend erstattet.",
     ru:"Оспоренный счёт будет исправлен, а излишне начисленная сумма немедленно возвращена."},
    {de:"Einer unserer Servicetechniker wird die Mängel vor Ort fachgerecht beheben.",
     ru:"Один из наших сервисных техников устранит недостатки на месте по всем правилам."},
    {de:"Die ausstehenden Arbeiten werden von einem zusätzlichen Team zeitnah nachgeholt.",
     ru:"Невыполненные работы будут в ближайшее время доделаны дополнительной бригадой."},
    {de:"Die von Ihnen genannten Fehler werden noch heute korrigiert.",
     ru:"Названные Вами ошибки будут исправлены ещё сегодня.", note:"универсальный — добавлен по итогам стресс-теста"}
  ],
  falle:"Все действия — Passiv Präsens (страдательный залог): werden + Partizip II в самом конце. По-русски сказал бы «мы Вам вышлем»; в немецком деловом письме нейтральнее «будет Вам выслано» — исполнитель не называется.",
  c1:["Nomen-Verb-Verbindung «Abhilfe schaffen» — принять меры к устранению","Passiv — страдательный залог"]
},

{
  id:"B6", kind:"kern", pos:9, haeuf:"25 %",
  de:"Termin", ru:"Срок",
  rahmen:{
    de:"Die [что именно] erfolgt spätestens [срок].",
    ru:"[Что именно] состоится самое позднее [срок]."
  },
  slots:[
    {de:"die Nachlieferung", ru:"допоставка", note:"что именно"},
    {de:"die Nachbesserung", ru:"устранение недостатков", note:"что именно"},
    {de:"die Fertigstellung", ru:"завершение работ", note:"что именно"},
    {de:"die Reparatur", ru:"ремонт", note:"что именно"},
    {de:"bis zum 12. Mai", ru:"до 12 мая", note:"срок — точная дата, С предлогом bis zum"},
    {de:"Anfang nächster Woche", ru:"в начале следующей недели", note:"срок — наречие, предлог ВЫПАДАЕТ"},
    {de:"im Laufe dieser Woche", ru:"в течение этой недели", note:"срок — наречие, предлог выпадает"},
    {de:"bis heute Nachmittag", ru:"до сегодняшнего дня после обеда", note:"срок — наречие, предлог выпадает"}
  ],
  falle:"Две формы срока. Точная дата идёт с предлогом: erfolgt spätestens BIS ZUM 12. Mai. Наречие времени — без предлога: erfolgt spätestens ANFANG NÄCHSTER WOCHE. Шеф даёт то одно, то другое.",
  c1:["Nominalstil — именной стиль"]
},

{
  id:"B7", kind:"kern", pos:5, haeuf:"14 %",
  de:"Grenze", ru:"Ограничение, отказ, новые условия",
  rahmen:{
    de:"Für Ihren Unmut bringen wir Ihnen vollstes Verständnis entgegen. Gleichwohl müssen wir Sie darauf hinweisen, dass [X].",
    ru:"Мы в полной мере понимаем Ваше недовольство. Тем не менее мы вынуждены обратить Ваше внимание на то, что [X]."
  },
  slots:[
    {de:"die Gewährleistungsfrist für das Gerät bereits abgelaufen ist",
     ru:"срок гарантийных обязательств на прибор уже истёк", note:"a — гарантия истекла"},
    {de:"der Mangel nachweislich auf eine unsachgemäße Handhabung zurückzuführen ist",
     ru:"неисправность доказуемо вызвана ненадлежащим обращением", note:"b — виноват клиент"},
    {de:"die von Ihnen gewünschten Anpassungen über den vertraglich vereinbarten Leistungsumfang hinausgehen",
     ru:"желаемые Вами изменения выходят за рамки согласованного договором объёма услуг", note:"c — вне договора"},
    {de:"die Kosten der erneuten Überprüfung nicht von uns übernommen werden können",
     ru:"расходы на повторную проверку не могут быть покрыты нами", note:"d — платит клиент"},
    {de:"der vertraglich vereinbarte Leistungsumfang damit ausgeschöpft ist",
     ru:"согласованный договором объём услуг тем самым исчерпан", note:"e — лимит исчерпан, дальше блок B8"},
    {de:"eine Lieferung bis zu dem von Ihnen genannten Termin nicht möglich ist",
     ru:"поставка к названному Вами сроку невозможна", note:"f — срок хуже требуемого, дальше блок B6"},
    {de:"wir Ihre Forderungen in dieser Form leider nicht erfüllen können",
     ru:"мы, к сожалению, не можем удовлетворить Ваши требования в такой форме", note:"g — отказ по всему пакету"},
    {de:"ein Preisnachlass in der von Ihnen geforderten Höhe nicht möglich ist",
     ru:"скидка в требуемом Вами размере невозможна", note:"h — отказ в скидке"},
    {de:"es bei der Beschaffung der Ersatzteile zu Verzögerungen kommen kann",
     ru:"при закупке запчастей могут возникнуть задержки", note:"i — предупредить о возможной задержке"}
  ],
  falle:"После блока B7 ВСЕГДА идёт блок B9. Отказ без встречного предложения режет критерий Kommunikative Gestaltung (коммуникативное оформление). Если ограничений два — каркас НЕ повторяется, второе придаточное цепляется через und, слово dass не повторяется.",
  c1:["Nomen-Verb-Verbindung «Verständnis entgegenbringen» — проявлять понимание",
      "Konnektor «gleichwohl» — тем не менее",
      "Passiversatzform «zurückzuführen sein» — быть вызванным чем-либо"]
},

{
  id:"B8", kind:"kern", pos:6, haeuf:"4 %",
  de:"Zahlungspflicht", ru:"Дальше платно",
  rahmen:{
    de:"Diesen Durchgang übernehmen wir selbstverständlich noch kostenfrei. Für [X] müssten wir Ihnen die anfallenden Kosten in Rechnung stellen.",
    ru:"Этот раз мы, само собой, ещё берём на себя бесплатно. За [X] нам пришлось бы выставить Вам возникающие расходы в счёт."
  },
  slots:[
    {de:"jede weitere Änderung", ru:"каждое дальнейшее изменение"},
    {de:"jeden weiteren Einsatz unserer Techniker", ru:"каждый дальнейший выезд наших техников"},
    {de:"jede zusätzliche Nachbesserung", ru:"каждое дополнительное устранение недостатков"},
    {de:"…müssten wir Ihnen 200 € in Rechnung stellen.", ru:"…нам пришлось бы выставить Вам 200 €.", note:"если шеф назвал сумму"}
  ],
  falle:"etwas in Rechnung stellen (выставить что-либо в счёт) — устойчивое выражение, дословно не собирается. müssten (пришлось бы) вместо müssen (должны) — Konjunktiv II; без него фраза про деньги звучит ультиматумом. Подсластитель ставится ПЕРЕД, иначе выходит хамство.",
  c1:["Konjunktiv II — сослагательное наклонение","Nomen-Verb-Verbindung «in Rechnung stellen»"]
},

{
  id:"B9", kind:"kern", pos:10, haeuf:"36 %",
  de:"Angebot", ru:"Что мы даём взамен",
  rahmen:{
    de:"[зачин] bieten wir Ihnen [объект в Akkusativ] an.",
    ru:"[зачин] мы предлагаем Вам [объект]."
  },
  slots:[
    {de:"Als Zeichen unseres Entgegenkommens", ru:"В знак нашего расположения", note:"зачин · обычная компенсация · 14 раз"},
    {de:"Um Ihnen dennoch entgegenzukommen,", ru:"Чтобы всё же пойти Вам навстречу,", note:"зачин · сразу после отказа · 4 раза"},
    {de:"Ersatzweise", ru:"В качестве замены", note:"зачин · замена товара · 4 раза"},
    {de:"Als wirtschaftlich vertretbare Alternative", ru:"В качестве экономически приемлемой альтернативы", note:"зачин · клиент требует слишком много · 2 раза"},
    {de:"Aus Kulanz ersetzen wir Ihnen [X] kostenfrei.", ru:"В порядке доброй воли мы бесплатно заменяем Вам [X].", note:"зачин 5 · ДРУГОЙ ГЛАГОЛ, для второго предложения в том же письме · 3 раза"},

    {de:"einen Preisnachlass in Höhe von 20 % auf Ihre nächste Rechnung", ru:"скидку в размере 20 % на Ваш следующий счёт", note:"объект"},
    {de:"eine Gutschrift in Höhe von 100 €", ru:"кредит-ноту на сумму 100 €", note:"объект"},
    {de:"die vollständige Erstattung des zu viel berechneten Betrags", ru:"полный возврат излишне начисленной суммы", note:"объект"},
    {de:"eine kostenfreie Nachbesserung durch unser Fachpersonal", ru:"бесплатное устранение недостатков нашими специалистами", note:"объект"},
    {de:"eine kostenfreie Einweisung durch unseren Servicetechniker", ru:"бесплатный инструктаж нашим сервисным техником", note:"объект"},
    {de:"ein vergleichbares Modell aus unserem aktuellen Lagerbestand", ru:"сопоставимую модель из нашего текущего складского запаса", note:"объект"},
    {de:"die gleiche Ausführung in einer anderen Farbe", ru:"то же исполнение в другом цвете", note:"объект"},
    {de:"eine kostenfreie Wiederholung der Leistung", ru:"бесплатное повторное оказание услуги", note:"объект · добавлен по итогам стресс-теста"},
    {de:"den Erlass der Gebühren für eine Woche", ru:"списание платы за неделю", note:"объект · добавлен по итогам стресс-теста"},
    {de:"den Verzicht auf die vereinbarte Zusatzgebühr", ru:"отказ от согласованной дополнительной платы", note:"объект · добавлен по итогам стресс-теста"},
    {de:"die Beauftragung eines Partnerunternehmens", ru:"привлечение партнёрской компании", note:"объект · добавлен по итогам стресс-теста"}
  ],
  falle:"anbieten (предлагать) — разделяемый глагол, приставка an уезжает в самый конец, за объект. Если блок нужен дважды в одном письме — второе предложение идёт через пятый зачин с глаголом ersetzen, иначе два одинаковых «bieten wir Ihnen … an» подряд режут критерий Spektrum. Сумму и процент, названные шефом, берём из записки дословно.",
  c1:["trennbares Verb — разделяемый глагол"]
},

{
  id:"B10", kind:"kern", pos:11, haeuf:"43 %",
  de:"Prävention", ru:"Чтобы не повторилось",
  rahmen:{
    de:"Um derartige Vorkommnisse künftig auszuschließen, haben wir bereits entsprechende Maßnahmen eingeleitet: [мера]",
    ru:"Чтобы исключить подобные происшествия в будущем, мы уже инициировали соответствующие меры: [мера]"
  },
  slots:[
    {de:"Sämtliche Aufträge werden vor der Auslieferung einer zusätzlichen Qualitätskontrolle unterzogen.",
     ru:"Все без исключения заказы перед отгрузкой проходят дополнительный контроль качества.", note:"14 раз"},
    {de:"Unser Team wird personell verstärkt.",
     ru:"Наша команда будет усилена по составу.", note:"4 раза"},
    {de:"Künftig werden Sie über jede Terminänderung unaufgefordert und noch am selben Tag informiert.",
     ru:"Впредь Вы будете информироваться о любом переносе срока без напоминания и в тот же день.", note:"3 раза · для провала коммуникации"},
    {de:"Unsere Mitarbeitenden werden erneut auf die geltenden Verhaltensregeln hingewiesen.",
     ru:"Наши сотрудники будут повторно проинструктированы о действующих правилах поведения.", note:"3 раза · добавлен по итогам стресс-теста · для грубости и поведения персонала"},
    {de:"Ein verantwortlicher Mitarbeiter trägt künftig Sorge für die Koordination sämtlicher Aufträge.",
     ru:"Ответственный сотрудник будет впредь отвечать за координацию всех заказов.", note:"2 раза"}
  ],
  falle:"aus-ZU-schließen (исключить) — у разделяемого глагола частица zu лезет ВНУТРЬ, между приставкой и корнем; аналога в русском нет. auf etwas hinweisen (указать на что-либо) — тоже разделяемый, в пассиве werden … hingewiesen. Если места нет, слот опускается: первая половина уже закрывает пункт шефа.",
  c1:["Infinitivgruppe «um … zu» — инфинитивный оборот",
      "Nomen-Verb-Verbindung «Maßnahmen einleiten» — инициировать меры",
      "Nomen-Verb-Verbindung «einer Kontrolle unterziehen» — подвергать контролю",
      "Nomen-Verb-Verbindung «Sorge tragen für» — заботиться о"]
},

{
  id:"B11", kind:"kern", pos:12, haeuf:"7 %",
  de:"Rückfrage", ru:"Что нужно от клиента",
  rahmen:{
    de:"Wir bitten Sie um [объект в Akkusativ].",
    ru:"Мы просим Вас о [объект]."
  },
  slots:[
    {de:"einige Fotos der beschädigten Ware", ru:"несколько фотографий повреждённого товара"},
    {de:"einen kurzen Schadensbericht", ru:"краткий акт о повреждении"},
    {de:"eine kurze Rückmeldung, ob Ihnen dieser Vorschlag zusagt", ru:"краткий ответ, устраивает ли Вас это предложение"},
    {de:"Ihre Bestätigung des vorgeschlagenen Termins", ru:"Ваше подтверждение предложенной даты"}
  ],
  falle:"Каркас намеренно короткий — четыре слова, ошибиться негде. jemanden um etwas bitten (просить кого-либо о чём-либо) требует Akkusativ в обеих позициях.",
  c1:[]
},

{
  id:"B12", kind:"kern", pos:13, haeuf:"100 %",
  de:"Schluss", ru:"Финал",
  rahmen:{
    de:"Wir hoffen darauf, dass Sie [X].\nUnsere Kunden haben oberste Priorität, und wir sind stets bestrebt, Ihnen den bestmöglichen Service zu bieten. Bei Rückfragen stehen wir Ihnen gerne zur Verfügung.\n\nMit freundlichen Grüßen\n[Vorname Name]",
    ru:"Мы надеемся на то, что Вы [X].\nНаши клиенты имеют высший приоритет, и мы всегда стремимся предложить Вам наилучший сервис. При дополнительных вопросах мы охотно в Вашем распоряжении.\n\nС уважением\n[Имя Фамилия]"
  },
  slots:[
    {de:"Angesichts unserer langjährigen und stets vertrauensvollen Zusammenarbeit hoffen wir darauf, dass Sie …",
     ru:"Ввиду нашего многолетнего и неизменно доверительного сотрудничества мы надеемся на то, что Вы …",
     note:"зачин · сработал 10 раз из 56 — чаще пяти ядровых блоков"},
    {de:"trotz dieses Vorfalls auch weiterhin unsere treue Kundin bleiben",
     ru:"несмотря на этот случай и впредь останетесь нашей верной клиенткой", note:"женщина"},
    {de:"trotz dieses Vorfalls auch weiterhin unser treuer Kunde bleiben",
     ru:"…нашим верным клиентом", note:"мужчина — Nominativ! не «unseren treuen Kunden»"},
    {de:"trotz dieses Vorfalls auch weiterhin unsere treuen Kunden bleiben",
     ru:"…нашими верными клиентами", note:"фирма"},
    {de:"Ihre Bestellung trotz dieser Verzögerung aufrechterhalten",
     ru:"сохраните Ваш заказ несмотря на эту задержку", note:"клиент грозит отменой"},
    {de:"von einer Kündigung des Vertrags absehen",
     ru:"откажетесь от расторжения договора", note:"клиент грозит расторжением"}
  ],
  falle:"Единственное место в каркасе, где надо смотреть на пол адресата. Три формы учить одной строкой. Короткая версия при четырёх и более пунктах шефа: среднее предложение выбрасывается.",
  c1:[]
},

{
  id:"B13", kind:"kern", pos:7, haeuf:"5 %",
  de:"Prüfung", ru:"Дело изучается",
  rahmen:{
    de:"[X] werden derzeit intern geprüft; über das Ergebnis informieren wir Sie kurzfristig.",
    ru:"[X] в настоящее время проверяются внутри компании; о результате мы сообщим Вам в кратчайший срок."
  },
  slots:[
    {de:"Ihre Forderungen", ru:"Ваши требования"},
    {de:"Die genauen Umstände des Vorfalls", ru:"Точные обстоятельства происшествия"},
    {de:"Die von Ihnen geschilderten Mängel", ru:"Описанные Вами недостатки"}
  ],
  falle:"Блок добавлен по итогам стресс-теста. Ни B7 (отказываем), ни B9 (даём) не покрывают ситуацию «пока не решили, разбираемся». derzeit (в настоящее время) — не jetzt (сейчас): jetzt в деловом письме звучит разговорно.",
  c1:["Passiv — страдательный залог"]
},

/* ─────────── ФИКСИРОВАННЫЕ ДОБАВКИ ─────────── */

{
  id:"D1", kind:"fix", pos:4.5, haeuf:"4 %",
  de:"Schadensübernahme", ru:"Ответственность за ущерб",
  rahmen:{
    de:"Für die entstandenen Schäden kommen wir selbstverständlich in vollem Umfang auf.",
    ru:"За возникший ущерб мы, само собой, отвечаем в полном объёме."
  },
  slots:[],
  falle:"Без слотов, всегда дословно одинаково. für etwas aufkommen (покрывать расходы за что-либо) — разделяемый глагол, приставка auf в самый конец. Устойчивое, дословно не собирается. Ставится сразу после блока B4.",
  c1:["trennbares Verb — разделяемый глагол"]
},

{
  id:"D2", kind:"fix", pos:8, haeuf:"7 %",
  de:"Problem behoben", ru:"Проблема уже позади",
  rahmen:{
    de:"Das Problem ist inzwischen behoben.",
    ru:"Проблема тем временем устранена."
  },
  slots:[],
  falle:"Ставится ВМЕСТО блока B5, не вместе с ним. Одно короткое предложение закрывает целый пункт шефа. Нужно, когда шеф просит сообщить, что всё уже устранено — а B5 говорит о будущем.",
  c1:["Zustandspassiv — результативный пассив"]
},

/* ─────────── НЕОБЯЗАТЕЛЬНЫЕ ─────────── */

{
  id:"O1", kind:"opt", pos:4, haeuf:"2 раза из 56",
  de:"Zweite Ursachenkonstruktion", ru:"Вторая конструкция причины",
  rahmen:{
    de:"Nach eingehender Prüfung des Sachverhalts müssen wir Ihnen mitteilen, dass der Vorfall auf [причина в Akkusativ] zurückzuführen ist.",
    ru:"После тщательной проверки обстоятельств дела мы должны сообщить Вам, что происшествие вызвано [причина]."
  },
  slots:[],
  ursachen:true, ursachen_kasus:"akk",
  falle:"Нужна только если в письме два разных объяснения: первое даём через aufgrund + Genitiv, второе через эту конструкцию + Akkusativ. Повтор одной конструкции дважды режет критерий Spektrum.",
  c1:["Passiversatzform «zurückzuführen sein» — быть вызванным чем-либо","Nominalstil — именной стиль"]
},

{
  id:"O2", kind:"opt", pos:9, haeuf:"4 раза из 56",
  de:"Konditionalsatz ohne «wenn»", ru:"Условие без союза «если»",
  rahmen:{
    de:"Sollte Ihnen dieser Termin nicht zusagen, teilen Sie uns dies bitte kurzfristig mit.",
    ru:"Если эта дата Вам не подойдёт, сообщите нам об этом, пожалуйста, в кратчайший срок."
  },
  slots:[],
  falle:"Условное придаточное БЕЗ союза wenn: глагол sollte выходит на первое место. В русском союз обязателен всегда. Ставится после блока B6, когда дату предлагаем мы.",
  c1:["Konditionalsatz ohne «wenn» — условное придаточное без союза"]
},

{
  id:"O3", kind:"opt", pos:3, haeuf:"3 раза из 56",
  de:"Konjunktiv II Perfekt", ru:"Упрёк себе в прошедшем",
  rahmen:{
    de:"Sie hätten von uns unaufgefordert eine Zwischennachricht erhalten müssen.",
    ru:"Вы должны были получить от нас промежуточное сообщение без напоминания."
  },
  slots:[],
  falle:"Двойной инфинитив в конце (erhalten müssen), вспомогательный hätten на втором месте. Учить целиком, по правилу не выведешь. Ставится после блока B3, слот про коммуникацию.",
  c1:["Konjunktiv II Perfekt mit Modalverb — сослагательное прошедшего с модальным глаголом"]
}

];

/* ─────────── СЕМЬ ПРИЧИН ─────────── */

const URSACHEN = [
  {n:1, gen:"eines kurzfristigen Personalausfalls", akk:"einen kurzfristigen Personalausfall",
   ru:"внезапного отсутствия персонала", ru_akk:"внезапное отсутствие персонала",
   deckt:"опоздания, недоделки, очереди, грязь, недоступный сервис", endung:"-s", haeuf:"18 раз"},
  {n:2, gen:"einer technischen Störung in unserem Warenwirtschaftssystem", akk:"eine technische Störung in unserem Warenwirtschaftssystem",
   ru:"технического сбоя в нашей товароучётной системе", ru_akk:"технический сбой в нашей товароучётной системе",
   deckt:"счета, сайт, автоматы, заказы", endung:null, haeuf:"8 раз"},
  {n:3, gen:"eines Lieferengpasses bei unserem Zulieferer", akk:"einen Lieferengpass bei unserem Zulieferer",
   ru:"перебоев с поставками у нашего поставщика", ru_akk:"перебои с поставками у нашего поставщика",
   deckt:"срыв сроков, недопоставка", endung:"-es", haeuf:"7 раз"},
  {n:4, gen:"einer Verwechslung bei der Kommissionierung", akk:"eine Verwechslung bei der Kommissionierung",
   ru:"путаницы при комплектации заказа", ru_akk:"путаница при комплектации заказа",
   deckt:"не тот товар, не тот цвет, не те размеры", endung:null, haeuf:"6 раз"},
  {n:5, gen:"eines Materialfehlers in der Produktion", akk:"einen Materialfehler in der Produktion",
   ru:"брака материала на производстве", ru_akk:"брак материала на производстве",
   deckt:"дефект, поломка, повреждение", endung:"-s", haeuf:"4 раза"},
  {n:6, gen:"eines internen Versehens bei der Auftragsabwicklung", akk:"ein internes Versehen bei der Auftragsabwicklung",
   ru:"внутренней оплошности при обработке заказа", ru_akk:"внутренняя оплошность при обработке заказа",
   deckt:"мероприятия, смена помещений, несогласованность — универсальная затычка", endung:"-s", haeuf:"6 раз"},
  {n:7, gen:"eines Versäumnisses in unserer Kundenkommunikation", akk:"ein Versäumnis in unserer Kundenkommunikation",
   ru:"упущения в нашей коммуникации с клиентами", ru_akk:"упущение в нашей коммуникации с клиентами",
   deckt:"не сообщили, не перезвонили, не дозвониться", endung:"-ses", haeuf:"4 раза",
   variante:{de:"eines Wechsels in der Zuständigkeit für Ihren Auftrag", ru:"смены ответственного за Ваш заказ"}}
];

const GEN_PRAEP = [
  {de:"aufgrund", ru:"из-за"},
  {de:"infolge", ru:"вследствие"},
  {de:"angesichts", ru:"ввиду"},
  {de:"im Zuge", ru:"в ходе"},
  {de:"in Anbetracht", ru:"принимая во внимание"},
  {de:"ungeachtet", ru:"невзирая на"}
];

/* ─────────── ФОРМУЛИРОВКИ ШЕФА → БЛОК ───────────
   Дословные цитаты из официальных Übungstests и сборников.
   Материал для дрилла на распознавание. */

const TRIGGER = [
  {de:"erklären Sie, wie es dazu gekommen ist", ru:"объясните, как до этого дошло", blk:"B4"},
  {de:"erläutern Sie die Gründe für die Probleme", ru:"разъясните причины проблем", blk:"B4"},
  {de:"wodurch es zu den wiederholten Störungen gekommen ist", ru:"из-за чего возникли повторяющиеся сбои", blk:"B4"},
  {de:"informieren Sie ihn über die IT-Störung in der Buchhaltung", ru:"проинформируйте его об IT-сбое в бухгалтерии", blk:"B4"},
  {de:"teilen Sie ihm offen den Grund für unsere Herausforderungen mit", ru:"открыто сообщите ему причину наших трудностей", blk:"B4"},

  {de:"wie wir die Angelegenheit sofort in Ordnung bringen", ru:"как мы немедленно урегулируем это дело", blk:"B5"},
  {de:"versichern Sie ihm, dass die Situation korrigiert wird", ru:"заверьте его, что ситуация будет исправлена", blk:"B5"},
  {de:"stellen Sie dar, welche Maßnahmen zur Behebung eingeleitet werden", ru:"изложите, какие меры к устранению принимаются", blk:"B5"},
  {de:"beauftragen Sie einen Fachmann, der sich schnellstmöglich kümmert", ru:"поручите специалисту, который займётся этим как можно скорее", blk:"B5"},
  {de:"die vertauschten Namen korrigieren", ru:"исправить перепутанные имена", blk:"B5"},

  {de:"erläutern Sie, wie das Problem behoben wurde", ru:"разъясните, как проблема была устранена", blk:"D2"},
  {de:"mitteilen, dass das Problem inzwischen behoben wurde", ru:"сообщить, что проблема тем временем устранена", blk:"D2"},
  {de:"versichern, dass die Probleme sofort behoben sind", ru:"заверить, что проблемы уже устранены", blk:"D2"},

  {de:"welche Maßnahmen wir ergreifen, um solche Fehler künftig zu vermeiden", ru:"какие меры мы примем, чтобы избежать таких ошибок впредь", blk:"B10"},
  {de:"mitteilen, wie wir solche Probleme in Zukunft vermeiden wollen", ru:"сообщить, как мы намерены избегать таких проблем в будущем", blk:"B10"},
  {de:"sicherstellen, dass ähnliche Vorfälle in Zukunft vermieden werden", ru:"обеспечить, чтобы подобные случаи впредь предотвращались", blk:"B10"},
  {de:"Maßnahmen einleiten, damit solche Vorfälle künftig ausbleiben", ru:"инициировать меры, чтобы такие случаи впредь не повторялись", blk:"B10"},
  {de:"konkrete Vorschläge für eine zuverlässigere Zusammenarbeit", ru:"конкретные предложения для более надёжного сотрудничества", blk:"B10"},

  {de:"gewähren Sie einen Rabatt von 20 % auf die nächste Rechnung", ru:"предоставьте скидку 20 % на следующий счёт", blk:"B9"},
  {de:"denken Sie darüber nach, welche Form der Entschuldigung wir anbieten", ru:"подумайте, какую форму извинения мы предложим", blk:"B9"},
  {de:"machen Sie ihr einen Vorschlag für eine Entschädigung", ru:"сделайте ей предложение о компенсации", blk:"B9"},
  {de:"ein Freitagsbuffet auf Kosten des Hauses als Entschädigung", ru:"пятничный фуршет за счёт заведения в качестве компенсации", blk:"B9"},
  {de:"eine Woche der monatlichen Gebühren als Kulanzregelung erlassen", ru:"списать недельную часть месячной платы в порядке доброй воли", blk:"B9"},
  {de:"informieren Sie sie über die Form der Wiedergutmachung", ru:"проинформируйте её о форме возмещения", blk:"B9"},
  {de:"einmaligen Preisnachlass von 25 % gewähren", ru:"предоставить единоразовую скидку 25 %", blk:"B9"},
  {de:"bieten Sie ein vergleichbares Modell aus dem Lagerbestand an", ru:"предложите сопоставимую модель со склада", blk:"B9"},
  {de:"schlagen Sie Töpfe in anderen Farben als Ersatz vor", ru:"предложите горшки других цветов в качестве замены", blk:"B9"},
  {de:"wir können sofort eine andere Firma kontaktieren", ru:"мы можем немедленно связаться с другой фирмой", blk:"B9"},
  {de:"das verlorene Ladegerät aus Kulanz ersetzen", ru:"заменить утерянное зарядное устройство в порядке доброй воли", blk:"B9"},

  {de:"die Firma arbeitet schon seit Jahren mit uns zusammen", ru:"фирма сотрудничает с нами уже много лет", blk:"B12"},
  {de:"wir wollen ihn als Kunden nicht verlieren", ru:"мы не хотим потерять его как клиента", blk:"B12"},
  {de:"überzeugen Sie die Kundin, die Bestellung nicht zu stornieren", ru:"убедите клиентку не отменять заказ", blk:"B12"},
  {de:"Frau Leone soll nicht kündigen", ru:"госпожа Леоне не должна расторгать договор", blk:"B12"},
  {de:"es wäre ungünstig, wenn sie eine negative Bewertung online hinterlässt", ru:"было бы неудачно, если бы она оставила негативный отзыв в интернете", blk:"B12"},
  {de:"bewahren Sie diesen wichtigen Kunden mit dem großen Auftrag", ru:"сохраните этого важного клиента с крупным заказом", blk:"B12"},

  {de:"Nachlieferung frühestens bis 12.05. möglich", ru:"допоставка возможна не раньше 12.05", blk:"B6"},
  {de:"sichern Sie ihm zu, dass am Mittwochmorgen zwei Personen vor Ort sind", ru:"заверьте его, что в среду утром на месте будут двое", blk:"B6"},
  {de:"machen Sie einen Terminvorschlag, wann unsere Monteure kommen können", ru:"предложите дату, когда могут приехать наши монтажники", blk:"B6"},
  {de:"versprechen Sie eine Lieferung Anfang nächster Woche", ru:"пообещайте поставку в начале следующей недели", blk:"B6"},
  {de:"versichern Sie, dass die Webseite bis heute Nachmittag funktioniert", ru:"заверьте, что сайт заработает до сегодняшнего дня после обеда", blk:"B6"},

  {de:"erklären Sie, dass die Verantwortung nicht bei uns liegt", ru:"объясните, что ответственность лежит не на нас", blk:"B7"},
  {de:"die Ursache liegt außerhalb unseres Verantwortungsbereichs", ru:"причина лежит вне зоны нашей ответственности", blk:"B7"},
  {de:"die Kosten für die Überprüfung bleiben beim Kunden", ru:"расходы на проверку остаются на клиенте", blk:"B7"},
  {de:"kostenfreier Ersatz nicht möglich — Garantiezeitraum abgelaufen", ru:"бесплатная замена невозможна — гарантийный срок истёк", blk:"B7"},
  {de:"weitere Änderungen liegen außerhalb der ursprünglichen Vereinbarung", ru:"дальнейшие изменения выходят за рамки первоначальной договорённости", blk:"B7"},
  {de:"den 60-%-Rabatt ablehnen", ru:"отклонить скидку 60 %", blk:"B7"},
  {de:"Lieferung erst nach dem vom Kunden genannten Termin möglich", ru:"поставка возможна только после названного клиентом срока", blk:"B7"},
  {de:"über mögliche Verzögerungen bei den Ersatzteilen informieren", ru:"проинформировать о возможных задержках с запчастями", blk:"B7"},

  {de:"berechnen Sie eine Zusatzgebühr von 200 Euro", ru:"выставьте дополнительную плату 200 евро", blk:"B8"},
  {de:"alle weiteren Änderungen sind kostenpflichtig", ru:"все дальнейшие изменения платные", blk:"B8"},

  {de:"wir brauchen von ihm Fotos, die den Unfall dokumentieren", ru:"нам нужны от него фотографии, документирующие происшествие", blk:"B11"},
  {de:"fordern Sie einen Schadensbericht zur Klärung mit der Versicherung an", ru:"затребуйте акт о повреждении для урегулирования со страховой", blk:"B11"},
  {de:"holen Sie die Zustimmung des Kunden ein", ru:"получите согласие клиента", blk:"B11"},
  {de:"bitten Sie um eine Rückmeldung", ru:"попросите об ответе", blk:"B11"},

  {de:"die Forderungen werden sorgfältig geprüft", ru:"требования будут тщательно проверены", blk:"B13"},
  {de:"die Ursachen mit den Kollegen ermitteln", ru:"выяснить причины с коллегами", blk:"B13"},
  {de:"klären Sie die genauen Umstände des Vorfalls", ru:"проясните точные обстоятельства происшествия", blk:"B13"},

  {de:"übernehmen Sie die Verantwortung für die entstandenen Schäden", ru:"возьмите на себя ответственность за возникший ущерб", blk:"D1"},
  {de:"volle Verantwortung für aufgetretene Schäden übernehmen", ru:"взять полную ответственность за возникший ущерб", blk:"D1"},

  {de:"entschuldigen Sie sich bei ihm", ru:"извинитесь перед ним", blk:"B2"},
  {de:"bitte kümmern Sie sich darum und antworten Sie der Kundin höflich", ru:"пожалуйста, займитесь этим и ответьте клиентке вежливо", blk:"B2"},
  {de:"höflich antworten und die Situation bedauern", ru:"вежливо ответить и выразить сожаление по поводу ситуации", blk:"B2"},

  {de:"erklären Sie, warum der Kundenservice nicht erreichbar war", ru:"объясните, почему до сервиса нельзя было дозвониться", blk:"B3"},
  {de:"es tut uns besonders leid, dass der Kunde nicht informiert wurde", ru:"нам особенно жаль, что клиент не был проинформирован", blk:"B3"}
];

/* ─────────── СЛУЖЕБНОЕ ─────────── */

const BLK_NAMEN = {
  B1:"B1 · Обращение",
  B2:"B2 · Вступление и извинение",
  B3:"B3 · Второе сожаление",
  B4:"B4 · Причина",
  B5:"B5 · Что делаем сейчас",
  B6:"B6 · Срок",
  B7:"B7 · Ограничение, отказ",
  B8:"B8 · Дальше платно",
  B9:"B9 · Что даём взамен",
  B10:"B10 · Профилактика",
  B11:"B11 · Запрос у клиента",
  B12:"B12 · Финал",
  B13:"B13 · Дело изучается",
  D1:"D1 · Ответственность за ущерб",
  D2:"D2 · Проблема уже позади",
  O1:"O1 · Вторая конструкция причины",
  O2:"O2 · Условие без «wenn»",
  O3:"O3 · Упрёк себе в прошедшем"
};

const REIHENFOLGE = ["B1","B2","B3","B4","D1","B7","B8","B13","B5","D2","B6","B9","B10","B11","B12"];

const REGELN = [
  {
    titel:"Два ограничения — один каркас, союз «und»",
    text:"Когда шеф требует сразу двух ограничений, каркас блока B7 НЕ повторяется. Второе придаточное цепляется через und, слово dass не повторяется, глагол во втором придаточном тоже уходит в конец.",
    de:"Gleichwohl müssen wir Sie darauf hinweisen, dass der Mangel nachweislich auf eine unsachgemäße Handhabung zurückzuführen ist und die Kosten der erneuten Überprüfung daher nicht von uns übernommen werden können.",
    ru:"Тем не менее мы вынуждены обратить Ваше внимание на то, что неисправность доказуемо вызвана ненадлежащим обращением и расходы на повторную проверку поэтому не могут быть покрыты нами."
  },
  {
    titel:"Блок B9 дважды — меняется глагол",
    text:"Когда в письме надо предложить две разные вещи, второе предложение идёт не через anbieten, а через пятый зачин с глаголом ersetzen. Два одинаковых «bieten wir Ihnen … an» подряд режут критерий Spektrum.",
    de:"Ersatzweise bieten wir Ihnen ein vergleichbares Modell aus unserem aktuellen Lagerbestand an. Aus Kulanz ersetzen wir Ihnen das verlorene Ladegerät zudem kostenfrei.",
    ru:"В качестве замены мы предлагаем Вам сопоставимую модель из нашего текущего складского запаса. В порядке доброй воли мы дополнительно бесплатно заменяем Вам утерянное зарядное устройство."
  }
];

const KRITERIEN = [
  {de:"Kommunikative Aufgabenbewältigung", ru:"Выполнение коммуникативной задачи",
   text:"Все ли пункты записки шефа раскрыты, соответствует ли текст рабочей ситуации и уровню B2. Весит больше всего."},
  {de:"Kommunikative Gestaltung", ru:"Коммуникативное оформление",
   text:"Логика, абзацы, связность, уместный тон."},
  {de:"Formale Richtigkeit", ru:"Формальная правильность",
   text:"Грамматика, орфография, пунктуация."},
  {de:"Spektrum sprachlicher Mittel", ru:"Широта языковых средств",
   text:"Разнообразие лексики и сложность синтаксиса. Единственный критерий, на который подготовка влияет напрямую."}
];
