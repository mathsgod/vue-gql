import { jsonToGraphQLQuery, VariableType } from 'json-to-graphql-query';
import GQL from "./index";
window.Vue.use(GQL);


window.jsonToGraphQLQuery = jsonToGraphQLQuery;
window.VariableType = VariableType;