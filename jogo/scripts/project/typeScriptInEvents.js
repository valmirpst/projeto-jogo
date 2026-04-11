const scriptsInEvents = {
    async Eventsheetphase02_Event1_Act3(runtime, localVars) {
        if (runtime.globalVars.fragments === runtime.globalVars.fragmentsMax - 1) {
            const portalBarriers = runtime.objects.tileBoxPortalBarrier1.getAllInstances();
            for (let i = 0; i < portalBarriers.length; i++) {
                await new Promise(res => setTimeout(res, i < 4 ? 150 : 75));
                portalBarriers[i].destroy();
            }
            runtime.objects.portalBarrierFragmentCount.getFirstInstance()?.destroy();
            runtime.objects.fragmentBarrier01.getFirstInstance()?.destroy();
        }
    }
};
globalThis.C3.TypeScriptInEvents = scriptsInEvents;
export {};
