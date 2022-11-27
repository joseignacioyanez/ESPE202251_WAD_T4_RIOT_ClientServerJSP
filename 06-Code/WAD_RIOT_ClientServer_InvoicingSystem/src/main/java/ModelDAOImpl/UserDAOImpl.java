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
import static com.mongodb.client.model.Filters.eq;
import com.mongodb.client.model.Updates;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.InsertOneResult;
import com.mongodb.client.result.UpdateResult;
import java.util.ArrayList;
import org.bson.Document;
import org.bson.conversions.Bson;
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
                
                // Try changing the id attribute with the substring from the JSON response
                String userResultInJson = userResult.toJson();
                String strippedOidFromJson = userResultInJson.substring(18, 42);
                user.setOidString(strippedOidFromJson);
                
                
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
            
            // Try changing the id attribute with the substring from the JSON response
            String userResultInJson = userSearched.toJson();
            String strippedOidFromJson = userResultInJson.substring(18, 42);
            user.setOidString(strippedOidFromJson);
            
            System.out.println(user);

        } catch (Exception e) {
            System.out.println("Could not get the user information " + e);
        }
        
        return user;
    }
    
    @Override
    public User listUser(String id) {
        try {
            usersDBResult = database.getCollection("users");   
            System.out.println("Got the users collection");
            
            System.out.println(id); 
                         
            Document userSearched = usersDBResult.find(eq("_id", new ObjectId(id))).first();
            
            System.out.println("User Searched JSON: " + userSearched);
            
            Gson gsonMapperToObject = new Gson();
            user = gsonMapperToObject.fromJson(userSearched.toJson(), User.class);
            
            System.out.println("Converted to Object: "+ user);

        } catch (Exception e) {
            System.out.println("Could not get the user information " + e);
        }
        
        return user;
    }
    

    @Override
    public boolean addUser(User user) {
        
        boolean inserted = false;
        
        ObjectId objectId = new ObjectId();
        // Add user into DB
        try {
           
            InsertOneResult result = database.getCollection("users").insertOne(
                    new Document().append("_id", objectId)
                    .append("fullName", user.getFullName())
                    .append("username", user.getUsername())
                    .append("email", user.getEmail())
                    .append("passwordHash", user.getPasswordHash())
                    .append("type", user.getType())
                    .append("oid", objectId.toString()));
            
            System.out.println("Success! Inserted document id: " + result.getInsertedId());
            inserted = true;
        } catch (Exception e) {
            System.err.println("Error when inserting new User: " + e);
        }
        
        return inserted;
    }

    @Override
    public boolean updateUser(User user) {
        String oid = user.getOidString();
        Gson gson = new Gson();
        System.out.println(gson.toJson(user));
        System.out.println("Try to update");
        /* Code modified from MongoDB docs
            https://www.mongodb.com/docs/drivers/java/sync/current/usage-examples/updateOne/
        */
        try {
            // Send to DB
            
            Document query = new Document().append("oid", oid);
            
            Bson updates = Updates.combine(
                    Updates.set("email", user.getEmail()),
                    Updates.set("username", user.getUsername()),
                    Updates.set("passwordHash", user.getPasswordHash()),
                    Updates.set("type", user.getType())
            );
            
            try {
                UpdateResult result = database.getCollection("users").updateOne(query, updates);
                System.out.println("Modified document count: " + result.getModifiedCount());
                System.out.println("Upserted id: " + result.getUpsertedId()); // only contains a value when an upsert is performed
            } catch (Exception e) {
                System.err.println("Unable to update due to an error: " + e);
                return false;
            }
            
            
        } catch (Exception e) {
            System.err.println("Unable to update due to an error: " + e);
            return false;
        }
        return true;
    }

    @Override
    public boolean deleteUser(String oid) {
        boolean deleted = false;
        System.out.println("Oid of user too be deleted: " + oid);
        Bson query = eq("oid", oid);
        
        try {
            DeleteResult result = database.getCollection("users").deleteOne(query);
            System.out.println("Deleted document count: " + result.getDeletedCount());
            deleted = true;
        } catch (Exception e) {
            System.err.println("Error in deletion: " + e);
        }
        return deleted;
    }

    @Override
    public String hashPassword(String password) {
        String bcryptHashString = BCrypt.withDefaults().hashToString(12, password.toCharArray());
        System.out.println(password + "Password Hashed" + bcryptHashString);
        return bcryptHashString;
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
