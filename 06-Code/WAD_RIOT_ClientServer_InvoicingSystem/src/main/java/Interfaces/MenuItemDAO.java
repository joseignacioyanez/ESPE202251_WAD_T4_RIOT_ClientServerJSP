/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package Interfaces;

import Model.MenuItem;
import java.util.ArrayList;
import org.bson.types.ObjectId;
import org.javatuples.Pair;

/**
 *
 * @author mishe
 */
public interface MenuItemDAO {
    public ArrayList<MenuItem> listMenuItems();
    public MenuItem listMenuItem(String code);
    public boolean addMenuItem(MenuItem menuitem);
    public boolean updateMenuItem(MenuItem menuitem);
    public boolean deleteMenuItem(String code);
    public Pair menuItemExists(String menuitemname);
    
}
