package mx.com.sinaguamx.common;

import org.apache.commons.codec.binary.Base64;

public class FunUtil {
  private final static String VACIO = "";
  private final static Object[] ARRAY_VACIO = new Object[0];

  public static String notNull(String obj) {
    if(obj == null) {
      obj = VACIO;
    }
    
    return obj;
  }
  
  public static Object[] notNull(Object[] obj) {
    if(obj == null) {
      obj = ARRAY_VACIO;
    }
    
    return obj;
  }
  
  public static boolean isNullBlank(String obj) {
    boolean result = false;
    final String VACIO = ""; 
    
    if(obj == null || obj.trim().equals(VACIO)) {
      result = true;
    }
    
    return result;
  }
  
  public static byte[] uncode64(final String archivo64) {
    byte[] uncodeArchivo = null;
    Base64 base = null;
    String[] valores = null;
    
    if (!isNullBlank(archivo64) && archivo64.indexOf(',') != 1) {
      base = new Base64();
      valores = archivo64.split("\\,");
      
      if (valores.length == 2) {
        uncodeArchivo = base.decode(valores[1]);
      }
    }
      
    return uncodeArchivo;
  }
}
