package mx.com.sinaguamx.rs;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import mx.com.sinaguamx.common.ApplicationException;
import mx.com.sinaguamx.req.LoginReq;
import mx.com.sinaguamx.res.LoginRes;
import mx.com.sinaguamx.service.ApplicationService;
import mx.com.sinaguamx.util.BasicResponse;
import mx.com.sinaguamx.util.GeneralResource;

@Path("/sinaguamx/login")
@Produces({MediaType.APPLICATION_JSON})
@Consumes({MediaType.APPLICATION_JSON})
public class AppLoginResource extends GeneralResource {
  private static final Logger LOG = LogManager.getLogger(AppLoginResource.class);
  private ApplicationService applicationService = getBean("ApplicationService");

  @POST
  public Response login(LoginReq request, @Context HttpServletRequest req){
    LOG.info("# login #");
    BasicResponse response = null;
    String jws = null;

    try {
    	response = new LoginRes();
      jws = applicationService.validaUsuario(request.getNombre(), request.getPassword());
      response.setPayload(jws);
      response.setCode(Status.OK.getStatusCode());
      response.setMessage(Status.OK.toString());

    } catch(ApplicationException e) {
      LOG.error(e.getCodeMessage(), e);
      response.setCode(e.getErrorCode());
      response.setMessage(e.getCodeMessage());

    } catch(Exception e) {
      LOG.error(e.getMessage(), e);
      response.setCode(Status.INTERNAL_SERVER_ERROR.getStatusCode());
      response.setMessage(Status.INTERNAL_SERVER_ERROR.getReasonPhrase());
    }

    return Response.status(Status.OK).entity(response).build();
  }
}
