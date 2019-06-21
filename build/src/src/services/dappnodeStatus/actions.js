import * as t from "./actionTypes";

// Service > dappnodeStatus

// Update

export const updateDappnodeParams = params => ({
  type: t.UPDATE_DAPPNODE_PARAMS,
  params
});

export const updateDappnodeStats = stats => ({
  type: t.UPDATE_DAPPNODE_STATS,
  stats
});

export const updateDappnodeDiagnose = diagnose => ({
  type: t.UPDATE_DAPPNODE_DIAGNOSE,
  diagnose
});

export const updatePingReturn = (dnp, pingReturn) => ({
  type: t.UPDATE_PING_RETURN,
  dnp,
  pingReturn
});

export const updateVersionData = (dnp, versionData) => ({
  type: t.UPDATE_VERSION_DATA,
  dnp,
  versionData
});

export const updateIpfsConnectionStatus = ipfsConnectionStatus => ({
  type: t.UPDATE_IPFS_CONNECTION_STATUS,
  ipfsConnectionStatus
});

export const updateWifiStatus = wifiStatus => ({
  type: t.UPDATE_WIFI_STATUS,
  wifiStatus
});

// Fetch

export const fetchAllDappnodeStatus = () => ({
  type: t.FETCH_ALL_DAPPNODE_STATUS
});

export const fetchDappnodeParams = () => ({
  type: t.FETCH_DAPPNODE_PARAMS
});

export const fetchDappnodeStats = () => ({
  type: t.FETCH_DAPPNODE_STATS
});

export const fetchDappnodeDiagnose = () => ({
  type: t.FETCH_DAPPNODE_DIAGNOSE
});
