import React from "react";
import design from "./style.module.css";
import Sidebar from "../../layouts/Sidebar";
import MiddleSection from "../../layouts/MiddleSection";
import RightSection from "../../layouts/RightSection";
import Table from "../../components/Table";

export default function Home() {
  return (
    <div className={design.main}>
      <div className={design.main_inner}>
        <Sidebar />
        <MiddleSection />
        <RightSection />
      </div>
      <Table />
    </div>
  );
}
