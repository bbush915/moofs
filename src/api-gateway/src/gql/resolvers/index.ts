import { NonEmptyArray } from "type-graphql";

import { PlayerResolver } from "./player/resolver";
import { RankResolver } from "./rank/resolver";

export const resolvers: NonEmptyArray<Function> = [PlayerResolver, RankResolver];
