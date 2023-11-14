import { Storage } from '@google-cloud/storage';
import getTimestamp from '../utils/getTimestamp.mjs';
import config from '../utils/config.mjs';

const storage = new Storage();

const bucketName = config.BUCKET;

const bucket = storage.bucket(bucketName);

const uploadImageToGoogle = async (file) => {
  let imageURL = null;
  // console.log('file: ', file);
  try {
    const timestamp = getTimestamp();
    const blob = bucket.file(`${timestamp}${file.originalname}`);
    console.log(blob);
    const blobStream = blob.createWriteStream({
      metadata: {
        contentType: 'image/jpeg',
      },
    });

    await new Promise((resolve, reject) => {
      blobStream.on('error', (err) => {
        console.error('Error uploading file !!', err);
        reject(err);
      });

      blobStream.on('finish', () => {
        console.log('file uploaded successfully !!');
        imageURL = `https://storage.googleapis.com/twitter-6t.appspot.com/${timestamp}${file.originalname}`;
        console.log(imageURL);
        resolve();
      });
      blobStream.end(file.buffer);
    });
    return imageURL;
  } catch (err) {
    console.log('error uploading file');
  }
};

export default uploadImageToGoogle;
