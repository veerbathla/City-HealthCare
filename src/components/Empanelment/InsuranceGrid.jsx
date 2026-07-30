import React, { useMemo, useState } from "react";
import { ShieldCheck, Search, BadgeCheck } from "lucide-react";
import { insuranceCompanies } from "../../data/empanelment/insuranceCompanies";

const InsuranceGrid = () => {
  const [search, setSearch] = useState("");

  const filteredCompanies = useMemo(() => {
    return insuranceCompanies.filter((company) =>
      company.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <section
      id="insurance-partners"
      className="py-24 bg-gradient-to-b from-white to-sky-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#0096D6]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#0096D6]">
            <ShieldCheck size={16} />
            Insurance Partners
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Insurance Companies
            <span className="text-[#0096D6]">
              {" "}On Our Panel
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We proudly provide cashless hospitalization through
            India's leading General and Health Insurance providers.
          </p>

        </div>

        {/* Counter + Search */}

        <div className="mt-14 flex flex-col lg:flex-row items-center justify-between gap-6">

          <div className="rounded-2xl bg-[#0096D6] px-8 py-5 text-white shadow-lg">

            <p className="text-sm uppercase tracking-widest text-white/80">
              Total Empanelled Companies
            </p>

            <h3 className="mt-2 text-4xl font-bold">
              {filteredCompanies.length}
            </h3>

          </div>

          <div className="relative w-full lg:w-[420px]">

            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search Insurance Company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-14 pr-5 outline-none transition focus:border-[#0096D6] focus:ring-2 focus:ring-[#0096D6]/20"
            />

          </div>

        </div>

        {/* Grid */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {filteredCompanies.map((company, index) => (

            <div
              key={index}
              className="group rounded-3xl border border-sky-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#0096D6] hover:shadow-xl"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0096D6]/10 text-[#0096D6] transition group-hover:bg-[#0096D6] group-hover:text-white">

                  <ShieldCheck size={28} />

                </div>

                <BadgeCheck
                  size={22}
                  className="text-green-500"
                />

              </div>

              <h3 className="mt-6 text-lg font-bold leading-7 text-gray-900">

                {company}

              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">

                Cashless Treatment Available

              </p>

            </div>

          ))}

        </div>

        {/* No Result */}

        {filteredCompanies.length === 0 && (

          <div className="mt-20 text-center">

            <ShieldCheck
              size={60}
              className="mx-auto text-[#0096D6]"
            />

            <h3 className="mt-6 text-2xl font-bold text-gray-800">
              No Insurance Company Found
            </h3>

            <p className="mt-4 text-gray-500">
              Please try searching with another name.
            </p>

          </div>

        )}

      </div>
    </section>
  );
};

export default InsuranceGrid;