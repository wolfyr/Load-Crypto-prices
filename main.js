document.addEventListener("DOMContentLoaded", loadUsers);
document.getElementById('button').addEventListener('click', loadUsers);
function loadUsers(){
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.coinmarketcap.com/v1/ticker/', true);

  xhr.onload = function(){
    if(this.status == 200){
      var coins = JSON.parse(this.responseText);
      console.log(coins);


      var output = '';
      for(var i in coins){
        output +=
        '<tr>' +
        '<td>'+coins[i].rank+'</td>' +
        '<td>'+coins[i].id+'</td>' +
        '<td>'+coins[i].percent_change_24h+ '%' + '</td>' +
        '<td>'+coins[i].price_usd+'</td>' +
        '<td>'+coins[i].price_btc+'</td>' +
        '</tr>' +

        '</tbody>';

      }

      document.getElementById('coins').innerHTML = output;
    }
  }

  xhr.send();
}
