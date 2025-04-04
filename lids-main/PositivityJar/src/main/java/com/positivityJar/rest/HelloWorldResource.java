package com.positivityJar.rest;


import jakarta.ws.rs.Path;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/hello")
public class HelloWorldResource{

	@GET
@Produces(MediaType.TEXT_PLAIN)
public String helloWorld(){
return "Hello World";

}

}