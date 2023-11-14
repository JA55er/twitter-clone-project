import { Storage } from '@google-cloud/storage';
import getTimestamp from '../utils/getTimestamp.mjs';
import config from '../utils/config.mjs';
import axios from 'axios';

const storage = new Storage();

const bucketName = config.BUCKET;

const bucket = storage.bucket(bucketName);

const uploadGoogleIcon = async (googleUser) => {
  const profilePictureUrl = googleUser.photos[0].value;

  const response = await axios({
    method: 'get',
    url: profilePictureUrl,
    responseType: 'stream',
  });
  const timestamp = getTimestamp();
  const file = bucket.file(
    `profile-pictures/${googleUser.name.givenName}${timestamp}.jpg`
  );

  response.data
    .pipe(
      file.createWriteStream({
        metadata: {
          contentType: 'image/jpeg',
        },
      })
    )
    .on('error', (err) => console.error(err))
    .on('finish', () => console.log('uploaded'));

  const imageURL = `https://storage.googleapis.com/twitter-6t.appspot.com/profile-pictures/${googleUser.name.givenName}${timestamp}.jpg`;

  return imageURL;
};

export default uploadGoogleIcon;
