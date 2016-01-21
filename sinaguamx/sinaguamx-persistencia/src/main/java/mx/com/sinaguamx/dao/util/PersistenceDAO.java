package mx.com.sinaguamx.dao.util;

import java.util.Properties;
import org.springframework.jdbc.core.support.JdbcDaoSupport;

public class PersistenceDAO extends JdbcDaoSupport {

  private Properties queries;

  public Properties getQueries() {
    return queries;
  }

  public void setQueries(Properties queries) {
    this.queries = queries;
  }

}
