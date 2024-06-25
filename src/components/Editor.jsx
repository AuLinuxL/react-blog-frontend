import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';

function Editor({value,setValue,colorMod}) {
    return (
      <div className="container">
        <MDEditor
          value={value}
          onChange={setValue}
          data-color-mode={colorMod}
        />
      </div>
    );
  }

export default Editor;
