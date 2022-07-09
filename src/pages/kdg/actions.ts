import { WebDriver } from 'selenium-webdriver';

import { clickElement, fillText } from '../../../src/utils/helpers/actions';
import selectors from './selectors';

export const clickBtnStarConnectWallet = async (driver: WebDriver) => {
  await clickElement(driver, selectors.btnConnectWallet);
};

export const clickBtnCnMetaMask = async (driver: WebDriver) => {
  await clickElement(driver, selectors.btnCnMetammask);
  console.log('Click button metamask');
};