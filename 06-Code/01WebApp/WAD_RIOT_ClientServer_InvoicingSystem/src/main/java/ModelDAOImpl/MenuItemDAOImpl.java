/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ModelDAOImpl;

import Interfaces.MenuItemDAO;
import Model.MenuItem;
import MongoDBConnection.MongoDBConnection;
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
 * @author mishe
 */
public class MenuItemDAOImpl implements MenuItemDAO{
    MongoDBConnection mongoConnection = new MongoDBConnection();
    MongoDatabase database = mongoConnection.getDatabase();
    MongoCollection<Document> menuItemDBResult;
    MenuItem menuItem;
    
    @Override
    public ArrayList<MenuItem> listMenuItems() {
        ArrayList<MenuItem> menuItemsList = new ArrayList<>();
        
        try {
            menuItemDBResult = database.getCollection("menuItems");   
            FindIterable<Document> allMenuItemsDocuments = menuItemDBResult.find();
            
            System.out.println("Menu Items All:" + allMenuItemsDocuments);
            System.out.println(allMenuItemsDocuments.first().toJson());
            
            for (Document menuItemResult : allMenuItemsDocuments)
            {
                Gson gsonMapperToObject = new Gson();
                menuItem = gsonMapperToObject.fromJson(menuItemResult.toJson(), MenuItem.class);
                
                System.out.println(menuItemResult.toJson());
                
                // Try changing the id attribute with the substring from the JSON response
                String menuItemResultInJson = menuItemResult.toJson();
                String strippedOidFromJson = menuItemResultInJson.substring(18, 42);
                menuItem.setId(new ObjectId(strippedOidFromJson));              
                                
                menuItemsList.add(menuItem);
            }
            
        } catch (Exception e) {
            System.out.println("Could not get the user information " + e);
        }
        return menuItemsList;
    }
    
    @Override
    public MenuItem listMenuItem(String code){
        try {
            menuItemDBResult = database.getCollection("menuItems");   
            System.out.println("Got the menuitem collection");
            
            System.out.println(code);
                         
            Document menuItemSearched = menuItemDBResult.find(eq("code", code)).first();
            
            
            Gson gsonMapperToObject = new Gson();
            menuItem = gsonMapperToObject.fromJson(menuItemSearched.toJson(), MenuItem.class);
            

        } catch (Exception e) {
            System.out.println("Could not get the menuitem information " + e);
        }
        
        return menuItem;
    }

    @Override
    public boolean addMenuItem(MenuItem menuitem) {
        boolean inserted = false;
        
        ObjectId objectId = new ObjectId();
        // Add menuitem into DB
        try {
           
            InsertOneResult result = database.getCollection("menuItems").insertOne(
                    new Document().append("_id", objectId)
                    .append("status", menuitem.getStatus()) 
                    .append("code", menuitem.getCode())
                    .append("category", menuitem.getCategory())
                    .append("name", menuitem.getName())
                    .append("price", menuitem.getPrice().toString())
                    .append("paysTaxes", menuitem.getPaysTaxes()));                    
            
            System.out.println("Success! Inserted document id: " + result.getInsertedId());
            inserted = true;
        } catch (Exception e) {
            System.err.println("Error when inserting new MenuItem: " + e);
        }
        
        return inserted;
    }

    @Override
    public boolean updateMenuItem(MenuItem menuitem) {
        String code = menuitem.getCode();
        Gson gson = new Gson();
        System.out.println(gson.toJson(menuitem));
        System.out.println("Try to update");
        /* Code modified from MongoDB docs
            https://www.mongodb.com/docs/drivers/java/sync/current/usage-examples/updateOne/
        */
        try {
            // Send to DB
            
            Document query = new Document().append("code", code);
            
            Bson updates = Updates.combine(
                    Updates.set("status", menuitem.getStatus()),
                    Updates.set("category", menuitem.getCategory()),
                    Updates.set("name", menuitem.getName()),
                    Updates.set("price", menuitem.getPrice().toString()),
                    Updates.set("paysTaxes", menuitem.getPaysTaxes())
            );
            
            try {
                UpdateResult result = database.getCollection("menuItems").updateOne(query, updates);
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
    public boolean deleteMenuItem(String code) {
        boolean deleted = false;
        System.out.println("code of user too be deleted: " + code);
        Bson query = eq("code", code);
        
        try {
            DeleteResult result = database.getCollection("menuItems").deleteOne(query);
            System.out.println("Deleted document count: " + result.getDeletedCount());
            deleted = true;
        } catch (Exception e) {
            System.err.println("Error in deletion: " + e);
        }
        return deleted;
    }

    @Override
    public Pair menuItemExists(String menuitemname) {
        try {
            menuItemDBResult = database.getCollection("menuItems");
        } catch (Exception e) {
            System.out.println("Error when getting the users collection " + e);
        }
        
        Document menuItemSearched = menuItemDBResult.find(Filters.eq("menuitemname", menuitemname)).first();
        
        try {
            System.out.println("MenuItenmname from the Result: " + menuItemSearched.getString("menuitemname"));
            ObjectId menuItemSearchedObjectId = menuItemSearched.getObjectId("_id");
            System.out.println("ObjectId for MenuItem is: " + menuItemSearchedObjectId);
            
            // Create and return a tuple with the Boolean and the Id if it exists
            Pair<Boolean, ObjectId> answerAndObjectId;
            answerAndObjectId = Pair.with(true, menuItemSearchedObjectId);
            return answerAndObjectId;
        } catch (Exception e) {
            System.out.println("Error, probably no menuitem with that menuitamname: " + e);
            
            ObjectId empty = new ObjectId();
            Pair<Boolean, ObjectId> answerAndObjectId;
            answerAndObjectId = Pair.with(false, empty);
            
            return answerAndObjectId;
        }
    }
    
}
