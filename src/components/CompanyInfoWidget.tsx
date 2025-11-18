import type { Company } from "../types/company";

interface CompanyInfoWidgetProps {
  title: string;
  companies: Company[];
  selectedTicker: string;
  onTickerChange: (ticker: string) => void;
}

export function CompanyInfoWidget({
  title,
  companies,
  selectedTicker,
  onTickerChange,
}: CompanyInfoWidgetProps) {
  const company = companies.find((c) => c.ticker === selectedTicker);

  return (
    <div className="flex h-full flex-col bg-slate-900/80 text-slate-100">
      <div className="grid gap-2 pt-2 md:grid-cols-2 items-center border-b border-slate-700 px-3 py-2">
        <h2 className="text-sm font-semibold md:text-base">{title}</h2>

        <select
          className="rounded-md w-full border border-slate-600 bg-slate-900 px-3 py-1 text-xs md:text-sm"
          value={selectedTicker}
          onChange={(e) => onTickerChange(e.target.value)}
        >
          {companies.map((c) => (
            <option key={c.id} value={c.ticker}>
              {c.ticker} — {c.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1 overflow-auto px-4 py-3 text-xs md:text-sm">
        {company ? (
          <div className="space-y-2">
            <div>
              <div>
                <span className="font-semibold">ticker</span> {company.ticker}
              </div>
              <div>
                <span className="font-semibold">Name:</span> {company.name}
              </div>
              <div>
                <span className="font-semibold">Legal name:</span>{" "}
                {company.legal_name}
              </div>
            </div>
            <div>
              <span className="font-semibold">Short description:</span>{" "}
              {company.short_description}
            </div>
            <div>
              <span className="font-semibold">Long description:</span>{" "}
              {company.long_description}
            </div>
            <div className="grid gap-2 pt-2 md:text-sm md:grid-cols-2">
              <div>
                <span className="font-semibold">Web:</span>{" "}
                <a
                  href={`https://${company.company_url}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  {company.company_url}
                </a>
              </div>
              <div>
                <span className="font-semibold">Business address:</span>{" "}
                {company.business_address}
              </div>
              <div>
                <span className="font-semibold">Business phone:</span>{" "}
                {company.business_phone_no}
              </div>
              <div>
                <span className="font-semibold">Entity legal form:</span>{" "}
                {company.entity_legal_form}
              </div>
              <div>
                <span className="font-semibold">Latest filing date:</span>{" "}
                {company.latest_filing_date}
              </div>
              <div>
                <span className="font-semibold">Inc country:</span>{" "}
                {company.inc_country}
              </div>
              <div>
                <span className="font-semibold">Employees:</span>{" "}
                {company.employees}
              </div>
              <div>
                <span className="font-semibold">Sector:</span> {company.sector}
              </div>
              <div>
                <span className="font-semibold">Industry category:</span>{" "}
                {company.industry_category}
              </div>
              <div>
                <span className="font-semibold">Industry group:</span>{" "}
                {company.industry_group}
              </div>
              <div>
                <span className="font-semibold">First stock price date:</span>{" "}
                {company.first_stock_price_date}
              </div>
              <div>
                <span className="font-semibold">Last stock price date:</span>{" "}
                {company.last_stock_price_date}
              </div>
              <div>
                <span className="font-semibold">Thea enabled:</span>{" "}
                {String(company.thea_enabled || false)}
              </div>
              <div>
                <span className="font-semibold">Legacy sector:</span>{" "}
                {company.legacy_sector}
              </div>
              <div>
                <span className="font-semibold">Legacy industry category:</span>{" "}
                {company.legacy_industry_category}
              </div>
              <div>
                <span className="font-semibold">Legacy industry group:</span>{" "}
                {company.legacy_industry_group}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-slate-400">No company selected</div>
        )}
      </div>
    </div>
  );
}
