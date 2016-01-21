package mx.com.sinaguamx.util;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import mx.com.sinaguamx.common.AppError;
import com.google.gson.Gson;

public class AuthenticationFilter implements Filter {
  private final static Logger LOG = LogManager.getLogger(AuthenticationFilter.class);

  private ServletContext context;

  @Override
  public void destroy() {
  }

  @Override
  public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
    HttpServletRequest req = (HttpServletRequest) request;
    String jws = null;
    String uri = req.getRequestURI();
    Gson gson = new Gson();
    BasicResponse basicResponse = null;

    jws = req.getHeader("jws");
    LOG.info("uri-> " + uri);

    if(jws == null) {
    	//TODO validar JWS Json Web Signature
      basicResponse = new BasicResponse();
      basicResponse.setCode(AppError.ERROR_503.getErrorCode());
      basicResponse.setMessage(AppError.ERROR_503.getMessageCode());

      response.setContentType("application/json");
      PrintWriter out = response.getWriter();
      out.print(gson.toJson(basicResponse));
      out.flush();

    } else {
      chain.doFilter(request, response);
    }
  }

  @Override
  public void init(FilterConfig fConfig) throws ServletException {
    this.context = fConfig.getServletContext();
    this.context.log("AuthenticationFilter initialized");
  }

}
