/* Beschwerdeantwort — конструктор v4.4 (30.09.2026)
   Deutsch-Test für den Beruf B2, часть «Lesen und Schreiben».
   v4.4: возвращены Redemittel из исходного шаблона Кирилла (блоки 4, 5, 7, 8), письмо выстроено цепочкой,
   добавлены сценарии «срок позже требуемого» и «виноваты не мы». Проверка повторов слов отключена.
   Принцип: один каркас на блок; в каждой дырке — ДЖОКЕР (подходит всегда) + несколько точных вариантов.
   К каждой немецкой единице — русский перевод.
   kreis: 1 = ядро (учить первым), 2 = второй круг (только если шеф просит) */

const DATA_VERSION = "4.4";

const BLOECKE = [

/* ---------- ЯДРО ---------- */

{ id:"1", kreis:1, haeuf:"100 %",
  de:"Anrede", ru:"Обращение",
  rahmen:{ de:"Sehr geehrte Frau [Nachname],   /   Sehr geehrter Herr [Nachname],",
           ru:"Глубокоуважаемая госпожа [фамилия],   /   Глубокоуважаемый господин [фамилия]," },
  slots:[
    { joker:true, de:"Sehr geehrte Damen und Herren,", ru:"Уважаемые дамы и господа,", note:"фамилии в задании нет" }
  ],
  falle:"В дырку — только ФАМИЛИЯ: Sehr geehrte Frau Weber. Имя не ставится (❌ Frau Anna), название фирмы тоже (❌ Herr Firma Müller GmbH). После запятой следующая строка с БОЛЬШОЙ буквы.",
  c1:[] },

{ id:"2", kreis:1, haeuf:"100 %",
  de:"Einstieg", ru:"Письмо получено",
  rahmen:{ de:"Ihre Anfrage hat uns erreicht.", ru:"Ваш запрос до нас дошёл." },
  slots:[
    { de:"Ihre E-Mail hat uns erreicht.", ru:"Ваше электронное письмо до нас дошло.", note:"меняется одно слово" },
    { de:"Ihr Brief hat uns erreicht.",   ru:"Ваше письмо до нас дошло.",             note:"меняется одно слово — и окончание: Ihr, не Ihre" }
  ],
  falle:"Один глагол на все случаи — hat uns erreicht, меняется только слово. Ihre — перед словами женского рода (die Anfrage, die E-Mail), Ihr — перед мужским и средним (der Brief, das Schreiben).",
  c1:[] },

{ id:"3", kreis:1, haeuf:"100 %", pflicht:true,
  de:"Entschuldigung", ru:"Понимание и извинение",
  rahmen:{ de:"Wir verstehen Ihren Ärger und möchten uns aufrichtig für die entstandenen Unannehmlichkeiten entschuldigen.",
           ru:"Мы понимаем Ваше раздражение и хотели бы искренне извиниться за возникшие неудобства." },
  slots:[],
  falle:"Твоя неизменная часть: пишется дословно, целиком, всегда.",
  c1:[] },

{ id:"4", kreis:1, haeuf:"89 %",
  de:"Ursache", ru:"Почему так вышло",
  rahmen:{ de:"Aufgrund [причина] kam es zu dieser misslichen Situation.",
           ru:"Из-за [причина] возникла эта досадная ситуация." },
  slots:[
    { joker:true, de:"eines bedauerlichen Zusammentreffens mehrerer ungünstiger Umstände",
      ru:"прискорбного стечения нескольких неблагоприятных обстоятельств", note:"подходит к ЛЮБОЙ ситуации" },
    { de:"eines internen Bearbeitungsfehlers",           ru:"внутренней ошибки при обработке",   note:"путаница, не тот товар, ошибка в счёте, организация" },
    { de:"eines internen Systemfehlers",                 ru:"внутреннего системного сбоя",       note:"из твоего шаблона · техника, IT, сайт, счета" },
    { de:"eines krankheitsbedingten Personalausfalls",   ru:"отсутствия персонала по болезни",   note:"из твоего шаблона · опоздание, недоделки" },
    { de:"eines Lieferengpasses bei unserem Hersteller", ru:"перебоев с поставками у нашего производителя", note:"задержка, недопоставка" },
    { de:"eines Produktionsfehlers",                     ru:"производственного брака",           note:"из твоего шаблона · дефект, поломка" }
  ],
  gruppen:[
    { titel:"Виноваты не мы — третье лицо (дальше блок 5: «außerhalb unseres Einflussbereichs»)",
      items:[
        { de:"eines Fehlers unseres Lieferanten",     ru:"ошибки нашего поставщика",     note:"товар пришёл от поставщика неправильным" },
        { de:"eines Fehlers des Paketdienstes",       ru:"ошибки службы доставки",       note:"посылка потерялась, повреждена, опоздала" },
        { de:"eines Fehlers unseres Subunternehmers", ru:"ошибки нашего субподрядчика",  note:"ремонт, монтаж, уборка — работали чужие люди" }
      ]}
  ],
  falle:"Каркас — из твоего исходного шаблона, misslich вместо unangenehm (уровень выше). ОДНО правило Genitiv на все причины: aufgrund + eines + (прилагательное на -en) + существительное на -s / -es. Ловушка: Lieferant, Subunternehmer — Lieferant склоняется особо: unseres Lieferant-EN (не -s). После aufgrund в русском «из-за» + родительный — совпадает, тут интерференции нет; ошибаются в окончании артикля: eines, не einen.",
  c1:["Präpositionen mit Genitiv — предлоги с родительным падежом","n-Deklination — слабое склонение (Lieferant → des Lieferanten)"] },

{ id:"6", kreis:1, haeuf:"~75 %",
  de:"Abhilfe + Termin", ru:"Что делаем и когда",
  rahmen:{ de:"Selbstverständlich schaffen wir Abhilfe: [действие]",
           ru:"Разумеется, мы примем меры: [действие]" },
  slots:[
    { joker:true, de:"Alle beanstandeten Punkte werden [когда] erledigt.",
      ru:"Все пункты, на которые Вы указали, будут [когда] выполнены.", note:"универсальный: брак, ошибки, недоделки, правки" },
    { de:"Die fehlenden Artikel werden [когда] nachgeliefert.",
      ru:"Недостающие товары будут [когда] допоставлены.", note:"из твоего шаблона · недопоставка, задержка заказа" },
    { de:"Die Rechnung wird [когда] korrigiert und der Betrag erstattet.",
      ru:"Счёт будет [когда] исправлен, а сумма возвращена.", note:"из твоего шаблона · деньги. Короче — в группе ниже" },
    { de:"Das Problem ist inzwischen behoben.",
      ru:"Проблема тем временем устранена.", note:"ВМЕСТО всего блока, без каркаса — шеф пишет, что всё уже исправлено" },
    { de:"Ein Ersatz wird Ihnen [когда] zugesandt.",
      ru:"Замена будет Вам [когда] выслана.", note:"из твоего шаблона · брак, не тот товар, не тот размер" }
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
        { de:"spätestens bis zum 12. Mai",                   ru:"самое позднее до 12 мая",   note:"дата — bis zum. Ставишь дату ШЕФА, даже если клиент просил раньше" },
        { de:"spätestens am Mittwoch",                       ru:"самое позднее в среду",     note:"день недели — am" },
        { de:"spätestens Anfang nächster Woche",             ru:"самое позднее в начале следующей недели", note:"расплывчато — БЕЗ предлога" }
      ]}
  ],
  falle:"Срок — не отдельный блок, а вставка [когда] внутри действия. Три формы срока — три предлога: дата — bis zum, день недели — am, расплывчато — без предлога. В русском предлог есть везде («до», «в», «в начале»), и рука ставит его туда, где его нет. Все действия — Passiv: werden + причастие в конце. Клиент просил до 1.10, шеф пишет 12.10 → сначала блок 5 («до 1.10 невозможно»), потом здесь 12.10 — см. форму Д.",
  c1:["Nomen-Verb-Verbindung «Abhilfe schaffen» — принять меры","Passiv — страдательный залог"] },

