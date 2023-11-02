let visitCount = localStorage.getItem('visitCount');
if (visitCount === null){
    visitCount =0;
}else{
    visitCount = parseInt(visitCount);
}

const visitCountElement = document.getElementById('visit-count');
visitCountElement.textContent =visitCount;

visitCount++;
visitCountElement.textContent=visitCount;

localStorage.setItem('visitCount', visitCount.toString());