package com.positivityJar.graphql;

import org.eclipse.microprofile.graphql.Query;



@org.eclipse.microprofile.graphql.GraphQLApi
 public class GraphQLApi {

    @Query
    public String hello() {
        return "Hello, world!";
    }

    // Add more queries and mutations here
}
