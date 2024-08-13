import { useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImagePreview);

function FileUploadComponent() {
  const [files] = useState([]);

  return (
    <div>
      <FilePond
        files={files}
        allowMultiple={true}
        maxFiles={3}
        server="/api/upload"
        name="files"
        labelIdle='Arrastra y suelta tus archivos o <span class="filepond--label-action"> Examinar </span>'
      />
    </div>
  );
}

export default FileUploadComponent;
