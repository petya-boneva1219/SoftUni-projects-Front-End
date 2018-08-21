let firstLetter = "";
let lastName= "";
let company= "";
let branch="";


$("#firstName").keyup(function() {
   firstLetter= $("#firstName").val().charAt(0).toLowerCase();
   attach(firstLetter);
});

$("#lastName").keyup(function() {
   lastName=$("#lastName").val().toLowerCase();
   attach(lastName);
});

$("#company").keyup(function() {
   company=$("#company").val().toLowerCase();;
   attach(company);
});

$("#branch").keyup(function() {
   branch=$("#branch").val().toLowerCase();;
   attach(branch);
});

function attach (value) {
   let result =`${firstLetter}.${lastName}@${branch}-${company}.com`;
   $("#email").val(result);
}