import { jsonToGraphQLQuery } from 'json-to-graphql-query';

const VueGQL = {

    install: (Vue, options = {}) => {
        Vue.mixin({

        });
        Vue.prototype.$gql = {
            query(url, query) {
                var q = {
                    query: query
                };
                return Vue.http.post(url, {
                    query: jsonToGraphQLQuery(q)
                });
            },
            mutation(url, query) {
                var q = {
                    mutation: query
                };
                return Vue.http.post(url, {
                    query: jsonToGraphQLQuery(q)
                });
            }, subscription(url, query) {
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
if (typeof window !== 'undefined' && window.Vue && window.Vue.http) {
    window.Vue.use(VueGQL);
}
window.jsonToGraphQLQuery = jsonToGraphQLQuery;

export default VueGQL;