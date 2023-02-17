import ReactGA from 'react-ga';

export const initGA = (trackingID) => {
  ReactGA.initialize(trackingID);
};
