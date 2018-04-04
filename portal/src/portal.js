import * as singleSpa from 'single-spa'; // waiting for this to be merged: https://github.com/CanopyTax/single-spa/pull/156
import { GlobalEventDistributor } from './globalEventDistributor'
import { loadApp } from './helper'
import * as apps from './apps.json'

async function init() {
    const globalEventDistributor = new GlobalEventDistributor();
    const mountableApps =  await  apps.metaData;
    for (let [key, app] of Object.entries(mountableApps)){
        console.log(key, app);
        await loadApp(app.Name, app.Hash, app.AppUrl, app.AppStoreUrl, globalEventDistributor);
    }
    
    singleSpa.start();
}

init();
