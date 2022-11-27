/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package Interfaces;

import Model.Client;
import java.util.ArrayList;

/**
 *
 * @author joseignacio
 */
public interface ClientDAO {
    public boolean clientExists(String id);
    public Client getClient(String id);
    public ArrayList<Client> listClients();
    public boolean addClient(Client client);
    public boolean updateClient(Client client);
}
