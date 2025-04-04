package com.positivityJar;

import java.util.ArrayList;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import com.positivityJar.jars.JarPost;

@Entity
@Table(name = "Jars")
public class Jar {

	@Id
	@Column(unique = false, nullable = false)
    public String jarName;
    // uses the members ID
	
	@Column(unique = false, nullable = false)
    public ArrayList<User> members;
	
	@Column(unique = false, nullable = false)
    public ArrayList<JarPost> posts;
    
    public void makeJar(String jarName, ArrayList<User> members, ArrayList<JarPost> posts) {
    	this.jarName = jarName;
    	this.members = members;
    	this.posts = posts;
    }
    
    public void setName(String jarName) {
    	this.jarName = jarName;
    }
    public String getName() {
    	return jarName;
    }
    
    // i see no reason to use this, so ill also add a method to just add a member on the end
    public void setMembers(ArrayList<User> members) {
    	this.members = members;
    }
    public ArrayList<User> getMembers() {
    	return members;
    }
    // adds a member
    public void addMember(User member) {
    	members.add(member);
    }
    
    // same as setMembers honestly, im gonna include a method to add one on the end. holy CRAP i love arraylists
    public void setPosts(ArrayList<JarPost> posts) {
    	this.posts = posts;
    }
    public ArrayList<JarPost> getPosts() {
    	return posts;
    }
    // heres the method to just add a new one
    public void addPost(JarPost post) {
    	posts.add(post);
    }
    
}
