

const scriptsInEvents = {

	async Eventsheetphase02_Event1_Act2(runtime, localVars)
	{
		if (runtime.globalVars.fragments === runtime.globalVars.fragmentsMax - 1) {
		    const portalBarriers = runtime.objects.tileBoxPortalBarrier1.getAllInstances();
		
		    portalBarriers.destroy();
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