{ id:"8", kreis:1, haeuf:"43 %",
  de:"Prävention", ru:"Чтобы не повторилось",
  rahmen:{ de:"Zur Vermeidung solcher Vorfälle [концовка]",
           ru:"Во избежание таких случаев [концовка]" },
  slots:[
    { joker:true, de:"haben wir bereits entsprechende Maßnahmen ergriffen.",
      ru:"мы уже приняли соответствующие меры.", note:"подходит всегда" },
    { de:"wird jeder Auftrag künftig zusätzlich kontrolliert.",
      ru:"каждый заказ впредь дополнительно проверяется.", note:"брак, не тот товар, ошибки" },
    { de:"wird künftig ein verantwortlicher Mitarbeiter alle Aufträge persönlich koordinieren.",
      ru:"впредь ответственный сотрудник будет лично координировать все заказы.", note:"из твоего шаблона · неразбериха, организация" },
    { de:"wird unser Team zeitnah erweitert.",
      ru:"наша команда в ближайшее время будет расширена.", note:"из твоего шаблона · нехватка людей, задержки" },
    { de:"wird unser Personal gezielt geschult.",
      ru:"наш персонал пройдёт целенаправленное обучение.", note:"грубость, плохой сервис" },
    { de:"informieren wir Sie künftig umgehend über jede Änderung.",
      ru:"впредь мы будем немедленно сообщать Вам о любом изменении.", note:"молчали, не сообщили" }
  ],
  gruppen:[
    { titel:"Другие рамки — на выбор, концовки те же",
      items:[
        { de:"Um solche Vorfälle zu vermeiden, [концовка]", ru:"Чтобы избежать таких случаев, [концовка]", note:"Infinitiv mit «um … zu»" },
        { de:"Damit sich so etwas nicht wiederholt, [концовка]", ru:"Чтобы такое не повторилось, [концовка]", note:"Finalsatz mit «damit»" },
        { joker:true, de:"Wir werden alles tun, um solche Vorfälle künftig zu vermeiden.", ru:"Мы сделаем всё, чтобы в будущем избежать таких случаев.", note:"АВАРИЙНЫЙ — целое предложение из твоего шаблона, без концовки" }
      ]}
  ],
  falle:"Каркас — из твоего исходного шаблона. После любой рамки глагол СРАЗУ: Zur Vermeidung … haben wir / wird / informieren wir. В русском «Во избежание … мы приняли» — подлежащее первым, и рука пишет «Zur Vermeidung … wir haben» — ошибка. В рамке «Um … zu vermeiden» слово künftig убрано: концовки его уже содержат, два künftig в одном предложении звучат коряво.",
  c1:["Nominalstil «zur Vermeidung + Genitiv» — именной стиль","Finalsätze «um … zu», «damit» — придаточные цели","Inversion — глагол сразу после рамки"] },

{ id:"7", kreis:1, haeuf:"36 %",
  de:"Angebot", ru:"Что даём в качестве извинения",
  rahmen:{ de:"Als Entschuldigung gewähren wir Ihnen [объект].",
           ru:"В качестве извинения мы предоставляем Вам [объект]." },
  slots:[
    { joker:true, de:"einen Preisnachlass in Höhe von 20 %", ru:"скидку в размере 20 %", note:"деньги · шеф не уточнил, что давать" },
    { de:"eine Gutschrift in Höhe von 100 €",                ru:"зачисление на сумму 100 € (кредит-ноту)", note:"деньги · шеф назвал сумму" },
    { de:"einen Gutschein im Wert von 100 €",                ru:"ваучер на сумму 100 €", note:"из твоего шаблона" },
    { de:"eine vollständige Rückerstattung des zu viel gezahlten Betrags", ru:"полный возврат переплаченной суммы", note:"из твоего шаблона · ошибка в счёте" }
  ],
  gruppen:[
    { titel:"Вещь или услуга — второй каркас: Als Zeichen unseres Entgegenkommens bieten wir Ihnen [объект] an. (В знак нашего расположения мы предлагаем Вам [объект].)",
      items:[
        { joker:true, de:"eine kostenfreie Lieferung Ihrer nächsten Bestellung", ru:"бесплатную доставку Вашего следующего заказа", note:"джокер второго каркаса" },
        { de:"ein vergleichbares Modell aus unserem Sortiment",  ru:"сопоставимую модель из нашего ассортимента", note:"товара нет, нужен другой" },
        { de:"eine kostenfreie Nachbesserung durch unser Fachpersonal", ru:"бесплатное устранение недостатков нашими специалистами", note:"работа сделана плохо" },
        { de:"eine kostenlose Einweisung durch unseren Techniker", ru:"бесплатный инструктаж нашим техником", note:"клиент не справляется с прибором" }
      ]}
  ],
  falle:"Два каркаса: ДЕНЬГИ → gewähren (твой шаблон), ВЕЩЬ или УСЛУГА → bieten … an. gewähren — неразделяемый, ничего в конец не уезжает. anbieten — разделяемый: an в самый конец. Объект всегда Akkusativ: einen (м.р.) / ein (ср.р.) / eine (ж.р.). Шеф диктует, что дать, — его слова в Akkusativ (превращение А). Два объекта — один каркас, между ними sowie.",
  c1:["trennbares Verb «anbieten» — разделяемый глагол","Konnektor «sowie» — а также"] },

