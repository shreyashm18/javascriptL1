function booking(){
    var name = document.forms['myForm']['userName'].value;
    var phone = document.forms['myForm']['phoneNumber'].value;
    var from_journey = document.forms['myForm']['fromStation'].value;
    var to_journey = document.forms['myForm']['toStation'].value;
    var date_of_journey = document.forms['myForm']['jDate'].value;
    var time_of_journey = document.forms['myForm']['jTime'].value;
    var ticket_class =  document.forms['myForm']['seatClass'].value;
    var seats_number = document.forms['myForm']['Psngr'].value;
    var status = false;
    const error_array = [];
    // console.log('name',name);
    // console.log('phone',phone);
    
    // console.log('time_of_journey',time_of_journey);
    // console.log('ticket_class',ticket_class);
    // console.log('ticket_class',parseInt(ticket_class));
    // console.log('seats_number',seats_number);
    // console.log(typeof error_array);
    if(name == '' || name.trim().length == 0 || !isNaN(name)){
        
            var name_error = "Please enter your name";
            status = true;
            error_array.push(name_error);
        }
        
    if(!(typeof Number(phone) == 'number') || !(phone.length == 10)){
            var phone_error = "Please enter valid phone number";
            status = true;
            error_array.push(phone_error);
    }
    if(isNaN(parseInt(ticket_class)) || !(parseInt(ticket_class)==1 || parseInt(ticket_class)==2 || parseInt(ticket_class)==3)){
        ticket_class_error = "Please enter seat class between 1st,2nd or 3rd ";
        status = true;
        error_array.push(ticket_class_error);
        console.log('class between',(1<= parseInt(ticket_class) <= 3))
    }
    if(isNaN(seats_number) || seats_number == 0){
        seat_number_error = 'Please enter valid number of seats'
        status = true;
        error_array.push(seat_number_error);
    }
    
    if(!date_of_journey){
        date_error = 'Please select date'
        status = true;
        error_array.push(date_error);
        
    }

    var CurrentDate = new Date();
    CurrentDate.setHours(0,0,0,0);
    selected_date = new Date(date_of_journey);
    selected_date.setHours(0,0,0,0);

    // console.log('date_of_journey',selected_date);
    // console.log('date_of_journey',typeof selected_date);
    // console.log('today',CurrentDate);
    // console.log('today',typeof CurrentDate);

    if(selected_date < CurrentDate){
        date_error = 'Please select ' + CurrentDate.toDateString() + " or above date";
        status = true;
        error_array.push(date_error);
    }

    if(!time_of_journey){
        time_error = 'Please select time'
        status = true;
        error_array.push(time_error);
    }

    if(from_journey == to_journey){
        destination_error = "From station and destination station can't be same, Please select different stations"
        status = true;
        error_array.push(destination_error);
    }


    console.log('status',status);
    if(status){
        var txt = '';
        for (x in error_array){
            txt += error_array[x] + " <br>";
        }
        document.getElementById('abc').innerHTML = txt;
    }
    else{
        var random_ticket_no = Math.floor(Math.random() * 1000000)+111111;
        document.getElementById('form').innerHTML = "<b> Your Ticket </b> <br>" +
                                                    "Ticket Number : <b>" + random_ticket_no + "</b>" +
                                                    "<br> Name : <i>" + name +  " </i>Mobile No : <i>" + phone + "</i>" +
                                                    "<br> Journey From : <i>" + from_journey + "</i>" +
                                                    "<br> Journey To : <i>" + to_journey + "</i>" +
                                                    "<br> Ticket Class <i>" + ticket_class + " </i>Number of seats : <i>" + seats_number + "</i>" +
                                                    "<br> Date : <i>" + date_of_journey + " </i>Time : <i>" + time_of_journey + "</i>"
    }
    
}