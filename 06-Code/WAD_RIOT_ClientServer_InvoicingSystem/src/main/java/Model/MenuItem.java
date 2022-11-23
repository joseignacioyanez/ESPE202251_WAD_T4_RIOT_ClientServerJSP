/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package menuitem;

/**
 *
 * @author robert
 */
public class MenuItem {
    private String id;
    private String type;
    private String name;
    private float price;
    private boolean paysTaxes;
 
public MenuItem() {
    
}
public MenuItem(String id, String type, String name, float price, boolean paysTaxes) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.price = price;
        this.paysTaxes = paysTaxes;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public void setprice(float price) {
        this.price = price;
    }

    public boolean getpaysTaxes() {
        return paysTaxes;
    }

    public void setpaysTaxes(boolean paysTaxes) {
        this.paysTaxes = paysTaxes;
    }
    
    
}
