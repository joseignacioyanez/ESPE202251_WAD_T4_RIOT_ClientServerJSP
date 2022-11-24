/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ModelDAOImpl;

import Interfaces.UserDAO;
import Model.User;
import MongoDBConnection.MongoDBConnection;
import at.favre.lib.crypto.bcrypt.BCrypt;
import com.google.gson.Gson;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import java.util.ArrayList;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.javatuples.Pair;

/**
 *
 * @author joseignacio
 */
public class UserDAOImpl implements UserDAO{
    
    //Attributes
    MongoDBConnection mongoConnection = new MongoDBConnection();
    MongoDatabase database = mongoConnection.getDatabase();
    MongoCollection<Document> usersDBResult;
    User user;


    @Override
    public ArrayList<User> listUsers() {
        ArrayList<User> usersList = new ArrayList<>();
        
        try {
            usersDBResult = database.getCollection("users");   
            FindIterable<Document> allUsersDocuments = usersDBResult.find();
            
            System.out.println(allUsersDocuments);
            
            for (Document userResult : allUsersDocuments)
            {
                Gson gsonMapperToObject = new Gson();
                user = gsonMapperToObject.fromJson(userResult.toJson(), User.class);
                usersList.add(user);
            }
            
        } catch (Exception e) {
            System.out.println("Could not get the user information " + e);
        }
        return usersList;
    }

    @Override
    public User listUser(ObjectId id) {
        try {
            usersDBResult = database.getCollection("users");   
            System.out.println("Got it through the users collection");
            Document userSearched = usersDBResult.find(Filters.eq("_id", id)).first();
            System.out.println("found!");
            
            System.out.println(userSearched);
            
            Gson gsonMapperToObject = new Gson();
            user = gsonMapperToObject.fromJson(userSearched.toJson(), User.class);
            
            System.out.println(user);

        } catch (Exception e) {
            System.out.println("Could not get the user information " + e);
        }
        
        return user;
    }
    
    @Override
    public User listUser(String id) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody        
    }
    

    @Override
    public boolean addUser(User user) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public boolean updateUser(User user) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public boolean deleteUser(ObjectId id) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public String hashPassword(String password) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public boolean passwordIsValid(ObjectId userObjectId, String password) {
        
        // Request Hash from DB
        try {
            usersDBResult = database.getCollection("users");
        } catch (Exception e) {
            System.out.println("Error when getting the users collection " + e);
        }
        Document userSearched = usersDBResult.find(Filters.eq("_id", userObjectId)).first();
        String passwordHash = userSearched.getString("passwordHash");
        System.out.println("The hash of this user is: "+passwordHash);
        System.out.println("And is going to be chcked with: '"+password+"'");
        
        BCrypt.Result result = BCrypt.verifyer().verify(password.toCharArray(), passwordHash);
        
        System.out.println("Password entered is valid: " + result.verified);
        
        return result.verified;
    }

    @Override
    public Pair userExists(String username) {
        try {
            usersDBResult = database.getCollection("users");
        } catch (Exception e) {
            System.out.println("Error when getting the users collection " + e);
        }
        
        Document userSearched = usersDBResult.find(Filters.eq("username", username)).first();
        
        try {
            System.out.println("Username from the Result: " + userSearched.getString("username"));
            ObjectId userSearchedObjectId = userSearched.getObjectId("_id");
            System.out.println("ObjectId fro User is: " + userSearchedObjectId);
            
            // Create and return a tuple with the Boolean and the Id if it exists
            Pair<Boolean, ObjectId> answerAndObjectId;
            answerAndObjectId = Pair.with(true, userSearchedObjectId);
            return answerAndObjectId;
        } catch (Exception e) {
            System.out.println("Error, probably no user with that username: " + e);
            
            ObjectId empty = new ObjectId();
            Pair<Boolean, ObjectId> answerAndObjectId;
            answerAndObjectId = Pair.with(false, empty);
            
            return answerAndObjectId;
        }

        
        
    }
}
