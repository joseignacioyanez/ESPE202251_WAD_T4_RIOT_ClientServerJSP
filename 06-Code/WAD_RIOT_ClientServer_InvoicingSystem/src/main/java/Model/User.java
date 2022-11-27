package Model;

import org.bson.types.ObjectId;

/**
 *
 * @author joseignacio
 */
public class User {
    private ObjectId _id;
    private String oidString;
    private String fullName;
    private String email;
    private String username;
    private String passwordHash;
    private String type; //admin or cashier

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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getOidString() {
        return oidString;
    }

    public void setOidString(String oidString) {
        this.oidString = oidString;
    }
    
    
    
}
