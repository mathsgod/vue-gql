/// <reference types="vue" />
/// <reference types="vue-resource" />
declare global {
    interface Window {
        jsonToGraphQLQuery: any;
        Vue: any;
    }
}
declare class GQL {
    private Vue;
    constructor(Vue: vuejs.VueStatic);
    query(url: string, query: any): PromiseLike<vuejs.HttpResponse>;
    mutation(url: string, query: any): PromiseLike<vuejs.HttpResponse>;
    subscription(url: string, query: any): PromiseLike<vuejs.HttpResponse>;
}
export default GQL;
//# sourceMappingURL=vue-gql.d.ts.map