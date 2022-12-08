/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Model;

import MongoDBConnection.MongoDBConnection;
import com.google.gson.Gson;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import static com.mongodb.client.model.Filters.eq;
import java.util.ArrayList;
import org.bson.Document;
import org.bson.types.ObjectId;

/**
 *
 * @author joseignacio
 */
public class TestsMongoDB {
    public static void main(String[] args) {
        MongoDBConnection mongoConnection = new MongoDBConnection();
        MongoDatabase database = mongoConnection.getDatabase();
        MongoCollection<Document> usersDBResult;
        
        
        ArrayList<User> usersList = new ArrayList<>();
        
        usersDBResult = database.getCollection("users");   
        FindIterable<Document> allUsersDocuments = usersDBResult.find();
        
        User user = new User();
        
        for (Document userResult : allUsersDocuments)
        {
            Gson gsonMapperToObject = new Gson();
            user = gsonMapperToObject.fromJson(userResult.toJson(), User.class);
            usersList.add(user);
            // Get the $oid from JSON
            String userInJson = userResult.toJson();
            System.out.println(userInJson.indexOf("$oid"));
            System.out.println(userInJson.substring(18,42));
        }
        
        String idNew = new String();
        for (User usera : usersList)
        {
            usera.toString();
            
        }

        
        
        
        //Document userSearched = usersDBResult.find(eq(new ObjectId(id))).first();

        /*
        String id = "637ee40974565d726b274dd5";
        ObjectId userObjectId = new ObjectId(id);
        */
        
        ObjectId userObjectId = new ObjectId(idNew);
        
        
        usersDBResult = database.getCollection("users");   
        
        
        Document userSearched = usersDBResult.find(eq("_id", userObjectId)).first();
        
        System.out.println(userSearched);
        
        Document userSe = usersDBResult.find(eq("username", "jperz")).first();
        
        System.out.println(userSe.toString());
        
        
    }
}
