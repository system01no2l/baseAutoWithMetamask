import * as kdgActions from '../pages/kdg/actions';
import * as Transaction from './metamaskTransaction';

export const _checkButtonClaim = async (driver: any) => {
  if (driver) {
    try {
      console.log('-------AutoClaim---------');
      const windows = await driver.getAllWindowHandles();
      await driver.switchTo().window(windows[0]);
      await driver.navigate().refresh();
      let runing = true;

      // Check button claim
      while(runing) {
        await driver.sleep(250)
        console.log('Đang quét button Claim .... ');
        const btnClaim = await kdgActions._isEnabled(driver);
        if (btnClaim) {
          console.time();
          await kdgActions.clickBtnClaim(driver);
          // Edit transaction
          await Transaction._moduleEditTransaction(driver);
          console.timeEnd();
          // Thoát vòng lặp
          runing = false;
        }
      }
    } catch (e) {
      // console.log(e);
    } finally {
      // await driver.quit();
    }
  }
};
