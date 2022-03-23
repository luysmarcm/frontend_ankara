import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "http://52.23.179.120:1337/graphql",
	cache: new InMemoryCache(),
});

export default client;
