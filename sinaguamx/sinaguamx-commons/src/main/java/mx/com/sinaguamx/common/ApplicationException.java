package mx.com.sinaguamx.common;

@SuppressWarnings("serial")
public class ApplicationException extends Exception {
    private AppError error;
    private String codeMessage;
    
    public ApplicationException(AppError error) {
      super();
      this.error = error;
      this.codeMessage = null;
    }

    public int getErrorCode() {
      return this.error.getErrorCode();
    }
    
    public String getCodeMessage() {
      if(this.codeMessage == null) {
        this.codeMessage = this.error.getMessageCode();
      }
      
      return this.codeMessage;
    }

    public AppError getError() {
      return error;
    }
}
