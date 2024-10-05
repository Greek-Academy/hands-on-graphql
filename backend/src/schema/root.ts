import { GraphQLSchema } from "graphql";
import { mutationGQL } from "./mutation";
import { queryGQL } from "./query";

export const schema = new GraphQLSchema({
  query: queryGQL,
  mutation: mutationGQL,
});
