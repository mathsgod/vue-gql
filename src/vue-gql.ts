import { jsonToGraphQLQuery } from 'json-to-graphql-query';
/// <reference types="vue" />
/// <reference types="vue-resource" />

declare global {
    interface Window {
        jsonToGraphQLQuery: any;
        Vue: any;
    }
}

class GQL {

    private Vue: vuejs.VueStatic
    constructor(Vue: vuejs.VueStatic) {
        this.Vue = Vue;
    }

    query(url: string, query: any): PromiseLike<vuejs.HttpResponse> {
        var q = {
            query: query
        };
        return this.Vue.http.post(url, {
            query: jsonToGraphQLQuery(q)
        });
    }

    mutation(url: string, query: any): PromiseLike<vuejs.HttpResponse> {
        var q = {
            mutation: query
        };
        return this.Vue.http.post(url, {
            query: jsonToGraphQLQuery(q)
        });
    }

    subscription(url: string, query: any): PromiseLike<vuejs.HttpResponse> {
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
        install: (Vue: any, options: any = {}) => {
            Vue.mixin({

            });
            Vue.prototype.$gql = new GQL(Vue);
        }
    });
    window.Vue.gql = window.Vue.prototype.$gql;
}
window.jsonToGraphQLQuery = jsonToGraphQLQuery;

export default GQL;