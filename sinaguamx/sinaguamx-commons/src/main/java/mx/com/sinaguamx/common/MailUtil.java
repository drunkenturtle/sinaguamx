package mx.com.sinaguamx.common;

import java.util.Date;

import javax.mail.internet.MimeMessage;

import mx.com.sinaguamx.common.vo.AttachImageVO;
import mx.com.sinaguamx.common.vo.AttachmentVO;
import mx.com.sinaguamx.common.vo.EmailVO;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.velocity.app.VelocityEngine;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.ui.velocity.VelocityEngineUtils;

public class MailUtil {
  private static final Logger LOG = LogManager.getLogger(MailUtil.class);
  private JavaMailSender mailSender;
  private VelocityEngine velocityEngine;
  
  public void sendMail(final EmailVO emailVO) {
    LOG.info("# sendMail #");
    EmailThread emailThread = null;
    MimeMessagePreparator preparator = new MimeMessagePreparator() {
        public void prepare(MimeMessage mimeMessage) throws Exception {
           int i = 0;
           String[] toTmp = null;
           String[] bccTmp = null;
           AttachmentVO[] attachmentsTmp = null;
           AttachImageVO[] attachImagesTmp = null; 
           MimeMessageHelper message = null;
           
           message = new MimeMessageHelper(mimeMessage, true);
           
           toTmp = emailVO.getTo();
           if(toTmp != null) {
             String[] emailsTo = new String[toTmp.length]; 
             for(i = 0; i < toTmp.length; i++) {
               emailsTo[i] = toTmp[i]; 
             }
             
             message.setTo(emailsTo);
           }
           
           bccTmp = emailVO.getBcc();
           if(bccTmp != null) {
             String[] emailsBcc = new String[bccTmp.length]; 
             for(i = 0; i < bccTmp.length; i++) {
               emailsBcc[i] = bccTmp[i]; 
             }
             
             message.setBcc(emailsBcc);
           }
           
           attachmentsTmp = emailVO.getAttachments(); 
           if(attachmentsTmp != null) {
             AttachmentVO attachment = null;
             for(i = 0; i < attachmentsTmp.length; i++) {
               attachment = attachmentsTmp[i];
               message.addAttachment(attachment.getFileName(), new ByteArrayResource(attachment.getFile()) , attachment.getContentType());
             }
           }
           
           message.setFrom(emailVO.getFrom());
           message.setSubject(emailVO.getSubject());
           message.setSentDate(new Date());
           
           String text = VelocityEngineUtils.mergeTemplateIntoString(velocityEngine, emailVO.getTemplate(), "UTF-8", emailVO.getParams());
           message.setText(text, true);
           
           attachImagesTmp = emailVO.getImages();
           if(attachImagesTmp != null) {
             AttachImageVO attachImage = null;
             for(i = 0; i < attachImagesTmp.length; i++) {
               attachImage = attachImagesTmp[i];
               message.addInline(attachImage.getIdImage(), new ClassPathResource(attachImage.getResource()));
             }
           }
        }
     };
     //mailSender.send(preparator);
     emailThread = new EmailThread(mailSender, preparator);
     emailThread.start();
  }
  
  public void setMailSender(JavaMailSender mailSender) {
    this.mailSender = mailSender;
  }
  public void setVelocityEngine(VelocityEngine velocityEngine) {
    this.velocityEngine = velocityEngine;
  }
}
