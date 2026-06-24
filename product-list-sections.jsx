const useReveal = (delay = 0) => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setShown(true), delay);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    io.observe(ref.current);
    return () => io.disconnect();
  }, [delay]);

  return [ref, shown];
};

const Reveal = ({
  children,
  delay = 0,
  y = 18,
  as: As = "div",
  style,
  className = "",
}) => {
  const [ref, shown] = useReveal(delay);

  return (
    <As
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
        transition:
          "opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1)",
        ...(style || {}),
      }}
    >
      {children}
    </As>
  );
};
const ProductData = () => {
  const data = [
    {
      text: "Water Analyzers",
      href: "../../products/analyzers.html",
      children: [
        {
          text: "Optics-1000 Multi Parameter",
          href: "../../products/analyzers/optics-1000.html",
          image: "assets/images/prod_1.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Analyzer-Optics1000-MultiParameter.pdf",
        },
        {
          text: "Optics-1000 Alkalinity",
          href: "../../products/analyzers/optics-1000-alkalinity.html",
          image: "assets/images/prod_1.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Optics-1000-Alkalinity.pdf",
        },
        {
          text: "Optics-1000 Boron (Lr)",
          href: "../../products/analyzers/optics-1000-boron-lr.html",
          image: "assets/images/prod_1.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Optics-1000-Boron-(Lr).pdf",
        },
        {
          text: "Optics-1000 Boron (Hr)",
          href: "../../products/analyzers/optics-1000-boron-hr.html",
          image: "assets/images/prod_1.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Optics-1000-Boron-(Hr).pdf",
        },
        {
          text: "Optics-1000 Chloride (Cl-)",
          href: "../../products/analyzers/optics-1000-chloride.html",
          image: "assets/images/prod_1.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Optics-1000-Chloride-(Cl-).pdf",
        },
        {
          text: "Optics-1000 Chromium VI (Cr)",
          href: "../../products/analyzers/optics-1000-chromium.html",
          image: "assets/images/prod_1.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Optics-1000-Chromium-VI-(Cr).pdf",
        },
        {
          text: "Optics-1000 Cyanide (CN-)",
          href: "../../products/analyzers/optics-1000-cyanide.html",
          image: "assets/images/prod_1.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Optics-1000-Cyanide.pdf",
        },
        {
          text: "Optics-1000 Hydrazine (N2H4)",
          href: "../../products/analyzers/optics-1000-hydrazine.html",
          image: "assets/images/prod_1.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Optics-1000-Hydrazine.pdf",
        },
        {
          text: "Optics-1000 Iron (Lr)",
          href: "../../products/analyzers/optics-1000-iron-lr.html",
          image: "assets/images/prod_1.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Optics-1000-Iron-(Lr).pdf",
        },
        {
          text: "Optics-1000 Nickel (Ni)",
          href: "../../products/analyzers/optics-1000-nickel.html",
          image: "assets/images/prod_1.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Optics-1000-Nickel.pdf",
        },
        {
          text: "Optics-1000 Phenol",
          href: "../../products/analyzers/optics-1000-phenol.html",
          image: "assets/images/prod_1.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Optics-1000-Phenol.pdf",
        },
        {
          text: "Optics-1000 Phosphate (Hr)",
          href: "../../products/analyzers/optics-1000-phosphate-hr.html",
          image: "assets/images/prod_1.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Optics-1000-Phosphate-(Hr).pdf",
        },
        {
          text: "Optics-1000 Phosphate (Lr)",
          href: "../../products/analyzers/optics-1000-phosphate-lr.html",
          image: "assets/images/prod_1.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Optics-1000-Phosphate-(Lr).pdf",
        },
        {
          text: "Optics-1000 Silica (Hr)",
          href: "../../products/analyzers/optics-1000-silica-hr.html",
          image: "assets/images/prod_1.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Optics-1000-Silica-(Hr).pdf",
        },
        {
          text: "Optics-1000 Silica (Lr)",
          href: "../../products/analyzers/optics-1000-silica-lr.html",
          image: "assets/images/prod_1.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Optics-1000-Silica-(Lr).pdf",
        },
      ],
    },
    {
      text: "High Temperature Analyzer",
      href: "../../products/high-temperature-analyzer.html",
      children: [
        {
          text: "Egetra-COD-1000",
          href: "../../products/high-temperature-analyzer/egetra-cod-1000.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/egetra-cod-1000.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Egetra-COD-1000.pdf",
        },
        {
          text: "Egetra-TOC-1000",
          href: "../../products/high-temperature-analyzer/egetra-toc-1000.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/egetra-toc-1000.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Egetra-TOC-1000.pdf",
        },
      ],
    },
    {
      text: "Controllers",
      href: "../../products/controllers.html",
      children: [
        {
          text: "Viz Pro Solo",
          href: "../../products/controllers/viz-solo.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/img001.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/pro-solo-transmitter.pdf",
        },
        {
          text: "Viz Pro Duo",
          href: "../../products/controllers/viz-duo.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/img001A.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/pro-duo-transmitter.pdf",
        },
        {
          text: "Viz Pro Multi",
          href: "../../products/controllers/viz-multi.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/img002.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/pro-multi-transmitter.pdf",
        },
        {
          text: "Viz Eco Solo",
          href: "../../products/controllers/viz-eco-solo.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/viz-eco-solo.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/VizEcoSolo.pdf",
        },
        {
          text: "Viz Eco Duo",
          href: "../../products/controllers/viz-eco-duo.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/viz-eco-duo.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/VizEcoDuo.pdf",
        },
        {
          text: "Viz Eco Multi",
          href: "../../products/controllers/viz-eco-multi.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/viz-eco-multi.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/VizEcoMulti.pdf",
        },
      ],
    },
    {
      text: "Sensors",
      href: "../../products/sensors.html",
      children: [
        {
          text: "VizSens-PH(Analog)",
          href: "../../products/sensors/vizsens-ph-analog.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/img003.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Vizsens-pH-Analog.pdf",
        },
        {
          text: "VizSens-ORP(Analog)",
          href: "../../products/sensors/vizsens-orp-analog.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/img003.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Vizsens-orp-Analog.pdf",
        },
        {
          text: "VizSens-TDS(Analog)",
          href: "../../products/sensors/vizsens-tds-analog.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/img003.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Vizsens-TDS-Analog.pdf",
        },
        {
          text: "VizSens-EC(Analog)",
          href: "../../products/sensors/vizsens-ec-analog.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/img003.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Vizsens-EC-Analog.pdf",
        },
        {
          text: "VizSens-PH(Digital)",
          href: "../../products/sensors/vizsens-ph-digital.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/imgpH.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Vizsens-pH-Digital.pdf",
        },
        {
          text: "VizSens-EC(Digital)",
          href: "../../products/sensors/vizsens-ec-digital.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/imgpH.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Vizsens-EC-Digital.pdf",
        },
        {
          text: "VizSens-ODO",
          href: "../../products/sensors/vizsens-odo.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/img009.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Vizsens-ODO-Sensor.pdf",
        },
        {
          text: "VizSens-RCL",
          href: "../../products/sensors/vizsens-rcl.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/img010.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Vizsens-RCL.pdf",
        },
        {
          text: "VizSens-UV",
          href: "../../products/sensors/vizsens-uvcod.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/img011.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Vizsens-UVCOD.pdf",
        },
        {
          text: "VizSens-TSS",
          href: "../../products/sensors/vizsens-ss.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/img014.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Vizsens-SS.pdf",
        },
        {
          text: "VizSens-Turb",
          href: "../../products/sensors/vizsens-turb.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/img014.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Vizsens-turb.pdf",
        },
        {
          text: "VizSens-TurbLo",
          href: "../../products/sensors/vizsens-turb-lo.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/img015.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Vizsens-turb-Lo.pdf",
        },
        {
          text: "VizSens-CPHL",
          href: "../../products/sensors/vizsens-cphl.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/img016.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Vizsens-CPHL.pdf",
        },
        {
          text: "Vizsens-BGA",
          href: "../../products/sensors/vizsens-bga.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/img016.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Vizsens-BGA.pdf",
        },
        {
          text: "VizSens-OIW",
          href: "../../products/sensors/vizsens-oiw.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/img018.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Vizsens-OIW.pdf",
        },
        {
          text: "VizSens-NH4N",
          href: "../../products/sensors/vizsens-nh4n.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/img019.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Vizsens-NH4N.pdf",
        },
      ],
    },
    {
      text: "Gas Analyzer",
      href: "../../products/gas-analyzer.html",
      children: [
        {
          text: "Gaz CEMS",
          href: "../../products/gas-analyzer/gaz-cems.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/gaz-cems-full-analyzer.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Gaz-CEMS.pdf",
        },
        {
          text: "Gaz SPM",
          href: "../../products/gas-analyzer/gaz-spm.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/gaz-spm.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Gaz-SPM.pdf",
        },
        {
          text: "Gaz Ozone",
          href: "../../products/gas-analyzer/gaz-aqms-o3.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/gaz-ozone.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Gaz-Ozone-Analyzer.pdf",
        },
        {
          text: "Gaz PGA",
          href: "../../products/gas-analyzer/gaz-pga-o3.html",
          image:
            "https://www.advanceanalytik.com/products/productImages/gaz-pga-o3.png",
          datasheet:
            "https://www.advanceanalytik.com/products/productsDataSheets/Gaz-PGA.pdf",
        },
      ],
    },
  ];
  return data;
};
const ProductStrip = () => {
  const TurnalIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#666666"
      >
        <path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z" />
      </svg>
    );
  };

  const SortIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#666666"
      >
        <path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
    );
  };

  const [isSortOpen, setSortOpen] = React.useState(false);
  const [sortSelected, setsortSelected] = React.useState("");
  return (
    <div className="w-full border border-(--line) border-r-0 border-l-0 py-3 grid md:grid-cols-3 grid-cols-1">
      <div className="flex flex-row gap-2 px-8">
        <TurnalIcon />

        <div className="font-medium text-black/60">Show Filters (1)</div>
      </div>
      <div>
        <div className="text-center font-medium text-black/60">
          33 Of 115 Products
        </div>
      </div>
      {/* isSortOpen, setSortOpen */}
      <div className=" px-8 relative inline-flex items-center justify-end">
        <div
          className="flex flex-row gap-2 items-center justify-end cursor-pointer :hover:bg-black"
          onClick={() => setSortOpen(!isSortOpen)}
        >
          <div className="font-medium text-black/60">Sort By</div>
          <SortIcon />
        </div>
        {isSortOpen ? (
          <div className="absolute top-full right-2 w-[180px] mt-[12px]">
            <div className=" rounded-[5px] bg-white w-full border border-(--line-2) py-1">
              {["A to Z", "Z to A"].map((i, index) => {
                return (
                  <Reveal key={i} delay={120 * index}>
                    <button
                      className={`w-full flex flex-row gap-2 px-2 py-1 cursor-pointer ${i === sortSelected ? "bg-(--paper-2)" : null}`}
                      data-sort={i}
                      // sortSelected, setsortSelected
                      onClick={() => setsortSelected(i)}
                    >
                      <div
                        style={{
                          width: 24,
                          height: 25,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid var(--line-2)",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="18px"
                          viewBox="0 -960 960 960"
                          width="18px"
                          fill={`${i === sortSelected ? "#0d518c" : "var(--paper-2)"}`}
                        >
                          <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                        </svg>
                      </div>
                      <div className="font-medium text-sm text-black/60">
                        {i}
                      </div>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
const ProductListFilter = () => {
  const DownIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="text-black/70"
      >
        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
      </svg>
    );
  };

  const data = ProductData();

  React.useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/menu");
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []);
  const [openCategory, setOpenCategory] = React.useState(data[0].text);
  const handleCatDropdown = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className=" py-2">
      <div className="w-full px-8">
        {data.map((item, i) => {
          return (
            <div key={i} className="border-b border-(--line)  py-3">
              <div
                className={`${openCategory === item.text ? "text-black/90" : "text-black/70"} cursor-pointer text-sm font-medium uppercase flex flex-row items-center justify-between`}
                onClick={() => handleCatDropdown(item.text)}
              >
                {item.text}
                {openCategory === item.text ? (
                  <div className="rotate-180 transition duration-700 ease-in-out">
                    <DownIcon />
                  </div>
                ) : (
                  <div>
                    <DownIcon />
                  </div>
                )}
              </div>
              {openCategory === item.text && (
                <div className="w-full mt-2 max-h-[200px] overflow-hidden overflow-y-auto">
                  {item.children.map((chi, l) => {
                    return (
                      <Reveal key={l} delay={120 * l}>
                        <label
                          htmlFor={String(chi.text)
                            .toLocaleLowerCase()
                            .replaceAll(" ", "_")}
                          type="checkbox"
                          value={chi.text}
                          className="cursor-pointer w-full flex flex-row gap-2 items-center jsutify py-1 flex flex-row gap-2 items-center"
                        >
                          <div className="w-[24px] h-[25px]  cursor-pointer bg-(--paper) border border-(--line-2) flex flex-row items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="18px"
                              viewBox="0 -960 960 960"
                              width="18px"
                              fill="var(--line)"
                            >
                              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                            </svg>
                          </div>
                          <div className="text-sm text-gray">{chi.text}</div>
                          <input
                            style={{
                              display: "none",
                              visibility: "hidden",
                              pointerEvents: "none",
                            }}
                            name={String(chi.text)
                              .toLocaleLowerCase()
                              .replaceAll(" ", "_")}
                            type="checkbox"
                            value={chi.text}
                            id={String(chi.text)
                              .toLocaleLowerCase()
                              .replaceAll(" ", "_")}
                            type="checkbox"
                            value={chi.text}
                          />
                        </label>
                      </Reveal>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ProductListing = () => {
  const data = ProductData();
  return (
    <div className="grid grid-cols-4 gap-2">
      {data.map((item, i) =>
        item.children.map((list, l) => (
          <div
            key={l}
            className="max-w-full col-span-1 bg-white border border-(--line-2) rounded-[10px] overflow-hidden"
          >
            <div className="w-full">
              <div className="img-place w-full min-h-[220px]  bg-white flex flex-row items-center justify-center">
                <img
                  src={list.image}
                  className="w-auto max-h-[180px] mix-blend-darken"
                />
              </div>
              <div className="p-3">
                <div className="font-bold text-base">{item.text}</div>
                <div className="bg-(--paper-2) flex flex-wrap gap-1 rounded border border-(--line-2) p-2">
                  {[
                    "Alkalinity",
                    "Boron",
                    "Chloride",
                    "Chromium VI",
                    "Total Chromium",
                    "Cyanide",
                    "Hydrazine",
                    "Iron",
                    "Nickel",
                    "Phenol",
                    "Phosphate",
                    "Silica",
                    "Total Hardness",
                    "Zinc",
                  ].map((p, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-[12px] text-(--ink-3) border border-(--line-2) bg-(--card) rounded-full"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                {/* <div className="font-normal text-sm text-(--muted)">
                  {list.text}
                </div> */}
              </div>
            </div>
          </div>
        )),
      )}
    </div>
  );
};
Object.assign(window, {
  ProductStrip,
  ProductListFilter,
  ProductListing,
  Reveal,
});
