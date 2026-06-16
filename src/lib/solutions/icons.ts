import BoxIso from "iconoir/icons/box-iso.svg?component";
import Clock from "iconoir/icons/clock.svg?component";
import Database from "iconoir/icons/database.svg?component";
import Dollar from "iconoir/icons/dollar.svg?component";
import GraphUp from "iconoir/icons/graph-up.svg?component";
import Headset from "iconoir/icons/headset.svg?component";

export const solutionIcons = {
  BoxIso,
  Clock,
  Database,
  Dollar,
  GraphUp,
  Headset,
} as const;

export type SolutionIconName = keyof typeof solutionIcons;
