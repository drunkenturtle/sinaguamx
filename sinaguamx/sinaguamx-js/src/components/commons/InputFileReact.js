'use strict';

var React = require('react');

/* how to use
 *  <InputFileReact ref='dieta' name='fileName' label='*FileLabel:' maxSize='3000' extensions={['.png', '.gif', '.jpg']} />
 *
 */
var InputFileReact = React.createClass({displayName: "InputFileReact",
    getInitialState: function() {
      return {
        name: this.props.name,
        label: this.props.label,
        extensions: this.props.extensions,
        maxSize: this.props.maxSize,
        placeholder: this.props.placeholder,
        fileSelected: this.props.fileSelected,
        fileName: this.props.fileame,
        fileId: Number(this.props.fileId),
        isErrorState: false,
      };
    },
    getDefaultProps: function() {
      return {
        maxSize: 3000,
        extensions: ['.png', '.gif', '.jpg', '.png', '.jpeg', '.docx', '.xlsx'],
        label: '',
        name: '',
        placeholder: '',
        fileId: 0,
        fileName: '',
        inputFile: undefined,
        fileSelected: false
      };
    },
    componentWillMount: function() {
    },
    componentDidMount: function() {
    },
    componentWillReceiveProps: function(nextProps) {
      this.storage.inputFile = nextProps.inputFile;
      this.setState({
        name: nextProps.name,
        fileId: nextProps.fileId,
        fileName: nextProps.fileName,
        fileSelected: nextProps.fileSelected
      });
    },
    shouldComponentUpdate: function() {
      return true;
    },
    componentWillUpdate: function() {
    },
    componentDidUpdate: function() {
    },
    componentWillUnmount: function() {
    },
    storage: function() {
      return {
        inputFile: undefined
      };
    },
    getArchivo: function() {
      return this.storage.inputFile;
    },
    setErrorState: function(message) {
      console.log('Error-> ' + message);
      this.storage.inputFile = undefined;
      this.setState({
        isErrorState: true,
        fileSelected: false,
        fileName: ''
      });

      if(this.props.onFileSelected != undefined) {
        this.props.onFileSelected(this.state.fileId, '', false, this.storage.inputFile);
      }

      if(this.props.onErrorFileSelected != undefined) {
        this.props.onErrorFileSelected(this.state.fileId, message);
      }
    },
    setSuccessState: function(fileName) {
      this.setState({
        isErrorState: false,
        fileSelected: true,
        fileName: fileName
      });
    },
    setNoFileSelected: function() {
      this.storage.inputFile = undefined;
      this.setState({
        isErrorState: false,
        fileName: '',
        fileSelected: false
      });

      if(this.props.onFileSelected != undefined) {
        this.props.onFileSelected(this.state.fileId, '', false, this.storage.inputFile);
      }
    },
    clean: function() {
      this.storage.inputFile = undefined;
      this.setState({
        fileSelected: false,
        fileName: '',
        isErrorState: false,
      });
    },
    fileSelected: function() {
      return this.state.fileSelected;
    },
    handleFile: function(evt) {
      var self = this;
      var reader = new FileReader();
      var file = evt.target.files[0];
      var target = evt.target;
      var fileSize = 0;
      var endsWith = function(str, suffix) {
        str = str.toLowerCase();
        var okFileType = false;

        suffix.every(function(suff) {
          suff = suff.toLowerCase();
          okFileType = (str.indexOf(suff, str.length - suff.length) !== -1);

          if(okFileType) {
            return false;
          }

          return true;
        });

        return okFileType;
      };

      reader.onload = function(upload) {
        self.storage.inputFile = upload.target.result;
        if(self.props.onFileSelected != undefined) {
          self.props.onFileSelected(self.state.fileId, self.state.fileName, true, self.storage.inputFile);
        }
      }

      if (typeof file != 'undefined') {
        if(endsWith(file.name, this.state.extensions)) {
          fileSize = file.size /1024;

          if(fileSize <= this.state.maxSize) {
            reader.readAsDataURL(file);
            this.setSuccessState(file.name);

          } else {
            this.setErrorState('El archivo debe tener un tamaño máximo de' + this.state.maxSize + 'MB.');
          }

        } else {
          this.setErrorState('El archivo debe tener formato valido: ' + this.getValidFormats());
        }

      } else {
        this.setNoFileSelected();
      }
    },
    getValidFormats: function() {
      var fileExtensions = '';
      this.state.extensions.forEach(function(ext, index) {
        if(index == 0) {
          fileExtensions += ext;

        } else {
          fileExtensions += ', ' + ext;
        }
      });

      return fileExtensions;
    },
    onClickInputFile: function(evt) {
      evt.preventDefault();
      this.refs.inputFile.getDOMNode().click();
    },
    render: function() {
      var inputFile = undefined;
      var inputStyle = {};
      var fileExtensions = '';

      this.state.extensions.forEach(function(ext, index) {
        if(index == 0) {
          fileExtensions += ext;

        } else {
          fileExtensions += ', ' + ext;
        }
      });

      if(this.state.isErrorState) {
        inputStyle = {
          border: '1px solid',
          borderColor: 'red'
        };
      }

      if(this.state.fileSelected) {
        inputFile = (React.createElement("input", {ref: "inputFile", name: this.state.name, className: "fileInput", type: "file", onChange: this.handleFile, accept: fileExtensions}));

      } else {
        inputFile = (React.createElement("input", {ref: "inputFile", name: this.state.name, className: "fileInput", type: "file", onChange: this.handleFile, accept: fileExtensions, value: ""}));
      }

      return (
        React.createElement("div", {className: "inputFileReact"}, 
          React.createElement("div", {className: "fileInputGroup"}, 
            React.createElement("input", {className: "fileTextInput", style: inputStyle, type: "text", value: this.state.fileName, placeholder: this.state.placeholder, readOnly: true}), 
            React.createElement("div", {className: "fileInputWraper"}, 
              React.createElement("label", {htmlFor: this.state.name, className: "customFileUpload"}, 
                React.createElement("a", {href: "#", className: "inputIconFind", onClick: this.onClickInputFile})
              ), 
              inputFile
            )
          )
        )
      );
    }
});

module.exports = InputFileReact;
