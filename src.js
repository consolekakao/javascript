let column_defs, grid_options;
/**
 * ag-grid 컬럼정의
 */
column_defs = [
  {
    headerName: "체인 번호",
    field: "CHAIN_NO",
    width: 120,
    checkboxSelection: true,
    headerCheckboxSelection: true,   //header에 전체선택 체크박스 표시 여부
    headerCheckboxSelectionFilteredOnly: true
  },
  {
    headerName: "안경원 번호",
    field: "OPT_NO",
    width: 100
  },
  {
    headerName: "안경원명",
    field: "CHAIN_OPT_NAME",
    width: 240
  },
  {
    headerName: "일마감 날짜",
    field: "CLOSE_DT",
    width: 200
  },
  {
    headerName: "일마감 횟수",
    field: "CLOSE_COUNT",
    width: 120
  },
  {
    headerName: "상태",
    field: "STATUS",
    width: 120
  }
];
grid_options = {
  columnDefs: column_defs,    //열 정의 배열
  enableColResize: true,
  animateRows: true, //행 애니메이
  enableSorting: false,
  rowSelection: 'multiple',
  toolPanelSuppressSideButtons: true,
  defaultColDef: {
    suppressMenu: true,
    cellStyle : function(params) {
      return {
        'border-right': '1px solid #d9dcde'
      }
    }
  },
  rowClassRules: {
    'ag_success_cls': function(params){
      return params.data.STATUS == "성공";
    },
    'ag_fail_cls': function(params) {
      return params.data.STATUS == "실패";
    }
  },
  overlayLoadingTemplate: '<div class="loader loadingImg" id="loader-1" style="position: absolute; z-index: 999; left: 50%; top:50%; transform: translate(-50%, -50%); display: block" ><span style="margin: 0px; padding:0px; font-size: 15px; font-weight: bold"></br></br></br></br></br>loading ...&nbsp;&nbsp;</span></div>',
  overlayNoRowsTemplate: '<span class="ag-overlay-loading-center">검색결과가 없습니다.</span>',
};
