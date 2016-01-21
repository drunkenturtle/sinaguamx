package mx.com.sinaguamx.util;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

public class SpringApplicationContext implements ApplicationContextAware {

	private static ApplicationContext appContext;

	public SpringApplicationContext() {
	}

	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		appContext = applicationContext;
	}

	@SuppressWarnings("unchecked")
  public <T> T getBean(String beanName) {
		return (T) appContext.getBean(beanName);
	}

	public ApplicationContext getAppCtx(){
		return appContext;
	}

}
