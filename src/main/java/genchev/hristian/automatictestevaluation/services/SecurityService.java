package genchev.hristian.automatictestevaluation.services;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class SecurityService {

    public String encryptPassword(String password) {
        /*
        * The next part of code is taken from: https://stackoverflow.com/questions/415953/how-can-i-generate-an-md5-hash
        * */
        String encrypted = null;
        try {
            byte[] bytesOfMessage = password.getBytes("UTF-8");
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] thedigest = md.digest(bytesOfMessage);
            BigInteger bi = new BigInteger(1, thedigest);
            encrypted = bi.toString(16);
        } catch (UnsupportedEncodingException ex) {
            Logger.getLogger(SecurityService.class.getName()).log(Level.SEVERE, null, ex);
        } catch (NoSuchAlgorithmException ex) {
            Logger.getLogger(SecurityService.class.getName()).log(Level.SEVERE, null, ex);
        }

        return encrypted;
    }
}
