import { jsonToGraphQLQuery } from 'json-to-graphql-query';

declare global {
    interface Window {
        jsonToGraphQLQuery: any;
        Vue: any;
    }
    interface GQLResponse {
        data: {
            data: any;
            error: {
                message: String;
            }
        }
    }
}

class GQL {

    private Vue: any;
    constructor(Vue: any) {
        this.Vue = Vue;
    }

    query(url: String, query: any): GQLResponse {
        var q = {
            query: query
        };
        return this.Vue.http.post(url, {
            query: jsonToGraphQLQuery(q)
        });
    }

    mutation(url: String, query: any): GQLResponse {
        var q = {
            mutation: query
        };
        return this.Vue.http.post(url, {
            query: jsonToGraphQLQuery(q)
        });
    }

    subscription(url: String, query: any): GQLResponse {
        var q = {
            subscription: query
        };
        return this.Vue.http.post(url, {
            query: jsonToGraphQLQuery(q)
        });
    }
}

if (typeof window !== 'undefined' && window.Vue && window.Vue.http) {
    window.Vue.use({
        install: (Vue: any, options = {}) => {
            Vue.mixin({

            });
            Vue.prototype.$gql = new GQL(Vue);
        }
    });
    window.Vue.gql = window.Vue.prototype.$gql;
}
window.jsonToGraphQLQuery = jsonToGraphQLQuery;

export default GQL;