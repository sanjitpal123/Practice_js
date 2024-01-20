// //Write three dummy functions with using   only promises  All three functions are dummy, you dont need actual implementation. These dummy functions are to just represent a delay.

// Write a function to download data from a url
// Write a function to save that downloaded data in a file and return the filename
// Write a function to upload the file written in previous step to a newurl

// THe download should take say 4sec delay, filewrite should take 2sec delay, upload should take 3sec delay
// Write the above callbacks and use them in a manner that first download happens then writefile happens and then upload happens

function downloader(Url) {
  console.log("Started  downloading from ", Url);
  return new Promise((res, rej) => {
    setTimeout(function timer() {
      if (Url) {
        res(Url);
      }
      else {
        rej(Url);
      }

    }, 4000);

  })
}

function writeFile(data) {
  return new Promise((res, rej) => {
    console.log("Started Writing data");
    let filename = 'dummy.txt';
    setTimeout(function timer() {
      if (data) {

        res(filename);

      }
      else {

        rej(filename);
      }
    }, 2000);
  });

}

function uploadFile(filename, newUrl) {
  return new Promise((res, rej) => {
    console.log("Started uploading file", filename, "on the url", newUrl);
    setTimeout(function timer() {
      if (newUrl) {
        res(" Uploaded is Success");
      }
      else {
        rej(" Uploaded is Rejected");
      }

    }, 3000);
  })
}

// It is .then() function downloader
const DownloaderResponse = downloader("http/www.com");
DownloaderResponse.then(function fullfillhander(result) {
  console.log("Download is completed from", result);
}, function onrejectedhandler(result) {
  console.log("Download is rejected from ", result);
});

let UploadedResponse;
const FilenameResponse = writeFile("xyz");
// It is .then () of  writeFile
FilenameResponse.then(function onfullfillmenthandler(result) {


  console.log("File name is :", result);
  // here we are call upload file function and passing parameter current filename and newurl
  UploadedResponse = uploadFile(result, "htp/ww.com");
  // below lines /codes are .then() function  uploadfile 
  UploadedResponse.then(function onfullfillmenthandler(result) {
    console.log(result);
  }, function onrejectedhandler(result) {
    console.log(result);
  })


}, function onrejectedhandler(result) {
  console.log("Did not found filename", result);
  UploadedResponse = uploadFile(result, "htp/ww.com");

});







