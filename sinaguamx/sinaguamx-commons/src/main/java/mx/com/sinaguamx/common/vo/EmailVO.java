package mx.com.sinaguamx.common.vo;

import java.io.Serializable;
import java.util.Map;

@SuppressWarnings("serial")
public class EmailVO implements Serializable{
  private String from;
  private String[] to;
  private String[] bcc;
  private String[] cc;
  private String subject;
  private AttachImageVO[] images;
  private AttachmentVO[] attachments;
  private String template;
  private Map<String, Object> params;

  public String getFrom() {
    return from;
  }
  public void setFrom(String from) {
    this.from = from;
  }
  public String[] getTo() {
    return to;
  }
  public void setTo(String[] to) {
    this.to = to;
  }
  public String[] getBcc() {
    return bcc;
  }
  public void setBcc(String[] bcc) {
    this.bcc = bcc;
  }
  public String[] getCc() {
    return cc;
  }
  public void setCc(String[] cc) {
    this.cc = cc;
  }
  public String getSubject() {
    return subject;
  }
  public void setSubject(String subject) {
    this.subject = subject;
  }
  public AttachImageVO[] getImages() {
    return images;
  }
  public void setImages(AttachImageVO[] images) {
    this.images = images;
  }
  public AttachmentVO[] getAttachments() {
    return attachments;
  }
  public void setAttachments(AttachmentVO[] attachments) {
    this.attachments = attachments;
  }
  public String getTemplate() {
    return template;
  }
  public void setTemplate(String template) {
    this.template = template;
  }
  public Map<String, Object> getParams() {
    return params;
  }
  public void setParams(Map<String, Object> params) {
    this.params = params;
  }
}
