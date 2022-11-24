/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import org.bson.types.ObjectId;

/**
 *
 * @author robert
 */
public class MenuItem {
    private ObjectId _id;
    private String type;
    private String name;
    private float price;
    private boolean paysTaxes;
 
public MenuItem() {
    
}
public MenuItem(ObjectId id, String type, String name, float price, boolean paysTaxes) {
        this._id = id;
        this.type = type;
        this.name = name;
        this.price = price;
        this.paysTaxes = paysTaxes;
    }

    public ObjectId getId() {
        return _id;
    }

    public void setId(ObjectId id) {
        this._id = id;
    }

    public String gettype() {
        return type;
    }

    public void settype(String type) {
        this.type = type;
    }

    public String getname() {
        return name;
    }

    public void setname(String name) {
        this.name = name;
    }

    public float getprice() {
        return price;
    }

    public void setTelefono(float price) {
        this.price = price;
    }

    public boolean getpaysTaxes() {
        return paysTaxes;
    }

    public void setDireccion(boolean paysTaxes) {
        this.paysTaxes = paysTaxes;
    }
    
    
}
