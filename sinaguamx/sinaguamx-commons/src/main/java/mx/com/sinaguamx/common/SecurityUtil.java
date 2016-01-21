package mx.com.sinaguamx.common;

import java.security.Key;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

public class SecurityUtil {
  //private String ALGO = "AES";
  //private byte[] keyValue = new byte[] { 'M', 'Y', 'T', 'M', 'u', 'S', 'e', 'O', 'M', 'e', 'M','o', 'R', 'i', 'A', 'T' };

  private String cipherType;
  private byte[] keyValue;
  
  public String encrypt(String Data) throws Exception {
    Key key = generateKey();
    Cipher c = Cipher.getInstance(cipherType);
    c.init(Cipher.ENCRYPT_MODE, key);
    byte[] encVal = c.doFinal(Data.getBytes());
    String encryptedValue = new BASE64Encoder().encode(encVal);
    return encryptedValue;
  }
  
  public String decrypt(String encryptedData) throws Exception {
    Key key = generateKey();
    Cipher c = Cipher.getInstance(cipherType);
    c.init(Cipher.DECRYPT_MODE, key);
    byte[] decordedValue = new BASE64Decoder().decodeBuffer(encryptedData);
    byte[] decValue = c.doFinal(decordedValue);
    String decryptedValue = new String(decValue);
    return decryptedValue;
  }
  
  private Key generateKey() throws Exception {
    Key key = new SecretKeySpec(keyValue, cipherType);
    return key;
  }

  public void setCipherType(String cipherType) {
    this.cipherType = cipherType;
  }

  public void setKeyValue(byte[] keyValue) {
    this.keyValue = keyValue;
  }
  
}
