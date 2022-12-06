package Interfaces;

import Model.User;
import java.util.ArrayList;
import org.bson.types.ObjectId;
import org.javatuples.Pair;

/**
 *
 * @author joseignacio
 */
public interface UserDAO {
    public ArrayList<User> listUsers();
    public User listUser(ObjectId id);
    public User listUser(String username);
    public boolean addUser(User user);
    public boolean updateUser(User user);
    public boolean deleteUser(String oid);
    /* Business Rules - To secure the access to the system,
    no password will be saved as text but as the hash of a password.
    This hash will be verified with the hash of the opassword a user enters at Login */
    public String hashPassword(String password);
    public boolean passwordIsValid(ObjectId userObjectId, String password);   
    
    public Pair userExists(String username);
}
