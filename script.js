const button = document.querySelector('.input_interface_button');
const menu = document.querySelector('.input_interface_menu');

button.addEventListener('click', function(){
    menu.classList.toggle('active');
    console.log(1);
});

function readExcel() {
    let input = event.target;
    let reader = new FileReader();
    var index = 1;
    reader.onload = function () {
        let data = reader.result;
        let workBook = XLSX.read(data, { type: 'binary' });
        workBook.SheetNames.forEach(function (sheetName) {
            console.log('SheetName: ' + sheetName);
            let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
            console.log(JSON.stringify(rows));
            console.log(rows[index]['출발역']);
        })
    };
    reader.readAsBinaryString(input.files[0]);
}
