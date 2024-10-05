import { GraphQLObjectType, GraphQLString } from "graphql";
import { taskGQL } from "./object";
import { createTask } from "../repository";

export const mutationGQL = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createTask: {
      type: taskGQL,
      args: {
        title: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve: createTask,
    },
  },
});
