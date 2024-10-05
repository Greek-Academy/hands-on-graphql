import { GraphQLObjectType, GraphQLString } from "graphql";
import { createTaskInputGQL, taskGQL } from "./object";
import { createTask } from "../repositories";

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
