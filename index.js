document.querySelector(".msg").style.display = "none";
document.querySelector(".tick").style.display = "none";

document.querySelector(".btn").addEventListener("click", function() {
  document.querySelector(".tick").style.display = "block";
  document.querySelector(".msg").style.display = "block";
  document.querySelector(".msg").innerHTML = "YOUR TIMER IS SET FOR " + document.querySelector(".in").value + " min";

  var time = document.querySelector(".in").value;
  var HalfTime = ((time * 60) * 1000)/2;
  var FullTime=((time * 60) * 1000);

 
  

  // chrome.storage.sync.set({ HalfTime }, () => {
  //   console.log(`ht has been saved in storage!`);
  // });

  // chrome.storage.sync.set({ FullTime }, () => {
  //   console.log(`ft has been saved in storage!`);
  // });

  setTimeout(function(){
    confirm("Half time has been completed");
  }, HalfTime);
  setTimeout(function(){
    confirm("Time is completed!!");
}, FullTime);
});


  // chrome.runtime.onInstalled.addListener(function () {
  //   setTimeout(function(){
  //     confirm("Half time has been completed");
  //   }, HalfTime);
  //   setTimeout(function(){
  //     confirm("Time is completed!!");
  // }, FullTime);
  // });
  // });
  
//   setTimeout(function(){
//     confirm("Half time has been completed");
//   }, HalfTime);
//   setTimeout(function(){
//     confirm("Time is completed!!");
// }, FullTime);

