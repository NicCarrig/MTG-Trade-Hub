
async function searchBtnHandler(event){
    event.preventDefault();
  
    const searchName = document.querySelector('input[name="card-name"]').value;
  
    console.log('search button clicked');
    console.log(searchName);

    const response = await fetch(`https://api.scryfall.com/cards/search?q=${searchName}`);
  
    if(response.ok){
      response.json().then(searchData =>{
        // console.log(searchData);
        // for(let i = 0; i < searchData.data.length; i++){
        //   console.log(searchData.data[i].name);
        //   console.log(searchData.data[i].image_uris.small);
        //   console.log(searchData.data[i].prices.usd);
        // }
        //currently only getting first response
        let card_name = searchData.data[0].name;
        let img_uri = searchData.data[0].image_uris.normal;
        let scryfall_id = searchData.data[0].id;
        
        const addCard = fetch('/api/inventory', {
          method: 'POST',
          body: JSON.stringify({
            card_name,
            img_uri,
            scryfall_id
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then( cardInfo => {
          console.log(cardInfo);
          if (cardInfo.ok) {
            // console.log('cardInfo ok');
            document.location.replace('/collection');
          } 
          else {
            // console.log('cardInfo not ok');
            alert(cardInfo.statusText);
          }   
        })
      })
    }
    else{
      console.log('response not ok');
      alert(response.statusText);
    }
}



document.querySelector('.card-search-form').addEventListener('submit', searchBtnHandler);