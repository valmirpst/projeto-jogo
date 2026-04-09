// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";
runOnStartup(async (runtime) => {
    // Code to run on the loading screen.
    // Note layouts, objects etc. are not yet available.
    runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});
async function OnBeforeProjectStart(runtime) {
    // Code to run just before 'On start of layout' on
    // the first layout. Loading has finished and initial
    // instances are created and available to use here.
    runtime.addEventListener("tick", () => Tick(runtime));
}
function Tick(runtime) {
    const ripHunter = runtime.objects.ripHunter.getFirstInstance();
    if (!ripHunter)
        return;
    handleRipHunterMovement(ripHunter, runtime);
    const ripHunterGhost = runtime.objects.ripHunterGhost.getFirstInstance();
    if (ripHunterGhost) {
        const right = runtime.keyboard.isKeyDown("ArrowRight");
        const left = runtime.keyboard.isKeyDown("ArrowLeft");
        if (right) {
            ripHunterGhost.width = Math.abs(ripHunterGhost.width);
        }
        else if (left) {
            ripHunterGhost.width = -Math.abs(ripHunterGhost.width);
        }
    }
}
function handleRipHunterMovement(ripHunter, runtime) {
    const platform = ripHunter.behaviors.Platform;
    // Teclas
    const right = runtime.keyboard.isKeyDown("ArrowRight");
    const left = runtime.keyboard.isKeyDown("ArrowLeft");
    let nextAnim = "Idle";
    let animFromMode = "beginning";
    if (platform.isJumping) {
        nextAnim = "Jump";
    }
    else if (right || left) {
        nextAnim = "Run";
    }
    else if (platform.isOnFloor) {
        nextAnim = "Idle";
        animFromMode = "current-frame";
    }
    if (right) {
        ripHunter.width = Math.abs(ripHunter.width);
    }
    else if (left) {
        ripHunter.width = -Math.abs(ripHunter.width);
    }
    // Só troca se mudou
    if (ripHunter.animationName !== nextAnim) {
        ripHunter.setAnimation(nextAnim, animFromMode);
    }
}
function handleRipHunterGhost(ripHunterGhost, runtime) {
    // Teclas
    const right = runtime.keyboard.isKeyDown("ArrowRight");
    const left = runtime.keyboard.isKeyDown("ArrowLeft");
    if (right) {
        ripHunterGhost.width = Math.abs(ripHunterGhost.width);
    }
    else if (left) {
        ripHunterGhost.width = -Math.abs(ripHunterGhost.width);
    }
}
export {};
