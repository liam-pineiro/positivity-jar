package com.positivityJar.graphql;

import com.positivityJar.User;
import com.positivityJar.service.UserService;

import jakarta.inject.Inject;
import jakarta.inject.Named;
import org.eclipse.microprofile.graphql.GraphQLApi;

@GraphQLApi
public class UserResolver {
    
    @Inject
    private UserService userService;  // Fixed variable naming

    @Mutation
    public SignInResponse signin(@Named("email") String email, @Named("password") String password) {
        // Retrieve the user by email
        User user = userService.getUserByEmail(email);

        if (user != null && user.getPassword().equals(password)) { // Fixed logic
            return new SignInResponse("Your Login is a success!", user.getId());
        }

        return new SignInResponse("Invalid Email or Password Attempt", null);
    }
}
