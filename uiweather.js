class UI{
    constructor() {
        this.uiContanier = documet.getElementById("content");
        this.city;
    };

    popullateUI (data){
        this.uiContanier.innerHTML=  `


        <div class="card mx-auto mt=5" style="width :18rem">
        <div class="card-body justify-content-center">

        <h5 class="card-title">${data.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max}.Lows of ${data.main.temp_min}</h6>
        <p class="card-text">Wather condition are dedscribed as : ${data.weather[0].dedscription}</p>
        
</div>

</div>
          `

}
}