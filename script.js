
            
            var rIndex,
                table = document.getElementById("table");
            
            // verification des entrees
            function checkEmptyInput()
            {
                var isEmpty = false,
                    livre = document.getElementById("livre").value,
                    auteur = document.getElementById("auteur").value,
                    anneePub = document.getElementById("anneePub").value;
            
                if(livre === ""){
                    alert("livre Ne doit pas etre vide");
                    isEmpty = true;
                }
                else if(auteur === ""){
                    alert("auteur Ne doit pas etre vide");
                    isEmpty = true;
                }
                else if(anneePub === ""){
                    alert("anneePub Ne doit pas etre vide");
                    isEmpty = true;
                }
                return isEmpty;
            }
            
            // ajout d une ligne dans le tableau
            function addHtmlTableRow()
            {
               
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    livre = document.getElementById("livre").value,
                    auteur = document.getElementById("auteur").value,
                    anneePub = document.getElementById("anneePub").value;
            
                cell1.innerHTML = livre;
                cell2.innerHTML = auteur;
                cell3.innerHTML = anneePub;
                // call the function to set the event to the new row
                selectedRowToInput();

                localStorage.setItem("livre", document.getElementById("livre").value);
                localStorage.setItem("auteur", document.getElementById("auteur").value);
                localStorage.setItem("anneePub",document.getElementById("anneePub").value );

               
            }
            }
            
            // Incrementation du tableau , recuperation du l index
            function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      
                      rIndex = this.rowIndex;
                      document.getElementById("livre").value = this.cells[0].innerHTML;
                      document.getElementById("auteur").value = this.cells[1].innerHTML;
                      document.getElementById("anneePub").value = this.cells[2].innerHTML;
                    };
                }
            }
            selectedRowToInput();
            
            // la fonction marquerlu 

            
function marquerluHtmlTbleSelectedRow()
{
    var livre = document.getElementById("livre").value,
        auteur = document.getElementById("auteur").value,
        anneePub = document.getElementById("anneePub").value;

  livre.style.textDecoration="underline";
  auteur.style.textDecoration="underline";
  anneePub.style.textDecoration="underline";

}
marquerluHtmlTbleSelectedRow();
          
            function removeSelectedRow()
            {
                table.deleteRow(rIndex);
                // supprimer un input
                document.getElementById("livre").value = "";
                document.getElementById("auteur").value = "";
                document.getElementById("anneePub").value = "";

                localStorage.setItem("livre", document.getElementById("livre").value);
                localStorage.setItem("auteur", document.getElementById("auteur").value);
                localStorage.setItem("anneePub",document.getElementById("anneePub").value );

            }
      