const BASE_WORDS = [
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

const EXTRA_WORD_ROWS = [
  [81, 1, "adiós", "잘 가", "헤어질 때 하는 인사", "Adiós, nos vemos mañana.", "잘 가, 우리 내일 보자.", "기본", [["adiós", "잘 가"], ["nos", "우리 서로를"], ["vemos", "본다"], ["mañana", "내일"]]],
  [82, 1, "leche", "우유", "아침에 자주 마시는 것", "Necesito leche para el café.", "커피에 넣을 우유가 필요해.", "음식", [["necesito", "나는 필요하다"], ["leche", "우유"], ["para", "~를 위해"], ["el", "그, 정관사"], ["café", "커피"]]],
  [83, 1, "café", "커피", "잠을 깨울 때 많이 마시는 음료", "Tomo café por la mañana.", "나는 아침에 커피를 마셔.", "음식", [["tomo", "마신다"], ["café", "커피"], ["por", "~에, ~동안"], ["la", "그, 정관사"], ["mañana", "아침"]]],
  [84, 1, "mesa", "책상, 테이블", "물건을 올려두는 곳", "Las llaves están sobre la mesa.", "열쇠가 테이블 위에 있어.", "사물", [["las", "그, 정관사 복수"], ["llaves", "열쇠들"], ["están", "있다"], ["sobre", "~위에"], ["la", "그, 정관사"], ["mesa", "테이블"]]],
  [85, 1, "silla", "의자", "앉을 때 쓰는 것", "La silla está junto a la ventana.", "의자가 창문 옆에 있어.", "사물", [["la", "그, 정관사"], ["silla", "의자"], ["está", "있다"], ["junto", "가까이"], ["a", "~에"], ["la", "그, 정관사"], ["ventana", "창문"]]],
  [86, 1, "puerta", "문", "방을 드나드는 입구", "Cierra la puerta, por favor.", "문 닫아줘, 부탁해.", "사물", [["cierra", "닫아라"], ["la", "그, 정관사"], ["puerta", "문"], ["por", "~에 의해"], ["favor", "부탁"]]],
  [87, 1, "calle", "거리", "밖으로 나가면 보이는 길", "Hay mucha gente en la calle.", "길에 사람이 많아.", "장소", [["hay", "있다"], ["mucha", "많은"], ["gente", "사람들"], ["en", "~에, ~에서"], ["la", "그, 정관사"], ["calle", "거리"]]],
  [88, 1, "sol", "태양, 해", "낮에 하늘에서 보이는 것", "Hoy hace sol y calor.", "오늘은 해가 나고 따뜻해.", "기본", [["hoy", "오늘"], ["hace", "한다, 만든다"], ["sol", "해"], ["y", "그리고"], ["calor", "더위, 따뜻함"]]],
  [89, 1, "noche", "밤", "해가 진 뒤의 시간", "Estudio español por la noche.", "나는 밤에 스페인어를 공부해.", "기본", [["estudio", "공부한다"], ["español", "스페인어"], ["por", "~에, ~동안"], ["la", "그, 정관사"], ["noche", "밤"]]],
  [90, 1, "perro", "강아지", "집에서 많이 키우는 동물", "El perro duerme en casa.", "강아지가 집에서 자.", "사물", [["el", "그, 정관사"], ["perro", "강아지"], ["duerme", "잔다"], ["en", "~에, ~에서"], ["casa", "집"]]],

  [91, 2, "gato", "고양이", "조용하고 민첩한 동물", "Mi gato mira por la ventana.", "우리 고양이는 창문 밖을 봐.", "사물", [["mi", "나의"], ["gato", "고양이"], ["mira", "본다"], ["por", "~을 통해"], ["la", "그, 정관사"], ["ventana", "창문"]]],
  [92, 2, "ventana", "창문", "바깥을 볼 수 있는 곳", "Abro la ventana por la mañana.", "나는 아침에 창문을 열어.", "사물", [["abro", "연다"], ["la", "그, 정관사"], ["ventana", "창문"], ["por", "~에"], ["la", "그, 정관사"], ["mañana", "아침"]]],
  [93, 2, "ciudad", "도시", "사람과 건물이 많은 곳", "Esta ciudad es muy grande.", "이 도시는 아주 커.", "장소", [["esta", "이"], ["ciudad", "도시"], ["es", "~이다"], ["muy", "매우"], ["grande", "큰"]]],
  [94, 2, "hermana", "여자형제, 자매", "나와 가까운 가족", "Mi hermana estudia música.", "내 여동생은 음악을 공부해.", "사람", [["mi", "나의"], ["hermana", "여자형제"], ["estudia", "공부한다"], ["música", "음악"]]],
  [95, 2, "madre", "어머니", "가족을 돌봐주는 사람", "Mi madre prepara la cena.", "우리 엄마가 저녁을 준비해.", "사람", [["mi", "나의"], ["madre", "어머니"], ["prepara", "준비한다"], ["la", "그, 정관사"], ["cena", "저녁식사"]]],
  [96, 2, "padre", "아버지", "가족의 한 사람", "Mi padre trabaja en Seúl.", "우리 아빠는 서울에서 일해.", "사람", [["mi", "나의"], ["padre", "아버지"], ["trabaja", "일한다"], ["en", "~에, ~에서"], ["Seúl", "서울"]]],
  [97, 2, "oficina", "사무실", "일하는 공간", "La oficina está cerca del banco.", "사무실이 은행 근처에 있어.", "장소", [["la", "그, 정관사"], ["oficina", "사무실"], ["está", "있다"], ["cerca", "가까이"], ["del", "de + el, ~의"], ["banco", "은행"]]],
  [98, 2, "teléfono", "전화기", "연락할 때 쓰는 기계", "Busco mi teléfono en la mochila.", "나는 가방에서 내 휴대폰을 찾아.", "사물", [["busco", "찾는다"], ["mi", "나의"], ["teléfono", "전화기"], ["en", "~에, ~에서"], ["la", "그, 정관사"], ["mochila", "가방"]]],
  [99, 2, "mochila", "가방", "물건을 넣고 다니는 것", "La mochila está debajo de la mesa.", "가방이 책상 아래에 있어.", "사물", [["la", "그, 정관사"], ["mochila", "가방"], ["está", "있다"], ["debajo", "아래에"], ["de", "~의, ~에서"], ["la", "그, 정관사"], ["mesa", "테이블"]]],
  [100, 2, "música", "음악", "듣기 좋은 소리", "Escucho música cuando estudio.", "나는 공부할 때 음악을 들어.", "기본", [["escucho", "듣는다"], ["música", "음악"], ["cuando", "~할 때"], ["estudio", "공부한다"]]],

  [101, 3, "alegre", "기쁜", "마음이 밝고 즐거운 상태", "Estoy alegre porque hoy descanso.", "오늘 쉬어서 기뻐.", "감정", [["estoy", "나는 ~한 상태다"], ["alegre", "기쁜"], ["porque", "~이기 때문에"], ["hoy", "오늘"], ["descanso", "쉰다"]]],
  [102, 3, "tranquilo", "차분한", "마음이 안정된 느낌", "Necesito un lugar tranquilo para leer.", "읽기 위해 조용한 곳이 필요해.", "형용사", [["necesito", "나는 필요하다"], ["un", "하나의, 한"], ["lugar", "장소"], ["tranquilo", "차분한"], ["para", "~를 위해"], ["leer", "읽다"]]],
  [103, 3, "nervioso", "긴장한", "마음이 조마조마한 상태", "Estoy nervioso antes del examen.", "시험 전에 긴장돼.", "감정", [["estoy", "나는 ~한 상태다"], ["nervioso", "긴장한"], ["antes", "전에"], ["del", "de + el, ~의"], ["examen", "시험"]]],
  [104, 3, "seguro", "확신하는, 안전한", "믿음이 있는 상태", "Ahora me siento más seguro.", "이제 나는 더 자신 있어.", "형용사", [["ahora", "지금"], ["me", "나 자신을"], ["siento", "느낀다"], ["más", "더"], ["seguro", "확신하는"]]],
  [105, 3, "amable", "친절한", "다정하고 예의 있는 느낌", "La profesora es muy amable.", "선생님은 아주 친절해.", "형용사", [["la", "그, 정관사"], ["profesora", "여선생님"], ["es", "~이다"], ["muy", "매우"], ["amable", "친절한"]]],
  [106, 3, "oscuro", "어두운", "빛이 적은 상태", "El cuarto está oscuro ahora.", "방이 지금 어두워.", "형용사", [["el", "그, 정관사"], ["cuarto", "방"], ["está", "있다, ~한 상태다"], ["oscuro", "어두운"], ["ahora", "지금"]]],
  [107, 3, "claro", "분명한, 밝은", "이해하기 쉽거나 빛이 있는 느낌", "Tu explicación es clara.", "네 설명은 분명해.", "형용사", [["tu", "너의"], ["explicación", "설명"], ["es", "~이다"], ["clara", "분명한"]]],
  [108, 3, "orgulloso", "자랑스러운", "스스로 만족스럽고 뿌듯한 상태", "Estoy orgulloso de mi trabajo.", "나는 내 일에 자부심을 느껴.", "감정", [["estoy", "나는 ~한 상태다"], ["orgulloso", "자랑스러운"], ["de", "~에 대해"], ["mi", "나의"], ["trabajo", "일"]]],
  [109, 3, "preocupado", "걱정하는", "무언가가 신경 쓰이는 상태", "Está preocupado por el tiempo.", "그는 날씨를 걱정하고 있어.", "감정", [["está", "~한 상태다"], ["preocupado", "걱정하는"], ["por", "~에 대해"], ["el", "그, 정관사"], ["tiempo", "날씨, 시간"]]],
  [110, 3, "fuerte", "강한", "힘이 있거나 인상이 센 상태", "Necesitamos un café fuerte.", "우리는 진한 커피가 필요해.", "형용사", [["necesitamos", "우리는 필요하다"], ["un", "하나의, 한"], ["café", "커피"], ["fuerte", "강한, 진한"]]],

  [111, 4, "preguntar", "질문하다", "모르는 것을 물어보다", "Quiero preguntar algo en clase.", "수업에서 뭔가 질문하고 싶어.", "기본", [["quiero", "원한다"], ["preguntar", "질문하다"], ["algo", "무언가"], ["en", "~에, ~에서"], ["clase", "수업"]]],
  [112, 4, "responder", "대답하다", "질문에 답을 주다", "Puedo responder en español básico.", "기본적인 스페인어로 대답할 수 있어.", "기본", [["puedo", "할 수 있다"], ["responder", "대답하다"], ["en", "~로"], ["español", "스페인어"], ["básico", "기본적인"]]],
  [113, 4, "caminar", "걷다", "천천히 발로 이동하다", "Me gusta caminar por el parque.", "나는 공원을 걷는 걸 좋아해.", "기본", [["me", "나 자신을"], ["gusta", "좋아한다"], ["caminar", "걷다"], ["por", "~을 따라"], ["el", "그, 정관사"], ["parque", "공원"]]],
  [114, 4, "aprender", "배우다", "새로운 것을 익히다", "Aprender palabras nuevas toma tiempo.", "새 단어를 배우는 데는 시간이 걸려.", "기본", [["aprender", "배우다"], ["palabras", "단어들"], ["nuevas", "새로운"], ["toma", "걸린다"], ["tiempo", "시간"]]],
  [115, 4, "visitar", "방문하다", "어떤 장소나 사람을 찾아가다", "Voy a visitar a mi abuela.", "나는 할머니를 찾아갈 거야.", "기본", [["voy", "나는 간다"], ["a", "~하러"], ["visitar", "방문하다"], ["a", "~를"], ["mi", "나의"], ["abuela", "할머니"]]],
  [116, 4, "esperar", "기다리다", "시간이 올 때까지 머무르다", "Tenemos que esperar el autobús.", "우리는 버스를 기다려야 해.", "기본", [["tenemos", "우리는 가지고 있다"], ["que", "~해야 한다"], ["esperar", "기다리다"], ["el", "그, 정관사"], ["autobús", "버스"]]],
  [117, 4, "llamar", "전화하다, 부르다", "이름을 부르거나 연락하다", "Necesito llamar a mi amigo.", "친구에게 전화해야 해.", "기본", [["necesito", "나는 필요하다"], ["llamar", "전화하다"], ["a", "~에게"], ["mi", "나의"], ["amigo", "친구"]]],
  [118, 4, "preparar", "준비하다", "미리 갖추다", "Voy a preparar la comida.", "나는 음식을 준비할 거야.", "기본", [["voy", "나는 간다"], ["a", "~하러"], ["preparar", "준비하다"], ["la", "그, 정관사"], ["comida", "음식"]]],
  [119, 4, "cambiar", "바꾸다", "다른 상태로 바꿔놓다", "Quiero cambiar mi horario.", "내 일정을 바꾸고 싶어.", "기본", [["quiero", "원한다"], ["cambiar", "바꾸다"], ["mi", "나의"], ["horario", "일정표"]]],
  [120, 4, "viajar", "여행하다", "다른 곳으로 이동하며 경험하다", "Nos gusta viajar en verano.", "우리는 여름에 여행하는 걸 좋아해.", "기본", [["nos", "우리 자신을"], ["gusta", "좋아한다"], ["viajar", "여행하다"], ["en", "~에"], ["verano", "여름"]]],

  [121, 5, "aeropuerto", "공항", "비행기를 타고 내리는 곳", "Llegamos temprano al aeropuerto.", "우리는 공항에 일찍 도착했어.", "장소", [["llegamos", "도착했다"], ["temprano", "일찍"], ["al", "a + el, ~로"], ["aeropuerto", "공항"]]],
  [122, 5, "equipaje", "짐, 수하물", "여행할 때 챙기는 짐", "Mi equipaje pesa mucho.", "내 짐은 무게가 많이 나가.", "사물", [["mi", "나의"], ["equipaje", "짐"], ["pesa", "무게가 나간다"], ["mucho", "많이"]]],
  [123, 5, "reserva", "예약", "미리 자리를 잡아두는 것", "Tengo una reserva para esta noche.", "오늘 밤 예약이 있어.", "기본", [["tengo", "나는 가지고 있다"], ["una", "하나의, 한"], ["reserva", "예약"], ["para", "~를 위한"], ["esta", "이"], ["noche", "밤"]]],
  [124, 5, "boleto", "표, 티켓", "이동하거나 입장할 때 필요한 것", "Compré el boleto en línea.", "나는 온라인으로 표를 샀어.", "사물", [["compré", "샀다"], ["el", "그, 정관사"], ["boleto", "표"], ["en", "~에서"], ["línea", "온라인"]]],
  [125, 5, "retraso", "지연", "예정보다 늦어지는 일", "Hay un retraso en el tren.", "기차가 지연되고 있어.", "기본", [["hay", "있다"], ["un", "하나의, 한"], ["retraso", "지연"], ["en", "~에"], ["el", "그, 정관사"], ["tren", "기차"]]],
  [126, 5, "reunión", "회의", "함께 모여 이야기하는 자리", "Tenemos una reunión importante hoy.", "오늘 중요한 회의가 있어.", "기본", [["tenemos", "우리는 가지고 있다"], ["una", "하나의, 한"], ["reunión", "회의"], ["importante", "중요한"], ["hoy", "오늘"]]],
  [127, 5, "proyecto", "프로젝트", "함께 진행하는 일", "El proyecto avanza bien.", "프로젝트가 잘 진행되고 있어.", "사물", [["el", "그, 정관사"], ["proyecto", "프로젝트"], ["avanza", "진행된다"], ["bien", "잘"]]],
  [128, 5, "horario", "시간표, 일정", "시간 순서로 정리된 계획", "Reviso mi horario cada mañana.", "나는 매일 아침 내 일정을 확인해.", "사물", [["reviso", "확인한다"], ["mi", "나의"], ["horario", "시간표"], ["cada", "매"], ["mañana", "아침"]]],
  [129, 5, "enviar", "보내다", "메시지나 물건을 전달하다", "Voy a enviar el correo ahora.", "지금 메일을 보낼 거야.", "기본", [["voy", "나는 간다"], ["a", "~하러"], ["enviar", "보내다"], ["el", "그, 정관사"], ["correo", "메일"], ["ahora", "지금"]]],
  [130, 5, "decidir", "결정하다", "여러 선택지 중 하나를 고르다", "Necesitamos decidir pronto.", "우리는 곧 결정해야 해.", "기본", [["necesitamos", "우리는 필요하다"], ["decidir", "결정하다"], ["pronto", "곧"]]],
  [131, 5, "proponer", "제안하다", "새로운 생각을 내놓다", "Quiero proponer una idea.", "아이디어를 하나 제안하고 싶어.", "기본", [["quiero", "원한다"], ["proponer", "제안하다"], ["una", "하나의, 한"], ["idea", "생각, 아이디어"]]],
  [132, 5, "mejorar", "개선하다", "더 나은 상태로 만들다", "Practicar ayuda a mejorar.", "연습은 실력을 향상시키는 데 도움이 돼.", "기본", [["practicar", "연습하다"], ["ayuda", "도움이 된다"], ["a", "~하는 데"], ["mejorar", "개선하다"]]],
  [133, 5, "desarrollar", "발전시키다", "점점 더 자라게 하다", "Quiero desarrollar mi vocabulario.", "어휘를 더 발전시키고 싶어.", "기본", [["quiero", "원한다"], ["desarrollar", "발전시키다"], ["mi", "나의"], ["vocabulario", "어휘"]]],
  [134, 5, "necesario", "필요한", "반드시 있어야 하는", "Es necesario confirmar la reserva.", "예약을 확인하는 것이 필요해.", "형용사", [["es", "~이다"], ["necesario", "필요한"], ["confirmar", "확인하다"], ["la", "그, 정관사"], ["reserva", "예약"]]],
  [135, 5, "disponible", "이용 가능한", "쓸 수 있거나 열려 있는", "No hay mesa disponible ahora.", "지금 이용 가능한 자리가 없어.", "형용사", [["no", "아니다"], ["hay", "있다"], ["mesa", "자리, 테이블"], ["disponible", "이용 가능한"], ["ahora", "지금"]]],
  [136, 5, "confirmar", "확인하다", "맞는지 다시 점검하다", "Necesito confirmar la hora.", "시간을 다시 확인해야 해.", "기본", [["necesito", "나는 필요하다"], ["confirmar", "확인하다"], ["la", "그, 정관사"], ["hora", "시간"]]],
  [137, 5, "documento", "문서", "정보가 적힌 종이 또는 파일", "Guardo el documento en la carpeta.", "문서를 폴더에 저장해.", "사물", [["guardo", "저장한다"], ["el", "그, 정관사"], ["documento", "문서"], ["en", "~에"], ["la", "그, 정관사"], ["carpeta", "폴더"]]],
  [138, 5, "costumbre", "습관, 관습", "오랫동안 반복해 온 방식", "Es una costumbre familiar.", "그건 가족의 습관이야.", "기본", [["es", "~이다"], ["una", "하나의, 한"], ["costumbre", "습관"], ["familiar", "가족의"]]],
  [139, 5, "paisaje", "풍경", "눈앞에 보이는 자연과 경치", "El paisaje aquí es hermoso.", "여기 풍경은 아름다워.", "장소", [["el", "그, 정관사"], ["paisaje", "풍경"], ["aquí", "여기"], ["es", "~이다"], ["hermoso", "아름다운"]]],
  [140, 5, "recorrido", "동선, 경로", "어디를 따라 이동하는 길", "El recorrido dura dos horas.", "그 경로는 두 시간 걸려.", "기본", [["el", "그, 정관사"], ["recorrido", "경로"], ["dura", "지속된다"], ["dos", "둘"], ["horas", "시간들"]]],
  [141, 5, "alojamiento", "숙소", "머무는 장소", "Buscamos alojamiento cerca del centro.", "우리는 중심가 근처 숙소를 찾고 있어.", "장소", [["buscamos", "우리는 찾는다"], ["alojamiento", "숙소"], ["cerca", "가까이"], ["del", "de + el, ~의"], ["centro", "중심지"]]],
  [142, 5, "facturar", "부치다, 체크인하다", "짐을 맡기거나 체크인 절차를 하다", "Voy a facturar mi maleta.", "짐을 부칠 거야.", "기본", [["voy", "나는 간다"], ["a", "~하러"], ["facturar", "부치다"], ["mi", "나의"], ["maleta", "여행가방"]]],
  [143, 5, "alquilar", "빌리다, 대여하다", "돈을 내고 잠시 사용하다", "Queremos alquilar un coche.", "우리는 차를 빌리고 싶어.", "기본", [["queremos", "우리는 원한다"], ["alquilar", "대여하다"], ["un", "하나의, 한"], ["coche", "차"]]],
  [144, 5, "extranjero", "외국의, 외국인", "자기 나라 밖과 관련된", "Conocí a un estudiante extranjero.", "나는 외국인 학생을 만났어.", "형용사", [["conocí", "만났다"], ["a", "~를"], ["un", "하나의, 한"], ["estudiante", "학생"], ["extranjero", "외국의, 외국인"]]],
  [145, 5, "acuerdo", "합의, 동의", "생각이 서로 맞는 상태", "Llegamos a un acuerdo rápido.", "우리는 빨리 합의에 도달했어.", "기본", [["llegamos", "도달했다"], ["a", "~에"], ["un", "하나의, 한"], ["acuerdo", "합의"], ["rápido", "빠른"]]],
  [146, 5, "pendiente", "미완료인, 남아 있는", "아직 끝나지 않은 상태", "Tengo una tarea pendiente.", "아직 끝내지 못한 일이 있어.", "형용사", [["tengo", "나는 가지고 있다"], ["una", "하나의, 한"], ["tarea", "과제"], ["pendiente", "남아 있는"]]],
  [147, 5, "resultado", "결과", "일의 마지막에 나온 것", "El resultado fue mejor de lo esperado.", "결과는 예상보다 더 좋았어.", "기본", [["el", "그, 정관사"], ["resultado", "결과"], ["fue", "~였다"], ["mejor", "더 좋은"], ["de", "~보다"], ["lo", "그것"], ["esperado", "예상된"]]],
  [148, 5, "tarea", "과제, 일", "해야 하는 일거리", "Termino la tarea esta tarde.", "오늘 오후에 과제를 끝낼 거야.", "사물", [["termino", "끝낸다"], ["la", "그, 정관사"], ["tarea", "과제"], ["esta", "이"], ["tarde", "오후"]]],
  [149, 5, "detalle", "세부사항", "작지만 중요한 부분", "Cuida cada detalle del plan.", "계획의 세부사항 하나하나를 신경 써.", "기본", [["cuida", "신경 써라"], ["cada", "각각의"], ["detalle", "세부사항"], ["del", "de + el, ~의"], ["plan", "계획"]]],
  [150, 5, "consejo", "조언", "도움이 되는 말", "Gracias por tu consejo.", "조언해줘서 고마워.", "기본", [["gracias", "고마워"], ["por", "~에 대해"], ["tu", "너의"], ["consejo", "조언"]]],

  [151, 6, "lograr", "이뤄내다", "목표를 성취하다", "Quiero lograr una meta grande.", "큰 목표를 이루고 싶어.", "기본", [["quiero", "원한다"], ["lograr", "이뤄내다"], ["una", "하나의, 한"], ["meta", "목표"], ["grande", "큰"]]],
  [152, 6, "aprovechar", "잘 활용하다", "기회를 놓치지 않고 쓰다", "Debemos aprovechar esta oportunidad.", "우리는 이 기회를 잘 활용해야 해.", "기본", [["debemos", "우리는 해야 한다"], ["aprovechar", "활용하다"], ["esta", "이"], ["oportunidad", "기회"]]],
  [153, 6, "desafío", "도전", "쉽지 않지만 해볼 만한 일", "Aprender solo es un desafío.", "혼자 배우는 건 도전이야.", "기본", [["aprender", "배우다"], ["solo", "혼자"], ["es", "~이다"], ["un", "하나의, 한"], ["desafío", "도전"]]],
  [154, 6, "crecimiento", "성장", "점점 나아지는 과정", "Veo crecimiento en tu español.", "네 스페인어 실력이 성장하는 게 보여.", "기본", [["veo", "본다"], ["crecimiento", "성장"], ["en", "~에서"], ["tu", "너의"], ["español", "스페인어"]]],
  [155, 6, "establecer", "세우다, 설정하다", "규칙이나 계획을 정하다", "Necesitamos establecer prioridades.", "우리는 우선순위를 정해야 해.", "기본", [["necesitamos", "우리는 필요하다"], ["establecer", "설정하다"], ["prioridades", "우선순위들"]]],
  [156, 6, "resolver", "해결하다", "문제를 풀어내다", "Podemos resolver este problema juntos.", "우리는 이 문제를 함께 해결할 수 있어.", "기본", [["podemos", "우리는 할 수 있다"], ["resolver", "해결하다"], ["este", "이"], ["problema", "문제"], ["juntos", "함께"]]],
  [157, 6, "considerar", "고려하다", "결정 전에 생각해보다", "Debes considerar todas las opciones.", "모든 선택지를 고려해야 해.", "기본", [["debes", "너는 해야 한다"], ["considerar", "고려하다"], ["todas", "모든"], ["las", "그, 정관사 복수"], ["opciones", "선택지들"]]],
  [158, 6, "rendimiento", "성과, 수행력", "얼마나 잘 해내는지의 정도", "Su rendimiento mejoró mucho.", "그의 수행력은 많이 좋아졌어.", "기본", [["su", "그의"], ["rendimiento", "성과"], ["mejoró", "향상되었다"], ["mucho", "많이"]]],
  [159, 6, "sostenible", "지속 가능한", "오랫동안 유지할 수 있는", "Buscamos un plan sostenible.", "우리는 지속 가능한 계획을 찾고 있어.", "형용사", [["buscamos", "우리는 찾는다"], ["un", "하나의, 한"], ["plan", "계획"], ["sostenible", "지속 가능한"]]],
  [160, 6, "complejo", "복잡한", "단순하지 않고 여러 요소가 있는", "El tema parece complejo al principio.", "그 주제는 처음엔 복잡해 보여.", "형용사", [["el", "그, 정관사"], ["tema", "주제"], ["parece", "보인다"], ["complejo", "복잡한"], ["al", "a + el, ~에"], ["principio", "처음"]]],
  [161, 6, "objetivo", "목표", "도달하고 싶은 지점", "Mi objetivo es hablar mejor.", "내 목표는 더 잘 말하는 거야.", "기본", [["mi", "나의"], ["objetivo", "목표"], ["es", "~이다"], ["hablar", "말하다"], ["mejor", "더 잘"]]],
  [162, 6, "estrategia", "전략", "효율적으로 해내기 위한 방법", "Necesitamos una estrategia clara.", "우리에겐 분명한 전략이 필요해.", "기본", [["necesitamos", "우리는 필요하다"], ["una", "하나의, 한"], ["estrategia", "전략"], ["clara", "분명한"]]],
  [163, 6, "negociación", "협상", "서로 조건을 맞춰가는 대화", "La negociación tomó tiempo.", "협상에는 시간이 걸렸어.", "기본", [["la", "그, 정관사"], ["negociación", "협상"], ["tomó", "걸렸다"], ["tiempo", "시간"]]],
  [164, 6, "investigar", "조사하다", "정보를 찾아 자세히 살피다", "Voy a investigar el tema mañana.", "내일 그 주제를 조사할 거야.", "기본", [["voy", "나는 간다"], ["a", "~하러"], ["investigar", "조사하다"], ["el", "그, 정관사"], ["tema", "주제"], ["mañana", "내일"]]],
  [165, 6, "destacar", "두드러지다, 강조하다", "다른 것보다 눈에 띄다", "Su esfuerzo empieza a destacar.", "그의 노력이 점점 두드러지기 시작해.", "기본", [["su", "그의"], ["esfuerzo", "노력"], ["empieza", "시작한다"], ["a", "~하기"], ["destacar", "두드러지다"]]],
  [166, 6, "confianza", "신뢰, 자신감", "믿고 맡길 수 있는 마음", "La práctica da confianza.", "연습은 자신감을 줘.", "감정", [["la", "그, 정관사"], ["práctica", "연습"], ["da", "준다"], ["confianza", "자신감"]]],
  [167, 6, "entorno", "환경", "주변의 상황과 조건", "Un buen entorno ayuda mucho.", "좋은 환경은 큰 도움이 돼.", "장소", [["un", "하나의, 한"], ["buen", "좋은"], ["entorno", "환경"], ["ayuda", "도움이 된다"], ["mucho", "많이"]]],
  [168, 6, "mantener", "유지하다", "같은 상태를 계속 이어가다", "Es difícil mantener el ritmo.", "리듬을 유지하는 건 어려워.", "기본", [["es", "~이다"], ["difícil", "어려운"], ["mantener", "유지하다"], ["el", "그, 정관사"], ["ritmo", "리듬"]]],
  [169, 6, "superar", "극복하다", "어려움을 넘어서다", "Podrás superar esta etapa.", "너는 이 단계를 극복할 수 있을 거야.", "기본", [["podrás", "너는 할 수 있을 것이다"], ["superar", "극복하다"], ["esta", "이"], ["etapa", "단계"]]],
  [170, 6, "propuesta", "제안서, 제안", "공식적으로 내놓는 의견", "Leí tu propuesta con calma.", "나는 네 제안을 차분히 읽었어.", "기본", [["leí", "읽었다"], ["tu", "너의"], ["propuesta", "제안"], ["con", "~와 함께"], ["calma", "차분함"]]],
  [171, 6, "colaboración", "협업", "함께 힘을 모아 일하는 것", "La colaboración fue excelente.", "협업은 훌륭했어.", "기본", [["la", "그, 정관사"], ["colaboración", "협업"], ["fue", "~였다"], ["excelente", "훌륭한"]]],
  [172, 6, "recurso", "자원", "도움이 되는 자료나 수단", "Este recurso es muy útil.", "이 자료는 아주 유용해.", "사물", [["este", "이"], ["recurso", "자원"], ["es", "~이다"], ["muy", "매우"], ["útil", "유용한"]]],
  [173, 6, "adaptar", "적응시키다, 맞추다", "상황에 맞게 바꾸다", "Debemos adaptar el plan al cambio.", "우리는 변화에 맞게 계획을 조정해야 해.", "기본", [["debemos", "우리는 해야 한다"], ["adaptar", "맞추다"], ["el", "그, 정관사"], ["plan", "계획"], ["al", "a + el, ~에"], ["cambio", "변화"]]],
  [174, 6, "ampliar", "확장하다", "더 넓히거나 늘리다", "Quiero ampliar mi vocabulario activo.", "내가 실제로 쓰는 어휘를 더 넓히고 싶어.", "기본", [["quiero", "원한다"], ["ampliar", "확장하다"], ["mi", "나의"], ["vocabulario", "어휘"], ["activo", "활성의"]]],
  [175, 6, "preciso", "정확한", "틀림없이 딱 맞는", "Necesitamos datos precisos.", "우리는 정확한 자료가 필요해.", "형용사", [["necesitamos", "우리는 필요하다"], ["datos", "자료들"], ["precisos", "정확한"]]],
  [176, 6, "probable", "가능성이 높은", "그럴 것 같은", "Es probable que llueva hoy.", "오늘 비가 올 가능성이 높아.", "형용사", [["es", "~이다"], ["probable", "가능성이 높은"], ["que", "~라는 것"], ["llueva", "비가 오다"], ["hoy", "오늘"]]],
  [177, 6, "eficiente", "효율적인", "적은 힘으로 잘 해내는", "Buscamos una forma eficiente.", "우리는 효율적인 방법을 찾고 있어.", "형용사", [["buscamos", "우리는 찾는다"], ["una", "하나의, 한"], ["forma", "방법"], ["eficiente", "효율적인"]]],
  [178, 6, "constante", "꾸준한", "계속 이어지는", "El progreso constante motiva mucho.", "꾸준한 발전은 큰 동기가 돼.", "형용사", [["el", "그, 정관사"], ["progreso", "발전"], ["constante", "꾸준한"], ["motiva", "동기를 준다"], ["mucho", "많이"]]],
  [179, 6, "análisis", "분석", "정보를 나눠 자세히 보는 일", "El análisis revela un patrón.", "분석은 하나의 패턴을 보여줘.", "기본", [["el", "그, 정관사"], ["análisis", "분석"], ["revela", "드러낸다"], ["un", "하나의, 한"], ["patrón", "패턴"]]],
  [180, 6, "solución", "해결책", "문제를 푸는 방법", "Necesitamos una solución práctica.", "우리에겐 실용적인 해결책이 필요해.", "기본", [["necesitamos", "우리는 필요하다"], ["una", "하나의, 한"], ["solución", "해결책"], ["práctica", "실용적인"]]]
];

const EXTRA_WORDS = EXTRA_WORD_ROWS.map(([id, difficulty, spanish, korean, hint, example, exampleKo, category, exampleWords]) => ({
  id,
  spanish,
  korean,
  hint,
  example,
  exampleKo,
  category,
  difficulty,
  exampleWords: exampleWords.map(([word, meaning]) => ({ word, meaning }))
}));

const WORDS = [...BASE_WORDS, ...EXTRA_WORDS];

const LEVELS = [
  { level: 1, title: "Hola Start", minXp: 0, maxXp: 59, focus: "기초 인사와 생활 단어" },
  { level: 2, title: "Daily Flow", minXp: 60, maxXp: 139, focus: "일상 사물과 사람 표현" },
  { level: 3, title: "Quiz Booster", minXp: 140, maxXp: 249, focus: "형용사와 감정 어휘" },
  { level: 4, title: "Conversation Mode", minXp: 250, maxXp: 389, focus: "짧은 문장 확장과 응용" },
  { level: 5, title: "Travel Talk", minXp: 390, maxXp: 559, focus: "여행, 일정, 실전 표현" },
  { level: 6, title: "Fluent Stretch", minXp: 560, maxXp: Infinity, focus: "고급 어휘와 사고 확장 표현" }
];

const STORAGE_KEY = "palabra-sprint-db";
const state = {
  db: loadDatabase(),
  activeTab: "profile",
  learnScreen: "overview",
  selectedLevel: null,
  flashIndex: 0,
  isFlipped: false,
  quizIndex: 0,
  quizEntries: [],
  availableVoices: [],
  wordBankQuery: "",
  wordBankFilter: "all",
  wordBankPage: 1,
  handlersBound: false,
  mascotMood: "calm",
  mascotMessage: "오늘도 차근차근 가보자!"
};

function initialize() {
  setupVoices();
  setupGlobalHandlers();
  resetStudyFlow();
  renderApp();
}

function renderApp() {
  persistRenderedNoteDraft();
  const app = document.getElementById("app");
  if (state.learnScreen === "example") {
    state.learnScreen = "card";
  }
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
  const currentWordNote = progress.notes[String(currentWord.id)] || "";
  const isFavoriteWord = progress.favoriteWords.includes(currentWord.id);
  const isReviewWord = progress.reviewWords.includes(currentWord.id);
  const spanishVoices = getSpanishVoices();
  const voiceChoices = getVoiceChoices(spanishVoices);
  const selectedVoiceChoice = getSelectedVoiceChoice(progress, voiceChoices);
  const grammarInfo = getGrammarInfo(currentWord);
  const filteredWordBank = getFilteredWordBank(levelWords, progress);
  const wordBankPageSize = 8;
  const wordBankTotalPages = Math.max(1, Math.ceil(filteredWordBank.length / wordBankPageSize));
  const currentWordBankPage = Math.min(state.wordBankPage, wordBankTotalPages);
  const visibleWordBank = filteredWordBank.slice((currentWordBankPage - 1) * wordBankPageSize, currentWordBankPage * wordBankPageSize);
  const mascot = getMascotState(state.mascotMood);
  const frontTitleSize = getFlashcardTitleSize(currentWord.spanish);
  const backTitleSize = getFlashcardTitleSize(currentWord.korean, true);
  const studyExamples = getStudyExamples(currentWord);

  app.innerHTML = `
    <div class="app-shell">
      <header class="hero">
        <div class="hero__copy">
          <p class="eyebrow">Spanish Vocab Trainer</p>
          <h1>뜨랑낄로 스페인어</h1>
          <p class="hero__text">
            스페인어 단어를 카드로 익히고, 퀴즈로 실력을 확인하는 학습 앱입니다.
            사용자별 기록, 레벨업, 발음 재생까지 한 화면에서 자연스럽게 이어집니다.
          </p>
          <div class="tab-row">
            <button class="${state.activeTab === "profile" ? "tab-button is-active" : "tab-button"}" data-action="tab" data-tab="profile">프로필</button>
            <button class="${state.activeTab === "learn" ? "tab-button is-active" : "tab-button"}" data-action="tab" data-tab="learn">학습</button>
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
        ${state.activeTab === "profile" ? `
        <section class="panel panel--wide">
          <div class="panel__header">
            <div>
              <p class="panel__eyebrow">Profile</p>
              <h2>사용자와 레벨 진행도</h2>
            </div>
          </div>
          <div class="profile-grid">
            <form class="profile-form profile-form--hero" id="profile-form">
              <p class="profile-card__label">새 학습자 시작</p>
              <h3>새 학습자 이름</h3>
              <p class="profile-card__text">처음 쓰는 이름을 입력하고 바로 학습을 시작해보세요.</p>
              <label class="input-label" for="profile-name">이름 입력</label>
              <input id="profile-name" class="text-input" type="text" placeholder="예: Mina">
              <button class="primary-button" type="submit">프로필 만들기</button>
            </form>

            <div class="profile-card">
              <p class="profile-card__label">활성 사용자</p>
              <h3>${activeProfile ? escapeHtml(activeProfile.name) : "학습자를 만들어주세요"}</h3>
              <p class="profile-card__text">${activeProfile ? `${currentLevel.focus} 중심으로 학습 중입니다.` : "이름을 입력하면 개인별 기록이 저장됩니다."}</p>
              <div class="level-meter">
                <div class="level-meter__fill" style="width: ${levelProgress}%"></div>
              </div>
              <p class="level-meter__text">XP ${progress.xp} · 다음 레벨 ${nextLevel.level}까지 ${Math.max(0, nextLevel.minXp - progress.xp)} XP</p>
            </div>

            <div class="profile-card">
              <p class="profile-card__label">레벨 선택</p>
              <h3>학습할 레벨 고르기</h3>
              <p class="profile-card__text">현재 활성 사용자 기준으로 원하는 레벨을 바로 선택할 수 있어요.</p>
              <div class="level-selector level-selector--standalone">
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

            <div class="profile-card">
              <p class="profile-card__label">기존 학습자 선택</p>
              <h3>저장된 사용자</h3>
              <p class="profile-card__text">기존 사용자 버튼을 눌러 바로 이어서 학습할 수 있습니다.</p>
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
            </div>
          </div>
        </section>
        ` : ""}

        ${state.activeTab === "learn" ? `
          <section class="panel panel--wide learn-hub">
            <div class="panel__header">
              <div>
                <p class="panel__eyebrow">Study Flow</p>
                <h2>학습 화면 전환</h2>
              </div>
            </div>
            <div class="learn-screen-tabs">
              <button class="${state.learnScreen === "overview" ? "learn-screen-tab is-active" : "learn-screen-tab"}" data-action="set-learn-screen" data-screen="overview">학습</button>
              <button class="${state.learnScreen === "card" ? "learn-screen-tab is-active" : "learn-screen-tab"}" data-action="set-learn-screen" data-screen="card">단어 카드</button>
              <button class="${state.learnScreen === "note" ? "learn-screen-tab is-active" : "learn-screen-tab"}" data-action="set-learn-screen" data-screen="note">음성 설정</button>
              <button class="${state.learnScreen === "wordbank" ? "learn-screen-tab is-active" : "learn-screen-tab"}" data-action="set-learn-screen" data-screen="wordbank">내 단어장</button>
              <button class="${state.learnScreen === "quiz" ? "learn-screen-tab learn-screen-tab--quiz is-active" : "learn-screen-tab learn-screen-tab--quiz"}" data-action="set-learn-screen" data-screen="quiz">퀴즈 모드</button>
            </div>
          </section>
        ` : ""}

        ${state.activeTab === "learn" && state.learnScreen === "overview" ? `
          <section class="panel panel--wide">
            <div class="panel__header">
              <div>
                <p class="panel__eyebrow">Study Home</p>
                <h2>학습 시작 화면</h2>
              </div>
            </div>
            <div class="learn-overview-grid">
              <button class="learn-overview-card" data-action="set-learn-screen" data-screen="card">
                <span class="learn-overview-card__eyebrow">Step 1</span>
                <strong>단어 카드</strong>
                <span>${escapeHtml(currentWord.spanish)} 단어부터 바로 익혀보세요.</span>
              </button>
              <button class="learn-overview-card" data-action="set-learn-screen" data-screen="note">
                <span class="learn-overview-card__eyebrow">Step 2</span>
                <strong>음성 설정</strong>
                <span>목소리와 말하기 속도를 듣기 편하게 맞춰보세요.</span>
              </button>
              <button class="learn-overview-card" data-action="set-learn-screen" data-screen="wordbank">
                <span class="learn-overview-card__eyebrow">Step 3</span>
                <strong>내 단어장</strong>
                <span>즐겨찾기와 복습 단어를 한 번에 정리해보세요.</span>
              </button>
            </div>
          </section>
        ` : ""}

        ${state.activeTab === "learn" && state.learnScreen === "card" ? `
          <div class="study-card-layout panel--wide">
          <section class="panel panel--featured">
            <div class="panel__header">
              <div>
                <p class="panel__eyebrow">오늘의 학습</p>
                <h2>레벨 ${activeLevelNumber} 단어 카드</h2>
              </div>
              <button class="ghost-button" data-action="shuffle-flashcard">섞기</button>
            </div>

            <div class="study-toolbar">
              <div class="mascot-card mascot-card--${mascot.tone}">
                <div class="mascot-face mascot-face--${mascot.tone}" aria-hidden="true">
                  <span class="mascot-face__eye mascot-face__eye--left"></span>
                  <span class="mascot-face__eye mascot-face__eye--right"></span>
                  <span class="mascot-face__mouth"></span>
                </div>
                <div class="mascot-copy">
                  <strong>${escapeHtml(mascot.title)}</strong>
                  <p>${escapeHtml(state.mascotMessage)}</p>
                </div>
              </div>
              <div class="word-status-actions">
                <button type="button" class="${isFavoriteWord ? "status-chip favorite is-active" : "status-chip favorite"}" data-action="toggle-favorite">즐겨찾기</button>
                <button type="button" class="${isReviewWord ? "status-chip is-active review" : "status-chip review"}" data-action="toggle-review">복습 필요</button>
              </div>
            </div>

            <article class="${state.isFlipped ? "flashcard is-flipped" : "flashcard"}" id="flashcard">
              <button class="card-toggle-button" data-action="flip-card">${state.isFlipped ? "앞면 보기" : "뜻 보기"}</button>
              <div class="flashcard__inner">
                <div class="flashcard__face flashcard__face--front">
                  <div class="flashcard__layout">
                    <div class="flashcard__main">
                      <span class="flashcard__label">Spanish</span>
                      <h3 class="flashcard__title" style="font-size: ${frontTitleSize};">${escapeHtml(currentWord.spanish)}</h3>
                      <p>${escapeHtml(currentWord.example)}</p>
                      <button class="sound-button" data-action="speak" data-word="${escapeAttribute(currentWord.spanish)}">발음 듣기</button>
                      <span class="card-level-tag">레벨 ${currentWord.difficulty}</span>
                    </div>
                    <aside class="grammar-panel">
                      <p class="grammar-panel__eyebrow">문장 분석</p>
                      <div class="grammar-panel__item">
                        <span>품사</span>
                        <strong>${escapeHtml(grammarInfo.partOfSpeech)}</strong>
                      </div>
                      <div class="grammar-panel__item">
                        <span>문장 역할</span>
                        <strong>${escapeHtml(grammarInfo.sentenceRole)}</strong>
                      </div>
                      <div class="grammar-panel__item">
                        <span>핵심 포인트</span>
                        <strong>${escapeHtml(grammarInfo.grammarTip)}</strong>
                      </div>
                    </aside>
                  </div>
                </div>
                <div class="flashcard__face flashcard__face--back">
                  <div class="flashcard__layout">
                    <div class="flashcard__main">
                      <span class="flashcard__label">Korean</span>
                      <h3 class="flashcard__title flashcard__title--back" style="font-size: ${backTitleSize};">${escapeHtml(currentWord.korean)}</h3>
                      <p>${escapeHtml(currentWord.hint)}</p>
                      <span class="difficulty-badge">난이도 ${currentWord.difficulty}</span>
                    </div>
                    <aside class="grammar-panel grammar-panel--back">
                      <p class="grammar-panel__eyebrow">학습 포인트</p>
                      <div class="grammar-panel__item">
                        <span>품사 기억법</span>
                        <strong>${escapeHtml(grammarInfo.memoryTip)}</strong>
                      </div>
                      <div class="grammar-panel__item">
                        <span>예문 속 위치</span>
                        <strong>${escapeHtml(grammarInfo.positionHint)}</strong>
                      </div>
                      <div class="grammar-panel__item">
                        <span>연습 팁</span>
                        <strong>${escapeHtml(grammarInfo.practiceTip)}</strong>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </article>
            <div class="flashcard-actions">
              <button class="ghost-button" data-action="prev-flashcard">이전 단어</button>
              <button class="secondary-button" data-action="mark-known">외웠어요 +12XP</button>
              <button class="ghost-button" data-action="next-flashcard">다음 단어</button>
            </div>
            <div class="note-panel note-panel--card">
              <div class="note-panel__header">
                <div>
                  <p class="note-panel__eyebrow">단어 메모장</p>
                  <h3>${escapeHtml(currentWord.spanish)} 메모</h3>
                </div>
                <button class="ghost-button ghost-button--small" data-action="clear-note">지우기</button>
              </div>
              <textarea
                id="word-note"
                data-word-id="${currentWord.id}"
                class="note-textarea"
                placeholder="여기에 직접 적어보세요. 뜻, 헷갈리는 포인트, 나만의 예문을 남길 수 있어요."
              >${escapeHtml(currentWordNote)}</textarea>
              <div class="note-templates">
                <button class="note-template" data-action="append-note-template" data-template="뜻: ${escapeAttribute(currentWord.korean)}&#10;">뜻 템플릿</button>
                <button class="note-template" data-action="append-note-template" data-template="예문 따라쓰기: ${escapeAttribute(currentWord.example)}&#10;">예문 따라쓰기</button>
                <button class="note-template" data-action="append-note-template" data-template="헷갈리는 점: &#10;">헷갈리는 점</button>
              </div>
              <p class="note-hint">단어별로 자동 저장됩니다. 다른 단어로 이동해도 다시 돌아오면 그대로 남아 있어요.</p>
            </div>
          </section>

          <section class="panel study-example-side">
            <div class="panel__header">
              <div>
                <p class="panel__eyebrow">Example Lab</p>
                <h2>예문으로 복습</h2>
              </div>
            </div>
            <div class="study-example-list">
              ${studyExamples.map((example, index) => `
                <article class="study-example-card">
                  <div class="study-example-card__header">
                    <div>
                      <p class="study-example-card__eyebrow">${index === 0 ? "기본 예문" : "복습 예문"}</p>
                      <h3>${escapeHtml(currentWord.spanish)}</h3>
                    </div>
                    <button class="sound-button sound-button--small" data-action="speak" data-word="${escapeAttribute(example.sentence)}">듣기</button>
                  </div>
                  <p class="study-example-card__sentence">${escapeHtml(example.sentence)}</p>
                  <p class="study-example-card__translation">${escapeHtml(example.translation)}</p>
                  <div class="example-glossary">
                    ${example.glossary.map((item) => `
                      <span class="example-glossary__item">
                        <strong>${escapeHtml(item.word)}</strong>
                        <span>${escapeHtml(item.meaning)}</span>
                      </span>
                    `).join("")}
                  </div>
                </article>
              `).join("")}
            </div>
          </section>
          </div>
        ` : ""}

                ${state.activeTab === "learn" && state.learnScreen === "note" ? `
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
                    <option value="${escapeAttribute(choice.id)}" ${selectedVoiceChoice.id === choice.id ? "selected" : ""} ${choice.available ? "" : "disabled"}>
                      ${escapeHtml(choice.label)}${choice.available ? "" : " (사용 불가)"}
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
                <p class="voice-hint">브라우저가 지원하는 스페인어 음성 중에서 골라 들을 수 있습니다. 기본 추천은 비교적 또렷한 스페인어 음성을 우선 선택합니다.</p>
              </div>
              <p class="note-hint">메모는 단어 카드 화면 아래에서 바로 적을 수 있어요. 이 화면은 발음 설정만 따로 모아둔 공간입니다.</p>
            </div>
          </section>
        ` : ""}

        ${state.activeTab === "learn" && state.learnScreen === "quiz" ? `
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

        ${state.activeTab === "learn" && state.learnScreen === "wordbank" ? `
        <section class="panel panel--wide">
          <div class="panel__header">
            <div>
              <p class="panel__eyebrow">Word Bank</p>
              <h2>현재 레벨 학습 단어</h2>
            </div>
          </div>
          <div class="wordbank-toolbar">
            <input
              id="wordbank-search"
              class="wordbank-search"
              type="text"
              placeholder="단어 검색"
              value="${escapeAttribute(state.wordBankQuery)}"
            >
            <div class="wordbank-filters">
              <button class="${state.wordBankFilter === "all" ? "wordbank-filter is-active" : "wordbank-filter"}" data-action="set-wordbank-filter" data-filter="all">전체</button>
              <button class="${state.wordBankFilter === "learned" ? "wordbank-filter is-active" : "wordbank-filter"}" data-action="set-wordbank-filter" data-filter="learned">학습 완료</button>
              <button class="${state.wordBankFilter === "review" ? "wordbank-filter is-active" : "wordbank-filter"}" data-action="set-wordbank-filter" data-filter="review">복습 필요</button>
              <button class="${state.wordBankFilter === "favorite" ? "wordbank-filter is-active" : "wordbank-filter"}" data-action="set-wordbank-filter" data-filter="favorite">즐겨찾기</button>
            </div>
          </div>
          <div class="word-grid">
            ${visibleWordBank.map((word) => {
              const learned = progress.learnedWords.includes(word.id);
              const isFavorite = progress.favoriteWords.includes(word.id);
              const isReview = progress.reviewWords.includes(word.id);
              const wordChipClass = [
                "word-chip",
                isFavorite ? "word-chip--favorite" : "",
                isReview ? "word-chip--review" : ""
              ].filter(Boolean).join(" ");
              return `
                <article class="${wordChipClass}">
                  ${isFavorite ? `<span class="word-chip__pin">★ 즐겨찾기</span>` : ""}
                  <strong>${escapeHtml(word.spanish)}</strong>
                  <span>${escapeHtml(word.korean)}</span>
                  <span class="word-chip__tag">${learned ? "학습 완료" : escapeHtml(word.category)}</span>
                  <span class="word-chip__meta">레벨 ${word.difficulty}</span>
                  <span class="word-chip__meta">${isFavorite ? "즐겨찾기 목록에 추가됨" : isReview ? "복습 필요 단어" : "메모 가능"}</span>
                </article>
              `;
            }).join("")}
          </div>
          <div class="wordbank-footer">
            <p class="wordbank-summary">총 ${filteredWordBank.length}개 중 ${visibleWordBank.length}개 표시 · ${currentWordBankPage} / ${wordBankTotalPages} 페이지</p>
            <div class="wordbank-pagination">
              <button class="ghost-button ghost-button--small" data-action="change-wordbank-page" data-page="${Math.max(1, currentWordBankPage - 1)}" ${currentWordBankPage === 1 ? "disabled" : ""}>이전</button>
              <button class="ghost-button ghost-button--small" data-action="change-wordbank-page" data-page="${Math.min(wordBankTotalPages, currentWordBankPage + 1)}" ${currentWordBankPage === wordBankTotalPages ? "disabled" : ""}>다음</button>
            </div>
          </div>
        </section>
        ` : ""}
      </main>
    </div>
  `;

  bindEvents(levelWords, quizWord);
}

function bindEvents(levelWords, quizWord) {
  const profileForm = document.getElementById("profile-form");
  if (profileForm) {
    profileForm.addEventListener("submit", handleCreateProfile);
  }

  document.querySelectorAll("[data-action='tab']").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeTab = button.dataset.tab;
      if (button.dataset.tab === "learn") {
        state.learnScreen = "overview";
      }
      renderApp();
    });
  });

  document.querySelectorAll("[data-action='set-learn-screen']").forEach((button) => {
    button.addEventListener("click", () => {
      state.learnScreen = button.dataset.screen;
      renderApp();
    });
  });

  document.querySelectorAll("[data-action='switch-profile']").forEach((button) => {
    button.addEventListener("click", () => {
      state.db.activeUserId = button.dataset.userId;
      state.activeTab = "learn";
      state.learnScreen = "overview";
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
      setMascotReaction("celebrate", `"${word.spanish}" 외웠다! 아주 잘하고 있어.`);
      saveDatabase();
    } else {
      setMascotReaction("happy", "이미 외운 단어도 다시 보는 습관이 좋아!");
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

  document.querySelectorAll("[data-action='toggle-favorite']").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const progress = getActiveProfile().progress;
      toggleWordInList(progress.favoriteWords, currentWord.id);
      setMascotReaction(
        progress.favoriteWords.includes(currentWord.id) ? "happy" : "calm",
        progress.favoriteWords.includes(currentWord.id)
          ? `좋아, "${currentWord.spanish}"를 즐겨찾기에 넣어둘게!`
          : `"${currentWord.spanish}" 즐겨찾기를 해제했어.`
      );
      saveDatabase();
      renderApp();
    });
  });

  document.querySelectorAll("[data-action='toggle-review']").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const progress = getActiveProfile().progress;
      toggleWordInList(progress.reviewWords, currentWord.id);
      setMascotReaction(
        progress.reviewWords.includes(currentWord.id) ? "thinking" : "calm",
        progress.reviewWords.includes(currentWord.id)
          ? `좋아, "${currentWord.spanish}"는 복습 카드로 챙겨둘게.`
          : `"${currentWord.spanish}"는 이제 복습 필요 목록에서 뺐어.`
      );
      saveDatabase();
      renderApp();
    });
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

  const wordbankSearch = document.getElementById("wordbank-search");
  if (wordbankSearch) {
    wordbankSearch.addEventListener("input", () => {
      state.wordBankQuery = wordbankSearch.value;
      state.wordBankPage = 1;
      renderApp();
    });
  }

  document.querySelectorAll("[data-action='set-wordbank-filter']").forEach((button) => {
    button.addEventListener("click", () => {
      state.wordBankFilter = button.dataset.filter;
      state.wordBankPage = 1;
      renderApp();
    });
  });

  document.querySelectorAll("[data-action='change-wordbank-page']").forEach((button) => {
    button.addEventListener("click", () => {
      state.wordBankPage = Number(button.dataset.page);
      renderApp();
    });
  });

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
      setMascotReaction(
        isCorrect ? (progress.streak >= 2 ? "celebrate" : "happy") : "thinking",
        isCorrect ? `좋았어! "${quizWord.spanish}" 정답이야.` : `괜찮아, "${quizWord.spanish}"는 다시 보면 돼.`
      );

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
  state.activeTab = "learn";
  state.learnScreen = "overview";
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

function persistRenderedNoteDraft() {
  const textarea = document.getElementById("word-note");
  const profile = getActiveProfile();
  if (!textarea || !profile) {
    return;
  }

  const wordId = textarea.dataset.wordId;
  if (!wordId) {
    return;
  }

  profile.progress.notes[String(wordId)] = textarea.value;
  saveDatabase();
}

function setupGlobalHandlers() {
  if (state.handlersBound) {
    return;
  }

  const app = document.getElementById("app");
  if (!app) {
    return;
  }

  app.addEventListener("click", (event) => {
    const actionTarget = event.target.closest("[data-action='toggle-favorite'], [data-action='toggle-review']");
    if (!actionTarget) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const profile = getActiveProfile();
    if (!profile) {
      return;
    }

    const levelWords = getWordsForExactLevel(getActiveLevelNumber(profile.progress));
    const currentWord = levelWords[state.flashIndex % levelWords.length] || WORDS[0];
    const progress = profile.progress;

    if (actionTarget.dataset.action === "toggle-favorite") {
      toggleWordInList(progress.favoriteWords, currentWord.id);
      setMascotReaction(
        progress.favoriteWords.includes(currentWord.id) ? "happy" : "calm",
        progress.favoriteWords.includes(currentWord.id)
          ? `"${currentWord.spanish}" 단어를 즐겨찾기에 넣었어요. 아래 Word Bank 맨 앞에서도 보여줄게요.`
          : `"${currentWord.spanish}" 단어를 즐겨찾기에서 뺐어요.`
      );
    }

    if (actionTarget.dataset.action === "toggle-review") {
      toggleWordInList(progress.reviewWords, currentWord.id);
      setMascotReaction(
        progress.reviewWords.includes(currentWord.id) ? "thinking" : "calm",
        progress.reviewWords.includes(currentWord.id)
          ? `"${currentWord.spanish}" 단어를 복습 필요 목록에 담았어요.`
          : `"${currentWord.spanish}" 단어를 복습 필요 목록에서 뺐어요.`
      );
    }

    saveDatabase();
    renderApp();
  });

  state.handlersBound = true;
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

function getFilteredWordBank(levelWords, progress) {
  return levelWords.filter((word) => {
    const matchesQuery = !state.wordBankQuery
      || word.spanish.toLowerCase().includes(state.wordBankQuery.toLowerCase())
      || word.korean.includes(state.wordBankQuery);
    if (!matchesQuery) {
      return false;
    }

    if (state.wordBankFilter === "learned") {
      return progress.learnedWords.includes(word.id);
    }
    if (state.wordBankFilter === "review") {
      return progress.reviewWords.includes(word.id);
    }
    if (state.wordBankFilter === "favorite") {
      return progress.favoriteWords.includes(word.id);
    }
    return true;
  }).sort((left, right) => {
    const scoreDiff = getWordPriorityScore(right, progress) - getWordPriorityScore(left, progress);
    if (scoreDiff !== 0) {
      return scoreDiff;
    }
    return left.id - right.id;
  });
}

function getWordPriorityScore(word, progress) {
  let score = 0;
  if (progress.favoriteWords.includes(word.id)) {
    score += 30;
  }
  if (progress.reviewWords.includes(word.id)) {
    score += 20;
  }
  if (progress.learnedWords.includes(word.id)) {
    score += 10;
  }
  return score;
}

function getFlashcardTitleSize(text, isBack = false) {
  const length = (text || "").trim().length;
  const baseSize = isBack ? 2.8 : 3.55;
  const minSize = isBack ? 1.55 : 1.9;
  const reduction = isBack ? 0.16 : 0.28;
  const size = baseSize - Math.max(0, length - 4) * reduction;
  return `${Math.max(minSize, size).toFixed(2)}rem`;
}

function getStudyExamples(word) {
  const baseExample = {
    sentence: word.example,
    translation: word.exampleKo,
    glossary: word.exampleWords
  };

  const reviewExample = getReviewExample(word);

  return [baseExample, reviewExample];
}

const REVIEW_EXAMPLE_OVERRIDES = {
  tiempo: {
    sentence: "No tengo tiempo ahora.",
    translation: "지금은 시간이 없어.",
    glossary: [["no", "아니다, ~않다"], ["tengo", "나는 가지고 있다"], ["tiempo", "시간"], ["ahora", "지금"]]
  },
  musica: {
    sentence: "Escucho música en el bus.",
    translation: "나는 버스에서 음악을 들어.",
    glossary: [["escucho", "듣는다"], ["música", "음악"], ["en", "~에, ~에서"], ["el", "그, 정관사"], ["bus", "버스"]]
  },
  tarde: {
    sentence: "Regreso a casa por la tarde.",
    translation: "나는 오후에 집에 돌아가.",
    glossary: [["regreso", "돌아간다"], ["a", "~로"], ["casa", "집"], ["por", "~에"], ["la", "그, 정관사"], ["tarde", "오후"]]
  },
  experiencia: {
    sentence: "Fue una experiencia muy especial.",
    translation: "그건 아주 특별한 경험이었어.",
    glossary: [["fue", "~였다"], ["una", "하나의, 한"], ["experiencia", "경험"], ["muy", "매우"], ["especial", "특별한"]]
  },
  oportunidad: {
    sentence: "Es una buena oportunidad para empezar.",
    translation: "시작하기에 좋은 기회야.",
    glossary: [["es", "~이다"], ["una", "하나의, 한"], ["buena", "좋은"], ["oportunidad", "기회"], ["para", "~하기에"], ["empezar", "시작하다"]]
  },
  inicio: {
    sentence: "Este es solo el inicio.",
    translation: "이건 시작일 뿐이야.",
    glossary: [["este", "이"], ["es", "~이다"], ["solo", "단지"], ["el", "그, 정관사"], ["inicio", "시작"]]
  },
  viaje: {
    sentence: "El viaje fue muy tranquilo.",
    translation: "그 여행은 아주 편안했어.",
    glossary: [["el", "그, 정관사"], ["viaje", "여행"], ["fue", "~였다"], ["muy", "매우"], ["tranquilo", "편안한"]]
  },
  lluvia: {
    sentence: "Parece que habrá lluvia hoy.",
    translation: "오늘은 비가 올 것 같아.",
    glossary: [["parece", "보인다"], ["que", "~라는 것"], ["habrá", "있을 것이다"], ["lluvia", "비"], ["hoy", "오늘"]]
  },
  cancion: {
    sentence: "Esta canción me gusta mucho.",
    translation: "이 노래가 정말 마음에 들어.",
    glossary: [["esta", "이"], ["canción", "노래"], ["me", "나에게"], ["gusta", "마음에 든다"], ["mucho", "많이"]]
  },
  radio: {
    sentence: "Escucho la radio por la mañana.",
    translation: "나는 아침에 라디오를 들어.",
    glossary: [["escucho", "듣는다"], ["la", "그, 정관사"], ["radio", "라디오"], ["por", "~에"], ["la", "그, 정관사"], ["mañana", "아침"]]
  },
  mercado: {
    sentence: "Compro fruta en el mercado.",
    translation: "나는 시장에서 과일을 사.",
    glossary: [["compro", "산다"], ["fruta", "과일"], ["en", "~에, ~에서"], ["el", "그, 정관사"], ["mercado", "시장"]]
  },
  jardín: {
    sentence: "Descansamos un rato en el jardín.",
    translation: "우리는 정원에서 잠깐 쉬어.",
    glossary: [["descansamos", "우리는 쉰다"], ["un", "하나의, 한"], ["rato", "잠깐"], ["en", "~에, ~에서"], ["el", "그, 정관사"], ["jardín", "정원"]]
  },
  reserva: {
    sentence: "Tengo una reserva para las siete.",
    translation: "나는 7시에 예약이 있어.",
    glossary: [["tengo", "나는 가지고 있다"], ["una", "하나의, 한"], ["reserva", "예약"], ["para", "~를 위해"], ["las", "그, 정관사 복수"], ["siete", "일곱"]]
  },
  boleto: {
    sentence: "Guardo el boleto en la mochila.",
    translation: "나는 표를 가방에 넣어 둬.",
    glossary: [["guardo", "보관한다"], ["el", "그, 정관사"], ["boleto", "표"], ["en", "~에"], ["la", "그, 정관사"], ["mochila", "가방"]]
  },
  retraso: {
    sentence: "El tren tiene retraso hoy.",
    translation: "오늘 기차가 지연돼.",
    glossary: [["el", "그, 정관사"], ["tren", "기차"], ["tiene", "가지고 있다"], ["retraso", "지연"], ["hoy", "오늘"]]
  },
  reunion: {
    sentence: "La reunión empieza a las nueve.",
    translation: "회의는 9시에 시작해.",
    glossary: [["la", "그, 정관사"], ["reunión", "회의"], ["empieza", "시작한다"], ["a", "~에"], ["las", "그, 정관사 복수"], ["nueve", "아홉"]]
  },
  proyecto: {
    sentence: "El proyecto avanza bastante bien.",
    translation: "프로젝트가 꽤 잘 진행되고 있어.",
    glossary: [["el", "그, 정관사"], ["proyecto", "프로젝트"], ["avanza", "진행된다"], ["bastante", "꽤"], ["bien", "잘"]]
  },
  horario: {
    sentence: "Reviso mi horario otra vez.",
    translation: "나는 내 일정을 다시 확인해.",
    glossary: [["reviso", "확인한다"], ["mi", "나의"], ["horario", "일정"], ["otra", "다른, 또 한 번"], ["vez", "번"]]
  },
  documento: {
    sentence: "Abro el documento ahora mismo.",
    translation: "나는 지금 바로 문서를 열어.",
    glossary: [["abro", "연다"], ["el", "그, 정관사"], ["documento", "문서"], ["ahora", "지금"], ["mismo", "바로"]]
  },
  recorrido: {
    sentence: "El recorrido dura una hora.",
    translation: "그 경로는 한 시간 걸려.",
    glossary: [["el", "그, 정관사"], ["recorrido", "경로"], ["dura", "지속된다"], ["una", "하나의, 한"], ["hora", "시간"]]
  },
  acuerdo: {
    sentence: "Llegamos a un acuerdo rápido.",
    translation: "우리는 빠르게 합의했어.",
    glossary: [["llegamos", "도달했다"], ["a", "~에"], ["un", "하나의, 한"], ["acuerdo", "합의"], ["rápido", "빠른"]]
  },
  detalle: {
    sentence: "Este detalle es importante.",
    translation: "이 세부사항은 중요해.",
    glossary: [["este", "이"], ["detalle", "세부사항"], ["es", "~이다"], ["importante", "중요한"]]
  },
  consejo: {
    sentence: "Gracias por tu consejo.",
    translation: "조언해줘서 고마워.",
    glossary: [["gracias", "고마워"], ["por", "~에 대해"], ["tu", "너의"], ["consejo", "조언"]]
  },
  desafio: {
    sentence: "Este desafío me motiva mucho.",
    translation: "이 도전은 나에게 큰 동기를 줘.",
    glossary: [["este", "이"], ["desafío", "도전"], ["me", "나에게"], ["motiva", "동기를 준다"], ["mucho", "많이"]]
  },
  crecimiento: {
    sentence: "Veo crecimiento cada mes.",
    translation: "나는 매달 성장을 느껴.",
    glossary: [["veo", "본다"], ["crecimiento", "성장"], ["cada", "각각의"], ["mes", "달"]]
  },
  objetivo: {
    sentence: "Mi objetivo es hablar mejor.",
    translation: "내 목표는 더 잘 말하는 거야.",
    glossary: [["mi", "나의"], ["objetivo", "목표"], ["es", "~이다"], ["hablar", "말하다"], ["mejor", "더 잘"]]
  },
  estrategia: {
    sentence: "Necesitamos otra estrategia.",
    translation: "우리에겐 다른 전략이 필요해.",
    glossary: [["necesitamos", "우리는 필요하다"], ["otra", "다른"], ["estrategia", "전략"]]
  },
  negociacion: {
    sentence: "La negociación fue larga.",
    translation: "협상은 길었어.",
    glossary: [["la", "그, 정관사"], ["negociación", "협상"], ["fue", "~였다"], ["larga", "긴"]]
  },
  confianza: {
    sentence: "Tengo más confianza ahora.",
    translation: "이제 더 자신감이 생겼어.",
    glossary: [["tengo", "나는 가지고 있다"], ["más", "더"], ["confianza", "자신감"], ["ahora", "지금"]]
  },
  entorno: {
    sentence: "Este entorno es muy tranquilo.",
    translation: "이 환경은 아주 차분해.",
    glossary: [["este", "이"], ["entorno", "환경"], ["es", "~이다"], ["muy", "매우"], ["tranquilo", "차분한"]]
  },
  propuesta: {
    sentence: "Tu propuesta parece interesante.",
    translation: "네 제안은 흥미로워 보여.",
    glossary: [["tu", "너의"], ["propuesta", "제안"], ["parece", "보인다"], ["interesante", "흥미로운"]]
  },
  colaboracion: {
    sentence: "La colaboración salió muy bien.",
    translation: "협업이 아주 잘 됐어.",
    glossary: [["la", "그, 정관사"], ["colaboración", "협업"], ["salió", "결과가 나왔다"], ["muy", "매우"], ["bien", "잘"]]
  },
  recurso: {
    sentence: "Este recurso me ayuda mucho.",
    translation: "이 자료가 큰 도움이 돼.",
    glossary: [["este", "이"], ["recurso", "자료, 자원"], ["me", "나에게"], ["ayuda", "도움이 된다"], ["mucho", "많이"]]
  },
  analisis: {
    sentence: "El análisis fue muy útil.",
    translation: "분석이 아주 유익했어.",
    glossary: [["el", "그, 정관사"], ["análisis", "분석"], ["fue", "~였다"], ["muy", "매우"], ["útil", "유익한"]]
  },
  solucion: {
    sentence: "Esa solución funciona bien.",
    translation: "그 해결책은 잘 통하네.",
    glossary: [["esa", "그"], ["solución", "해결책"], ["funciona", "작동한다, 통한다"], ["bien", "잘"]]
  }
};

const FEELING_REVIEW_WORDS = new Set(["feliz", "triste", "contento", "cansado", "alegre", "tranquilo", "nervioso", "orgulloso", "preocupado", "seguro"]);
const ROOM_STATE_REVIEW_WORDS = new Set(["frio", "caliente", "limpio", "sucio", "oscuro", "claro"]);
const PLACE_REVIEW_WORDS = new Set(["casa", "escuela", "ciudad", "calle", "oficina", "mercado", "jardin", "aeropuerto", "alojamiento"]);
const FOOD_REVIEW_WORDS = new Set(["agua", "pan", "leche", "cafe", "comida", "desayuno"]);
const PERSON_REVIEW_WORDS = new Set(["amigo", "familia", "hermano", "hermana", "madre", "padre", "abuela"]);
const OBJECT_REVIEW_WORDS = new Set(["libro", "mesa", "silla", "puerta", "ventana", "perro", "gato", "telefono", "mochila", "radio", "zapato", "documento", "boleto", "equipaje"]);
const GENERAL_ADJECTIVE_REVIEW_WORDS = new Set(["rapido", "dificil", "facil", "importante", "amable", "caliente", "frio", "oscuro", "claro", "fuerte", "limpio", "sucio", "necesario", "disponible", "extranjero", "sostenible", "complejo", "eficiente", "constante", "preciso", "probable"]);

function buildReviewSentence(word) {
  return getReviewExample(word).sentence;
}

function buildReviewTranslation(word) {
  return getReviewExample(word).translation;
}

function buildReviewGlossary(word) {
  return getReviewExample(word).glossary;
}

function getReviewExample(word) {
  const key = normalizeSpanishKey(word.spanish);
  const override = REVIEW_EXAMPLE_OVERRIDES[key];
  if (override) {
    return normalizeReviewExample(override);
  }

  if (key.endsWith("mente")) {
    return normalizeReviewExample({
      sentence: `Ella habla ${word.spanish} en español.`,
      translation: `그녀는 스페인어로 ${word.korean} 말해.`,
      glossary: [["ella", "그녀"], ["habla", "말한다"], [word.spanish, word.korean], ["en", "~로"], ["español", "스페인어"]]
    });
  }

  if (key.endsWith("ar") || key.endsWith("er") || key.endsWith("ir")) {
    return normalizeReviewExample({
      sentence: `Mañana quiero ${word.spanish}.`,
      translation: `나는 내일 이 표현을 직접 써보고 싶어.`,
      glossary: [["mañana", "내일"], ["quiero", "원한다"], [word.spanish, word.korean]]
    });
  }

  if (word.category === "감정" || FEELING_REVIEW_WORDS.has(key)) {
    return normalizeReviewExample({
      sentence: `Hoy me siento ${word.spanish}.`,
      translation: `오늘 나는 ${word.korean} 기분이야.`,
      glossary: [["hoy", "오늘"], ["me siento", "나는 ~한 기분이다"], [word.spanish, word.korean]]
    });
  }

  if (ROOM_STATE_REVIEW_WORDS.has(key)) {
    return normalizeReviewExample({
      sentence: `El cuarto está ${word.spanish} hoy.`,
      translation: `오늘 방이 ${word.korean}.`,
      glossary: [["el", "그, 정관사"], ["cuarto", "방"], ["está", "~한 상태다"], [word.spanish, word.korean], ["hoy", "오늘"]]
    });
  }

  if (word.category === "형용사" || GENERAL_ADJECTIVE_REVIEW_WORDS.has(key)) {
    return normalizeReviewExample({
      sentence: `El plan parece ${word.spanish}.`,
      translation: `그 계획은 ${word.korean} 보여.`,
      glossary: [["el", "그, 정관사"], ["plan", "계획"], ["parece", "보인다"], [word.spanish, word.korean]]
    });
  }

  if (word.category === "음식" || FOOD_REVIEW_WORDS.has(key)) {
    return normalizeReviewExample({
      sentence: `Quiero comprar ${word.spanish} hoy.`,
      translation: `나는 오늘 ${word.korean} 사고 싶어.`,
      glossary: [["quiero", "원한다"], ["comprar", "사다"], [word.spanish, word.korean], ["hoy", "오늘"]]
    });
  }

  if (word.category === "사람" || PERSON_REVIEW_WORDS.has(key)) {
    return normalizeReviewExample({
      sentence: `Hoy veo a mi ${word.spanish}.`,
      translation: `나는 오늘 내 ${word.korean} 만나.`,
      glossary: [["hoy", "오늘"], ["veo", "본다, 만난다"], ["a", "~를"], ["mi", "나의"], [word.spanish, word.korean]]
    });
  }

  if (word.category === "장소" || PLACE_REVIEW_WORDS.has(key)) {
    const placePhrase = key === "casa" ? "casa" : `${getSpanishArticle(key)} ${word.spanish}`;
    return normalizeReviewExample({
      sentence: `Estoy en ${placePhrase} ahora.`,
      translation: `나는 지금 ${word.korean}에 있어.`,
      glossary: key === "casa"
        ? [["estoy", "나는 ~한 상태다"], ["en", "~에, ~에서"], ["casa", "집"], ["ahora", "지금"]]
        : [["estoy", "나는 ~한 상태다"], ["en", "~에, ~에서"], [getSpanishArticle(key), "그, 정관사"], [word.spanish, word.korean], ["ahora", "지금"]]
    });
  }

  if (word.category === "사물" || OBJECT_REVIEW_WORDS.has(key)) {
    const article = getSpanishArticle(key);
    return normalizeReviewExample({
      sentence: `${capitalize(article)} ${word.spanish} está aquí.`,
      translation: `${word.korean}가 여기 있어.`,
      glossary: [[article, "그, 정관사"], [word.spanish, word.korean], ["está", "있다"], ["aquí", "여기"]]
    });
  }

  return normalizeReviewExample({
    sentence: `Pienso mucho en ${word.spanish} hoy.`,
    translation: `오늘은 ${word.korean}에 대해 많이 생각해.`,
    glossary: [["pienso", "생각한다"], ["mucho", "많이"], ["en", "~에 대해"], [word.spanish, word.korean], ["hoy", "오늘"]]
  });
}

function normalizeReviewExample(example) {
  return {
    sentence: example.sentence,
    translation: example.translation,
    glossary: example.glossary.map(([itemWord, meaning]) => ({ word: itemWord, meaning }))
  };
}

function getSpanishArticle(lowerWord) {
  if (lowerWord === "agua") {
    return "el";
  }
  if (/(a|ción|sión|dad|tad|umbre)$/i.test(lowerWord)) {
    return "la";
  }
  return "el";
}

function normalizeSpanishKey(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function setMascotReaction(mood, message) {
  state.mascotMood = mood;
  state.mascotMessage = message;
}

function getMascotState(mood) {
  const mascotMap = {
    calm: { title: "팔라", tone: "calm" },
    happy: { title: "팔라", tone: "happy" },
    celebrate: { title: "팔라", tone: "celebrate" },
    thinking: { title: "팔라", tone: "thinking" }
  };
  return mascotMap[mood] || mascotMap.calm;
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

function getGrammarInfo(word) {
  const lower = word.spanish.toLowerCase();
  const exampleLower = word.example.toLowerCase();
  const isInfinitiveVerb = lower.endsWith("ar") || lower.endsWith("er") || lower.endsWith("ir");
  const adjectiveHints = ["형용사", "감정"];
  const nounHints = ["사람", "장소", "사물", "음식", "기본"];

  let partOfSpeech = "명사";
  if (isInfinitiveVerb) {
    partOfSpeech = "동사";
  } else if (adjectiveHints.includes(word.category)) {
    partOfSpeech = "형용사";
  } else if (lower === "sí" || lower === "no" || lower.endsWith("mente")) {
    partOfSpeech = "부사/표현";
  } else if (nounHints.includes(word.category)) {
    partOfSpeech = "명사";
  }

  let sentenceRole = "문장 속 핵심 의미어";
  if (exampleLower.startsWith(lower) || exampleLower.includes(` ${lower} `)) {
    sentenceRole = partOfSpeech === "동사" ? "동작을 나타내는 서술어" : "핵심 뜻을 담당하는 중심어";
  }
  if (partOfSpeech === "형용사") {
    sentenceRole = "상태나 성질을 설명하는 보어/수식어";
  }
  if (partOfSpeech === "명사") {
    sentenceRole = exampleLower.startsWith(lower) || exampleLower.includes(` ${lower} `)
      ? "주어 또는 목적어 역할의 명사"
      : "문장 안 정보를 채우는 명사";
  }
  if (partOfSpeech === "부사/표현") {
    sentenceRole = "문장 전체 뉘앙스를 조정하는 표현";
  }

  const grammarTip = partOfSpeech === "형용사"
    ? "명사의 상태를 설명하거나 ser/estar 뒤에서 자주 쓰입니다."
    : partOfSpeech === "동사"
      ? "주어에 따라 형태가 바뀌므로 활용형과 함께 익히면 좋습니다."
      : partOfSpeech === "부사/표현"
        ? "문장 맨 앞이나 동사 앞뒤에서 뉘앙스를 부드럽게 바꿉니다."
        : "관사와 함께 쓰이거나 전치사 뒤에 와서 문장 정보를 채웁니다.";

  const memoryTip = partOfSpeech === "형용사"
    ? `"${word.korean}"처럼 상태를 붙여 말하는 단어라고 기억하면 쉽습니다.`
    : partOfSpeech === "동사"
      ? `"~하다"로 끝나는 뜻으로 묶어서 외우면 활용이 빨라집니다.`
      : partOfSpeech === "부사/표현"
        ? "짧게 바로 반응할 때 쓰는 표현으로 통째로 익히면 좋습니다."
        : "사물·사람·장소 이름을 붙이는 기본 단어라고 생각하면 됩니다.";

  const positionHint = partOfSpeech === "형용사"
    ? "예문에서는 동사 뒤에서 상태를 설명하는 위치에 나옵니다."
    : partOfSpeech === "동사"
      ? "예문에서 주어 다음에 와서 행동을 이끕니다."
      : partOfSpeech === "부사/표현"
        ? "문장 앞이나 동사 옆에 붙어 말의 분위기를 만듭니다."
        : "예문에서 주어, 목적어, 장소 정보로 자연스럽게 들어갑니다.";

  const practiceTip = partOfSpeech === "형용사"
    ? `"Estoy/Es + ${word.spanish}" 형태로 한 번 더 말해보세요.`
    : partOfSpeech === "동사"
      ? `"yo + ${word.spanish}" 또는 예문 속 활용형을 소리 내어 따라해보세요.`
      : partOfSpeech === "부사/표현"
        ? "짧은 대답 문장에 넣어서 바로 반응하듯 연습해보세요."
        : `"el/la + ${word.spanish}" 또는 예문 그대로 따라 읽으면 익숙해집니다.`;

  return {
    partOfSpeech,
    sentenceRole,
    grammarTip,
    memoryTip,
    positionHint,
    practiceTip
  };
}

function getVoiceChoices(voices) {
  if (!voices.length) {
    return [];
  }

  const uniqueVoices = [];
  const seen = new Set();
  voices.forEach((voice) => {
    if (!seen.has(voice.voiceURI)) {
      seen.add(voice.voiceURI);
      uniqueVoices.push(voice);
    }
  });

  const prioritized = [...uniqueVoices].sort((left, right) => {
    return getVoicePriority(left) - getVoicePriority(right);
  }).slice(0, 4);

  return prioritized.map((voice, index) => ({
    id: voice.voiceURI,
    label: index === 0
      ? `추천 목소리 · ${getVoiceLocaleLabel(voice.lang)}`
      : `스페인어 목소리 ${index + 1} · ${getVoiceLocaleLabel(voice.lang)}`,
    voice,
    available: true
  }));
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

function getVoicePriority(voice) {
  const lang = (voice.lang || "").toLowerCase();
  const name = (voice.name || "").toLowerCase();
  if (lang === "es-es") return 0;
  if (lang === "es-mx") return 1;
  if (lang.startsWith("es") && /google|microsoft|natural/.test(name)) return 2;
  if (lang.startsWith("es")) return 3;
  return 10;
}

function getVoiceLocaleLabel(lang) {
  const normalized = (lang || "").toLowerCase();
  if (normalized === "es-es") return "스페인";
  if (normalized === "es-mx") return "멕시코";
  if (normalized === "es-us") return "미국 스페인어";
  if (normalized === "es-ar") return "아르헨티나";
  if (normalized === "es-co") return "콜롬비아";
  if (normalized.startsWith("es")) return "기타 스페인어";
  return "사용 가능 음성";
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

initialize();
