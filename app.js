const WORDS = [
  { id: 1, spanish: "hola", korean: "안녕", hint: "가장 기본적인 인사", example: "Hola, ¿cómo estás?", exampleKo: "안녕, 어떻게 지내?", exampleWords: [{ word: "hola", meaning: "안녕" }, { word: "cómo", meaning: "어떻게" }, { word: "estás", meaning: "너는 지내고 있다" }], category: "기본", difficulty: 1 },
  { id: 2, spanish: "gracias", korean: "고마워", hint: "감사를 표현할 때", example: "Muchas gracias por tu ayuda.", exampleKo: "도와줘서 정말 고마워.", exampleWords: [{ word: "muchas", meaning: "정말 많은, 매우" }, { word: "gracias", meaning: "감사, 고마워" }, { word: "por", meaning: "~때문에, ~에 대해" }, { word: "tu", meaning: "너의" }, { word: "ayuda", meaning: "도움" }], category: "기본", difficulty: 1 },
  { id: 3, spanish: "agua", korean: "물", hint: "매일 꼭 마시는 것", example: "¿Me das un vaso de agua?", exampleKo: "물 한 잔 주실래요?", exampleWords: [{ word: "me", meaning: "나에게" }, { word: "das", meaning: "준다" }, { word: "un", meaning: "하나의, 한" }, { word: "vaso", meaning: "유리컵, 잔" }, { word: "de", meaning: "~의, ~로 된" }, { word: "agua", meaning: "물" }], category: "음식", difficulty: 1 },
  { id: 4, spanish: "pan", korean: "빵", hint: "아침 식사에 자주 등장", example: "Voy a comprar pan para el desayuno.", exampleKo: "아침 먹을 빵을 사러 갈게.", exampleWords: [{ word: "voy", meaning: "나는 간다" }, { word: "a", meaning: "~하러, ~로" }, { word: "comprar", meaning: "사다" }, { word: "pan", meaning: "빵" }, { word: "para", meaning: "~를 위해" }, { word: "el", meaning: "그, 정관사" }, { word: "desayuno", meaning: "아침식사" }], category: "음식", difficulty: 1 },
  { id: 5, spanish: "casa", korean: "집", hint: "가장 편안한 공간", example: "Hoy me quedo en casa.", exampleKo: "오늘은 집에 있을 거야.", exampleWords: [{ word: "hoy", meaning: "오늘" }, { word: "me", meaning: "나 자신을, 나" }, { word: "quedo", meaning: "머문다, 남아 있다" }, { word: "en", meaning: "~에, ~에서" }, { word: "casa", meaning: "집" }], category: "장소", difficulty: 1 },
  { id: 6, spanish: "escuela", korean: "학교", hint: "배우러 가는 곳", example: "Mi hermano está en la escuela ahora.", exampleKo: "내 동생은 지금 학교에 있어.", exampleWords: [{ word: "mi", meaning: "나의" }, { word: "hermano", meaning: "남자형제, 남동생, 오빠" }, { word: "está", meaning: "있다" }, { word: "en", meaning: "~에, ~에서" }, { word: "la", meaning: "그, 정관사" }, { word: "escuela", meaning: "학교" }, { word: "ahora", meaning: "지금" }], category: "장소", difficulty: 2 },
  { id: 7, spanish: "amigo", korean: "친구", hint: "함께 시간을 보내는 사람", example: "Voy al cine con un amigo.", exampleKo: "친구랑 영화 보러 가.", exampleWords: [{ word: "voy", meaning: "나는 간다" }, { word: "al", meaning: "a + el, ~로" }, { word: "cine", meaning: "영화관" }, { word: "con", meaning: "~와 함께" }, { word: "un", meaning: "한, 하나의" }, { word: "amigo", meaning: "친구" }], category: "사람", difficulty: 2 },
  { id: 8, spanish: "familia", korean: "가족", hint: "가장 가까운 사람들", example: "Mi familia vive en Busan.", exampleKo: "우리 가족은 부산에 살아.", exampleWords: [{ word: "mi", meaning: "나의" }, { word: "familia", meaning: "가족" }, { word: "vive", meaning: "산다, 거주한다" }, { word: "en", meaning: "~에, ~에서" }, { word: "Busan", meaning: "부산" }], category: "사람", difficulty: 2 },
  { id: 9, spanish: "libro", korean: "책", hint: "읽을 수 있는 것", example: "Estoy leyendo un libro interesante.", exampleKo: "나는 재미있는 책을 읽고 있어.", exampleWords: [{ word: "estoy", meaning: "나는 ~하고 있다" }, { word: "leyendo", meaning: "읽고 있는 중" }, { word: "un", meaning: "한, 하나의" }, { word: "libro", meaning: "책" }, { word: "interesante", meaning: "재미있는, 흥미로운" }], category: "사물", difficulty: 2 },
  { id: 10, spanish: "mesa", korean: "테이블", hint: "물건을 올려두는 가구", example: "Las llaves están sobre la mesa.", exampleKo: "열쇠는 테이블 위에 있어.", exampleWords: [{ word: "las", meaning: "그, 정관사 복수" }, { word: "llaves", meaning: "열쇠들" }, { word: "están", meaning: "있다, 놓여 있다" }, { word: "sobre", meaning: "~위에" }, { word: "la", meaning: "그, 정관사" }, { word: "mesa", meaning: "테이블" }], category: "사물", difficulty: 2 },
  { id: 11, spanish: "feliz", korean: "행복한", hint: "기분이 아주 좋은 상태", example: "Estoy feliz porque es viernes.", exampleKo: "금요일이라 행복해.", exampleWords: [{ word: "estoy", meaning: "나는 ~이다, ~한 상태다" }, { word: "feliz", meaning: "행복한" }, { word: "porque", meaning: "~이기 때문에" }, { word: "es", meaning: "~이다" }, { word: "viernes", meaning: "금요일" }], category: "감정", difficulty: 3 },
  { id: 12, spanish: "cansado", korean: "피곤한", hint: "에너지가 부족한 상태", example: "Estoy muy cansado después del trabajo.", exampleKo: "퇴근하고 나니 정말 피곤해.", exampleWords: [{ word: "estoy", meaning: "나는 ~한 상태다" }, { word: "muy", meaning: "매우" }, { word: "cansado", meaning: "피곤한" }, { word: "después", meaning: "~후에" }, { word: "del", meaning: "de + el, ~의, ~후의" }, { word: "trabajo", meaning: "일, 직장" }], category: "감정", difficulty: 3 },
  { id: 13, spanish: "rápido", korean: "빠른", hint: "속도가 높을 때", example: "Necesito una respuesta rápida.", exampleKo: "빠른 답변이 필요해.", exampleWords: [{ word: "necesito", meaning: "나는 필요하다" }, { word: "una", meaning: "하나의, 한" }, { word: "respuesta", meaning: "답변" }, { word: "rápida", meaning: "빠른" }], category: "형용사", difficulty: 3 },
  { id: 14, spanish: "ventana", korean: "창문", hint: "바깥을 볼 수 있는 곳", example: "Abre la ventana, hace calor.", exampleKo: "덥네, 창문 좀 열어줘.", exampleWords: [{ word: "abre", meaning: "열어" }, { word: "la", meaning: "그, 정관사" }, { word: "ventana", meaning: "창문" }, { word: "hace", meaning: "하다, 날씨가 ~하다" }, { word: "calor", meaning: "더위, 더운 상태" }], category: "사물", difficulty: 3 },
  { id: 15, spanish: "desayuno", korean: "아침식사", hint: "하루의 첫 끼", example: "No tomo desayuno cuando llego tarde.", exampleKo: "늦으면 아침을 못 먹어.", exampleWords: [{ word: "no", meaning: "아니다, ~않다" }, { word: "tomo", meaning: "먹는다, 마신다" }, { word: "desayuno", meaning: "아침식사" }, { word: "cuando", meaning: "~할 때" }, { word: "llego", meaning: "도착한다" }, { word: "tarde", meaning: "늦게, 늦은" }], category: "음식", difficulty: 4 },
  { id: 16, spanish: "ciudad", korean: "도시", hint: "사람들이 많이 사는 큰 곳", example: "Esta ciudad nunca duerme.", exampleKo: "이 도시는 잠들지 않아.", exampleWords: [{ word: "esta", meaning: "이" }, { word: "ciudad", meaning: "도시" }, { word: "nunca", meaning: "절대 ~않다, 결코" }, { word: "duerme", meaning: "잔다" }], category: "장소", difficulty: 4 },
  { id: 17, spanish: "pregunta", korean: "질문", hint: "궁금한 것을 물을 때", example: "Tengo una pregunta sobre este trabajo.", exampleKo: "이 일에 대해 질문이 있어.", exampleWords: [{ word: "tengo", meaning: "나는 가지고 있다" }, { word: "una", meaning: "하나의, 한" }, { word: "pregunta", meaning: "질문" }, { word: "sobre", meaning: "~에 대해" }, { word: "este", meaning: "이" }, { word: "trabajo", meaning: "일, 작업" }], category: "기본", difficulty: 4 },
  { id: 18, spanish: "respuesta", korean: "대답", hint: "질문에 대한 말", example: "No sé la respuesta todavía.", exampleKo: "아직 답을 모르겠어.", exampleWords: [{ word: "no", meaning: "~않다" }, { word: "sé", meaning: "나는 안다" }, { word: "la", meaning: "그, 정관사" }, { word: "respuesta", meaning: "대답, 답변" }, { word: "todavía", meaning: "아직" }], category: "기본", difficulty: 4 },
  { id: 19, spanish: "adiós", korean: "잘 가", hint: "헤어질 때 하는 인사", example: "Adiós, nos vemos mañana.", exampleKo: "잘 가, 우리 내일 보자.", exampleWords: [{ word: "adiós", meaning: "잘 가, 안녕" }, { word: "nos", meaning: "우리 서로" }, { word: "vemos", meaning: "본다" }, { word: "mañana", meaning: "내일" }], category: "기본", difficulty: 1 },
  { id: 20, spanish: "perro", korean: "개", hint: "많이 키우는 반려동물", example: "Mi perro duerme mucho.", exampleKo: "우리 개는 잠을 많이 자.", exampleWords: [{ word: "mi", meaning: "나의" }, { word: "perro", meaning: "개" }, { word: "duerme", meaning: "잔다" }, { word: "mucho", meaning: "많이" }], category: "사람", difficulty: 1 },
  { id: 21, spanish: "gato", korean: "고양이", hint: "조용하고 귀여운 반려동물", example: "El gato está en la silla.", exampleKo: "고양이가 의자 위에 있어.", exampleWords: [{ word: "el", meaning: "그, 정관사" }, { word: "gato", meaning: "고양이" }, { word: "está", meaning: "있다" }, { word: "en", meaning: "~에, ~에서" }, { word: "la", meaning: "그, 정관사" }, { word: "silla", meaning: "의자" }], category: "사물", difficulty: 1 },
  { id: 22, spanish: "leche", korean: "우유", hint: "아침에 자주 마시는 음료", example: "Quiero café con leche.", exampleKo: "나는 카페라테가 마시고 싶어.", exampleWords: [{ word: "quiero", meaning: "나는 원한다" }, { word: "café", meaning: "커피" }, { word: "con", meaning: "~와 함께" }, { word: "leche", meaning: "우유" }], category: "음식", difficulty: 1 },
  { id: 23, spanish: "calle", korean: "거리", hint: "밖으로 나가면 보이는 길", example: "La calle está muy tranquila hoy.", exampleKo: "오늘 거리가 아주 조용해.", exampleWords: [{ word: "la", meaning: "그, 정관사" }, { word: "calle", meaning: "거리" }, { word: "está", meaning: "있다, 상태이다" }, { word: "muy", meaning: "매우" }, { word: "tranquila", meaning: "조용한" }, { word: "hoy", meaning: "오늘" }], category: "장소", difficulty: 2 },
  { id: 24, spanish: "comida", korean: "음식", hint: "먹는 것 전반", example: "La comida de aquí es buena.", exampleKo: "여기 음식은 맛있어.", exampleWords: [{ word: "la", meaning: "그, 정관사" }, { word: "comida", meaning: "음식" }, { word: "de", meaning: "~의, ~에서" }, { word: "aquí", meaning: "여기" }, { word: "es", meaning: "~이다" }, { word: "buena", meaning: "좋은, 맛있는" }], category: "음식", difficulty: 2 },
  { id: 25, spanish: "tiempo", korean: "시간", hint: "일정을 말할 때 자주 쓰는 말", example: "No tengo tiempo ahora.", exampleKo: "지금 시간이 없어.", exampleWords: [{ word: "no", meaning: "~않다" }, { word: "tengo", meaning: "나는 가지고 있다" }, { word: "tiempo", meaning: "시간" }, { word: "ahora", meaning: "지금" }], category: "기본", difficulty: 2 },
  { id: 26, spanish: "música", korean: "음악", hint: "듣는 예술", example: "Me gusta esta música.", exampleKo: "이 음악이 좋아.", exampleWords: [{ word: "me", meaning: "나에게" }, { word: "gusta", meaning: "좋아하다" }, { word: "esta", meaning: "이" }, { word: "música", meaning: "음악" }], category: "사물", difficulty: 2 },
  { id: 27, spanish: "difícil", korean: "어려운", hint: "쉽지 않을 때", example: "Esta pregunta es difícil.", exampleKo: "이 질문은 어려워.", exampleWords: [{ word: "esta", meaning: "이" }, { word: "pregunta", meaning: "질문" }, { word: "es", meaning: "~이다" }, { word: "difícil", meaning: "어려운" }], category: "형용사", difficulty: 3 },
  { id: 28, spanish: "fácil", korean: "쉬운", hint: "간단하게 할 수 있을 때", example: "El examen no es fácil.", exampleKo: "시험이 쉽지 않아.", exampleWords: [{ word: "el", meaning: "그, 정관사" }, { word: "examen", meaning: "시험" }, { word: "no", meaning: "~않다" }, { word: "es", meaning: "~이다" }, { word: "fácil", meaning: "쉬운" }], category: "형용사", difficulty: 3 },
  { id: 29, spanish: "lluvia", korean: "비", hint: "하늘에서 내리는 물", example: "Hoy hay mucha lluvia.", exampleKo: "오늘 비가 많이 와.", exampleWords: [{ word: "hoy", meaning: "오늘" }, { word: "hay", meaning: "있다" }, { word: "mucha", meaning: "많은" }, { word: "lluvia", meaning: "비" }], category: "장소", difficulty: 3 },
  { id: 30, spanish: "tarde", korean: "오후", hint: "점심 이후 시간대", example: "Nos vemos por la tarde.", exampleKo: "우리 오후에 보자.", exampleWords: [{ word: "nos", meaning: "우리 서로" }, { word: "vemos", meaning: "본다" }, { word: "por", meaning: "~에, ~동안" }, { word: "la", meaning: "그, 정관사" }, { word: "tarde", meaning: "오후" }], category: "기본", difficulty: 3 },
  { id: 31, spanish: "mercado", korean: "시장", hint: "물건을 사러 가는 곳", example: "Voy al mercado los sábados.", exampleKo: "나는 토요일마다 시장에 가.", exampleWords: [{ word: "voy", meaning: "나는 간다" }, { word: "al", meaning: "a + el, ~로" }, { word: "mercado", meaning: "시장" }, { word: "los", meaning: "그, 정관사 복수" }, { word: "sábados", meaning: "토요일마다" }], category: "장소", difficulty: 4 },
  { id: 32, spanish: "viaje", korean: "여행", hint: "다른 곳으로 떠나는 것", example: "Quiero hacer un viaje este verano.", exampleKo: "이번 여름에 여행 가고 싶어.", exampleWords: [{ word: "quiero", meaning: "나는 원한다" }, { word: "hacer", meaning: "하다" }, { word: "un", meaning: "한, 하나의" }, { word: "viaje", meaning: "여행" }, { word: "este", meaning: "이" }, { word: "verano", meaning: "여름" }], category: "장소", difficulty: 4 },
  { id: 33, spanish: "trabajar", korean: "일하다", hint: "직장에서 일을 할 때", example: "Tengo que trabajar mañana.", exampleKo: "나는 내일 일해야 해.", exampleWords: [{ word: "tengo", meaning: "나는 가지고 있다" }, { word: "que", meaning: "~해야 한다" }, { word: "trabajar", meaning: "일하다" }, { word: "mañana", meaning: "내일" }], category: "기본", difficulty: 4 },
  { id: 34, spanish: "importante", korean: "중요한", hint: "가치가 크고 꼭 필요한", example: "Es importante dormir bien.", exampleKo: "잘 자는 것은 중요해.", exampleWords: [{ word: "es", meaning: "~이다" }, { word: "importante", meaning: "중요한" }, { word: "dormir", meaning: "잠자다" }, { word: "bien", meaning: "잘" }], category: "형용사", difficulty: 4 },
  { id: 35, spanish: "sí", korean: "응, 네", hint: "긍정할 때 쓰는 말", example: "Sí, claro que puedo.", exampleKo: "응, 물론 할 수 있어.", exampleWords: [{ word: "sí", meaning: "응, 네" }, { word: "claro", meaning: "물론, 분명한" }, { word: "que", meaning: "~라는 것, 강조" }, { word: "puedo", meaning: "나는 할 수 있다" }], category: "기본", difficulty: 1 },
  { id: 36, spanish: "no", korean: "아니, 아니요", hint: "부정할 때 쓰는 말", example: "No, ahora no puedo.", exampleKo: "아니, 지금은 못 해.", exampleWords: [{ word: "no", meaning: "아니, ~않다" }, { word: "ahora", meaning: "지금" }, { word: "puedo", meaning: "나는 할 수 있다" }], category: "기본", difficulty: 1 },
  { id: 37, spanish: "día", korean: "하루, 날", hint: "날짜나 시간을 말할 때", example: "Hoy es un buen día.", exampleKo: "오늘은 좋은 날이야.", exampleWords: [{ word: "hoy", meaning: "오늘" }, { word: "es", meaning: "~이다" }, { word: "un", meaning: "한, 하나의" }, { word: "buen", meaning: "좋은" }, { word: "día", meaning: "하루, 날" }], category: "기본", difficulty: 1 },
  { id: 38, spanish: "sol", korean: "태양", hint: "하늘에 떠 있는 해", example: "Hoy hace mucho sol.", exampleKo: "오늘 햇빛이 아주 강해.", exampleWords: [{ word: "hoy", meaning: "오늘" }, { word: "hace", meaning: "날씨가 ~하다" }, { word: "mucho", meaning: "매우, 많이" }, { word: "sol", meaning: "태양, 햇빛" }], category: "장소", difficulty: 1 },
  { id: 39, spanish: "madre", korean: "엄마", hint: "가족 구성원", example: "Mi madre cocina muy bien.", exampleKo: "우리 엄마는 요리를 아주 잘해.", exampleWords: [{ word: "mi", meaning: "나의" }, { word: "madre", meaning: "엄마" }, { word: "cocina", meaning: "요리한다" }, { word: "muy", meaning: "매우" }, { word: "bien", meaning: "잘" }], category: "사람", difficulty: 1 },
  { id: 40, spanish: "padre", korean: "아빠", hint: "가족 구성원", example: "Mi padre llega tarde hoy.", exampleKo: "우리 아빠는 오늘 늦게 와.", exampleWords: [{ word: "mi", meaning: "나의" }, { word: "padre", meaning: "아빠" }, { word: "llega", meaning: "도착한다, 온다" }, { word: "tarde", meaning: "늦게" }, { word: "hoy", meaning: "오늘" }], category: "사람", difficulty: 1 },
  { id: 41, spanish: "coche", korean: "자동차", hint: "이동할 때 타는 것", example: "El coche está afuera.", exampleKo: "차가 밖에 있어.", exampleWords: [{ word: "el", meaning: "그, 정관사" }, { word: "coche", meaning: "자동차" }, { word: "está", meaning: "있다" }, { word: "afuera", meaning: "밖에" }], category: "사물", difficulty: 1 },
  { id: 42, spanish: "puerta", korean: "문", hint: "열고 닫는 출입구", example: "Cierra la puerta, por favor.", exampleKo: "문 좀 닫아줘.", exampleWords: [{ word: "cierra", meaning: "닫아" }, { word: "la", meaning: "그, 정관사" }, { word: "puerta", meaning: "문" }, { word: "por favor", meaning: "부탁해" }], category: "사물", difficulty: 1 },
  { id: 43, spanish: "silla", korean: "의자", hint: "앉을 때 쓰는 가구", example: "La silla está al lado de la mesa.", exampleKo: "의자가 테이블 옆에 있어.", exampleWords: [{ word: "la", meaning: "그, 정관사" }, { word: "silla", meaning: "의자" }, { word: "está", meaning: "있다" }, { word: "al lado de", meaning: "~옆에" }, { word: "mesa", meaning: "테이블" }], category: "사물", difficulty: 1 },
  { id: 44, spanish: "mañana", korean: "아침", hint: "하루의 이른 시간", example: "Trabajo por la mañana.", exampleKo: "나는 아침에 일해.", exampleWords: [{ word: "trabajo", meaning: "나는 일한다" }, { word: "por", meaning: "~에, ~동안" }, { word: "la", meaning: "그, 정관사" }, { word: "mañana", meaning: "아침" }], category: "기본", difficulty: 1 },
  { id: 45, spanish: "parque", korean: "공원", hint: "산책하고 쉬는 곳", example: "Los niños juegan en el parque.", exampleKo: "아이들이 공원에서 놀아.", exampleWords: [{ word: "los", meaning: "그, 정관사 복수" }, { word: "niños", meaning: "아이들" }, { word: "juegan", meaning: "논다" }, { word: "en", meaning: "~에서" }, { word: "el", meaning: "그, 정관사" }, { word: "parque", meaning: "공원" }], category: "장소", difficulty: 1 },
  { id: 46, spanish: "doctor", korean: "의사", hint: "병원을 보는 직업", example: "Mi doctor es muy amable.", exampleKo: "내 의사는 아주 친절해.", exampleWords: [{ word: "mi", meaning: "나의" }, { word: "doctor", meaning: "의사" }, { word: "es", meaning: "~이다" }, { word: "muy", meaning: "매우" }, { word: "amable", meaning: "친절한" }], category: "사람", difficulty: 2 },
  { id: 47, spanish: "profesor", korean: "선생님", hint: "가르치는 사람", example: "El profesor habla despacio.", exampleKo: "선생님이 천천히 말해.", exampleWords: [{ word: "el", meaning: "그, 정관사" }, { word: "profesor", meaning: "선생님" }, { word: "habla", meaning: "말한다" }, { word: "despacio", meaning: "천천히" }], category: "사람", difficulty: 2 },
  { id: 48, spanish: "oficina", korean: "사무실", hint: "일하는 공간", example: "La oficina está cerca de aquí.", exampleKo: "사무실이 여기 가까이에 있어.", exampleWords: [{ word: "la", meaning: "그, 정관사" }, { word: "oficina", meaning: "사무실" }, { word: "está", meaning: "있다" }, { word: "cerca de", meaning: "~가까이에" }, { word: "aquí", meaning: "여기" }], category: "장소", difficulty: 2 },
  { id: 49, spanish: "tienda", korean: "가게", hint: "물건을 파는 곳", example: "La tienda abre a las diez.", exampleKo: "가게는 10시에 열어.", exampleWords: [{ word: "la", meaning: "그, 정관사" }, { word: "tienda", meaning: "가게" }, { word: "abre", meaning: "연다" }, { word: "a las", meaning: "~시에" }, { word: "diez", meaning: "열" }], category: "장소", difficulty: 2 },
  { id: 50, spanish: "camino", korean: "길", hint: "걸어가는 길, 경로", example: "El camino a casa es largo.", exampleKo: "집 가는 길이 멀어.", exampleWords: [{ word: "el", meaning: "그, 정관사" }, { word: "camino", meaning: "길" }, { word: "a", meaning: "~로" }, { word: "casa", meaning: "집" }, { word: "es", meaning: "~이다" }, { word: "largo", meaning: "긴, 먼" }], category: "장소", difficulty: 2 },
  { id: 51, spanish: "fruta", korean: "과일", hint: "건강한 먹거리", example: "Como fruta todos los días.", exampleKo: "나는 매일 과일을 먹어.", exampleWords: [{ word: "como", meaning: "나는 먹는다" }, { word: "fruta", meaning: "과일" }, { word: "todos", meaning: "모든" }, { word: "los", meaning: "그, 정관사 복수" }, { word: "días", meaning: "날들, 매일" }], category: "음식", difficulty: 2 },
  { id: 52, spanish: "verdad", korean: "진실, 사실", hint: "맞는 내용", example: "Es verdad, no es mentira.", exampleKo: "맞아, 거짓말이 아니야.", exampleWords: [{ word: "es", meaning: "~이다" }, { word: "verdad", meaning: "진실, 사실" }, { word: "no", meaning: "~않다" }, { word: "mentira", meaning: "거짓말" }], category: "기본", difficulty: 2 },
  { id: 53, spanish: "noche", korean: "밤", hint: "해가 진 이후 시간", example: "La noche está muy tranquila.", exampleKo: "밤이 아주 조용해.", exampleWords: [{ word: "la", meaning: "그, 정관사" }, { word: "noche", meaning: "밤" }, { word: "está", meaning: "상태이다" }, { word: "muy", meaning: "매우" }, { word: "tranquila", meaning: "조용한" }], category: "기본", difficulty: 2 },
  { id: 54, spanish: "bonito", korean: "예쁜", hint: "보기 좋고 아름다울 때", example: "Tu vestido es bonito.", exampleKo: "네 옷이 예뻐.", exampleWords: [{ word: "tu", meaning: "너의" }, { word: "vestido", meaning: "옷, 드레스" }, { word: "es", meaning: "~이다" }, { word: "bonito", meaning: "예쁜" }], category: "형용사", difficulty: 2 },
  { id: 55, spanish: "frío", korean: "추운", hint: "온도가 낮을 때", example: "Hoy está frío en la calle.", exampleKo: "오늘 거리가 추워.", exampleWords: [{ word: "hoy", meaning: "오늘" }, { word: "está", meaning: "상태이다" }, { word: "frío", meaning: "추운" }, { word: "en", meaning: "~에서" }, { word: "la", meaning: "그, 정관사" }, { word: "calle", meaning: "거리" }], category: "형용사", difficulty: 3 },
  { id: 56, spanish: "caliente", korean: "뜨거운", hint: "열이 많을 때", example: "La sopa está caliente.", exampleKo: "수프가 뜨거워.", exampleWords: [{ word: "la", meaning: "그, 정관사" }, { word: "sopa", meaning: "수프" }, { word: "está", meaning: "상태이다" }, { word: "caliente", meaning: "뜨거운" }], category: "형용사", difficulty: 3 },
  { id: 57, spanish: "triste", korean: "슬픈", hint: "기분이 가라앉을 때", example: "Estoy triste hoy.", exampleKo: "오늘 조금 슬퍼.", exampleWords: [{ word: "estoy", meaning: "나는 ~한 상태다" }, { word: "triste", meaning: "슬픈" }, { word: "hoy", meaning: "오늘" }], category: "감정", difficulty: 3 },
  { id: 58, spanish: "contento", korean: "기쁜", hint: "만족스럽고 좋은 기분", example: "Estoy contento con el resultado.", exampleKo: "결과가 마음에 들어서 기뻐.", exampleWords: [{ word: "estoy", meaning: "나는 ~한 상태다" }, { word: "contento", meaning: "기쁜, 만족한" }, { word: "con", meaning: "~에 대해" }, { word: "el", meaning: "그, 정관사" }, { word: "resultado", meaning: "결과" }], category: "감정", difficulty: 3 },
  { id: 59, spanish: "rádio", korean: "라디오", hint: "소리를 듣는 기기", example: "Escucho la rádio por la tarde.", exampleKo: "나는 오후에 라디오를 들어.", exampleWords: [{ word: "escucho", meaning: "나는 듣는다" }, { word: "la", meaning: "그, 정관사" }, { word: "rádio", meaning: "라디오" }, { word: "por", meaning: "~에, ~동안" }, { word: "la", meaning: "그, 정관사" }, { word: "tarde", meaning: "오후" }], category: "사물", difficulty: 3 },
  { id: 60, spanish: "zapato", korean: "신발", hint: "발에 신는 것", example: "Necesito zapatos nuevos.", exampleKo: "새 신발이 필요해.", exampleWords: [{ word: "necesito", meaning: "나는 필요하다" }, { word: "zapatos", meaning: "신발들" }, { word: "nuevos", meaning: "새로운" }], category: "사물", difficulty: 3 },
  { id: 61, spanish: "limpio", korean: "깨끗한", hint: "더럽지 않은 상태", example: "El cuarto está limpio.", exampleKo: "방이 깨끗해.", exampleWords: [{ word: "el", meaning: "그, 정관사" }, { word: "cuarto", meaning: "방" }, { word: "está", meaning: "상태이다" }, { word: "limpio", meaning: "깨끗한" }], category: "형용사", difficulty: 3 },
  { id: 62, spanish: "sucio", korean: "더러운", hint: "깨끗하지 않은 상태", example: "El suelo está sucio.", exampleKo: "바닥이 더러워.", exampleWords: [{ word: "el", meaning: "그, 정관사" }, { word: "suelo", meaning: "바닥" }, { word: "está", meaning: "상태이다" }, { word: "sucio", meaning: "더러운" }], category: "형용사", difficulty: 3 },
  { id: 63, spanish: "jardín", korean: "정원", hint: "집이나 공원 옆의 식물 공간", example: "Hay flores en el jardín.", exampleKo: "정원에 꽃이 있어.", exampleWords: [{ word: "hay", meaning: "있다" }, { word: "flores", meaning: "꽃들" }, { word: "en", meaning: "~에" }, { word: "el", meaning: "그, 정관사" }, { word: "jardín", meaning: "정원" }], category: "장소", difficulty: 3 },
  { id: 64, spanish: "canción", korean: "노래", hint: "음악 한 곡", example: "Esta canción es famosa.", exampleKo: "이 노래는 유명해.", exampleWords: [{ word: "esta", meaning: "이" }, { word: "canción", meaning: "노래" }, { word: "es", meaning: "~이다" }, { word: "famosa", meaning: "유명한" }], category: "사물", difficulty: 3 },
  { id: 65, spanish: "aeropuerto", korean: "공항", hint: "비행기를 타는 곳", example: "El aeropuerto está lejos.", exampleKo: "공항이 멀어.", exampleWords: [{ word: "el", meaning: "그, 정관사" }, { word: "aeropuerto", meaning: "공항" }, { word: "está", meaning: "상태이다" }, { word: "lejos", meaning: "멀리, 먼" }], category: "장소", difficulty: 4 },
  { id: 66, spanish: "maleta", korean: "여행가방", hint: "짐을 담는 큰 가방", example: "Mi maleta es muy pesada.", exampleKo: "내 여행가방은 아주 무거워.", exampleWords: [{ word: "mi", meaning: "나의" }, { word: "maleta", meaning: "여행가방" }, { word: "es", meaning: "~이다" }, { word: "muy", meaning: "매우" }, { word: "pesada", meaning: "무거운" }], category: "사물", difficulty: 4 },
  { id: 67, spanish: "reunión", korean: "회의", hint: "사람들이 모여 이야기하는 자리", example: "Tengo una reunión a las tres.", exampleKo: "나는 3시에 회의가 있어.", exampleWords: [{ word: "tengo", meaning: "나는 가지고 있다" }, { word: "una", meaning: "하나의, 한" }, { word: "reunión", meaning: "회의" }, { word: "a las", meaning: "~시에" }, { word: "tres", meaning: "셋, 세 시" }], category: "기본", difficulty: 4 },
  { id: 68, spanish: "decisión", korean: "결정", hint: "선택하고 정하는 것", example: "Es una decisión difícil.", exampleKo: "그건 어려운 결정이야.", exampleWords: [{ word: "es", meaning: "~이다" }, { word: "una", meaning: "하나의, 한" }, { word: "decisión", meaning: "결정" }, { word: "difícil", meaning: "어려운" }], category: "기본", difficulty: 4 },
  { id: 69, spanish: "seguro", korean: "확실한", hint: "의심이 없을 때", example: "No estoy seguro de eso.", exampleKo: "나는 그게 확실하지 않아.", exampleWords: [{ word: "no", meaning: "~않다" }, { word: "estoy", meaning: "나는 ~한 상태다" }, { word: "seguro", meaning: "확실한" }, { word: "de", meaning: "~에 대해" }, { word: "eso", meaning: "그것" }], category: "형용사", difficulty: 4 },
  { id: 70, spanish: "posible", korean: "가능한", hint: "할 수 있는 상태", example: "Todo es posible con tiempo.", exampleKo: "시간이 있으면 모든 게 가능해.", exampleWords: [{ word: "todo", meaning: "모든 것" }, { word: "es", meaning: "~이다" }, { word: "posible", meaning: "가능한" }, { word: "con", meaning: "~와 함께, ~이 있으면" }, { word: "tiempo", meaning: "시간" }], category: "형용사", difficulty: 4 },
  { id: 71, spanish: "mensaje", korean: "메시지", hint: "문자로 보내는 말", example: "Te mando un mensaje luego.", exampleKo: "나중에 너에게 메시지 보낼게.", exampleWords: [{ word: "te", meaning: "너에게" }, { word: "mando", meaning: "나는 보낸다" }, { word: "un", meaning: "한, 하나의" }, { word: "mensaje", meaning: "메시지" }, { word: "luego", meaning: "나중에" }], category: "기본", difficulty: 4 },
  { id: 72, spanish: "aprender", korean: "배우다", hint: "새로운 것을 익히다", example: "Quiero aprender español rápido.", exampleKo: "나는 스페인어를 빨리 배우고 싶어.", exampleWords: [{ word: "quiero", meaning: "나는 원한다" }, { word: "aprender", meaning: "배우다" }, { word: "español", meaning: "스페인어" }, { word: "rápido", meaning: "빠르게" }], category: "기본", difficulty: 4 },
  { id: 73, spanish: "recordar", korean: "기억하다", hint: "잊지 않고 떠올리다", example: "No puedo recordar su nombre.", exampleKo: "나는 그의 이름이 기억나지 않아.", exampleWords: [{ word: "no", meaning: "~않다" }, { word: "puedo", meaning: "나는 할 수 있다" }, { word: "recordar", meaning: "기억하다" }, { word: "su", meaning: "그의, 그녀의" }, { word: "nombre", meaning: "이름" }], category: "기본", difficulty: 4 },
  { id: 74, spanish: "necesario", korean: "필요한", hint: "반드시 있어야 하는", example: "Es necesario estudiar cada día.", exampleKo: "매일 공부하는 것은 필요해.", exampleWords: [{ word: "es", meaning: "~이다" }, { word: "necesario", meaning: "필요한" }, { word: "estudiar", meaning: "공부하다" }, { word: "cada", meaning: "매" }, { word: "día", meaning: "하루, 날" }], category: "형용사", difficulty: 4 },
  { id: 75, spanish: "problema", korean: "문제", hint: "해결해야 할 일", example: "Tenemos un problema pequeño.", exampleKo: "우리에게 작은 문제가 있어.", exampleWords: [{ word: "tenemos", meaning: "우리는 가지고 있다" }, { word: "un", meaning: "한, 하나의" }, { word: "problema", meaning: "문제" }, { word: "pequeño", meaning: "작은" }], category: "기본", difficulty: 2 },
  { id: 76, spanish: "especial", korean: "특별한", hint: "보통과 다른 의미가 있는", example: "Hoy es un día especial.", exampleKo: "오늘은 특별한 날이야.", exampleWords: [{ word: "hoy", meaning: "오늘" }, { word: "es", meaning: "~이다" }, { word: "un", meaning: "한, 하나의" }, { word: "día", meaning: "날" }, { word: "especial", meaning: "특별한" }], category: "형용사", difficulty: 2 },
  { id: 77, spanish: "rápidamente", korean: "빠르게", hint: "속도가 빠르게", example: "Necesito terminar rápidamente.", exampleKo: "빨리 끝내야 해.", exampleWords: [{ word: "necesito", meaning: "나는 필요하다" }, { word: "terminar", meaning: "끝내다" }, { word: "rápidamente", meaning: "빠르게" }], category: "기본", difficulty: 3 },
  { id: 78, spanish: "inicio", korean: "시작", hint: "무언가의 처음", example: "Este es el inicio del curso.", exampleKo: "이것은 수업의 시작이야.", exampleWords: [{ word: "este", meaning: "이" }, { word: "es", meaning: "~이다" }, { word: "el", meaning: "그, 정관사" }, { word: "inicio", meaning: "시작" }, { word: "del", meaning: "de + el, ~의" }, { word: "curso", meaning: "수업, 과정" }], category: "기본", difficulty: 3 },
  { id: 79, spanish: "experiencia", korean: "경험", hint: "직접 겪어본 일", example: "Fue una experiencia muy útil.", exampleKo: "그건 아주 유익한 경험이었어.", exampleWords: [{ word: "fue", meaning: "~였다" }, { word: "una", meaning: "하나의, 한" }, { word: "experiencia", meaning: "경험" }, { word: "muy", meaning: "매우" }, { word: "útil", meaning: "유익한" }], category: "기본", difficulty: 4 },
  { id: 80, spanish: "oportunidad", korean: "기회", hint: "무언가를 할 수 있는 찬스", example: "Es una buena oportunidad para aprender.", exampleKo: "배우기에 좋은 기회야.", exampleWords: [{ word: "es", meaning: "~이다" }, { word: "una", meaning: "하나의, 한" }, { word: "buena", meaning: "좋은" }, { word: "oportunidad", meaning: "기회" }, { word: "para", meaning: "~하기에" }, { word: "aprender", meaning: "배우다" }], category: "기본", difficulty: 4 }
];

