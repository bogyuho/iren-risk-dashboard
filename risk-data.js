window.IREN_RISK_DATA = {
  updatedAt: "2026-04-13 KST",
  title: "IREN 실행리스크",
  verdict: "계약·자금은 확인, 상업가동은 승인 전",
  thesis:
    "Microsoft 계약과 Dell 조달·금융은 확인됐다. 그러나 매출 전환의 문은 Delivery Notice, Supplier validation, Microsoft acceptance이고, 2026-04-13 기준 공개자료상 이 문을 통과했다는 SEC 확인은 없다.",
  executionTree: {
    progress: 51,
    label: "실행 증거 성숙도",
    stage: "공사 증거 있음 / MS 승인 전",
    blocker: "Microsoft acceptance",
    nextEvent: "Delivery Notice",
    interpretation:
      "뿌리와 줄기인 계약·장비·자금·부지는 확인권에 들어왔다. 잎과 열매인 commissioning, Tranche 1/2 single-cluster merge, Microsoft acceptance, Sweetwater energization은 아직 공개 확인 전이다.",
    checkpoints: [
      { label: "계약/자금", status: "확인됨", tone: "green" },
      { label: "현장공사", status: "진행 증거", tone: "cyan" },
      { label: "시운전", status: "공개확인 전", tone: "yellow" },
      { label: "MS 승인", status: "미확인", tone: "red" }
    ]
  },
  heroImage: "https://iren.com/api/media/file/iren-childress-43.avif",
  secondaryImage: "https://iren.com/api/media/file/sweetwater.webp",
  summaryMetrics: [
    { label: "Microsoft 계약", value: "계약 확인" },
    { label: "Childress 공사", value: "공사 증거 있음" },
    { label: "상업 가동", value: "MS 승인 전" }
  ],
  risks: [
    {
      title: "Microsoft 계약/수익 실현",
      status: "승인 전",
      score: 72,
      tone: "red",
      why:
        "TCV 9.7B 달러와 선급금 구조는 확인됐다. 다만 월별 과금은 각 GPU Service가 Minimum GPU Quantity를 넘기고 Microsoft Acceptance를 받아야 시작된다.",
      next: "Delivery Notice, Microsoft acceptance/rejection, cure notice, delay credit, GPU Service termination 단서를 찾는다."
    },
    {
      title: "Childress H1-H4 공사",
      status: "공사 증거 있음",
      score: 46,
      tone: "cyan",
      why:
        "공식 발표와 SNS상 H1-H4 진척 신호는 있다. 다만 독립 위성사진, 검사기록, acceptance 증거까지 닫힌 상태는 아니다.",
      next: "원본 사진 날짜, 위성사진, load banking, commissioning sign-off를 같은 타임라인에 맞춘다."
    },
    {
      title: "Cluster integration",
      status: "병합 미확인",
      score: 76,
      tone: "red",
      why:
        "SOW상 Tranche 3/4는 Tranche 1/2가 단일 Cluster로 병합된 뒤에만 delivery 가능하다. 이 단계가 막히면 단순 공사 진척만으로 매출 전환을 판단할 수 없다.",
      next: "single Cluster merge, InfiniBand topology, NCCL validation, HPL-MxP, HPCG validation 결과를 추적한다."
    },
    {
      title: "GPU 조달/금융",
      status: "조달계약 확인",
      score: 54,
      tone: "cyan",
      why:
        "Dell H2 2026 조달계약과 GPU financing은 확인됐다. 그러나 Dell 원계약 exhibit, tranche shipment, onsite install 확인은 아직 남아 있다.",
      next: "Q3 FY26 10-Q의 Dell agreement exhibit, shipment/install 단서, 지급조건 충족 여부를 확인한다."
    },
    {
      title: "ATM 희석",
      status: "희석 부담 큼",
      score: 82,
      tone: "red",
      why:
        "2026-03-04 기준 60억 달러 ATM이 열렸고 기존 10억 달러 ATM은 66,707,732주 발행으로 이미 소진됐다. 실행자금에는 도움이지만 주당 상방에는 직접 부담이다.",
      next: "추가 발행 주식수, 평균 매각가, CAPEX 대비 희석 효율, 현금 사용처를 업데이트한다."
    },
    {
      title: "Sweetwater 1 전력",
      status: "완료 공시 없음",
      score: 70,
      tone: "red",
      why:
        "공식 목표는 2026년 4월 substation energization이지만, 2026-04-13 기준 SEC full-text에서 완료 확인은 찾지 못했다.",
      next: "회사 공지, 전력사/카운티 기록, 위성사진에서 substation energization 증거를 확인한다."
    },
    {
      title: "ERCOT/규제",
      status: "대기열 병목",
      score: 78,
      tone: "red",
      why:
        "ERCOT 대형부하 interconnection request가 급증했고 SB6, batch study, curtailment, load ramp 조건이 대형 데이터센터 전력 일정을 흔들 수 있다.",
      next: "Childress/Sweetwater 관련 queue, interconnection milestone, load ramp, curtailment 조건을 본다."
    },
    {
      title: "채용/운영인력",
      status: "운영전환 신호",
      score: 50,
      tone: "cyan",
      why:
        "Liquid cooling, QA/QC, ops, HPC maintenance 채용·SNS 신호는 긍정이다. 다만 채용 완료와 안정 운영은 아직 별도 확인이 필요하다.",
      next: "공식 careers, 직무 마감 속도, commissioning에서 operations로 넘어가는 직무 전환을 주간 추적한다."
    }
  ],
  watchlist: [
    "Microsoft Delivery Notice와 Acceptance/Rejection 발생 여부",
    "Tranche 1/2 single-cluster merge 확인",
    "Sweetwater 1 2026년 4월 substation energization 증거",
    "Dell agreement exhibit의 delivery/payment/default 조항",
    "ATM 추가 발행 속도와 평균 매각가",
    "Childress 원본 사진, 위성사진, load banking, commissioning sign-off 매칭"
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
      label: "IREN official LinkedIn Childress progress",
      url: "https://www.linkedin.com/posts/iren_the-pace-of-progress-at-childress-is-accelerating-activity-7407775786390364161-uG6y"
    },
    {
      label: "IREN official LinkedIn Microsoft deployment",
      url: "https://www.linkedin.com/posts/iren_ai-is-driving-unprecedented-demand-for-compute-activity-7417728810684428289-rX76"
    }
  ]
};
