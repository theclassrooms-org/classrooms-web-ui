import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_BASE}/graphql`,
    credentials: "include",
  }),
  cache: new InMemoryCache(),
});
