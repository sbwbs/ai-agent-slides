import { Session } from '../types/slides';

export const koreanTranslations: Session[] = [
  // Session 0: Title & Overview
  {
    id: 0,
    title: "소개",
    slides: [
      {
        id: 0,
        type: 'title',
        title: '현대 인공지능의 파운데이션 이해',
        subtitle: 'LLM·AI 에이전트·MCP·A2A',
        content: '나의 여정과 통찰',
        icon: 'Sparkles'
      },
      {
        id: 1,
        type: 'bullets',
        title: '소개',
        subtitle: '서원배',
        bullets: [
          '학력: King\'s College London (역사 & 전쟁학, 기술 & 사이버보안 집중)',
          '생성형 AI, LLM 시스템, RAG 파이프라인, AI 에이전트에 대한 깊은 경험',
          '제1원리적 사고, 자기 학습, 실전 실험으로 쌓아온 경력',
          '직업적 정체성: Forward Deployment Engineer → AI Solution Architect 궤적',
          '복잡한 AI 시스템을 실용적이고 배포 가능한 엔터프라이즈 솔루션으로 전환하는 것으로 알려짐',
          '집중 분야: AI 에이전트 시스템을 end-to-end로 설계, 디버그, 배포'
        ],
        highlight: '고객 니즈 → 기술 구현을 연결하기',
        icon: 'User'
      },
      {
        id: 2,
        type: 'two-column',
        title: 'Sendbird & 나의 역할',
        leftContent: 'Sendbird 개요',
        leftBullets: [
          '초기: 메시징, 통화, 지원을 위한 글로벌 채팅 API 플랫폼',
          '현재: 기업을 위한 AI 에이전트 플랫폼',
          '추론 가능한, 도구 통합 AI 에이전트',
          '프로덕션 등급 에이전트 오케스트레이션',
          '주요 고객: 쿠팡, 한샘, Fursys/Sidiz, 우아한형제들'
        ],
        rightContent: 'FDE로서의 나의 역할',
        rightBullets: [
          '고객 배포 담당: POC → 프로덕션',
          'Actionbook 구축 & 고객 API 통합',
          '로그 분석 & 실제 안정성 보장',
          'PM, 엔지니어링, 고객 개발 팀과 협업',
          '필드 엔지니어이자 AI 아키텍트 역할'
        ],
        icon: 'Building2'
      },
      {
        id: 3,
        type: 'section',
        title: '세션 개요',
        sessionNumber: 0,
        sessionTitle: '오늘 다룰 내용',
        icon: 'Presentation'
      },
      {
        id: 4,
        type: 'bullets',
        title: '오늘의 여정',
        bullets: [
          '기초 & 초기 여정: AI/LLM의 핵심 개념과 시작 과정',
          '실험 & 응용 작업: AI 에이전트 구축, 워크플로우 설계, SendBird 프로젝트',
          '현재의 LLM – 기술 & 영향: LLM 작동 방식, 새로운 프로토콜(MCP, A2A), 교육과 업무에 미치는 영향',
          '미래 & 핵심 요점: 앞으로의 에이전트 생태계와 지속적 학습의 교훈'
        ],
        icon: 'MapIcon'
      }
    ]
  },

  // Session 1: Foundations
  {
    id: 1,
    title: "AI와 LLM의 기초",
    slides: [
      {
        id: 5,
        type: 'section',
        title: 'AI와 LLM의 기초',
        sessionNumber: 1,
        sessionTitle: '핵심 원리',
        icon: 'Brain'
      },
      {
        id: 6,
        type: 'bullets',
        title: 'AI 핵심 개념',
        bullets: [
          '인공지능: 학습과 문제 해결 같은 인지 기능을 모방하는 기계',
          '머신러닝(ML): 명시적 프로그래밍 없이 데이터를 사용하여 작업을 개선하는 하위 집합',
          '딥러닝: 뇌에서 영감을 받은 신경망을 사용하여 대용량 데이터에서 패턴 찾기'
        ],
        highlight: 'AI → ML → 딥러닝: 각각은 이전 것의 하위 집합',
        icon: 'Layers'
      },
      {
        id: 7,
        type: 'bullets',
        title: '생성형 AI/LLM이란?',
        bullets: [
          '생성형 AI: 훈련 데이터와 유사한 새로운 콘텐츠(텍스트, 이미지 등)를 생성하는 모델',
          '대형 언어 모델(LLM): 다음 단어를 예측하기 위해 방대한 텍스트 데이터셋으로 훈련됨',
          '인간과 유사한 텍스트 생성 가능 – 본질적으로 매우 발전된 자동완성',
          '수십억 개의 단어로부터 문법, 사실, 추론 패턴을 학습'
        ],
        icon: 'MessagesSquare'
      },
      {
        id: 8,
        type: 'two-column',
        title: '규모와 능력',
        leftContent: 'LLM이 강력한 이유',
        leftBullets: [
          '훈련 데이터의 엄청난 규모(수십억 단어)',
          '언어의 뉘앙스를 암묵적으로 포착',
          '질문에 답하고, 에세이를 쓰고, 대화 나누기',
          '거의 인간과 같은 상호작용'
        ],
        rightContent: '중요한 한계',
        rightBullets: [
          '진정한 이해 부족',
          '인간처럼 사실을 "알지" 못함',
          '통계적으로 가능성 높은 답변 생성',
          '환각(잘못되거나 무의미한 출력) 생성 가능'
        ],
        icon: 'Scale'
      }
    ]
  },

  // Session 2: Early AI History & Personal Journey
  {
    id: 2,
    title: "초기 AI와 나의 여정",
    slides: [
      {
        id: 9,
        type: 'section',
        title: '초기 AI: ELIZA부터 현재까지',
        sessionNumber: 2,
        sessionTitle: '과거 관점',
        icon: 'History'
      },
      {
        id: 10,
        type: 'bullets',
        title: 'AI의 진화',
        bullets: [
          '1966년: ELIZA 챗봇이 스크립트 응답으로 사람들을 속임',
          '2000년대-2010년대: ML, 신경망, 트랜스포머 모델의 발전(2017년)',
          '2020년: GPT-3가 분수령으로 등장',
          '2022년: ChatGPT 출시 – AI가 주류의 관심을 끔',
          '"생성형 AI"에 대한 전 세계적 관심이 극적으로 급증'
        ],
        highlight: '단순한 스크립트에서 유창한 인간 같은 대화로',
        icon: 'Clock'
      },
      {
        id: 11,
        type: 'section',
        title: 'LLM에서의 나의 초기 여정',
        sessionNumber: 2,
        sessionTitle: '개인 스토리',
        icon: 'Rocket'
      },
      {
        id: 12,
        type: 'bullets',
        title: '첫 실험',
        bullets: [
          '규칙과 작은 ML 모델을 사용한 간단한 챗봇으로 시작',
          'API를 통해 GPT-3 탐색 – 일관된 단락 생성에 놀람',
          '창의적인 프롬프트로 모델의 한계 발견',
          '놀라움과 회의적 시각이 동시에'
        ],
        highlight: '처음으로 일관된 응답을 받았을 때 마법 같았음',
        icon: 'FlaskConical'
      },
      {
        id: 13,
        type: 'bullets',
        title: 'AI 에이전트 발견',
        bullets: [
          'Q&A를 넘어 행동을 취하는 시스템으로 이동',
          'LLM이 도구(웹 검색, API)를 트리거할 수 있는 스크립트 작성',
          '첫 번째 성공적인 웹 검색 + 답변 통합은 미래를 목격하는 것 같았음',
          '초기 실험은 서툴렀지만 엄청난 잠재력을 보여줌'
        ],
        highlight: '추론과 행동을 결합하는 것은 엄청나게 강력함',
        icon: 'Bot'
      },
      {
        id: 14,
        type: 'bullets',
        title: '워크플로우 & 사고의 연쇄',
        bullets: [
          '단일 프롬프트-응답 대신 다단계 프로세스 설계',
          'AI가 작업을 단계로 나눔: 브레인스토밍 → 평가 → 추천',
          '단계 간 정보를 전달하기 위해 프롬프트를 구조화',
          '오늘날 LangChain과 같은 도구가 자동화하는 것의 수동 버전'
        ],
        highlight: '지능의 레고 블록을 조립하는 것과 같음',
        icon: 'Workflow'
      }
    ]
  },

  // Session 3: SendBird Experience
  {
    id: 3,
    title: "SendBird에서의 응용 작업",
    slides: [
      {
        id: 15,
        type: 'section',
        title: 'SendBird에서의 응용 작업',
        sessionNumber: 3,
        sessionTitle: 'AI 챗봇 구축',
        icon: 'MessageSquare'
      },
      {
        id: 16,
        type: 'bullets',
        title: 'SendBird AI 챗봇',
        subtitle: 'AI로 고객 참여 향상',
        bullets: [
          '자연스러운 대화: GPT-4가 인간과 같은 대화 가능',
          '회사 지식 베이스: 독점 데이터(FAQ, 가이드, 정책) 제공',
          '노코드 솔루션: 비개발자도 맞춤형 챗봇 배포 가능',
          '파일 업로드 또는 URL 지정 – 시스템이 AI 지식에 통합'
        ],
        icon: 'BotMessageSquare'
      },
      {
        id: 17,
        type: 'bullets',
        title: '핵심 기능: 사실에 기반',
        bullets: [
          'SendBird 제품 문서 수집',
          '시스템이 관련 정보를 찾아 프롬프트에 포함',
          '답변이 유창하고 도메인에 정확함',
          'SendBird 제품에 특화된 맞춤형 응답'
        ],
        highlight: '자사 데이터 기반이 정확성에 중요했음',
        icon: 'FileCheck'
      },
      {
        id: 18,
        type: 'two-column',
        title: '환각 완화',
        leftContent: '문제',
        leftBullets: [
          'AI가 답변을 지어냄',
          '확신에 차 있지만 틀림',
          '사용자와의 신뢰 문제',
          '검증 필요'
        ],
        rightContent: '해결책',
        rightBullets: [
          '관련 문서와 함께 맥락적 프롬프팅',
          '응답에 출처 인용',
          '문서 페이지 링크',
          '투명성이 신뢰 구축'
        ],
        icon: 'ShieldCheck'
      },
      {
        id: 19,
        type: 'bullets',
        title: '배운 교훈',
        bullets: [
          'LLM 제품화는 모델 그 이상이 필요',
          '주변 시스템이 중요: 검색, 프롬프팅 전략, UX',
          '지속적인 조정과 학습 프로세스',
          'AI를 회사의 목소리와 사실에 정렬',
          '성공을 위해 인간 요소가 중요'
        ],
        highlight: '시스템이 실제 지원 질문을 자율적으로 처리하는 것을 보는 것은 초현실적이었음',
        icon: 'Lightbulb'
      },
      {
        id: 20,
        type: 'bullets',
        title: '고객 지원을 위한 SendBird AI 에이전트',
        subtitle: 'RAG 챗봇에서 행동 주도 에이전트로의 진화',
        bullets: [
          '에이전트: 다단계 추론과 자율적 의사 결정',
          '메모리: 대화와 세션 전반에 걸친 지속적 맥락',
          '채널 통합: 채팅, 이메일, 음성에 걸친 원활한 배포',
          'Actionbook(프롬프팅): 일관된 동작을 위한 구조화된 프롬프트 템플릿',
          '도구: 티켓팅, CRM, 지식 베이스용 API 통합'
        ],
        highlight: '질문에 답하는 것에서 행동을 취하는 것으로',
        icon: 'Bot'
      }
    ]
  },

  // Session 4-10 would continue with translations...
  // For brevity, I'll add key section titles and the final slides

  // Session 4: How LLMs Work
  {
    id: 4,
    title: "LLM 작동 방식",
    slides: [
      {
        id: 21,
        type: 'section',
        title: 'LLM 작동 방식',
        sessionNumber: 4,
        sessionTitle: '기술적 관점, 단순화',
        icon: 'Cpu'
      },
      {
        id: 22,
        type: 'bullets',
        title: '훈련과 "지식"',
        bullets: [
          '방대한 데이터셋으로 훈련됨(인터넷 텍스트, 책 등)',
          '문장에서 다음에 올 단어를 예측하는 것을 학습',
          '언어 패턴, 사실, 추론 능력을 습득',
          '지식은 훈련 데이터에 고정됨 – 자동 업데이트 없음',
          '훈련 컷오프 이후 이벤트는 알지 못함'
        ],
        icon: 'GraduationCap'
      },
      {
        id: 23,
        type: 'bullets',
        title: '블랙박스와 창발성',
        bullets: [
          '수백만/수십억 개의 매개변수(신경망의 가중치)',
          '프로그래밍된 규칙 없음 – 모델이 언어 패턴을 "알아냄"',
          '창발적 능력: 시, 코드 디버깅, 복잡한 추론',
          '명시적으로 훈련받지 않은 것도 할 수 있음',
          '연구자들도 답변이 어떻게 도출되는지 항상 확실하지는 않음'
        ],
        highlight: '놀랍기도 하고 약간 무섭기도 함',
        icon: 'Box'
      },
      {
        id: 24,
        type: 'bullets',
        title: 'LLM이 오류를 범하는 이유',
        bullets: [
          '진정한 이해 부족 – 그럴듯한 문장만 생성',
          '일관된 세계관이나 사실 데이터베이스 없음',
          '불확실할 때 잘못된 정보를 확신에 차서 말함',
          '컨텍스트 길이 제한(일반적으로 수천 단어)',
          '긴 대화에서 이전 세부사항을 잊어버릴 수 있음'
        ],
        highlight: '이러한 한계가 증강 기술의 필요성을 야기함',
        icon: 'AlertCircle'
      }
    ]
  },

  // Session 5: Augmenting LLMs
  {
    id: 5,
    title: "LLM 증강",
    slides: [
      {
        id: 25,
        type: 'section',
        title: 'LLM 증강',
        sessionNumber: 5,
        sessionTitle: '벡터와 메모리',
        icon: 'Database'
      },
      {
        id: 26,
        type: 'bullets',
        title: 'Retrieval-Augmented Generation (RAG)',
        subtitle: '모델에게 참고할 스마트 라이브러리 제공',
        bullets: [
          '지식 컷오프와 제한된 메모리 극복',
          '핵심 기술: 벡터 임베딩',
          '본질적으로 AI를 위한 "오픈북 시험"',
          'LLM의 유창함과 데이터베이스의 신뢰성 결합'
        ],
        icon: 'BookOpen'
      },
      {
        id: 27,
        type: 'bullets',
        title: '임베딩이란?',
        bullets: [
          '의미를 포착하는 텍스트의 숫자 표현',
          '유사한 텍스트는 유사한 숫자를 갖는 숫자 목록(벡터)',
          '"Cat"과 "kitty"는 서로 가까운 임베딩을 가짐',
          '철자가 아닌 의미와 맥락을 인코딩',
          '특수한 언어 모델을 사용하여 생성'
        ],
        highlight: '텍스트를 측정 가능한 의미로 변환',
        icon: 'Binary'
      },
      {
        id: 28,
        type: 'bullets',
        title: '벡터 데이터베이스 & 의미 검색',
        bullets: [
          '벡터 데이터베이스에 문서의 임베딩 저장',
          '사용자 질문을 임베딩하고 가장 가까운 매치 검색',
          '키워드가 아닌 의미로 검색하는 사서와 같음',
          '"가격이 얼마인가요?"라고 물었을 때 "가격 정책"을 찾을 수 있음',
          '정확한 단어가 아닌 개념을 이해'
        ],
        icon: 'Search'
      },
      {
        id: 29,
        type: 'bullets',
        title: 'LLM 프롬프트와의 통합',
        bullets: [
          '각 쿼리마다 벡터 DB에서 상위 관련 스니펫 가져오기',
          '스니펫을 LLM 프롬프트에 컨텍스트로 삽입',
          'LLM이 최신의 구체적인 정보를 참고',
          '사실 정확성을 극적으로 향상',
          '훈련 데이터를 넘어 모델 지식 확장'
        ],
        highlight: 'SendBird 봇이 최신 제품 세부정보를 아는 방식',
        icon: 'Link'
      }
    ]
  },

  // Session 6: Tools and Agents
  {
    id: 6,
    title: "LLM 확장: 도구와 에이전트",
    slides: [
      {
        id: 30,
        type: 'section',
        title: 'LLM 확장',
        sessionNumber: 6,
        sessionTitle: '도구와 에이전트',
        icon: 'Wrench'
      },
      {
        id: 31,
        type: 'two-column',
        title: '왜 도구인가?',
        leftContent: 'LLM의 한계',
        leftBullets: [
          '지식이 고정됨',
          '작업을 실행할 수 없음',
          '텍스트만 생성',
          '세상과 상호작용 없음'
        ],
        rightContent: '도구가 가능하게 하는 것',
        rightBullets: [
          '최신 정보 가져오기',
          '외부 시스템에 영향',
          'API 호출과 쿼리',
          '실시간 데이터 액세스'
        ],
        icon: 'Settings'
      },
      {
        id: 32,
        type: 'bullets',
        title: '정적 모델에서 상호작용 에이전트로',
        bullets: [
          '예: "서울 날씨는?" → 날씨 API 호출',
          '예: "회의 일정 잡기" → 캘린더 이벤트 생성',
          'LLM 출력이 시스템의 함수를 트리거',
          'AI를 콘텐츠 생성기에서 작업 실행자로 변환'
        ],
        highlight: '텍스트 + 행동 = 훨씬 더 유용한 AI',
        icon: 'Zap'
      },
      {
        id: 33,
        type: 'two-column',
        title: '진화: LLM 워크플로우 vs LLM 에이전트',
        leftContent: '전통적 LLM 워크플로우',
        leftBullets: [
          '수동 프롬프팅과 체이닝',
          '개발자가 명시적 로직 작성',
          '엄격한 순차적 단계',
          '제한된 자율성',
          '커스텀 프레임워크 코드'
        ],
        rightContent: '현대 LLM 에이전트',
        rightBullets: [
          '자율적 추론과 계획',
          '에이전트가 다음 단계 결정',
          '동적 도구 선택',
          '자체 수정 행동',
          '네이티브 SDK가 무거운 작업 처리'
        ],
        icon: 'Workflow'
      },
      {
        id: 34,
        type: 'bullets',
        title: '네이티브 에이전트 SDK',
        subtitle: 'OpenAI, Anthropic, Gemini',
        bullets: [
          '내장된 함수 호출과 도구 사용',
          '자동 프롬프트 최적화와 컨텍스트 관리',
          '다단계 추론에 대한 네이티브 지원',
          '제공업체 간 표준화된 인터페이스',
          '개발자 초점이 오케스트레이션에서 도구와 목표 정의로 이동'
        ],
        highlight: '제공업체들이 에이전트 구축을 더 쉽게 만들기 위해 경쟁',
        icon: 'Code'
      },
      {
        id: 35,
        type: 'two-column',
        title: '프롬프트 엔지니어링 vs 컨텍스트 엔지니어링',
        subtitle: 'LLM 상호작용을 최적화하는 두 가지 접근법',
        leftContent: '프롬프트 엔지니어링',
        leftBullets: [
          '범위: 특정 순간의 구체적 지시나 쿼리 설계',
          '최적화: 입력 프롬프트의 표현, 스타일, 구조',
          '시간 범위: 단기 – "모델에게 어떻게 물어보는 것이 최선인가?"',
          '비유: 전문가에게 하나의 잘 만들어진 질문',
          '프롬프트를 명확하고, 집중적이며, 최소한이면서도 충분하게 유지',
          '필요할 때 명시적 역할/지시 + 예시 사용'
        ],
        rightContent: '컨텍스트 엔지니어링',
        rightBullets: [
          '범위: 더 넓은 "프레임" 설계 – 컨텍스트, 메모리, 검색, 도구',
          '최적화: 정보 아키텍처 – 어떤 컨텍스트를, 언제, 어떻게',
          '시간 범위: 중/장기 – 올바른 배경으로 시스템 구축',
          '비유: 브리핑, 서류철, 주변 자료 구축',
          '관련 컨텍스트 제공: 과거 상호작용, 도메인 지식, 도구',
          '토큰 예산과 신선도 관리; 검색, 메모리, 요약 사용'
        ],
        highlight: '프로덕션 AI 시스템은 둘 다 필요: 명확한 프롬프트와 잘 설계된 컨텍스트',
        icon: 'FileCode'
      },
      {
        id: 36,
        type: 'bullets',
        title: 'Model Context Protocol (MCP)',
        subtitle: 'Anthropic이 2024년 말에 도입',
        bullets: [
          'AI가 도구, 데이터, 서비스와 연결하기 위한 개방형 표준',
          '벤더별 형식 대신 범용 어댑터',
          '함수 호출을 위한 구조화된 JSON 기반 프로토콜',
          '벤더 중립적이고 안전',
          '모든 AI가 MCP 호환 도구에 연결 가능'
        ],
        highlight: 'AI-도구 통신을 위한 HTTP와 같음',
        icon: 'Plug'
      },
      {
        id: 37,
        type: 'bullets',
        title: 'Agent-to-Agent Protocol (A2A)',
        subtitle: 'Google이 2025년에 발표',
        bullets: [
          'MCP가 AI→도구라면, A2A는 AI→AI',
          '특화된 에이전트들이 협업 가능',
          '예: 법률 AI + 금융 AI가 함께 작업',
          '안전한 에이전트 간 통신을 위한 표준',
          '통합의 용이성을 위해 HTTP/JSON 기반'
        ],
        highlight: '협업하는 AI의 네트워크 구축',
        icon: 'Network'
      },
      {
        id: 38,
        type: 'bullets',
        title: 'AI 에이전트의 핵심 구성요소',
        subtitle: '자율 시스템의 구성 요소',
        bullets: [
          '1. 입력/인식: 원시 입력(텍스트, 이벤트, 센서)을 수신하고 변환',
          '2. 메모리/상태: 단기(대화 컨텍스트)와 장기(사용자 선호도, 이력)',
          '3. 추론/계획: 작업을 단계로 나누고, 도구/행동 선택',
          '4. 행동/실행: API 호출, 응답 전송, 부작용 트리거',
          '5. 오케스트레이션: 인식 → 메모리 → 추론 → 행동 간 흐름 관리',
          '6. 학습/피드백: 결과 모니터링, 행동 적응(선택사항)',
          '7. 안전/거버넌스: 입력 검증, 도구 제한, 행동 로깅'
        ],
        highlight: '각 구성요소가 함께 작동하여 지능적이고 자율적인 행동 생성',
        icon: 'Boxes'
      },
      {
        id: 39,
        type: 'bullets',
        title: '에이전틱 복합 시스템',
        bullets: [
          '여러 AI 에이전트 + 도구의 복잡한 시스템',
          '미래: 금융 AI, HR AI, 연구 AI가 모두 상호운용',
          '업계가 MCP와 A2A 프로토콜로 수렴',
          '하나의 챗봇에서 AI 팀으로 확장',
          '도전: 일관되고, 안전하며, 정렬된 다중 에이전트 시스템'
        ],
        highlight: '우리는 AI 생태계의 여명에 있음',
        icon: 'GitBranch'
      }
    ]
  },

  // Session 7: LLMs in Education
  {
    id: 7,
    title: "교육에서의 LLM",
    slides: [
      {
        id: 40,
        type: 'section',
        title: '교육에서의 LLM',
        sessionNumber: 7,
        sessionTitle: '학습과 교육에 미치는 영향',
        icon: 'School'
      },
      {
        id: 41,
        type: 'bullets',
        title: '학생들의 채택',
        bullets: [
          '전 세계 학생의 86%가 학업에 AI 사용(2024년)',
          '66%가 특히 ChatGPT 사용',
          '용도: 연구, 설명, 브레인스토밍, 에세이 개요',
          '새로운 계산기나 Google처럼 되어가고 있음'
        ],
        highlight: '학생 3명 중 2명이 이제 ChatGPT 사용',
        icon: 'Users'
      },
      {
        id: 42,
        type: 'two-column',
        title: '양날의 검',
        leftContent: '우려사항',
        leftBullets: [
          '부정행위와 독창성 문제',
          'AI에 대한 의존성',
          '지름길을 위한 오용',
          '학문적 성실성 도전',
          '학습 vs. AI 작업 제출'
        ],
        rightContent: '기회',
        rightBullets: [
          '개인화된 튜터링',
          '즉각적인 설명',
          '브레인스토밍 도움',
          '어려움을 겪는 학생 지원',
          '교사 시간 확보'
        ],
        icon: 'Swords'
      },
      {
        id: 43,
        type: 'bullets',
        title: '교사들의 관점',
        subtitle: 'Pew 설문조사, 2023년 말',
        bullets: [
          'K-12 교사의 25%: AI가 득보다 해가 많음',
          '단 6%만 AI가 대체로 긍정적이라고 생각',
          '나머지는 불확실하거나 혼재된 효과 인식',
          '우려: 과도한 의존, 부정확한 정보, 윤리',
          '잠재력: 채점 지원, 수업 계획, 개인화된 학습'
        ],
        icon: 'UserCheck'
      },
      {
        id: 44,
        type: 'bullets',
        title: '앞으로 나아갈 길: AI 리터러시',
        bullets: [
          'AI를 효과적이고 윤리적으로 사용하는 방법 가르치기',
          'AI를 강력한 학습 보조도구로 인정',
          '한계에 대한 교육(사실 확인, 맹목적 신뢰 피하기)',
          'AI 사용 문서화 및 출력 비평',
          'AI가 편재한 직장을 위해 학생 준비시키기'
        ],
        highlight: 'AI는 사라지지 않음 – 사려 깊게 관리하기',
        icon: 'BookOpenCheck'
      }
    ]
  },

  // Session 8: LLMs in Workplace
  {
    id: 8,
    title: "직장에서의 LLM",
    slides: [
      {
        id: 45,
        type: 'section',
        title: '직장에서의 LLM',
        sessionNumber: 8,
        sessionTitle: '일하는 방식의 변화',
        icon: 'Briefcase'
      },
      {
        id: 46,
        type: 'bullets',
        title: '광범위한 채택',
        bullets: [
          '전 세계 사무실의 76%가 ChatGPT 사용(2024년 말)',
          '전 세계 직원의 약 33%가 업무에 적극적으로 사용',
          '전년도에 비해 거의 두 배 증가',
          '용도: 이메일, 보고서, 코드, 마케팅, 데이터 분석 작성',
          '2022년 말 출시 → 2년 만에 다수 채택'
        ],
        highlight: '각 지식 근로자가 이제 주니어 어시스턴트 보유',
        icon: 'Building'
      },
      {
        id: 47,
        type: 'bullets',
        title: '생산성 향상',
        subtitle: 'MIT 연구, 2023년',
        bullets: [
          'ChatGPT로 작업이 약 40% 더 빠르게 완료됨',
          '결과물 품질이 약 18% 향상',
          '시간을 절약하고 더 나은 결과 생산',
          '약한 작성자가 가장 많은 혜택',
          '특정 기술에서 평준화 역할'
        ],
        icon: 'TrendingUp'
      },
      {
        id: 48,
        type: 'bullets',
        title: '새로운 워크플로우와 역할',
        bullets: [
          '"프롬프트 엔지니어" 역할의 등장',
          '기존 도구에 AI 통합(Office, IDE, 고객 서비스)',
          '인간이 감독하고, AI가 허드렛일 처리',
          '직무가 감독과 창의적 판단으로 이동',
          '지원 에이전트는 복잡한 케이스 처리, AI는 FAQ 처리'
        ],
        highlight: '역할을 대체하기보다는 증강',
        icon: 'Users2'
      },
      {
        id: 49,
        type: 'two-column',
        title: '직장의 도전과제',
        leftContent: '우려사항',
        leftBullets: [
          '기밀성과 데이터 유출',
          '정확성은 검증 필요',
          '과도한 의존과 기술 손실',
          '출력 확인에 소요되는 시간',
          'AI 생성 "작업 쓰레기"'
        ],
        rightContent: '해결책',
        rightBullets: [
          '회사 정책과 교육',
          '자체 호스팅 모델',
          '검토 프로세스',
          '전략적 AI 사용 가이드라인',
          '자동화와 기술의 균형'
        ],
        icon: 'ShieldAlert'
      },
      {
        id: 50,
        type: 'bullets',
        title: '전반적 영향',
        bullets: [
          '컴퓨터나 인터넷과 같은 범용 기술',
          '단기적: 인간 근로자 증강',
          '장기적: 일부 작업 자동화, 새로운 작업 출현',
          '도메인 전문성 + AI 기술에 대한 수요',
          '인간의 창의성, 전략, 대인관계 기술이 더 중요해짐'
        ],
        highlight: '전문성과 AI를 결합하는 전문가가 높은 수요',
        icon: 'Target'
      }
    ]
  },

  // Session 9: Future
  {
    id: 9,
    title: "미래",
    slides: [
      {
        id: 51,
        type: 'section',
        title: '앞으로의 전망',
        sessionNumber: 9,
        sessionTitle: 'LLM과 생성형 AI의 미래',
        icon: 'Telescope'
      },
      {
        id: 52,
        type: 'bullets',
        title: '더욱 강력한 모델',
        bullets: [
          '발전: GPT-2 → GPT-3 → GPT-4 → ?',
          '수조 개의 매개변수와 특화된 훈련',
          '다중모달 이해와 더 나은 추론',
          '더 적은 오류, 더 세밀한 이해',
          '단순 확장을 넘어선 새로운 아키텍처 탐색'
        ],
        icon: 'Gauge'
      },
      {
        id: 53,
        type: 'bullets',
        title: '다중모달 및 다재다능한 AI',
        bullets: [
          '텍스트를 넘어: 이미지, 오디오, 비디오',
          '즉석에서 보고, 듣고, 시각물 생성',
          '다이어그램 설명, 녹음 분석, 그래픽 생성',
          'AR 안경, 음성 어시스턴트를 통한 통합',
          '모든 모달리티에 걸친 진정한 스마트 어시스턴트'
        ],
        highlight: '더 이상 채팅창에 국한되지 않음',
        icon: 'MonitorSmartphone'
      },
      {
        id: 54,
        type: 'bullets',
        title: '에이전트 생태계',
        bullets: [
          '협업하는 특화된 AI들의 군집',
          '의료 진단: 증상 AI + 치료 AI + 약물 상호작용 AI',
          '비즈니스: "AI 부서장"에게 위임하는 "AI CEO"',
          '도전: 오케스트레이션과 신뢰할 수 있는 협력',
          '새로운 분야: AI 운영(AI Ops)'
        ],
        highlight: 'AI 작업자 플릿 관리',
        icon: 'Globe'
      },
      {
        id: 55,
        type: 'bullets',
        title: '윤리, 규제, 사회',
        bullets: [
          '편향과 차별 방지',
          'AI 행동에 대한 책임성',
          '업무 자동화 결정',
          'AI 규제와 투명성 요구사항',
          '잘못된 정보 방지를 위한 AI 생성 콘텐츠 라벨링'
        ],
        icon: 'Scale3d'
      },
      {
        id: 56,
        type: 'bullets',
        title: '사회적 도전을 위한 AI',
        bullets: [
          '기후 모델링과 환경 솔루션',
          '개인화된 의료와 건강관리',
          '자원이 부족한 지역의 교육',
          '모든 아이를 위한 AI 튜터',
          '여러분 세대가 이러한 발전을 이끕니다'
        ],
        highlight: 'AI는 인간의 잠재력을 증폭해야지 훼손하지 않아야 함',
        icon: 'HeartHandshake'
      },
      {
        id: 57,
        type: 'quote',
        quote: '21세기의 문맹은 읽고 쓸 수 없는 사람이 아니라, 배우고, 배움을 버리고, 다시 배울 수 없는 사람이다.',
        author: 'Alvin Toffler'
      },
      {
        id: 58,
        type: 'bullets',
        title: '인간을 위한 지속적 학습',
        bullets: [
          '기술 분야에서 지식의 반감기가 줄어들고 있음',
          '오늘 배운 것이 몇 년 후 구식이 될 수 있음',
          '평생 학습과 적응성의 필요',
          '호기심과 유연성 수용',
          '다시 초보자가 될 준비를 하기'
        ],
        highlight: '적응성이 21세기의 초능력',
        icon: 'RefreshCw'
      }
    ]
  },

  // Session 10: Key Takeaways
  {
    id: 10,
    title: "핵심 요점",
    slides: [
      {
        id: 59,
        type: 'section',
        title: '핵심 요점과 조언',
        sessionNumber: 10,
        sessionTitle: '앞으로의 여정을 위한 교훈',
        icon: 'Compass'
      },
      {
        id: 60,
        type: 'bullets',
        title: '1. 기본에 충실하기',
        bullets: [
          '견고한 기본기가 변화를 헤쳐나가게 함',
          'AI에서: 확률, 논리, 인간 중심 설계',
          '기본을 마스터하기 – 그것이 기반암',
          '강력한 기초로 새로운 도구를 비판적으로 평가',
          '이유를 이해하면 더 나은 솔루션 설계에 도움'
        ],
        icon: 'Anchor'
      },
      {
        id: 61,
        type: 'bullets',
        title: '2. 단계별로 학습하기',
        bullets: [
          '과대광고나 폭넓음에 압도되지 말기',
          '점진적 접근 취하기: 간단한 챗봇 → 단일 도구 에이전트 → 복잡한 시스템',
          '각 단계는 압도하지 않고 확장해야 함',
          '작은 성공을 축하하기 – 진전은 복리로 쌓임',
          '일관된 점진적 학습이 산발적인 큰 도약을 이김'
        ],
        icon: 'TrendingUp'
      },
      {
        id: 62,
        type: 'bullets',
        title: '3. 실습 실험',
        bullets: [
          '이론도 좋지만, 직접 하는 것이 가장 많이 가르침',
          '데모를 가지고 놀고, 스크립트를 작성하고, 프로토타입을 만들기',
          '실패는 예상되고 괜찮음 – 디버깅이 이해를 깊게 함',
          '진입 장벽이 그 어느 때보다 낮음(무료 티어, 대학 리소스)',
          '기꺼이 만지작거리고 실험하기'
        ],
        highlight: '직접 손을 더럽히기',
        icon: 'Hammer'
      },
      {
        id: 63,
        type: 'bullets',
        title: '4. 호기심을 유지하고 계속 배우기',
        bullets: [
          'AI 뉴스 팔로우(노이즈 필터링)',
          '온라인 강좌 수강',
          '커뮤니티와 포럼 가입',
          '실험을 공유하고 다른 사람들로부터 배우기',
          '폭넓은 호기심 배양 – 학제간 아이디어가 혁신을 촉발'
        ],
        icon: 'Sparkles'
      },
      {
        id: 64,
        type: 'bullets',
        title: '5. 배움을 버리고 적응할 준비하기',
        bullets: [
          '어렵지만 중요: 구식 접근법 버리기',
          '한 프레임워크의 전문성 → 새로운 패러다임 도래',
          '후퇴가 아닌 진화로 보기',
          '"이전 방식"에 대한 집착보다 유연성',
          '새로운 것을 받아들이고 다시 초보자가 되는 것은 해방적'
        ],
        icon: 'RotateCcw'
      },
      {
        id: 65,
        type: 'bullets',
        title: '6. 윤리와 목적',
        bullets: [
          '기술은 목적을 위한 수단',
          '인간의 가치와 해결할 실제 문제를 놓치지 말기',
          '교육자라면: AI가 학생들의 학습을 어떻게 도울 수 있는가?',
          '비즈니스라면: 경험을 존중하며 개선',
          'AI 사용을 긍정적인 결과로 안내'
        ],
        highlight: '이유를 기억하기',
        icon: 'Heart'
      },
      {
        id: 66,
        type: 'bullets',
        title: '마지막 생각',
        bullets: [
          '우리는 과거의 교훈과 미래의 가능성이 만나는 흥미진진한 교차점에 서 있음',
          '초기 챗봇에서 정교한 에이전트와 프로토콜까지',
          '여정은 계속됨',
          '대담하게 실험하고, 실패로부터 배우고, 통찰을 공유하기',
          '적응력 있고 인간 중심으로 남기'
        ],
        icon: 'Star'
      },
      {
        id: 67,
        type: 'quote',
        quote: 'AI 혁명은 우리에게 일어나는 일이 아니라, 우리 모두가 함께 만들어가는 것이다.',
        author: ''
      },
      {
        id: 68,
        type: 'title',
        title: '감사합니다!',
        subtitle: '질문 & 토론',
        content: 'AI의 미래를 함께 탐험해봅시다',
        icon: 'PartyPopper'
      }
    ]
  }
];

// Create a map for quick lookup of Korean translations by slide ID
export const koreanSlideMap = new Map();
koreanTranslations.forEach(session => {
  session.slides.forEach(slide => {
    koreanSlideMap.set(slide.id, slide);
  });
});
