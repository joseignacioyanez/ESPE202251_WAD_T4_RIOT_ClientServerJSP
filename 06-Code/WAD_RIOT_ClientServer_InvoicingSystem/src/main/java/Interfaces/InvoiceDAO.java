package Interfaces;

import Model.Invoice;
import java.util.ArrayList;
import org.bson.types.ObjectId;

/**
 *
 * @author joseignacio
 */
public interface InvoiceDAO {
    public ArrayList<Invoice> listInvoices();
    public Invoice listInvoice(ObjectId id);
    public boolean addInvoice(Invoice invoice);
    public boolean emailInvoiceToClient(Invoice invoice);
}
