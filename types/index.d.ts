import * as firebase from "firebase/app";
import { Auth } from "firebase/auth";
import firebaseui from "firebaseui";

declare module "react-firebaseui-localized" {
  interface Props {
    readonly auth: Auth;
    readonly config: firebaseui.auth.Config;
    readonly firebase: typeof firebase;
    readonly lang: "en";
    readonly version: "6.0.0";
  }

  export default function (props: Props): JSX.Element;
}
