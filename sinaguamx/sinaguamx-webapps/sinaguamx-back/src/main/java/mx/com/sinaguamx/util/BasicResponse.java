package mx.com.sinaguamx.util;

import java.io.Serializable;

@SuppressWarnings("serial")
public class BasicResponse implements Serializable {
  private int code;
  private String message;
  private Object payload;

  public BasicResponse() {
    this.code = 0;
    this.message = "";
    this.payload = null;
  }

  public int getCode() {
    return code;
  }
  public void setCode(int code) {
    this.code = code;
  }
  public String getMessage() {
    return message;
  }
  public void setMessage(String message) {
    this.message = message;
  }
  public Object getPayload() {
	return payload;
  }
	
  public void setPayload(Object payload) {
	  this.payload = payload;
  }
  
}
