package mx.com.sinaguamx.util;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class CorsFilter implements Filter {
	private final static Logger LOG = LogManager.getRootLogger();

	private FilterConfig filterConfig;

	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {

		HttpServletRequest httpRequest = (HttpServletRequest) request;
	  HttpServletResponse httpResponse = (HttpServletResponse) response;

		httpResponse.setHeader("Access-Control-Allow-Origin", "*");
		httpResponse.setHeader("Origin", "*");
		httpResponse.setHeader("Access-Control-Allow-Headers", "Origin, Access-Control-Allow-Origin, Content-Type, Accept, authorization, Cookies, token, withCredentials");
		httpResponse.setHeader("Access-Control-Allow-Credentials", "true");
		httpResponse.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
		httpResponse.setHeader("Access-Control-Max-Age", "1209600");

		chain.doFilter(request, response);
	}

	@Override
	public void destroy() {
		LOG.info("# destroy #");
	}

	@Override
	public void init(FilterConfig filterConfig) {
		 this.filterConfig = filterConfig;
	}

}
