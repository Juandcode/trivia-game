import {ApolloCache, ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";

export const makeApolloClient = () => {
    const httpLink = new HttpLink({
        uri: 'http://192.168.100.4:4000/'
    })
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: httpLink
    })
}
