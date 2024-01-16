import { Ui } from "./ui.module.js";

export class Details{
    constructor(id){
        this.ui =new Ui();

        document.getElementById("closeBtn").addEventListener('click' , ()=>{
            document.querySelector(".games").classList.remove("d-none")
            document.querySelector(".details").classList.add("d-none")
        });
        this.getDetails(id)
    }
    async getDetails(idGame){
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ee5643e5c7msh83b03a1b2c6fbf6p17cc01jsncaee0e2eb442',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
const api =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGame}`, options)
const response = await api.json()

this.ui.displayDetails(response)
loading.classList.add("d-none");
}

}