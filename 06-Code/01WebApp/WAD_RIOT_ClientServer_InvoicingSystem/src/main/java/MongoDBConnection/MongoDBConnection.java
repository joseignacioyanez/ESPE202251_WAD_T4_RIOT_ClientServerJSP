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
        } catch (Exception e) {
            System.out.println("Could not connect to MongoDB Database " + e);
        }
    }
    
    public MongoDatabase getDatabase(){
        return database;
    }
}
