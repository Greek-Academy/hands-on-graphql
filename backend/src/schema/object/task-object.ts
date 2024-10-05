import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

import { getCategory } from "../../repositories/category-repository";
import { categoryGQL } from "./category-object";
import { Task } from "../../model";

// Task Object
export const taskGQL = new GraphQLObjectType({
  name: "Task",
  fields: {
    taskId: { type: GraphQLID },
    categoryId: { type: GraphQLID },
    category: {
      type: categoryGQL,
      resolve: (obj: Task) => getCategory(obj.categoryId),
    },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  },
});

// Input for create Task
export const createTaskInputGQL = new GraphQLInputObjectType({
  name: "CreateTaskInput",
  fields: {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  },
});
