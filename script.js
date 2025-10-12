/*
깃허브에서는 백-엔드를 못써서 전부 클라이언트에서 처리
*/

var data = null;

async function search() {
    if (data == null) data = await fetch('./MusicList.csv').then((res) => res.text());
    searchMusic(data);
}

function searchMusic(data) {
    var input = document.getElementById('input').value.toLowerCase();
    data = data.replace(/null/g, '(미수록)');
    data = data.split('\n');
    var src = '', count = 0;

    for (var n = 0; n < data.length; n++) {
        if (!data[n].toLowerCase().includes(input)) continue;
        var datum = data[n].split('::');
        src += '<tr><td colspan=2 class=title><b>' + datum[0] + '</b></td></tr>';
        src += '<tr><td>금영</td><td class=number>' + datum[2] + '</td></tr>';
        src += '<tr><td width=30%>태진(TJ)</td><td class=number>' + datum[1] + '</td></tr>';
        count++;
    }

    if (count == 0) {
        alert('검색 결과가 없습니다.');
    } else {
        alert('검색 결과가 ' + count + '개 있습니다.');
        document.getElementById('result').innerHTML = src;
    }
}