const LEVELS = [
  { level: 1, title: "Hola Start", minXp: 0, maxXp: 59, focus: "기초 인사와 생활 단어" },
  { level: 2, title: "Daily Flow", minXp: 60, maxXp: 139, focus: "일상 사물과 사람 표현" },
  { level: 3, title: "Quiz Booster", minXp: 140, maxXp: 249, focus: "형용사와 감정 어휘" },
  { level: 4, title: "Conversation Mode", minXp: 250, maxXp: Infinity, focus: "짧은 문장 확장과 응용" }
];

const STORAGE_KEY = "palabra-sprint-db";
const state = {
  db: loadDatabase(),
  activeTab: "learn",
  selectedLevel: null,
  flashIndex: 0,
  isFlipped: false,
  quizIndex: 0,
  quizEntries: [],
  availableVoices: []
};

initialize();

function initialize() {
  setupVoices();
  resetStudyFlow();
  renderApp();
}

function renderApp() {
  const app = document.getElementById("app");
  const activeProfile = getActiveProfile();
  const progress = activeProfile ? activeProfile.progress : createEmptyProgress();
  const unlockedLevel = getLevel(progress.xp);
  const activeLevelNumber = getActiveLevelNumber(progress);
  const currentLevel = LEVELS.find((level) => level.level === activeLevelNumber) || unlockedLevel;
  const nextLevel = LEVELS.find((level) => level.level === unlockedLevel.level + 1) || unlockedLevel;
  const levelWords = getWordsForExactLevel(activeLevelNumber);
  const currentWord = levelWords[state.flashIndex % levelWords.length] || WORDS[0];
  const quizEntry = state.quizEntries[state.quizIndex] || createQuizEntry(levelWords[0], levelWords);
  const quizWord = quizEntry.word;
  const quizOptions = quizEntry.options;
  const accuracy = progress.totalAnswers ? Math.round((progress.correctAnswers / progress.totalAnswers) * 100) : 0;
  const levelSpan = currentLevel.maxXp === Infinity ? 120 : currentLevel.maxXp - currentLevel.minXp + 1;
  const levelProgress = Math.max(0, Math.min(100, Math.round(((progress.xp - currentLevel.minXp) / levelSpan) * 100)));
  const todayProgress = getTodayProgress(progress);
  const currentWordNote = progress.notes[String(currentWord.id)] || "";
  const isFavoriteWord = progress.favoriteWords.includes(currentWord.id);
  const isReviewWord = progress.reviewWords.includes(currentWord.id);
  const spanishVoices = getSpanishVoices();
  const voiceChoices = getVoiceChoices(spanishVoices);
  const selectedVoiceChoice = getSelectedVoiceChoice(progress, voiceChoices);

  app.innerHTML = `
    <div class="app-shell">
      <header class="hero">
        <div class="hero__copy">
          <p class="eyebrow">Spanish Vocab Trainer</p>
          <h1>Palabra Sprint</h1>
          <p class="hero__text">
            스페인어 단어를 카드로 익히고, 퀴즈로 실력을 확인하는 학습 앱입니다.
            사용자별 기록, 레벨업, 발음 재생까지 한 화면에서 자연스럽게 이어집니다.
          </p>
          <div class="tab-row">
            <button class="${state.activeTab === "learn" ? "tab-button is-active" : "tab-button"}" data-action="tab" data-tab="learn">학습</button>
            <button class="${state.activeTab === "quiz" ? "tab-button is-active" : "tab-button"}" data-action="tab" data-tab="quiz">퀴즈</button>
            <button class="${state.activeTab === "profile" ? "tab-button is-active" : "tab-button"}" data-action="tab" data-tab="profile">프로필</button>
          </div>
        </div>
        <div class="hero__stats">
          <article class="stat-card">
            <span>현재 레벨</span>
            <strong>${currentLevel.level}</strong>
            <small>${currentLevel.title}</small>
          </article>
          <article class="stat-card">
            <span>퀴즈 정답률</span>
            <strong>${accuracy}%</strong>
            <small>${progress.correctAnswers} / ${progress.totalAnswers}</small>
          </article>
          <article class="stat-card stat-card--accent">
            <span>연속 정답</span>
            <strong>${progress.streak}</strong>
            <small>최고 ${progress.bestStreak}</small>
          </article>
        </div>
      </header>

      <main class="dashboard">
        <section class="panel panel--wide">
          <div class="panel__header">
            <div>
              <p class="panel__eyebrow">Profile</p>
              <h2>사용자와 레벨 진행도</h2>
            </div>
          </div>
          <div class="profile-grid">
            <div class="profile-card">
              <p class="profile-card__label">활성 사용자</p>
              <h3>${activeProfile ? escapeHtml(activeProfile.name) : "학습자를 만들어주세요"}</h3>
              <p class="profile-card__text">${activeProfile ? `${currentLevel.focus} 중심으로 학습 중입니다.` : "이름을 입력하면 개인별 기록이 저장됩니다."}</p>
              <div class="level-meter">
                <div class="level-meter__fill" style="width: ${levelProgress}%"></div>
              </div>
              <p class="level-meter__text">XP ${progress.xp} · 다음 레벨 ${nextLevel.level}까지 ${Math.max(0, nextLevel.minXp - progress.xp)} XP</p>
              <div class="level-selector">
                ${LEVELS.map((level) => {
                  const isActive = level.level === activeLevelNumber;
                  return `
                    <button
                      type="button"
                      class="${isActive ? "level-chip is-active" : "level-chip"}"
                      data-action="select-level"
                      data-level="${level.level}"
                    >
                      Lv.${level.level}
                    </button>
                  `;
                }).join("")}
              </div>
            </div>
            <form class="profile-form" id="profile-form">
              <label class="input-label" for="profile-name">새 학습자 이름</label>
              <input id="profile-name" class="text-input" type="text" placeholder="예: Mina">
              <button class="primary-button" type="submit">프로필 만들기</button>
              <div class="profile-switcher">
                ${Object.values(state.db.users).map((user) => `
                  <button
                    type="button"
                    class="${state.db.activeUserId === user.id ? "chip-button is-active" : "chip-button"}"
                    data-action="switch-profile"
                    data-user-id="${user.id}"
                  >
                    ${escapeHtml(user.name)}
                  </button>
                `).join("")}
              </div>
            </form>
          </div>
        </section>

        ${state.activeTab !== "quiz" ? `
          <section class="panel panel--featured">
            <div class="panel__header">
              <div>
                <p class="panel__eyebrow">오늘의 학습</p>
                <h2>레벨 ${activeLevelNumber} 단어 카드</h2>
              </div>
              <button class="ghost-button" data-action="shuffle-flashcard">섞기</button>
            </div>

            <div class="study-toolbar">
              <div class="goal-card">
                <span>오늘 목표</span>
                <strong>${todayProgress.learnedCount} / ${progress.dailyGoal}</strong>
                <div class="goal-meter">
                  <div class="goal-meter__fill" style="width: ${Math.min(100, Math.round((todayProgress.learnedCount / progress.dailyGoal) * 100))}%"></div>
                </div>
              </div>
              <div class="word-status-actions">
                <button class="${isFavoriteWord ? "status-chip is-active" : "status-chip"}" data-action="toggle-favorite">즐겨찾기</button>
                <button class="${isReviewWord ? "status-chip is-active review" : "status-chip review"}" data-action="toggle-review">복습 필요</button>
              </div>
            </div>

            <article class="${state.isFlipped ? "flashcard is-flipped" : "flashcard"}" id="flashcard">
              <div class="flashcard__inner">
                <div class="flashcard__face flashcard__face--front">
                  <button class="card-toggle-button" data-action="flip-card">뜻 보기</button>
                  <span class="flashcard__label">Spanish</span>
                  <h3>${escapeHtml(currentWord.spanish)}</h3>
                  <p>${escapeHtml(currentWord.example)}</p>
                  <button class="sound-button" data-action="speak" data-word="${escapeAttribute(currentWord.spanish)}">발음 듣기</button>
                  <span class="card-level-tag">레벨 ${currentWord.difficulty}</span>
                </div>
                <div class="flashcard__face flashcard__face--back">
                  <button class="card-toggle-button" data-action="flip-card">앞면 보기</button>
                  <span class="flashcard__label">Korean</span>
                  <h3>${escapeHtml(currentWord.korean)}</h3>
                  <p>${escapeHtml(currentWord.hint)}</p>
                  <span class="difficulty-badge">난이도 ${currentWord.difficulty}</span>
                </div>
              </div>
            </article>
            <div class="flashcard-actions">
              <button class="ghost-button" data-action="prev-flashcard">이전 단어</button>
              <button class="secondary-button" data-action="mark-known">외웠어요 +12XP</button>
              <button class="ghost-button" data-action="next-flashcard">다음 단어</button>
            </div>
            <div class="example-panel">
              <div class="example-panel__header">
                <p class="example-panel__eyebrow">실전 예문</p>
                <button class="sound-button sound-button--small" data-action="speak" data-word="${escapeAttribute(currentWord.example)}">예문 듣기</button>
              </div>
              <p class="example-panel__sentence">${escapeHtml(currentWord.example)}</p>
              <p class="example-panel__translation">${escapeHtml(currentWord.exampleKo)}</p>
              <div class="example-glossary">
                ${currentWord.exampleWords.map((item) => `
                  <span class="example-glossary__item">
                    <strong>${escapeHtml(item.word)}</strong>
                    <span>${escapeHtml(item.meaning)}</span>
                  </span>
                `).join("")}
              </div>
            </div>
          </section>
        ` : ""}

        ${state.activeTab === "learn" ? `
          <section class="panel note-side-panel">
            <div class="note-panel note-panel--embedded">
              <div class="voice-panel">
                <div class="voice-panel__header">
                  <div>
                    <p class="note-panel__eyebrow">발음 설정</p>
                    <h3>목소리 선택</h3>
                  </div>
                  <button class="ghost-button ghost-button--small" data-action="preview-voice" data-word="${escapeAttribute(currentWord.example)}">테스트</button>
                </div>
                <label class="voice-label" for="voice-select">스페인어 목소리</label>
                <select id="voice-select" class="voice-select">
                  ${voiceChoices.length ? voiceChoices.map((choice) => `
                    <option value="${escapeAttribute(choice.id)}" ${selectedVoiceChoice.id === choice.id ? "selected" : ""}>
                      ${escapeHtml(choice.label)}
                    </option>
                  `).join("") : `<option value="">사용 가능한 음성을 불러오는 중</option>`}
                </select>
                <label class="voice-label" for="voice-rate">말하기 속도</label>
                <select id="voice-rate" class="voice-select">
                  ${[
                    { value: "0.78", label: "천천히" },
                    { value: "0.88", label: "기본 추천" },
                    { value: "0.98", label: "조금 빠르게" }
                  ].map((item) => `
                    <option value="${item.value}" ${String(progress.speechRate) === item.value ? "selected" : ""}>${item.label}</option>
                  `).join("")}
                </select>
                <p class="voice-hint">브라우저가 지원하는 스페인어 음성 중에서 고를 수 있습니다. 기본 추천은 비교적 또렷한 스페인어 음성을 우선 선택합니다.</p>
              </div>

              <div class="note-panel__header">
                <div>
                  <p class="note-panel__eyebrow">단어 메모장</p>
                  <h3>${escapeHtml(currentWord.spanish)} 메모</h3>
                </div>
                <button class="ghost-button ghost-button--small" data-action="clear-note">지우기</button>
              </div>
              <textarea
                id="word-note"
                class="note-textarea"
                placeholder="여기에 직접 적어보세요. 뜻, 헷갈리는 포인트, 나만의 예문을 남길 수 있어요."
              >${escapeHtml(currentWordNote)}</textarea>
              <div class="note-templates">
                <button class="note-template" data-action="append-note-template" data-template="뜻: ${escapeAttribute(currentWord.korean)}&#10;">뜻 템플릿</button>
                <button class="note-template" data-action="append-note-template" data-template="예문 따라쓰기: ${escapeAttribute(currentWord.example)}&#10;">예문 따라쓰기</button>
                <button class="note-template" data-action="append-note-template" data-template="헷갈리는 점: &#10;">헷갈리는 점</button>
              </div>
              <p class="note-hint">단어별로 자동 저장됩니다. 다음에 다시 와도 그대로 남아 있어요.</p>
            </div>
          </section>
        ` : ""}

        ${state.activeTab !== "learn" ? `
          <section class="panel">
            <div class="panel__header">
              <div>
                <p class="panel__eyebrow">Quick Quiz</p>
                <h2>객관식 퀴즈</h2>
              </div>
              <span class="quiz-progress">${state.quizIndex + 1} / ${Math.min(levelWords.length, 8)}</span>
            </div>
            <div class="quiz-card">
              <p class="quiz-card__prompt">이 단어의 뜻은 무엇일까요?</p>
              <div class="quiz-card__title">
                <h3>${escapeHtml(quizWord.spanish)}</h3>
                <button class="sound-button sound-button--small" data-action="speak" data-word="${escapeAttribute(quizWord.spanish)}">발음</button>
              </div>
              <div class="quiz-options">
                ${quizOptions.map((option) => {
                  const isCorrect = quizEntry.answered && option === quizWord.korean;
                  const isWrong = quizEntry.answered && option === quizEntry.selected && option !== quizWord.korean;
                  const className = ["option-button", isCorrect ? "is-correct" : "", isWrong ? "is-wrong" : ""].filter(Boolean).join(" ");
                  return `<button class="${className}" data-action="answer-quiz" data-option="${escapeAttribute(option)}" ${quizEntry.answered ? "disabled" : ""}>${escapeHtml(option)}</button>`;
                }).join("")}
              </div>
              <div class="quiz-footer">
                <button class="ghost-button" data-action="prev-quiz" ${state.quizIndex === 0 ? "disabled" : ""}>이전 문제</button>
                <p class="quiz-feedback">${escapeHtml(quizEntry.feedback)}</p>
                <button class="primary-button" data-action="next-quiz">다음 문제</button>
              </div>
            </div>
          </section>
        ` : ""}

        <section class="panel panel--wide">
          <div class="panel__header">
            <div>
              <p class="panel__eyebrow">Word Bank</p>
              <h2>현재 레벨 학습 단어</h2>
            </div>
          </div>
          <div class="word-grid">
            ${levelWords.map((word) => {
              const learned = progress.learnedWords.includes(word.id);
              return `
                <article class="word-chip">
                  <strong>${escapeHtml(word.spanish)}</strong>
                  <span>${escapeHtml(word.korean)}</span>
                  <span class="word-chip__tag">${learned ? "학습 완료" : escapeHtml(word.category)}</span>
                  <span class="word-chip__meta">레벨 ${word.difficulty}</span>
                  <span class="word-chip__meta">${progress.favoriteWords.includes(word.id) ? "즐겨찾기 저장됨" : progress.reviewWords.includes(word.id) ? "복습 필요 단어" : "메모 가능"}</span>
                </article>
              `;
            }).join("")}
          </div>
        </section>
      </main>
    </div>
  `;

  bindEvents(levelWords, quizWord);
}

