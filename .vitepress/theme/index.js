import Theme from "@nativescript/vitepress-theme";
import "@nativescript/vitepress-theme/theme/style.css";
import CopyPageButton from "./CopyPageButton.vue";

export default {
  ...Theme((ctx) => {
    ctx.app.component("CopyPageButton", CopyPageButton);
  }),
};
