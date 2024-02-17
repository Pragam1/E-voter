import React, { useRef, useCallback} from 'react';
import Webcam from 'react-webcam';

import Modal from './ui/Modal';

// const s3 = new AWS.S3({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION
// });

interface WebcamModalProps {
  capturedImage: string | null;
  setCapturedImage: React.Dispatch<React.SetStateAction<string | null>>;
}

const WebcamModal : React.FC<WebcamModalProps> = (props) => {
    const webcamRef = useRef(null);

    const capture = useCallback(() => {
        if (webcamRef.current) {
            const imageSrc = (webcamRef.current as Webcam).getScreenshot();
            props.setCapturedImage(imageSrc);
        }
    }, [props]);

//  try {
//       await s3.upload(params).promise();
//       console.log('Image uploaded successfully');
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

  return (
    <Modal id='capture_modal'>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <div className="modal-action">
        <form method="dialog" onSubmit={capture}>
          <button type='submit' className='btn btn-primary mt-4'>Capture</button>
        </form>
    </div>
    </Modal>
  );
};

export default WebcamModal;
