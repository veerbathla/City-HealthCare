import React from "react";

import EmpanelmentHero from "../components/Empanelment/EmpanelmentHero";
import AboutEmpanelment from "../components/Empanelment/AboutEmpanelment";
import CashlessHighlight from "../components/Empanelment/CashlessHighlight";
import InsuranceGrid from "../components/Empanelment/InsuranceGrid";
import WhyChoose from "../components/Empanelment/WhyChoose";
import CashlessProcess from "../components/Empanelment/CashlessProcess";



const OurEmpanelment = () => {
  return (
    <main className="bg-white">

      <EmpanelmentHero />

      <AboutEmpanelment />

      <CashlessHighlight />

      <InsuranceGrid />

      <WhyChoose />

      <CashlessProcess />


    </main>
  );
};

export default OurEmpanelment;