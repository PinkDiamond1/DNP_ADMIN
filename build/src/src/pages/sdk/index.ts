import * as actions from "./actions";
import reducer from "./reducer";
import * as selectors from "./selectors";
import saga from "./sagas";
import SdkRoot from "./components/SdkRoot";
import * as data from "./data";

export const rootPath = data.rootPath;
export const mountPoint = data.mountPoint;

export default {
  mountPoint,
  rootPath,
  RootComponent: SdkRoot,
  actions,
  selectors,
  saga,
  reducer,
  component: SdkRoot
};
