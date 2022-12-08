/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Model;

import at.favre.lib.crypto.bcrypt.BCrypt;

/**
 *
 * @author joseignacio
 */
public class TestBcrypt {
    
    public static void main(String[] args) {
        String password = "jiyf";
        
        String bcryptHashString = BCrypt.withDefaults().hashToString(12, password.toCharArray());
        
        System.out.println(bcryptHashString);
        
        BCrypt.Result result = BCrypt.verifyer().verify(password.toCharArray(), bcryptHashString);
        
        System.out.println(result);
        System.out.println(result.verified);
    }
}
