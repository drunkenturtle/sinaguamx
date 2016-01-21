package mx.com.sinaguamx.common;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessagePreparator;

public class EmailThread extends Thread {
  private static final Logger LOG = LogManager.getLogger(EmailThread.class);

  private JavaMailSender mailSender;
  private MimeMessagePreparator preparator;
  
  public EmailThread(JavaMailSender mailSender, MimeMessagePreparator preparator) {
    this.mailSender = mailSender;
    this.preparator = preparator;
  }
  
  public void run() {
    LOG.info("# run #");
    mailSender.send(preparator);
  }
}
