 package com.positivityJar.graphql;

public class SignInResponse {
    private String message;
    private Long userId;

    public SignInResponse(String message, Long userId) {
        this.message = message;
        this.userId = userId;
    }

    public String getMessage() {
        return message;
    }

    public Long getUserId() {
        return userId;
    }
}
 
    

