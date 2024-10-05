import { GraphQLList, GraphQLObjectType } from "graphql";
import { taskList } from "../repositories";
import { taskGQL } from "./object";

export const queryGQL = new GraphQLObjectType({
  name: "Query",
  fields: {
    taskList: {
      type: new GraphQLList(taskGQL),
      resolve: taskList,
    },
  },
});
