export const GET_RECENT_PERMITS = "GET_RECENT_PERMITS";
export const GET_PERMIT = "GET_PERMIT";

export const getRecentPermits = () => {
  return {
    type: GET_RECENT_PERMITS,
  };
};

export const getPermit = (permit: string) => {
  return {
    type: GET_PERMIT,
    permit,
  };
};
