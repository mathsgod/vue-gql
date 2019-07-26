import { jsonToGraphQLQuery } from 'json-to-graphql-query';

const VueGQL = {

    install: (Vue: any, options = {}) => {
        Vue.mixin({

        });
        Vue.prototype.$gql = {
            query(url: String, query: any) {
                var q = {
                    query: query
                };
                return Vue.http.post(url, {
                    query: jsonToGraphQLQuery(q)
                });
            },
            mutation(url: String, query: any) {
                var q = {
                    mutation: query
                };
                return Vue.http.post(url, {
                    query: jsonToGraphQLQuery(q)
                });
            }, subscription(url: String, query: any) {
                var q = {
                    subscription: query
                };
                return Vue.http.post(url, {
                    query: jsonToGraphQLQuery(q)
                });
            }
        };
    }
};
declare global {
    interface Window {
        jsonToGraphQLQuery: any
        Vue: any
    }
}

if (typeof window !== 'undefined' && window.Vue && window.Vue.http) {
    window.Vue.use(VueGQL);
    window.Vue.gql = {
        query: window.Vue.prototype.$gql.query,
        mutation: window.Vue.prototype.$gql.mutation,
        subscription: window.Vue.prototype.$gql.mutation
    };
}
window.jsonToGraphQLQuery = jsonToGraphQLQuery;


export default VueGQL;