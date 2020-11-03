import { App, Plugin } from "vue";
import { VueGtmUseOptions } from "./config";
export declare function createGtm(options: VueGtmUseOptions): {
    install: (app: App) => void;
};
declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $gtm: VueGtmPlugin;
    }
}
export declare type VueGtmPlugin = Plugin;
export { VueGtmUseOptions } from "./config";
declare const _default: VueGtmPlugin;
export default _default;
