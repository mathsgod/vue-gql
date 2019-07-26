declare const VueGQL: {
    install: (Vue: any, options?: {}) => void;
};
declare global {
    interface Window {
        jsonToGraphQLQuery: any;
        Vue: any;
    }
}
export default VueGQL;
//# sourceMappingURL=vue-gql.d.ts.map