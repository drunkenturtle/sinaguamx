package mx.com.sinaguamx.dao.model;

import java.io.Serializable;

@SuppressWarnings("serial")
public class UsuarioVO implements Serializable {

  private int idUsuario;
  private String nombre;
  private String usuario;
  private String jws;

  public int getIdUsuario() {
    return idUsuario;
  }
  public void setIdUsuario(int idUsuario) {
    this.idUsuario = idUsuario;
  }
  public String getNombre() {
    return nombre;
  }
  public void setNombre(String nombre) {
    this.nombre = nombre;
  }
  public String getUsuario() {
    return usuario;
  }
  public void setUsuario(String usuario) {
    this.usuario = usuario;
  }
	public String getJws() {
		return jws;
	}
	public void setJws(String jws) {
		this.jws = jws;
	}
  
}
