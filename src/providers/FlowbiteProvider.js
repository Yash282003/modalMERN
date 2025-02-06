"use client";

import { useEffect } from "react";

export default function FlowbiteProvider({ children }) {
  useEffect(() => {
    import("flowbite").then(({ initFlowbite }) => initFlowbite());
  }, []);

  return <>{children}</>;
}