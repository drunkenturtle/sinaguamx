package mx.com.sinaguamx.dao.row;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

@SuppressWarnings("rawtypes")
public class ApplicationRow implements RowMapper {

  public enum Opcion {
    PARAMETRO
  };

  private Opcion opcion;

  public ApplicationRow(Opcion opcion) {
    this.opcion = opcion;
  }

  @Override
  public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
    Object returnObject = null;

    switch(this.opcion) {
      case PARAMETRO:

      break;
    }

    return returnObject;
  }
}