function bindEvents(levelWords, quizWord) {
  document.getElementById("profile-form").addEventListener("submit", handleCreateProfile);

  document.querySelectorAll("[data-action='tab']").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeTab = button.dataset.tab;
      renderApp();
    });
  });

  document.querySelectorAll("[data-action='switch-profile']").forEach((button) => {
    button.addEventListener("click", () => {
      state.db.activeUserId = button.dataset.userId;
      state.selectedLevel = null;
      saveDatabase();
      resetStudyFlow();
      renderApp();
    });
  });

  document.querySelectorAll("[data-action='select-level']").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedLevel = Number(button.dataset.level);
      resetStudyFlow();
      renderApp();
    });
  });

  const flashcard = document.getElementById("flashcard");
  if (flashcard) {
    flashcard.addEventListener("click", (event) => {
      if (event.target.closest("button")) {
        return;
      }
      state.isFlipped = !state.isFlipped;
      renderApp();
    });
  }

  document.querySelectorAll("[data-action='flip-card']").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      state.isFlipped = !state.isFlipped;
      renderApp();
    });
  });

  bindOptional("[data-action='shuffle-flashcard']", "click", () => {
    state.isFlipped = false;
    state.flashIndex = Math.floor(Math.random() * levelWords.length);
    renderApp();
  });

  bindOptional("[data-action='prev-flashcard']", "click", () => {
    state.isFlipped = false;
    state.flashIndex = (state.flashIndex - 1 + levelWords.length) % levelWords.length;
    renderApp();
  });

  bindOptional("[data-action='next-flashcard']", "click", () => {
    state.isFlipped = false;
    state.flashIndex = (state.flashIndex + 1) % levelWords.length;
    renderApp();
  });

  bindOptional("[data-action='mark-known']", "click", () => {
    const progress = getActiveProfile().progress;
    const word = levelWords[state.flashIndex % levelWords.length];
    if (!progress.learnedWords.includes(word.id)) {
      progress.learnedWords.push(word.id);
      progress.xp += 12;
      incrementTodayLearned(progress);
      saveDatabase();
    }
    state.isFlipped = false;
    state.flashIndex = (state.flashIndex + 1) % levelWords.length;
    resetIfLevelChanged();
    renderApp();
  });

  document.querySelectorAll("[data-action='speak']").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      speak(button.dataset.word, getActiveProfile().progress);
    });
  });

  bindOptional("[data-action='preview-voice']", "click", () => {
    speak(currentWord.example, getActiveProfile().progress);
  });

  const voiceSelect = document.getElementById("voice-select");
  if (voiceSelect) {
    voiceSelect.addEventListener("change", () => {
      const progress = getActiveProfile().progress;
      progress.selectedVoiceChoice = voiceSelect.value;
      saveDatabase();
    });
  }

  const voiceRate = document.getElementById("voice-rate");
  if (voiceRate) {
    voiceRate.addEventListener("change", () => {
      const progress = getActiveProfile().progress;
      progress.speechRate = Number(voiceRate.value);
      saveDatabase();
    });
  }

  bindOptional("[data-action='toggle-favorite']", "click", () => {
    const progress = getActiveProfile().progress;
    toggleWordInList(progress.favoriteWords, currentWord.id);
    saveDatabase();
    renderApp();
  });

  bindOptional("[data-action='toggle-review']", "click", () => {
    const progress = getActiveProfile().progress;
    toggleWordInList(progress.reviewWords, currentWord.id);
    saveDatabase();
    renderApp();
  });

  bindOptional("[data-action='clear-note']", "click", () => {
    const progress = getActiveProfile().progress;
    progress.notes[String(currentWord.id)] = "";
    saveDatabase();
    renderApp();
  });

  document.querySelectorAll("[data-action='append-note-template']").forEach((button) => {
    button.addEventListener("click", () => {
      const textarea = document.getElementById("word-note");
      const progress = getActiveProfile().progress;
      const nextText = `${textarea.value}${button.dataset.template}`;
      textarea.value = nextText;
      progress.notes[String(currentWord.id)] = nextText;
      saveDatabase();
    });
  });

  const noteTextarea = document.getElementById("word-note");
  if (noteTextarea) {
    noteTextarea.addEventListener("input", () => {
      const progress = getActiveProfile().progress;
      progress.notes[String(currentWord.id)] = noteTextarea.value;
      saveDatabase();
    });
  }

  document.querySelectorAll("[data-action='answer-quiz']").forEach((button) => {
    button.addEventListener("click", () => {
      const currentEntry = state.quizEntries[state.quizIndex];
      if (!currentEntry || currentEntry.answered) {
        return;
      }

      const selected = button.dataset.option;
      const progress = getActiveProfile().progress;
      const isCorrect = selected === quizWord.korean;
      currentEntry.answered = true;
      currentEntry.selected = selected;
      currentEntry.feedback = isCorrect
        ? "정답입니다. 발음을 들으며 한 번 더 익혀보세요."
        : `아쉬워요. 정답은 "${quizWord.korean}" 입니다.`;

      progress.totalAnswers += 1;
      progress.correctAnswers += isCorrect ? 1 : 0;
      progress.streak = isCorrect ? progress.streak + 1 : 0;
      progress.bestStreak = isCorrect ? Math.max(progress.bestStreak, progress.streak) : progress.bestStreak;
      progress.xp += isCorrect ? 15 : 4;
      saveDatabase();
      resetIfLevelChanged();
      renderApp();
    });
  });

  bindOptional("[data-action='prev-quiz']", "click", () => {
    if (state.quizIndex === 0) {
      return;
    }
    state.quizIndex -= 1;
    renderApp();
  });

  bindOptional("[data-action='next-quiz']", "click", () => {
    const currentEntry = state.quizEntries[state.quizIndex];
    if (!currentEntry.answered) {
      currentEntry.feedback = "먼저 정답을 선택해보세요.";
      renderApp();
      return;
    }

    if (state.quizIndex + 1 >= state.quizEntries.length) {
      resetQuiz(levelWords);
    } else {
      state.quizIndex += 1;
    }
    renderApp();
  });
}

