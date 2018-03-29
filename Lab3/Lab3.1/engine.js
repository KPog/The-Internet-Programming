
var t = new Array(9);

function ai() {
  var id = Math.floor(Math.random() * 9);
  t[id] ? ai() : move(id, 'machine');
}

function checkEnd() {
  if (t[0]=='machine' && t[1]=='machine' && t[2]=='machine' || t[0]=='player' && t[1]=='player' && t[2]=='player')  return true;
  if (t[3]=='machine' && t[4]=='machine' && t[5]=='machine' || t[3]=='player' && t[4]=='player' && t[5]=='player')  return true;
  if (t[6]=='machine' && t[7]=='machine' && t[8]=='machine' || t[6]=='player' && t[7]=='player' && t[8]=='player')  return true;
  if (t[0]=='machine' && t[3]=='machine' && t[6]=='machine' || t[0]=='player' && t[3]=='player' && t[6]=='player')  return true;
  if (t[1]=='machine' && t[4]=='machine' && t[7]=='machine' || t[1]=='player' && t[4]=='player' && t[7]=='player')  return true;
  if (t[2]=='machine' && t[5]=='machine' && t[8]=='machine' || t[2]=='player' && t[5]=='player' && t[8]=='player')  return true;
  if (t[0]=='machine' && t[4]=='machine' && t[8]=='machine' || t[0]=='player' && t[4]=='player' && t[8]=='player')  return true;
  if (t[2]=='machine' && t[4]=='machine' && t[6]=='machine' || t[2]=='player' && t[4]=='player' && t[6]=='player')  return true;
  if(t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8]) return true;
}

function move(id, role) {
  if(t[id]) return false;
  t[id] = role;
  document.getElementById(id).className = 'cell ' + role;

  !checkEnd() ? (role == 'player') ? ai() : null : reset(role);
}

function reset(role) {
  var message = "Победил " + role;
  alert(message);

  setTimeout("location.reload(true);", 900);
  //location.reload();
}

function viewBlock(){
  document.getElementById("viewBlock").style.display = "block";
  document.getElementById("start").style.visibility = "hidden";
};
