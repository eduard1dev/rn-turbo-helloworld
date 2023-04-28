import type { TurboModule } from "react-native/Libraries/TurboModule/RCTExport";
import { TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  getHelloWorld(): string;
}

export default TurboModuleRegistry.get<Spec>("RTNWidget") as Spec | null;
