
function getDob()
{
    //Get Age 
    const age_val =document.getElementById('age').value;
    //Get User Date of Birth, (Day, Month, && Year)
    const dob_Val=document.getElementById('dob').value;
    const dob_date =new Date(dob_Val);
    const dob_day=dob_date.getDate();
    const dob_month =dob_date.getMonth();
    const dob_year =dob_date.getFullYear();
    //Get Current Date, (Day, Month, && Year)
    const date=new Date;
    const curr_day=date.getDate();
    const curr_month=date.getMonth() + 1;
    const curr_year =date.getFullYear();
    const userAge=curr_year - dob_year;
    alert(userAge)
 
    //  if(dob_month < curr_month || dob_month == curr_month && dob_day < curr_day){
    //     alert( userAge --); 
    //  }else{
    //     alert(userAge ++);
    //  }
    // const month_diff= Date.now() - dob_Val.getTime();
    // alert(month_diff);
   // alert(year )
    document.getElementById('cdate').innerHTML="Today is" + date;
    document.getElementById('ageval').innerHTML="Your age is" + age_val;
 
 
    if(dob_Val != '' ){
       
       let dob_val =prompt("Your Date of Birth is-", dob_Val);
       let curr_val =prompt("Today Date is-", `${curr_day}-${curr_month}-${curr_year}`);
       document.getElementById("output").innerHTML= "Your date of Birth is"+ "<br>" + dob_val + "\n"+ "Today is"+ curr_val;
        alert(dob_Val);
    }
 
    //document
}
