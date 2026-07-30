import React from "react";

import EmpanelmentHero from "../components/empanelment/EmpanelmentHero";
import AboutEmpanelment from "../components/empanelment/AboutEmpanelment";
import CashlessHighlight from "../components/empanelment/CashlessHighlight";
import InsuranceGrid from "../components/empanelment/InsuranceGrid";
import WhyChoose from "../components/empanelment/WhyChoose";
import CashlessProcess from "../components/empanelment/CashlessProcess";
import EmpanelmentCTA from "../components/empanelment/EmpanelmentCTA";


const OurEmpanelment = () => {
  return (
    <main className="bg-white">

      <EmpanelmentHero />

      <AboutEmpanelment />

      <CashlessHighlight />

      <InsuranceGrid />

      <WhyChoose />

      <CashlessProcess />

      <EmpanelmentCTA />

    </main>
  );
};

export default OurEmpanelment;