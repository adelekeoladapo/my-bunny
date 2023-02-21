import { EdgeRulesMatchingTypeEnum } from "./edge-rules-matching-type.enum";
import { EdgeRulesTriggerType } from "./edge-rules-trigger-type.enum";

export interface Trigger {
  Type: EdgeRulesTriggerType;
  PatternMatches?: string[];
  PatternMatchingType: EdgeRulesMatchingTypeEnum;
  Parameter1?: string;
}
