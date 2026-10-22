export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName:
    | "BookOpenCheck"
    | "FileCheck"
    | "Users"
    | "LineChart"
    | "Receipt"
    | "TrendingUp"
    | "CreditCard"
    | "ShieldCheck";
  deliverables: string[];
  keyHighlights: string[];
  scopeNote: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "accounting-and-bookkeeping",
    slug: "accounting-and-bookkeeping",
    title: "Accounting and Bookkeeping",
    shortDescription:
      "Maintain clear, organized financial records with structured bookkeeping and regular reconciliations.",
    fullDescription:
      "Orderly financial records are the foundation of every stable enterprise. We help growing businesses set up robust bookkeeping routines, record daily financial transactions accurately, reconcile banking and payment channels, and produce clear periodic financial summaries.",
    iconName: "BookOpenCheck",
    deliverables: [
      "Recording and categorising business transactions with proper chart-of-accounts mapping.",
      "General ledger maintenance and period-end close routines.",
      "Bank and payment platform reconciliation, including merchant accounts, tills, and business accounts.",
      "Accounts payable and receivable tracking to monitor cash flow.",
      "Monthly bookkeeping and catch-up bookkeeping for overdue or disorganized periods.",
      "Preparation of periodic trial balances and financial summaries.",
    ],
    keyHighlights: [
      "Comprehensive bank and payment platform reconciliations",
      "Catch-up support for overdue periods",
      "Clean transaction categorisation for reporting",
    ],
    scopeNote:
      "The exact scope and frequency depend on your transaction volumes, record quality, and the agreed engagement terms.",
  },
  {
    id: "tax-compliance-and-support",
    slug: "tax-compliance-and-support",
    title: "Tax Compliance and Support",
    shortDescription:
      "Get organized support for relevant tax filing processes, records, and compliance responsibilities.",
    fullDescription:
      "Managing statutory obligations requires prompt recordkeeping and systematic preparation. We provide structured support to help businesses organize their tax records, calculate applicable obligations, and prepare documentation in line with prevailing revenue guidelines.",
    iconName: "FileCheck",
    deliverables: [
      "Value Added Tax (VAT) / Sales tax computations and return preparation support.",
      "Pay As You Earn (PAYE) return calculations and employee deduction summaries.",
      "Withholding Tax calculations and certificate reconciliation.",
      "Turnover Tax (TOT) and small enterprise tax support where applicable.",
      "Rental income tax computation and filing documentation for property owners.",
      "Individual and corporate income tax preparation support.",
      "Tax records organization, ledger reconciliation, and routine compliance reviews.",
    ],
    keyHighlights: [
      "Support with VAT, PAYE, and Withholding Tax schedules",
      "Structured turnover tax and rental income support",
      "Thorough reconciliation of tax ledgers against source records",
    ],
    scopeNote:
      "Applicable obligations depend on the client's business circumstances and applicable regulatory frameworks. Filing support is defined within the agreed engagement scope. LedgerBridge provides professional accounting and compliance support; statutory tax obligations remain the legal responsibility of the taxpayer.",
  },
  {
    id: "payroll-management",
    slug: "payroll-management",
    title: "Payroll Management",
    shortDescription:
      "Help manage payroll calculations, employee records, payroll reporting, and related statutory processes.",
    fullDescription:
      "Timely, accurate payroll protects employee trust and keeps your enterprise compliant with statutory payroll requirements. We handle payroll computations, payslip generation, and statutory deduction schedules so you can focus on leading your team.",
    iconName: "Users",
    deliverables: [
      "Gross-to-net payroll calculations for permanent, contract, and casual personnel.",
      "Confidential payslip preparation and digital distribution.",
      "Comprehensive payroll summaries, department costing, and payroll reconciliations.",
      "PAYE calculation and return documentation support.",
      "Support with applicable statutory processes: social security funds, national health authorities, and statutory levies.",
      "Employee payroll records organization and leave/deduction tracking.",
    ],
    keyHighlights: [
      "Accurate statutory schedules for PAYE, social security, and health contributions",
      "Confidential payslips and employee documentation",
      "Clear payroll reconciliation reports for management",
    ],
    scopeNote:
      "Statutory deduction rules and rates are aligned with current official regulatory standards. Official rate changes and legal updates are referenced directly from official sources.",
  },
  {
    id: "financial-reporting-and-management-accounts",
    slug: "financial-reporting-and-management-accounts",
    title: "Financial Reporting and Management Accounts",
    shortDescription:
      "Understand business performance through structured financial reports and management information.",
    fullDescription:
      "Financial figures should do more than sit in ledgers; they should reveal how your business is performing. We prepare periodic management accounts that highlight profitability, cost drivers, cash position, and operational performance trends.",
    iconName: "LineChart",
    deliverables: [
      "Profit and Loss statements (Statement of Comprehensive Income).",
      "Balance sheets (Statement of Financial Position) with asset and liability reconciliations.",
      "Cash-flow statements categorised by operating, investing, and financing activities.",
      "Monthly, quarterly, or periodic management accounts packs.",
      "Budget-versus-actual variance analysis highlighting performance deviations.",
      "Revenue stream, cost structure, and gross margin analysis.",
      "Executive summaries explaining key financial movements in plain, practical language.",
    ],
    keyHighlights: [
      "Clear monthly or quarterly management accounts packs",
      "Actionable budget variance and margin insights",
      "Cash-flow visibility to support operational decisions",
    ],
    scopeNote:
      "Management accounts are prepared for internal management decision-making and operational oversight. These reports are strictly distinguished from statutory audit reports or independent assurance engagements.",
  },
  {
    id: "etims-and-accounting-systems-support",
    slug: "etims-and-accounting-systems-support",
    title: "Digital Invoicing and Accounting Systems Support",
    shortDescription:
      "Improve the organization of electronic invoicing and accounting workflows.",
    fullDescription:
      "The modernization of digital tax invoicing and electronic accounting makes system alignment essential. We assist businesses in structuring their invoicing workflows, reconciling sales records with electronic registers, and configuring reliable accounting software.",
    iconName: "Receipt",
    deliverables: [
      "Digital invoicing onboarding workflow guidance and operational readiness review.",
      "Electronic invoicing workflow alignment and branch/cashier invoice procedures.",
      "Reconciliation between internal sales records, POS systems, and electronic invoice registers.",
      "Setup assistance for modern cloud accounting software (e.g. QuickBooks, Zoho Books, Xero).",
      "Chart-of-accounts structuring tailored to your industry and reporting needs.",
      "Practical staff guidance on day-to-day invoicing and bookkeeping routines.",
    ],
    keyHighlights: [
      "Step-by-step electronic invoicing workflow assistance for modern enterprises",
      "Cloud accounting setup with customized chart-of-accounts",
      "Reconciliation of sales records against electronic invoicing data",
    ],
    scopeNote:
      "LedgerBridge is an independent professional services firm. We are not affiliated with, nor do we claim official endorsement by, government revenue authorities or specific software vendors.",
  },
  {
    id: "business-finance-and-advisory",
    slug: "business-finance-and-advisory",
    title: "Business Finance and Advisory",
    shortDescription:
      "Use financial information to make more informed operational and growth decisions.",
    fullDescription:
      "Every major business decision has financial consequences. We work alongside business owners and leadership teams to evaluate capital requirements, manage working capital, optimize unit economics, and build practical financial forecasts.",
    iconName: "TrendingUp",
    deliverables: [
      "Annual budgeting and dynamic rolling financial forecasts.",
      "Cash-flow planning and liquidity runway monitoring.",
      "Break-even analysis for new products, services, or branch locations.",
      "Costing methodology reviews and product/service margin analysis.",
      "Basic financial performance dashboard structuring.",
      "Scenario and sensitivity analysis for planned capital investments.",
      "Practical business performance reviews and financial health check-ups.",
    ],
    keyHighlights: [
      "Practical cash-flow forecasting and liquidity management",
      "Product and service margin reviews to protect profitability",
      "Sound financial modelling for commercial expansions",
    ],
    scopeNote:
      "Advisory services provide analytical insight and objective recommendations based on historical information and client assumptions. We do not guarantee specific commercial returns, cost reductions, or investment outcomes.",
  },
  {
    id: "accounts-payable-and-receivable-management",
    slug: "accounts-payable-and-receivable-management",
    title: "Accounts Payable and Receivable Management",
    shortDescription:
      "Improve visibility over supplier obligations, customer balances, and collections.",
    fullDescription:
      "Healthy working capital requires balanced attention to both what you owe and what is owed to you. We help businesses organize payables schedules, track debtor aging, and reconcile customer statements to preserve cash-flow stability.",
    iconName: "CreditCard",
    deliverables: [
      "Supplier invoice verification, recording, and payment schedule planning.",
      "Customer invoicing tracking and accounts receivable ledger maintenance.",
      "Detailed aged receivables and payables reporting.",
      "Customer statement preparation and account reconciliation.",
      "Dispute documentation and receipt allocation tracking.",
      "Cash collection timeline analysis and credit term reviews.",
    ],
    keyHighlights: [
      "Clear aged receivables and payables visibility",
      "Streamlined supplier payment schedules",
      "Accurate customer statement reconciliations",
    ],
    scopeNote:
      "We provide recordkeeping, tracking, and schedule organization support. Commercial payment negotiations and collection decisions remain at the client's sole discretion.",
  },
  {
    id: "audit-preparation-and-internal-controls",
    slug: "audit-preparation-and-internal-controls",
    title: "Audit Preparation and Internal Controls",
    shortDescription:
      "Help organize accounting records and improve financial processes in preparation for reviews and audits.",
    fullDescription:
      "Approaching a financial review or annual audit is smoother and significantly less disruptive when your accounting records are organized in advance. We assist businesses in preparing lead schedules, reconciling balances, and strengthening internal control safeguards.",
    iconName: "ShieldCheck",
    deliverables: [
      "Preparation of audit-ready lead schedules, asset registers, and supporting files.",
      "Reconciliation of balance sheet accounts prior to external auditor handoff.",
      "Systematic collation and indexing of physical and digital supporting documents.",
      "Internal accounting process reviews to identify recordkeeping bottlenecks.",
      "Identification of internal control gaps, segregation-of-duties concerns, and risk points.",
      "Facilitating information requests from an appointed external independent auditor.",
    ],
    keyHighlights: [
      "Structured audit-ready supporting schedules and file packages",
      "Pre-audit account reconciliations to minimise audit queries",
      "Internal accounting process and control gap reviews",
    ],
    scopeNote:
      "Audit preparation and internal control assistance are advisory and bookkeeping services designed to organize client records. These services are strictly distinct from independent statutory external audit and assurance services, which require specific statutory licensing and independent appointment.",
  },
];
