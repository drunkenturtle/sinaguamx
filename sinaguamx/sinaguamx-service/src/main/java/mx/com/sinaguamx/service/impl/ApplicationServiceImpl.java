package mx.com.sinaguamx.service.impl;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;

import mx.com.sinaguamx.common.ApplicationException;
import mx.com.sinaguamx.service.ApplicationService;

@Service("ApplicationService")
public class ApplicationServiceImpl implements ApplicationService {
  private static final Logger LOG = LogManager.getLogger(ApplicationServiceImpl.class);

	@Override
	public String validaUsuario(String usuario, String password) throws ApplicationException {
		LOG.info("# validaUsuario #");
		return null;
	}
  
}
