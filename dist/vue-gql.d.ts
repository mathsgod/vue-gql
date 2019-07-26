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
            };
        };
    }
}
declare class GQL {
    private Vue;
    constructor(Vue: any);
    query(url: String, query: any): GQLResponse;
    mutation(url: String, query: any): GQLResponse;
    subscription(url: String, query: any): GQLResponse;
}
export default GQL;
//# sourceMappingURL=vue-gql.d.ts.map