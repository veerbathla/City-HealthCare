import React from "react";

import EmpanelmentHero from "../components/Empanelment/EmpanelmentHero";
import AboutEmpanelment from "../components/Empanelment/AboutEmpanelment";
import CashlessHighlight from "../components/Empanelment/CashlessHighlight";
import InsuranceGrid from "../components/Empanelment/InsuranceGrid";
import WhyChoose from "../components/Empanelment/WhyChoose";
import CashlessProcess from "../components/Empanelment/CashlessProcess";
import EmpanelmentCTA from "../components/Empanelment/EmpanelmentCTA";


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