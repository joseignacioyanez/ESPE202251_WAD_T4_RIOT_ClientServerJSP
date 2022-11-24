/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package MongoDBConnection;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.ServerApi;
import com.mongodb.ServerApiVersion;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;


/**
 *
 * @author joseignacio
 */
public class MongoDBConnection {
    MongoDatabase database;

    public MongoDBConnection() {
        try {
            /* Code modified from MongoDB Atlas
            https://www.mongodb.com/docs/drivers/java/sync/v4.5/fundamentals/connection/connect/ */
            ConnectionString connectionString = new ConnectionString("mongodb+srv://user:user123@mongoji.nf5scze.mongodb.net/?retryWrites=true&w=majority");
            MongoClientSettings settings = MongoClientSettings.builder()
                    .applyConnectionString(connectionString)
                    .serverApi(ServerApi.builder()
                            .version(ServerApiVersion.V1)
                            .build())
                    .build();
            MongoClient mongoClient = MongoClients.create(settings);
            this.database = mongoClient.getDatabase("WAD_1_Invoicing_SantoPlacer");
            
            /* TEST
            try {
                // collection.find() returns Objects that have to be casted to Documents by default
                //    but in the MongoDB docs, they cast all the collection to an Array of Documents Before, 
                //    so we can always work with Documents
                MongoCollection<Document> users = database.getCollection("users");
                                
                Bson projectionFields = Projections.fields(
                        Projections.include("fullName", "email", "username", "passwordHash"));
                
                
                Document firstUser = users.find(eq("username", "jiyf")).projection(projectionFields).first();
                
                
                System.out.println(" first user as JSON is: \n" + firstUser.toJson());
                System.out.println(" first user as Object is: \n" + firstUser);
                
                // Map JSON to Object with Gson
                
                Gson gson = new Gson();
                User user = gson.fromJson(firstUser.toJson(), User.class);
                
                System.out.println("Como POJO:");
                user.printUserDebug();
                
            } catch (Exception e) {
                System.out.println("Could not find the users collection " + e);
            }
            */
        } catch (Exception e) {
            System.out.println("Could not connect to MongoDB Database " + e);
        }
    }
    
    public MongoDatabase getDatabase(){
        return database;
    }
}
