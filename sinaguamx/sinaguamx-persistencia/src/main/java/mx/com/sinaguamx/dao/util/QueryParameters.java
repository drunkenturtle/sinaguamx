package mx.com.sinaguamx.dao.util;

import java.util.Properties;

public class QueryParameters {

  private String select;
  private String from;
  private String where;
  private Properties options;

  public String getSelect() {
    return select;
  }
  public void setSelect(String select) {
    this.select = select;
  }
  public String getFrom() {
    return from;
  }
  public void setFrom(String from) {
    this.from = from;
  }
  public String getWhere() {
    return where;
  }
  public void setWhere(String where) {
    this.where = where;
  }
  public Properties getOptions() {
    return options;
  }
  public void setOptions(Properties options) {
    this.options = options;
  }
}
