type QueryDefinition<Args, Return> = {
  args: Args;
  handler: (ctx: unknown, args: Args) => Promise<Return> | Return;
};

export function query<Args, Return>(
  definition: QueryDefinition<Args, Return>,
): QueryDefinition<Args, Return> {
  return definition;
}
