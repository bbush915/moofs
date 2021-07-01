import { NonEmptyArray } from "type-graphql";

import { GameResolver } from "./game/resolver";
import { PlayerResolver } from "./player/resolver";
import { RankResolver } from "./rank/resolver";

export const resolvers: NonEmptyArray<Function> = [GameResolver, PlayerResolver, RankResolver];
