import {
  AccessToken,
  GraphRequest,
  GraphRequestManager
} from 'react-native-fbsdk';


// TODO - Maybe move the cosntants somewhere else?
export const READ_PERMISSIONS = [
  'email',
  'user_about_me',
  'user_birthday',
  'user_photos',
  'user_work_history'
]

const initGraphReq = function ( req ) {
  return new GraphRequestManager().addRequest(req).start();
};

export const fetchProfile = function () {
  return initGraphReq(new GraphRequest(
    '/me?fields=email,education,first_name,last_name,location,work,albums',
    null,
    function(error, result) {
      if (error) {
        throw new Error("Error fetching profile");
      }
      console.log('fetchProfile successfull: ', result);
    }
  ));
}

export const fetchProfilePhotos = function () {
}
