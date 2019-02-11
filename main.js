function imgeSuccess(response) {
    // eslint-disable-next-line no-console
    console.log(response.data.urls.regular);
    $('body').css('background-image', 'url("' +response.data.urls.regular+ '")');
  }
  function imgeFail(error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
  // eslint-disable-next-line no-undef
  axios({
    method: 'get',
    url: 'https://api.unsplash.com/photos/random?client_id=07c8a0b33d6be48b90b8f862c1ce32bc12e8b0e85a35c01f20d510275ea35a22',
  })
    .then(imgeSuccess)
    .catch(imgeFail);