package mx.com.sinaguamx.common;

import java.util.ResourceBundle;

public enum AppError {
  ERROR_501(501),
  ERROR_502(502),
  ERROR_503(503);
  
  private final int errorCode;
  private String codeMessage;

  private AppError(int errorCode) {
    this.errorCode = errorCode;
    this.codeMessage = null;
  }

  public int getErrorCode() {
    return errorCode;
  }      
  
  public String getMessageCode() {
    ResourceBundle messages = null;
    
    if(this.codeMessage == null) {
      messages = ResourceBundle.getBundle("message");
      this.codeMessage = messages.getString("ERROR_" + this.errorCode);
    }
    
    return this.codeMessage;
  }
}