function handleCreateProfile(event) {
  event.preventDefault();
  const input = document.getElementById("profile-name");
  const name = input.value.trim();
  if (!name) {
    return;
  }

  const userId = `user-${Date.now()}`;
  state.db.users[userId] = {
    id: userId,
    name,
    createdAt: new Date().toISOString(),
    progress: createEmptyProgress()
  };
  state.db.activeUserId = userId;
  state.selectedLevel = null;
  saveDatabase();
  resetStudyFlow();
  renderApp();
}

function resetStudyFlow() {
  const levelWords = getWordsForExactLevel(getActiveLevelNumber(getActiveProfile().progress));
  state.flashIndex = 0;
  state.isFlipped = false;
  resetQuiz(levelWords);
}

function resetQuiz(levelWords) {
  const quizWords = shuffled(levelWords).slice(0, Math.min(levelWords.length, 8));
  state.quizEntries = quizWords.map((word) => createQuizEntry(word, levelWords));
  state.quizIndex = 0;
}

function resetIfLevelChanged() {
  const progress = getActiveProfile().progress;
  const levelWords = getWordsForExactLevel(getActiveLevelNumber(progress));
  if (!state.quizEntries.length || !state.quizEntries.every((entry) => levelWords.some((word) => word.id === entry.word.id))) {
    resetStudyFlow();
  }
}

