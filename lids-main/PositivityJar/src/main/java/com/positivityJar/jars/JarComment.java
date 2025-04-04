package com.positivityJar.jars;
import com.positivityJar.*;

public class JarComment {

	// original poster
	public User op;
	// the contents of the comment
	public String content;
	
	public void makeComment(User op, String content) {
		this.op = op;
		this.content = content;
	}
	
	public User getOP() {
		return op;
	}
	public void setOP(User op) {
		this.op = op;
	}
	
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
}
