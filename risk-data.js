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