function createQuizEntry(quizWord, levelWords) {
  const wrongOptions = shuffled(levelWords.filter((word) => word.id !== quizWord.id))
    .slice(0, Math.min(3, levelWords.length - 1))
    .map((word) => word.korean);
  return {
    word: quizWord,
    options: shuffled([quizWord.korean, ...wrongOptions]),
    answered: false,
    selected: "",
    feedback: "정답을 골라보세요."
  };
}

function bindOptional(selector, eventName, handler) {
  const element = document.querySelector(selector);
  if (element) {
    element.addEventListener(eventName, handler);
  }
}

function getAvailableWords(level) {
  return WORDS.filter((word) => word.difficulty <= level);
}

function getWordsForExactLevel(level) {
  return WORDS.filter((word) => word.difficulty === level);
}

function getLevel(xp) {
  return LEVELS.find((level) => xp >= level.minXp && xp <= level.maxXp) || LEVELS[LEVELS.length - 1];
}

function getActiveLevelNumber(progress) {
  const currentLevel = getLevel(progress.xp).level;
  if (!state.selectedLevel) {
    return currentLevel;
  }
  return state.selectedLevel;
}

function getActiveProfile() {
  return state.db.users[state.db.activeUserId];
}

function createEmptyProgress() {
  return {
    xp: 0,
    learnedWords: [],
    correctAnswers: 0,
    totalAnswers: 0,
    streak: 0,
    bestStreak: 0,
    notes: {},
    favoriteWords: [],
    reviewWords: [],
    dailyGoal: 5,
    selectedVoiceURI: "",
    selectedVoiceChoice: "",
    speechRate: 0.88,
    todayLearned: {
      date: getTodayKey(),
      learnedCount: 0
    }
  };
}

