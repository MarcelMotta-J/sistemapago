import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  MAT_SELECT_CONFIG,
  MAT_SELECT_SCROLL_STRATEGY,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
  MAT_SELECT_TRIGGER,
  MatSelect,
  MatSelectChange,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-J3YCGSVM.js";
import "./chunk-3SYHATIP.js";
import {
  MatOptgroup,
  MatOption
} from "./chunk-SMUU2L6X.js";
import "./chunk-5YSHLFBE.js";
import "./chunk-ZUBWYVPE.js";
import "./chunk-PV2ZDSZ6.js";
import "./chunk-P64YBMRL.js";
import {
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-7FRTJFGU.js";
import "./chunk-WQEI63KC.js";
import "./chunk-U24FKUQ5.js";
import "./chunk-FUXXQEKG.js";
import "./chunk-PEBD5EEL.js";
import "./chunk-4A6ONQFL.js";
import "./chunk-MSYU5ME3.js";
import "./chunk-WMCF36ZG.js";
import "./chunk-DQJGEEJ7.js";
import "./chunk-4NRDWZRV.js";
import "./chunk-XFITUL55.js";
import "./chunk-NIN4PVGZ.js";
import "./chunk-AB5PDF2Z.js";
import "./chunk-NWD54RMW.js";
import "./chunk-FITUF5IC.js";
import "./chunk-YQZF7T32.js";
import {
  require_cjs,
  require_operators
} from "./chunk-6XPXFVTG.js";
import {
  __toESM
} from "./chunk-6DU2HRTW.js";

// node_modules/@angular/material/fesm2022/select.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var import_operators = __toESM(require_operators(), 1);
var matSelectAnimations = {
  // Represents
  // trigger('transformPanel', [
  //   state(
  //     'void',
  //     style({
  //       opacity: 0,
  //       transform: 'scale(1, 0.8)',
  //     }),
  //   ),
  //   transition(
  //     'void => showing',
  //     animate(
  //       '120ms cubic-bezier(0, 0, 0.2, 1)',
  //       style({
  //         opacity: 1,
  //         transform: 'scale(1, 1)',
  //       }),
  //     ),
  //   ),
  //   transition('* => void', animate('100ms linear', style({opacity: 0}))),
  // ])
  /** This animation transforms the select's overlay panel on and off the page. */
  transformPanel: {
    type: 7,
    name: "transformPanel",
    definitions: [
      {
        type: 0,
        name: "void",
        styles: {
          type: 6,
          styles: { opacity: 0, transform: "scale(1, 0.8)" },
          offset: null
        }
      },
      {
        type: 1,
        expr: "void => showing",
        animation: {
          type: 4,
          styles: {
            type: 6,
            styles: { opacity: 1, transform: "scale(1, 1)" },
            offset: null
          },
          timings: "120ms cubic-bezier(0, 0, 0.2, 1)"
        },
        options: null
      },
      {
        type: 1,
        expr: "* => void",
        animation: {
          type: 4,
          styles: { type: 6, styles: { opacity: 0 }, offset: null },
          timings: "100ms linear"
        },
        options: null
      }
    ],
    options: {}
  }
};
export {
  MAT_SELECT_CONFIG,
  MAT_SELECT_SCROLL_STRATEGY,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
  MAT_SELECT_TRIGGER,
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatOptgroup,
  MatOption,
  MatPrefix,
  MatSelect,
  MatSelectChange,
  MatSelectModule,
  MatSelectTrigger,
  MatSuffix,
  matSelectAnimations
};
//# sourceMappingURL=@angular_material_select.js.map
