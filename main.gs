function chBot() {
  
  var mySheet = SpreadsheetApp.getActiveSheet();
  var maxRow = mySheet.getDataRange().getLastRow();
  var numRow = Math.floor(2 + Math.random()* (maxRow-1));

  var strBody = "[info][title]ノッチ's セレクト「今日の1曲」[/title]" +
  mySheet.getRange(numRow,1).getValue() + " / " + mySheet.getRange(numRow,2).getValue() + "\n" + mySheet.getRange(numRow,3).getValue() + "[/info]";

  var cwClient = ChatWorkClient.factory({token: 'tokenid'});
  cwClient.sendMessage({room_id: 'roomid', body: "おはようございます:)\n今日も1日頑張りましょう！" + strBody});

  mySheet.deleteRows(numRow);
}
