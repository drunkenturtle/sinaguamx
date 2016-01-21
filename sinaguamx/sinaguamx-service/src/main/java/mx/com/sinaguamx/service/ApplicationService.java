package mx.com.sinaguamx.service;

import mx.com.sinaguamx.common.ApplicationException;

public interface ApplicationService {
	String validaUsuario(String usuario, String password) throws ApplicationException;
}
