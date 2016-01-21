package mx.com.sinaguamx.common.vo;

import java.io.Serializable;

@SuppressWarnings("serial")
public final class AttachmentVO implements Serializable {
  private String fileName;
  private byte[] file;
  private String contentType;

  public String getFileName() {
    return fileName;
  }
  public void setFileName(String fileName) {
    this.fileName = fileName;
  }
  public byte[] getFile() {
    return file;
  }
  public void setFile(byte[] file) {
    this.file = file;
  }
  public String getContentType() {
    return contentType;
  }
  public void setContentType(String contentType) {
    this.contentType = contentType;
  }
}
