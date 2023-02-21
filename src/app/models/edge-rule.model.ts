import { EdgeRulesActionTypeEnum } from "./edge-rules-action-type.enum";
import { Trigger } from "./trigger.model";

export interface EdgeRule {
  Guid?: string;
  ActionType: EdgeRulesActionTypeEnum;
  ActionParameter1?: string;
  ActionParameter2?: string;
  Triggers?: Trigger[];
  Description?: string;
  Enabled: boolean;
  TriggerMatchingType: number;
}
