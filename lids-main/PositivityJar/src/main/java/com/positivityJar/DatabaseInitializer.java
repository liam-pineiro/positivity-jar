package com.positivityJar;




//----------------------------DATABASE_INTIALIZER----------------------------\\


import java.sql.Connection;
import java.sql.DriverManager;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.SQLException;
import java.sql.Statement;


    
public class DatabaseInitializer {
    
    private static final String URL = "jdbc:mysql://localhost:3306/hwdb"; // DB URL
    private static final String USER = "root"; // DB username
    private static final String PASSWORD = "password"; // DB password
    private static final String DBNAME = "ClientsDb"; // Name of the database to create
    private static final String SQLPATH = "src/main/resources/db/migration.sql"; // Path to migration file

        public static void main(String[] args) {
        //connect & create database if it doesn't already exist
        try (Connection con = DriverManager.getConnection(URL, USER, PASSWORD);
             Statement stmt = con.createStatement()) {
        
        String sql = "CREATE DATABASE IF NOT EXISTS " + DBNAME;
        stmt.executeUpdate(sql);
        System.out.print("Database" + URL + "initialized");

                //use database
                String useDb = "USE " + DBNAME;
                stmt.executeUpdate(useDb);
                System.out.println("Using database " + DBNAME);

                    //read migration file
                    String sqlFile = new String(Files.readAllBytes(Paths.get(SQLPATH)));
                    stmt.executeUpdate(sqlFile);    
                    System.out.println("Migration file executed successfully");

    } catch (SQLException SQLE) {
        SQLE.printStackTrace();
    } catch (Exception e) {
        e.printStackTrace();
    } 
}
}

