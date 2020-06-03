function gmailAutoarchive() {
  
  var delayMinutes = 15; // will only impact emails more than 15 minutes old
  var delayMilliseconds = delayMinutes * 60 * 1000;
  var maxTime = new Date().getTime() - delayMilliseconds;

  // Get first 100 threads from Inbox
  var threads = GmailApp.getInboxThreads(0, 100)
  
  // we archive all the threads older than the limit we set in delayMinutes
  for (var i = 0; i < threads.length; i++) {
    if (threads[i].getLastMessageDate().getTime() < maxTime)
    {
      threads[i].moveToArchive();
    }
  }
}
