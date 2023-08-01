// actions.js

export const setScrollPosition = (position) => {
    return {
      type: 'SET_SCROLL_POSITION',
      payload: position,
    };
  };
  
  export const incrementDonationCount = () => {
    return {
      type: 'INCREMENT_DONATION_COUNT',
    };
  };
  
  export const setUserName = (name) => {
    return {
      type: 'SET_USER_NAME',
      payload: {
        name,
      },
    };
  };