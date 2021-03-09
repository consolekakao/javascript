/**
 *
 * date : 2021.03.09
 * auth : Yun Ji Hwan
 * description : 시작 종료일 timepick의 경우 사용자가 수동 입력시 yyyy-MM-dd 포맷으로 자동변경.
 *
 */


function date_format_check(arg,id) {
  let year, month, date, ele, data;
  data = new Date();
  ele = document.getElementById(id);
  year = data.getFullYear();
  month = data.getMonth() + 1;
  date = data.getDate();
  if (month.toString().length == 1) month = '0' + month;
  if (date.toString().length == 1) date = '0' + date
  const date_pattern_10 = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/; //2021-03-09
  const date_pattern_8 = /^\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;         //21-03-09
  const date_pattern_6 = /^\d{2}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[0-1])$/;           //210309
  const date_pattern_4 = /^(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[0-1])$/;               //0309
  if (date_pattern_10.test(arg) || date_pattern_8.test(arg) || date_pattern_6.test(arg) || date_pattern_4.test(arg)) {
    if (date_pattern_10.test(arg)) return;
    if (date_pattern_8.test(arg)) ele.value = year.toString().substring(0, 2) + arg;
    if (date_pattern_6.test(arg)) ele.value = year.toString().substring(0, 2) + arg.substring(0, 2) + '-' + arg.substring(2, 4) + '-' + arg.substring(4, 6);
    if (date_pattern_4.test(arg)) ele.value = year + '-' + arg.substring(0, 2) + '-' + arg.substring(2, 4);
  } else {
    if (id == 'iLastVisitStartDt' || id == 'iReservationStartDt' || id == 'iRegistStartDt')
      return document.getElementById(id).value = '1990-01-01' //시작일이면 과거로 날짜 지정.
    else
      return document.getElementById(id).value = year + '-' + month + '-' + date; //종료일이면 오늘 날짜로 지정.
  }
}