function createInitialDatabase() {
  const demoUserId = "user-demo";
  return {
    activeUserId: demoUserId,
    users: {
      [demoUserId]: {
        id: demoUserId,
        name: "Demo Learner",
        createdAt: new Date().toISOString(),
        progress: {
          xp: 45,
          learnedWords: [1, 2, 3],
          correctAnswers: 7,
          totalAnswers: 10,
          streak: 3,
          bestStreak: 5,
          notes: {
            "1": "hola는 인사 시작할 때 자연스럽게 붙는다.",
            "2": "gracias는 por 다음 표현이 자주 따라온다."
          },
          favoriteWords: [2, 8],
          reviewWords: [11],
          dailyGoal: 5,
          selectedVoiceURI: "",
          selectedVoiceChoice: "",
          speechRate: 0.88,
          todayLearned: {
            date: getTodayKey(),
            learnedCount: 2
          }
        }
      }
    }
  };
}

function loadDatabase() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (parsed && parsed.users && parsed.activeUserId) {
      return normalizeDatabase(parsed);
    }
  } catch (error) {
    return createInitialDatabase();
  }
  return createInitialDatabase();
}

function saveDatabase() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.db));
}

function normalizeDatabase(db) {
  const normalizedUsers = {};
  Object.entries(db.users).forEach(([userId, user]) => {
    normalizedUsers[userId] = {
      ...user,
      progress: {
        ...createEmptyProgress(),
        ...user.progress,
        notes: { ...createEmptyProgress().notes, ...(user.progress?.notes || {}) },
        favoriteWords: [...(user.progress?.favoriteWords || [])],
        reviewWords: [...(user.progress?.reviewWords || [])],
        selectedVoiceURI: user.progress?.selectedVoiceURI || "",
        selectedVoiceChoice: user.progress?.selectedVoiceChoice || "",
        speechRate: user.progress?.speechRate || 0.88,
        todayLearned: user.progress?.todayLearned || { date: getTodayKey(), learnedCount: 0 }
      }
    };
  });

  return {
    ...db,
    users: normalizedUsers
  };
}