{ id:"9", kreis:1, haeuf:"100 %", pflicht:true, letzter:true,
  de:"Schluss", ru:"Финал",
  rahmen:{ de:"Wir hoffen darauf, dass Sie trotz dieses Vorfalls auch weiterhin [форма] bleiben.\nUnsere Kunden haben oberste Priorität, und wir sind stets bestrebt, Ihnen den bestmöglichen Service zu bieten. Bei Rückfragen stehen wir Ihnen gerne zur Verfügung.\n\nMit freundlichen Grüßen\n[Vorname Nachname]",
           ru:"Мы надеемся на то, что Вы, несмотря на этот случай, и впредь останетесь [форма].\nНаши клиенты имеют высший приоритет, и мы всегда стремимся предложить Вам наилучший сервис. При дополнительных вопросах мы охотно в Вашем распоряжении.\n\nС уважением\n[Имя Фамилия]" },
  slots:[
    { de:"unsere treue Kundin", ru:"нашей верной клиенткой", note:"адресат — женщина" },
    { de:"unser treuer Kunde",  ru:"нашим верным клиентом",  note:"адресат — мужчина ИЛИ фирма" },
    { de:"Angesichts unserer langjährigen und vertrauensvollen Zusammenarbeit hoffen wir darauf, dass Sie …",
      ru:"Ввиду нашего многолетнего и доверительного сотрудничества мы надеемся на то, что Вы …",
      note:"ЗАЧИН вместо «Wir hoffen darauf» — шеф пишет «давний клиент»" }
  ],
  falle:"Твоя неизменная часть. После bleiben падеж НЕ меняется, остаётся Nominativ: unser treuER KundE. В русском «останетесь клиентОМ» — творительный, рука тянет в косвенный. Подпись — имя и фамилия, без «Herr».",
  c1:["Präposition mit Genitiv «trotz», «angesichts»","Korrelat «darauf, dass»"] },

/* ---------- ВТОРОЙ КРУГ ---------- */

{ id:"10", kreis:2, haeuf:"11 %",
  de:"Bedauern", ru:"Отдельное сожаление",
  rahmen:{ de:"Das tut uns sehr leid.", ru:"Нам очень жаль." },
  slots:[
    { de:"Die Verzögerung tut uns sehr leid.",        ru:"Нам очень жаль, что возникла задержка.",   note:"о чём именно — первым" },
    { de:"Die fehlende Rückmeldung tut uns sehr leid.", ru:"Нам очень жаль, что мы не дали ответа.", note:"идеально перед блоком 16" },
    { de:"Die Fehler tun uns sehr leid.",             ru:"Нам очень жаль, что произошли ошибки.",   note:"несколько вещей — tun, не tut" }
  ],
  falle:"[о чём жалеем] tut uns sehr leid. То, о чём жалеем, — подлежащее, глагол согласуется с ним: одна вещь — tut, несколько — tun. Ставится после блока 3, если шеф просит отдельно пожалеть о конкретном.",
  c1:[] },

{ id:"16", kreis:2, haeuf:"3 раза из 56 · реальный экзамен",
  de:"Selbstkritik", ru:"Упрёк себе за прошлое",
  rahmen:{ de:"Sie hätten von uns automatisch eine Zwischennachricht erhalten müssen.",
           ru:"Вы должны были автоматически получить от нас промежуточное сообщение." },
  slots:[],
  falle:"Konjunktiv II Perfekt с модальным глаголом: двойной инфинитив в конце (erhalten müssen), hätten на втором месте — учится целиком. Лучшая пара — после блока 10.",
  c1:["Konjunktiv II Perfekt mit Modalverb"] },

{ id:"11", kreis:2, haeuf:"4 %",
  de:"Schadensübernahme", ru:"Берём ущерб на себя",
  rahmen:{ de:"Für den verursachten Schaden kommen wir in vollem Umfang auf.",
           ru:"За причинённый ущерб мы отвечаем в полном объёме." },
  slots:[],
  falle:"für etwas aufkommen — устойчивое выражение; приставка auf уходит в конец. Ставится сразу после блока 4.",
  c1:["trennbares Verb — разделяемый глагол"] },

{ id:"5", kreis:1, haeuf:"~20 % · 3 раза из 3 на реальном экзамене",
  de:"Hinweis", ru:"Обращаем внимание: однако…",
  rahmen:{ de:"Wir möchten Sie jedoch darauf hinweisen, dass [X].",
           ru:"Однако мы хотели бы обратить Ваше внимание на то, что [X]." },
  slots:[
    { joker:true, de:"dies nur im Rahmen unserer Geschäftsbedingungen möglich ist",
      ru:"это возможно только в рамках наших условий", note:"мягкое ограничение — подходит почти всегда" },
    { de:"die Ursache außerhalb unseres Einflussbereichs lag",
      ru:"причина лежала вне нашей сферы влияния", note:"из твоего шаблона · виноваты не мы — после причины-третьего лица в блоке 4" },
    { de:"Ihre Wünsche über den vereinbarten Leistungsumfang hinausgehen",
      ru:"Ваши пожелания выходят за рамки согласованного объёма услуг", note:"вне договора — дальше блок 12 «дальше платно»" },
    { de:"eine Lieferung bis zum [дата клиента] leider nicht möglich ist",
      ru:"доставка до [дата клиента], к сожалению, невозможна", note:"срок позже требуемого — свой срок дальше в блоке 6" },
    { de:"wir Ihre Forderungen in dieser Form leider nicht erfüllen können",
      ru:"мы, к сожалению, не можем выполнить Ваши требования в таком виде", note:"прямой отказ — только если шеф пишет «ablehnen»" }
  ],
  falle:"Каркас — из твоего исходного шаблона. Так тоже верно: Jedoch möchten wir Sie darauf hinweisen, dass … — учить не надо, выбери одно. hinweisen — разделяемый, но здесь он стоит с möchten, поэтому целиком в конце: … darauf hinweisen, dass. После dass глагол — в самый конец: … möglich ist, … lag, … hinausgehen. Шеф сам пишет, на что указать, — его фраза идёт после dass (превращение Б). После прямого отказа — смягчитель: блок 7 или блок 12.",
  c1:["Korrelat «darauf, dass» — местоименное наречие","Nebensatz mit «dass» — глагол в конце"] },

{ id:"12", kreis:2, haeuf:"4 % · реальный экзамен",
  de:"Zahlungspflicht", ru:"Этот раз бесплатно, дальше платно",
  rahmen:{ de:"Ausnahmsweise übernehmen wir die Kosten dieses Mal noch. Alle weiteren Leistungen werden wir Ihnen jedoch in Rechnung stellen.",
           ru:"В порядке исключения в этот раз расходы мы ещё берём на себя. Все дальнейшие услуги мы, однако, выставим Вам в счёт." },
  slots:[
    { de:"Alle weiteren Leistungen werden wir Ihnen jedoch mit jeweils 200 € in Rechnung stellen.",
      ru:"Все дальнейшие услуги мы, однако, выставим Вам в счёт по 200 € за каждую.", note:"шеф назвал сумму — вместо второго предложения" }
  ],
  falle:"werden wir (выставим), без «может быть» — так решил корректор. Смягчитель «в этот раз ещё бесплатно» стоит ПЕРЕД. etwas in Rechnung stellen — устойчивое выражение.",
  c1:["Nomen-Verb-Verbindung «in Rechnung stellen»"] },

{ id:"13", kreis:2, haeuf:"5 %",
  de:"Prüfung", ru:"Дело ещё изучается",
  rahmen:{ de:"Der Sachverhalt wird derzeit intern geprüft; über das Ergebnis informieren wir Sie zeitnah.",
           ru:"Обстоятельства дела в настоящее время проверяются внутри компании; о результате мы сообщим Вам в ближайшее время." },
  slots:[],
  falle:"Шеф пишет, что решения ещё нет («wird geprüft», «Umstände klären»). derzeit, а не jetzt: jetzt в деловом письме звучит разговорно.",
  c1:["Passiv — страдательный залог"] },

