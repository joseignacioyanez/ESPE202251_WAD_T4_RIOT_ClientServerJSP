package Model;

import com.google.gson.Gson;
import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.ServerApi;
import com.mongodb.ServerApiVersion;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import static com.mongodb.client.model.Filters.eq;
import com.mongodb.client.model.Projections;
import org.bson.Document;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;
import sun.security.jgss.GSSToken;

/**
 *
 * @author joseignacio
 */
public class User {
    ObjectId _id;
    String fullName;
    String email;
    String username;
    String passwordHash;

    public User() {
    }

    public User(ObjectId id, String fullName, String email, String username, String passwordHash) {
        this._id = id;
        this.fullName = fullName;
        this.email = email;
        this.username = username;
        this.passwordHash = passwordHash;
    }

    public ObjectId getId() {
        return _id;
    }

    public void setId(ObjectId id) {
        this._id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }
    
    public void printUserDebug(){
        System.out.println("This user id: " + _id);
        System.out.println("This user fullname: " + fullName);
        System.out.println("This user email: " + email);
        System.out.println("This user username: " + username);
        System.out.println("This user passwordHash " + passwordHash);
    }
    
    public static void main(String[] args) {
        
        try {
            /* Code modified from MongoDB Atlas */
            ConnectionString connectionString = new ConnectionString("mongodb+srv://user:user123@mongoji.nf5scze.mongodb.net/?retryWrites=true&w=majority");
            MongoClientSettings settings = MongoClientSettings.builder()
                    .applyConnectionString(connectionString)
                    .serverApi(ServerApi.builder()
                            .version(ServerApiVersion.V1)
                            .build())
                    .build();
            MongoClient mongoClient = MongoClients.create(settings);
            MongoDatabase database = mongoClient.getDatabase("WAD_1_Invoicing_SantoPlacer");
            
            try {
                /* collection.find() returns Objects that have to be casted to Documents by default
                    but in the MongoDB docs, they cast all the collection to an Array of Documents Before, 
                    so we can always work with Documents*/
                MongoCollection<Document> users = database.getCollection("users");
                                
                Bson projectionFields = Projections.fields(
                        Projections.include("fullName", "email", "username", "passwordHash"));
                
                
                Document firstUser = users.find(eq("username", "jiyf")).projection(projectionFields).first();
                
                
                System.out.println(" first user as JSON is: \n" + firstUser.toJson());
                System.out.println(" first user as Object is: \n" + firstUser);
                
                /* Map JSON to Object with Gson*/
                
                Gson gson = new Gson();
                User user = gson.fromJson(firstUser.toJson(), User.class);
                
                System.out.println("Como POJO:");
                user.printUserDebug();
                
            } catch (Exception e) {
                System.out.println("Could not find the users collection " + e);
            }
        } catch (Exception e) {
            System.out.println("Could not connect to MongoDB Database " + e);
        }
    }
    
}
