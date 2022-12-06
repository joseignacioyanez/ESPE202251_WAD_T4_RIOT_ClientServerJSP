package Model;

import java.math.BigDecimal;
import org.bson.types.ObjectId;

/**
 *
 * @author mishe
 */
public class MenuItem {
    private ObjectId _id;
    private String status;
    private String code;
    private String category;
    private String name;
    private BigDecimal price;
    private String paysTaxes;
 
    public MenuItem() {
    
    }

    public MenuItem(ObjectId _id, String status, String code, String category, String name, BigDecimal price, String paysTaxes) {
        this._id = _id;
        this.status = status;
        this.code = code;
        this.category = category;
        this.name = name;
        this.price = price;
        this.paysTaxes = paysTaxes;
    }

    public ObjectId getId() {
        return _id;
    }

    public void setId(ObjectId _id) {
        this._id = _id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getPaysTaxes() {
        return paysTaxes;
    }

    public void setPaysTaxes(String paysTaxes) {
        this.paysTaxes = paysTaxes;
    }  

  }