{ id:"14", kreis:2, haeuf:"~10 %",
  de:"Konditional ohne «wenn»", ru:"Если не устроит — свяжитесь",
  rahmen:{ de:"Sollte Ihnen [X] nicht zusagen, melden Sie sich bitte bei uns.",
           ru:"Если Вас не устроит [X], пожалуйста, свяжитесь с нами." },
  slots:[
    { joker:true, de:"dieser Vorschlag", ru:"это предложение", note:"подходит к любому решению" },
    { de:"der Termin",            ru:"дата / время",            note:"визит, ремонт, встреча" },
    { de:"der neue Liefertermin", ru:"новая дата доставки",     note:"срок позже требуемого, ожидание" },
    { de:"der Ersatzartikel",     ru:"заменный товар",          note:"замена, другая модель" }
  ],
  falle:"Условие БЕЗ wenn: sollte на первом месте. В русском «если» обязательно, поэтому по аналогии не выводится — учится целиком. [X] — Nominativ и ВСЕГДА единственное число: во множественном было бы Sollten. zusagen + Dativ: Ihnen. Ставится сразу после блока 6.",
  c1:["Konditionalsatz ohne «wenn» — условное придаточное без союза"] },

{ id:"15", kreis:2, haeuf:"7 %",
  de:"Rückfrage", ru:"Что нужно от клиента",
  rahmen:{ de:"Bitte teilen Sie uns mit, ob Sie einverstanden sind.",
           ru:"Пожалуйста, сообщите нам, согласны ли Вы." },
  slots:[
    { joker:true, de:"Bitte schicken Sie uns die entsprechenden Unterlagen.", ru:"Пожалуйста, пришлите нам соответствующие документы.", note:"ВТОРОЙ КАРКАС — просим прислать. Шеф назвал что — его слово в Akkusativ: einen Kaufbeleg (чек), ein Foto (фото), die Auftragsnummer (номер заказа)" },
    { de:"Bitte schicken Sie uns einige Fotos des Schadens.",               ru:"Пожалуйста, пришлите нам несколько фотографий повреждения.", note:"повреждение" },
    { de:"Bitte schicken Sie uns eine Kopie der Rechnung.",                 ru:"Пожалуйста, пришлите нам копию счёта.", note:"спор о деньгах" }
  ],
  falle:"Два каркаса: «сообщите, согласны ли Вы» и «пришлите нам [что]». Что прислать — Akkusativ: einen / ein / eine / die. Место: после компенсации, прямо перед финалом — согласие сразу на всё, что предложено выше.",
  c1:[] }
];

/* Порядок письма — цепочка: получили → извиняемся → почему → что делаем → чтобы не повторилось → компенсация → что нужно от клиента → надежда → финал */
const REIHENFOLGE = ["1","2","3","10","16","4","11","5","12","13","6","14","8","7","15","9"];

/* Цепочка — смысловые звенья письма */
const KETTE = [
  { schritt:"Получили жалобу",               bloecke:["1","2"],             link:"" },
  { schritt:"Извиняемся",                    bloecke:["3","10","16"],       link:"" },
  { schritt:"Объясняем, почему так вышло",   bloecke:["4","11","5"],        link:"«dieser misslichen Situation» → ссылка на извинение; «jedoch» — «однако» к причине" },
  { schritt:"Что делаем и когда",            bloecke:["12","13","6","14"], link:"«Selbstverständlich» — «разумеется» после объяснения" },
  { schritt:"Чтобы не повторилось",          bloecke:["8"],                 link:"«solcher Vorfälle» → ссылка на всё выше" },
  { schritt:"Компенсация (если шеф даёт)",   bloecke:["7"],                 link:"«Als Entschuldigung» → ссылка на извинение в блоке 3" },
  { schritt:"Что нужно от клиента (если шеф просит)", bloecke:["15"],   link:"«ob Sie einverstanden sind» → согласие на всё предложенное выше" },
  { schritt:"Надежда + всегда в распоряжении", bloecke:["9"],               link:"«trotz dieses Vorfalls» → ссылка на всё письмо" }
];

/* Формы письма */
const FORMEN = [
  { id:"А", titel:"А · Виноваты — исправляем", ru:"самая частая", bloecke:["1","2","3","4","6","8","7","9"],
    wann:"шеф просит извиниться, объяснить причину, исправить, не допустить повторения, компенсировать" },
  { id:"Б", titel:"Б · Отказ", ru:"говорим «нет» и смягчаем", bloecke:["1","2","3","4","5","7","9"],
    wann:"шеф пишет «ablehnen», «nicht möglich»" },
  { id:"В", titel:"В · Делаем, но дальше платно", ru:"реальный экзамен", bloecke:["1","2","3","4","5","12","6","9"],
    wann:"шеф пишет, что лимит исчерпан и дальше за деньги" },
  { id:"Г", titel:"Г · Ещё разбираемся", ru:"решения пока нет", bloecke:["1","2","3","13","7","15","9"],
    wann:"шеф пишет «wird geprüft», «Umstände klären»" },
  { id:"Д", titel:"Д · Срок позже требуемого", ru:"клиент просит до 1.10, шеф пишет 12.10", bloecke:["1","2","3","4","5","6","14","7","9"],
    wann:"клиент требует замену / недостающий / верный товар к дате, шеф называет дату позже" },
  { id:"Е", titel:"Е · Виноваты не мы", ru:"третье лицо", bloecke:["1","2","3","4","5","6","7","9"],
    wann:"шеф пишет «Lieferant», «Paketdienst», «Subunternehmer», «liegt nicht bei uns»" }
];

