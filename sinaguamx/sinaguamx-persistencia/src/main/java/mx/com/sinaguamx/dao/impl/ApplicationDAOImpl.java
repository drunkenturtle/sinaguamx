package mx.com.sinaguamx.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import mx.com.sinaguamx.dao.ApplicationDAO;
import mx.com.sinaguamx.dao.model.ParametroVO;
import mx.com.sinaguamx.dao.row.ApplicationRow;
import mx.com.sinaguamx.dao.util.PersistenceDAO;
import mx.com.sinaguamx.dao.util.QueryParameters;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

@Repository("MyTDAO")
public class ApplicationDAOImpl extends PersistenceDAO implements ApplicationDAO {
  private static final Logger LOG = LogManager.getLogger(ApplicationDAOImpl.class);
  private QueryParameters queryParameters;

  public QueryParameters getQueryParameters() {
    return queryParameters;
  }

  public void setQueryParameters(QueryParameters queryParameters) {
    this.queryParameters = queryParameters;
  }

  @SuppressWarnings("unchecked")
  @Override
  public List<ParametroVO> getParametros() {
    LOG.info("# getParametros #");
    List<Object> parameters = null;
    StringBuilder query = null;

    query = new StringBuilder();
    parameters = new ArrayList<Object>();

    query.append(getQueries().getProperty("GET_PARAMETROS"));

    ApplicationRow daoRow = new ApplicationRow(ApplicationRow.Opcion.PARAMETRO);
    return getJdbcTemplate().query(query.toString(), daoRow, parameters.toArray());
  }
}
