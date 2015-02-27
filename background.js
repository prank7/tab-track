// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   // No tabs or host permissions needed!
//   console.log('Turning  rede!');
//   // var x = chrome.extension.getBackgroundPage();
//   // x.document.body.innerHTML = "Should be somehting";
//   // console.log(x.document.body.innerHTML);
  
//   //Get current Tab UrL
// //   chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
// //     console.log(tabs[0].url);
// // });
//   console.log(tab.url+"rocks");



//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="red"'
//   });
// });

localStorage.setItem("daily-goals","{}");