/* Три превращения: слова шефа → в дырку каркаса */
const TRANSFORM = [
  { id:"А", titel:"Шеф диктует, ЧТО предложить или прислать → блоки 7 и 15",
    regel:"Из записки берёшь существительное с прилагательным и ставишь в Akkusativ: einen (м.р.) / ein (ср.р.) / eine (ж.р.). Глагол из записки выбрасываешь — он уже есть в каркасе. Деньги → gewähren, вещь или услуга → bieten … an.",
    bsp:[
      { notiz:"vergleichbares Modell aus Lagerbestand anbieten", de:"ein vergleichbares Modell aus unserem Lagerbestand", ru:"сопоставимую модель из нашего складского запаса" },
      { notiz:"Techniker kostenfrei zur Einweisung",             de:"eine kostenfreie Einweisung durch unseren Techniker", ru:"бесплатный инструктаж нашим техником" },
      { notiz:"Schadensbericht anfordern",                       de:"Bitte schicken Sie uns einen kurzen Schadensbericht.", ru:"Пожалуйста, пришлите нам краткий акт о повреждении." }
    ]},
  { id:"Б", titel:"Шеф диктует, НА ЧТО указать или в чём отказать → блок 5",
    regel:"Фразу из записки превращаешь в придаточное после dass: глагол уходит в самый конец. «Клиент» меняешь на «Sie» — ты пишешь ему самому.",
    bsp:[
      { notiz:"Garantie ist abgelaufen",               de:"die Garantie bereits abgelaufen ist", ru:"гарантия уже истекла" },
      { notiz:"Kosten der Überprüfung trägt der Kunde", de:"die Kosten der Überprüfung von Ihnen zu tragen sind", ru:"расходы на проверку несёте Вы" },
      { notiz:"Lieferung bis 1.10. nicht machbar",      de:"eine Lieferung bis zum 1. Oktober leider nicht möglich ist", ru:"доставка до 1 октября, к сожалению, невозможна" }
    ]},
  { id:"В", titel:"Шеф диктует СРОК → вставка [когда] в блоке 6",
    regel:"Перед сроком — spätestens (самое позднее). Дата — bis zum, день недели — am, расплывчатый срок — без предлога. Шеф пишет «frühestens» (не раньше) — ставишь frühestens am.",
    bsp:[
      { notiz:"Nachlieferung bis 12.10.",        de:"spätestens bis zum 12. Oktober",   ru:"самое позднее до 12 октября" },
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
  { de:"erklären, dass der Lieferant / Paketdienst den Fehler gemacht hat", ru:"объяснить, что ошибся поставщик / служба доставки", blk:"4" },
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
  { de:"um Rückmeldung bitten, falls der Termin / die Lösung nicht passt", ru:"попросить ответ, если дата / решение не подходит", blk:"14" },
  { de:"eine Entschädigung / Wiedergutmachung anbieten", ru:"предложить компенсацию", blk:"7" },
  { de:"einen Preisnachlass / Gutschein gewähren", ru:"предоставить скидку / ваучер", blk:"7" },
  { de:"ein vergleichbares Modell anbieten", ru:"предложить сопоставимую модель", blk:"7" },
  { de:"die nächste Lieferung kostenfrei anbieten", ru:"предложить бесплатную следующую доставку", blk:"7" },
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
  { titel:"Письмо — цепочка, а не набор",
    text:"Каждый блок цепляется за предыдущий: «dieser misslichen Situation» → к извинению, «jedoch» → к причине, «Selbstverständlich» → к объяснению, «solcher Vorfälle» → ко всему выше, «Als Entschuldigung» → к блоку 3, «trotz dieses Vorfalls» → ко всему письму. Поэтому порядок один и не меняется.",
    de:"", ru:"" },
  { titel:"Записка — чек-лист, а не план письма",
    text:"Пункты в записке идут как попало. Выбираешь форму письма (А–Е), отмечаешь по записке, какие блоки добавить или убрать, ставишь их в порядке цепочки — и только потом пишешь.",
    de:"", ru:"" },
  { titel:"Не знаешь, что вставить, — джокер",
    text:"В каждой дырке есть ДЖОКЕР. Он подходит к любой ситуации — менее точно, зато без риска. Пустая дырка или фраза, сочинённая на ходу, хуже джокера.",
    de:"", ru:"" },
  { titel:"Шеф продиктовал — бери его слова",
    text:"Если в записке сказано, что предложить, на что указать или какой срок назвать, — слова шефа вставляются в дырку по одному из трёх превращений (А, Б, В). Предложение из записки целиком не переписывается никогда.",
    de:"", ru:"" },
  { titel:"Два пункта в блоке 5 — один каркас, союз und",
    text:"Каркас не повторяется. Второе придаточное цепляется через und, dass не повторяется, глагол во втором придаточном тоже уходит в конец.",
    de:"Wir möchten Sie jedoch darauf hinweisen, dass die Ursache außerhalb unseres Einflussbereichs lag und die Kosten der Überprüfung daher von Ihnen zu tragen sind.",
    ru:"Однако мы хотели бы обратить Ваше внимание на то, что причина лежала вне нашей сферы влияния и расходы на проверку поэтому несёте Вы." },
  { titel:"Два объекта в блоке 7 — один каркас, союз sowie",
    text:"Каркас не повторяется. Два объекта соединяются через sowie («а также»), оба в Akkusativ. Если хоть один — вещь или услуга, бери второй каркас (bieten … an).",
    de:"Als Zeichen unseres Entgegenkommens bieten wir Ihnen ein vergleichbares Modell aus unserem Sortiment sowie einen Preisnachlass in Höhe von 20 % an.",
    ru:"В знак нашего расположения мы предлагаем Вам сопоставимую модель из нашего ассортимента, а также скидку в размере 20 %." },
  { titel:"После прямого отказа — смягчитель",
    text:"За отказом в блоке 5 идёт либо блок 7 (компенсация), либо блок 12 (в этот раз бесплатно). Голый отказ режет критерий Kommunikative Gestaltung.",
    de:"", ru:"" },
  { titel:"Повторы слов — не страшно",
    text:"Повтор служебного или модального слова (möchten, wir, bitte, leider) баллов не снимает. Не трать время на экзамене на поиск синонимов.",
    de:"", ru:"" },
  { titel:"Мало места на бланке",
    text:"Сокращается в таком порядке: блок 10 → в блоке 8 аварийный джокер одной строкой → среднее предложение финала. Блоки 1, 2, 3, 4 и 9 не трогаются никогда.",
    de:"", ru:"" }
];

/* Четыре официальных критерия оценки */
const KRITERIEN = [
  { de:"Kommunikative Aufgabenbewältigung", ru:"Решение коммуникативной задачи",
    text:"Закрыты ли ВСЕ пункты записки шефа. Пропущенный пункт стоит дороже любой грамматической ошибки. Один пункт — один блок." },
  { de:"Kommunikative Gestaltung", ru:"Коммуникативное оформление",
    text:"Звучит ли письмо как обращение к живому человеку: признание эмоции, вежливость, отказ со смягчителем, связная цепочка." },
  { de:"Formale Richtigkeit", ru:"Формальная правильность",
    text:"Грамматика и орфография. Выученные каркасы не ломаются; ошибки появляются там, где собираешь на ходу. Поэтому джокер лучше импровизации." },
  { de:"Spektrum sprachlicher Mittel", ru:"Спектр языковых средств",
    text:"Разнообразие и уровень конструкций: Genitiv, Passiv, Konjunktiv II, условие без wenn, инверсия, придаточные цели." }
];

/* Вырезанное и заменённое — справка, НЕ учить */
const RESERVE = [
  { blk:"4 · старый вариант, не учить", de:"Aufgrund [причина] kam es zu dieser unangenehmen Situation.", ru:"Из-за [причина] возникла эта неприятная ситуация. — твой исходник; учишь с misslichen" },
  { blk:"4 · v4.3", de:"Wie eine eingehende Prüfung ergeben hat, ist es aufgrund [причина] zu den von Ihnen geschilderten Unregelmäßigkeiten gekommen.", ru:"Как показала тщательная проверка, из-за [причина] возникли описанные Вами сбои. — длинно, лишняя «проверка»" },
  { blk:"4 · вторая конструкция", de:"Dies ist auf [причина в Akkusativ] zurückzuführen.", ru:"Это объясняется [причиной]. — не решено, не учить" },
  { blk:"5 · v4.3", de:"So sehr wir Ihr Anliegen auch nachvollziehen können, weisen wir Sie darauf hin, dass [X].", ru:"Как бы мы ни понимали Ваше обращение, мы обращаем Ваше внимание на то, что [X]. — 14 слов рамки, не для 20 минут" },
  { blk:"5 · твой исходник", de:"Ein Teil des Problems lag leider außerhalb unseres Einflussbereichs.", ru:"Часть проблемы, к сожалению, лежала вне нашей сферы влияния. — покрыто слотом блока 5" },
  { blk:"5 · твой исходник", de:"Bitte beachten Sie, dass …", ru:"Пожалуйста, учтите, что … — рабочий вариант, но учим один каркас" },
  { blk:"5 · v4.3", de:"wir die Ursache nicht beeinflussen können", ru:"мы не можем повлиять на причину — заменено твоим «außerhalb unseres Einflussbereichs»" },
  { blk:"6 · v4.3", de:"Die betreffenden Artikel werden Ihnen [когда] zugesandt.", ru:"Соответствующие товары будут Вам высланы. — заменено двумя фразами из твоего шаблона" },
  { blk:"7 · твой исходник", de:"eine sofortige Reduktion im Wert von 50 €", ru:"немедленная скидка 50 € — «Reduktion» про цену звучит неестественно, это Preisnachlass" },
  { blk:"7 · зачин после отказа", de:"Um Ihnen dennoch entgegenzukommen, bieten wir Ihnen … an.", ru:"Чтобы всё же пойти Вам навстречу, мы предлагаем Вам …" },
  { blk:"8 · v4.3", de:"Zur Vermeidung ähnlicher Vorkommnisse …", ru:"Во избежание подобных происшествий … — заменено твоим «solcher Vorfälle»" },
  { blk:"14 · v4.3", de:"Sollte der Termin nicht passen, melden Sie sich bitte bei uns.", ru:"Если дата не подойдёт, свяжитесь с нами. — расширено до любого [X] через zusagen" },
  { blk:"9 · редкое", de:"von einer Kündigung des Vertrags absehen", ru:"откажетесь от расторжения договора — если клиент грозит расторжением" }
];


/* Образцы писем — собраны автоматически из блоков выше (muster.js) */
const MUSTER = [
 {
  "id": "J",
  "titel": "Письмо из одних джокеров",
  "ru": "выучить ПЕРВЫМ — подходит к любому заданию, даже если в записке ничего не понял",
  "saetze": [
   {
    "id": "1",
    "de": "Sehr geehrte Frau Weber,",
    "ru": "Глубокоуважаемая госпожа Вебер,"
   },
   {
    "id": "2",
    "de": "Ihre Anfrage hat uns erreicht.",
    "ru": "Ваш запрос до нас дошёл."
   },
   {
    "id": "3",
    "de": "Wir verstehen Ihren Ärger und möchten uns aufrichtig für die entstandenen Unannehmlichkeiten entschuldigen.",
    "ru": "Мы понимаем Ваше раздражение и хотели бы искренне извиниться за возникшие неудобства."
   },
   {
    "id": "4",
    "de": "Aufgrund eines bedauerlichen Zusammentreffens mehrerer ungünstiger Umstände kam es zu dieser misslichen Situation.",
    "ru": "Из-за прискорбного стечения нескольких неблагоприятных обстоятельств возникла эта досадная ситуация."
   },
   {
    "id": "6",
    "de": "Selbstverständlich schaffen wir Abhilfe: Alle beanstandeten Punkte werden unverzüglich erledigt.",
    "ru": "Разумеется, мы примем меры: все пункты, на которые Вы указали, будут незамедлительно выполнены."
   },
   {
    "id": "8",
    "de": "Zur Vermeidung solcher Vorfälle haben wir bereits entsprechende Maßnahmen ergriffen.",
    "ru": "Во избежание таких случаев мы уже приняли соответствующие меры."
   },
   {
    "id": "7",
    "de": "Als Entschuldigung gewähren wir Ihnen einen Preisnachlass in Höhe von 20 %.",
    "ru": "В качестве извинения мы предоставляем Вам скидку в размере 20 %."
   },
   {
    "id": "9",
    "de": "Wir hoffen darauf, dass Sie trotz dieses Vorfalls auch weiterhin unsere treue Kundin bleiben.\nUnsere Kunden haben oberste Priorität, und wir sind stets bestrebt, Ihnen den bestmöglichen Service zu bieten. Bei Rückfragen stehen wir Ihnen gerne zur Verfügung.",
    "ru": "Мы надеемся на то, что Вы, несмотря на этот случай, и впредь останетесь нашей верной клиенткой.\nНаши клиенты имеют высший приоритет, и мы всегда стремимся предложить Вам наилучший сервис. При дополнительных вопросах мы охотно в Вашем распоряжении."
   },
   {
    "id": "9",
    "de": "Mit freundlichen Grüßen\n[Vorname Nachname]",
    "ru": "С уважением\n[Имя Фамилия]"
   }
  ]
 },
 {
  "id": "А",
  "titel": "А · Виноваты — исправляем",
  "ru": "шеф просит извиниться, объяснить причину, исправить, не допустить повторения, компенсировать",
  "saetze": [
   {
    "id": "1",
    "de": "Sehr geehrte Frau Weber,",
    "ru": "Глубокоуважаемая госпожа Вебер,"
   },
   {
    "id": "2",
    "de": "Ihre Anfrage hat uns erreicht.",
    "ru": "Ваш запрос до нас дошёл."
   },
   {
    "id": "3",
    "de": "Wir verstehen Ihren Ärger und möchten uns aufrichtig für die entstandenen Unannehmlichkeiten entschuldigen.",
    "ru": "Мы понимаем Ваше раздражение и хотели бы искренне извиниться за возникшие неудобства."
   },
   {
    "id": "4",
    "de": "Aufgrund eines Produktionsfehlers kam es zu dieser misslichen Situation.",
    "ru": "Из-за производственного брака возникла эта досадная ситуация."
   },
   {
    "id": "6",
    "de": "Selbstverständlich schaffen wir Abhilfe: Ein Ersatz wird Ihnen unverzüglich zugesandt.",
    "ru": "Разумеется, мы примем меры: замена будет Вам незамедлительно выслана."
   },
   {
    "id": "8",
    "de": "Zur Vermeidung solcher Vorfälle wird jeder Auftrag künftig zusätzlich kontrolliert.",
    "ru": "Во избежание таких случаев каждый заказ впредь дополнительно проверяется."
   },
   {
    "id": "7",
    "de": "Als Entschuldigung gewähren wir Ihnen einen Preisnachlass in Höhe von 20 %.",
    "ru": "В качестве извинения мы предоставляем Вам скидку в размере 20 %."
   },
   {
    "id": "9",
    "de": "Wir hoffen darauf, dass Sie trotz dieses Vorfalls auch weiterhin unsere treue Kundin bleiben.\nUnsere Kunden haben oberste Priorität, und wir sind stets bestrebt, Ihnen den bestmöglichen Service zu bieten. Bei Rückfragen stehen wir Ihnen gerne zur Verfügung.",
    "ru": "Мы надеемся на то, что Вы, несмотря на этот случай, и впредь останетесь нашей верной клиенткой.\nНаши клиенты имеют высший приоритет, и мы всегда стремимся предложить Вам наилучший сервис. При дополнительных вопросах мы охотно в Вашем распоряжении."
   },
   {
    "id": "9",
    "de": "Mit freundlichen Grüßen\n[Vorname Nachname]",
    "ru": "С уважением\n[Имя Фамилия]"
   }
  ]
 },
 {
  "id": "Б",
  "titel": "Б · Отказ",
  "ru": "шеф пишет «ablehnen», «nicht möglich»",
  "saetze": [
   {
    "id": "1",
    "de": "Sehr geehrte Frau Weber,",
    "ru": "Глубокоуважаемая госпожа Вебер,"
   },
   {
    "id": "2",
    "de": "Ihre Anfrage hat uns erreicht.",
    "ru": "Ваш запрос до нас дошёл."
   },
   {
    "id": "3",
    "de": "Wir verstehen Ihren Ärger und möchten uns aufrichtig für die entstandenen Unannehmlichkeiten entschuldigen.",
    "ru": "Мы понимаем Ваше раздражение и хотели бы искренне извиниться за возникшие неудобства."
   },
   {
    "id": "4",
    "de": "Aufgrund eines bedauerlichen Zusammentreffens mehrerer ungünstiger Umstände kam es zu dieser misslichen Situation.",
    "ru": "Из-за прискорбного стечения нескольких неблагоприятных обстоятельств возникла эта досадная ситуация."
   },
   {
    "id": "5",
    "de": "Wir möchten Sie jedoch darauf hinweisen, dass wir Ihre Forderungen in dieser Form leider nicht erfüllen können.",
    "ru": "Однако мы хотели бы обратить Ваше внимание на то, что мы, к сожалению, не можем выполнить Ваши требования в таком виде."
   },
   {
    "id": "7",
    "de": "Als Entschuldigung gewähren wir Ihnen einen Preisnachlass in Höhe von 20 %.",
    "ru": "В качестве извинения мы предоставляем Вам скидку в размере 20 %."
   },
   {
    "id": "9",
    "de": "Wir hoffen darauf, dass Sie trotz dieses Vorfalls auch weiterhin unsere treue Kundin bleiben.\nUnsere Kunden haben oberste Priorität, und wir sind stets bestrebt, Ihnen den bestmöglichen Service zu bieten. Bei Rückfragen stehen wir Ihnen gerne zur Verfügung.",
    "ru": "Мы надеемся на то, что Вы, несмотря на этот случай, и впредь останетесь нашей верной клиенткой.\nНаши клиенты имеют высший приоритет, и мы всегда стремимся предложить Вам наилучший сервис. При дополнительных вопросах мы охотно в Вашем распоряжении."
   },
   {
    "id": "9",
    "de": "Mit freundlichen Grüßen\n[Vorname Nachname]",
    "ru": "С уважением\n[Имя Фамилия]"
   }
  ]
 },
 {
  "id": "В",
  "titel": "В · Делаем, но дальше платно",
  "ru": "шеф пишет, что лимит исчерпан и дальше за деньги",
  "saetze": [
   {
    "id": "1",
    "de": "Sehr geehrte Frau Weber,",
    "ru": "Глубокоуважаемая госпожа Вебер,"
   },
   {
    "id": "2",
    "de": "Ihre Anfrage hat uns erreicht.",
    "ru": "Ваш запрос до нас дошёл."
   },
   {
    "id": "3",
    "de": "Wir verstehen Ihren Ärger und möchten uns aufrichtig für die entstandenen Unannehmlichkeiten entschuldigen.",
    "ru": "Мы понимаем Ваше раздражение и хотели бы искренне извиниться за возникшие неудобства."
   },
   {
    "id": "4",
    "de": "Aufgrund eines krankheitsbedingten Personalausfalls kam es zu dieser misslichen Situation.",
    "ru": "Из-за отсутствия персонала по болезни возникла эта досадная ситуация."
   },
   {
    "id": "5",
    "de": "Wir möchten Sie jedoch darauf hinweisen, dass Ihre Wünsche über den vereinbarten Leistungsumfang hinausgehen.",
    "ru": "Однако мы хотели бы обратить Ваше внимание на то, что Ваши пожелания выходят за рамки согласованного объёма услуг."
   },
   {
    "id": "12",
    "de": "Ausnahmsweise übernehmen wir die Kosten dieses Mal noch. Alle weiteren Leistungen werden wir Ihnen jedoch in Rechnung stellen.",
    "ru": "В порядке исключения в этот раз расходы мы ещё берём на себя. Все дальнейшие услуги мы, однако, выставим Вам в счёт."
   },
   {
    "id": "6",
    "de": "Selbstverständlich schaffen wir Abhilfe: Alle beanstandeten Punkte werden unverzüglich erledigt.",
    "ru": "Разумеется, мы примем меры: все пункты, на которые Вы указали, будут незамедлительно выполнены."
   },
   {
    "id": "9",
    "de": "Wir hoffen darauf, dass Sie trotz dieses Vorfalls auch weiterhin unser treuer Kunde bleiben.\nUnsere Kunden haben oberste Priorität, und wir sind stets bestrebt, Ihnen den bestmöglichen Service zu bieten. Bei Rückfragen stehen wir Ihnen gerne zur Verfügung.",
    "ru": "Мы надеемся на то, что Вы, несмотря на этот случай, и впредь останетесь нашим верным клиентом.\nНаши клиенты имеют высший приоритет, и мы всегда стремимся предложить Вам наилучший сервис. При дополнительных вопросах мы охотно в Вашем распоряжении."
   },
   {
    "id": "9",
    "de": "Mit freundlichen Grüßen\n[Vorname Nachname]",
    "ru": "С уважением\n[Имя Фамилия]"
   }
  ]
 },
 {
  "id": "Г",
  "titel": "Г · Ещё разбираемся",
  "ru": "шеф пишет «wird geprüft», «Umstände klären»",
  "saetze": [
   {
    "id": "1",
    "de": "Sehr geehrte Frau Weber,",
    "ru": "Глубокоуважаемая госпожа Вебер,"
   },
   {
    "id": "2",
    "de": "Ihre Anfrage hat uns erreicht.",
    "ru": "Ваш запрос до нас дошёл."
   },
   {
    "id": "3",
    "de": "Wir verstehen Ihren Ärger und möchten uns aufrichtig für die entstandenen Unannehmlichkeiten entschuldigen.",
    "ru": "Мы понимаем Ваше раздражение и хотели бы искренне извиниться за возникшие неудобства."
   },
   {
    "id": "13",
    "de": "Der Sachverhalt wird derzeit intern geprüft; über das Ergebnis informieren wir Sie zeitnah.",
    "ru": "Обстоятельства дела в настоящее время проверяются внутри компании; о результате мы сообщим Вам в ближайшее время."
   },
   {
    "id": "7",
    "de": "Als Entschuldigung gewähren wir Ihnen einen Preisnachlass in Höhe von 20 %.",
    "ru": "В качестве извинения мы предоставляем Вам скидку в размере 20 %."
   },
   {
    "id": "15",
    "de": "Bitte teilen Sie uns mit, ob Sie einverstanden sind.",
    "ru": "Пожалуйста, сообщите нам, согласны ли Вы."
   },
   {
    "id": "9",
    "de": "Wir hoffen darauf, dass Sie trotz dieses Vorfalls auch weiterhin unsere treue Kundin bleiben.\nUnsere Kunden haben oberste Priorität, und wir sind stets bestrebt, Ihnen den bestmöglichen Service zu bieten. Bei Rückfragen stehen wir Ihnen gerne zur Verfügung.",
    "ru": "Мы надеемся на то, что Вы, несмотря на этот случай, и впредь останетесь нашей верной клиенткой.\nНаши клиенты имеют высший приоритет, и мы всегда стремимся предложить Вам наилучший сервис. При дополнительных вопросах мы охотно в Вашем распоряжении."
   },
   {
    "id": "9",
    "de": "Mit freundlichen Grüßen\n[Vorname Nachname]",
    "ru": "С уважением\n[Имя Фамилия]"
   }
  ]
 },
 {
  "id": "Д",
  "titel": "Д · Срок позже требуемого",
  "ru": "клиент требует замену / недостающий / верный товар к дате, шеф называет дату позже",
  "saetze": [
   {
    "id": "1",
    "de": "Sehr geehrte Frau Weber,",
    "ru": "Глубокоуважаемая госпожа Вебер,"
   },
   {
    "id": "2",
    "de": "Ihre Anfrage hat uns erreicht.",
    "ru": "Ваш запрос до нас дошёл."
   },
   {
    "id": "3",
    "de": "Wir verstehen Ihren Ärger und möchten uns aufrichtig für die entstandenen Unannehmlichkeiten entschuldigen.",
    "ru": "Мы понимаем Ваше раздражение и хотели бы искренне извиниться за возникшие неудобства."
   },
   {
    "id": "4",
    "de": "Aufgrund eines Lieferengpasses bei unserem Hersteller kam es zu dieser misslichen Situation.",
    "ru": "Из-за перебоев с поставками у нашего производителя возникла эта досадная ситуация."
   },
   {
    "id": "5",
    "de": "Wir möchten Sie jedoch darauf hinweisen, dass eine Lieferung bis zum 1. Oktober leider nicht möglich ist.",
    "ru": "Однако мы хотели бы обратить Ваше внимание на то, что доставка до 1 октября, к сожалению, невозможна."
   },
   {
    "id": "6",
    "de": "Selbstverständlich schaffen wir Abhilfe: Die fehlenden Artikel werden spätestens bis zum 12. Oktober nachgeliefert.",
    "ru": "Разумеется, мы примем меры: недостающие товары будут самое позднее до 12 октября допоставлены."
   },
   {
    "id": "14",
    "de": "Sollte Ihnen der neue Liefertermin nicht zusagen, melden Sie sich bitte bei uns.",
    "ru": "Если Вас не устроит новая дата доставки, пожалуйста, свяжитесь с нами."
   },
   {
    "id": "7",
    "de": "Als Entschuldigung gewähren wir Ihnen einen Preisnachlass in Höhe von 20 %.",
    "ru": "В качестве извинения мы предоставляем Вам скидку в размере 20 %."
   },
   {
    "id": "9",
    "de": "Wir hoffen darauf, dass Sie trotz dieses Vorfalls auch weiterhin unsere treue Kundin bleiben.\nUnsere Kunden haben oberste Priorität, und wir sind stets bestrebt, Ihnen den bestmöglichen Service zu bieten. Bei Rückfragen stehen wir Ihnen gerne zur Verfügung.",
    "ru": "Мы надеемся на то, что Вы, несмотря на этот случай, и впредь останетесь нашей верной клиенткой.\nНаши клиенты имеют высший приоритет, и мы всегда стремимся предложить Вам наилучший сервис. При дополнительных вопросах мы охотно в Вашем распоряжении."
   },
   {
    "id": "9",
    "de": "Mit freundlichen Grüßen\n[Vorname Nachname]",
    "ru": "С уважением\n[Имя Фамилия]"
   }
  ]
 },
 {
  "id": "Е",
  "titel": "Е · Виноваты не мы",
  "ru": "шеф пишет «Lieferant», «Paketdienst», «Subunternehmer», «liegt nicht bei uns»",
  "saetze": [
   {
    "id": "1",
    "de": "Sehr geehrte Frau Weber,",
    "ru": "Глубокоуважаемая госпожа Вебер,"
   },
   {
    "id": "2",
    "de": "Ihre Anfrage hat uns erreicht.",
    "ru": "Ваш запрос до нас дошёл."
   },
   {
    "id": "3",
    "de": "Wir verstehen Ihren Ärger und möchten uns aufrichtig für die entstandenen Unannehmlichkeiten entschuldigen.",
    "ru": "Мы понимаем Ваше раздражение и хотели бы искренне извиниться за возникшие неудобства."
   },
   {
    "id": "4",
    "de": "Aufgrund eines Fehlers des Paketdienstes kam es zu dieser misslichen Situation.",
    "ru": "Из-за ошибки службы доставки возникла эта досадная ситуация."
   },
   {
    "id": "5",
    "de": "Wir möchten Sie jedoch darauf hinweisen, dass die Ursache außerhalb unseres Einflussbereichs lag.",
    "ru": "Однако мы хотели бы обратить Ваше внимание на то, что причина лежала вне нашей сферы влияния."
   },
   {
    "id": "6",
    "de": "Selbstverständlich schaffen wir Abhilfe: Ein Ersatz wird Ihnen unverzüglich zugesandt.",
    "ru": "Разумеется, мы примем меры: замена будет Вам незамедлительно выслана."
   },
   {
    "id": "7",
    "de": "Als Zeichen unseres Entgegenkommens bieten wir Ihnen eine kostenfreie Lieferung Ihrer nächsten Bestellung an.",
    "ru": "В знак нашего расположения мы предлагаем Вам бесплатную доставку Вашего следующего заказа."
   },
   {
    "id": "9",
    "de": "Wir hoffen darauf, dass Sie trotz dieses Vorfalls auch weiterhin unsere treue Kundin bleiben.\nUnsere Kunden haben oberste Priorität, und wir sind stets bestrebt, Ihnen den bestmöglichen Service zu bieten. Bei Rückfragen stehen wir Ihnen gerne zur Verfügung.",
    "ru": "Мы надеемся на то, что Вы, несмотря на этот случай, и впредь останетесь нашей верной клиенткой.\nНаши клиенты имеют высший приоритет, и мы всегда стремимся предложить Вам наилучший сервис. При дополнительных вопросах мы охотно в Вашем распоряжении."
   },
   {
    "id": "9",
    "de": "Mit freundlichen Grüßen\n[Vorname Nachname]",
    "ru": "С уважением\n[Имя Фамилия]"
   }
  ]
 }
];
