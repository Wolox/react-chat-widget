import React, { useEffect } from 'react';

import { useUploadFiles } from './hooks';
const send = require('../../../../../../../assets/clip.svg') as string;
import './style.scss';

type Props = {
  onClick: (e: any) => void;
};

export const FileUpload: React.FC<Props> = ({ onClick }) => {
  const [files, selectFiles,] = useUploadFiles();
  
  useEffect(() => {
    if (files.length) {
      onClick(files);
    }
  }, [files]);
  
  return (
    <div className="image-upload">
      <label htmlFor="upload-photo">
        <img src={send} />
      </label>
      <input accept="image/*" onChange={selectFiles} type="file" multiple name="photo" id="upload-photo" />
    </div>
  );
};
