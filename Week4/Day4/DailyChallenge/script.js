class Video {
    constructor(title, uploader, time) {
      this.videoTitle = title;
      this.videoUploader = uploader;
      this.videoTime = time;
      this.watch = function (movie) {
        console.log(
          `${this.videoUploader} watched all ${this.videoTime} of ${this.videoTitle}`
        );
        return movie;
      };
    }
  }
  
  let javaScript = new Video("JavaScript Basics", "Andrei", "3 hours and 29 minutes");
   javaScript.watch();
  