function incrementTodayLearned(progress) {
  const today = getTodayKey();
  if (!progress.todayLearned || progress.todayLearned.date !== today) {
    progress.todayLearned = { date: today, learnedCount: 0 };
  }
  progress.todayLearned.learnedCount += 1;
}

function getTodayProgress(progress) {
  const today = getTodayKey();
  if (!progress.todayLearned || progress.todayLearned.date !== today) {
    return { date: today, learnedCount: 0 };
  }
  return progress.todayLearned;
}

function getTodayKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function toggleWordInList(list, wordId) {
  const index = list.indexOf(wordId);
  if (index >= 0) {
    list.splice(index, 1);
  } else {
    list.push(wordId);
  }
}

function speak(text, progress) {
  if (!("speechSynthesis" in window)) {
    return;
  }

  const spanishVoices = getSpanishVoices();
  const voiceChoices = getVoiceChoices(spanishVoices);
  const selectedChoice = getSelectedVoiceChoice(progress, voiceChoices);
  const selectedVoice = selectedChoice.voice || getPreferredVoice(spanishVoices);
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = selectedVoice?.lang || "es-ES";
  utterance.rate = progress.speechRate || 0.88;
  utterance.pitch = 1;
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function setupVoices() {
  if (!("speechSynthesis" in window)) {
    return;
  }

  const updateVoices = () => {
    state.availableVoices = window.speechSynthesis.getVoices();
    renderApp();
  };

  updateVoices();
  window.speechSynthesis.onvoiceschanged = updateVoices;
}

function getSpanishVoices() {
  const voices = state.availableVoices.length ? state.availableVoices : (("speechSynthesis" in window) ? window.speechSynthesis.getVoices() : []);
  const spanishVoices = voices.filter((voice) => voice.lang && voice.lang.toLowerCase().startsWith("es"));
  return spanishVoices.length ? spanishVoices : voices;
}

function getPreferredVoice(voices) {
  if (!voices.length) {
    return null;
  }

  const priorities = ["es-ES", "es-MX", "es-US", "es"];
  for (const priority of priorities) {
    const exact = voices.find((voice) => voice.lang === priority);
    if (exact) {
      return exact;
    }
  }

  const naturalVoice = voices.find((voice) => /natural|google|microsoft|helena|jorge|paulina|sabina|monica/i.test(voice.name));
  return naturalVoice || voices[0];
}

function getVoiceChoices(voices) {
  if (!voices.length) {
    return [];
  }

  const matches = [
    {
      id: "spain-female",
      label: "스페인 표준 여성 목소리",
      voice: findVoiceByPatterns(voices, ["es-ES"], ["helena", "monica", "maria", "female", "woman"])
    },
    {
      id: "spain-male",
      label: "스페인 표준 남성 목소리",
      voice: findVoiceByPatterns(voices, ["es-ES"], ["jorge", "diego", "male", "man"])
    },
    {
      id: "latam-female",
      label: "중남미 여성 목소리",
      voice: findVoiceByPatterns(voices, ["es-MX", "es-US", "es-AR", "es-CO"], ["paulina", "sabina", "female", "woman"])
    },
    {
      id: "latam-male",
      label: "중남미 남성 목소리",
      voice: findVoiceByPatterns(voices, ["es-MX", "es-US", "es-AR", "es-CO"], ["male", "man"])
    }
  ];

  const fallbackPool = [...voices];
  return matches.map((choice) => {
    let voice = choice.voice;
    if (!voice) {
      voice = fallbackPool.find((candidate) => !matches.some((item) => item.voice && item.voice.voiceURI === candidate.voiceURI))
        || fallbackPool[0];
    }
    return {
      id: choice.id,
      label: choice.label,
      voice
    };
  });
}

function getSelectedVoiceChoice(progress, voiceChoices) {
  if (!voiceChoices.length) {
    return { id: "", label: "", voice: null };
  }

  const byChoiceId = voiceChoices.find((choice) => choice.id === progress.selectedVoiceChoice);
  if (byChoiceId) {
    return byChoiceId;
  }

  const legacyByURI = voiceChoices.find((choice) => choice.voice && choice.voice.voiceURI === progress.selectedVoiceURI);
  if (legacyByURI) {
    return legacyByURI;
  }

  return voiceChoices[0];
}

function findVoiceByPatterns(voices, langPriorities, namePatterns) {
  for (const lang of langPriorities) {
    const langVoices = voices.filter((voice) => voice.lang === lang);
    for (const pattern of namePatterns) {
      const matched = langVoices.find((voice) => new RegExp(pattern, "i").test(voice.name));
      if (matched) {
        return matched;
      }
    }
    if (langVoices.length) {
      return langVoices[0];
    }
  }

  for (const pattern of namePatterns) {
    const matched = voices.find((voice) => new RegExp(pattern, "i").test(voice.name));
    if (matched) {
      return matched;
    }
  }

  return null;
}

function shuffled(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}
