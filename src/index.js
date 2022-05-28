import "./reset.css";
import "./style.css";

// --------------------------------- TEXT EDITOR
tinymce.init({
  selector: '.form-wysiwyg__editor',
  menubar: false,
  statusbar: false,
  plugins: 'lists',
  toolbar: 'bold italic underline bullist alignjustify alignleft alignright forecolor',
  icons: 'material',
  min_height: 150,
  height: '100%',
});
