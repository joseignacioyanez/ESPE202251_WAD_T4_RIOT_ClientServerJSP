/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Model;

import com.google.gson.Gson;
import org.bson.types.ObjectId;

/**
 *
 * @author joseignacio
 */
public class TestObjectId {
    public static void main(String[] args) {
        ObjectId objectId = new ObjectId("637ef7f774565d726b546f3c");
        Gson gson = new Gson();
        System.out.println(gson.toJson(objectId));
    }
}
