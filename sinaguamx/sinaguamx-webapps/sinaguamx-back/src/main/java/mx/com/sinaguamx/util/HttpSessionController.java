package mx.com.sinaguamx.util;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

public class HttpSessionController implements HttpSessionListener {
//  private final static Logger LOG = LogManager.getLogger(HttpSessionController.class);
  private static final Map<String, HttpSession> sessions = new HashMap<String, HttpSession>();

  @Override
  public void sessionCreated(HttpSessionEvent event) {
    HttpSession session = event.getSession();
    sessions.put(session.getId(), session);
  }

  @Override
  public void sessionDestroyed(HttpSessionEvent event) {
    sessions.remove(event.getSession().getId());
  }

  public static HttpSession find(String sessionId) {
    return sessions.get(sessionId);
  }

}
