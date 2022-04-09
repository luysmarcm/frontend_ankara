import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://apiav.ankaravenezuela.com/graphql",
	cache: new InMemoryCache(),
});

export default client;
