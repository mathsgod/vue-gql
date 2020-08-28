import { jsonToGraphQLQuery } from 'json-to-graphql-query';

class GQL {
    constructor(Vue) {
        this.Vue = Vue;
    }

    query(url, query) {
        return this.Vue.http.post(url, {
            query: jsonToGraphQLQuery({ query })
        });
    }

    mutation(url, mutation) {
        return this.Vue.http.post(url, {
            query: jsonToGraphQLQuery({ mutation })
        });
    }

    subscription(url, subscription) {
        return this.Vue.http.post(url, {
            query: jsonToGraphQLQuery({ subscription })
        });
    }
}

export default {
    install(Vue, options) {
        let gql = new GQL(Vue);
        Vue.gql = gql;
        Vue.prototype.$gql = gql;

    }
}