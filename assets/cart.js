const provinceList = `
 <option value="Hokkaidō">北海道</option>
 <option value="Aomori">青森県</option>
 <option value="Iwate">岩手県</option>
 <option value="Miyagi">宮城県</option>
 <option value="Akita">秋田県</option>
 <option value="Yamagata">山形県</option>
 <option value="Fukushima">福島県</option>
 <option value="Ibaraki">茨城県</option>
 <option value="Tochigi">栃木県</option>
 <option value="Gunma">群馬県</option>
 <option value="Saitama">埼玉県</option>
 <option value="Chiba">千葉県</option>
 <option value="Tōkyō">東京都</option>
 <option value="Kanagawa">神奈川県</option>
 <option value="Niigata">新潟県</option>
 <option value="Toyama">富山県</option>
 <option value="Ishikawa">石川県</option>
 <option value="Fukui">福井県</option>
 <option value="Yamanashi">山梨県</option>
 <option value="Nagano">長野県</option>
 <option value="Gifu">岐阜県</option>
 <option value="Shizuoka">静岡県</option>
 <option value="Aichi">愛知県</option>
 <option value="Mie">三重県</option>
 <option value="Shiga">滋賀県</option>
 <option value="Kyōto">京都府</option>
 <option value="Ōsaka">大阪府</option>
 <option value="Hyōgo">兵庫県</option>
 <option value="Nara">奈良県</option>
 <option value="Wakayama">和歌山県</option>
 <option value="Tottori">鳥取県</option>
 <option value="Shimane">島根県</option>
 <option value="Okayama">岡山県</option>
 <option value="Hiroshima">広島県</option>
 <option value="Yamaguchi">山口県</option>
 <option value="Tokushima">徳島県</option>
 <option value="Kagawa">香川県</option>
 <option value="Ehime">愛媛県</option>
 <option value="Kōchi">高知県</option>
 <option value="Fukuoka">福岡県</option>
 <option value="Saga">佐賀県</option>
 <option value="Nagasaki">長崎県</option>
 <option value="Kumamoto">熊本県</option>
 <option value="Ōita">大分県</option>
 <option value="Miyazaki">宮崎県</option>
 <option value="Kagoshima">鹿児島県</option>
 <option value="Okinawa">沖縄県</option>`;
const targetCountry  = document.getElementById('address_country');
window.addEventListener('load', changeOptions);
targetCountry.addEventListener('change', changeOptions);
function changeOptions() {
  if(targetCountry.value = 'Japan') {
    let targetProvince = document.getElementById('address_province');
    let defaultProvinceValue = targetProvince.getAttribute('data-default');
    let optionsProvince = targetProvince.options;
    targetProvince.innerHTML = provinceList;
    targetProvince.querySelector("option[value='"+defaultProvinceValue+"']").setAttribute("selected", "selected");
    
  }
}
