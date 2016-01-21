package mx.com.sinaguamx.util;

import java.io.Serializable;

@SuppressWarnings("serial")
public class BasicRequest implements Serializable {
	private String jws;

	public String getJws() {
		return jws;
	}

	public void setJws(String jws) {
		this.jws = jws;
	}
	
}
