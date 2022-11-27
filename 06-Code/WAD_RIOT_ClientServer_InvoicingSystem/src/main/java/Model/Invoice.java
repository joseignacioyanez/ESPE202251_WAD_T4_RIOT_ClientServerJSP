/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import java.math.BigDecimal;
import java.time.LocalDate;
import org.bson.types.ObjectId;

/**
 *
 * @author robert
 */
public class Invoice {

    
    private ObjectId _id;
    private LocalDate invoiceDate;
    private int invoiceNumber;
    private String clientlDCard;
    private boolean orderToGo;
    private String clientName;
    private String clientEmail;
    private BigDecimal subtotalInvoice;
    private BigDecimal totalTaxesInvoice;
    private BigDecimal totalInvoice;
    private String paymentMethod;
    private String paymentState;
    private InvoiceItem invoicelItems;
 
    public Invoice() {
    }
    
    public Invoice(ObjectId id,LocalDate invoiceDate, int invoiceNumber, String clientlDCard, boolean orderToGo, String clientName, String clientEmail,BigDecimal subtotalInvoice,BigDecimal totalTaxesInvoice, BigDecimal totalInvoice, String paymentMethod, InvoiceItem invoicelItems) {
        this._id = id;
        this.invoiceDate = invoiceDate;
        this.invoiceNumber = invoiceNumber;
        this.clientlDCard = clientlDCard;
        this.orderToGo = orderToGo;
        this.clientName = clientName;
        this.clientEmail = clientEmail;
        this.subtotalInvoice = subtotalInvoice;
        this.totalTaxesInvoice = totalTaxesInvoice;
        this.totalInvoice = totalInvoice;
        this.paymentMethod = paymentMethod;
        this.invoicelItems = invoicelItems;
    }

    public ObjectId getId() {
        return _id;
    }

    public void setId(ObjectId id) {
        this._id = id;
    }

    public LocalDate getinvoiceDate() {
        return invoiceDate;
    }

    public void setinvoiceDate(LocalDate invoiceDate) {
        this.invoiceDate = invoiceDate;
    }

    public int getinvoiceNumber() {
        return invoiceNumber;
    }

    public void setinvoiceNumber(int invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
    }

    public String  getclientlDCard() {
        return clientlDCard;
    }

    public void setclientlDCard(String clientlDCard) {
        this.clientlDCard = clientlDCard;
    }

    public boolean getorderToGo() {
        return orderToGo;
    }

    public void setorderToGo(boolean orderToGo) {
        this.orderToGo = orderToGo;
    } 
    public String getclientName() {
        return clientName;
    }

    public void setclientName(String clientName) {
        this.clientName = clientName;
    }
    
    public String getclientEmail() {
        return clientEmail;
    }

    public void setclientEmail(String clientEmail) {
        this.clientEmail = clientEmail;
    }
    public BigDecimal getsubtotalInvoice() {
        return subtotalInvoice;
    }

    public void setsubtotalInvoice(BigDecimal subtotalInvoice) {
        this.subtotalInvoice = subtotalInvoice;
    }
    public String getpaymentMethod() {
        return paymentMethod;
    }

    public void setpaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
    
    public InvoiceItem getinvoicelItems() {
        return invoicelItems;
    }

    public void setinvoicelItems(InvoiceItem invoicelItems) {
        this.invoicelItems = invoicelItems;
    }
    public BigDecimal gettotalTaxesInvoice() {
        return totalTaxesInvoice;
    }

    public void settotalTaxesInvoice(BigDecimal totalTaxesInvoice) {
        this.totalTaxesInvoice = totalTaxesInvoice;
    }
    public BigDecimal gettotalInvoice() {
        return totalInvoice;
    }

    public void settotalInvoice(BigDecimal totalInvoice) {
        this.totalInvoice = totalInvoice;
    }
    public String getPaymentState() {
        return paymentState;
    }

    public void setPaymentState(String paymentState) {
        this.paymentState = paymentState;
    }

    
    /*
        Nested class to store each item details in the Invoice
        We used this structure to make ORM, to map exactly to the structure that is on the MongoDB
        
        We have some duplicated attributes in the collections, but we followed the MongoDB principle
        of keeping togther all the data that is gonna be used together.
    
        Also, Invoices aren't neede t change, they get created and Archived
    */
    public class InvoiceItem{
        private ObjectId menuItemld;
        private String menuItemName;
        private BigDecimal individualPrice;
        private int quantity;
        private BigDecimal subtotal;
        private boolean paysTaxes;
    
 
        public InvoiceItem() {  
        }

        public InvoiceItem(ObjectId menuItemld, String menuItemName,BigDecimal individualPrice,int quantity, BigDecimal subtotal, boolean paysTaxes ) {
            this.menuItemld = menuItemld;
            this.menuItemName = menuItemName;
            this.individualPrice= individualPrice;
            this.quantity = quantity;
            this.subtotal = subtotal;
            this.paysTaxes = paysTaxes;
        }

        public ObjectId  getmenuItemld() {
            return menuItemld;
        }

        public void setmenuItemld(ObjectId menuItemld) {
            this.menuItemld = menuItemld;
        }

        public String getmenuItemName() {
            return menuItemName;
        }

        public void setmenuItemName(String menuItemName) {
            this.menuItemName = menuItemName;
        }

        public BigDecimal getindividualPrice() {
            return individualPrice;
        }

        public void setindividualPrice(BigDecimal individualPrice) {
            this.individualPrice= individualPrice;
        }

        public int  getquantity() {
            return quantity;
        }

        public void setquantity(int quantity) {
            this.quantity = quantity;
        }

        public BigDecimal getsubtotal() {
            return subtotal;
        }

        public void setsubtotal(BigDecimal subtotal) {
            this.subtotal = subtotal;
        } 
        public boolean getpaysTaxes() {
            return paysTaxes;
        }

        public void setpaysTaxes(boolean paysTaxes) {
            this.paysTaxes = paysTaxes;
        }
    
        
    }
  
}

   
    
