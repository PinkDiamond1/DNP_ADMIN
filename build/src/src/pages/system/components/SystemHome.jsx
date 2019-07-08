import React from "react";
import { title } from "../data";
// Modules
import packages from "pages/packages";
// Components
import StaticIp from "./StaticIp";
import ChangeHostUserPassword from "./ChangeHostUserPassword";
import Title from "components/Title";

const PackageList = packages.components.PackageList;

const SystemHome = () => (
  <>
    <Title title={title} />

    <ChangeHostUserPassword />

    <StaticIp />

    <div className="section-subtitle">Packages</div>
    <PackageList moduleName={title} coreDnps={true} />
  </>
);

export default SystemHome;
