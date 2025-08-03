import React, { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagContext = createContext(null);

const FeatureFlagGlobalState = ({ children }) => {
  const [loading, setloading] = useState(false);
  const [enabledflags, setenabledflags] = useState({});
  async function fetchFeatureFlags() {
    try {
      setloading(true);
      const response = await featureFlagsDataServiceCall();
      setenabledflags(response);
      setloading(false);
    } catch (e) {
      console.log(e);
      setloading(false);
      throw new Error(e);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);
  return (
    <FeatureFlagContext.Provider value={{ loading, enabledflags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
};

export default FeatureFlagGlobalState;
