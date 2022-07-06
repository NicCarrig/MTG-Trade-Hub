async function searchBtnHandler(event){
    event.preventDefault();
  
    const searchName = 'Notion';
  
    const response = await fetch(`https://api.scryfall.com/cards/search?q=notion`);
  
    response.json().then(result => {
      console.log(result);
    })
}
