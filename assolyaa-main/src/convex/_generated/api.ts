import { makeFunctionReference } from "convex/server";

export const api = {
  users: {
    currentUser: makeFunctionReference<"query">("users:currentUser"),
  },
};
