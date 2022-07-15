


// ----------------
// PUSHED 5/24/2022

// ADD TO: CytoscapeSystem.js
// let cyrunning;
// let cybadgeKey;
// let cybadgeVal;
// let cybadgeElm;
// let cyversion;

// async function cyBadge(baseUrl = defaultBaseUrl) {
// if (inCyBrowser){
//     console.log('cytoscape is running and CyBrowser detected');
//     cybadgeElm = document.getElementsByClassName('cytoscape-badge');
//     //just in case there is more than on badge on a page
//     for(let i = 0; i < cybadgeElm.length; i++) {
//         cybadgeKey = document.createElement('span');
//         cybadgeKey.className = 'cybadgekey';
//         cybadgeKey.innerHTML = 'cybrowser';
//         cybadgeVal = document.createElement('span');
//         cybadgeVal.className = 'cybadgeval';
//         cybadgeVal.style = 'background:#0078B9;';
//         cybadgeVal.innerHTML = 'detected';
//         cybadgeElm[i].appendChild(cybadgeKey);
//         cybadgeElm[i].appendChild(cybadgeVal);
//     }
// } else {
//   cyrunning = false;
//   try {
//     cyversion = await cyrestGET('version');
//     cyrunning = true;
//     console.log('cytoscape v' + cyversion["cytoscapeVersion"] + ' is running');
//   } catch(err){
//     cyrunning = false;
//     console.log('cytoscape is not running');
//   }
//   cybadgeElm = document.getElementsByClassName('cytoscape-badge');
//   //just in case there is more than on badge on a page
//   for(let i = 0; i < cybadgeElm.length; i++) {
//     cybadgeKey = document.createElement('span');
//     cybadgeKey.className = 'cybadgekey';
//     cybadgeKey.innerHTML = 'cytoscape';
//     cybadgeVal = document.createElement('span');
//     cybadgeVal.className = 'cybadgeval';
//     if (cyrunning){
//       cybadgeVal.style = 'background:#0078B9;';
//       cybadgeVal.innerHTML = 'v' + cyversion["cytoscapeVersion"];
//     } else {
//       cybadgeVal.style = 'background:#CD5F46;';
//       cybadgeVal.innerHTML = 'not running';
//     }
//     cybadgeElm[i].appendChild(cybadgeKey);
//     cybadgeElm[i].appendChild(cybadgeVal);
//   } 
// }
// }

// // ADD TO: Sessions.js
// async function openSession(fileLocation=null, baseUrl=defaultBaseUrl) {
//     let type = 'file';
//     if(fileLocation === null){
//         fileLocation = './sampleData/sessions/Yeast Perturbation.cys';
//     } else if(fileLocation.startsWith('http')){
//         type = 'url';
//     } 
//     let cmd = 'session open ' + type + '="' + fileLocation;
//     if (inCyBrowser){
//         cybrowser.executeCyCommand(cmd);
//         return null;
//     } else {
//         let res = commandsPOST(cmd, baseUrl=baseUrl);
//         console.log('Opening session file at '+fileLocation);
//         res.then((obj) => { console.log("openSession: completed") });
//         let resData = res.then((obj) => { return JSON.parse(obj)['data'] });
//         return resData;
//     }
// }
// async function closeSession(saveBeforeClosing, filename=null, baseUrl=defaultBaseUrl) {
//     if(saveBeforeClosing) saveSession(filename, baseUrl);
//     let cmd = 'session new';
//     if (inCyBrowser){
//         cybrowser.executeCyCommand(cmd);
//         return null;
//     } else {
//         let res = commandsPOST(cmd, baseUrl=baseUrl);
//         console.log('Closing session');
//         res.then((obj) => { console.log("closeSession: completed") });
//         let resData = res.then((obj) => { return JSON.parse(obj)['data'] });
//         return resData;
//     }
// }
// async function saveSession(filename=null, baseUrl=defaultBaseUrl) {
//     if (filename === null){
//         if (!inCyBrowser){ //use cyrest (if not in CyBrowser) to check name first
//             filename = cyrestGET('session/name', baseUrl=baseUrl);
//             if(filename=="") alert('Save not completed. Provide a filename the first time you save a session.');
//         }       
//         if (inCyBrowser){
//             let res = cybrowser.executeCyCommand('session save');
//         } else {
//             let res = commandsPOST('session save', baseUrl=baseUrl);
//             console.log('Saving session file at '+filename);
//             res.then((obj) => { console.log("saveSession: completed") });
//         }
//     } else {
//         let cmd = 'session save as file=' + filename + '"';
//         if (inCyBrowser){
//             let res = cybrowser.executeCyCommand(cmd);
//         } else {
//             let res = commandsPOST(cmd, baseUrl=baseUrl);
//             console.log('Saving session file at '+filename);
//             res.then((obj) => { console.log("saveSession: completed") });
//         }
//     }
//     return res;
// }