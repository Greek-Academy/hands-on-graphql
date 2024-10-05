import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const categoryGQL = new GraphQLObjectType({
  name: "Category",
  fields: {
    categoryId: { type: GraphQLID },
    name: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  },
});
