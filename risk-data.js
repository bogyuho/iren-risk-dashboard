window.IREN_RISK_DATA = {
  updatedAt: "2026-04-12 KST",
  title: "IREN 실행리스크",
  verdict: "중상 리스크, 그러나 추적 가능",
  thesis:
    "계약, 장비, 자금, 부지의 큰 뼈대는 확인된다. 하지만 2026년 Childress H1-H4 commissioning과 Microsoft acceptance 전까지 실행리스크를 낮게 보면 안 된다.",
  executionTree: {
    progress: 48,
    label: "실행 성숙도",
    stage: "공사 진행, acceptance 전",
    blocker: "Microsoft acceptance",
    nextEvent: "Sweetwater 전력 확인",
    interpretation:
      "뿌리와 줄기는 자랐다. 계약/자금/부지는 확인됐지만, 가지와 잎에 해당하는 commissioning, cluster integration, Microsoft acceptance는 아직 덜 자랐다.",
    checkpoints: [
      { label: "계약/자금", status: "확인", tone: "green" },
      { label: "공사", status: "진행", tone: "cyan" },
      { label: "시운전", status: "대기", tone: "yellow" },
      { label: "MS 승인", status: "미확인", tone: "red" }
    ]
  },
  heroImage: "https://iren.com/api/media/file/iren-childress-43.avif",
  secondaryImage: "https://iren.com/api/media/file/sweetwater.webp",
  summaryMetrics: [
    { label: "전체 실행리스크", value: "Yellow" },
    { label: "Childress 공사 신호", value: "Yellow-Green" },
    { label: "ERCOT/희석/장기전력", value: "Yellow-Red" }
  ],
  risks: [
    {
      title: "Microsoft 계약/수익 실현",
      status: "Yellow",
      score: 65,
      tone: "yellow",
      why:
        "9.7B 계약은 확인. 실제 매출 전환은 tranche delivery, acceptance, cure, termination/refund 조항이 관문.",
      next: "Delivery Notice, rejection/cure, delay credit, GPU Service termination 단서를 추적한다."
    },
    {
      title: "Childress H1-H4 공사",
      status: "Yellow-Green",
      score: 45,
      tone: "green",
      why:
        "공식 LinkedIn 기준 H1/H2 진척, H3/H4 civil 진행, 1,200명 site team 신호. 독립 위성 검증은 아직 필요.",
      next: "H1-H4 roofline, substation, cooling yard, UPS/generator, 내부 MEP를 사진과 위성으로 비교한다."
    },
    {
      title: "Cluster integration",
      status: "Yellow",
      score: 70,
      tone: "yellow",
      why:
        "Tranche 1/2 단일 cluster 병합 전 Tranche 3/4 납품이 막히는 구조. 숨은 핵심 리스크.",
      next: "HPL-MxP, HPCG, InfiniBand topology, NCCL validation 관련 단서를 찾는다."
    },
    {
      title: "GPU 조달/금융",
      status: "Yellow-Green",
      score: 50,
      tone: "green",
      why:
        "Dell 계약과 3.6B GPU financing은 긍정. definitive docs, shipment, install 완료 여부는 추적 필요.",
      next: "Dell purchase agreement exhibit과 tranche별 shipment/install 신호를 확인한다."
    },
    {
      title: "ATM 희석",
      status: "Yellow-Red",
      score: 78,
      tone: "red",
      why:
        "60억 달러 ATM은 실행 자금에는 도움. 주주 상방에는 발행 속도와 평균 매각가가 부담.",
      next: "추가 발행 주식 수, 평균 매각가, CAPEX 대비 희석 효율을 업데이트한다."
    },
    {
      title: "Sweetwater 1 전력",
      status: "Yellow",
      score: 68,
      tone: "red",
      why:
        "공식 페이지는 2026 substation energization과 under construction 상태. 2026년 4월 완료 공시는 아직 못 찾음.",
      next: "회사 공지, 전력사/카운티 기록, 위성사진에서 energization 증거를 확인한다."
    },
    {
      title: "ERCOT/규제",
      status: "Yellow-Red",
      score: 76,
      tone: "red",
      why:
        "대형부하 queue, SB6, batch study, curtailment, load ramp 조건이 Sweetwater/Oklahoma 상방을 깎을 수 있음.",
      next: "Childress/Sweetwater large load interconnection과 curtailment/load ramp 조건을 본다."
    },
    {
      title: "채용/운영인력",
      status: "Yellow-Green",
      score: 48,
      tone: "cyan",
      why:
        "Liquid cooling, QA/QC, ops, HPC maintenance 채용 신호는 긍정. 공식 원문과 마감 속도 추적 필요.",
      next: "공식 careers와 공개 job board에서 직무 수, 마감 속도, 직무 전환을 주간 추적한다."
    }
  ],
  watchlist: [
    "Sweetwater 1 2026년 4월 energization 완료 여부",
    "Microsoft tranche delivery notice와 acceptance/rejection 단서",
    "Childress H1-H4 원본 X/LinkedIn 사진과 위성사진 매칭",
    "Dell purchase agreement exhibit의 delivery/payment/default 조항",
    "ATM 추가 발행 속도와 평균 매각가"
  ],
  sources: [
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
      label: "IREN Sweetwater official page",
      url: "https://iren.com/data-centers/sweetwater"
    },
    {
      label: "IREN Childress official page",
      url: "https://iren.com/data-centers/childress"
    },
    {
      label: "IREN official LinkedIn Childress progress",
      url: "https://www.linkedin.com/posts/iren_the-pace-of-progress-at-childress-is-accelerating-activity-7407775786390364161-uG6y"
    },
    {
      label: "IREN official LinkedIn Microsoft deployment",
      url: "https://www.linkedin.com/posts/iren_ai-is-driving-unprecedented-demand-for-compute-activity-7417728810684428289-rX76"
    }
  ]
};
