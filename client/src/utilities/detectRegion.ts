const regions = {
    americas: ["LAN", "LAS", "BR"],
    asia: ["KR", "CH", "TW", "PH"],
  };
  
  type RegionKey = keyof typeof regions;
  
  const detectRegion = (server: string): RegionKey | null => {
    
    for (const regionKey in regions) {
      if (regions[regionKey as RegionKey].includes(server)) {
        return regionKey as RegionKey;
      }
    }
    return null;
  };
  
  export default detectRegion;
  