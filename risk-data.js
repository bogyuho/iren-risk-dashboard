window.IREN_RISK_DATA = {
  updatedAt: "2026-04-13 KST / 10단계 루프",
  title: "IREN 실행리스크",
  verdict: "상업가동 미확인 유지, 근거 신뢰도 상향",
  thesis:
    "SEC·공식 IREN·공식 SNS·전력/채용/공공기록을 10단계로 다시 돌렸다. 계약, 자금, GPU 조달, Childress 현장공사 신호는 더 단단해졌지만, 매출 전환의 문인 Delivery Notice, Supplier validation, Microsoft acceptance, Tranche 1/2 single-cluster merge, Sweetwater 1 energization 완료는 2026-04-13 기준 여전히 공개 확인 전이다.",
  executionTree: {
    progress: 52,
    label: "실행 증거 성숙도",
    stage: "공사·조달 증거 강화 / MS 승인 전",
    blocker: "Microsoft acceptance",
    nextEvent: "Delivery Notice",
    interpretation:
      "뿌리와 줄기인 계약·장비·자금·부지는 SEC와 공식자료로 확인된다. 가지인 Childress 현장공사는 공식 SNS·채용·공공기록 보조증거가 늘었다. 잎과 열매인 commissioning, single-cluster merge, Microsoft acceptance, Sweetwater energization은 아직 공개 확인 전이다.",
    checkpoints: [
      { label: "계약/자금", status: "확인됨", tone: "green" },
      { label: "현장공사", status: "증거 강화", tone: "cyan" },
      { label: "시운전", status: "공개확인 전", tone: "yellow" },
      { label: "MS 승인", status: "미확인", tone: "red" }
    ]
  },
  heroImage: "https://iren.com/api/media/file/iren-childress-43.avif",
  secondaryImage: "https://iren.com/api/media/file/sweetwater.webp",
  summaryMetrics: [
    { label: "SEC 최신 filing", value: "3/4 이후 없음" },
    { label: "신뢰도 루프", value: "10/10 완료" },
    { label: "상업 가동", value: "MS 승인 전" },
    { label: "전력 병목", value: "Sweetwater 미공시" }
  ],
  auditLoop: [
    { step: "SEC 최신 filing", result: "2026-03-04 이후 새 IREN filing 없음", confidence: "높음", tone: "green" },
    { step: "SEC full-text", result: "Acceptance / Delivery Notice / Sweetwater 완료 hit 없음", confidence: "높음", tone: "red" },
    { step: "Microsoft SOW", result: "Acceptance 후 월별 과금, rejection/cure 구조 확인", confidence: "높음", tone: "red" },
    { step: "Dell 8-K", result: "3.5B 달러 H2 2026 조달계약, post-shipment 지급", confidence: "높음", tone: "cyan" },
    { step: "ATM 8-K", result: "60억 달러 ATM, 기존 10억 달러 ATM 소진 확인", confidence: "높음", tone: "red" },
    { step: "IREN 공식 뉴스", result: "3/4 AI Cloud 이후 새 공식 뉴스 없음", confidence: "높음", tone: "yellow" },
    { step: "Childress 공식/SNS", result: "H1/H2·H3/H4 공사 신호, load banking 신호", confidence: "중상", tone: "cyan" },
    { step: "Sweetwater 공식", result: "2026 energization 목표, 완료 공시는 없음", confidence: "높음", tone: "red" },
    { step: "ERCOT/SB6", result: "대형부하 75MW+ 규제·비용·curtailment 리스크", confidence: "중상", tone: "red" },
    { step: "채용/공공기록", result: "운영·commissioning 채용과 TDLR 보조증거 확인", confidence: "중간", tone: "cyan" }
  ],
  risks: [
    {
      title: "Microsoft 계약/수익 실현",
      status: "승인 전 유지",
      score: 74,
      tone: "red",
      confidence: "높음",
      evidence: "SEC SOW / SEC full-text",
      why:
        "TCV 9.7B 달러와 선급금 구조는 확인됐다. 다만 월별 과금은 각 GPU Service가 Minimum GPU Quantity를 넘기고 Microsoft Acceptance를 받아야 시작된다. 2026-04-13 기준 acceptance 확인 filing은 없다.",
      next: "Delivery Notice, Microsoft acceptance/rejection, cure notice, delay credit, GPU Service termination 단서를 최우선 추적한다."
    },
    {
      title: "Childress H1-H4 공사",
      status: "공사 증거 강화",
      score: 44,
      tone: "cyan",
      confidence: "중상",
      evidence: "Q2 FY26 / 공식 LinkedIn / TDLR",
      why:
        "Q2 FY26는 H1-H4 공정 진행을 말했고, 공식 LinkedIn은 H1/H2 advanced, H3/H4 civil works, generator/UPS load banking을 언급했다. TDLR Childress 기록은 보조증거지만 AI hall acceptance 증거는 아니다.",
      next: "원본 사진 날짜, 위성사진, load banking, commissioning sign-off, H1-H4 roofline/MEP 증거를 같은 타임라인에 맞춘다."
    },
    {
      title: "Cluster integration",
      status: "병합 미확인",
      score: 78,
      tone: "red",
      confidence: "높음",
      evidence: "Microsoft SOW",
      why:
        "SOW상 Tranche 3/4는 Tranche 1/2가 단일 Cluster로 병합된 뒤에만 delivery 가능하다. 단순 건물 공정과 별개의 숨은 병목이다.",
      next: "single Cluster merge, InfiniBand topology, NCCL validation, HPL-MxP, HPCG validation 결과를 추적한다."
    },
    {
      title: "GPU 조달/금융",
      status: "조달확인 / 납품 전",
      score: 58,
      tone: "yellow",
      confidence: "높음",
      evidence: "Dell 8-K / Q2 FY26",
      why:
        "Dell H2 2026 조달계약과 GPU financing은 확인됐다. 그러나 tranche shipment, onsite install, Q3 FY26 10-Q의 Dell 원계약 exhibit은 아직 남아 있다.",
      next: "Dell agreement exhibit, shipment/install 단서, 지급조건 충족 여부, post-shipment 30일 지급 부담을 확인한다."
    },
    {
      title: "계약되지 않은 ARR 목표",
      status: "목표치 일부 미계약",
      score: 68,
      tone: "yellow",
      confidence: "높음",
      evidence: "Mar 4 press release",
      why:
        "150,000 GPU fleet의 3.7B 달러 이상 ARR 추정은 일부 내부 가정과 향후 계약·commissioning에 의존한다. Microsoft TCV와 별개로 전부 확정매출로 보면 안 된다.",
      next: "신규 고객 계약, utilization/pricing, BC/Childress 추가 GPU 상업가동 공시를 분리해 추적한다."
    },
    {
      title: "ATM 희석",
      status: "희석 부담 큼",
      score: 82,
      tone: "red",
      confidence: "높음",
      evidence: "ATM 8-K",
      why:
        "2026-03-04 기준 60억 달러 ATM이 열렸고 기존 10억 달러 ATM은 66,707,732주 발행으로 이미 소진됐다. 실행자금에는 도움이지만 주당 상방에는 직접 부담이다.",
      next: "추가 발행 주식수, 평균 매각가, CAPEX 대비 희석 효율, 현금 사용처를 업데이트한다."
    },
    {
      title: "Sweetwater 1 전력",
      status: "완료 공시 없음",
      score: 72,
      tone: "red",
      confidence: "높음",
      evidence: "IREN 공식 페이지 / SEC search",
      why:
        "공식 페이지는 Sweetwater 1의 2026년 substation energization과 under construction 상태를 말한다. 2026-04-13 기준 SEC full-text에서 완료 확인은 찾지 못했다.",
      next: "회사 공지, 전력사/카운티 기록, 위성사진에서 345kV/138kV bulk substation energization 증거를 확인한다."
    },
    {
      title: "ERCOT/규제",
      status: "대기열 병목",
      score: 80,
      tone: "red",
      confidence: "중상",
      evidence: "ERCOT facts / Texas SB6",
      why:
        "ERCOT 대형부하 interconnection request가 급증했고 SB6는 75MW+ large load에 site control, financial commitment, curtailment/backup generation 관련 부담을 만든다.",
      next: "Childress/Sweetwater 관련 queue, interconnection milestone, SB6 rulemaking, load ramp, curtailment 조건을 본다."
    },
    {
      title: "채용/운영인력",
      status: "운영전환 신호",
      score: 46,
      tone: "cyan",
      confidence: "중간",
      evidence: "IREN Careers / Indeed",
      why:
        "Childress/Sweetwater 운영·네트워크·commissioning·maintenance 채용 신호는 긍정이다. 다만 채용공고는 운영 준비 신호일 뿐, cluster acceptance 증거는 아니다.",
      next: "공식 careers, 직무 마감 속도, commissioning에서 operations로 넘어가는 직무 전환을 주간 추적한다."
    },
    {
      title: "Oklahoma 장기 옵션",
      status: "2028 장기옵션",
      score: 64,
      tone: "yellow",
      confidence: "중상",
      evidence: "IREN 공식 Oklahoma page / Q2 FY26",
      why:
        "Oklahoma 1.6GW는 2028년 power ramp 예정의 장기 상방 옵션이다. 현재 가치에는 의미가 있지만 2026년 Microsoft 실행리스크를 대체하는 근거는 아니다.",
      next: "토지/허가/전력계약/송전 보강/착공 자료가 실제로 쌓이는지 별도 트랙으로 본다."
    }
  ],
  watchlist: [
    "Microsoft Delivery Notice와 Acceptance/Rejection 발생 여부",
    "Tranche 1/2 single-cluster merge 확인",
    "HPL-MxP, HPCG, InfiniBand topology, NCCL validation 결과",
    "Sweetwater 1 2026년 substation energization 완료 증거",
    "Dell agreement exhibit의 delivery/payment/default 조항",
    "Dell/NVIDIA tranche shipment와 onsite install 단서",
    "ATM 추가 발행 속도와 평균 매각가",
    "Childress 원본 사진, 위성사진, load banking, commissioning sign-off 매칭",
    "ERCOT/SB6 large load queue, load ramp, curtailment 조건",
    "채용공고가 construction에서 operations/commissioning으로 이동하는 속도"
  ],
  companyCards: [
    {
      ticker: "CRWV",
      name: "CoreWeave",
      category: "순수 네오클라우드 1군",
      judgment: "가장 검증된 AI-native cloud, 다만 밸류/부채 부담 큼",
      upside: "중상",
      risk: "중상",
      grade: "A급 품질 후보",
      buyReasons: ["2025 revenue $5.1B", "RPO $60.7B", "43 data centers, >850MW active power", "약 3.1GW contracted power", "Meta $21B 확장, Anthropic 계약", "AI cloud revenue와 고객 수요가 이미 실적으로 증명됨"],
      risks: ["부채와 capex 부담이 매우 큼", "고객 집중 리스크", "밸류에 이미 높은 기대가 반영됨", "RPO가 매출/현금흐름으로 전환돼야 함"],
      breakpoints: ["RPO 전환 속도 둔화", "대형 고객 확장 둔화", "이자비용/부채 부담이 영업 개선을 계속 잡아먹는 경우", "신규 데이터센터 active power 전환 지연"]
    },
    {
      ticker: "NBIS",
      name: "Nebius",
      category: "순수 네오클라우드 1군",
      judgment: "NVIDIA 공식성 최강, ARR 램프 검증 필요",
      upside: "큼",
      risk: "중상",
      grade: "A급 성장 후보",
      buyReasons: ["NVIDIA Reference Platform NCP", "GTC Vera Rubin 공식 클라우드 제공자 리스트 포함", "NVIDIA $2B 투자/파트너십", "YE2025 ARR 약 $1.25B", "2026 YE ARR guide $7B-$9B", "시장이 NVIDIA가 찍은 AI cloud로 볼 가능성이 큼"],
      risks: ["ARR 가이드가 매우 공격적임", "현재 실적보다 미래 ARR에 밸류가 의존", "GPU/전력/데이터센터/고객 온보딩이 동시에 맞아야 함", "실행 지연 시 밸류 부담이 커짐"],
      breakpoints: ["분기 ARR 증가 둔화", "2026 ARR guide 하향", "NVIDIA 투자/파트너십이 실매출로 연결되지 않음", "전력/Capex/고객 온보딩 병목 발생"]
    },
    {
      ticker: "IREN",
      name: "IREN",
      category: "고위험 고상방 하이브리드",
      judgment: "Microsoft acceptance가 핵심 트리거",
      upside: "매우 큼",
      risk: "매우 큼",
      grade: "A급 후보지만 사이즈 제한 필요",
      buyReasons: ["Microsoft SOW", "Dell/GB300 financing", ">4.5GW secured grid-connected power", "$3.4B ARR target by end-CY2026", "Bitcoin miner에서 AI cloud/power platform으로 리레이팅될 수 있음", "Microsoft acceptance가 확인되면 가장 큰 실행리스크가 줄어듦"],
      risks: ["Microsoft acceptance 미확인", "GB300 cluster integration", "Sweetwater energization", "$6B ATM dilution", "Bitcoin mining beta가 아직 남아 있음", "실적보다 미래 ARR 전환에 의존"],
      breakpoints: ["Microsoft acceptance/invoice start 지연", "GPU cluster commissioning 실패", "Sweetwater 1 energization 지연", "ATM 희석 가속", "Microsoft 관련 매출이 기대보다 늦게 잡힘"]
    },
    {
      ticker: "CIFR",
      name: "Cipher Digital",
      category: "채굴사 -> hyperscale 데이터센터 전환 강함",
      judgment: "AWS + Fluidstack/Google 전환 증거가 강함",
      upside: "큼",
      risk: "큼",
      grade: "A-급 전환 실체 후보",
      buyReasons: ["4.2GW portfolio capacity", "600MW HPC data-center facilities 개발 중", "Barber Lake 300MW Fluidstack lease, Google support", "Black Pearl 300MW AWS 15-year lease", "Black Pearl은 bitcoin mining을 중단하고 데이터센터로 전환", "채굴장에서 hyperscaler 데이터센터로 넘어가는 증거가 구체적임"],
      risks: ["2026-2027 delivery 실행 리스크", "2025 손실과 부채 확대", "3.4GW pipeline은 아직 계약 현금흐름이 아님", "ERCOT/PJM interconnection, 장비 조달, 공사 지연 가능성"],
      breakpoints: ["Barber Lake Phase I delivery 지연", "Black Pearl rent commencement 지연", "AWS/Fluidstack 조건 악화", "추가 pipeline lease 실패", "project financing이 예상보다 불리하게 체결"]
    },
    {
      ticker: "WULF",
      name: "TeraWulf",
      category: "채굴사 -> HPC 데이터센터 임대 전환 강함",
      judgment: "Google credit support가 붙은 Fluidstack 구조가 핵심",
      upside: "큼",
      risk: "중상",
      grade: "A-급 전환 실체 후보",
      buyReasons: ["522MW contracted critical IT load", "Lake Mariner, Abernathy HPC campus", "Fluidstack lease에 Google credit support", "Core42 lease", "회사가 HPC hosting을 primary growth driver로 명시", "mining보다 AI/HPC 데이터센터 임대 쪽으로 전환 논리가 선명함"],
      risks: ["2025 매출은 아직 mining 중심", "Lake Mariner/Abernathy delivery 실행 리스크", "liquid-cooled HPC campus 공사/냉각/전력 인프라 리스크", "Fluidstack/Google 구조가 직접 Google tenant는 아님", "부채와 자산 확장 속도 부담"],
      breakpoints: ["Lake Mariner/Abernathy delivery 지연", "Fluidstack/Google credit support 구조 약화", "rent commencement 지연", "추가 250-500MW 연간 계약 목표 실패", "project financing 조건 악화"]
    },
    {
      ticker: "CORZ",
      name: "Core Scientific",
      category: "miner -> CoreWeave high-density colocation 전환",
      judgment: "CoreWeave 590MW 의존도가 장점이자 리스크",
      upside: "중상",
      risk: "중상",
      grade: "B+급 전환 실체 후보",
      buyReasons: ["CoreWeave와 약 590MW leased customer power capacity", "1.4GW gross utility power capacity", "약 920MW total leasable customer power capacity", "모든 MW를 high-density colocation으로 전환하겠다는 방향 명확", "2026년 billable customer power가 늘면 mining에서 colocation으로 리레이팅 가능"],
      risks: ["CoreWeave 고객 집중", "2025 revenue는 아직 digital asset 중심", "balance sheet 부담", "conversion capex 필요", "CoreWeave 일정에 크게 의존"],
      breakpoints: ["CoreWeave billable MW 전환 지연", "고객 다변화 실패", "high-density colocation revenue mix 개선 실패", "conversion capex가 과도하게 커짐", "CoreWeave와 계약 조건/일정 악화"]
    },
    {
      ticker: "HUT",
      name: "Hut 8",
      category: "power-first digital infrastructure platform",
      judgment: "구조는 흥미롭지만 복잡하고 2027 타이밍이 많음",
      upside: "중상",
      risk: "중상",
      grade: "B급 관찰 후보",
      buyReasons: ["1,020MW energy capacity under management", "1,560MW under development/construction", "River Bend 330MW AI infrastructure project", "Highrise AI: H100 1,000개, H200 96개 보유", "Hut 8 Canada는 기존 cloud/colocation 고객 200+ 보유", "단순 miner보다 power + cloud + AI infra 구조가 넓음"],
      risks: ["mining, power, traditional cloud, AI cloud가 섞여 구조가 복잡함", "River Bend는 Q2 2027 initial delivery/commissioning 목표", "Highrise AI 규모가 CRWV/NBIS 대비 작음", "각 segment의 수익성이 분리되어야 함"],
      breakpoints: ["Highrise AI revenue/utilization 부진", "River Bend tenant/lease 공개 지연", "River Bend commissioning 지연", "American Bitcoin/mining exposure가 전체 밸류를 계속 오염", "복합 구조 때문에 할인 지속"]
    },
    {
      ticker: "APLD",
      name: "Applied Digital",
      category: "AI 데이터센터 인프라 개발주",
      judgment: "가능성은 있지만 고객계약/수익구조를 더 파야 함",
      upside: "중상",
      risk: "큼",
      grade: "B급 관찰 후보",
      buyReasons: ["AI data-center infrastructure beneficiary로 시장이 인식", "2026-02-28 기준 assets $6.25B", "데이터센터 개발/인프라 쪽으로 레버리지 있음", "전통 miner pivot이라기보다 AI 데이터센터 개발주에 가까움"],
      risks: ["최신 10-Q에서 segment economics를 더 파야 함", "liabilities도 $3.68B로 큼", "공식 NVIDIA/GTC neo-cloud 신호는 약함", "고객계약과 MW 전환이 명확히 보여야 함"],
      breakpoints: ["고객계약/임대조건 불명확", "MW 전환 일정 지연", "financing 조건 악화", "segment revenue가 기대보다 약함", "단순 AI data-center 테마로만 주가가 오른 것으로 확인"]
    },
    {
      ticker: "RIOT",
      name: "Riot Platforms",
      category: "대형 miner + 초기 AI lease",
      judgment: "AMD lease는 진짜지만 아직 AI 전환 규모가 작음",
      upside: "중간",
      risk: "큼",
      grade: "B-급 관찰 후보",
      buyReasons: ["Rockdale 700MW developed capacity", "Corsicana는 완공 시 약 1GW developed capacity 가능", "AMD 25MW critical IT load lease", "AMD lease는 +75MW expansion option과 +100MW ROFR 존재", "대형 전력/부지 기반은 확실함"],
      risks: ["AMD 25MW는 전체 mining/power base 대비 작음", "아직 주가가 bitcoin/mining beta에 크게 묶임", "추가 AI/HPC tenant 증거가 부족함", "데이터센터 전환은 초기 단계"],
      breakpoints: ["AMD가 확장 옵션을 행사하지 않음", "추가 non-mining tenant가 안 붙음", "Corsicana/Rockdale 전환 일정이 흐려짐", "BTC 가격에만 주가가 반응하고 AI/HPC 증거가 안 나옴"]
    },
    {
      ticker: "MARA",
      name: "MARA Holdings",
      category: "대형 mining/energy platform + AI/HPC 옵션",
      judgment: "규모는 크지만 AI revenue는 아직 material하지 않음",
      upside: "중간",
      risk: "큼",
      grade: "B-급 관찰 후보",
      buyReasons: ["약 1.9GW total capacity", "Starwood JV로 >1GW initial IT capacity 목표", "잠재적으로 2.5GW+ 확장 가능성", "Exaion 인수로 HPC/cloud 역량 확보", "글로벌 energy/digital infrastructure footprint 보유"],
      risks: ["10-K상 AI inference initiatives는 아직 material revenue 없음", "BTC treasury/mining 성격이 강함", "Starwood JV가 실제 tenant/revenue로 이어져야 함", "글로벌 운영 복잡성"],
      breakpoints: ["Starwood JV tenant 확보 실패", "AI inference revenue가 계속 미미함", "Exaion contribution이 작음", "capacity reallocation이 구체화되지 않음", "주가가 계속 BTC beta로만 움직임"]
    },
    {
      ticker: "CLSK",
      name: "CleanSpark",
      category: "우수 bitcoin miner + AI/HPC 옵션 초기",
      judgment: "좋은 miner지만 아직 AI 인프라 회사로 보긴 이른 단계",
      upside: "중간",
      risk: "중상",
      grade: "C+급 관찰 후보",
      buyReasons: ["1,027MW contracted power capacity", "Georgia 620MW platform", "Texas 285MW next-generation data-center campus 계획", "AI data center leadership 영입", "Submer와 cooling/design 관련 협업 가능성 탐색", "기존 mining operation 효율성은 강점"],
      risks: ["대형 AI/HPC customer proof가 약함", "아직 매출 대부분은 bitcoin mining", "AI/HPC 전환에는 capex와 시간 필요", "좋은 miner와 좋은 AI data-center company는 다름"],
      breakpoints: ["첫 대형 AI/HPC lease가 안 나옴", "285MW Texas campus 일정 지연", "Georgia retrofit 논리가 구체화되지 않음", "BTC mining economics 악화", "AI/HPC가 계속 presentation-level story에 머묾"]
    },
    {
      ticker: "BTDR",
      name: "Bitdeer",
      category: "miner/ASIC/data center 옵션",
      judgment: "수직계열화는 있으나 AI cloud 전환 증거는 더 필요",
      upside: "중간",
      risk: "큼",
      grade: "C+급 후순위 관찰",
      buyReasons: ["mining, ASIC, data center 운영 기반", "자체 hardware/infra 역량이 있음", "power/data center optionality 존재"],
      risks: ["최신 20-F deep dive 필요", "AI/HPC 고객계약 증거가 약함", "neo-cloud로 보기엔 아직 근거 부족", "mining/ASIC cycle에 크게 영향받을 수 있음"],
      breakpoints: ["명확한 AI/HPC tenant 미확보", "AI cloud revenue 부재", "ASIC/mining cycle 악화", "전력/데이터센터 확장 증거 부족"]
    },
    {
      ticker: "HIVE",
      name: "HIVE Digital",
      category: "miner + GPU/HPC 스토리",
      judgment: "아직 핵심 후보로 보기엔 검증 부족",
      upside: "투기적",
      risk: "큼",
      grade: "C급 후순위 관찰",
      buyReasons: ["GPU/HPC 스토리가 있음", "소형주라 테마 반응은 클 수 있음", "mining infrastructure 기반 존재"],
      risks: ["최신 40-F/MD&A 기반 확인 필요", "GPU cloud revenue, 고객계약, MW 전환 증거 부족", "유동성과 변동성 리스크", "BTC beta가 강할 가능성"],
      breakpoints: ["GPU cloud revenue 확인 안 됨", "AI/HPC 고객계약 부재", "mining economics 악화", "단순 테마성 급등으로 판명"]
    },
    {
      ticker: "BITF",
      name: "Keel Infrastructure / Bitfarms",
      category: "miner -> infrastructure 리브랜딩 후보",
      judgment: "이름 변경은 증거가 아니므로 아직 후순위",
      upside: "투기적",
      risk: "큼",
      grade: "C급 후순위 관찰",
      buyReasons: ["Keel Infrastructure로 전환하며 인프라 방향성 제시", "대규모 전력/데이터센터 전환 가능성은 있음", "mining-only multiple에서 벗어날 수 있는 옵션"],
      risks: ["리브랜딩은 실체 증거가 아님", "AI/HPC tenant, lease, rent commencement 확인 필요", "희석/자금조달 리스크", "여전히 BTC beta 가능성 큼"],
      breakpoints: ["AI/HPC 계약 부재", "인프라 전환이 구체적 숫자로 안 나옴", "고객/전력/MW/rent commencement 증거 부족", "계속 mining stock처럼만 거래"]
    },
    {
      ticker: "SLNH",
      name: "Soluna",
      category: "초고위험 소형 옵션",
      judgment: "핵심 매수 후보가 아니라 관찰용",
      upside: "투기적",
      risk: "매우 큼",
      grade: "C-급 관찰 또는 제외 후보",
      buyReasons: ["전력/데이터센터 옵션은 있을 수 있음", "소형주라 테마 반응은 클 수 있음"],
      risks: ["주가 $1 이하", "희석 리스크 매우 큼", "2025-2026 주식수 급증", "사업 검증도 낮음", "보규형 포트폴리오 핵심 후보로는 부적절"],
      breakpoints: ["추가 희석 지속", "AI/HPC 실계약 부재", "재무 안정성 악화", "단순 테마성 소형주로 판명"]
    }
  ],
  sources: [
    {
      label: "IREN latest investor news page",
      url: "https://iren.com/investors/news"
    },
    {
      label: "IREN 10-Q, 2026-02-05",
      url: "https://www.sec.gov/Archives/edgar/data/0001878848/000187884826000015/iren-20251231.htm"
    },
    {
      label: "Microsoft SOW Exhibit 10.3",
      url: "https://www.sec.gov/Archives/edgar/data/0001878848/000187884826000015/exhibit103-partnerstatem.htm"
    },
    {
      label: "Q2 FY26 results",
      url: "https://www.sec.gov/Archives/edgar/data/1878848/000187884826000014/a991irenreportsq2fy26res.htm"
    },
    {
      label: "March 2026 AI Cloud expansion",
      url: "https://www.sec.gov/Archives/edgar/data/0001878848/000114036126007905/ny20064909x3_ex99-1.htm"
    },
    {
      label: "Dell purchase agreements 8-K",
      url: "https://www.sec.gov/Archives/edgar/data/0001878848/000114036126007905/ny20064909x3_8k.htm"
    },
    {
      label: "6B ATM 8-K",
      url: "https://www.sec.gov/Archives/edgar/data/0001878848/000114036126007919/ny20064909x2_8k.htm"
    },
    {
      label: "IREN Sweetwater official page",
      url: "https://iren.com/data-centers/sweetwater"
    },
    {
      label: "IREN Childress official page",
      url: "https://iren.com/data-centers/childress"
    },
    {
      label: "IREN Oklahoma official page",
      url: "https://iren.com/data-centers/oklahoma"
    },
    {
      label: "IREN official LinkedIn Microsoft deployment",
      url: "https://www.linkedin.com/posts/iren_ai-is-driving-unprecedented-demand-for-compute-activity-7417728810684428289-rX76"
    },
    {
      label: "Texas TDLR Childress project record",
      url: "https://www.tdlr.texas.gov/TABS/Search/Print/TABS2024024946"
    },
    {
      label: "Texas SB6 bill text",
      url: "https://capitol.texas.gov/tlodocs/89R/billtext/pdf/SB00006H.pdf"
    },
    {
      label: "Indeed IREN data center jobs",
      url: "https://www.indeed.com/cmp/Iren-6/jobs/q-Data-Center-Technician"
    },
    {
      label: "datacenter.fyi Childress public records",
      url: "https://www.datacenter.fyi/state/tx/childress"
    }
  ]
};
