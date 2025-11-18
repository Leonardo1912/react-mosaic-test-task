import { useEffect, useState } from "react";
import { Mosaic, type MosaicNode, MosaicWindow } from "react-mosaic-component";
import "react-mosaic-component/react-mosaic-component.css";

import { fetchCompanies } from "./api/companies";
import type { Company } from "./types/company";
import { CompanyInfoWidget } from "./components/CompanyInfoWidget";

type WidgetId = "widget-1" | "widget-2" | "widget-3";

const initialLayout: MosaicNode<WidgetId> = {
  direction: "row",
  first: "widget-1",
  second: {
    direction: "column",
    first: "widget-2",
    second: "widget-3",
  },
  splitPercentage: 40,
};

const defaultTickers: Record<WidgetId, string> = {
  "widget-1": "AAPL",
  "widget-2": "MSFT",
  "widget-3": "NVDA",
};

function App() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTickers, setSelectedTickers] =
    useState<Record<WidgetId, string>>(defaultTickers);
  const [layout, setLayout] = useState<MosaicNode<WidgetId> | null>(
    initialLayout,
  );

  useEffect(() => {
    let isMounted = true;

    fetchCompanies()
      .then((data) => {
        if (!isMounted) return;
        setCompanies(data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(err.message || "Failed to load companies");
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleTickerChange = (widgetId: WidgetId, ticker: string) => {
    setSelectedTickers((prev) => ({
      ...prev,
      [widgetId]: ticker,
    }));
  };

  return (
    <div className="h-full w-full bg-slate-950 text-slate-100">
      <div className="flex h-full flex-col gap-4 p-4">
        <header className="flex flex-wrap items-center justify-between gap-2">
          <h1 className="text-xl font-semibold md:text-2xl">
            Company Information Dashboard
          </h1>

          {isLoading && (
            <span className="text-xs text-slate-400">Loading companies...</span>
          )}
          {error && <span className="text-xs text-red-400">{error}</span>}
        </header>

        <main className="flex-1 min-h-0 rounded-lg border border-slate-700 bg-slate-900/70">
          {layout && companies.length > 0 ? (
            <Mosaic<WidgetId>
              value={layout}
              onChange={(newLayout) => setLayout(newLayout)}
              renderTile={(id, path) => (
                <MosaicWindow<WidgetId>
                  path={path}
                  title={`Company Widget ${id.slice(-1)}`}
                >
                  <CompanyInfoWidget
                    title={`Company Widget ${id.slice(-1)}`}
                    companies={companies}
                    selectedTicker={selectedTickers[id]}
                    onTickerChange={(ticker) => handleTickerChange(id, ticker)}
                  />
                </MosaicWindow>
              )}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-slate-400 text-sm">
              {isLoading ? "Loading companies..." : "No data available"}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
