export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook("request", (event) => {
        console.log("on request", event.path);
        console.log("on request", event);
    });
})
