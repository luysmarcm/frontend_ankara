import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://52.55.227.177:1337/graphql",
  cache: new InMemoryCache(),
});

export default client;
