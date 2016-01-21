package mx.com.sinaguamx.service.impl;

import java.util.Calendar;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {
                      "classpath:mx/com/sinaguamx/dao/xml/*.xml",
                      "classpath*:/CommonsAppCtx.xml",
                      "classpath*:/PersistenciaAppCtx.xml",
                      "classpath*:/ServiceAppCtx.xml"})
public class DemoServiceImplTest {
  private static final Logger LOG = LogManager.getLogger(DemoServiceImplTest.class);

  @Ignore
  @Test
  public void test_metodo_servicio(){
    LOG.info("# test_metodo_servicio #");

    try {

    } catch(Exception e) {
      LOG.error(e.getMessage(), e);
    }
  }
}
