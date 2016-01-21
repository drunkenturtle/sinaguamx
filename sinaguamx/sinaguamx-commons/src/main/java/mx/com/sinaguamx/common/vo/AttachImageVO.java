package mx.com.sinaguamx.common.vo;

import java.io.Serializable;

@SuppressWarnings("serial")
public class AttachImageVO implements Serializable {

  private String idImage;
  private String resource;

  public String getIdImage() {
    return idImage;
  }
  public void setIdImage(String idImage) {
    this.idImage = idImage;
  }
  public String getResource() {
    return resource;
  }
  public void setResource(String resource) {
    this.resource = resource;
  }
}
